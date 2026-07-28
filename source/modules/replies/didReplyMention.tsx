// Module ID: 7966
// Function ID: 63238
// Name: didReplyMention
// Dependencies: [2]
// Exports: default

// Module 7966 (didReplyMention)
const result = require("set").fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};
