// Module ID: 14380
// Function ID: 14381
// Name: openAppChannelToChat
// Dependencies: [5756, 9829, 2]
// Exports: default

// Module 14380 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5756 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9829 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
