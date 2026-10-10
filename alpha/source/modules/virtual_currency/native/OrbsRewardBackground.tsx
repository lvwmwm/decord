// Module ID: 12988
// Function ID: 12989
// Name: OrbsRewardBackground
// Dependencies: [32, 19, 5081, 1999, 21, 558, 576, 504, 1105, 12989, 6156, 8425, 12990, 2]

// Module 12988 (OrbsRewardBackground)
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef12989 from "module_12989" /* 12989 */;
import _modDef12990 from "module_12990" /* 12990 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import Fragment_mod from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsRewardBackground(arg0) {
  let closure_2;
  let closure_3;
  let first;
  let items2;
  let obj7;
  let onReady;
  let ref;
  let state;
  let style;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let tmp = onReady;
  const obj = onReady(576);
  const cResult = obj.c(20);
  ({ style, onReady } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function y() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [AppStateStore];
    const fn2 = function _() {
      return state.getState();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  const ACTIVE = tmp(1105).AppStates.ACTIVE;
  [tmp13, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, dependencyMap] = react.useState(false);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function k() {
      return importDefault(true);
    };
    cResult[4] = fn3;
    tmp16 = fn3;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function w() {
      return closure_2(true);
    };
    cResult[5] = fn4;
    tmp17 = fn4;
  } else {
    tmp17 = cResult[5];
  }
  _slicedToArray = tmp13;
  react = obj4.useRef(false);
  if (cResult[6] === tmp13) {
    let tmp19;
    let tmp20;
    let tmp22;
    let tmp24;
    if (cResult[7] === onReady) {
      tmp19 = cResult[8];
      tmp20 = cResult[9];
    }
    const effect = obj4.useEffect(tmp19, tmp20);
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { uri: _modDef12989 };
      cResult[10] = obj2;
      tmp22 = obj2;
    } else {
      tmp22 = cResult[10];
    }
    if (cResult[11] !== style) {
      const obj3 = { source: tmp22, style, resizeMode: "cover", onLoad: tmp16 };
      const tmp27 = closure_7(FastImageDefault, obj3);
      cResult[11] = style;
      cResult[12] = tmp27;
      tmp24 = tmp27;
    } else {
      tmp24 = cResult[12];
    }
    if (cResult[13] === stateFromStores1 === ACTIVE) {
      if (cResult[14] === stateFromStores) {
        let tmp29;
        if (cResult[15] === style) {
          tmp29 = cResult[16];
        }
        if (cResult[17] === tmp24) {
          let tmp33;
          if (cResult[18] === tmp29) {
            tmp33 = cResult[19];
          }
          return tmp33;
        }
        const obj5 = { children: items2 };
        items2 = [tmp24, tmp29];
        const tmp35 = closure_8(react.Fragment, obj5);
        cResult[17] = tmp24;
        cResult[18] = tmp29;
        cResult[19] = tmp35;
        tmp33 = tmp35;
      }
    }
    let tmp30 = !stateFromStores && tmp28;
    if (tmp30) {
      const obj6 = { source: obj7, style, resizeMode: "cover", onLoad: tmp17, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
      obj7 = { uri: _modDef12990 };
      const VideoComponent = tmp(8425).VideoComponent;
      tmp30 = closure_7(VideoComponent, obj6);
    }
    cResult[13] = stateFromStores1 === ACTIVE;
    cResult[14] = stateFromStores;
    cResult[15] = style;
    cResult[16] = tmp30;
    tmp29 = tmp30;
  }
  class A {
    constructor() {
      const tmp = closure_3 && !ref.current;
      if (tmp) {
        ref.current = true;
        onReady();
      }
    }
  }
  const items3 = [tmp13, onReady];
  cResult[6] = tmp13;
  cResult[7] = onReady;
  cResult[8] = A;
  cResult[9] = items3;
  tmp20 = items3;
  tmp19 = A;
}) : (function OrbsRewardBackground(arg0) {
  let _undefined;
  let _undefined2;
  let c1;
  let c2;
  let closure_3;
  let obj5;
  let obj7;
  let onReady;
  let ref;
  let state;
  let style;
  let tmp6;
  let tmp8;
  let useReducedMotion;
  ({ style, onReady } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let tmp = onReady;
  const items = [AccessibilityStore];
  const obj = onReady(504);
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [AppStateStore];
  const obj2 = onReady(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => state.getState());
  const ACTIVE = onReady(1105).AppStates.ACTIVE;
  [tmp6, c1] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp8, c2] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined(true), []);
  const callback1 = react.useCallback(() => _undefined2(true), []);
  _slicedToArray = tmp6;
  react = obj3.useRef(false);
  const items2 = [tmp6, onReady];
  const effect = obj3.useEffect(() => {
    const tmp = closure_3 && !ref.current;
    if (tmp) {
      ref.current = true;
      onReady();
    }
  }, items2);
  const Fragment = obj3.Fragment;
  const obj4 = { source: obj5, style, resizeMode: "cover", onLoad: callback };
  obj5 = { uri: _modDef12989 };
  const tmp16 = FastImageDefault;
  const children = [closure_7(tmp16, obj4), ];
  let tmp14Result = !stateFromStores && stateFromStores1 === ACTIVE;
  const tmp13 = closure_8;
  const tmp14 = closure_7;
  if (tmp14Result) {
    const obj6 = { source: obj7, style, resizeMode: "cover", onLoad: callback1, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj7 = { uri: _modDef12990 };
    const VideoComponent = tmp(8425).VideoComponent;
    tmp14Result = tmp14(VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return tmp13(Fragment, { children });
});
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export const OrbsRewardBackground = tmp3;
