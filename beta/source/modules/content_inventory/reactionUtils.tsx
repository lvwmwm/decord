// Module ID: 16856
// Function ID: 16857
// Name: reactionUtils
// Dependencies: [7955, 7735, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 16856 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7735 */;
import MessageParserDefault from "MessageParser" /* 7955 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location });
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, { doNotNotifyOnError, location: _location });
};
