// Module ID: 5924
// Function ID: 5925
// Name: shouldRemoveSelfMention
// Dependencies: [676, 2]
// Exports: default

// Module 5924 (shouldRemoveSelfMention)
import { MessageTypesSets } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/shouldRemoveSelfMention.tsx");

export default function shouldRemoveSelfMention(type) {
  const SELF_MENTIONABLE_SYSTEM = MessageTypesSets.SELF_MENTIONABLE_SYSTEM;
  const hasItem = SELF_MENTIONABLE_SYSTEM.has(type.type);
  let tmp2 = !hasItem;
  if (!hasItem) {
    const author = type.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    tmp2 = id === arg1;
  }
  return tmp2;
};
