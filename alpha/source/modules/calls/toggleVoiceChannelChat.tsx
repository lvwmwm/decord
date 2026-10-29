// Module ID: 16271
// Function ID: 16272
// Name: toggleVoiceChannelChat
// Dependencies: [4857, 5752, 6830, 5748, 2]
// Exports: toggleVoiceChannelChat

// Module 16271 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5748 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5752 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6830 */;
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
