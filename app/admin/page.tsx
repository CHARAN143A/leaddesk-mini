import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import StatusSelect from "@/components/StatusSelect";
import Footer from "@/components/Footer";
type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function AdminPage({
  searchParams,
}: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  const { search = "" } = await searchParams;

const leads = await prisma.lead.findMany({
  where: {
    OR: [
      {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      {
        email: {
          contains: search,
          mode: "insensitive",
        },
      },
    ],
  },
  orderBy: {
    createdAt: "desc",
  },
});

  return (
    <>
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <form className="mb-6">
  <input
    type="text"
    name="search"
    defaultValue={search}
    placeholder="Search by name or email"
    className="border rounded p-2 w-80"
  />

  <button
    type="submit"
    className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
  >
    Search
  </button>
</form>

      <table className="w-full bg-white rounded-lg shadow">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Budget</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b text-center">
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.budget}</td>
              <td className="p-3">
    <StatusSelect
        id={lead.id}
        currentStatus={lead.status}
    />
</td>
              <td className="p-3">
                {new Date(lead.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </main>
    <Footer/>
    </>
  );
}