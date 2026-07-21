// Module ID: 6875
// Function ID: 54480
// Name: shouldRemoveSelfMention
// Dependencies: []
// Exports: default

// Module 6875 (shouldRemoveSelfMention)
const MessageTypesSets = require(dependencyMap[0]).MessageTypesSets;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/shouldRemoveSelfMention.tsx");

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
