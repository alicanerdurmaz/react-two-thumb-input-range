import React, { useState } from "react"
import TwoThumbInputRange from "../components/TwoThumbInputRange"

export default {
  title: "Default Range",
  component: "TwoThumbInputRange",
}

export const Default = (): React.ReactNode => {
  const [value, setValue] = useState<[number, number]>([1000, 4333])

  const onValueChange = (values: [number, number]) => {
    setValue(values)
  }

  return (
    <TwoThumbInputRange
      onChange={onValueChange}
      values={value}
      min={1000}
      max={10000}
      inputStyle={{ width: "500px" }}
    />
  )
}
