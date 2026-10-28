// Module ID: 13878
// Function ID: 13879
// Name: openAppChannelToChat
// Dependencies: [5739, 9748, 2]
// Exports: default

// Module 13878 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5739 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9748 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
