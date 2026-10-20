// Module ID: 13683
// Function ID: 13684
// Name: openAppChannelToChat
// Dependencies: [13684, 5669, 9644, 2]
// Exports: default

// Module 13683 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5669 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9644 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13684 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = preloadChannelAppFrame;
  const result = obj.cancelChannelAppFramePreload(id.id);
  const obj2 = transitionToChannel;
  obj2.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
