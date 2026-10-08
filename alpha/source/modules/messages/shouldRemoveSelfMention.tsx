// Module ID: 6085
// Function ID: 6086
// Name: shouldRemoveSelfMention
// Dependencies: [1085, 2]
// Exports: default

// Module 6085 (shouldRemoveSelfMention)
import Constants from "Constants" /* 1085 */;
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
