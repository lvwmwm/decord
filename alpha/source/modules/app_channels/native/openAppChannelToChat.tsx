// Module ID: 11505
// Function ID: 11506
// Name: openAppChannelToChat
// Dependencies: [6126, 9021, 2]
// Exports: default

// Module 11505 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6126 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9021 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
