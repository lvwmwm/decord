// Module ID: 7884
// Function ID: 62788
// Name: didReplyMention
// Dependencies: []
// Exports: default

// Module 7884 (didReplyMention)
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
