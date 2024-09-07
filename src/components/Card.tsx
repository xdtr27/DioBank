import { Box, Center, Input } from "@chakra-ui/react";
import { Button } from "./Button/Button";
import React from "react";
import { login } from "../services/login";

export function Card() {
  return (
    <Box minHeight="100vh" background={"#641adb"} padding="3rem">
          <Box background={"#fff"} borderRadius="8px" padding="2rem">
            <Center marginBottom="1rem">
              <h1>Sign in</h1>
            </Center>

            <Input placeholder="Email" marginBottom=".5rem"/>
            <Input placeholder="Password" />
            <Center>
              <Button onclick={login}/>
            </Center>
          </Box>
        </Box>
  )
}
