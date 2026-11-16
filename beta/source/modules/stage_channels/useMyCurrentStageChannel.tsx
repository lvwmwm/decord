// Module ID: 12916
// Function ID: 12917
// Name: useMyCurrentStageChannel
// Dependencies: [5155, 5209, 504, 2]
// Exports: default

// Module 12916 (useMyCurrentStageChannel)
import get_initialized from "get initialized" /* 504 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
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
