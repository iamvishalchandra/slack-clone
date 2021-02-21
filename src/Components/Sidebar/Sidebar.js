import SidebarContainer, { SidebarHeader, SidebarInfo } from "./Sidebar.style";
import React from "react";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import SidebarOption from "../SidebarOption/SidebarOption";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Chat Box</h2>
          <h3>
            <FiberManualRecord />
            Vishal Chandra
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel bromser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
