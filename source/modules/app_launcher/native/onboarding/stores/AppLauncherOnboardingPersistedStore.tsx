// Module ID: 11147
// Function ID: 86704
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11147 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let obj = {};
let closure_6 = { lastSeenTimeMs: null, triggeredOnboardingContentMetadata: obj };
let tmp2 = (PersistedStore) => {
  class AppLauncherOnboardingPersistedStore {
    constructor() {
      self = this;
      tmp = AppLauncherOnboardingPersistedStore(this, AppLauncherOnboardingPersistedStore);
      obj = closure_3(AppLauncherOnboardingPersistedStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = AppLauncherOnboardingPersistedStore;
  callback2(AppLauncherOnboardingPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        ({ lastSeenTimeMs: closure_6.lastSeenTimeMs, triggeredOnboardingContentMetadata: closure_6.triggeredOnboardingContentMetadata } = arg0);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastSeenTimeMs",
    value() {
      return closure_6.lastSeenTimeMs;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTriggeredOnboardingContentMetadata",
    value() {
      return closure_6.triggeredOnboardingContentMetadata;
    }
  };
  return callback(AppLauncherOnboardingPersistedStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "AppLauncherOnboardingPersistedStore";
tmp2.persistKey = "AppLauncherOnboardingPersistedStore";
const items = [
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
tmp2 = new tmp2(importDefault(dependencyMap[6]), obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/onboarding/stores/AppLauncherOnboardingPersistedStore.tsx");

export default tmp2;
