// Module ID: 1730
// Function ID: 19390
// Name: useAnimatedKeyboard
// Dependencies: []
// Exports: useAnimatedKeyboard

// Module 1730 (useAnimatedKeyboard)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);
let closure_4 = { code: "function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}" };
let closure_5 = { code: "function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}" };

export const useAnimatedKeyboard = function useAnimatedKeyboard() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const require = first;
    const tmp3 = tmp5(null);
    const dependencyMap = tmp3;
    const tmp4 = tmp5(-1);
    const tmp5 = tmp5(false);
    if (null === tmp3.current) {
      let obj = { state: require(dependencyMap[1]).makeMutable(require(dependencyMap[2]).KeyboardState.UNKNOWN) };
      const obj3 = require(dependencyMap[1]);
      obj.height = require(dependencyMap[1]).makeMutable(0);
      let closure_4 = obj;
      const obj4 = require(dependencyMap[1]);
      /* worklet (recovered source) */ function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}
      obj = {};
      obj.keyboardEventData = obj;
      pnpm_useAnimatedKeyboardTs1.__closure = obj;
      pnpm_useAnimatedKeyboardTs1.__workletHash = 4393537867728;
      pnpm_useAnimatedKeyboardTs1.__initData = closure_4;
      tmp4.current = require(dependencyMap[1]).subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs1, first);
      tmp3.current = obj;
      tmp5.current = true;
      const obj5 = require(dependencyMap[1]);
    }
    tmp4(() => {
      if (false === tmp5.current) {
        if (null !== tmp3.current) {
          const current = tmp3.current;
          const first = current;
          let obj = first(tmp3[1]);
          /* worklet (recovered source) */ function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}
          obj = { _keyboardEventData: current };
          pnpm_useAnimatedKeyboardTs2.__closure = obj;
          pnpm_useAnimatedKeyboardTs2.__workletHash = 5041909921996;
          pnpm_useAnimatedKeyboardTs2.__initData = closure_5;
          tmp4.current = obj.subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs2, first);
          first.current = true;
        }
      }
      return () => {
        const result = current(closure_1[1]).unsubscribeFromKeyboardEvents(ref.current);
        closure_3.current = false;
      };
    }, []);
    return tmp3.current;
  }
  first = { isStatusBarTranslucentAndroid: undefined, isNavigationBarTranslucentAndroid: undefined };
};
