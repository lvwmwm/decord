// Module ID: 16056
// Function ID: 16057
// Name: sendMessageWithEmbed
// Dependencies: [7395, 7169, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 16056 (sendMessageWithEmbed)
import set from "set" /* 2 */;
import trackInviteDefault from "trackInvite" /* 7169 */;
import rebuildDefault from "rebuild" /* 7395 */;

const result = set.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = rebuildDefault;
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return trackInviteDefault.sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = rebuildDefault;
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return trackInviteDefault.sendMessage(channel.id, parsed, whenReady, obj);
};
