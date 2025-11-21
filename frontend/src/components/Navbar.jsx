import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW="1140px"
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir="row" // Always row
      >
        {/* Left: Title */}
        <Text
          bgGradient="linear(to-r, teal.500, green.500)"
          textTransform="uppercase"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
        >
          <Link to="/">Product Store</Link>
        </Text>

        {/* Right: Buttons */}
        <HStack spacing={2}>
          <Link to="/create">
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <LuSun /> : <IoMoon size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
