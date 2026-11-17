// Module ID: 15174
// Function ID: 15175
// Name: openAppChannelToChat
// Dependencies: [6060, 9079, 2]
// Exports: default

// Module 15174 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6060 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9079 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
