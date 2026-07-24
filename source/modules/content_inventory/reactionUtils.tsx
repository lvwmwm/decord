// Module ID: 15277
// Function ID: 116522
// Name: sendMessageWithEmbed
// Dependencies: [6923, 6691, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 15277 (sendMessageWithEmbed)
const result = require("set").fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let entry;
  let whenReady;
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = importDefault(6923);
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return importDefault(6691).sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let whenReady;
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = importDefault(6923);
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return importDefault(6691).sendMessage(channel.id, parsed, whenReady, obj);
};
