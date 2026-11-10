// Module ID: 16700
// Function ID: 16701
// Name: toggleVoiceChannelChat
// Dependencies: [4991, 5895, 6901, 5890, 2]
// Exports: toggleVoiceChannelChat

// Module 16700 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5890 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5895 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6901 */;
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
