// Module ID: 9771
// Function ID: 9772
// Name: useMyCurrentStageChannel
// Dependencies: [2041, 2095, 504, 2]
// Exports: default

// Module 9771 (useMyCurrentStageChannel)
import initialize from "initialize" /* 504 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [SelectedChannelStore, ChannelStore];
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
