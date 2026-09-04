// Module ID: 9611
// Function ID: 9612
// Name: useMyCurrentStageChannel
// Dependencies: [1386, 1980, 586, 2]
// Exports: default

// Module 9611 (useMyCurrentStageChannel)
import initialize from "initialize" /* 586 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import closure_3 from "handleConnectionOpen" /* 1980 */;

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
