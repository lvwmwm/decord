// Module ID: 11513
// Function ID: 11514
// Name: openAppChannelToChat
// Dependencies: [6126, 9022, 2]
// Exports: default

// Module 11513 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 6126 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9022 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
