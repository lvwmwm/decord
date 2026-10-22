// Module ID: 13626
// Function ID: 13627
// Name: openAppChannelToChat
// Dependencies: [13627, 5202, 9617, 2]
// Exports: default

// Module 13626 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5202 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9617 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13627 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = preloadChannelAppFrame;
  const result = obj.cancelChannelAppFramePreload(id.id);
  const obj2 = transitionToChannel;
  obj2.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
