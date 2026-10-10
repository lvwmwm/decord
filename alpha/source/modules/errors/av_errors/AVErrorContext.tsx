// Module ID: 18597
// Function ID: 18598
// Name: AVErrorContext
// Dependencies: [2012, 5110, 2116, 7428, 5137, 5900, 2]
// Exports: getCommonErrorContext, getStreamErrorContext, getVoiceChannelErrorContext

// Module 18597 (AVErrorContext)
import BaseConnectionEvent from "BaseConnectionEvent" /* 5137 */;
import StreamKeyUtils from "StreamKeyUtils" /* 5900 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7428 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorContext.tsx");

export const getVoiceChannelErrorContext = function getVoiceChannelErrorContext() {
  let mediaSessionId;
  let name1;
  let name2;
  let obj2;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  const obj = { channelId: voiceChannelId, mediaSessionId, rtcConnectionId: obj2.getRTCConnectionId(), mediaContext: BaseConnectionEvent.MediaEngineContextTypes.DEFAULT };
  mediaSessionId = RTCConnectionStore.getMediaSessionId();
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp4 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  obj2 = RTCConnectionStore;
  if (tmp4 != null) {
    name = tmp4.name;
  }
  const obj4 = { videoDeviceName: name, audioInputDeviceName: name1, audioOutputDeviceName: name2 };
  const inputDevices = obj3.getInputDevices();
  const tmp7 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  name1 = undefined;
  if (tmp7 != null) {
    name1 = tmp7.name;
  }
  const outputDevices = obj3.getOutputDevices();
  const tmp10 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  name2 = undefined;
  if (tmp10 != null) {
    name2 = tmp10.name;
  }
  const merged = Object.assign(obj4);
  return obj;
};
export const getStreamErrorContext = function getStreamErrorContext(streamKey) {
  let channelId;
  let mediaSessionId;
  let name1;
  let name2;
  let ownerId;
  let rTCConnectionId;
  const obj = StreamKeyUtils;
  ({ channelId, ownerId } = obj.decodeStreamKey(streamKey));
  obj.decodeStreamKey(streamKey);
  const rTCConnection = StreamRTCConnectionStore.getRTCConnection(streamKey);
  const obj2 = { channelId, mediaSessionId, rtcConnectionId: rTCConnectionId, mediaContext: BaseConnectionEvent.MediaEngineContextTypes.STREAM, streamKey, userId: ownerId };
  mediaSessionId = undefined;
  if (rTCConnection != null) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  rTCConnectionId = undefined;
  if (rTCConnection != null) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp7 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp7 != null) {
    name = tmp7.name;
  }
  const obj3 = { videoDeviceName: name, audioInputDeviceName: name1, audioOutputDeviceName: name2 };
  const inputDevices = obj4.getInputDevices();
  const tmp10 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  name1 = undefined;
  if (tmp10 != null) {
    name1 = tmp10.name;
  }
  const outputDevices = obj4.getOutputDevices();
  const tmp13 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  name2 = undefined;
  if (tmp13 != null) {
    name2 = tmp13.name;
  }
  const merged = Object.assign(obj3);
  return obj2;
};
export const getCommonErrorContext = function getCommonErrorContext() {
  let name1;
  let name2;
  const videoDevices = MediaEngineStore.getVideoDevices();
  const tmp2 = videoDevices[MediaEngineStore.getVideoDeviceId(MediaEngineStore)];
  let name;
  if (tmp2 != null) {
    name = tmp2.name;
  }
  const obj2 = { videoDeviceName: name, audioInputDeviceName: name1, audioOutputDeviceName: name2 };
  const inputDevices = obj.getInputDevices();
  const tmp5 = inputDevices[MediaEngineStore.getInputDeviceId(MediaEngineStore)];
  name1 = undefined;
  if (tmp5 != null) {
    name1 = tmp5.name;
  }
  const outputDevices = obj.getOutputDevices();
  const tmp8 = outputDevices[MediaEngineStore.getOutputDeviceId(MediaEngineStore)];
  name2 = undefined;
  if (tmp8 != null) {
    name2 = tmp8.name;
  }
  return obj2;
};
