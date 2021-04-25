import { InputGroup, FormControl, InputLeftElement, Button, Input, Stack, Icon, Divider, FormHelperText} from '@chakra-ui/react'
import React from 'react'

export default function Form() {
 return (
  <>
   <form action="submit" >
    <Stack spacing={3}>
  <FormControl isRequired>
  <InputGroup>
      <InputLeftElement children={<Icon name="InfoIcon" />}/>
      <Input type="firstName" placeholder="First Name" aria-label="First Name" />
     </InputGroup>
  </FormControl>
  <FormControl isRequired>
  <InputGroup>
      <InputLeftElement children={<Icon name="TimeIcon" />}/>
      <Input type="lastName" placeholder="last Name" aria-label="last Name" />
     </InputGroup>
  </FormControl>
  <Divider/>
  <FormControl isRequired>
  <InputGroup>
      <InputLeftElement children={<Icon name="EmailIcon" />}/>
      <Input type="email" placeholder="email" aria-label="email" />
     </InputGroup>
  </FormControl>
  <FormControl isRequired>
  <InputGroup>
      <InputLeftElement children={<Icon name="lock" />}/>
      <Input type="password" placeholder="password" aria-label="password" />
     </InputGroup>
  </FormControl>
 
     <Button 
     type="submit" 
     boxShadow="sm"
     _hover={{ boxShadow: "xl"}}
     _active={{ boxShadow: "lg"}}
      variant="solid" 
      colorScheme="red">
      Sign up!
     </Button>
     <FormControl>
     <FormHelperText textAlign="center">
      We keep your stuff safe!!!!
     </FormHelperText>
     </FormControl>
    </Stack>
    
   </form>

  </>
 )
}
