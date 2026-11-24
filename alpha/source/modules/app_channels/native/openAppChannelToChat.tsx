// Module ID: 11359
// Function ID: 11360
// Name: openAppChannelToChat
// Dependencies: [6000, 8880, 2]
// Exports: default

// Module 11359 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6000 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8880 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
