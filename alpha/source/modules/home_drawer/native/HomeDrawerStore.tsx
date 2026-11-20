// Module ID: 17412
// Function ID: 17413
// Name: HomeDrawerStore
// Dependencies: [1071, 1257, 1653, 5004, 17413, 4709, 2]
// Exports: computeMaxX

// Module 17412 (HomeDrawerStore)
import Constants from "Constants" /* 1071 */;
import _slicedToArray from "_slicedToArray" /* 4709 */;
import timing_timing from "timing/timing" /* 5004 */;
import HomeDrawerAnimations from "HomeDrawerAnimations" /* 17413 */;
import module_1257 from "module_1257" /* 1257 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set, set2, set3;

const DM_WIDTH = Constants.DM_WIDTH;
const withEqualityFn = module_1257.createWithEqualityFn((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  _require = arg0;
  dependencyMap = arg1;
  let obj = {
    panelX: obj2.makeMutable(0),
    snapX: obj3.makeMutable(0),
    isOpenTarget: obj4.makeMutable(false),
    gestureState: obj5.makeMutable({ active: false, initialX: 0, initialY: 0, panelX: 0 }),
    maxX: 0,
    lastInteractionAt: { current: 0 },
    isPanelTouchActive: obj6.makeMutable(false),
    setPanelX(arg0) {
      let gestureState;
      let isOpenTarget;
      let panelX;
      let snapX;
      const tmp = closure_1();
      ({ panelX, snapX, isOpenTarget, gestureState } = tmp);
      const maxX = tmp.maxX;
      if (isOpenTarget.get() !== "open" === arg0) {
        const result = isOpenTarget.set(tmp2);
        let num = 0;
        set3 = panelX.set;
        const withTiming = timing_timing.withTiming;
        timing_timing;
        if ("open" === arg0) {
          num = maxX;
        }
        set3(withTiming(num, HomeDrawerAnimations.HOME_DRAWER_SETTLE_TIMING, "animate-always"));
        set = snapX.set;
        const tmp9Result = timing_timing;
        const result1 = set(tmp9Result.withTiming(0, tmp9(17413).HOME_DRAWER_SETTLE_TIMING, "animate-always"));
        const obj = { active: false };
        set2 = gestureState.set;
        const merged = Object.assign(gestureState.get());
        set2(obj);
      }
    },
    updateMaxX(width, left) {
      const obj = { maxX: width.width - left.left - left.right - DM_WIDTH - 8 + 8 };
      closure_0(obj);
    },
    noteInteraction() {
      closure_1().lastInteractionAt.current = Date.now();
    }
  };
  obj2 = require("module_1653");
  obj3 = require("module_1653");
  obj4 = require("module_1653");
  obj5 = require("module_1653");
  obj6 = require("module_1653");
  return obj;
}, _slicedToArray.shallow);
let result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerStore.tsx");

export default withEqualityFn;
export function computeMaxX(width, left) {
  return width.width - left.left - left.right - DM_WIDTH - 8 + 8;
}
