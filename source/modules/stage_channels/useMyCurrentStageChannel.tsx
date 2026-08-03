// Module ID: 10812
// Function ID: 10813
// Name: useMyCurrentStageChannel
// Dependencies: [1372, 1931, 589, 2]
// Exports: default

// Module 10812 (useMyCurrentStageChannel)
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [handleConnectionOpen, ensureGuildLoaded];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    voiceChannelId = voiceChannelId.getVoiceChannelId();
    if (null != voiceChannelId) {
      channel = channel.getChannel(voiceChannelId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        return channel;
      }
    }
    return null;
  });
};
