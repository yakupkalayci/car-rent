import Head from "next/head";
import { Container, Grid, GridItem, Box, Text } from "@chakra-ui/react";
import HomeBannerCard from "@/components/HomeBannerCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Morent</title>
        <meta name="description" content="Rent brand new cars easily." />
        <meta name="keywords" content="car, rent, car rent" />
      </Head>
      <Container
        padding="26px 24px"
        pos="relative"
        bottom={{ base: "50%", lg: 0 }}
      >
        <Grid templateColumns="repeat(24, 1fr)" gap={{ base: "0", lg: "30px" }}>
          <GridItem colSpan={{ base: "24", lg: "12" }}>
            <HomeBannerCard
              bgImage="/home-banner-bg-left.svg"
              bgColor="information.default"
              title="The Best Platform for Car Rental"
              desc="Ease of doing a car rental safely and reliably. Of course at a low price."
              buttonText="Rental Car"
              buttonBgColor="primary.default"
            />
          </GridItem>
          <GridItem
            colSpan="12"
            display={{ base: "none", lg: "block" }}
            bgImage="/home-banner-bg-right.svg"
            bgPosition="bottom"
            bgColor="primary.default"
            borderRadius="10px"
            height={{ base: "232px", lg: "360px" }}
          >
            <HomeBannerCard
              bgImage="/home-banner-bg-right.svg"
              bgColor="primary.default"
              title="Easy way to rent car at a low price"
              desc="Providing cheap car rental services and safe and comfortable facilities."
              buttonText="Rental Car"
              buttonBgColor="information.default"
            />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
