// Module ID: 15944
// Function ID: 123124
// Name: MediaPlaybackPanelController
// Dependencies: [57, 31, 4122, 1347, 4342, 13512, 10256, 10048, 33, 3991, 1557, 15739, 13511, 566, 15945, 2]
// Exports: default

// Module 15944 (MediaPlaybackPanelController)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import withEqualityFn from "withEqualityFn";
import { MediaPlaybackPanelModes } from "MediaPlaybackPanelModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { MorphablePanelModes } from "MIN_PAN_GESTURE_MOVE";
import { jsx } from "jsxProd";

const require = arg1;
let closure_12 = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let ActivityPanelModes;
  let MediaPlaybackPanelModes;
  let canShowPIP;
  let _slicedToArray;
  let result;
  let _isNativeReflectConstruct;
  let _createForOfIteratorHelperLoose;
  let dependencyMap;
  let importDefault;
  const tmp = (function useCoreState() {
    let obj = mode(outer1_2[9]);
    const sharedValue = obj.useSharedValue(outer1_8.PIP);
    const sharedValue1 = mode(outer1_2[9]).useSharedValue({ height: 0, width: 0 });
    const obj2 = mode(outer1_2[9]);
    const sharedValue2 = mode(outer1_2[9]).useSharedValue({ x: -1, y: -1 });
    const obj3 = mode(outer1_2[9]);
    const sharedValue3 = mode(outer1_2[9]).useSharedValue(outer1_5.useReducedMotion);
    const items = [sharedValue3];
    const effect = outer1_4.useEffect(() => {
      function onChange() {
        const useReducedMotion = outer3_5.useReducedMotion;
        if (useReducedMotion !== outer1_1.get()) {
          const result = outer1_1.set(useReducedMotion);
        }
      }
      let result = outer2_5.addReactChangeListener(onChange);
      return () => {
        const result = outer3_5.removeReactChangeListener(onChange);
      };
    }, items);
    const obj4 = mode(outer1_2[9]);
    const sharedValue4 = mode(outer1_2[9]).useSharedValue(true);
    const obj5 = mode(outer1_2[9]);
    const sharedValue5 = mode(outer1_2[9]).useSharedValue(0);
    const obj6 = mode(outer1_2[9]);
    const fn = function p() {
      if (sharedValue.get() === outer2_8.PIP) {
        let UNDEFINED = constants.PIP;
      } else {
        UNDEFINED = constants.UNDEFINED;
      }
      return UNDEFINED;
    };
    obj = { mode: sharedValue, MediaPlaybackPanelModes: outer1_8, MorphablePanelModes: closure_10 };
    fn.__closure = obj;
    fn.__workletHash = 10375114450450;
    fn.__initData = closure_12;
    const derivedValue = mode(outer1_2[9]).useDerivedValue(fn);
    const obj7 = mode(outer1_2[9]);
    const tmp9 = outer1_1(outer1_2[10])();
    const tmp10 = outer1_1(outer1_2[11])(outer1_1(outer1_2[10])());
    const sharedValue6 = mode(outer1_2[9]).useSharedValue(false);
    const obj9 = mode(outer1_2[9]);
    obj = { mode: sharedValue, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs: tmp10, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset: mode(outer1_2[9]).useSharedValue({ x: 0, y: 0, gestureActive: false }) };
    return obj;
  })();
  const mode = tmp.mode;
  ({ morphablePanelMode: importDefault, wrapperDimensions: dependencyMap, useReducedMotion: _slicedToArray, pipState: result, pipAvoidanceSpecs: _isNativeReflectConstruct, scrollPosition: _createForOfIteratorHelperLoose, canShowPIP } = tmp);
  ({ lockScrolling: MediaPlaybackPanelModes, wrapperOffset: ActivityPanelModes } = tmp);
  let closure_10 = React.useRef(undefined);
  let tmp2 = callback(React.useState(mode.get()), 2);
  const first = tmp2[0];
  let closure_12 = tmp4;
  let items = [first, tmp2[1]];
  let closure_13 = React.useCallback(() => {
    let flag = first === outer1_8.PIP;
    if (flag) {
      tmp4(outer1_8.DISMISSED);
      outer1_1(outer1_2[12]).userDidClosePip();
      flag = true;
      const obj = outer1_1(outer1_2[12]);
    }
    return flag;
  }, items);
  const tmp5 = canShowPIP((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  let closure_14 = tmp5;
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores = mode(566).useStateFromStores(items1, () => outer1_6.getActivityPanelMode() === outer1_9.PIP);
  const items2 = [canShowPIP, tmp5, stateFromStores];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    if (tmp2) {
      tmp2 = !stateFromStores;
    }
    const result = canShowPIP.set(tmp2);
  }, items2);
  return first(importDefault(15945).Provider, { value: callback(React.useState(() => ({ mode, setMode: closure_12, morphablePanelMode: closure_1, wrapperDimensions: closure_2, useReducedMotion: _slicedToArray, pipState: result, pipAvoidanceSpecs: _isNativeReflectConstruct, dismissToPipGestureRef: closure_10, dismissPanel: closure_13, scrollPosition: _createForOfIteratorHelperLoose, canShowPIP, lockScrolling: closure_8, wrapperOffset: closure_9 })), 1)[0], children: children.children });
};
