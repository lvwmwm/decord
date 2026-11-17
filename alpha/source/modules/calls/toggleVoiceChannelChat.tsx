// Module ID: 17014
// Function ID: 17015
// Name: toggleVoiceChannelChat
// Dependencies: [5159, 6068, 7024, 6063, 2]
// Exports: toggleVoiceChannelChat

// Module 17014 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6063 */;
import ChannelStore from "ChannelStore" /* 5159 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6068 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7024 */;
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
