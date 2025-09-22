import type { ReactElement } from "react";

interface SidebarItemProps {
  type: "folder" | "file";
  startIcon: ReactElement;
  text : string;
  onClick?: ()=>void;
}

export const SidebarItem = ({ type, startIcon, text }: SidebarItemProps) => {
  if (type === "folder") {
    return (
      <div className="flex items-center gap-2 pt-2">
        {startIcon}
        {text}
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className="flex items-center gap-2 pl-8 pr-1">
        {startIcon}
        {text}
      </div>
    );
  }

  return null;
};
