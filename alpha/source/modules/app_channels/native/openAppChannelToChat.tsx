// Module ID: 14630
// Function ID: 14631
// Name: openAppChannelToChat
// Dependencies: [5885, 9919, 2]
// Exports: default

// Module 14630 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5885 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9919 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
