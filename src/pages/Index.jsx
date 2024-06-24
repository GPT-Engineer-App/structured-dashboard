import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4 space-y-4">
      <h1 className="text-3xl text-center mb-4">Dashboard</h1>
      <div className="w-full max-w-6xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button variant="outline">Action 1</Button>
              <Button variant="outline">Action 2</Button>
              <Button variant="outline">Action 3</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <ScrollArea className="h-64">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Column 1</TableHead>
                        <TableHead>Column 2</TableHead>
                        <TableHead>Column 3</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Data 1</TableCell>
                        <TableCell>Data 2</TableCell>
                        <TableCell>Data 3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Data 4</TableCell>
                        <TableCell>Data 5</TableCell>
                        <TableCell>Data 6</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="tab2">
                <p>Content for Tab 2</p>
              </TabsContent>
              <TabsContent value="tab3">
                <p>Content for Tab 3</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;