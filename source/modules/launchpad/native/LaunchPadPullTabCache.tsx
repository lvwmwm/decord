// Module ID: 15643
// Function ID: 120632
// Name: getLaunchPadPullTabPositionCached
// Dependencies: [10451, 587, 477, 4684, 1450, 2]
// Exports: clearLaunchPadPullTabExclusionRect, persistLaunchPadPullTabPosition

// Module 15643 (getLaunchPadPullTabPositionCached)
import LAUNCH_PAD_SPRING_CONFIG from "LAUNCH_PAD_SPRING_CONFIG";

let closure_3;
let closure_4;
let closure_5;
function getLaunchPadPullTabPositionCached() {
  const Storage = require(587) /* Storage */.Storage;
  let value = Storage.get(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY);
  if (null == value) {
    value = closure_4;
  }
  return value;
}
function setLaunchPadPullTabPositionCached(arg0) {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY, arg0);
}
function setLaunchPadPullTabExclusionRect() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = getLaunchPadPullTabPositionCached();
  }
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    const diff = require(1450) /* useWindowDimensions */.getWindowDimensions().width - closure_5;
    const obj2 = require(1450) /* useWindowDimensions */;
    const width = require(1450) /* useWindowDimensions */.getWindowDimensions().width;
    const sum = tmp + closure_3;
    let left;
    if (null != obj) {
      left = obj.left;
    }
    let tmp11 = left === diff;
    if (tmp11) {
      let right;
      if (null != obj) {
        right = obj.right;
      }
      tmp11 = right === width;
    }
    if (tmp11) {
      let top;
      if (null != obj) {
        top = obj.top;
      }
      tmp11 = top === tmp;
    }
    if (tmp11) {
      let bottom;
      if (null != obj) {
        bottom = obj.bottom;
      }
      tmp11 = bottom === sum;
    }
    if (!tmp11) {
      obj = { left: diff, right: width, top: tmp, bottom: sum };
      const items = [obj];
      const result = importDefault(4684).setSystemGestureExclusionRects(items);
      const obj5 = importDefault(4684);
    }
    const obj3 = require(1450) /* useWindowDimensions */;
  }
}
({ LAUNCH_PAD_PULL_TAB_HEIGHT: closure_3, LAUNCH_PAD_PULL_TAB_INITIAL_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_WIDTH: closure_5 } = LAUNCH_PAD_SPRING_CONFIG);
const LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY = "LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY";
let c7 = 0;
let c8;
let result = require("set").fileFinishedImporting("modules/launchpad/native/LaunchPadPullTabCache.tsx");

export { getLaunchPadPullTabPositionCached };
export { setLaunchPadPullTabPositionCached };
export const persistLaunchPadPullTabPosition = function persistLaunchPadPullTabPosition(arg0) {
  let closure_0 = arg0;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    outer1_10(closure_0);
    if (null != outer1_8) {
      outer1_11(closure_0);
    }
  }, 300);
};
export const clearLaunchPadPullTabExclusionRect = function clearLaunchPadPullTabExclusionRect() {
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != c8;
  }
  if (isAndroidResult) {
    c8 = undefined;
    const result = importDefault(4684).setSystemGestureExclusionRects([]);
    const obj2 = importDefault(4684);
  }
};
export { setLaunchPadPullTabExclusionRect };
