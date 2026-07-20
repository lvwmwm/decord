// Module ID: 9028
// Function ID: 70937
// Name: logRemoteCommand
// Dependencies: []
// Exports: connectToRemote, fetchDevices, persistSelectedDeviceId, remoteAudioSettingsUpdate, remoteDisconnect, remoteVoiceStateUpdate, transferToPlayStation, waitForSession

// Module 9028 (logRemoteCommand)
function logRemoteCommand(AUDIO_SETTINGS_UPDATE, sessionId) {
  let obj = importDefault(dependencyMap[5]);
  obj = { command_type: AUDIO_SETTINGS_UPDATE };
  const sessionById = sessionById.getSessionById(sessionId);
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
  const _disconnectRemote = obj;
  return obj(...arguments);
}
function getConnectNonce() {
  return _getConnectNonce(...arguments);
}
function _getConnectNonce() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getConnectNonce = obj;
  return obj(...arguments);
}
function cancelConnectRequest(arg0) {
  const HTTP = arg1(dependencyMap[11]).HTTP;
  return HTTP.del({ url: closure_8.CONNECT_REQUEST(arg0), rejectWithError: false });
}
function _fetchDevices() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchDevices = obj;
  return obj(...arguments);
}
function _sendConnectVoiceCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _sendConnectVoiceCommand = obj;
  return obj(...arguments);
}
function cancelCommand() {
  return _cancelCommand(...arguments);
}
function _cancelCommand() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _cancelCommand = obj;
  return obj(...arguments);
}
function _transferToPlayStation() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _transferToPlayStation = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_7, Endpoints: closure_8, PlatformTypes: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/game_console/GameConsoleActionCreators.tsx");

export const waitForSession = function waitForSession(XBOX, id, nonce) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "WAIT_FOR_REMOTE_SESSION", sessionType: XBOX, nonce, channelId: id };
  obj.dispatch(obj);
};
export { disconnectRemote };
export const connectToRemote = function connectToRemote(sessionId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "REMOTE_SESSION_CONNECT", sessionId };
  obj.dispatch(obj);
};
export const remoteVoiceStateUpdate = function remoteVoiceStateUpdate(remoteSessionId, arg1) {
  let selfDeaf;
  let selfMute;
  ({ selfMute, selfDeaf } = arg1);
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "VOICE_STATE_UPDATE", self_mute: selfMute, self_deaf: selfDeaf } };
  obj.dispatch(obj);
  logRemoteCommand("VOICE_STATE_UPDATE", remoteSessionId);
};
export const remoteDisconnect = function remoteDisconnect(remoteSessionId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "REMOTE_COMMAND", sessionId: remoteSessionId, payload: { type: "DISCONNECT" } };
  obj.dispatch(obj);
  logRemoteCommand("DISCONNECT", remoteSessionId);
  disconnectRemote();
};
export const remoteAudioSettingsUpdate = function remoteAudioSettingsUpdate(sessionId, id) {
  let obj = id(dependencyMap[9]);
  const result = obj.coerceAudioContextForProto(arg2);
  if (null != result) {
    obj = { type: "REMOTE_COMMAND", sessionId };
    obj = { type: "AUDIO_SETTINGS_UPDATE", context: result, id };
    const merged = Object.assign(arg3);
    obj.payload = obj;
    importDefault(dependencyMap[6]).dispatch(obj);
    logRemoteCommand("AUDIO_SETTINGS_UPDATE", sessionId);
    const obj2 = importDefault(dependencyMap[6]);
  }
};
export { getConnectNonce };
export { cancelConnectRequest };
export const fetchDevices = function fetchDevices(closure_0) {
  return _fetchDevices(...arguments);
};
export const persistSelectedDeviceId = function persistSelectedDeviceId(closure_0, value) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GAME_CONSOLE_SELECT_DEVICE", platform: closure_0, deviceId: value };
  obj.dispatch(obj);
};
export { cancelCommand };
export const transferToPlayStation = function transferToPlayStation(arg0, id, arg2) {
  return _transferToPlayStation(...arguments);
};
