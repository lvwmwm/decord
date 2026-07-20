// Module ID: 16372
// Function ID: 126527
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16372 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function syncYYTextReplacementExperiment() {
  let obj = arg1(dependencyMap[8]);
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (!tmp3) {
      obj = { location: "NativeExperimentBridgeManager" };
      const result = NSUserDefaultsBridge.setShouldEnableYYTextReplacement(arg1(dependencyMap[9]).shouldEnableYYTextReplacement(obj));
      const obj2 = arg1(dependencyMap[9]);
    }
    const tmp3 = null == NSUserDefaultsBridge || null == NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
  }
}
function updateIOSExperiments() {
  syncYYTextReplacementExperiment();
  const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
  if (!tmp2) {
    const result = NSUserDefaultsBridge.setShouldFixPushNotificationRawPayload(arg1(dependencyMap[10]).isIOSPushNotificationRawPayloadFixExperimentEnabled());
    const obj = arg1(dependencyMap[10]);
  }
  if (obj2.getConfig({ location: "NativeExperimentBridgeManager" }).enabled) {
    const RNVVideo = NativeModules.RNVVideo;
    if (null != RNVVideo) {
      const result1 = RNVVideo.setOptimizeConfigureAudio(true);
    }
    const RNVVideo2 = NativeModules.RNVVideo;
    if (null != RNVVideo2) {
      const result2 = RNVVideo2.setUseBackgroundProgressQueue(true);
    }
  }
}
function updateAndroidExperiments() {
  let obj = { X-Super-Properties: importDefault(dependencyMap[12]).getSuperPropertiesBase64(), X-Fingerprint: store.getFingerprint(), X-Installation-ID: store.getInstallationForTracking(), X-Discord-Locale: locale.locale };
  const obj2 = importDefault(dependencyMap[12]);
  const config = importDefault(dependencyMap[13]).getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (null != NativeCacheModule) {
    const _JSON = JSON;
    obj = {};
    obj.headers = obj;
    obj.userId = store.getId();
    obj.enabled = tmp2;
    obj.apiBaseUrl = arg1(dependencyMap[14]).getAPIBaseURL();
    const _HermesInternal = HermesInternal;
    obj.urlQueryParams = "?limit=" + tmp3;
    obj.cooldownMs = tmp4;
    obj.debounceMs = tmp5;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj));
    const obj5 = arg1(dependencyMap[14]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let tmp2 = (arg0) => {
  class NativeExperimentBridgeManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, NativeExperimentBridgeManager);
      items1 = [...items];
      obj = closure_6(NativeExperimentBridgeManager);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = NativeExperimentBridgeManager(closure_2[8]);
      if (obj2.isIOS()) {
        tmp9 = closure_13;
      } else {
        tmp7 = NativeExperimentBridgeManager;
        tmp8 = closure_2;
        obj3 = NativeExperimentBridgeManager(closure_2[8]);
        tmp9 = obj3.isAndroid() ? closure_14 : () => {

        };
      }
      tmp2Result.handleUpdate = tmp9;
      obj = { APP_STATE_UPDATE: closure_12, POST_CONNECTION_OPEN: tmp2Result.handleUpdate };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = NativeExperimentBridgeManager;
  callback2(NativeExperimentBridgeManager, arg0);
  return callback(NativeExperimentBridgeManager);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default tmp2;
