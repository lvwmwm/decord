// Module ID: 19736
// Function ID: 19737
// Name: MediaPlaybackPanelController
// Dependencies: [32, 19, 5141, 4988, 6930, 16703, 5781, 11364, 21, 1652, 1627, 19475, 16702, 504, 19737, 2]
// Exports: default

// Module 19736 (MediaPlaybackPanelController)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5781 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11364 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16702 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 16703 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5141 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import VoicePanelStore from "VoicePanelStore" /* 6930 */;
import size from "module_2" /* 2 */;

let set;

let AccessibilityStore = AccessibilityStore_mod;
const MediaPlaybackPanelModes = MediaPlaybackPanelConstants.MediaPlaybackPanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let closure_12 = { code: "(function MediaPlaybackPanelControllerTsx1(){let[mode,MediaPlaybackPanelModes,MorphablePanelModes]=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}})" };
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let pipAvoidanceSpecs;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp9;
  let sharedValue;
  let derivedValue;
  let sharedValue1;
  AccessibilityStore = undefined;
  let sharedValue6;
  let wrapperOffset;
  let dismissToPipGestureRef;
  let first;
  let setMode;
  let dismissPanel;
  let closure_14;
  let stateFromStores;
  const tmp = sharedValue;
  let tmp2 = sharedValue1;
  children = children.children;
  let obj = sharedValue(sharedValue1[9]);
  sharedValue = obj.useSharedValue(sharedValue6.PIP);
  const obj3 = sharedValue(sharedValue1[9]);
  sharedValue1 = obj3.useSharedValue({ height: 0, width: 0 });
  const obj4 = sharedValue(sharedValue1[9]);
  const sharedValue2 = obj4.useSharedValue({ x: -1, y: -1 });
  const obj5 = sharedValue(sharedValue1[9]);
  const sharedValue3 = obj5.useSharedValue(AccessibilityStore.useReducedMotion);
  const value = sharedValue2;
  const items = [sharedValue3];
  const effect = sharedValue2.useEffect(() => {
    function onChange() {
      const useReducedMotion = pipAvoidanceSpecs.useReducedMotion;
      const obj = onChange;
      if (useReducedMotion !== onChange.get()) {
        const result = obj.set(useReducedMotion);
      }
    }
    let result = pipAvoidanceSpecs.addReactChangeListener(onChange);
    return () => {
      const result = pipAvoidanceSpecs.removeReactChangeListener(onChange);
    };
  }, items);
  const obj7 = sharedValue(sharedValue1[9]);
  const sharedValue4 = obj7.useSharedValue(true);
  const obj8 = sharedValue(sharedValue1[9]);
  const sharedValue5 = obj8.useSharedValue(0);
  const items1 = [setMode, sharedValue, sharedValue6, dismissToPipGestureRef];
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  const obj9 = sharedValue(sharedValue1[9]);
  class MediaPlaybackPanelControllerTsx1 {
    constructor() {
      let UNDEFINED;
      if (_undefined.get() === _undefined2.PIP) {
        UNDEFINED = _undefined3.PIP;
      } else {
        UNDEFINED = _undefined3.UNDEFINED;
      }
      return UNDEFINED;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  MediaPlaybackPanelControllerTsx1.__closure = items2;
  MediaPlaybackPanelControllerTsx1.__workletHash = 13130636479883;
  MediaPlaybackPanelControllerTsx1.__initData = tmp9;
  derivedValue = obj9.useDerivedValue(MediaPlaybackPanelControllerTsx1);
  const tmp14 = derivedValue(tmp2[10])();
  const tmp15 = derivedValue(tmp2[11])(tmp14);
  const tmpResult = tmp(tmp2[9]);
  sharedValue6 = tmpResult.useSharedValue(false);
  AccessibilityStore = tmp15;
  const tmpResult3 = tmp(tmp2[9]);
  wrapperOffset = tmpResult3.useSharedValue({ x: 0, y: 0, gestureActive: false });
  dismissToPipGestureRef = value.useRef(undefined);
  const tmp17 = sharedValue3(value.useState(sharedValue.get()), 2);
  first = tmp17[0];
  setMode = tmp19;
  const items3 = [first, tmp17[1]];
  dismissPanel = value.useCallback(() => {
    let flag = first === MediaPlaybackPanelModes.PIP;
    if (flag) {
      setMode(tmp.DISMISSED);
      const obj = MediaPlayerManagerDefault;
      obj.userDidClosePip();
      flag = true;
    }
    return flag;
  }, items3);
  const tmp20 = sharedValue4((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  closure_14 = tmp20;
  const items4 = [sharedValue5];
  const tmpResult4 = tmp(tmp2[13]);
  stateFromStores = tmpResult4.useStateFromStores(items4, () => sharedValue5.getActivityPanelMode() === wrapperOffset.PIP);
  const items5 = [sharedValue4, tmp20, stateFromStores];
  const layoutEffect = value.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    set = sharedValue4.set;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = set(tmp2);
  }, items5);
  return first(derivedValue(tmp2[14]).Provider, { value: sharedValue3(value.useState(() => ({ mode: sharedValue, setMode, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs, dismissToPipGestureRef, dismissPanel, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset })), 1)[0], children });
};
