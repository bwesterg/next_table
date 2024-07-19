import { Person } from "@/people";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Person>[] = [
  {
    header: "Indiv Person ID",
    accessorKey: "id"
  },
  {
    header: "First Name",
    accessorKey: "first_name"
  },
  {
    header: "Last Name",
    accessorKey: "last_name"
  },
  {
    header: "Email",
    accessorKey: "email"
  },
  {
    header: "Gender",
    accessorKey: "gender"
  },
  {
    header: "DOB",
    accessorKey: "date_of_birth"
  },
]