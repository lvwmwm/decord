// Module ID: 14698
// Function ID: 14699
// Name: toggleVoiceChannelChat
// Dependencies: [2064, 5109, 6043, 5105, 2]
// Exports: toggleVoiceChannelChat

// Module 14698 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5105 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;
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
