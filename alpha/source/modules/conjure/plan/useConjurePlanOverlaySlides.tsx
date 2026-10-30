// Module ID: 12692
// Function ID: 12693
// Name: useConjurePlanOverlaySlides
// Dependencies: [32, 19, 5010, 3865, 504, 1114, 2]
// Exports: useConjurePlanOverlaySlides

// Module 12692 (useConjurePlanOverlaySlides)
import _modDef3865 from "module_3865" /* 3865 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let items = [_modDef3865["3eTjcV"], _modDef3865.l3j5nS];
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanOverlaySlides.tsx");

export function useConjurePlanOverlaySlides(arg0) {
  let _undefined;
  let c1;
  let callback1;
  let closure_0;
  let paused;
  let ready;
  let tmp5;
  ({ ready, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  dependencyMap = undefined;
  ready = undefined;
  let num;
  let pick;
  items = [pick];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => callback.useReducedMotion);
  const tmp2 = ready(num.useState(0), 2);
  _require = tmp2[1];
  const first = tmp2[0];
  [tmp5, c1] = ready(num.useState(false), 2);
  ready(num.useState(false), 2);
  if (ready) {
    ready = !stateFromStores;
  }
  if (ready) {
    ready = !paused;
  }
  if (ready) {
    ready = !tmp5;
  }
  if (!stateFromStores) {
    num = first;
  } else {
    num = 0;
  }
  const items1 = [ready];
  const effect = obj2.useEffect(() => {
    if (ready) {
      const _setInterval = setInterval;
      const interval = setInterval(() => {
        let length;
        return closure_0((arg0) => (arg0 + 1) % length.length);
      }, 4000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  pick = obj2.useCallback((arg0) => {
    c1(true);
    closure_0(arg0);
  }, []);
  const items2 = [pick, num];
  const obj3 = {
    slide: num,
    labels: items.map((item) => {
      const intl = closure_0(c1[5]).intl;
      return intl.string(item);
    }),
    pick,
    hold: callback1
  };
  callback1 = obj2.useCallback(() => callback(num), items2);
  return obj3;
}
