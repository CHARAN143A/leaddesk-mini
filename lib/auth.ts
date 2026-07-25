import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

     async authorize(credentials) {
  if (!credentials?.email || !credentials?.password) {
    console.log("Missing credentials");
    return null;
  }

  const admin = await prisma.admin.findUnique({
    where: {
      email: credentials.email,
    },
  });

  console.log("Admin found:", admin);

  if (!admin) {
    console.log("Admin not found");
    return null;
  }

  const validPassword = await bcrypt.compare(
    credentials.password,
    admin.password
  );

  console.log("Password valid:", validPassword);

  if (!validPassword) {
    return null;
  }

  return {
    id: admin.id,
    email: admin.email,
  };
}
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};