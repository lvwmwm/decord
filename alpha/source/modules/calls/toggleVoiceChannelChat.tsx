// Module ID: 16604
// Function ID: 16605
// Name: toggleVoiceChannelChat
// Dependencies: [4990, 5898, 6978, 5893, 2]
// Exports: toggleVoiceChannelChat

// Module 16604 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5893 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5898 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6978 */;
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
