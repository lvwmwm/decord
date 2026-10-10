// Module ID: 16941
// Function ID: 16942
// Name: reactionUtils
// Dependencies: [7369, 7178, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 16941 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7178 */;
import MessageParserDefault from "MessageParser" /* 7369 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let entry;
  let whenReady;
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  const obj = MessageParserDefault;
  const parsed = obj.parse(channel, content);
  const obj2 = MessageActionCreatorsDefault;
  const obj3 = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return obj2.sendMessage(channel.id, parsed, whenReady, obj3);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let whenReady;
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  const obj = MessageParserDefault;
  const parsed = obj.parse(channel, content);
  const obj2 = MessageActionCreatorsDefault;
  const obj3 = { doNotNotifyOnError, location: _location };
  return obj2.sendMessage(channel.id, parsed, whenReady, obj3);
};
