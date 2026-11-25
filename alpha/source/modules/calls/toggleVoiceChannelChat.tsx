// Module ID: 15885
// Function ID: 15886
// Name: toggleVoiceChannelChat
// Dependencies: [4861, 5820, 6902, 6098, 2]
// Exports: toggleVoiceChannelChat

// Module 15885 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6098 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5820 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6902 */;
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
