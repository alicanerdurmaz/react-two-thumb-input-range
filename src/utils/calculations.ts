export const calculateThumbPositions = ({ limits, rangeValue1, rangeValue2 }: ICalculateThumbPositions) => {
  const value1 = (100 * (rangeValue1 - limits.min)) / (limits.max - limits.min)
  const value2 = (100 * (rangeValue2 - limits.min)) / (limits.max - limits.min)

  return { rangeValue1: Math.floor(value1), rangeValue2: Math.floor(value2) }
}

export const calculateThumbPositionOnClick = ({
  limits,
  rangeValue1,
  rangeValue2,
  percentageValueOfClickedPositionX,
}: ICalculateThumbPositionsOnClick) => {
  const m = (limits.max - limits.min) / 100
  const c = limits.min
  const y = Math.floor(percentageValueOfClickedPositionX * m + c)

  const yDistanceFromSliderValue1 = Math.abs(rangeValue1 - y)
  const yDistanceFromSliderValue2 = Math.abs(rangeValue2 - y)

  const value1 = yDistanceFromSliderValue1 < yDistanceFromSliderValue2 ? y : rangeValue1
  const value2 = yDistanceFromSliderValue2 <= yDistanceFromSliderValue1 ? y : rangeValue2

  return { rangeValue1: value1, rangeValue2: value2 }
}

export const calculateRatio = ({ value, max }: { value: number; max: number }) => {
  const percentage = 100

  return (percentage * value) / max
}

export const calculateInputBackgroundColor = ({ thumbPositions, railColor, trackColor }: IInputBackgroundColor) => {
  const { rangeValue1, rangeValue2 } = thumbPositions
  const startPosition = Math.min(rangeValue1, rangeValue2)
  const endPosition = Math.max(rangeValue1, rangeValue2)

  return `linear-gradient(to right, ${railColor} 0%,
          ${railColor} ${startPosition + 1}%,
          ${trackColor} ${startPosition + 1}%,
          ${trackColor} ${endPosition}%,
          ${railColor} ${endPosition}%,
          ${railColor} 100%)`
}

interface IInputBackgroundColor {
  thumbPositions: {
    rangeValue1: number
    rangeValue2: number
  }
  railColor: string
  trackColor: string
}
interface ICalculateThumbPositions {
  limits: {
    min: number
    max: number
  }
  rangeValue1: number
  rangeValue2: number
}

interface ICalculateThumbPositionsOnClick {
  limits: {
    min: number
    max: number
  }
  percentageValueOfClickedPositionX: number
  rangeValue1: number
  rangeValue2: number
}
