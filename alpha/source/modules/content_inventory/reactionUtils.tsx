// Module ID: 18464
// Function ID: 18465
// Name: reactionUtils
// Dependencies: [7812, 7624, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 18464 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7624 */;
import MessageParserDefault from "MessageParser" /* 7812 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export function sendMessageWithEmbed(channel) {
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
}
export function sendMessageWithoutContentInventoryEntry(channel) {
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
}
