// Module ID: 11955
// Function ID: 92526
// Name: dropMilliseconds
// Dependencies: [57, 31, 4122, 664, 566, 4015, 2]
// Exports: useTimestampTickedNow

// Module 11955 (dropMilliseconds)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function dropMilliseconds(arg0) {
  const rounded = Math.floor(arg0 / importDefault(664).Millis.SECOND);
  return rounded * importDefault(664).Millis.SECOND;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/content_inventory/memberlist/useTimestampTickedNow.tsx");

export const useTimestampTickedNow = function useTimestampTickedNow() {
  let hovered;
  let isAppFocused;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ isAppFocused, hovered } = obj);
  if (isAppFocused === undefined) {
    isAppFocused = true;
  }
  let _require;
  let importDefault;
  const tmp = callback(React.useState(() => outer1_6(Date.now())), 2);
  _require = tmp[1];
  const items = [_isNativeReflectConstruct];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.useReducedMotion);
  let tmp3 = !isAppFocused;
  if (!tmp3) {
    if (stateFromStores) {
      stateFromStores = !hovered;
    }
    tmp3 = stateFromStores;
  }
  const SECOND = importDefault(664).Millis.SECOND;
  if (tmp3) {
    let result = 15 * SECOND;
  } else {
    result = SECOND;
  }
  importDefault = result;
  const items1 = [result];
  const effect = React.useEffect(() => {
    const interval = new callback(outer1_2[5]).Interval();
    interval.start(c1, () => {
      interval(outer2_6(Date.now()));
    });
    return () => interval.stop();
  }, items1);
  obj = { now: tmp[0], slowTickMode: tmp3 };
  return obj;
};
