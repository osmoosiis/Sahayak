"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, FileText } from "lucide-react"

// Sample vaccination data
const vaccinationData = [
  {
    id: "1",
    patientName: "John Doe",
    patientId: "P001",
    age: 4,
    vaccine: "Polio",
    dose: "1st Dose",
    date: "2023-11-15",
    location: "Village Health Center",
    administrator: "Nurse Sarah",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    patientId: "P002",
    age: 2,
    vaccine: "MMR",
    dose: "1st Dose",
    date: "2023-11-16",
    location: "Mobile Clinic",
    administrator: "Dr. Michael",
  },
  {
    id: "3",
    patientName: "Robert Johnson",
    patientId: "P003",
    age: 1,
    vaccine: "DTP",
    dose: "2nd Dose",
    date: "2023-11-17",
    location: "Village Health Center",
    administrator: "Nurse Sarah",
  },
  {
    id: "4",
    patientName: "Emily Brown",
    patientId: "P004",
    age: 3,
    vaccine: "Hepatitis B",
    dose: "3rd Dose",
    date: "2023-11-18",
    location: "Mobile Clinic",
    administrator: "Dr. Michael",
  },
  {
    id: "5",
    patientName: "William Davis",
    patientId: "P005",
    age: 5,
    vaccine: "Polio",
    dose: "Booster",
    date: "2023-11-19",
    location: "Village Health Center",
    administrator: "Nurse Sarah",
  },
]

export function VaccinationTable() {
  const [vaccinations, setVaccinations] = useState(vaccinationData)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient Name</TableHead>
            <TableHead>Patient ID</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Vaccine</TableHead>
            <TableHead>Dose</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Administrator</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vaccinations.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.patientName}</TableCell>
              <TableCell>{record.patientId}</TableCell>
              <TableCell>{record.age}</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  {record.vaccine}
                </Badge>
              </TableCell>
              <TableCell>{record.dose}</TableCell>
              <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
              <TableCell>{record.location}</TableCell>
              <TableCell>{record.administrator}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

