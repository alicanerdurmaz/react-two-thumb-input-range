import React, { useState } from "react"
import TwoThumbInputRange from "../components/TwoThumbInputRange"

export default {
  title: "Two Thumb Input Range/Custom CSS",
  component: "TwoThumbInputRange",
}

export const InputRange = (): React.ReactNode => {
  const [value, setValue] = useState<[number, number]>([1000, 5000])

  const onValueChange = (values: [number, number]) => {
    setValue(values)
  }

  const inputStyle: React.CSSProperties = {
    width: "500px",
    height: "16px",
    boxShadow: "0 0 0 1px rgba(0,0,0,0.22)",
  }

  const thumbStyle: React.CSSProperties = {
    width: "32px",
    height: "32px",
    backgroundColor: "rebeccapurple",
  }

  const labelStyle: React.CSSProperties = {
    backgroundColor: "rebeccapurple",
  }
  return (
    <TwoThumbInputRange
      onChange={onValueChange}
      values={value}
      min={1000}
      max={5000}
      trackColor="#301b3f"
      inputStyle={inputStyle}
      thumbStyle={thumbStyle}
      labelStyle={labelStyle}
    />
  )
}
