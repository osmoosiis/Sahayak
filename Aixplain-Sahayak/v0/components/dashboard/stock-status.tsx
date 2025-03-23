"use client"

import { Progress } from "@/components/ui/progress"

const stockItems = [
  {
    id: "1",
    name: "Iron Tablets",
    current: 580,
    max: 1000,
    unit: "tablets",
    expiry: "2024-12-15",
    status: "good",
  },
  {
    id: "2",
    name: "Polio Drops",
    current: 350,
    max: 500,
    unit: "vials",
    expiry: "2024-08-30",
    status: "good",
  },
  {
    id: "3",
    name: "Sanitary Pads",
    current: 120,
    max: 500,
    unit: "packs",
    expiry: "2025-03-10",
    status: "low",
  },
  {
    id: "4",
    name: "Vitamins",
    current: 430,
    max: 800,
    unit: "bottles",
    expiry: "2024-11-05",
    status: "good",
  },
  {
    id: "5",
    name: "Antibiotics",
    current: 280,
    max: 600,
    unit: "strips",
    expiry: "2024-07-22",
    status: "expiring",
  },
]

export function StockStatus() {
  return (
    <div className="space-y-4">
      {stockItems.map((item) => (
        <div key={item.id} className="grid grid-cols-6 gap-4 items-center">
          <div className="col-span-2">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-muted-foreground">Expires: {new Date(item.expiry).toLocaleDateString()}</p>
          </div>
          <div className="col-span-3">
            <Progress
              value={(item.current / item.max) * 100}
              className={
                item.status === "low" ? "bg-amber-100" : item.status === "expiring" ? "bg-red-100" : "bg-slate-100"
              }
            />
          </div>
          <div className="col-span-1 text-right">
            <p className="text-sm font-medium">
              {item.current} / {item.max}
            </p>
            <p className="text-xs text-muted-foreground">{item.unit}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

