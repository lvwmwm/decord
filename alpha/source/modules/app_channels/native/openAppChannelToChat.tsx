// Module ID: 13748
// Function ID: 13749
// Name: openAppChannelToChat
// Dependencies: [5689, 9674, 2]
// Exports: default

// Module 13748 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5689 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9674 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
