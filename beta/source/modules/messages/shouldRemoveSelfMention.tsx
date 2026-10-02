// Module ID: 7056
// Function ID: 7057
// Name: shouldRemoveSelfMention
// Dependencies: [1086, 2]
// Exports: default

// Module 7056 (shouldRemoveSelfMention)
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const MessageTypesSets = Constants.MessageTypesSets;
const result = size.fileFinishedImporting("modules/messages/shouldRemoveSelfMention.tsx");

export default function shouldRemoveSelfMention(type, arg1) {
  const SELF_MENTIONABLE_SYSTEM = MessageTypesSets.SELF_MENTIONABLE_SYSTEM;
  const hasItem = SELF_MENTIONABLE_SYSTEM.has(type.type);
  let tmp2 = !hasItem;
  if (tmp2) {
    const author = type.author;
    let id;
    if (author != null) {
      id = author.id;
    }
    tmp2 = id === arg1;
  }
  return tmp2;
};
