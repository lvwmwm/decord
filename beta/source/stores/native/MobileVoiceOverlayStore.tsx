// Module ID: 9435
// Function ID: 9436
// Name: MobileVoiceOverlayStore
// Dependencies: [1074, 1241, 1364, 1610, 504, 573, 2]
// Exports: isMobileOverlaySupported

// Module 9435 (MobileVoiceOverlayStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let tmp;
const MetaQuestUtils = tmp(1610);
const AnalyticEvents = Constants.AnalyticEvents;
let flag = false;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class MobileVoiceOverlayStore extends DeviceSettingsStore {
  getUserAgnosticState() {
    return { enabled: flag };
  }
  initialize(enabled) {
    flag = undefined;
    if (enabled != null) {
      flag = enabled.enabled;
    }
    if (flag == null) {
      flag = false;
    }
  }
  getEnabled() {
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const tmpResult = MetaQuestUtils;
      isAndroidResult = !tmpResult.isMetaQuest();
    }
    if (isAndroidResult) {
      isAndroidResult = flag;
    }
    return isAndroidResult;
  }
}
const prototype = MobileVoiceOverlayStore.prototype;
MobileVoiceOverlayStore.displayName = "MobileVoiceOverlayStore";
MobileVoiceOverlayStore.persistKey = "MobileVoiceOverlayStore";
let obj = {
  MOBILE_VOICE_OVERLAY_STATE_CHANGED: function handleMobileVoiceOverlayStateChanged(enabled) {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { enabled: enabled.enabled };
    obj.track(AnalyticEvents.MOBILE_OVERLAY_TOGGLED, obj2);
  }
};
const mobileVoiceOverlayStore = new MobileVoiceOverlayStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/native/MobileVoiceOverlayStore.tsx");

export default mobileVoiceOverlayStore;
export const isMobileOverlaySupported = function isMobileOverlaySupported() {
  const obj = PlatformUtils;
  let isAndroidResult = obj.isAndroid();
  if (isAndroidResult) {
    const tmpResult = MetaQuestUtils;
    isAndroidResult = !tmpResult.isMetaQuest();
  }
  return isAndroidResult;
};
