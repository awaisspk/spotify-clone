import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NextImage from "next/image";
import { auth } from "../lib/mutations";

export const AuthForm: React.FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box width="100%" height="100vh" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="1px solid white"
      >
        <NextImage
          src="/images/logo.svg"
          width={150}
          height={40}
          alt="site logo"
        />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Flex
          onSubmit={handleSubmit}
          as="form"
          direction="column"
          gap="20px"
          padding="40px 50px"
          bg="gray.900"
          borderRadius="6px"
          width="min(500px, 100%)"
        >
          <Input
            value={email}
            type="email"
            placeholder="Email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={
              mode === "signup" ? "new-password" : "current-password"
            }
          />
          <Button
            type="submit"
            bg="green.500"
            isLoading={isLoading}
            alignSelf="end"
            minW="100px"
            textAlign="center"
            sx={{
              "&:hover": {
                backgroundColor: "green.400",
              },
            }}
          >
            {mode}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
