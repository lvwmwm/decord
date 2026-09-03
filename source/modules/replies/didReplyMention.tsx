// Module ID: 8133
// Function ID: 8134
// Name: didReplyMention
// Dependencies: [2]
// Exports: default

// Module 8133 (didReplyMention)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};
