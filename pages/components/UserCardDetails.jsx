import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React from "react";

export default function UserCardDetail(props) {
  /* UserCardDetail*/
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> Email {props.email}
      </p>
      <p>
        <IconMapPins /> Address {props.address}
      </p>
    </div>
  );
}
