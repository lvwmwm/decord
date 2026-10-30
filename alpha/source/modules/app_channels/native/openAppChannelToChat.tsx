// Module ID: 14342
// Function ID: 14343
// Name: openAppChannelToChat
// Dependencies: [5751, 9808, 2]
// Exports: default

// Module 14342 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5751 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
