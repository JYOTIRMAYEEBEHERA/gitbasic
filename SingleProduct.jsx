import React from 'react'
import { Card, CardHeader, CardBody, CardFooter ,Image,Box,ButtonGroup,Button,Text,Divider, Heading, Stack} from '@chakra-ui/react'

export default function SingleProduct(props) {
  const { id , brand , img , price , details , category }=props;
  return (<Box>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{brand}</Heading>n
      <Text>
        {details}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        details
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>
  )
}
