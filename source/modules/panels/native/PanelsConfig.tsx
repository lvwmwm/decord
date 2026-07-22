// Module ID: 14677
// Function ID: 110675
// Name: isTimingConfig
// Dependencies: []

// Module 14677 (isTimingConfig)
let closure_0 = { code: "function isTimingConfig_PanelsConfigTsx1(obj){return obj!=null&&obj.duration!=null;}" };
let obj = { useIsNewGamesCoachmarkEnabled: true, unsafeStringify: true, shouldListenToVisibleIndices: true, "Bool(false)": true, "Bool(false)": true };
obj = { damping: 30 };
const merged = Object.assign(obj);
obj = { damping: 20 };
const merged1 = Object.assign(obj);
const obj1 = { duration: 250, easing: require(dependencyMap[0]).STANDARD_EASING };
const obj2 = { duration: 200, easing: require(dependencyMap[0]).STANDARD_EASING };
const obj3 = {};
const tmp2 = () => {
  function isTimingConfig(duration) {
    return null != duration && null != duration.duration;
  }
  isTimingConfig.__closure = {};
  isTimingConfig.__workletHash = 14033676769786;
  isTimingConfig.__initData = closure_0;
  return isTimingConfig;
}();
obj3.swipeSidePanelOpen = { duration: 250, easing: require(dependencyMap[0]).DECELERATED_EASING };
const obj4 = { duration: 250, easing: require(dependencyMap[0]).DECELERATED_EASING };
obj3.swipeSidePanelClose = { duration: 200, easing: require(dependencyMap[0]).DECELERATED_EASING };
obj3.nonSwipeSidePanelOpen = obj1;
obj3.nonSwipeSidePanelClose = obj2;
obj3.touchSlopForPanGesture = 8;
obj3.minFlingVelocityX = 240;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/panels/native/PanelsConfig.tsx");

export const isTimingConfig = tmp2;
export const SIDE_PANEL_OPEN_DURATION_MS = 250;
export const SIDE_PANEL_CLOSE_DURATION_MS = 200;
export const DEFAULT_PANELS_ANIMATION_CONFIG = { swipeSidePanelOpen: obj, swipeSidePanelClose: obj, nonSwipeSidePanelOpen: obj1, nonSwipeSidePanelClose: obj2, touchSlopForPanGesture: 8, minFlingVelocityX: 240 };
export const ANDROID_PANELS_ANIMATION_CONFIG = obj3;
