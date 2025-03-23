import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VaccinationTable } from "@/components/vaccinations/vaccination-table"
import { VaccinationStats } from "@/components/vaccinations/vaccination-stats"

export default function VaccinationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Vaccination Tracking</h2>
          <div className="flex items-center space-x-2">
            <Button>Record New Vaccination</Button>
          </div>
        </div>
        <Tabs defaultValue="records" className="space-y-4">
          <TabsList>
            <TabsTrigger value="records">Vaccination Records</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
            <TabsTrigger value="schedule">Vaccination Schedule</TabsTrigger>
          </TabsList>
          <TabsContent value="records" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vaccination Records</CardTitle>
                <CardDescription>View and manage vaccination records</CardDescription>
              </CardHeader>
              <CardContent>
                <VaccinationTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="stats" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vaccination Statistics</CardTitle>
                <CardDescription>Overview of vaccination coverage and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <VaccinationStats />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schedule" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vaccination Schedule</CardTitle>
                <CardDescription>Upcoming vaccination campaigns and schedules</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Vaccination schedule information will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

