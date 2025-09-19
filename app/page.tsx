"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { KPIMetric } from "@/components/kpi-metric"

export default function ValuationDashboard() {
  const totalSDE = 470000
  const sdeMultiple = 3.2
  const businessValuation = totalSDE * sdeMultiple

  const [selectedPillar, setSelectedPillar] = useState<string | null>(null)

  const kpiData = [
    {
      priority: 1,
      name: "Recurring Revenue %",
      value: "78%",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "60%-70%",
      bestCaseBenchmark: "85%-90%",
      pillar: "biz-dev" as const,
    },
    {
      priority: 2,
      name: "Gross Margin %",
      value: "68%",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "55%-65%",
      bestCaseBenchmark: "70%-75%",
      pillar: "talent" as const,
    },
    {
      priority: 3,
      name: "Client Retention Rate",
      value: "92%",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "85%-90%",
      bestCaseBenchmark: "95%+",
      pillar: "operations" as const,
    },
    {
      priority: 4,
      name: "Revenue Growth Rate (CAGR)",
      value: "15%",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "5%-8%",
      bestCaseBenchmark: "12%-15%+",
      pillar: "biz-dev" as const,
    },
    {
      priority: 5,
      name: "Client Concentration",
      value: "18%",
      trend: "down" as const,
      isGoodTrend: true,
      avgBenchmark: "<25%",
      bestCaseBenchmark: "<10%",
      pillar: "biz-dev" as const,
    },
    {
      priority: 6,
      name: "Revenue per Employee (FTE)",
      value: "$185K",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "$130K-$160K",
      bestCaseBenchmark: "$200K-$250K",
      pillar: "talent" as const,
    },
    {
      priority: 7,
      name: "Client Profitability Ratio",
      value: "2.8x",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "2.2x",
      bestCaseBenchmark: "3.5x",
      pillar: "operations" as const,
    },
    {
      priority: 8,
      name: "Effective Hourly Rate",
      value: "$165",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "$140",
      bestCaseBenchmark: "$200",
      pillar: "operations" as const,
    },
    {
      priority: 9,
      name: "Advisory Revenue %",
      value: "42%",
      trend: "up" as const,
      isGoodTrend: true,
      avgBenchmark: "30%",
      bestCaseBenchmark: "55%",
      pillar: "biz-dev" as const,
    },
    {
      priority: 10,
      name: "Staff Turnover",
      value: "12%",
      trend: "down" as const,
      isGoodTrend: true,
      avgBenchmark: "18%",
      bestCaseBenchmark: "8%",
      pillar: "talent" as const,
    },
  ]

  const filteredKPIs = selectedPillar ? kpiData.filter((kpi) => kpi.pillar === selectedPillar) : kpiData

  const servicePillars = [
    { id: "biz-dev", label: "Business Development", order: 1, color: "#3b82f6" }, // Blue
    { id: "talent", label: "Talent", order: 2, color: "#10b981" }, // Green
    { id: "operations", label: "Operations", order: 3, color: "#f59e0b" }, // Orange
  ]

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">SDE Valuation Dashboard</h2>
          <p className="text-muted-foreground">Understand your firm's value and key performance drivers</p>
        </div>

        {/* Main Valuation Display */}
        <Card className="bg-accent/5 border-accent">
          <CardContent className="py-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-2">${businessValuation.toLocaleString()}</div>
              <div className="text-xl text-muted-foreground">Business Valuation</div>
              <div className="text-sm text-muted-foreground mt-2">
                ${totalSDE.toLocaleString()} SDE × {sdeMultiple.toFixed(1)}x Multiple
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-center">Service Pillars</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center gap-12">
                {servicePillars.map((pillar) => (
                  <div key={pillar.id} className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-foreground">{pillar.order}</div>
                      <div
                        className="w-8 h-8 rounded border-2"
                        style={{
                          borderColor: pillar.color,
                          backgroundColor: pillar.color,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-center">{pillar.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 flex-wrap">
                <Button
                  variant={selectedPillar === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPillar(null)}
                >
                  All KPIs
                </Button>
                {servicePillars.map((pillar) => (
                  <Button
                    key={pillar.id}
                    variant={selectedPillar === pillar.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPillar(pillar.id)}
                  >
                    {pillar.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - SDE and its inputs */}
          <div className="space-y-6">
            <Card className="bg-blue-50/50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Seller's Discretionary Earnings (SDE)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">${totalSDE.toLocaleString()}</div>
                <p className="text-sm text-muted-foreground">The foundation of your business value</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SDE Components</CardTitle>
                <p className="text-sm text-muted-foreground">The building blocks of your SDE calculation</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="font-medium">Earnings Before Tax (EBT)</span>
                    <span className="font-bold">$250,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="font-medium">Owner's Salary</span>
                    <span className="font-bold">$150,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="font-medium">Depreciation & Amortization</span>
                    <span className="font-bold">$25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="font-medium">Discretionary Expenses</span>
                    <span className="font-bold">$30,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="font-medium">Non-recurring Items</span>
                    <span className="font-bold">$15,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - SDE Multiple and its KPI drivers */}
          <div className="space-y-6">
            <Card className="bg-green-50/50 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">SDE Multiple</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">{sdeMultiple.toFixed(1)}x</div>
                <p className="text-sm text-muted-foreground">Driven by your operational excellence</p>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Industry Range</div>
                  <div className="text-sm font-medium">2.5x - 4.2x</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>KPI Drivers</CardTitle>
                <p className="text-sm text-muted-foreground">These metrics determine your multiple</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {filteredKPIs.map((kpi) => (
                    <KPIMetric
                      key={kpi.priority}
                      priority={kpi.priority}
                      name={kpi.name}
                      value={kpi.value}
                      trend={kpi.trend}
                      isGoodTrend={kpi.isGoodTrend}
                      avgBenchmark={kpi.avgBenchmark}
                      bestCaseBenchmark={kpi.bestCaseBenchmark}
                      pillar={kpi.pillar}
                      onClick={() => console.log(`Clicked ${kpi.name}`)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
