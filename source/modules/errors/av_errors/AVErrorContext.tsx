// Module ID: 16528
// Function ID: 128951
// Name: getCommonErrorContext
// Dependencies: [4177, 4202, 1906, 4216, 4227, 4194, 2]
// Exports: getStreamErrorContext, getVoiceChannelErrorContext

// Module 16528 (getCommonErrorContext)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function getCommonErrorContext() {
  const obj = {};
  const videoDevices = store.getVideoDevices();
  const tmp2 = videoDevices[store.getVideoDeviceId(store)];
  let name;
  if (null != tmp2) {
    name = tmp2.name;
  }
  obj.videoDeviceName = name;
  const inputDevices = store.getInputDevices();
  const tmp5 = inputDevices[store.getInputDeviceId(store)];
  let name1;
  if (null != tmp5) {
    name1 = tmp5.name;
  }
  obj.audioInputDeviceName = name1;
  const outputDevices = store.getOutputDevices();
  const tmp8 = outputDevices[store.getOutputDeviceId(store)];
  let name2;
  if (null != tmp8) {
    name2 = tmp8.name;
  }
  obj.audioOutputDeviceName = name2;
  return obj;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/errors/av_errors/AVErrorContext.tsx");

export const getVoiceChannelErrorContext = function getVoiceChannelErrorContext() {
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  const obj = {};
  let tmp2;
  if (null != voiceChannelId) {
    tmp2 = voiceChannelId;
  }
  obj.channelId = tmp2;
  const mediaSessionId = store2.getMediaSessionId();
  let tmp4;
  if (null != mediaSessionId) {
    tmp4 = mediaSessionId;
  }
  obj.mediaSessionId = tmp4;
  obj.rtcConnectionId = store2.getRTCConnectionId();
  obj.mediaContext = require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT;
  const merged = Object.assign(getCommonErrorContext());
  return obj;
};
export const getStreamErrorContext = function getStreamErrorContext(streamKey) {
  let channelId;
  let ownerId;
  let obj = require(4194) /* isStreamKey */;
  ({ channelId, ownerId } = obj.decodeStreamKey(streamKey));
  rTCConnection = rTCConnection.getRTCConnection(streamKey);
  obj = { channelId };
  let mediaSessionId;
  if (null != rTCConnection) {
    mediaSessionId = rTCConnection.getMediaSessionId();
  }
  let tmp3;
  if (null != mediaSessionId) {
    tmp3 = mediaSessionId;
  }
  obj.mediaSessionId = tmp3;
  let rTCConnectionId;
  if (null != rTCConnection) {
    rTCConnectionId = rTCConnection.getRTCConnectionId();
  }
  obj.rtcConnectionId = rTCConnectionId;
  obj.mediaContext = require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM;
  obj.streamKey = streamKey;
  obj.userId = ownerId;
  const merged = Object.assign(getCommonErrorContext());
  return obj;
};
export { getCommonErrorContext };
