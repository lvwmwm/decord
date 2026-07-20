// Module ID: 15508
// Function ID: 118353
// Name: getLaunchPadPullTabPositionCached
// Dependencies: [0, 0, 0, 4294967295, 0, 0]
// Exports: clearLaunchPadPullTabExclusionRect, persistLaunchPadPullTabPosition

// Module 15508 (getLaunchPadPullTabPositionCached)
import result from "result";
import result from "result";

function getLaunchPadPullTabPositionCached() {
  const Storage = require(dependencyMap[1]).Storage;
  let value = Storage.get(closure_6);
  if (null == value) {
    value = closure_4;
  }
  return value;
}
function setLaunchPadPullTabPositionCached(arg0) {
  const Storage = require(dependencyMap[1]).Storage;
  const result = Storage.set(closure_6, arg0);
}
function setLaunchPadPullTabExclusionRect() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = getLaunchPadPullTabPositionCached();
  }
  let obj = require(dependencyMap[2]);
  if (obj.isAndroid()) {
    const diff = require(dependencyMap[4]).getWindowDimensions().width - closure_5;
    const obj2 = require(dependencyMap[4]);
    const width = require(dependencyMap[4]).getWindowDimensions().width;
    const sum = tmp + closure_3;
    let left;
    if (null != _undefined) {
      left = _undefined.left;
    }
    let tmp11 = left === diff;
    if (tmp11) {
      let right;
      if (null != _undefined) {
        right = _undefined.right;
      }
      tmp11 = right === width;
    }
    if (tmp11) {
      let top;
      if (null != _undefined) {
        top = _undefined.top;
      }
      tmp11 = top === tmp;
    }
    if (tmp11) {
      let bottom;
      if (null != _undefined) {
        bottom = _undefined.bottom;
      }
      tmp11 = bottom === sum;
    }
    if (!tmp11) {
      obj = { left: diff, right: width, top: tmp, bottom: sum };
      const _undefined = obj;
      const items = [_undefined];
      const result = importDefault(dependencyMap[3]).setSystemGestureExclusionRects(items);
      const obj5 = importDefault(dependencyMap[3]);
    }
    const obj3 = require(dependencyMap[4]);
  }
}
({ LAUNCH_PAD_PULL_TAB_HEIGHT: closure_3, LAUNCH_PAD_PULL_TAB_INITIAL_POSITION: closure_4, LAUNCH_PAD_PULL_TAB_WIDTH: closure_5 } = result);
let closure_6 = "LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY";
let closure_7 = 0;
let closure_8;
result = result.fileFinishedImporting("modules/launchpad/native/LaunchPadPullTabCache.tsx");

export { getLaunchPadPullTabPositionCached };
export { setLaunchPadPullTabPositionCached };
export const persistLaunchPadPullTabPosition = function persistLaunchPadPullTabPosition(arg0) {
  const require = arg0;
  clearTimeout(timeout);
  const timeout = setTimeout(() => {
    callback(arg0);
    if (null != closure_8) {
      callback2(arg0);
    }
  }, 300);
};
export const clearLaunchPadPullTabExclusionRect = function clearLaunchPadPullTabExclusionRect() {
  let isAndroidResult = require(dependencyMap[2]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != closure_8;
  }
  if (isAndroidResult) {
    closure_8 = undefined;
    const result = importDefault(dependencyMap[3]).setSystemGestureExclusionRects([]);
    const obj2 = importDefault(dependencyMap[3]);
  }
};
export { setLaunchPadPullTabExclusionRect };
