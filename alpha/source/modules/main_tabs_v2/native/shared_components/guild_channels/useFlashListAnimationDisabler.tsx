// Module ID: 16337
// Function ID: 16338
// Name: useFlashListAnimationDisabler
// Dependencies: [19, 1652, 2]
// Exports: useFlashListAnimationDisabler

// Module 16337 (useFlashListAnimationDisabler)
import _mod1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3 = { code: "(function useFlashListAnimationDisablerTsx1(){let[lastId]=this.__closure;return lastId.get();})" };
let closure_4 = { code: "(function useFlashListAnimationDisablerTsx2(current,prev){let[enableAnimation]=this.__closure;if(current!==prev){enableAnimation.set(false);}})" };
let closure_5 = { code: "(function useFlashListAnimationDisablerTsx3(finished){let[enableAnimation]=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx");

export function useFlashListAnimationDisabler(userId) {
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  let closure_0 = userId;
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(false);
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue(userId);
  const items = [sharedValue1, userId];
  const effect = react.useEffect(() => {
    const result = sharedValue1.set(closure_0);
  }, items);
  const items1 = [closure_3, sharedValue1];
  [tmp4, tmp5] = items1;
  function useFlashListAnimationDisablerTsx1() {
    return _undefined.get();
  }
  const items2 = [tmp5];
  useFlashListAnimationDisablerTsx1.__closure = items2;
  useFlashListAnimationDisablerTsx1.__workletHash = 16187209688288;
  useFlashListAnimationDisablerTsx1.__initData = tmp4;
  const items3 = [closure_4, sharedValue];
  [tmp6, tmp7] = items3;
  function useFlashListAnimationDisablerTsx2(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = _undefined.set(false);
    }
  }
  const items4 = [tmp7];
  useFlashListAnimationDisablerTsx2.__closure = items4;
  useFlashListAnimationDisablerTsx2.__workletHash = 6865280416933;
  useFlashListAnimationDisablerTsx2.__initData = tmp6;
  const obj4 = _mod1652;
  const animatedReaction = obj4.useAnimatedReaction(useFlashListAnimationDisablerTsx1, useFlashListAnimationDisablerTsx2);
  const items5 = [closure_5, sharedValue];
  let c0;
  [tmp9, tmp10] = items5;
  function useFlashListAnimationDisablerTsx3(arg0) {
    const tmp = arg0 && !_undefined.get();
    if (tmp) {
      const result = _undefined.set(true);
    }
  }
  const items6 = [tmp10];
  useFlashListAnimationDisablerTsx3.__closure = items6;
  useFlashListAnimationDisablerTsx3.__workletHash = 8857429510125;
  useFlashListAnimationDisablerTsx3.__initData = tmp9;
  const items7 = [sharedValue];
  const items8 = [sharedValue, react.useCallback(useFlashListAnimationDisablerTsx3, items7)];
  return items8;
}
