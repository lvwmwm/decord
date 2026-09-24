// Module ID: 16930
// Function ID: 16931
// Name: reactionUtils
// Dependencies: [8005, 7786, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 16930 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7786 */;
import MessageParserDefault from "MessageParser" /* 8005 */;
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
