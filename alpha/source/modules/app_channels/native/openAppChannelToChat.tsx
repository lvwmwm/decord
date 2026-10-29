// Module ID: 14312
// Function ID: 14313
// Name: openAppChannelToChat
// Dependencies: [5745, 9782, 2]
// Exports: default

// Module 14312 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5745 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9782 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
