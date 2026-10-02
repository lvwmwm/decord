// Module ID: 9382
// Function ID: 9383
// Name: useMyCurrentStageChannel
// Dependencies: [2051, 2102, 558, 576, 504, 2]

// Module 9382 (useMyCurrentStageChannel)
import react from "react" /* 576 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, voiceChannelId;

let tmp;
const get_initialized = tmp(504);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore, ChannelStore];
    const fn = function u() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
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
});
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default tmp2;
