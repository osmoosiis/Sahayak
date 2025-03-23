"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2 } from "lucide-react"

// Sample inventory data
const inventoryData = [
  {
    id: "1",
    name: "Iron Tablets",
    category: "Supplements",
    quantity: 580,
    unit: "tablets",
    threshold: 200,
    expiry: "2024-12-15",
    batchNumber: "IT2023-45",
    status: "In Stock",
  },
  {
    id: "2",
    name: "Polio Drops",
    category: "Vaccines",
    quantity: 350,
    unit: "vials",
    threshold: 150,
    expiry: "2024-08-30",
    batchNumber: "PD2023-78",
    status: "In Stock",
  },
  {
    id: "3",
    name: "Sanitary Pads",
    category: "Hygiene",
    quantity: 120,
    unit: "packs",
    threshold: 200,
    expiry: "2025-03-10",
    batchNumber: "SP2023-32",
    status: "Low Stock",
  },
  {
    id: "4",
    name: "Vitamins",
    category: "Supplements",
    quantity: 430,
    unit: "bottles",
    threshold: 200,
    expiry: "2024-11-05",
    batchNumber: "VT2023-56",
    status: "In Stock",
  },
  {
    id: "5",
    name: "Antibiotics",
    category: "Medication",
    quantity: 280,
    unit: "strips",
    threshold: 150,
    expiry: "2024-07-22",
    batchNumber: "AB2023-90",
    status: "Expiring Soon",
  },
  {
    id: "6",
    name: "Bandages",
    category: "First Aid",
    quantity: 220,
    unit: "boxes",
    threshold: 100,
    expiry: "2025-05-18",
    batchNumber: "BA2023-23",
    status: "In Stock",
  },
  {
    id: "7",
    name: "Syringes",
    category: "Medical Supplies",
    quantity: 310,
    unit: "pieces",
    threshold: 200,
    expiry: "2025-02-14",
    batchNumber: "SY2023-67",
    status: "In Stock",
  },
]

export function InventoryTable() {
  const [inventory, setInventory] = useState(inventoryData)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Threshold</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Batch Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>
                {item.quantity} {item.unit}
              </TableCell>
              <TableCell>{item.threshold}</TableCell>
              <TableCell>{new Date(item.expiry).toLocaleDateString()}</TableCell>
              <TableCell>{item.batchNumber}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    item.status === "Low Stock"
                      ? "bg-amber-100 text-amber-800 hover:bg-amber-100"
                      : item.status === "Expiring Soon"
                        ? "bg-red-100 text-red-800 hover:bg-red-100"
                        : "bg-green-100 text-green-800 hover:bg-green-100"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
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

