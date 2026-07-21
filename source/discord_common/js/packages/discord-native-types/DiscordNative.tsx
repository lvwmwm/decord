// Module ID: 4188
// Function ID: 36015
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4188 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class SystemServiceNotAvailableError {
    constructor() {
      self = this;
      tmp = closure_1(this, SystemServiceNotAvailableError);
      items = ["<string:3436003419>"];
      obj = closure_3(SystemServiceNotAvailableError);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "SystemServiceNotAvailableError";
      return tmp2Result;
    }
  }
  const callback = SystemServiceNotAvailableError;
  callback2(SystemServiceNotAvailableError, arg0);
  return callback(SystemServiceNotAvailableError);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[6]).fileFinishedImporting("../discord_common/js/packages/discord-native-types/DiscordNative.tsx");

export const SystemServiceNotAvailableError = tmp2;
export const StoredCrashInformation = { HasRTCConnection: 0, [0]: "HasRTCConnection", IsSendingVideo: 1, [1]: "IsSendingVideo", IsSendingStream: 2, [2]: "IsSendingStream", IsReceivingVideo: 3, [3]: "IsReceivingVideo", IsReceivingStream: 4, [4]: "IsReceivingStream", VideoMediaSessionId: 5, [5]: "VideoMediaSessionId", StreamMediaSessionId: 6, [6]: "StreamMediaSessionId", IntentionalCrashReason: 7, [7]: "IntentionalCrashReason" };
export const JSExceptionLocation = { RendererProcessDelayed: 0, [0]: "RendererProcessDelayed", RendererProcess: 1, [1]: "RendererProcess", MainProcess: 2, [2]: "MainProcess" };
export const DesktopSources = { WINDOW: "window", SCREEN: "screen", CAMERA: "camera" };
export const ThumbarButtonName = { VIDEO: "VIDEO", MUTE: "MUTE", DEAFEN: "DEAFEN", DISCONNECT: "DISCONNECT" };
