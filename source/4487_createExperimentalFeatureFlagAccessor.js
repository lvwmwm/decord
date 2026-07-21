// Module ID: 4487
// Function ID: 39591
// Name: createExperimentalFeatureFlagAccessor
// Dependencies: []

// Module 4487 (createExperimentalFeatureFlagAccessor)
let closure_0 = { experiment: {}, stable: {} };
function createExperimentalFeatureFlagAccessor(androidResetScreenShadowStateOnOrientationChangeEnabled, arg1) {
  let closure_0 = androidResetScreenShadowStateOnOrientationChangeEnabled;
  let closure_1 = arg1;
  return {
    get() {
      return arg0.experiment[closure_0];
    },
    set(arg0) {
      let tmp = arg0 !== arg0.experiment[closure_0];
      if (tmp) {
        tmp = arg0.experiment[closure_0] !== arg1;
      }
      if (tmp) {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.error("[RNScreens] " + arg0 + " feature flag modified for a second time; this might lead to unexpected effects");
      }
      arg0.experiment[arg0] = arg0;
    }
  };
}
let closure_1 = createExperimentalFeatureFlagAccessor("controlledBottomTabs", false);
let closure_2 = createExperimentalFeatureFlagAccessor("synchronousScreenUpdatesEnabled", false);
let closure_3 = createExperimentalFeatureFlagAccessor("synchronousHeaderConfigUpdatesEnabled", false);
let closure_4 = createExperimentalFeatureFlagAccessor("synchronousHeaderSubviewUpdatesEnabled", false);
let closure_5 = createExperimentalFeatureFlagAccessor("androidResetScreenShadowStateOnOrientationChangeEnabled", true);
let closure_6 = createExperimentalFeatureFlagAccessor("iosPreventReattachmentOfDismissedScreens", true);
let closure_7 = createExperimentalFeatureFlagAccessor("ios26AllowInteractionsDuringTransition", true);
let obj = {};
obj = {};
Object.defineProperty(obj, "controlledBottomTabs", {
  get: () => store.get(),
  set: (arg0) => {
    const result = store.set(arg0);
  }
});
Object.defineProperty(obj, "synchronousScreenUpdatesEnabled", {
  get: () => store2.get(),
  set: (arg0) => {
    const result = store2.set(arg0);
  }
});
Object.defineProperty(obj, "synchronousHeaderConfigUpdatesEnabled", {
  get: () => store3.get(),
  set: (arg0) => {
    const result = store3.set(arg0);
  }
});
Object.defineProperty(obj, "synchronousHeaderSubviewUpdatesEnabled", {
  get: () => store4.get(),
  set: (arg0) => {
    const result = store4.set(arg0);
  }
});
Object.defineProperty(obj, "androidResetScreenShadowStateOnOrientationChangeEnabled", {
  get: () => store5.get(),
  set: (arg0) => {
    const result = store5.set(arg0);
  }
});
Object.defineProperty(obj, "iosPreventReattachmentOfDismissedScreens", {
  get: () => store6.get(),
  set: (arg0) => {
    const result = store6.set(arg0);
  }
});
Object.defineProperty(obj, "ios26AllowInteractionsDuringTransition", {
  get: () => store7.get(),
  set: (arg0) => {
    const result = store7.set(arg0);
  }
});
obj.experiment = obj;
obj.stable = {};
arg5.default = obj;
arg5.compatibilityFlags = { "Null": "Small", "Null": "sm", "Null": "Placeholder" };
arg5.featureFlags = obj;
