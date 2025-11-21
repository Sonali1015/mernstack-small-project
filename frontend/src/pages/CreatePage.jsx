import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")}></Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
