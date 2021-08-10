import { Container, Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Container>
      <Flex
        mx="auto"
        d="column"
        align="center"
        justify="center"
        textAlign="center">
        <Text fontSize="sm" color="gray.500">
          Forked from{" "}
          <Link href="//github.com/carlosazaustre/czstr.link">
            Carlos Azaustre
          </Link>
        </Text>
        <Text fontSize="s" color="gray.500">
          With
          <span role="img" aria-label="love">
            🦄
          </span>{" "}
          &amp;{" "}
          <span role="img" aria-label="code">
            🌈
          </span>{" "}
          by <Link href="//github.com/ninodafonte">Nino Dafonte</Link>
        </Text>
      </Flex>
    </Container>
  );
}
