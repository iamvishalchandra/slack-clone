import { StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import ChatContainer, { Header, HeaderLeft, HeaderRight } from "./Chat.style";

function Chat() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#Room-Name</strong>
          </h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </Header>
    </ChatContainer>
  );
}

export default Chat;
