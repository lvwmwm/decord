// Module ID: 6880
// Function ID: 54545
// Name: shouldRemoveSelfMention
// Dependencies: [653, 2]
// Exports: default

// Module 6880 (shouldRemoveSelfMention)
import { MessageTypesSets } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/shouldRemoveSelfMention.tsx");

export default function shouldRemoveSelfMention(type) {
  const SELF_MENTIONABLE_SYSTEM = MessageTypesSets.SELF_MENTIONABLE_SYSTEM;
  let tmp = !SELF_MENTIONABLE_SYSTEM.has(type.type);
  if (tmp) {
    const author = type.author;
    let id;
    if (null != author) {
      id = author.id;
    }
    tmp = id === arg1;
  }
  return tmp;
};
