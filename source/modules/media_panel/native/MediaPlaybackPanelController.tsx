// Module ID: 15772
// Function ID: 120586
// Name: MediaPlaybackPanelController
// Dependencies: []
// Exports: default

// Module 15772 (MediaPlaybackPanelController)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const MediaPlaybackPanelModes = arg1(dependencyMap[5]).MediaPlaybackPanelModes;
const ActivityPanelModes = arg1(dependencyMap[6]).ActivityPanelModes;
const MorphablePanelModes = arg1(dependencyMap[7]).MorphablePanelModes;
const jsx = arg1(dependencyMap[8]).jsx;
let closure_12 = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let canShowPIP;
  const tmp = function useCoreState() {
    let obj = mode(closure_2[9]);
    const sharedValue = obj.useSharedValue(constants.PIP);
    const mode = sharedValue;
    const sharedValue1 = mode(closure_2[9]).useSharedValue({ y: -536870861, isArray: -299892737 });
    const obj2 = mode(closure_2[9]);
    const sharedValue2 = mode(closure_2[9]).useSharedValue({});
    const obj3 = mode(closure_2[9]);
    const sharedValue3 = mode(closure_2[9]).useSharedValue(useReducedMotion.useReducedMotion);
    const items = [sharedValue3];
    const effect = React.useEffect(() => {
      function onChange() {
        const useReducedMotion = closure_5.useReducedMotion;
        if (useReducedMotion !== store.get()) {
          const result = store.set(useReducedMotion);
        }
      }
      const sharedValue = onChange;
      const result = closure_5.addReactChangeListener(onChange);
      return () => {
        const result = closure_5.removeReactChangeListener(onChange);
      };
    }, items);
    const obj4 = mode(closure_2[9]);
    const sharedValue4 = mode(closure_2[9]).useSharedValue(true);
    const obj5 = mode(closure_2[9]);
    const sharedValue5 = mode(closure_2[9]).useSharedValue(0);
    const obj6 = mode(closure_2[9]);
    const fn = function p() {
      if (sharedValue.get() === constants.PIP) {
        let UNDEFINED = constants2.PIP;
      } else {
        UNDEFINED = constants2.UNDEFINED;
      }
      return UNDEFINED;
    };
    obj = { mode: sharedValue, MediaPlaybackPanelModes: constants, MorphablePanelModes: closure_10 };
    fn.__closure = obj;
    fn.__workletHash = 10375114450450;
    fn.__initData = tmp4;
    const derivedValue = mode(closure_2[9]).useDerivedValue(fn);
    const obj7 = mode(closure_2[9]);
    const tmp9 = sharedValue3(closure_2[10])();
    const tmp10 = sharedValue3(closure_2[11])(sharedValue3(closure_2[10])());
    const sharedValue6 = mode(closure_2[9]).useSharedValue(false);
    const obj9 = mode(closure_2[9]);
    obj = { mode: sharedValue, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs: tmp10, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset: mode(closure_2[9]).useSharedValue({}) };
    return obj;
  }();
  const mode = tmp.mode;
  const arg1 = mode;
  ({ morphablePanelMode: closure_1, wrapperDimensions: closure_2, useReducedMotion: closure_3, pipState: closure_4, pipAvoidanceSpecs: closure_5, scrollPosition: closure_6, canShowPIP } = tmp);
  const callback2 = canShowPIP;
  ({ lockScrolling: closure_8, wrapperOffset: closure_9 } = tmp);
  let closure_10 = React.useRef(undefined);
  const tmp2 = callback(React.useState(mode.get()), 2);
  const first = tmp2[0];
  const jsx = first;
  let closure_12 = tmp4;
  const items = [first, tmp2[1]];
  let closure_13 = React.useCallback(() => {
    let flag = first === constants.PIP;
    if (flag) {
      tmp4(constants.DISMISSED);
      callback(closure_2[12]).userDidClosePip();
      flag = true;
      const obj = callback(closure_2[12]);
    }
    return flag;
  }, items);
  const tmp5 = callback2((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  const items1 = [closure_6];
  const stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items1, () => activityPanelMode.getActivityPanelMode() === constants2.PIP);
  const items2 = [canShowPIP, tmp5, stateFromStores];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp2 = !tmp5;
    if (tmp2) {
      tmp2 = !stateFromStores;
    }
    const result = canShowPIP.set(tmp2);
  }, items2);
  return jsx(importDefault(dependencyMap[14]).Provider, { value: callback(React.useState(() => ({ mode, setMode: tmp4, morphablePanelMode: closure_1, wrapperDimensions: closure_2, useReducedMotion: closure_3, pipState: closure_4, pipAvoidanceSpecs: closure_5, dismissToPipGestureRef: closure_10, dismissPanel: closure_13, scrollPosition: closure_6, canShowPIP, lockScrolling: closure_8, wrapperOffset: closure_9 })), 1)[0], children: children.children });
};
