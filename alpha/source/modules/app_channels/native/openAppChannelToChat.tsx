// Module ID: 14597
// Function ID: 14598
// Name: openAppChannelToChat
// Dependencies: [5912, 9935, 2]
// Exports: default

// Module 14597 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5912 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9935 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
