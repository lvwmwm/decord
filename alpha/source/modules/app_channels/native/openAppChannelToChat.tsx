// Module ID: 13861
// Function ID: 13862
// Name: openAppChannelToChat
// Dependencies: [5708, 9718, 2]
// Exports: default

// Module 13861 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5708 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9718 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = transitionToChannel;
  obj.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
