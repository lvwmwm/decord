// Module ID: 14526
// Function ID: 14527
// Name: openAppChannelToChat
// Dependencies: [5876, 9960, 2]
// Exports: default

// Module 14526 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5876 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
