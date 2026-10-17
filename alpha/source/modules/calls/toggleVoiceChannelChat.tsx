// Module ID: 15542
// Function ID: 15543
// Name: toggleVoiceChannelChat
// Dependencies: [2068, 5209, 6292, 5205, 2]
// Exports: toggleVoiceChannelChat

// Module 15542 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5205 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5209 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6292 */;
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
