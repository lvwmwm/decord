// Module ID: 13784
// Function ID: 13785
// Name: openAppChannelToChat
// Dependencies: [5525, 8459, 2]
// Exports: default

// Module 13784 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5525 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8459 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
