// Module ID: 13665
// Function ID: 13666
// Name: openAppChannelToChat
// Dependencies: [13666, 5669, 9631, 2]
// Exports: default

// Module 13665 (openAppChannelToChat)
import transitionToChannel from "transitionToChannel" /* 5669 */;
import openChannelSecondaryViewChatDefault from "openChannelSecondaryViewChat" /* 9631 */;
import preloadChannelAppFrame from "preloadChannelAppFrame" /* 13666 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/app_channels/native/openAppChannelToChat.tsx");

export default function openAppChannelToChat(id) {
  const obj = preloadChannelAppFrame;
  const result = obj.cancelChannelAppFramePreload(id.id);
  const obj2 = transitionToChannel;
  obj2.transitionToChannel(id.id);
  openChannelSecondaryViewChatDefault(id.guild_id, id.id);
};
