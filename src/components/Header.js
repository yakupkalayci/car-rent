import { Flex, Image, Link, Icon } from "@chakra-ui/react";
import HeartIcon from "/public/icons/heart.svg";
import NotifIcon from "/public/icons/notification.svg";
import SettingIcon from "/public/icons/setting.svg";

function Header() {
  return (
    <Flex
      as="header"
      padding={{ base: "30px 24px", lg: "40px 28px" }}
      borderBottomWidth={{ base: "0", lg: "1px" }}
      borderBottomColor="secondary.light200"
      backgroundColor="primary.white"
      justifyContent="space-between"
      alignItems={{ base: "flex-start", lg: "center" }}
      height={{ base: "240px", lg: "unset" }}
    >
      <Image src="/logo.svg" alt="Morent" />
      <Flex gap="18px">
        <Link
          href="/likeds"
          borderWidth="1px"
          borderColor="secondary.light200"
          w="44px"
          h="44px"
          borderRadius="50%"
          padding="12px"
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            as={HeartIcon}
            verticalAlign="middle"
            boxSize="24px"
            color="secondary.light400"
          />
        </Link>
        <Link
          href="/notifications"
          borderWidth="1px"
          borderColor="secondary.light200"
          w="44px"
          h="44px"
          borderRadius="50%"
          padding="12px"
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
          position="relative"
          _before={{
            content: "''",
            position: "absolute",
            top: "0",
            right: "0",
            w: "11px",
            h: "11px",
            bgColor: "error.default",
            borderRadius: "50%",
          }}
        >
          <Icon
            as={NotifIcon}
            verticalAlign="middle"
            boxSize="24px"
            color="secondary.light400"
          />
        </Link>
        <Link
          href="/settings"
          borderWidth="1px"
          borderColor="secondary.light200"
          w="44px"
          h="44px"
          borderRadius="50%"
          padding="12px"
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            as={SettingIcon}
            verticalAlign="middle"
            boxSize="24px"
            color="secondary.light400"
          />
        </Link>
        <Link href="/profile" w="44px" h="44px" borderRadius="50%">
          <Image src="/profile.png" alt="profil" />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
