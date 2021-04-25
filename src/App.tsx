import * as React from "react"
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Form from "./Form";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
         
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            THIS IS A LINK COMPONENT WORKING
          </Link>
          <h1>FORM COMPONENT</h1>
          <Form/>
        </VStack>
      </Grid>
      
    </Box>
  
   
  </ChakraProvider>
)
