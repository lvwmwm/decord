// Module ID: 16337
// Function ID: 16338
// Name: EmbeddedActivitiesNativeManager
// Dependencies: [17, 4858, 5759, 4857, 1072, 1376, 16338, 16339, 1109, 5949, 4930, 1253, 572, 16252, 11688, 5202, 5954, 1114, 5707, 1380, 11760, 2]

// Module 16337 (EmbeddedActivitiesNativeManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import intl2 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ThermalUtilsDefault from "ThermalUtils" /* 5949 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11688 */;
import activityWebViewController from "activityWebViewController" /* 11760 */;
import react_nativeDefault from "react-native" /* 16338 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 16339 */;
import size from "module_2" /* 2 */;

let basicChannel, currentEmbeddedActivity, rawThermalState;

let metroImportDefault;
let metroRequire;
const NativeEventEmitter = react_native.NativeEventEmitter;
({ AnalyticEvents: metroRequire, ComponentActions: metroImportDefault } = Constants);
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  let self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class EmbeddedActivitiesNativeManager extends EmbeddedActivitiesManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.handleOpenEmbeddedActivity = function handleOpenEmbeddedActivity() {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
    };
    return applyArgumentsResult;
  }
  _initialize() {
    let mediaSessionId;
    const self = this;
    super._initialize();
    const tmp2 = dependencyMap;
    const ComponentDispatch = self(1109).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.OPEN_EMBEDDED_ACTIVITY, this.handleOpenEmbeddedActivity);
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
      const getEmbeddedActivityLocationChannelId = self(dependencyMap[10]).getEmbeddedActivityLocationChannelId;
      self(dependencyMap[10]);
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
      const tmp2Result = self(dependencyMap[13]);
      const thermalState = tmp2Result.getThermalState();
      if (tmp16) {
        tmp16 = null != applicationId;
      }
      if (tmp16) {
        tmp16 = thermalState >= tmp2(tmp3[13]).ThermalStates.SERIOUS;
      }
      if (tmp16) {
        const tmp2Result2 = self(dependencyMap[14]);
        const respondToSeriousThermalState = tmp2Result2.requestRespondToSeriousThermalState();
      }
    });
  }
  _terminate() {
    const self = this;
    super._terminate();
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.unsubscribe(metroImportDefault.OPEN_EMBEDDED_ACTIVITY, this.handleOpenEmbeddedActivity);
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
let closure_9 = EmbeddedActivitiesNativeManager.prototype;
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
