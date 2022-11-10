import React from "react";
import Avatar from "./avatar";

const avatars_arr = [
  {
    id: "1",
    src: "/avatars/001.png",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "2",
    src: "/avatars/002.png",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "3",
    src: "/avatars/003.png",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "4",
    src: "/avatars/004.png",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

export function Avatars() {
  return (
    <div className="avatar-set">
      {avatars_arr.map((avatar) => (
        <Avatar key={avatar.id} src={avatar.src} alt={avatar.alt} />
      ))}

      {/* <Avatar
        src="/avatars/001.png"
        alt="person with curly hair and a black T-shirt"
      />
      <Avatar src="/avatars/002.png" alt="person wearing a hijab and glasses" />
      <Avatar
        src="/avatars/003.png"
        alt="person with short hair wearing a blue hoodie"
      />
      <Avatar
        src="/avatars/004.png"
        alt="person with a pink mohawk and a raised eyebrow"
      /> */}
    </div>
  );
}
