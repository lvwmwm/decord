// Module ID: 11194
// Function ID: 87071
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11194 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { canShowBotsBanner: false, canShowAppsOrActivitiesBanner: false, willShowGlobalSearchOnboarding: false, timeMs: 0, channelId: "0" };
let closure_6 = { lastSeenTimeMs: null, triggeredOnboardingContentMetadata: obj };
let tmp2 = ((PersistedStore) => {
  class AppLauncherOnboardingPersistedStore {
    constructor() {
      self = this;
      tmp = AppLauncherOnboardingPersistedStore(this, AppLauncherOnboardingPersistedStore);
      obj = outer1_3(AppLauncherOnboardingPersistedStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AppLauncherOnboardingPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        ({ lastSeenTimeMs: outer1_6.lastSeenTimeMs, triggeredOnboardingContentMetadata: outer1_6.triggeredOnboardingContentMetadata } = arg0);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastSeenTimeMs",
    value() {
      return outer1_6.lastSeenTimeMs;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTriggeredOnboardingContentMetadata",
    value() {
      return outer1_6.triggeredOnboardingContentMetadata;
    }
  };
  return callback(AppLauncherOnboardingPersistedStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "AppLauncherOnboardingPersistedStore";
tmp2.persistKey = "AppLauncherOnboardingPersistedStore";
let items = [
  (lastSeenTimeMs) => {
    let obj = {};
    lastSeenTimeMs = undefined;
    if (null != lastSeenTimeMs) {
      lastSeenTimeMs = lastSeenTimeMs.lastSeenTimeMs;
    }
    let tmp2 = null;
    if (null != lastSeenTimeMs) {
      tmp2 = lastSeenTimeMs;
    }
    obj.lastSeenTimeMs = tmp2;
    obj = {};
    let canShowBotsBanner;
    if (null != lastSeenTimeMs) {
      const triggeredOnboardingContentMetadata = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (null != triggeredOnboardingContentMetadata) {
        canShowBotsBanner = triggeredOnboardingContentMetadata.canShowBotsBanner;
      }
    }
    if (null == canShowBotsBanner) {
      canShowBotsBanner = obj.canShowBotsBanner;
    }
    obj.canShowBotsBanner = canShowBotsBanner;
    let prop;
    if (null != lastSeenTimeMs) {
      const triggeredOnboardingContentMetadata2 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (null != triggeredOnboardingContentMetadata2) {
        prop = triggeredOnboardingContentMetadata2.canShowAppsOrActivitiesBanner;
      }
    }
    if (null == prop) {
      prop = obj.canShowAppsOrActivitiesBanner;
    }
    obj.canShowAppsOrActivitiesBanner = prop;
    let prop1;
    if (null != lastSeenTimeMs) {
      const triggeredOnboardingContentMetadata3 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (null != triggeredOnboardingContentMetadata3) {
        prop1 = triggeredOnboardingContentMetadata3.willShowGlobalSearchOnboarding;
      }
    }
    if (null == prop1) {
      prop1 = obj.willShowGlobalSearchOnboarding;
    }
    obj.willShowGlobalSearchOnboarding = prop1;
    let timeMs;
    if (null != lastSeenTimeMs) {
      const triggeredOnboardingContentMetadata4 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (null != triggeredOnboardingContentMetadata4) {
        timeMs = triggeredOnboardingContentMetadata4.timeMs;
      }
    }
    if (null == timeMs) {
      timeMs = obj.timeMs;
    }
    obj.timeMs = timeMs;
    let channelId;
    if (null != lastSeenTimeMs) {
      const triggeredOnboardingContentMetadata5 = lastSeenTimeMs.triggeredOnboardingContentMetadata;
      if (null != triggeredOnboardingContentMetadata5) {
        channelId = triggeredOnboardingContentMetadata5.channelId;
      }
    }
    if (null == channelId) {
      channelId = obj.channelId;
    }
    obj.channelId = channelId;
    obj.triggeredOnboardingContentMetadata = obj;
    return obj;
  }
];
tmp2.migrations = items;
obj = {
  APP_LAUNCHER_ONBOARDING_SET_LAST_SEEN_TIME_MS: function handleSetLastSeenTimeMs() {
    closure_6.lastSeenTimeMs = Date.now();
  },
  APP_LAUNCHER_ONBOARDING_SET_TRIGGERED_ONBOARDING_CONTENT_METADATA: function handleSetTriggeredOnboardingContentMetadata(triggeredOnboardingContentMetadata) {
    closure_6.triggeredOnboardingContentMetadata = triggeredOnboardingContentMetadata.triggeredOnboardingContentMetadata;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx");

export default tmp2;
