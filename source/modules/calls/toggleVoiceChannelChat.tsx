// Module ID: 13313
// Function ID: 101132
// Name: toggleVoiceChannelChat
// Dependencies: []
// Exports: toggleVoiceChannelChat

// Module 13313 (toggleVoiceChannelChat)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  let tmp = open;
  if (closure_3.isConnected()) {
    const channelId = closure_3.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          if (null == tmp) {
            tmp = !chatOpen.getChatOpen(channelId);
          }
          importDefault(dependencyMap[3]).updateChatOpen(channelId, tmp);
          const obj = { channelId, chatOpen: tmp };
          return obj;
        }
      }
      return null;
    }
  } else {
    return null;
  }
};
