"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

interface SDEMultipleDialProps {
  value: number
  onChange: (value: number) => void
}

export function SDEMultipleDial({ value, onChange }: SDEMultipleDialProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-center">SDE Multiple</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">{value.toFixed(1)}x</div>
            <div className="text-sm text-muted-foreground">Current Multiple</div>
          </div>
          <div className="px-4">
            <Slider
              value={[value]}
              onValueChange={(values) => onChange(values[0])}
              max={10}
              min={0.5}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0.5x</span>
              <span>5x</span>
              <span>10x</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
