import { ComponentStyleConfig } from "@chakra-ui/react"

const pageTitle = {
  fontFamily: "heading",
  color: "deepBlue",
  fontSize: "5xl",
}

const Heading: ComponentStyleConfig = {
  // Styles for the base style
  baseStyle: {
    ...pageTitle,
  },
  // Styles for the size variations
  // sizes: {},
  // Styles for the visual style variations
  // variants: {},
  // The default `size` or `variant` values
  // defaultProps: {},
}

export default Heading
