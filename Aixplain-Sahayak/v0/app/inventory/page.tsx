import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { InventoryTable } from "@/components/inventory/inventory-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InventoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Inventory Management</h2>
          <div className="flex items-center space-x-2">
            <Button>Add New Item</Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search inventory..." className="max-w-sm" />
          <Button variant="outline">Search</Button>
        </div>
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="low-stock">Low Stock</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Inventory Items</CardTitle>
                <CardDescription>Manage and view all items in your inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <InventoryTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="low-stock" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Items</CardTitle>
                <CardDescription>Items that are below their minimum threshold</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Low stock items will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expiring" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Expiring Soon</CardTitle>
                <CardDescription>Items that will expire within the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Items expiring soon will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="categories" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
                <CardDescription>View inventory by category</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Categorized inventory will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

