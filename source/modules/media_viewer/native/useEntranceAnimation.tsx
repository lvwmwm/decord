// Module ID: 12140
// Function ID: 93529
// Name: setUseEntranceAnimationState
// Dependencies: []
// Exports: useEntranceAnimation

// Module 12140 (setUseEntranceAnimationState)
function setUseEntranceAnimationState(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState(arg0));
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let obj = { duration: 300, easing: arg1(dependencyMap[2]).STANDARD_EASING };
obj = arg1(dependencyMap[3]).create(() => ({ isComplete: false }));
let closure_6 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_7 = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
const obj2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj;
export const useEntranceAnimation = function useEntranceAnimation(entranceAnimationDriver) {
  let tmp2;
  const arg1 = entranceAnimationDriver;
  [tmp2, closure_1] = callback(React.useState(0), 2);
  const callback = React.useCallback(() => {
    callback((arg0) => arg0 + 1);
  }, []);
  const items = [entranceAnimationDriver];
  const items1 = [callback, entranceAnimationDriver];
  const handleLoadStart = React.useCallback(() => {
    let obj = arg0(closure_1[4]);
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const fn = function t() {
      callback(closure_1[6]).runOnJS(closure_8)({ isComplete: true });
    };
    obj = { runOnJS: arg0(closure_1[6]).runOnJS, setUseEntranceAnimationState: closure_8 };
    fn.__closure = obj;
    fn.__workletHash = 7427534745615;
    fn.__initData = closure_6;
    const result = arg0.set(arg0(closure_1[5]).withTiming(1, closure_4, "respect-motion-settings", fn));
  }, items);
  const handleError = React.useCallback((self) => {
    if (1 !== self.get()) {
      let obj = self(closure_1[4]);
      obj.batchUpdates(() => state.setState({ isComplete: false }));
      const obj2 = self(closure_1[5]);
      const fn = function t() {
        callback(closure_1[6]).runOnJS(closure_8)({ isComplete: true });
        const obj = callback(closure_1[6]);
        callback(closure_1[6]).runOnJS(closure_2)();
      };
      obj = { runOnJS: self(closure_1[6]).runOnJS, setUseEntranceAnimationState: closure_8, incrementLoads: callback };
      fn.__closure = obj;
      fn.__workletHash = 9904090637386;
      fn.__initData = closure_7;
      const result = self.set(obj2.withTiming(1, closure_4, "respect-motion-settings", fn));
    } else {
      callback();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
};
