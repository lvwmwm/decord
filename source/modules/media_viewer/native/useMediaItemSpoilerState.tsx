// Module ID: 12120
// Function ID: 93371
// Name: useMediaItemSpoilerState
// Dependencies: []
// Exports: useMediaItemSpoilerState

// Module 12120 (useMediaItemSpoilerState)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = { code: "function useMediaItemSpoilerStateTsx1(){const{runOnJS,setSpoilerActive,hasSpoiler}=this.__closure;runOnJS(setSpoilerActive)(hasSpoiler);}" };
let closure_5 = { code: "function useMediaItemSpoilerStateTsx2(){const{spoilerOpacity}=this.__closure;return{opacity:spoilerOpacity.get()};}" };
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/media_viewer/native/useMediaItemSpoilerState.tsx");

export const useMediaItemSpoilerState = function useMediaItemSpoilerState(index) {
  const arg1 = index;
  const MediaViewerSourcesStore = arg1(dependencyMap[2]).MediaViewerSourcesStore;
  const state = MediaViewerSourcesStore.useState((spoilerIndexes) => {
    spoilerIndexes = spoilerIndexes.spoilerIndexes;
    return spoilerIndexes.has(spoilerIndexes);
  });
  const dependencyMap = state;
  const tmp2 = callback(React.useState(state), 2);
  let num = 0;
  const callback = tmp2[1];
  if (state) {
    num = 1;
  }
  const sharedValue = arg1(dependencyMap[3]).useSharedValue(num);
  const React = sharedValue;
  const items = [state, sharedValue];
  const effect = React.useEffect(() => {
    let obj = arg0(state[4]);
    let num = 0;
    if (state) {
      num = 1;
    }
    obj = { duration: 200, easing: arg0(state[5]).STANDARD_EASING };
    const fn = function t() {
      callback(closure_1[3]).runOnJS(closure_2)(closure_1);
    };
    obj = { runOnJS: arg0(state[3]).runOnJS, setSpoilerActive: closure_2, hasSpoiler: state };
    fn.__closure = obj;
    fn.__workletHash = 15930548853488;
    fn.__initData = closure_4;
    const result = sharedValue.set(obj.withTiming(num, obj, "respect-motion-settings", fn));
  }, items);
  const items1 = [tmp2[0], ];
  const obj = arg1(dependencyMap[3]);
  class S {
    constructor() {
      obj = { opacity: closure_3.get() };
      return obj;
    }
  }
  S.__closure = { spoilerOpacity: sharedValue };
  S.__workletHash = 8496335051493;
  S.__initData = closure_5;
  items1[1] = arg1(dependencyMap[3]).useAnimatedStyle(S);
  return items1;
};
