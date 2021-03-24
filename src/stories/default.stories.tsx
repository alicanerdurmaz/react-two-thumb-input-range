import React, { useState } from "react"
import TwoThumbInputRange from "../components/TwoThumbInputRange"

export default {
  title: "Two Thumb Input Range",
  component: "TwoThumbInputRange",
}

export const DefaultInput = (): React.ReactNode => {
  const [value, setValue] = useState<[number, number]>([1000, 5000])

  const onValueChange = (values: [number, number]) => {
    setValue(values)
  }

  return <TwoThumbInputRange onChange={onValueChange} values={value} min={1000} max={5000} />
}
