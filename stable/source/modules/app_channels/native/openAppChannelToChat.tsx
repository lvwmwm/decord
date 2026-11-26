// Module ID: 15149
// Function ID: 15150
// Name: openAppChannelToChat
// Dependencies: [6053, 9068, 2]
// Exports: default

// Module 15149 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6053 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9068 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
