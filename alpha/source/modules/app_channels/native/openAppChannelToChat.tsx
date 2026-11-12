// Module ID: 15033
// Function ID: 15034
// Name: openAppChannelToChat
// Dependencies: [6000, 9001, 2]
// Exports: default

// Module 15033 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6000 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9001 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
