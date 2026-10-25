// Module ID: 13846
// Function ID: 13847
// Name: openAppChannelToChat
// Dependencies: [5707, 9716, 2]
// Exports: default

// Module 13846 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5707 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9716 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
