// Module ID: 13802
// Function ID: 13803
// Name: openAppChannelToChat
// Dependencies: [5556, 8490, 2]
// Exports: default

// Module 13802 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5556 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 8490 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
