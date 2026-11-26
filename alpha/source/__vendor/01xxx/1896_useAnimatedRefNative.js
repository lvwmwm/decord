// Module ID: 1896
// Function ID: 1897
// Name: useAnimatedRefNative
// Dependencies: [32, 19, 1707, 1897, 1705]
// Exports: useAnimatedRef

// Module 1896 (useAnimatedRefNative)
import react from "react" /* 19 */;
import _mod1705 from "module_1705" /* 1705 */;
import _mod1707 from "module_1707" /* 1707 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const useState = react.useState;
let closure_4 = { code: "(function pnpm_useAnimatedRefNativeTs1(){let[sharedWrapper,currentWrapper]=this.__closure;sharedWrapper.value=currentWrapper;})" };

export function useAnimatedRef() {
  const first = _slicedToArray(useState(() => {
    const obj = first(dependencyMap[2]);
    return obj.createShareable(first(dependencyMap[2]).UIRuntimeId, null);
  }), 1)[0];
  const tmp2 = first;
  const tmp3 = dependencyMap;
  let obj = first(1897);
  const animatedRefBase = obj.useAnimatedRefBase((__internalInstanceHandle) => {
    let tmp2;
    let tmp3;
    let tmp4;
    const obj = _mod1705;
    const shadowNodeWrapperFromRef = obj.getShadowNodeWrapperFromRef(__internalInstanceHandle);
    const items = [closure_4, first, shadowNodeWrapperFromRef];
    let c0;
    let c1;
    [tmp2, tmp3, tmp4] = items;
    function pnpm_useAnimatedRefNativeTs1() {
      c0.value = value;
    }
    const items1 = [tmp3, tmp4];
    pnpm_useAnimatedRefNativeTs1.__closure = items1;
    pnpm_useAnimatedRefNativeTs1.__workletHash = 6854777085934;
    pnpm_useAnimatedRefNativeTs1.__initData = tmp2;
    const obj2 = _mod1707;
    obj2.scheduleOnUI(pnpm_useAnimatedRefNativeTs1);
    return shadowNodeWrapperFromRef;
  });
  const serializableMappingCache = first(1707).serializableMappingCache;
  if (!serializableMappingCache.get(animatedRefBase)) {
    const tmp2Result = tmp2(1707);
    const serializable = tmp2Result.createSerializable(first);
    const serializableMappingCache2 = tmp2(1707).serializableMappingCache;
    const result = serializableMappingCache2.set(animatedRefBase, serializable);
  }
  return animatedRefBase;
}
