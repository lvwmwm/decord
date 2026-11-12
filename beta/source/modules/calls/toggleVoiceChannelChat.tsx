// Module ID: 16705
// Function ID: 16706
// Name: toggleVoiceChannelChat
// Dependencies: [5019, 5925, 6931, 5920, 2]
// Exports: toggleVoiceChannelChat

// Module 16705 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5920 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6931 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export function toggleVoiceChannelChat(open) {
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
}
