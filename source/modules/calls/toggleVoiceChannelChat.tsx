// Module ID: 13500
// Function ID: 103797
// Name: toggleVoiceChannelChat
// Dependencies: [1348, 4203, 4144, 4324, 2]
// Exports: toggleVoiceChannelChat

// Module 13500 (toggleVoiceChannelChat)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  let tmp = open;
  if (closure_3.isConnected()) {
    const channelId = closure_3.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      channel = channel.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          if (null == tmp) {
            tmp = !chatOpen.getChatOpen(channelId);
          }
          importDefault(4324).updateChatOpen(channelId, tmp);
          const obj = { channelId, chatOpen: tmp };
          return obj;
        }
      }
      return null;
    }
  } else {
    return null;
  }
};
