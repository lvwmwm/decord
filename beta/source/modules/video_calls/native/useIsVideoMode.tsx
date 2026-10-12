// Module ID: 11070
// Function ID: 11071
// Name: useIsVideoMode
// Dependencies: [5897, 2065, 2012, 2116, 5113, 558, 576, 504, 2]
// Exports: isVideoMode

// Module 11070 (useIsVideoMode)
import react from "react" /* 576 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVideoMode() {
  let tmp4;
  let tmp5;
  let voiceChannelId;
  let tmp2 = dependencyMap;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, SelectedChannelStore, MediaEngineStore, VoiceStateStore, ApplicationStreamingStore];
    const fn = function c() {
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      let tmp2 = null != channel;
      if (tmp2) {
        tmp2 = obj.getAllActiveStreams().length > 0 || obj2.hasVideo(channel.id) || obj3.isVideoEnabled();
        ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
      }
      return tmp2;
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
}) : (function useIsVideoMode() {
  let voiceChannelId;
  const obj = get_initialized;
  const items = [ChannelStore, SelectedChannelStore, MediaEngineStore, VoiceStateStore, ApplicationStreamingStore];
  return obj.useStateFromStores(items, () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = obj.getAllActiveStreams().length > 0 || obj2.hasVideo(channel.id) || obj3.isVideoEnabled();
      ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
    }
    return tmp2;
  });
});
function isVideoMode(arg0, arg1, arg2, arg3, arg4) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = ChannelStore;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = SelectedChannelStore;
  }
  let obj3 = arg2;
  if (arg2 === undefined) {
    obj3 = ApplicationStreamingStore;
  }
  let obj4 = arg3;
  if (arg3 === undefined) {
    obj4 = VoiceStateStore;
  }
  let obj5 = arg4;
  if (arg4 === undefined) {
    obj5 = MediaEngineStore;
  }
  const channel = obj.getChannel(obj2.getVoiceChannelId());
  let tmp2 = null != channel;
  if (tmp2) {
    tmp2 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
    obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
  }
  return tmp2;
}
const result = size.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default tmp2;
export { isVideoMode };
