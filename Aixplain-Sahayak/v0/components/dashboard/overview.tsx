"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Iron Tablets",
    total: 580,
    threshold: 200,
  },
  {
    name: "Polio Drops",
    total: 350,
    threshold: 150,
  },
  {
    name: "Sanitary Pads",
    total: 120,
    threshold: 100,
  },
  {
    name: "Vitamins",
    total: 430,
    threshold: 200,
  },
  {
    name: "Antibiotics",
    total: 280,
    threshold: 150,
  },
  {
    name: "Bandages",
    total: 220,
    threshold: 100,
  },
  {
    name: "Syringes",
    total: 310,
    threshold: 200,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} className="fill-primary" />
        <Bar dataKey="threshold" fill="#ff4d4f" radius={[4, 4, 0, 0]} className="fill-red-400 opacity-50" />
      </BarChart>
    </ResponsiveContainer>
  )
}

