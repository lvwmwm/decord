// Module ID: 4192
// Function ID: 36062
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 162, 2]

// Module 4192 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _defineProperties = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _defineProperties;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((arg0) => {
  class SystemServiceNotAvailableError {
    constructor() {
      self = this;
      tmp = outer1_1(this, SystemServiceNotAvailableError);
      items = ["System service not available"];
      obj = outer1_3(SystemServiceNotAvailableError);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "SystemServiceNotAvailableError";
      return tmp2Result;
    }
  }
  callback(SystemServiceNotAvailableError, arg0);
  return SystemServiceNotAvailableError(SystemServiceNotAvailableError);
})(require("_wrapNativeSuper")(Error));
let result = require("_possibleConstructorReturn").fileFinishedImporting("../discord_common/js/packages/discord-native-types/DiscordNative.tsx");

export const SystemServiceNotAvailableError = tmp2;
export const StoredCrashInformation = { HasRTCConnection: 0, [0]: "HasRTCConnection", IsSendingVideo: 1, [1]: "IsSendingVideo", IsSendingStream: 2, [2]: "IsSendingStream", IsReceivingVideo: 3, [3]: "IsReceivingVideo", IsReceivingStream: 4, [4]: "IsReceivingStream", VideoMediaSessionId: 5, [5]: "VideoMediaSessionId", StreamMediaSessionId: 6, [6]: "StreamMediaSessionId", IntentionalCrashReason: 7, [7]: "IntentionalCrashReason" };
export const JSExceptionLocation = { RendererProcessDelayed: 0, [0]: "RendererProcessDelayed", RendererProcess: 1, [1]: "RendererProcess", MainProcess: 2, [2]: "MainProcess" };
export const DesktopSources = { WINDOW: "window", SCREEN: "screen", CAMERA: "camera" };
export const ThumbarButtonName = { VIDEO: "VIDEO", MUTE: "MUTE", DEAFEN: "DEAFEN", DISCONNECT: "DISCONNECT" };
