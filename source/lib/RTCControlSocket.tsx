// Module ID: 12788
// Function ID: 99499
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 683, 4191, 664, 561, 3, 4206, 477, 44, 4297, 2]

// Module 12788 (_isNativeReflectConstruct)
import closure_3 from "DesktopSources";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DesktopSources from "DesktopSources";
import tmp3 from "TypedEventEmitter";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function noop() {

}
function convertCodecs(arr) {
  return arr.map((name) => ({ name: name.name, type: name.type, priority: 1000 * name.priority, payload_type: name.payloadType, rtx_payload_type: name.rtxPayloadType, encode: name.encode, decode: name.decode }));
}
function convertStreamParametersToWire(arr) {
  let mapped;
  if (null != arr) {
    mapped = arr.map((type) => {
      let obj = { type: type.type, rid: type.rid, ssrc: type.ssrc, active: type.active, quality: type.quality, rtx_ssrc: type.rtxSsrc, max_bitrate: type.maxBitrate, max_framerate: type.maxFrameRate };
      let tmp;
      if (null != type.maxResolution) {
        obj = { type: type.maxResolution.type, width: type.maxResolution.width, height: type.maxResolution.height };
        tmp = obj;
      }
      obj.max_resolution = tmp;
      return obj;
    });
  }
  return mapped;
}
function convertStreamParametersFromWire(arr) {
  let mapped;
  if (null != arr) {
    mapped = arr.map((type) => {
      let obj = {};
      type = type.type;
      if ("audio" === type) {
        let VIDEO = outer1_10.AUDIO;
      } else if ("test" === type) {
        VIDEO = outer1_10.TEST;
      } else if ("screen" === type) {
        VIDEO = outer1_10.SCREEN;
      } else {
        VIDEO = outer1_10.VIDEO;
      }
      obj.type = VIDEO;
      ({ rid: obj.rid, ssrc: obj.ssrc, rtx_ssrc: obj.rtxSsrc, active: obj.active, quality: obj.quality, max_bitrate: obj.maxBitrate, max_framerate: obj.maxFrameRate } = type);
      let tmp5;
      if (null != type.max_resolution) {
        obj = { type: type.max_resolution.type, width: type.max_resolution.width, height: type.max_resolution.height };
        tmp5 = obj;
      }
      obj.maxResolution = tmp5;
      return obj;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  return mapped;
}
({ MediaEngineContextTypes: closure_9, MediaTypes: closure_10, SpeakingFlags: closure_11 } = DesktopSources);
let obj = { IDENTIFY: 0, [0]: "IDENTIFY", SELECT_PROTOCOL: 1, [1]: "SELECT_PROTOCOL", READY: 2, [2]: "READY", HEARTBEAT: 3, [3]: "HEARTBEAT", SELECT_PROTOCOL_ACK: 4, [4]: "SELECT_PROTOCOL_ACK", SPEAKING: 5, [5]: "SPEAKING", HEARTBEAT_ACK: 6, [6]: "HEARTBEAT_ACK", RESUME: 7, [7]: "RESUME", HELLO: 8, [8]: "HELLO", RESUMED: 9, [9]: "RESUMED", CLIENT_CONNECT: 11, [11]: "CLIENT_CONNECT", VIDEO: 12, [12]: "VIDEO", CLIENT_DISCONNECT: 13, [13]: "CLIENT_DISCONNECT", SESSION_UPDATE: 14, [14]: "SESSION_UPDATE", MEDIA_SINK_WANTS: 15, [15]: "MEDIA_SINK_WANTS", VOICE_BACKEND_VERSION: 16, [16]: "VOICE_BACKEND_VERSION", CHANNEL_OPTIONS_UPDATE: 17, [17]: "CHANNEL_OPTIONS_UPDATE", FLAGS: 18, [18]: "FLAGS", PLATFORM: 20, [20]: "PLATFORM", DAVE_PROTOCOL_PREPARE_TRANSITION: 21, [21]: "DAVE_PROTOCOL_PREPARE_TRANSITION", DAVE_PROTOCOL_EXECUTE_TRANSITION: 22, [22]: "DAVE_PROTOCOL_EXECUTE_TRANSITION", DAVE_PROTOCOL_READY_FOR_TRANSITION: 23, [23]: "DAVE_PROTOCOL_READY_FOR_TRANSITION", DAVE_PROTOCOL_PREPARE_EPOCH: 24, [24]: "DAVE_PROTOCOL_PREPARE_EPOCH", MLS_EXTERNAL_SENDER_PACKAGE: 25, [25]: "MLS_EXTERNAL_SENDER_PACKAGE", MLS_KEY_PACKAGE: 26, [26]: "MLS_KEY_PACKAGE", MLS_PROPOSALS: 27, [27]: "MLS_PROPOSALS", MLS_COMMIT_WELCOME: 28, [28]: "MLS_COMMIT_WELCOME", MLS_PREPARE_COMMIT_TRANSITION: 29, [29]: "MLS_PREPARE_COMMIT_TRANSITION", MLS_WELCOME: 30, [30]: "MLS_WELCOME", MLS_INVALID_COMMIT_WELCOME: 31, [31]: "MLS_INVALID_COMMIT_WELCOME", CLIENT_CANNOT_REACH_RTC_SERVER: 32, [32]: "CLIENT_CANNOT_REACH_RTC_SERVER" };
let closure_13 = { AUTHENTICATION_FAILED: 4004, [4004]: "AUTHENTICATION_FAILED", INVALID_SESSION: 4006, [4006]: "INVALID_SESSION", SERVER_NOT_FOUND: 4011, [4011]: "SERVER_NOT_FOUND", SERVER_CRASH: 4015, [4015]: "SERVER_CRASH", CANCELED: 4016, [4016]: "CANCELED", HEARTBEAT_TIMEOUT: 4800, [4800]: "HEARTBEAT_TIMEOUT", UNRESUMABLE: 4801, [4801]: "UNRESUMABLE", RESET_BACKOFF: 4802, [4802]: "RESET_BACKOFF" };
let closure_14 = { DISCONNECTED: 0, [0]: "DISCONNECTED", CONNECTING: 1, [1]: "CONNECTING", IDENTIFYING: 2, [2]: "IDENTIFYING", RESUMING: 3, [3]: "RESUMING", CONNECTED: 4, [4]: "CONNECTED", RECONNECTING: 5, [5]: "RECONNECTING" };
let closure_15 = 20 * require("set").Millis.SECOND;
const MINUTE = require("set").Millis.MINUTE;
let closure_17 = 5 * require("set").Millis.SECOND;
obj = { Connecting: "connecting", Connect: "connect", Disconnect: "disconnect", Resuming: "resuming", Ready: "ready", Speaking: "speaking", Video: "video", Ping: "ping", ClientConnect: "client-connect", ClientDisconnect: "client-disconnect", Codecs: "codecs", MediaSessionId: "media-session-id", MediaSinkWants: "media-sink-wants", VoiceBackendVersion: "voice-backend-version", KeyframeInterval: "keyframe-interval", ChannelOptionsUpdateSecureFramesProtocol: "update-secure-frames-protocol", Flags: "flags", Platform: "platform", SDP: "sdp", Encryption: "encryption", BandwidthEstimationExperiment: "bandwidth-estimation-experiment", SecureFramesInit: "secure-frames-init", SecureFramesPrepareTransition: "secure-frames-prepare-transition", SecureFramesExecuteTransition: "secure-frames-execute-transition", SecureFramesPrepareEpoch: "secure-frames-prepare-epoch", MLSExternalSenderPackage: "mls-external-sender-package", MLSProposals: "mls-proposals", MLSPrepareCommitTransition: "mls-prepare-commit-transition", MLSWelcome: "mls-welcome", ReceiveMessage: "receive-message", SendMessage: "send-message" };
let result = require("_possibleConstructorReturn").fileFinishedImporting("lib/RTCControlSocket.tsx");

export default tmp3;
export const RTCSocketOpcode = obj;
export const SocketEvent = obj;
