// Module ID: 14620
// Function ID: 14621
// Name: openAppChannelToChat
// Dependencies: [5893, 9984, 2]
// Exports: default

// Module 14620 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5893 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9984 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
