import React from "react"
import { Container, Heading, Box, Text, Flex, Link } from "@chakra-ui/react"

const IndexPage = () => {
  const footerHeight = "30px"
  const containerMinHeight = `calc(100vh - ${footerHeight})`
  return (
    <>
      <Container
        pt="75px"
        pb="8"
        maxW="container.xl"
        minH={containerMinHeight}
        position="relative"
      >
        <Box as="section" mb="20">
          <Heading
            as="h1"
            fontSize="8xl"
            lineHeight="0.8em"
            mb="9"
            fontWeight="extrabold"
          >
            <Box as="span" pl="3px">
              Amit
            </Box>
            <br />
            Parekh.
          </Heading>
          <Text maxWidth="sm" color="royalBlue" fontSize="lg">
            I'm not great at showcasing stuff I've done, but I'm working on
            that. This website is step one.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" fontSize="5xl" mb="5" fontWeight="extrabold">
            Education.
          </Heading>
          <Flex direction="column">
            <Box mb="4">
              <Heading as="h3" fontSize="2xl" fontWeight="bold" color="brass">
                PhD Computer Science
              </Heading>
              <Flex my="1" color="polarBlue">
                <Text>Heriot-Watt University</Text>
                <Text mx="2">/</Text>
                <Text>Since 2020</Text>
                <Text mx="2">/</Text>
                <Text>
                  Supervised by{" "}
                  <Link
                    textDecoration="underline"
                    href="http://www.ikonstas.net"
                    isExternal
                  >
                    Ioannis Konstas
                  </Link>{" "}
                  &amp;{" "}
                  <Link
                    textDecoration="underline"
                    href="https://sites.google.com/site/araesh81/"
                    isExternal
                  >
                    Arash Eshghi
                  </Link>
                </Text>
              </Flex>
            </Box>
            <Box mb="4">
              <Heading as="h3" fontSize="2xl" fontWeight="bold" color="brass">
                MSc (Dist.) Artificial Intelligence with Speech and Multimodal
                Interaction
              </Heading>
              <Flex my="1" color="polarBlue">
                <Text>Heriot-Watt University</Text>
                <Text mx="2">/</Text>
                <Text>2019&ndash;20</Text>
                <Text mx="2">/</Text>
                <Text>
                  Dissertation supervised by{" "}
                  <Link
                    textDecoration="underline"
                    href="http://www.ikonstas.net"
                    isExternal
                  >
                    Ioannis Konstas
                  </Link>
                  , with additional guidance from{" "}
                  <Link
                    textDecoration="underline"
                    href="https://alesuglia.github.io"
                    isExternal
                  >
                    Alessandro Suglia
                  </Link>
                </Text>
              </Flex>
            </Box>
            <Box mb="4">
              <Heading as="h3" fontSize="2xl" fontWeight="bold" color="brass">
                BSc Mathematical, Statistical, and Actuarial Science
              </Heading>
              <Flex my="1" color="polarBlue">
                <Text>Heriot-Watt University</Text>
                <Text mx="2">/</Text>
                <Text>2015&ndash;19</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box
          as="footer"
          position="absolute"
          width="100%"
          bottom="0"
          height={footerHeight}
        >
          <Flex
            width="100%"
            justifyContent="space-between"
            fontSize="xs"
            color="polarBlue"
          >
            {/* <Link
              href="https://github.com/amitkparekh/portfolio"
              isExternal
              textDecoration="underline"
            >
              Source code
            </Link> */}
            <Text></Text>
            <Text>Amit Parekh &copy; {new Date().getFullYear()}</Text>
            <Text></Text>
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export default IndexPage
