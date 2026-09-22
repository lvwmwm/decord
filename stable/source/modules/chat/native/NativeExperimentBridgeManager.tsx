// Module ID: 17933
// Function ID: 17934
// Name: NativeExperimentBridgeManager
// Dependencies: [17, 2025, 502, 1363, 17934, 5356, 17935, 1240, 17936, 1270, 7221, 2]

// Module 17933 (NativeExperimentBridgeManager)
import _mod17 from "module_17" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import HTTPUtils from "HTTPUtils" /* 1270 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import YYTextReplacementExperiment from "YYTextReplacementExperiment" /* 17934 */;
import NotificationLoadMessagesExperimentDefault from "NotificationLoadMessagesExperiment" /* 17936 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;
import size from "module_2" /* 2 */;

function syncYYTextReplacementExperiment() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const result = setShouldEnableYYTextReplacement(YYTextReplacementExperiment.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
        const tmpResult = YYTextReplacementExperiment;
      }
    }
  }
}
function updateIOSExperiments() {
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const result = setShouldEnableYYTextReplacement(tmp(17934).shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
        const tmpResult = tmp(17934);
      }
    }
  }
  const NSUserDefaultsBridge2 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge2 != null) {
    const setShouldFixPushNotificationRawPayload = NSUserDefaultsBridge2.setShouldFixPushNotificationRawPayload;
    if (setShouldFixPushNotificationRawPayload != null) {
      const result1 = setShouldFixPushNotificationRawPayload(tmp(5356).isIOSPushNotificationRawPayloadFixExperimentEnabled());
      const tmpResult2 = tmp(5356);
    }
  }
  obj = PlatformUtils;
  if (obj4.getConfig({ location: "NativeExperimentBridgeManager" }).enabled) {
    const RNVVideo = tmp6.RNVVideo;
    if (RNVVideo != null) {
      const result2 = RNVVideo.setOptimizeConfigureAudio(true);
    }
    const RNVVideo2 = tmp6.RNVVideo;
    if (RNVVideo2 != null) {
      const result3 = RNVVideo2.setUseBackgroundProgressQueue(true);
    }
  }
}
function updateAndroidExperiments() {
  const obj = { "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking(), "X-Discord-Locale": LocaleStore.locale };
  const obj3 = AuthenticationStore;
  const config = NotificationLoadMessagesExperimentDefault.getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const obj5 = { headers: obj, userId: obj3.getId(), enabled: tmp3, apiBaseUrl: HTTPUtils.getAPIBaseURL(), urlQueryParams: null, cooldownMs: null, debounceMs: null };
    const _HermesInternal = HermesInternal;
    obj5.urlQueryParams = "?limit=" + tmp4;
    obj5.cooldownMs = tmp5;
    obj5.debounceMs = tmp6;
    const result = NativeCacheModule.setItem("notificationNetworkRequest", JSON.stringify(obj5));
  }
}
const NativeModules = _mod17.NativeModules;
const prototype = function NativeExperimentBridgeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  if (obj.isIOS()) {
    let tmp5 = updateIOSExperiments;
  } else {
    tmp5 = PlatformUtils.isAndroid() ? updateAndroidExperiments : (() => {

    });
    const tmp3Result = PlatformUtils;
  }
  applyArgumentsResult.handleUpdate = tmp5;
  applyArgumentsResult.actions = { APP_STATE_UPDATE: syncYYTextReplacementExperiment, POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default prototype1;
