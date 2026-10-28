// Module ID: 14079
// Function ID: 14080
// Name: openAppChannelToChat
// Dependencies: [5743, 9750, 2]
// Exports: default

// Module 14079 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5743 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9750 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
