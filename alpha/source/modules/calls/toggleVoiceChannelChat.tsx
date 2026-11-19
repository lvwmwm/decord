// Module ID: 15651
// Function ID: 15652
// Name: toggleVoiceChannelChat
// Dependencies: [4641, 5533, 6499, 5528, 2]
// Exports: toggleVoiceChannelChat

// Module 15651 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5528 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5533 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6499 */;
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
