// Module ID: 11458
// Function ID: 11459
// Name: openAppChannelToChat
// Dependencies: [6095, 8979, 2]
// Exports: default

// Module 11458 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6095 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8979 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
