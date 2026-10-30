// Module ID: 14654
// Function ID: 14655
// Name: OrbsRewardBackground
// Dependencies: [32, 19, 5010, 1994, 21, 504, 1093, 5712, 14655, 8864, 14656, 2]
// Exports: OrbsRewardBackground

// Module 14654 (OrbsRewardBackground)
import FastImageDefault from "FastImage" /* 5712 */;
import _modDef14655 from "module_14655" /* 14655 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import Fragment_mod from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let metroImportAll;
let metroImportDefault;
let tmp15;
const _modDef14656 = tmp15(14656);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export function OrbsRewardBackground(arg0) {
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
  const ACTIVE = onReady(1093).AppStates.ACTIVE;
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
  obj5 = { uri: _modDef14655 };
  const tmp16 = FastImageDefault;
  const children = [closure_7(tmp16, obj4), ];
  let tmp14Result = !stateFromStores && stateFromStores1 === ACTIVE;
  const tmp13 = closure_8;
  const tmp14 = closure_7;
  if (tmp14Result) {
    const obj6 = { source: obj7, style, resizeMode: "cover", onLoad: callback1, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj7 = { uri: _modDef14656 };
    const VideoComponent = tmp(8864).VideoComponent;
    tmp14Result = tmp14(VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return tmp13(Fragment, { children });
}
