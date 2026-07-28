// Module ID: 15340
// Function ID: 116858
// Name: sendMessageWithEmbed
// Dependencies: [5948, 5695, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 15340 (sendMessageWithEmbed)
const result = require("set").fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let entry;
  let whenReady;
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = importDefault(5948);
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return importDefault(5695).sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let whenReady;
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = importDefault(5948);
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return importDefault(5695).sendMessage(channel.id, parsed, whenReady, obj);
};
