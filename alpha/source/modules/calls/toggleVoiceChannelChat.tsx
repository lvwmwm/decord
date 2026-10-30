// Module ID: 16311
// Function ID: 16312
// Name: toggleVoiceChannelChat
// Dependencies: [4858, 5759, 6837, 5754, 2]
// Exports: toggleVoiceChannelChat

// Module 16311 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
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
