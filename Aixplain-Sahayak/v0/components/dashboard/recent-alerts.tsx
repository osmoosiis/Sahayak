"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react"

const alerts = [
  {
    id: "1",
    type: "low-stock",
    item: "Iron Tablets",
    message: "Stock below threshold (50 remaining)",
    severity: "high",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "expiring",
    item: "Polio Drops",
    message: "Batch #P2023-45 expires in 15 days",
    severity: "medium",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    type: "low-stock",
    item: "Sanitary Pads",
    message: "Stock below threshold (20 remaining)",
    severity: "high",
    timestamp: "1 day ago",
  },
  {
    id: "4",
    type: "expiring",
    item: "Vitamins",
    message: "Batch #V2023-12 expires in 7 days",
    severity: "high",
    timestamp: "2 days ago",
  },
  {
    id: "5",
    type: "ai-prediction",
    item: "Antibiotics",
    message: "Predicted to run out in 14 days based on usage",
    severity: "low",
    timestamp: "3 days ago",
  },
]

export function RecentAlerts() {
  return (
    <div className="space-y-8">
      {alerts.map((alert) => (
        <div key={alert.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback
              className={
                alert.severity === "high"
                  ? "bg-red-100 text-red-500"
                  : alert.severity === "medium"
                    ? "bg-amber-100 text-amber-500"
                    : "bg-blue-100 text-blue-500"
              }
            >
              {alert.severity === "high" ? (
                <AlertCircle className="h-4 w-4" />
              ) : alert.severity === "medium" ? (
                <AlertTriangle className="h-4 w-4" />
              ) : (
                <CheckCircle2 className="h-4 w-4" />
              )}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{alert.item}</p>
            <p className="text-sm text-muted-foreground">{alert.message}</p>
          </div>
          <div className="ml-auto font-medium text-xs text-muted-foreground">{alert.timestamp}</div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        View All Alerts
      </Button>
    </div>
  )
}

