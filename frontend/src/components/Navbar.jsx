import { Button, Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignitems={"centter"}
        justifycontent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient={"linear(to-r, teal.500, green.500)"}
          textTransform={"uppercase"}
          bgClip={"text"}
          fontSize={"4xl"}
          fontWeight={"bold"}
        >
          <Link to={"/"}>Product Strore</Link>
        </Text>

        <HStack spacing={2} alignitems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
