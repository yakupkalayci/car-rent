import { Box, Text } from "@chakra-ui/react";
import Button from "./Button";

function HomeBannerCard(props) {
  // destruct props
  const { bgImage, bgColor, title, desc, buttonText, buttonBgColor } = props;

  return (
    <Box
      bgImage={bgImage}
      bgColor={bgColor}
      bgPosition="bottom"
      bgRepeat="no-repeat"
      borderRadius="10px"
      height={{ base: "232px", lg: "360px" }}
    >
      <Box
        w={{ base: "240px", lg: "284px" }}
        padding={{ base: "16px 0 0 16px", lg: "24px 0 0 24px" }}
        boxSizing="content-box"
      >
        <Text
          fontSize={{ base: "16px", lg: "32px" }}
          fontWeight="600"
          color="primary.white"
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "12px", lg: "16px" }}
          fontWeight="500"
          color="primary.white"
          margin={{ base: "18px 0", xl: "24px 0" }}
        >
          {desc}
        </Text>
        <Button
          text={buttonText}
          bgColor={buttonBgColor}
          color="primary.white"
        />
      </Box>
    </Box>
  );
}

export default HomeBannerCard;
