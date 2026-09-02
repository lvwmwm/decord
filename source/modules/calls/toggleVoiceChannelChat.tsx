// Module ID: 14389
// Function ID: 14390
// Name: toggleVoiceChannelChat
// Dependencies: [1386, 4554, 4494, 4721, 2]
// Exports: toggleVoiceChannelChat

// Module 14389 (toggleVoiceChannelChat)
import _modDef4721 from "module_4721" /* 4721 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "createRTCConnection" /* 4554 */;
import closure_4 from "getParticipants" /* 4494 */;

const result = require("set").fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  let obj = connected;
  if (connected.isConnected()) {
    const channelId = obj.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      channel = channel.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          let tmp3 = open;
          if (open == null) {
            tmp3 = !chatOpen.getChatOpen(channelId);
          }
          _modDef4721.updateChatOpen(channelId, tmp3);
          obj = { channelId: null, chatOpen: null };
          obj[0] = channelId;
          obj[1] = tmp3;
          return obj;
        }
      }
      return null;
    }
  } else {
    return null;
  }
};
