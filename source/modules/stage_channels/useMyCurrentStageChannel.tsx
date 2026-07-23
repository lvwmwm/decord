// Module ID: 10634
// Function ID: 82920
// Name: useMyCurrentStageChannel
// Dependencies: [1348, 1906, 566, 2]
// Exports: default

// Module 10634 (useMyCurrentStageChannel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [closure_3, _isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const voiceChannelId = outer1_3.getVoiceChannelId();
    if (null != voiceChannelId) {
      const channel = outer1_2.getChannel(voiceChannelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          return channel;
        }
      }
    }
    return null;
  });
};
