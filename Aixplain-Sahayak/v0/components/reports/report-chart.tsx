"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Week 1",
    ironTablets: 120,
    polioDrops: 45,
    sanitaryPads: 80,
    vitamins: 65,
  },
  {
    name: "Week 2",
    ironTablets: 170,
    polioDrops: 60,
    sanitaryPads: 95,
    vitamins: 85,
  },
  {
    name: "Week 3",
    ironTablets: 140,
    polioDrops: 50,
    sanitaryPads: 75,
    vitamins: 70,
  },
  {
    name: "Week 4",
    ironTablets: 180,
    polioDrops: 70,
    sanitaryPads: 110,
    vitamins: 90,
  },
]

export function ReportChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="ironTablets" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="polioDrops" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="sanitaryPads" stroke="#ffc658" strokeWidth={2} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="vitamins" stroke="#ff8042" strokeWidth={2} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

