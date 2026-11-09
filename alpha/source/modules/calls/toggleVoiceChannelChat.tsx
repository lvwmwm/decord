// Module ID: 16673
// Function ID: 16674
// Name: toggleVoiceChannelChat
// Dependencies: [4989, 5893, 6898, 5888, 2]
// Exports: toggleVoiceChannelChat

// Module 16673 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5893 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
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
