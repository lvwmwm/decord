// Module ID: 14660
// Function ID: 14661
// Name: openAppChannelToChat
// Dependencies: [5917, 9952, 2]
// Exports: default

// Module 14660 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5917 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9952 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
