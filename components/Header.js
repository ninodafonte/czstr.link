import { Container, Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <Container size="xl">
      <Heading m={8} as="h1" textAlign="center">
        A simple URL Shortener for teams
      </Heading>
    </Container>
  );
}
