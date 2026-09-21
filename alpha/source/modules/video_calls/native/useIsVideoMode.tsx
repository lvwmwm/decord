// Module ID: 10061
// Function ID: 10062
// Name: useIsVideoMode
// Dependencies: [4778, 2041, 1992, 2095, 4775, 504, 2]
// Exports: default, isVideoMode

// Module 10061 (useIsVideoMode)
import initialize from "initialize" /* 504 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4778 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2095 */;
import VoiceStateStore from "VoiceStateStore" /* 4775 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useIsVideoMode.tsx");

export default function useIsVideoMode() {
  const items = [ChannelStore, SelectedChannelStore, MediaEngineStore, VoiceStateStore, ApplicationStreamingStore];
  return initialize.useStateFromStores(items, () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
      const tmp3 = ApplicationStreamingStore.getAllActiveStreams().length > 0 || VoiceStateStore.hasVideo(channel.id) || MediaEngineStore.isVideoEnabled();
    }
    return tmp2;
  });
};
export const isVideoMode = function isVideoMode(arg0, arg1, arg2, arg3, arg4) {
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
    const tmp3 = obj3.getAllActiveStreams().length > 0 || obj4.hasVideo(channel.id) || obj5.isVideoEnabled();
  }
  return tmp2;
};
