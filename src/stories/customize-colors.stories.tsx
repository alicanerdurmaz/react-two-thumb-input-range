import React, { useState } from "react"
import TwoThumbInputRange from "../components/TwoThumbInputRange"

export default {
  title: "Two Thumb Input Range/Customize Colors",
  component: "TwoThumbInputRange",
  argTypes: {
    railColor: { control: "color" },
    trackColor: { control: "color" },
    thumbColor: { control: "color" },
    showLabels: { control: "boolean" },
  },
}

export const InputRange = (args): React.ReactNode => {
  const [value, setValue] = useState<[number, number]>([1000, 5000])

  const onValueChange = (values: [number, number]) => {
    setValue(values)
  }

  return <TwoThumbInputRange onChange={onValueChange} values={value} min={1000} max={5000} {...args} />
}
