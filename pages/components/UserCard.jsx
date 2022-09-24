import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";
import { useState } from "react";
import UserCardDetail from "./UserCardDetails";
export default function UserCard(props) {
  const [show, setShow] = useState(false);
  function onClickHn() {
    if (show === false) setShow(true);
    else setShow(false);
  }
  return (
    <div className="border-bottom" onClick={() => onClickHn()}>
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={props.img} width="90px" className="rounded-circle me-4" />
        <span className="text-center display-6 me-auto"> {props.name}</span>
        {!show ? <IconChevronDown /> : <IconChevronUp />}
      </div>

      {show ? (
        <UserCardDetail email={props.email} address={props.address} />
      ) : null}
    </div>
  );
}
