import { css, jsx } from "@emotion/react"
import { useMemo, useRef } from "react"

import {
  calculateRatio,
  calculateThumbPositions,
  calculateInputBackgroundColor,
  calculateThumbPositionOnClick,
} from "../utils/calculations"

import InputLabel from "./InputLabel"
import InputRange from "./InputRange"

interface IProps {
  min: number
  max: number
  values: [number, number]
  onChange: (values: [number, number]) => void
  railColor?: string
  trackColor?: string
  thumbColor?: string
  thumbStyle?: React.CSSProperties
  thumbFocusStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  labelTextStyle?: React.CSSProperties
  showLabels?: boolean
}

const TwoThumbInputRange = ({
  onChange,
  values,
  min,
  max,
  railColor = "#EDF2F7",
  trackColor = "#1976d2",
  thumbColor = "#1976d2",
  thumbStyle,
  thumbFocusStyle,
  inputStyle,
  labelStyle,
  labelTextStyle,
  showLabels = true,
}: IProps) => {
  const limitsRef = useRef({ min, max })
  const range1Ref = useRef<HTMLInputElement | null>(null)
  const range2Ref = useRef<HTMLInputElement | null>(null)
  const inputGroupRef = useRef<HTMLDivElement | null>(null)

  const thumbPositions = useMemo(() => {
    return calculateThumbPositions({
      limits: limitsRef.current,
      rangeValue1: values[0],
      rangeValue2: values[1],
    })
  }, [values])

  const inputBgColor = useMemo(() => {
    return calculateInputBackgroundColor({
      thumbPositions,
      trackColor,
      railColor,
    })
  }, [railColor, thumbPositions, trackColor])

  const onInputDragHandler = () => {
    if (!range1Ref.current || !range2Ref.current) return

    const rangeValue1 = parseInt(range1Ref.current.value)
    const rangeValue2 = parseInt(range2Ref.current.value)

    onChange([rangeValue1, rangeValue2])
  }

  const onInputClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!inputGroupRef.current) return

    const { left, width } = inputGroupRef.current.getBoundingClientRect()
    const percentageValueOfClickedPositionX = calculateRatio({ value: e.clientX - left, max: width })

    const { rangeValue1, rangeValue2 } = calculateThumbPositionOnClick({
      limits: limitsRef.current,
      rangeValue1: values[0],
      rangeValue2: values[1],
      percentageValueOfClickedPositionX,
    })

    onChange([rangeValue1, rangeValue2])
  }

  return (
    <div
      css={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "max-content",
        height: "max-content",
        cursor: "pointer",
      }}
    >
      {showLabels && (
        <InputLabel
          value={values}
          thumbPositions={thumbPositions}
          labelStyle={labelStyle}
          labelTextStyle={labelTextStyle}
        />
      )}

      <div
        ref={inputGroupRef}
        onMouseDown={(e) => onInputClickHandler(e)}
        css={{
          position: "relative",
          width: "500px",
          height: "2px",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...inputStyle,
          background: inputBgColor,
        }}
      >
        <InputRange
          thumbColor={thumbColor}
          thumbStyle={thumbStyle}
          thumbFocusStyle={thumbFocusStyle}
          referance={range1Ref}
          value={values[0]}
          min={min}
          max={max}
          onChange={onInputDragHandler}
          name="sliderValue1"
        />

        <InputRange
          thumbColor={thumbColor}
          thumbStyle={thumbStyle}
          thumbFocusStyle={thumbFocusStyle}
          referance={range2Ref}
          value={values[1]}
          min={min}
          max={max}
          onChange={onInputDragHandler}
          name="sliderValue2"
        />
      </div>
    </div>
  )
}

export default TwoThumbInputRange
