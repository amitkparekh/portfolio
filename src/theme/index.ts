import { ChakraTheme } from "@chakra-ui/react"
import Heading from "./components/Heading"

export const theme: Partial<ChakraTheme> = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    deepBlue: "#0B2E4B",
    royalBlue: "#103552",
    polarBlue: "#62788A",
    brass: "#CB9374",
    pearl: "#E8E3DC",
    sand: "#F6F4F2",
    sandstone: "#D6D1CB",
  },

  components: {
    Heading,
  },
  styles: {
    global: {
      body: {
        background: "sand",
      },
    },
  },
}

export default theme
