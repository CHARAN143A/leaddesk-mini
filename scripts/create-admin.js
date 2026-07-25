const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  await prisma.admin.upsert({
    where: {
      email: "admin@example.com",
    },
    update: {},
    create: {
      email: "admin@example.com",
      password: hashedPassword,
    },
  });

  console.log("✅ Admin created successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });