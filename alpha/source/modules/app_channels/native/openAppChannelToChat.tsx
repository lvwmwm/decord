// Module ID: 13753
// Function ID: 13754
// Name: openAppChannelToChat
// Dependencies: [5527, 8458, 2]
// Exports: default

// Module 13753 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5527 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8458 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
