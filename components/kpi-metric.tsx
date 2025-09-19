"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface KPIMetricProps {
  priority: number
  name: string
  value: string
  trend: "up" | "down"
  isGoodTrend: boolean
  avgBenchmark: string
  bestCaseBenchmark: string
  pillar: "biz-dev" | "talent" | "operations"
  onClick?: () => void
}

const pillarColors = {
  "biz-dev": "border-blue-500 bg-blue-500/10",
  talent: "border-green-500 bg-green-500/10",
  operations: "border-orange-500 bg-orange-500/10",
}

export function KPIMetric({
  priority,
  name,
  value,
  trend,
  isGoodTrend,
  avgBenchmark,
  bestCaseBenchmark,
  pillar,
  onClick,
}: KPIMetricProps) {
  const trendColor =
    (trend === "up" && isGoodTrend) || (trend === "down" && !isGoodTrend) ? "text-green-600" : "text-red-600"

  return (
    <Card
      className={cn("cursor-pointer hover:shadow-lg transition-all duration-200 border-2 h-full", pillarColors[pillar])}
      onClick={onClick}
    >
      <CardContent className="p-4 text-center h-full flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-bold text-muted-foreground bg-white/50 rounded-full w-6 h-6 flex items-center justify-center">
            {priority}
          </div>
          <div className={cn("", trendColor)}>
            {trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          </div>
        </div>

        <div className="space-y-3 flex-1 flex flex-col justify-center">
          <h3 className="font-semibold text-sm leading-tight text-gray-900">{name}</h3>
          <div className="text-lg font-bold text-gray-900">{value}</div>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t border-gray-200/50">
          <div className="flex justify-between">
            <span className="font-medium">Avg:</span>
            <span>{avgBenchmark}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Best:</span>
            <span>{bestCaseBenchmark}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
