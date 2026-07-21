// Module ID: 10804
// Function ID: 83905
// Name: openChannelCallModalForChannelId
// Dependencies: []
// Exports: default

// Module 10804 (openChannelCallModalForChannelId)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("utils/native/openChannelCallModalForChannelId.tsx");

export default function openChannelCallModalForChannelId(channelId) {
  let isGuildStageVoiceResult = arg1;
  const channel = channel.getChannel(channelId);
  if (null != channel) {
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = false === arg1(dependencyMap[1]).connectToStage(channel);
      const obj2 = arg1(dependencyMap[1]);
    }
    if (!isGuildStageVoiceResult) {
      arg1(dependencyMap[2]).openChannelCallModal(channel);
      const obj3 = arg1(dependencyMap[2]);
    }
  }
};
