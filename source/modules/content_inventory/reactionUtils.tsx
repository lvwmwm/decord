// Module ID: 15115
// Function ID: 114031
// Name: sendMessageWithEmbed
// Dependencies: []
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 15115 (sendMessageWithEmbed)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let entry;
  let whenReady;
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = importDefault(dependencyMap[0]);
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return importDefault(dependencyMap[1]).sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let whenReady;
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = importDefault(dependencyMap[0]);
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return importDefault(dependencyMap[1]).sendMessage(channel.id, parsed, whenReady, obj);
};
