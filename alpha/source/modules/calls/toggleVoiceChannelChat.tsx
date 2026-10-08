// Module ID: 14599
// Function ID: 14600
// Name: toggleVoiceChannelChat
// Dependencies: [2063, 5108, 6041, 5104, 2]
// Exports: toggleVoiceChannelChat

// Module 14599 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5104 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6041 */;
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
