// Module ID: 12826
// Function ID: 12827
// Name: useMyCurrentStageChannel
// Dependencies: [5092, 5146, 504, 2]
// Exports: default

// Module 12826 (useMyCurrentStageChannel)
import get_initialized from "get initialized" /* 504 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import size from "module_2" /* 2 */;

let channel, voiceChannelId;

const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  const items = [SelectedChannelStore, ChannelStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
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
