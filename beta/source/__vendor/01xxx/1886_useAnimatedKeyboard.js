// Module ID: 1886
// Function ID: 1887
// Name: useAnimatedKeyboard
// Dependencies: [19, 1827, 1697]
// Exports: useAnimatedKeyboard

// Module 1886 (useAnimatedKeyboard)
import startMapper from "startMapper" /* 1827 */;
import react from "react" /* 19 */;

let dependencyMap;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let closure_4 = { code: "(function pnpm_useAnimatedKeyboardTs1(state,height){let[keyboardEventData]=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;})" };
let closure_5 = { code: "(function pnpm_useAnimatedKeyboardTs2(state,height){let[_keyboardEventData]=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;})" };

export function useAnimatedKeyboard() {
  let obj3;
  let obj4;
  let ref;
  let tmp4;
  let tmp5;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { isStatusBarTranslucentAndroid: "Array", isNavigationBarTranslucentAndroid: "flexDirection" };
  }
  let ref2;
  const tmp = ref2(null);
  dependencyMap = tmp;
  const tmp2 = ref2(-1);
  let closure_2 = tmp2;
  const tmp3 = ref2(false);
  ref2 = tmp3;
  if (null === tmp.current) {
    const obj2 = { state: obj3.makeMutable(obj(1697).KeyboardState.UNKNOWN), height: obj4.makeMutable(0) };
    obj3 = obj(1827);
    let items = [closure_4, obj2];
    let c0;
    [tmp4, tmp5] = items;
    function pnpm_useAnimatedKeyboardTs1(value, value2) {
      _undefined.state.value = value;
      _undefined.height.value = value2;
    }
    let items1 = [tmp5];
    pnpm_useAnimatedKeyboardTs1.__closure = items1;
    pnpm_useAnimatedKeyboardTs1.__workletHash = 1134865272681;
    pnpm_useAnimatedKeyboardTs1.__initData = tmp4;
    obj4 = obj(1827);
    const obj5 = obj(1827);
    tmp2.current = obj5.subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs1, obj);
    tmp.current = obj2;
    tmp3.current = true;
  }
  const tmp6 = closure_2(() => {
    let tmp2;
    let tmp3;
    if (false === ref2.current) {
      if (null !== ref.current) {
        const current = ref.current;
        obj = startMapper;
        const items = [closure_5, current];
        let c0;
        [tmp2, tmp3] = items;
        function pnpm_useAnimatedKeyboardTs2(value, value2) {
          _undefined.state.value = value;
          _undefined.height.value = value2;
        }
        const items1 = [tmp3];
        pnpm_useAnimatedKeyboardTs2.__closure = items1;
        pnpm_useAnimatedKeyboardTs2.__workletHash = 6834985565013;
        pnpm_useAnimatedKeyboardTs2.__initData = tmp2;
        ref.current = obj.subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs2, obj);
        tmp.current = true;
      }
    }
    return () => {
      obj = obj(closure_1[1]);
      const result = obj.unsubscribeFromKeyboardEvents(ref.current);
      ref2.current = false;
    };
  }, []);
  return tmp.current;
}
