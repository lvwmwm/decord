// Module ID: 17045
// Function ID: 17046
// Name: MediaPlaybackPanelController
// Dependencies: [32, 19, 4825, 2044, 5044, 14098, 8502, 11756, 21, 4566, 1613, 16834, 14097, 504, 17046, 2]
// Exports: default

// Module 17045 (MediaPlaybackPanelController)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11756 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14097 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 14098 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4825 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;
import size from "module_2" /* 2 */;

let set;

let AccessibilityStore = AccessibilityStore_mod;
const MediaPlaybackPanelModes = MediaPlaybackPanelConstants.MediaPlaybackPanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let __initData = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let dismissToPipGestureRef;
  let pipAvoidanceSpecs;
  let setMode;
  let sharedValue1;
  AccessibilityStore = undefined;
  let sharedValue6;
  MorphablePanelModes = undefined;
  __initData = undefined;
  let sharedValue;
  children = children.children;
  let obj = sharedValue(sharedValue1[9]);
  sharedValue = obj.useSharedValue(sharedValue6.PIP);
  const obj3 = sharedValue(sharedValue1[9]);
  sharedValue1 = obj3.useSharedValue({ height: 0, width: 0 });
  const obj4 = sharedValue(sharedValue1[9]);
  const sharedValue2 = obj4.useSharedValue({ x: -1, y: -1 });
  const obj5 = sharedValue(sharedValue1[9]);
  const sharedValue3 = obj5.useSharedValue(AccessibilityStore.useReducedMotion);
  const items = [sharedValue3];
  const effect = sharedValue2.useEffect(() => {
    function onChange() {
      const useReducedMotion = pipAvoidanceSpecs.useReducedMotion;
      const obj = sharedValue3;
      if (useReducedMotion !== sharedValue3.get()) {
        const result = obj.set(useReducedMotion);
      }
    }
    let result = pipAvoidanceSpecs.addReactChangeListener(onChange);
    return () => {
      const result = pipAvoidanceSpecs.removeReactChangeListener(onChange);
    };
  }, items);
  const obj6 = sharedValue(sharedValue1[9]);
  const sharedValue4 = obj6.useSharedValue(true);
  const obj7 = sharedValue(sharedValue1[9]);
  const sharedValue5 = obj7.useSharedValue(0);
  const fn = function p() {
    let UNDEFINED;
    if (sharedValue.get() === sharedValue6.PIP) {
      UNDEFINED = constants.PIP;
    } else {
      UNDEFINED = constants.UNDEFINED;
    }
    return UNDEFINED;
  };
  const obj2 = { mode: sharedValue, MediaPlaybackPanelModes: sharedValue6, MorphablePanelModes };
  fn.__closure = obj2;
  fn.__workletHash = 10375114450450;
  fn.__initData = __initData;
  const obj8 = sharedValue(sharedValue1[9]);
  const derivedValue = obj8.useDerivedValue(fn);
  const tmp8 = derivedValue(sharedValue1[10])();
  const tmp9 = derivedValue(sharedValue1[11])(tmp8);
  const obj10 = sharedValue(sharedValue1[9]);
  sharedValue6 = obj10.useSharedValue(false);
  AccessibilityStore = tmp9;
  const obj11 = sharedValue(sharedValue1[9]);
  const wrapperOffset = obj11.useSharedValue({ x: 0, y: 0, gestureActive: false });
  MorphablePanelModes = sharedValue2.useRef(undefined);
  const tmp11 = sharedValue3(sharedValue2.useState(sharedValue.get()), 2);
  const first = tmp11[0];
  __initData = tmp13;
  const items1 = [first, tmp11[1]];
  const dismissPanel = sharedValue2.useCallback(() => {
    let flag = first === MediaPlaybackPanelModes.PIP;
    if (flag) {
      setMode(tmp.DISMISSED);
      const obj = MediaPlayerManagerDefault;
      obj.userDidClosePip();
      flag = true;
    }
    return flag;
  }, items1);
  const tmp14 = sharedValue4((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  let closure_14 = tmp14;
  const items2 = [sharedValue5];
  const obj12 = sharedValue(sharedValue1[13]);
  const stateFromStores = obj12.useStateFromStores(items2, () => sharedValue5.getActivityPanelMode() === wrapperOffset.PIP);
  const items3 = [sharedValue4, tmp14, stateFromStores];
  const layoutEffect = sharedValue2.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    set = sharedValue4.set;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = set(tmp2);
  }, items3);
  return first(derivedValue(sharedValue1[14]).Provider, { value: sharedValue3(sharedValue2.useState(() => ({ mode: sharedValue, setMode, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs, dismissToPipGestureRef, dismissPanel, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset })), 1)[0], children });
};
