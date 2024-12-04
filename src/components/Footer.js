import {
  Box,
  Flex,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      bgColor="primary.white"
      padding={{ base: "24px", lg: "90px 60px 60px 28px" }}
    >
      <Flex
        alignItems="flexStart"
        justifyContent="space-between"
        flexDirection={{ base: "column", lg: "row" }}
        marginBottom={{ base: "60px", lg: "unset" }}
      >
        <Box
          w={{ base: "216px", lg: "292px" }}
          marginBottom={{ base: "48px", lg: "0" }}
        >
          <Image
            src="/logo.svg"
            alt="Morent"
            marginBottom={{ base: "15px", lg: "30px" }}
          />
          <Text
            fontSize={{ base: "12px", lg: "16px" }}
            color={{ base: "secondary.light300", lg: "secondary.light400" }}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </Text>
        </Box>
        <Flex
          as="nav"
          alignItems="flex-start"
          justifyContent="space-between"
          gap="51px"
          flexWrap="wrap"
        >
          <UnorderedList listStyleType="none">
            <Text
              fontWeight="700"
              color="secondary.default"
              fontSize={{ base: "20px", lg: "24px" }}
              marginBottom={{ base: "20px", lg: "36px" }}
            >
              About
            </Text>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                How it works
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Featured
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Partnership
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Bussiness Relation
              </Link>
            </ListItem>
          </UnorderedList>
          <UnorderedList listStyleType="none">
            <Text
              fontWeight="700"
              color="secondary.default"
              fontSize={{ base: "20px", lg: "24px" }}
              marginBottom={{ base: "20px", lg: "36px" }}
            >
              Community
            </Text>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Events
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Blog
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Podcast
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Invite a friend
              </Link>
            </ListItem>
          </UnorderedList>
          <UnorderedList listStyleType="none">
            <Text
              fontWeight="700"
              color="secondary.default"
              fontSize={{ base: "20px", lg: "24px" }}
              marginBottom={{ base: "20px", lg: "36px" }}
            >
              Socials
            </Text>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Discord
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Instagram
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Twitter
              </Link>
            </ListItem>
            <ListItem marginBottom={{ base: "18px", lg: "28px" }}>
              <Link
                href="#"
                color={{ base: "secondary.light300", lg: "secondary.light400" }}
              >
                Facebook
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "flex-start", lg: "center" }}
        borderTopWidth={{ lg: "1px" }}
        borderTopColor="secondary.light200"
        padding={{ base: "0", lg: "40px 0 0" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: "40px", lg: "0" }}
      >
        <Text
          color="secondary.default"
          fontWeight="600"
          flex="1 0 auto"
          order={{ base: "1", lg: "0" }}
          fontSize={{ base: "12px", lg: "16px" }}
        >
          ©2022 MORENT. All rights reserved
        </Text>
        <Flex
          w={{ base: "100%", lg: "fit-content" }}
          justifyContent="space-between"
          alignItems="center"
          gap={{ base: "0", lg: "60px" }}
        >
          <Link
            href="#"
            color="secondary.default"
            fontWeight="600"
            fontSize={{ base: "12px", lg: "16px" }}
          >
            Privacy & Policy
          </Link>
          <Link
            href="#"
            color="secondary.default"
            fontWeight="600"
            fontSize={{ base: "12px", lg: "16px" }}
          >
            Terms & Condition
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
