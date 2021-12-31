import type { GetServerSideProps, NextPage } from "next";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { GradientLayout } from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home: NextPage = ({ artists }) => {
  return (
    <GradientLayout
      color="gray"
      title="Bald dude"
      subtitle="profile"
      description="19 public playlist"
      image="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
      roundImage
    >
      <Box paddingX="40px" color="white">
        <Box marginBottom="20px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist of the month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex gap="20px">
          {artists.map((artist) => (
            <Box bg="gray.900" borderRadius="4px" padding="15px" width="20%">
              <Box>
                <Image
                  src="http://placekitten.com/200/200"
                  borderRadius="100%"
                />
              </Box>
              <Box marginTop="20px">
                <Text fontSize="large">{artist.name}</Text>
                <Text fontSize="x-small">Artist</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const artists = await prisma.artist.findMany(); // your fetch function here
  return {
    props: {
      artists,
    },
  };
};

export default Home;
