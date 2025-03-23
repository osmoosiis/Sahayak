"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts"

const vaccineData = [
  { name: "Polio", value: 432, color: "#0088FE" },
  { name: "MMR", value: 321, color: "#00C49F" },
  { name: "DTP", value: 287, color: "#FFBB28" },
  { name: "Hepatitis B", value: 196, color: "#FF8042" },
  { name: "BCG", value: 178, color: "#8884d8" },
]

const ageData = [
  { name: "0-1 years", value: 356, color: "#0088FE" },
  { name: "1-2 years", value: 412, color: "#00C49F" },
  { name: "2-5 years", value: 498, color: "#FFBB28" },
  { name: "5+ years", value: 148, color: "#FF8042" },
]

export function VaccinationStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Vaccinations by Type</CardTitle>
          <CardDescription>Distribution of vaccines administered</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={vaccineData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {vaccineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vaccinations by Age Group</CardTitle>
          <CardDescription>Distribution of vaccines by patient age</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ageData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

