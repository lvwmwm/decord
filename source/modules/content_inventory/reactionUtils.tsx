// Module ID: 16091
// Function ID: 16092
// Name: sendMessageWithEmbed
// Dependencies: [7427, 7201, 2]
// Exports: sendMessageWithEmbed, sendMessageWithoutContentInventoryEntry

// Module 16091 (sendMessageWithEmbed)
import set from "set" /* 2 */;
import trackInviteDefault from "trackInvite" /* 7201 */;
import rebuildDefault from "rebuild" /* 7427 */;

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
