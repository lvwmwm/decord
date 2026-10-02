// Module ID: 8760
// Function ID: 8761
// Name: EmbeddedActivitiesNativeManager
// Dependencies: [5, 17, 2051, 4860, 2050, 2011, 1086, 4741, 7750, 1370, 8747, 8748, 1243, 8750, 8761, 5205, 1127, 8753, 4461, 1253, 585, 8776, 8777, 4531, 8805, 1122, 1376, 1267, 2]

// Module 8760 (EmbeddedActivitiesNativeManager)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1122 */;
import intl3 from "intl" /* 1127 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import v1 from "v1" /* 1267 */;
import GlobalUtils from "GlobalUtils" /* 1376 */;
import Constants2 from "Constants" /* 2011 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import Constants3 from "Constants" /* 4741 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5205 */;
import react_nativeDefault from "react-native" /* 8747 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 8748 */;
import ThermalUtilsDefault from "ThermalUtils" /* 8753 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 8761 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 8777 */;
import AssetRegistryDefault from "AssetRegistry" /* 8805 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import Constants from "Constants" /* 1086 */;
import WebView from "WebView" /* 7750 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import EmbeddedActivitiesManager from "EmbeddedActivitiesManager" /* 8750 */;
import size from "module_2" /* 2 */;

let basicChannel, c5, c6, closure_3, rawThermalState;

let c9;
let metroImportAll;
function postMessageToWebView() {
  return obj(...arguments);
}
let obj = function _postMessageToWebView() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: closure_2_11.injectJavaScript(getPostMessageJavaScriptDefault(closure_0)), done: false };
            return obj5;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_0 = closure_3;
            const obj2 = closure_130_1(closure_130_2[12]);
            obj2.captureException(closure_0);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeEventEmitter = react_native.NativeEventEmitter;
