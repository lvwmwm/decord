// Module ID: 9573
// Function ID: 9574
// Name: useMyCurrentStageChannel
// Dependencies: [1391, 1981, 589, 2]
// Exports: default

// Module 9573 (useMyCurrentStageChannel)
import initialize from "initialize" /* 589 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "handleConnectionOpen" /* 1981 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [closure_3, closure_2];
  return initialize.useStateFromStores(items, () => {
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
