import React from "react";
import {
    Box,
    Button,
    Input,
    Container,
    VStack,
    HStack,
} from "@chakra-ui/react";

import Message from "./components/Message";

function App() {
    return (
        <Box bg={"red.100"}>
            <Container h={"100vh"} bg={"white"}>
                <VStack h="full" paddingY={"4"}>
                    <Button colorScheme="blackAlpha" w={"full"}>
                        Logout
                    </Button>

                    <VStack h="full" w={"full"}>
                      <Message  text={"Sample message"}/>
                      <Message user="me" text={"Sample message"}/>
                      <Message  text={"Sample message"}/>
                    </VStack>
                    <form style={{ width: "100%", borderRadius:"20rem" }}>
                        <HStack>
                            <Input w={"full"} placeholder="Type a message...."/>
                            <Button type="submit" colorScheme={"green"}>
                                Send
                            </Button>
                        </HStack>
                    </form>
                </VStack>
            </Container>
        </Box>
    );
}

export default App;
