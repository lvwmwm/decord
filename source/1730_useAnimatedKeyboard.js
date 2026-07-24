// Module ID: 1730
// Function ID: 19397
// Name: useAnimatedKeyboard
// Dependencies: [31, 1626, 1607]
// Exports: useAnimatedKeyboard

// Module 1730 (useAnimatedKeyboard)
import result from "result";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);
let closure_4 = { code: "function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}" };
let closure_5 = { code: "function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}" };

export const useAnimatedKeyboard = function useAnimatedKeyboard() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const tmp3 = callback2(null);
    const dependencyMap = tmp3;
    const tmp4 = callback2(-1);
    const callback = tmp4;
    const tmp5 = callback2(false);
    callback2 = tmp5;
    if (null === tmp3.current) {
      let obj = { state: first(1626).makeMutable(first(1607).KeyboardState.UNKNOWN) };
      const obj3 = first(1626);
      obj.height = first(1626).makeMutable(0);
      const obj4 = first(1626);
      /* worklet (recovered source) */ function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}
      obj = {};
      obj.keyboardEventData = obj;
      pnpm_useAnimatedKeyboardTs1.__closure = obj;
      pnpm_useAnimatedKeyboardTs1.__workletHash = 4393537867728;
      pnpm_useAnimatedKeyboardTs1.__initData = obj;
      tmp4.current = first(1626).subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs1, first);
      tmp3.current = obj;
      tmp5.current = true;
      const obj5 = first(1626);
    }
    callback(() => {
      if (false === tmp5.current) {
        if (null !== tmp3.current) {
          const current = tmp3.current;
          let obj = first(tmp3[1]);
          /* worklet (recovered source) */ function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}
          obj = { _keyboardEventData: current };
          pnpm_useAnimatedKeyboardTs2.__closure = obj;
          pnpm_useAnimatedKeyboardTs2.__workletHash = 5041909921996;
          pnpm_useAnimatedKeyboardTs2.__initData = outer1_5;
          closure_2.current = obj.subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs2, current);
          first.current = true;
        }
      }
      return () => {
        const result = first(table[1]).unsubscribeFromKeyboardEvents(outer1_2.current);
        outer1_3.current = false;
      };
    }, []);
    return tmp3.current;
  }
  first = { isStatusBarTranslucentAndroid: undefined, isNavigationBarTranslucentAndroid: undefined };
};
