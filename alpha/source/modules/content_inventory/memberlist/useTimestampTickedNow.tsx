// Module ID: 14852
// Function ID: 14853
// Name: useTimestampTickedNow
// Dependencies: [32, 19, 5015, 1089, 504, 4858, 2]
// Exports: useTimestampTickedNow

// Module 14852 (useTimestampTickedNow)
import DurationsDefault from "Durations" /* 1089 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let result = size.fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export function useTimestampTickedNow() {
  let _undefined;
  let closure_0;
  let hovered;
  let isAppFocused;
  let now;
  let result;
  let useReducedMotion;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  _require = undefined;
  importDefault = undefined;
  [now, _require] = react.useState(() => {
    const timestamp = Date.now();
    const rounded = Math.floor(timestamp / _undefined(dependencyMap[3]).Millis.SECOND);
    return rounded * _undefined(dependencyMap[3]).Millis.SECOND;
  });
  const items = [AccessibilityStore];
  const obj3 = require("get initialized");
  let stateFromStores = obj3.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let slowTickMode = !isAppFocused;
  const obj2 = react;
  if (isAppFocused) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    slowTickMode = stateFromStores;
  }
  const SECOND = DurationsDefault.Millis.SECOND;
  if (slowTickMode) {
    result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = obj2.useEffect(() => {
    const interval = new closure_0(dependencyMap[5]).Interval();
    interval.start(c1, () => {
      const timestamp = Date.now();
      const rounded = Math.floor(timestamp / c1(dependencyMap[3]).Millis.SECOND);
      interval(rounded * c1(dependencyMap[3]).Millis.SECOND);
    });
    return () => interval.stop();
  }, items1);
  return { now, slowTickMode };
}
