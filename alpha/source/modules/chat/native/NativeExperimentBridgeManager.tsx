// Module ID: 20363
// Function ID: 20364
// Name: NativeExperimentBridgeManager
// Dependencies: [17, 2189, 502, 8883, 1379, 11763, 8339, 1256, 20364, 1285, 7475, 2]

// Module 20363 (NativeExperimentBridgeManager)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import IOSAnchoredChatScrollerExperiment from "IOSAnchoredChatScrollerExperiment" /* 8339 */;
import NotificationLoadMessagesExperimentDefault from "NotificationLoadMessagesExperiment" /* 20364 */;
import LocaleStore from "LocaleStore" /* 2189 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaPlaybackExperiment_mod from "MediaPlaybackExperiment" /* 8883 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
import size from "module_2" /* 2 */;

let tmp;
const YYTextReplacementExperiment = tmp(11763);
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
    const setShouldUseAnchoredChatScroller = NSUserDefaultsBridge2.setShouldUseAnchoredChatScroller;
    if (setShouldUseAnchoredChatScroller != null) {
      const tmpResult2 = IOSAnchoredChatScrollerExperiment;
      const result1 = setShouldUseAnchoredChatScroller(tmpResult2.shouldUseIOSAnchoredChatScroller({ location: "NativeExperimentBridgeManager" }));
    }
  }
  const RNVVideo = tmp6.RNVVideo;
  if (RNVVideo != null) {
    const result2 = RNVVideo.setOptimizeConfigureAudio(true);
  }
  const RNVVideo2 = tmp6.RNVVideo;
  if (RNVVideo2 != null) {
    const result3 = RNVVideo2.setUseBackgroundProgressQueue(true);
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
