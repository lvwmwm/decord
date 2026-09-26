// Module ID: 13510
// Function ID: 13511
// Name: didReplyMention
// Dependencies: [2]
// Exports: default

// Module 13510 (didReplyMention)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};
