import React, { useState } from "react"
import TwoThumbInputRange from "../components/TwoThumbInputRange"

export default {
  title: "Two Thumb Input Range/Highly Customized Input Range",
  component: "TwoThumbInputRange",
}

export const InputRange = (): React.ReactNode => {
  const [value, setValue] = useState<[number, number]>([1000, 5000])

  const onValueChange = (values: [number, number]) => {
    setValue(values)
  }

  const outputStyle: React.CSSProperties = {
    height: "max-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  }

  const thumbStyle: React.CSSProperties = {
    background: "#ff7171",
    width: "24px",
    height: "24px",
    boxShadow:
      "inset .8em .8em 5px -8px rgba(255, 255, 255, .4),inset -.4em -.4em 10px -3px rgba(0,0,0,.2),0.7em 0.5em 7px -0.5em rgba(0,0,0,.4)",
  }
  const thumbFocusStyle: React.CSSProperties = {
    background: "#df3d3d",
    boxShadow:
      "inset .8em .8em 5px -8px rgba(255, 255, 255, .4),inset -.4em -.4em 10px -3px rgba(0,0,0,.2),0.7em 0.5em 7px -0.5em rgba(0,0,0,.4)",
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "32px",
        padding: "1rem",
        boxShadow: `inset .8em .8em 5px -8px rgba(255, 255, 255, .4),
        inset -.4em -.4em 10px -3px rgba(0,0,0,.2),
        0.7em 0.5em 7px -0.5em rgba(0,0,0,.4)`,
      }}
    >
      <output style={outputStyle}>
        <small>{Math.min(value[0], value[1])}</small>
      </output>
      <TwoThumbInputRange
        onChange={onValueChange}
        values={value}
        min={1000}
        max={5000}
        showLabels={false}
        inputStyle={{
          margin: "0 8px",
        }}
        thumbStyle={thumbStyle}
        thumbFocusStyle={thumbFocusStyle}
      />
      <output style={outputStyle}>
        <small>{Math.max(value[0], value[1])}</small>
      </output>
    </div>
  )
}
