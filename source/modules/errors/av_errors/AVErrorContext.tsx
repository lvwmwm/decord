// Module ID: 16403
// Function ID: 126735
// Name: getCommonErrorContext
// Dependencies: []
// Exports: getStreamErrorContext, getVoiceChannelErrorContext

// Module 16403 (getCommonErrorContext)
function getCommonErrorContext() {
  const obj = {};
  const videoDevices = store.getVideoDevices();
  let name;
  if (null != videoDevices[closure_2.getVideoDeviceId(closure_2)]) {
    name = tmp2.name;
  }
  obj.videoDeviceName = name;
  const inputDevices = store.getInputDevices();
  let name1;
  if (null != inputDevices[closure_2.getInputDeviceId(closure_2)]) {
    name1 = tmp5.name;
  }
  obj.audioInputDeviceName = name1;
  const outputDevices = store.getOutputDevices();
  let name2;
  if (null != outputDevices[closure_2.getOutputDeviceId(closure_2)]) {
    name2 = tmp8.name;
  }
  obj.audioOutputDeviceName = name2;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/errors/av_errors/AVErrorContext.tsx");

export const getVoiceChannelErrorContext = function getVoiceChannelErrorContext() {
  const voiceChannelId = voiceChannelId.getVoiceChannelId();
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
  obj.mediaContext = arg1(dependencyMap[4]).MediaEngineContextTypes.DEFAULT;
  const merged = Object.assign(getCommonErrorContext());
  return obj;
};
export const getStreamErrorContext = function getStreamErrorContext(streamKey) {
  let channelId;
  let ownerId;
  let obj = arg1(dependencyMap[5]);
  ({ channelId, ownerId } = obj.decodeStreamKey(streamKey));
  const rTCConnection = rTCConnection.getRTCConnection(streamKey);
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
  obj.mediaContext = arg1(dependencyMap[4]).MediaEngineContextTypes.STREAM;
  obj.streamKey = streamKey;
  obj.userId = ownerId;
  const merged = Object.assign(getCommonErrorContext());
  return obj;
};
export { getCommonErrorContext };
