import { AccessTime, HelpOutline, Search } from "@material-ui/icons";
import React from "react";
import HeaderContainer, {
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
} from "./Header.style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>
      <HeaderSearch>
        <Search />
        <input placeholder="Search Slack" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
