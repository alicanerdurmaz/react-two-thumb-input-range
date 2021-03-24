/** @jsxImportSource @emotion/react */
import React from "react"

interface IProps {
  value: [number, number]
  thumbPositions: {
    rangeValue1: number
    rangeValue2: number
  }
  labelStyle?: React.CSSProperties
  labelTextStyle?: React.CSSProperties
}

const InputLabel = ({ value, thumbPositions, labelStyle, labelTextStyle }: IProps) => {
  return (
    <div
      css={{
        position: "relative",
        width: "98%",
        height: "15px",
      }}
    >
      <output
        css={{
          left: `calc(${thumbPositions.rangeValue1}% - 24px)`,
          "&::after": {
            content: `""`,
            display: "block",
            borderWidth: "8px 8px 0",
            marginLeft: "-8px",
            borderStyle: "solid",
            color: "currentColor",
            borderColor: `${labelStyle?.backgroundColor || bubbleStyle.backgroundColor} transparent transparent`,
            position: "absolute",
            bottom: "-8px",
            left: "50%",
          },
          ...bubbleStyle,
          ...labelStyle,
        }}
      >
        <small css={{ ...bubbleTextStyle, ...labelTextStyle }}>{value[0]}</small>
      </output>
      <output
        css={{
          left: `calc(${thumbPositions.rangeValue2}% - 24px)`,
          "&::after": {
            content: `""`,
            display: "block",
            borderWidth: "8px 8px 0",
            marginLeft: "-8px",
            borderStyle: "solid",
            borderColor: `${labelStyle?.backgroundColor || bubbleStyle.backgroundColor} transparent transparent`,
            position: "absolute",
            bottom: "-8px",
            left: "50%",
          },
          ...bubbleStyle,
          ...labelStyle,
        }}
      >
        <small css={{ ...bubbleTextStyle, ...labelTextStyle }}>{value[1]}</small>
      </output>
    </div>
  )
}

const bubbleStyle: React.CSSProperties = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  backgroundColor: "#1976d2",
  width: "48px",
  height: "24px",
  top: "-32px",
  borderRadius: "2px",
  transformOrigin: "bottom center",
}

const bubbleTextStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "0.75rem",
  lineHeight: "1.2",
  letterSpacing: "0.01071em",
}
export default InputLabel
