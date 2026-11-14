// Module ID: 15147
// Function ID: 15148
// Name: openAppChannelToChat
// Dependencies: [6063, 9068, 2]
// Exports: default

// Module 15147 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6063 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
