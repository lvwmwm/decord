// Module ID: 1735
// Function ID: 19446
// Name: useAnimatedReaction
// Dependencies: []
// Exports: useAnimatedReaction

// Module 1735 (useAnimatedReaction)
let closure_2 = importDefault(dependencyMap[0]);
const useEffect = arg1(dependencyMap[1]).useEffect;
let closure_4 = { code: "function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}" };

export const useAnimatedReaction = function useAnimatedReaction(fn, fn2, items1) {
  let combined = items1;
  fn2 = fn;
  const dependencyMap = fn2;
  let closure_2 = fn2(dependencyMap[2]).useSharedValue(null);
  let __closure = fn.__closure;
  if (null == __closure) {
    __closure = {};
  }
  const values = Object.values(__closure);
  let useEffect = values;
  const obj = fn2(dependencyMap[2]);
  let length = fn2(dependencyMap[3]).shouldBeUseWeb() && !values.length;
  if (length) {
    length = null != combined;
    const arr3 = combined;
  }
  if (length) {
    length = arr3.length;
  }
  if (length) {
    useEffect = combined;
  }
  if (undefined === combined) {
    const items = [];
    let __closure1 = fn.__closure;
    if (null == __closure1) {
      __closure1 = {};
    }
    let __closure2 = fn2.__closure;
    if (null == __closure2) {
      __closure2 = {};
    }
    items1 = [fn.__workletHash, fn2.__workletHash];
    combined = items.concat(closure_2(Object.values(__closure1)), closure_2(Object.values(__closure2)), items1);
    const tmp2 = closure_2;
    const tmp2Result = closure_2(Object.values(__closure1));
    const tmp4 = closure_2;
  } else {
    combined.push(fn.__workletHash, fn2.__workletHash);
  }
  useEffect(() => {
    /* worklet (recovered source) */ function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}
    pnpm_useAnimatedReactionTs1.__closure = { prepare: callback, react: arg1, previous: closure_2 };
    pnpm_useAnimatedReactionTs1.__workletHash = 3026350450260;
    pnpm_useAnimatedReactionTs1.__initData = closure_4;
    const callback = callback(arg1[4]).startMapper(pnpm_useAnimatedReactionTs1, combined);
    return () => {
      callback(closure_1[4]).stopMapper(callback);
    };
  }, combined);
};
