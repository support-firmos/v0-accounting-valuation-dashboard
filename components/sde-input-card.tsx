"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SDEInputCardProps {
  title: string
  value: number
  onChange: (value: number) => void
  inputs: Array<{
    label: string
    value: number
    onChange: (value: number) => void
  }>
}

export function SDEInputCard({ title, value, onChange, inputs }: SDEInputCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-center">{title}</CardTitle>
        <div className="text-center">
          <Input
            type="number"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="text-2xl font-bold text-center border-2 border-accent"
            placeholder="0"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {inputs.map((input, index) => (
          <div key={index} className="space-y-2">
            <Label htmlFor={`input-${index}`} className="text-sm font-medium">
              {input.label}
            </Label>
            <Input
              id={`input-${index}`}
              type="number"
              value={input.value}
              onChange={(e) => input.onChange(Number(e.target.value))}
              className="w-full"
              placeholder="0"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
