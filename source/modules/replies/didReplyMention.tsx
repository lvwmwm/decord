// Module ID: 7982
// Function ID: 63171
// Name: didReplyMention
// Dependencies: [2]
// Exports: default

// Module 7982 (didReplyMention)
const result = require("set").fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};
