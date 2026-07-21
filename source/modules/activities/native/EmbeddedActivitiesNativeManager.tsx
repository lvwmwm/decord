// Module ID: 10514
// Function ID: 82078
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10514 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_7(closure_6(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
function postMessageToWebView() {
  return _postMessageToWebView(...arguments);
}
function _postMessageToWebView() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _postMessageToWebView = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const NativeEventEmitter = arg1(dependencyMap[7]).NativeEventEmitter;
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = arg1(dependencyMap[11]).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
({ AnalyticEvents: closure_14, ComponentActions: closure_15 } = arg1(dependencyMap[12]));
const tmp2 = arg1(dependencyMap[12]);
const webViewProxy = arg1(dependencyMap[13]).getWebViewProxy("EMBEDDED_ACTIVITY_WEB_VIEW_KEY");
const obj = arg1(dependencyMap[13]);
let nativeEventEmitter = null;
if (obj2.isAndroid()) {
  const prototype = NativeEventEmitter.prototype;
  nativeEventEmitter = new NativeEventEmitter(importDefault(dependencyMap[15]));
}
let tmp6 = (arg0) => {
  class EmbeddedActivitiesNativeManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, EmbeddedActivitiesNativeManager);
      items1 = [...items];
      obj = closure_6(EmbeddedActivitiesNativeManager);
      tmp2 = closure_5;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      EmbeddedActivitiesNativeManager = tmp2Result;
      tmp2Result.handleRPCDisconnect = (reason) => {
        const application = reason.application;
        let id;
        const connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
        if (null != application) {
          id = application.id;
        }
        const obj = { location: connectedActivityLocation, applicationId: id };
        tmp2Result.leaveActivity(obj);
        const result = tmp2Result.superHandleRPCDisconnect({ reason: reason.reason, application });
      };
      return tmp2Result;
    }
  }
  const arg1 = EmbeddedActivitiesNativeManager;
  callback2(EmbeddedActivitiesNativeManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const self = this;
      const EmbeddedActivitiesNativeManager = this;
      callback5(EmbeddedActivitiesNativeManager, "_initialize", this, 3)([]);
      const lifecycleSubscription = this.lifecycleSubscription;
      if (null != lifecycleSubscription) {
        lifecycleSubscription.remove();
      }
      let addListenerResult;
      if (null != closure_17) {
        addListenerResult = closure_17.addListener("onHostDestroy", () => {
          const connectedActivityLocation = store.getConnectedActivityLocation();
          let selfEmbeddedActivityForLocation = null;
          if (null != connectedActivityLocation) {
            selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          }
          if (tmp4) {
            const obj = { location: connectedActivityLocation, applicationId: selfEmbeddedActivityForLocation.applicationId };
            self.leaveActivity(obj);
          }
        });
      }
      self.lifecycleSubscription = addListenerResult;
      const scriptMessageSubscription = self.scriptMessageSubscription;
      if (null != scriptMessageSubscription) {
        scriptMessageSubscription.remove();
      }
      self.scriptMessageSubscription = closure_16.addOnMessageListener((data) => {
        const parsed = JSON.parse(data.data);
        const connectedActivityLocation = store.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        if (null != selfEmbeddedActivityForLocation) {
          const url = selfEmbeddedActivityForLocation.url;
        }
        let tmp7 = tmp6;
        if ("object" === typeof parsed) {
          tmp7 = null != tmp5;
        }
        if (tmp7) {
          callback(closure_2[18]).handleMessage(parsed, url, closure_20);
          const obj = callback(closure_2[18]);
        }
      });
      const thermalStateSubscription = self.thermalStateSubscription;
      if (null != thermalStateSubscription) {
        thermalStateSubscription.remove();
      }
      self.thermalStateSubscription = callback(closure_2[21]).addListener((rawThermalState) => {
        const connectedActivityLocation = store.getConnectedActivityLocation();
        let selfEmbeddedActivityForLocation = null;
        if (null != connectedActivityLocation) {
          selfEmbeddedActivityForLocation = store.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        }
        let obj = self(closure_2[22]);
        const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
        const basicChannel = basicChannel.getBasicChannel(embeddedActivityLocationChannelId);
        let compositeInstanceId;
        if (null != selfEmbeddedActivityForLocation) {
          compositeInstanceId = selfEmbeddedActivityForLocation.compositeInstanceId;
        }
        let applicationId;
        if (null != selfEmbeddedActivityForLocation) {
          applicationId = selfEmbeddedActivityForLocation.applicationId;
        }
        obj = { channel_id: embeddedActivityLocationChannelId, application_id: applicationId, activity_session_id: compositeInstanceId, thermal_state: rawThermalState.rawThermalState };
        let guild_id;
        if (null != basicChannel) {
          guild_id = basicChannel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.media_session_id = mediaSessionId.getMediaSessionId();
        callback(closure_2[23]).track(constants.ACTIVITY_DEVICE_THERMAL_STATE_CHANGED, obj);
        const obj2 = callback(closure_2[23]);
        obj = { type: "THERMAL_STATE_CHANGE", applicationId };
        callback(closure_2[24]).dispatch(obj);
        const obj4 = callback(closure_2[24]);
        let tmp12 = null != compositeInstanceId;
        const thermalState = self(closure_2[25]).getThermalState();
        if (tmp12) {
          tmp12 = null != applicationId;
        }
        if (tmp12) {
          tmp12 = thermalState >= self(closure_2[25]).ThermalStates.SERIOUS;
        }
        if (tmp12) {
          const respondToSeriousThermalState = self(closure_2[26]).requestRespondToSeriousThermalState();
          const obj7 = self(closure_2[26]);
        }
      });
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "_terminate",
    value() {
      const self = this;
      callback5(EmbeddedActivitiesNativeManager, "_terminate", this, 3)([]);
      const lifecycleSubscription = this.lifecycleSubscription;
      if (null != lifecycleSubscription) {
        lifecycleSubscription.remove();
      }
      const scriptMessageSubscription = self.scriptMessageSubscription;
      if (null != scriptMessageSubscription) {
        scriptMessageSubscription.remove();
      }
      const thermalStateSubscription = self.thermalStateSubscription;
      if (null != thermalStateSubscription) {
        thermalStateSubscription.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "showErrorModal",
    value(arg0) {
      let code;
      let message;
      ({ code, message } = arg0);
      let obj = callback(closure_2[19]);
      obj = {};
      const intl = EmbeddedActivitiesNativeManager(closure_2[20]).intl;
      obj.title = intl.formatToPlainString(EmbeddedActivitiesNativeManager(closure_2[20]).t.hbiAO6, { code });
      obj.body = message;
      obj.show(obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "showLaunchErrorModal",
    value(body) {
      let obj = callback(closure_2[19]);
      obj = {};
      const intl = EmbeddedActivitiesNativeManager(closure_2[20]).intl;
      obj.title = intl.string(EmbeddedActivitiesNativeManager(closure_2[20]).t.PtobXW);
      obj.body = body;
      obj.show(obj);
    }
  };
  items[4] = {
    key: "showDevShelfOverrideEnabled",
    value() {
      let obj = callback(closure_2[27]);
      obj = { key: "EMBEDDED_ACTIVITIES_DEV_SHELF_URL_OVERRIDE_ENABLED" };
      const intl = EmbeddedActivitiesNativeManager(closure_2[20]).intl;
      obj.content = intl.string(EmbeddedActivitiesNativeManager(closure_2[20]).t.JfA7IK);
      obj.icon = callback(closure_2[28]);
      obj.iconColor = "status-positive";
      obj.open(obj);
    }
  };
  items[5] = {
    key: "releaseWebView",
    value() {
      const releaseFrameIdResult = this.releaseFrameId();
      if (null != releaseFrameIdResult) {
        const ComponentDispatch = EmbeddedActivitiesNativeManager(closure_2[29]).ComponentDispatch;
        const obj = { id: releaseFrameIdResult };
        ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
        closure_16.releaseWebView();
      }
      return releaseFrameIdResult;
    }
  };
  items[6] = {
    key: "leaveActivity",
    value(arg0) {
      let _location;
      let applicationId;
      let showFeedback;
      const self = this;
      ({ location: _location, applicationId, showFeedback } = arg0);
      let isNotNullishResult = null != _location;
      if (isNotNullishResult) {
        isNotNullishResult = EmbeddedActivitiesNativeManager(closure_2[30]).isNotNullish(applicationId);
        const obj = EmbeddedActivitiesNativeManager(closure_2[30]);
      }
      if (isNotNullishResult) {
        let tmp5 = null != releaseWebViewResult;
        if (tmp5) {
          tmp5 = showFeedback;
        }
        const result = self.clearEmbeddedActivityState(_location, applicationId, tmp5);
      }
    }
  };
  items[7] = {
    key: "hidePIPEmbed",
    value(arg0) {
      if (arg0 == null) {
        HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
        throw undefined;
      }
    }
  };
  items[8] = {
    key: "clearEmbeddedActivityState",
    value(location, applicationId, showFeedback) {
      let obj = EmbeddedActivitiesNativeManager(closure_2[26]);
      obj = { location, applicationId, showFeedback };
      obj.stopEmbeddedActivity(obj);
      obj = { valid: 503316741, dnsWarn: 503317000, rfc5321: 285213192, cfws: 37004865, applicationId };
      callback(closure_2[24]).dispatch(obj);
    }
  };
  items[9] = {
    key: "releaseFrameId",
    value() {
      this.frameId = undefined;
      return this.frameId;
    }
  };
  items[10] = {
    key: "hasFrameId",
    value() {
      return null != this.frameId;
    }
  };
  items[11] = {
    key: "getOrCreateFrameId",
    value() {
      const frameId = this.frameId;
      if (null != frameId) {
        return frameId;
      } else {
        const v4Result = EmbeddedActivitiesNativeManager(closure_2[31]).v4();
        tmp.frameId = v4Result;
        return v4Result;
      }
    }
  };
  return callback(EmbeddedActivitiesNativeManager, items);
}(importDefault(dependencyMap[32]));
tmp6 = new tmp6();
const obj2 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/activities/native/EmbeddedActivitiesNativeManager.tsx");

export default tmp6;
export const EMBEDDED_ACTIVITY_WEB_VIEW_KEY = "EMBEDDED_ACTIVITY_WEB_VIEW_KEY";
