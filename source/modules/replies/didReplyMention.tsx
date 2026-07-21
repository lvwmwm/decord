// Module ID: 7888
// Function ID: 62800
// Name: didReplyMention
// Dependencies: [284214097]
// Exports: default

// Module 7888 (didReplyMention)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/replies/didReplyMention.tsx");

export default function didReplyMention(mentions, author) {
  let hasItem = null != author;
  if (hasItem) {
    mentions = mentions.mentions;
    hasItem = mentions.includes(author.author.id);
  }
  return hasItem;
};
