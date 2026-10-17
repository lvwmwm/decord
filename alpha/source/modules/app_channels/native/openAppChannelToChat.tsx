// Module ID: 13627
// Function ID: 13628
// Name: openAppChannelToChat
// Dependencies: [13628, 5202, 9617, 2]
// Exports: default

// Module 13627 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5202 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9617 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13628 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = preloadChannelAppFrame;
  const result = obj.cancelChannelAppFramePreload(id.id);
  const obj2 = transitionToChannel;
  obj2.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
