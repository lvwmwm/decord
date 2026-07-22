// Module ID: 10624
// Function ID: 82870
// Name: useMyCurrentStageChannel
// Dependencies: []
// Exports: default

// Module 10624 (useMyCurrentStageChannel)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [closure_3, closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null != voiceChannelId) {
      const channel = channel.getChannel(voiceChannelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          return channel;
        }
      }
    }
    return null;
  });
};
