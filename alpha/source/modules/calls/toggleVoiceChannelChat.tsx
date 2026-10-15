// Module ID: 15431
// Function ID: 15432
// Name: toggleVoiceChannelChat
// Dependencies: [2065, 5169, 6252, 5165, 2]
// Exports: toggleVoiceChannelChat

// Module 15431 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5165 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5169 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6252 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  const obj = RTCConnectionStore;
  if (RTCConnectionStore.isConnected()) {
    const channelId = obj.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          let tmp3 = open;
          if (open == null) {
            tmp3 = !ChannelRTCStore.getChatOpen(channelId);
          }
          const obj3 = ChannelRTCActionCreatorsDefault;
          obj3.updateChatOpen(channelId, tmp3);
          return { channelId, chatOpen: tmp3 };
        }
      }
      return null;
    }
  } else {
    return null;
  }
};
