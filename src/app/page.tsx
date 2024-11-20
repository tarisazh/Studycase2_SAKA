import Table from "@/components/Table";
import { employees } from "@/data/employee";

type Employee = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around bg-slate-50">

      <section>
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Generic Table</h1>

        <Table columnDefs={[
          {
            title: "Name",
            render: (rowData) => `${rowData.firstName} ${rowData.lastName}`
          },
          {
            title: "Age",
            field: "age"
          },
          {
            title: "Email",
            field: "email"
          },
          {
            title: "Phone",
            field: "phone"
          }
        ]}
          data={employees}
        />
      </section>

    </main>
  );
}
