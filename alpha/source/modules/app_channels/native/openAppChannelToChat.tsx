// Module ID: 14606
// Function ID: 14607
// Name: openAppChannelToChat
// Dependencies: [5890, 9978, 2]
// Exports: default

// Module 14606 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5890 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9978 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
