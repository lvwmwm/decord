// Module ID: 9079
// Function ID: 71229
// Name: logRemoteCommand
// Dependencies: [5, 4202, 4145, 4144, 653, 675, 686, 4470, 1212, 8884, 9080, 507, 1184, 9081, 9082, 9085, 2]
// Exports: connectToRemote, fetchDevices, persistSelectedDeviceId, remoteAudioSettingsUpdate, remoteDisconnect, remoteVoiceStateUpdate, transferToPlayStation, waitForSession

// Module 9079 (logRemoteCommand)
import expandLocation from "expandLocation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function logRemoteCommand(AUDIO_SETTINGS_UPDATE, sessionId) {
  let obj = importDefault(675);
  obj = { command_type: AUDIO_SETTINGS_UPDATE };
  sessionById = sessionById.getSessionById(sessionId);
  let os;
  if (null != sessionById) {
    const clientInfo = sessionById.clientInfo;
    if (null != clientInfo) {
      os = clientInfo.os;
    }
  }
  obj.remote_platform = os;
  obj.track(constants.REMOTE_COMMAND_SENT, obj);
}
function disconnectRemote() {
  return _disconnectRemote(...arguments);
}
function _disconnectRemote() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function getConnectNonce() {
  return _getConnectNonce(...arguments);
}
function _getConnectNonce() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function cancelConnectRequest(arg0) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  return HTTP.del({ url: closure_8.CONNECT_REQUEST(arg0), rejectWithError: false });
}
function _fetchDevices() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _sendConnectVoiceCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function cancelCommand() {
  return _cancelCommand(...arguments);
}
function _cancelCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _transferToPlayStation() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_7, Endpoints: closure_8, PlatformTypes: closure_9 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_console/GameConsoleActionCreators.tsx");

export const waitForSession = function waitForSession(XBOX, id, nonce) {
  let obj = importDefault(686);
  obj = { type: "WAIT_FOR_REMOTE_SESSION", sessionType: XBOX, nonce, channelId: id };
  obj.dispatch(obj);
};
export { disconnectRemote };
export const connectToRemote = function connectToRemote(sessionId) {
  let obj = importDefault(686);
  obj = { type: "REMOTE_SESSION_CONNECT", sessionId };
  obj.dispatch(obj);
};
export const remoteVoiceStateUpdate = function remoteVoiceStateUpdate(remoteSessionId, arg1) {
  let selfDeaf;
  let selfMute;
  ({ selfMute, selfDeaf } = arg1);
  let obj = importDefault(686);
  obj = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "VOICE_STATE_UPDATE", self_mute: selfMute, self_deaf: selfDeaf } };
  obj.dispatch(obj);
  logRemoteCommand("VOICE_STATE_UPDATE", remoteSessionId);
};
export const remoteDisconnect = function remoteDisconnect(remoteSessionId) {
  let obj = importDefault(686);
  obj = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "DISCONNECT" } };
  obj.dispatch(obj);
  logRemoteCommand("DISCONNECT", remoteSessionId);
  disconnectRemote();
};
export const remoteAudioSettingsUpdate = function remoteAudioSettingsUpdate(sessionId, id) {
  let obj = require(8884) /* snapVolumeToDefault */;
  const result = obj.coerceAudioContextForProto(arg2);
  if (null != result) {
    obj = { type: "REMOTE_COMMAND", sessionId };
    obj = { type: "AUDIO_SETTINGS_UPDATE", context: result, id };
    const merged = Object.assign(arg3);
    obj.payload = obj;
    importDefault(686).dispatch(obj);
    logRemoteCommand("AUDIO_SETTINGS_UPDATE", sessionId);
    const obj2 = importDefault(686);
  }
};
export { getConnectNonce };
export { cancelConnectRequest };
export const fetchDevices = function fetchDevices(closure_0) {
  return _fetchDevices(...arguments);
};
export const persistSelectedDeviceId = function persistSelectedDeviceId(closure_0, value) {
  let obj = importDefault(686);
  obj = { type: "GAME_CONSOLE_SELECT_DEVICE", platform: closure_0, deviceId: value };
  obj.dispatch(obj);
};
export { cancelCommand };
export const transferToPlayStation = function transferToPlayStation(arg0, id, arg2) {
  return _transferToPlayStation(...arguments);
};
