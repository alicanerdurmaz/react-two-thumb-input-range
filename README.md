# react-two-thumb-input-range

`TwoThumbInputRange` is a React component allowing users to input numeric values within a specific range.

Native HTML input type=range sliders do not support multiple thumbs yet so this component uses two range inputs and position them to look like a multi-thumb slider.

Under the hood `TwoThumbInputRange` uses HTML input type=range, but uses CSS Magic to allows users to adjust with 2 buttons

# Features

- [x] Multi-Touch support
- [x] Accessible with ARIA and keyboard support
- [x] Highly Customizable
- [x] Written in TypeScript

# Examples

All examples available in [Storybook](https://alicanerdurmaz.github.io/react-two-thumb-input-range/?path=/story/two-thumb-input-range-custom-css--input-range)

[Live Web App](https://alicanerdurmaz.github.io/react-two-thumb-input-range/?path=/story/two-thumb-input-range-custom-css--input-range)

# Installation

```sh
yarn add react-two-thumb-input-range

# or

npm i react-two-thumb-input-range

```

## Import components

```js
import { TwoThumbInputRange } from "react-two-thumb-input-range"
```

## Usage

```jsx
function App() {
  const [value, setValue] = useState([1000, 4333])

  const onValueSChange = (values) => {
    setValue(values)
  }

  return <TwoThumbInputRange onChange={onValueChange} values={value} min={1000} max={10000} />
}
```

# Props

| Attribute       |         Type          |  Default  | Description                                                                                                                        |
| :-------------- | :-------------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------- |
| min             |       `number`        |     0     | The minimum permitted value.                                                                                                       |
| max             |       `number`        |    100    | The maximum permitted value.                                                                                                       |
| values          |   `[number,number]`   |           | The current value of the Input Range.                                                                                              |
| onChange        |        `func`         |           | Callback function that is fired when the Input's value changed. onChange: ([number, number]) => void                               |
| railColor       |       `string`        | `#EDF2F7` | Color of rail element.                                                                                                             |
| trackColor      |       `string`        | `#1976d2` | Color of track element.                                                                                                            |
| thumbColor      |       `string`        | `#EDF2F7` | Color of thumb element.                                                                                                            |
| thumbStyle      | `React.CSSProperties` | `1976d2`  | Styles applied to the thumb element                                                                                                |
| thumbFocusStyle | `React.CSSProperties` |    ``     | Styles applied to the when thumb element focus                                                                                     |
| inputStyle      | `React.CSSProperties` |    ``     | Styles applied to the input element                                                                                                |
| labelStyle      | `React.CSSProperties` |    ``     | Styles applied to the label element                                                                                                |
| labelTextStyle  | `React.CSSProperties` |    ``     | Styles applied to the label textelement                                                                                            |
| showLabels      |       `boolean`       |  `true`   | If false, the default labels will not render.                                                                                      |
| ariaValueText   |       `string`        |           | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute) |
