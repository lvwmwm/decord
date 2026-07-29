// Module ID: 7991
// Function ID: 7992
// Name: didReplyMention
// Dependencies: [2]
// Exports: default

// Module 7991 (didReplyMention)
const result = require("set").fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};