let closure_7 = Constants2.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
({ AnalyticEvents: metroImportAll, ComponentActions: c9 } = Constants);
const TransportTypes = Constants3.TransportTypes;
const unpackModuleId = WebView.getWebViewProxy("EMBEDDED_ACTIVITY_WEB_VIEW_KEY");
let nativeEventEmitter = null;
if (PlatformUtils.isAndroid()) {
  let self = this;
  const self2 = this;
  nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
}
class EmbeddedActivitiesNativeManager extends EmbeddedActivitiesManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleRPCDisconnect = function handleRPCDisconnect(application) {
      application = application.application;
      const reason = application.reason;
      let id;
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      if (application != null) {
        id = application.id;
      }
      require.leaveActivity({ location: connectedActivityLocation, applicationId: id });
      const result = require.superHandleRPCDisconnect({ reason, application });
    };
    return applyArgumentsResult;
  }
  _initialize() {
    let mediaSessionId;
    const self = this;
    super._initialize();
    const lifecycleSubscription = this.lifecycleSubscription;
    if (lifecycleSubscription != null) {
      lifecycleSubscription.remove();
    }
    obj = nativeEventEmitter;
    let addListenerResult;
    if (nativeEventEmitter != null) {
      addListenerResult = obj.addListener("onHostDestroy", () => {
        connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        obj = EmbeddedActivitiesStore;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        const tmp3 = null != selfEmbeddedActivityForLocation && null != connectedActivityLocation;
        if (tmp3) {
          const obj2 = { location: connectedActivityLocation, applicationId: selfEmbeddedActivityForLocation.applicationId };
          self.leaveActivity(obj2);
        }
      });
    }
    self.lifecycleSubscription = addListenerResult;
    const scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      scriptMessageSubscription.remove();
    }
    self.scriptMessageSubscription = closure_11.addOnMessageListener((data) => {
      let intl;
      let intl2;
      try {
        let url;
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        if (selfEmbeddedActivityForLocation != null) {
          url = selfEmbeddedActivityForLocation.url;
        }
        const iframeId = self.iframeId;
        const tmp12 = typeof parsed === "object" && null != tmp9 && null != iframeId;
        if (tmp12) {
          const obj2 = { type: TransportTypes.POST_MESSAGE, origin: url, iframeId };
          obj = WebViewPostMessageTransportDefault;
          obj.handleMessage(parsed, obj2, postMessageToWebView);
        }
      } catch (tmp20) {
        const _SyntaxError = SyntaxError;
        if (tmp20 instanceof SyntaxError) {
          if (data.data === closure_7) {
            const connectedActivityLocation1 = EmbeddedActivitiesStore.getConnectedActivityLocation();
            if (null != connectedActivityLocation1) {
              const selfEmbeddedActivityForLocation1 = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation1);
              let applicationId;
              if (selfEmbeddedActivityForLocation1 != null) {
                applicationId = selfEmbeddedActivityForLocation1.applicationId;
              }
            }
            const tmp27 = null != connectedActivityLocation1 && null != tmp26;
            if (tmp27) {
              const obj3 = { location: connectedActivityLocation1, applicationId: tmp26, showFeedback: false };
              self.leaveActivity(obj3);
              const obj4 = { body: intl.string(intl3.t.tYBBWz), confirmText: intl2.string(intl3.t.BddRzS) };
              const show = actions_AlertActionCreatorsDefault.show;
              actions_AlertActionCreatorsDefault;
              intl = intl3.intl;
              intl2 = intl3.intl;
              show(obj4);
            }
          }
        } else {
          throw tmp20;
        }
      }
    });
    const thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      thermalStateSubscription.remove();
    }
    let obj2 = ThermalUtilsDefault;
    self.thermalStateSubscription = obj2.addListener((rawThermalState) => {
      let guild_id;
      rawThermalState = rawThermalState.rawThermalState;
      obj = connectedActivityLocation;
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      let selfEmbeddedActivityForLocation = null;
      if (null != connectedActivityLocation) {
        selfEmbeddedActivityForLocation = obj.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      }
      const obj2 = self(dependencyMap[18]);
      const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
      let compositeInstanceId;
      if (selfEmbeddedActivityForLocation != null) {
        compositeInstanceId = selfEmbeddedActivityForLocation.compositeInstanceId;
      }
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      const obj3 = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState, guild_id, media_session_id: mediaSessionId.getMediaSessionId() };
      guild_id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_DEVICE_THERMAL_STATE_CHANGED = constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED;
      AnalyticsUtilsDefault;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      track(ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj3);
      const tmp9Result = DispatcherDefault;
      tmp9Result.dispatch({ type: "THERMAL_STATE_CHANGE", applicationId });
      let tmp15 = null != compositeInstanceId;
      const tmp3Result = self(dependencyMap[21]);
      const thermalState = tmp3Result.getThermalState();
      if (tmp15) {
        tmp15 = null != applicationId;
      }
      if (tmp15) {
        tmp15 = thermalState >= tmp3(tmp4[21]).ThermalStates.SERIOUS;
      }
      if (tmp15) {
        const tmp3Result2 = self(dependencyMap[22]);
        const respondToSeriousThermalState = tmp3Result2.requestRespondToSeriousThermalState();
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
    const scriptMessageSubscription = self.scriptMessageSubscription;
    if (scriptMessageSubscription != null) {
      scriptMessageSubscription.remove();
    }
    const thermalStateSubscription = self.thermalStateSubscription;
    if (thermalStateSubscription != null) {
      thermalStateSubscription.remove();
    }
  }
  showErrorModal(reason) {
    let code;
    let intl;
    let message;
    ({ code, message } = reason);
    obj = { title: intl.formatToPlainString(intl3.t.hbiAO6, { code }), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    show(obj);
  }
  showLaunchErrorModal(message) {
    let intl;
    obj = { title: intl.string(intl3.t.PtobXW), body: message };
    const show = actions_AlertActionCreatorsDefault.show;
    actions_AlertActionCreatorsDefault;
    intl = intl3.intl;
    show(obj);
  }
  showDevShelfOverrideEnabled() {
    let intl;
    obj = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED", content: intl.string(intl3.t.JfA7IK), icon: AssetRegistryDefault, iconColor: "status-positive" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl3.intl;
    open(obj);
  }
  releaseWebView() {
    const releaseIframeIdResult = this.releaseIframeId();
    if (null != releaseIframeIdResult) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      obj = { id: releaseIframeIdResult };
      ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
      closure_11.releaseWebView();
    }
    return releaseIframeIdResult;
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
      obj = GlobalUtils;
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
    obj = EmbeddedActivitiesActionCreators;
    const obj2 = { location: _location, applicationId, showFeedback };
    obj.stopEmbeddedActivity(obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE", applicationId, lockState: null, pictureInPictureLockState: null, gridLockState: null };
    obj3.dispatch(obj4);
  }
  releaseIframeId() {
    this.iframeId = undefined;
    return this.iframeId;
  }
  hasIframeId() {
    return null != this.iframeId;
  }
  getOrCreateIframeId() {
    const iframeId = this.iframeId;
    if (null != iframeId) {
      return iframeId;
    } else {
      obj = v1;
      const v4Result = obj.v4();
      tmp.iframeId = v4Result;
      return v4Result;
    }
  }
}
let closure_15 = EmbeddedActivitiesNativeManager.prototype;
const embeddedActivitiesNativeManager = new EmbeddedActivitiesNativeManager();
let result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default embeddedActivitiesNativeManager;
export const EMBEDDED_ACTIVITY_WEB_VIEW_KEY = "EMBEDDED_ACTIVITY_WEB_VIEW_KEY";
