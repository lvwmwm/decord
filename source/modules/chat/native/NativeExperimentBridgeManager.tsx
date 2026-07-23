// Module ID: 16512
// Function ID: 128835
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 27, 1921, 1194, 477, 16513, 4806, 16514, 675, 16515, 507, 5078, 2]

// Module 16512 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NativeModules } from "get ActivityIndicator";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function syncYYTextReplacementExperiment() {
  let obj = require(477) /* set */;
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (!tmp3) {
      obj = { location: "NativeExperimentBridgeManager" };
      const result = NSUserDefaultsBridge.setShouldEnableYYTextReplacement(require(16513) /* shouldEnableYYTextReplacement */.shouldEnableYYTextReplacement(obj));
      const obj2 = require(16513) /* shouldEnableYYTextReplacement */;
    }
    tmp3 = null == NSUserDefaultsBridge || null == NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
  }
}
function updateIOSExperiments() {
  syncYYTextReplacementExperiment();
  const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
  if (!tmp2) {
    const result = NSUserDefaultsBridge.setShouldFixPushNotificationRawPayload(require(4806) /* isIOSPushNotificationRawPayloadFixExperimentEnabled */.isIOSPushNotificationRawPayloadFixExperimentEnabled());
    const obj = require(4806) /* isIOSPushNotificationRawPayloadFixExperimentEnabled */;
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
  let obj = { "X-Super-Properties": importDefault(675).getSuperPropertiesBase64(), "X-Fingerprint": store.getFingerprint(), "X-Installation-ID": store.getInstallationForTracking(), "X-Discord-Locale": locale.locale };
  const obj2 = importDefault(675);
  const config = importDefault(16515).getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (null != NativeCacheModule) {
    const _JSON = JSON;
    obj = {};
    obj.headers = obj;
    obj.userId = store.getId();
    obj.enabled = tmp2;
    obj.apiBaseUrl = require(507) /* _isNativeReflectConstruct */.getAPIBaseURL();
    const _HermesInternal = HermesInternal;
    obj.urlQueryParams = "?limit=" + tmp3;
    obj.cooldownMs = tmp4;
    obj.debounceMs = tmp5;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj));
    const obj5 = require(507) /* _isNativeReflectConstruct */;
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default tmp2;
