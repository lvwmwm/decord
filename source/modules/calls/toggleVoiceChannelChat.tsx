// Module ID: 14437
// Function ID: 14438
// Name: toggleVoiceChannelChat
// Dependencies: [1386, 4557, 4497, 4729, 2]
// Exports: toggleVoiceChannelChat

// Module 14437 (toggleVoiceChannelChat)
import _modDef4729 from "module_4729" /* 4729 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "createRTCConnection" /* 4557 */;
import closure_4 from "getParticipants" /* 4497 */;

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
          _modDef4729.updateChatOpen(channelId, tmp3);
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
