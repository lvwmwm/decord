// Module ID: 13821
// Function ID: 13822
// Name: openAppChannelToChat
// Dependencies: [5705, 9715, 2]
// Exports: default

// Module 13821 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5705 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
