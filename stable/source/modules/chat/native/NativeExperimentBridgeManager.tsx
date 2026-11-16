// Module ID: 20481
// Function ID: 20482
// Name: NativeExperimentBridgeManager
// Dependencies: [17, 2186, 502, 8982, 1377, 11363, 6652, 7926, 1252, 20482, 1282, 7383, 2]

// Module 20481 (NativeExperimentBridgeManager)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import IOSPushNotificationRawPayloadFixExperiment from "IOSPushNotificationRawPayloadFixExperiment" /* 6652 */;
import IOSAnchoredChatScrollerExperiment from "IOSAnchoredChatScrollerExperiment" /* 7926 */;
import NotificationLoadMessagesExperimentDefault from "NotificationLoadMessagesExperiment" /* 20482 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaPlaybackExperiment_mod from "MediaPlaybackExperiment" /* 8982 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
import size from "module_2" /* 2 */;

let tmp;
const YYTextReplacementExperiment = tmp(11363);
function syncYYTextReplacementExperiment() {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const tmpResult = YYTextReplacementExperiment;
        const result = setShouldEnableYYTextReplacement(tmpResult.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
      }
    }
  }
}
function updateIOSExperiments() {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const NSUserDefaultsBridge = NativeModules.NSUserDefaultsBridge;
    if (NSUserDefaultsBridge != null) {
      const setShouldEnableYYTextReplacement = NSUserDefaultsBridge.setShouldEnableYYTextReplacement;
      if (setShouldEnableYYTextReplacement != null) {
        const tmpResult = YYTextReplacementExperiment;
        const result = setShouldEnableYYTextReplacement(tmpResult.shouldEnableYYTextReplacement({ location: "NativeExperimentBridgeManager" }));
      }
    }
  }
  const NSUserDefaultsBridge2 = NativeModules.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge2 != null) {
    const setShouldFixPushNotificationRawPayload = NSUserDefaultsBridge2.setShouldFixPushNotificationRawPayload;
    if (setShouldFixPushNotificationRawPayload != null) {
      const tmpResult3 = IOSPushNotificationRawPayloadFixExperiment;
      const result1 = setShouldFixPushNotificationRawPayload(tmpResult3.isIOSPushNotificationRawPayloadFixExperimentEnabled());
    }
  }
  const NSUserDefaultsBridge3 = tmp6.NSUserDefaultsBridge;
  if (NSUserDefaultsBridge3 != null) {
    const setShouldUseAnchoredChatScroller = NSUserDefaultsBridge3.setShouldUseAnchoredChatScroller;
    if (setShouldUseAnchoredChatScroller != null) {
      const tmpResult4 = IOSAnchoredChatScrollerExperiment;
      const result2 = setShouldUseAnchoredChatScroller(tmpResult4.shouldUseIOSAnchoredChatScroller({ location: "NativeExperimentBridgeManager" }));
    }
  }
  const RNVVideo = tmp6.RNVVideo;
  if (RNVVideo != null) {
    const result3 = RNVVideo.setOptimizeConfigureAudio(true);
  }
  const RNVVideo2 = tmp6.RNVVideo;
  if (RNVVideo2 != null) {
    const result4 = RNVVideo2.setUseBackgroundProgressQueue(true);
  }
}
function updateAndroidExperiments() {
  let obj2;
  let obj6;
  const obj = { "X-Super-Properties": obj2.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking(), "X-Discord-Locale": LocaleStore.locale };
  obj2 = AnalyticsUtilsDefault;
  const obj4 = NotificationLoadMessagesExperimentDefault;
  const config = obj4.getConfig({ location: "NativeExperimentBridgeManager" });
  const NativeCacheModule = NativeModules.NativeCacheModule;
  const obj3 = AuthenticationStore;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const setItem = NativeCacheModule.setItem;
    const obj5 = { headers: obj, userId: obj3.getId(), enabled: tmp3, apiBaseUrl: obj6.getAPIBaseURL(), urlQueryParams: "?limit=" + tmp4, cooldownMs: tmp5, debounceMs: tmp6 };
    const _HermesInternal = HermesInternal;
    obj6 = HTTPUtils;
    const result = setItem("notificationNetworkRequest", stringify(obj5));
  }
}
const NativeModules = react_native.NativeModules;
let MediaPlaybackExperiment = MediaPlaybackExperiment_mod;
MediaPlaybackExperiment = MediaPlaybackExperiment.initializeMediaPlaybackExperiment();
class NativeExperimentBridgeManager extends AutomaticLifecycleManager {
  constructor() {
    let tmp5;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      tmp5 = updateIOSExperiments;
    } else {
      const tmp3Result = PlatformUtils;
      tmp5 = tmp3Result.isAndroid() ? updateAndroidExperiments : (() => {

      });
    }
    applyArgumentsResult.handleUpdate = tmp5;
    const obj2 = { APP_STATE_UPDATE: syncYYTextReplacementExperiment, POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
    applyArgumentsResult.actions = obj2;
    return applyArgumentsResult;
  }
}
const nativeExperimentBridgeManager = new NativeExperimentBridgeManager();
let result1 = size.fileFinishedImporting("modules/chat/native/NativeExperimentBridgeManager.tsx");

export default nativeExperimentBridgeManager;
