import { Button as ChakraButton } from "@chakra-ui/react";

function Button(props) {
  // destruct props
  const { text, bgColor, color, onClick, type } = props;

  return (
    <ChakraButton
      bgColor={bgColor}
      type={type}
      color={color}
      borderRadius="4px"
      padding="0 20px"
      fontWeight="500"
      fontSize={{base: '12px', lg: '16px'}}
      _hover={{bgColor: bgColor}}
      _active={{bgColor: bgColor}}
      onClick={() => onClick}
    >
      {text}
    </ChakraButton>
  );
}

export default Button;
