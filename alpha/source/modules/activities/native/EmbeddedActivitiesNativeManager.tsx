// Module ID: 14775
// Function ID: 14776
// Name: EmbeddedActivitiesNativeManager
// Dependencies: [17, 2065, 5110, 2064, 1085, 1382, 14776, 14777, 5296, 4739, 1265, 584, 14698, 10853, 5300, 1126, 4809, 1388, 10928, 2]

// Module 14775 (EmbeddedActivitiesNativeManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5296 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 10853 */;
import activityWebViewController from "activityWebViewController" /* 10928 */;
import react_nativeDefault from "react-native" /* 14776 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 14777 */;
import size from "module_2" /* 2 */;

let basicChannel, currentEmbeddedActivity, rawThermalState;

const NativeEventEmitter = react_native.NativeEventEmitter;
const AnalyticEvents = Constants.AnalyticEvents;
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  let self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class EmbeddedActivitiesNativeManager extends EmbeddedActivitiesManager {
  _initialize() {
    let mediaSessionId;
    const self = this;
    super._initialize();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    let obj = nativeEventEmitter;
    let addListenerResult;
    if (nativeEventEmitter != null) {
      addListenerResult = obj.addListener("onHostDestroy", () => {
        currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
        if (null != currentEmbeddedActivity) {
          const obj = { location: null, applicationId: null };
          ({ location: obj.location, applicationId: obj.applicationId } = currentEmbeddedActivity);
          self.leaveActivity(obj);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    const thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      thermalStateSubscription.remove();
    }
    const obj2 = ThermalUtilsDefault;
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      let guild_id;
      rawThermalState = rawThermalState.rawThermalState;
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      let _location;
      const getEmbeddedActivityLocationChannelId = self(dependencyMap[9]).getEmbeddedActivityLocationChannelId;
      self(dependencyMap[9]);
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      const obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState, guild_id, media_session_id: mediaSessionId.getMediaSessionId() };
      guild_id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_DEVICE_THERMAL_STATE_CHANGED = constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED;
      AnalyticsUtilsDefault;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      track(ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj);
      const tmp10Result = DispatcherDefault;
      tmp10Result.dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      let tmp16 = null != compositeInstanceId;
      const tmp2Result = self(dependencyMap[12]);
      const thermalState = tmp2Result.getThermalState();
      if (tmp16) {
        tmp16 = null != applicationId;
      }
      if (tmp16) {
        tmp16 = thermalState >= tmp2(tmp3[12]).ThermalStates.SERIOUS;
      }
      if (tmp16) {
        const tmp2Result2 = self(dependencyMap[13]);
        const respondToSeriousThermalState = tmp2Result2.requestRespondToSeriousThermalState();
      }
    });
  }
  _terminate() {
    const self = this;
    super._terminate();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    const thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      thermalStateSubscription.remove();
    }
    self.releaseWebView();
  }
  showErrorModal(reason) {
    let code;
    let intl;
    let message;
    ({ code, message } = reason);
    const obj = { title: intl.formatToPlainString(intl2.t.hbiAO6, { code }), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl2.intl;
    show(obj);
  }
  showDevShelfOverrideEnabled() {
    let intl;
    const obj = { text: intl.string(intl2.t.JfA7IK), variant: "success" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open("EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", obj);
  }
  leaveActivity(arg0) {
    let _location;
    let applicationId;
    let showFeedback;
    const self = this;
    ({ location: _location, applicationId, showFeedback } = arg0);
    let isNotNullishResult = null != _location;
    const releaseWebViewResult = this.releaseWebView();
    if (isNotNullishResult) {
      const obj = GlobalUtils;
      isNotNullishResult = obj.isNotNullish(applicationId);
    }
    if (isNotNullishResult) {
      let tmp5 = null != releaseWebViewResult;
      const clearEmbeddedActivityState = self.clearEmbeddedActivityState;
      if (tmp5) {
        tmp5 = showFeedback;
      }
      const result = clearEmbeddedActivityState(_location, applicationId, tmp5);
    }
  }
  hidePIPEmbed(arg0) {
    if (arg0 == null) {
      throw new TypeError("Cannot destructure 'undefined' or 'null'.");
    }
  }
  clearEmbeddedActivityState(_location, applicationId, showFeedback) {
    const obj = EmbeddedActivitiesActionCreators;
    const obj2 = { location: _location, applicationId, showFeedback };
    obj.stopEmbeddedActivity(obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null, gridLockState: null };
    obj3.dispatch(obj4);
  }
  releaseWebView() {
    const obj = activityWebViewController;
    return obj.releaseActivityWebView();
  }
}
let closure_8 = EmbeddedActivitiesNativeManager.prototype;
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
