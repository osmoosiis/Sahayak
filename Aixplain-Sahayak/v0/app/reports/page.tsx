import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ReportChart } from "@/components/reports/report-chart"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <div className="flex items-center space-x-2">
            <Button>Generate New Report</Button>
          </div>
        </div>
        <Tabs defaultValue="stock" className="space-y-4">
          <TabsList>
            <TabsTrigger value="stock">Stock Usage</TabsTrigger>
            <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
            <TabsTrigger value="expiry">Expiry Analysis</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="stock" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="supplements">Supplements</SelectItem>
                    <SelectItem value="vaccines">Vaccines</SelectItem>
                    <SelectItem value="hygiene">Hygiene</SelectItem>
                    <SelectItem value="medication">Medication</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline">Export Report</Button>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Stock Usage Report</CardTitle>
                <CardDescription>Analysis of stock usage over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ReportChart />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vaccinations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Vaccination Report</CardTitle>
                <CardDescription>Analysis of vaccination data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Vaccination reports will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expiry" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Expiry Analysis</CardTitle>
                <CardDescription>Analysis of item expiry patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Expiry analysis reports will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>Create and view custom reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Custom report builder will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

