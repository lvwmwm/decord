// Module ID: 10776
// Function ID: 10777
// Name: useIsVideoMode
// Dependencies: [6757, 5092, 2130, 5146, 5918, 504, 2]
// Exports: default, isVideoMode

// Module 10776 (useIsVideoMode)
import get_initialized from "get initialized" /* 504 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5146 */;
import VoiceStateStore from "VoiceStateStore" /* 5918 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
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
};
export function isVideoMode(arg0, arg1, arg2, arg3, arg4) {
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
