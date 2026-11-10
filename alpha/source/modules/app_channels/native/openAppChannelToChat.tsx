// Module ID: 14657
// Function ID: 14658
// Name: openAppChannelToChat
// Dependencies: [5887, 9925, 2]
// Exports: default

// Module 14657 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5887 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
