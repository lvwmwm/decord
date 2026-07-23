// Module ID: 12234
// Function ID: 95522
// Name: useMediaItemSpoilerState
// Dependencies: [57, 31, 8275, 3991, 4131, 1273, 2]
// Exports: useMediaItemSpoilerState

// Module 12234 (useMediaItemSpoilerState)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
let closure_5 = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
let result = require("zustandStore").fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  const _require = index;
  const MediaViewerSourcesStore = _require(state[2]).MediaViewerSourcesStore;
  state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(closure_0);
  });
  const tmp2 = callback(sharedValue.useState(state), 2);
  let num = 0;
  callback = tmp2[1];
  if (state) {
    num = 1;
  }
  sharedValue = _require(state[3]).useSharedValue(num);
  const items = [state, sharedValue];
  const effect = sharedValue.useEffect(() => {
    let obj = index(state[4]);
    let num = 0;
    if (state) {
      num = 1;
    }
    obj = { duration: 200, easing: index(state[5]).STANDARD_EASING };
    const fn = function t() {
      callback(state[3]).runOnJS(outer1_2)(outer1_1);
    };
    obj = { runOnJS: index(state[3]).runOnJS, setSpoilerActive: _slicedToArray, hasSpoiler: state };
    fn.__closure = obj;
    fn.__workletHash = 15930548853488;
    fn.__initData = outer1_4;
    const result = sharedValue.set(obj.withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp2[0], ];
  let obj = _require(state[3]);
  class S {
    constructor() {
      obj = { opacity: result.get() };
      return obj;
    }
  }
  S.__closure = { spoilerOpacity: sharedValue };
  S.__workletHash = 8496335051493;
  S.__initData = closure_5;
  items1[1] = _require(state[3]).useAnimatedStyle(S);
  return items1;
};
