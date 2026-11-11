// Module ID: 13041
// Function ID: 13042
// Name: AnimatedKeyboardProviderController
// Dependencies: [19, 21, 1652, 13042, 1641, 2]

// Module 13041 (AnimatedKeyboardProviderController)
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1641 */;
import KeyboardPreloadExperiment2 from "KeyboardPreloadExperiment" /* 13042 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_1652_mod from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let OPEN, result1, set, tmp, tmp2, tmp3;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let module_1652 = module_1652_mod;
const mutable = module_1652.makeMutable(0);
module_1652 = module_1652_mod;
const mutable1 = module_1652.makeMutable(module_1652.KeyboardState.UNKNOWN);
let closure_6 = { code: "(function AnimatedKeyboardProviderControllerTsx1(e){let[animatedKeyboardState,KeyboardState]=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);})" };
let closure_7 = { code: "(function AnimatedKeyboardProviderControllerTsx2(e){let[animatedKeyboardHeight]=this.__closure;animatedKeyboardHeight.set(e.height);})" };
let closure_8 = { code: "(function AnimatedKeyboardProviderControllerTsx3(e){let[animatedKeyboardState,KeyboardState,animatedKeyboardHeight]=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);})" };
let closure_9 = react.memo(function ComponentInner() {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp9;
  const items = [closure_6, mutable1, ];
  const useKeyboardHandler = KeyboardChatScrollView.useKeyboardHandler;
  items[2] = module_1652.KeyboardState;
  let c0;
  let c1;
  [tmp5, tmp6, tmp7] = items;
  const obj = { onStart: AnimatedKeyboardProviderControllerTsx1, onMove: AnimatedKeyboardProviderControllerTsx2, onEnd: AnimatedKeyboardProviderControllerTsx3 };
  const tmp4 = mutable1;
  class AnimatedKeyboardProviderControllerTsx1 {
    constructor(arg0) {
      tmp = closure_0;
      set = closure_0.set;
      if (0 === arg0.height) {
        tmp3 = closure_1;
        OPEN = closure_1.CLOSED;
      } else {
        tmp2 = closure_1;
        OPEN = closure_1.OPEN;
      }
      result = set(OPEN);
      return;
    }
  }
  const items1 = [tmp6, tmp7];
  AnimatedKeyboardProviderControllerTsx1.__closure = items1;
  AnimatedKeyboardProviderControllerTsx1.__workletHash = 53414504345;
  AnimatedKeyboardProviderControllerTsx1.__initData = tmp5;
  const items2 = [closure_7, mutable];
  c0 = undefined;
  [tmp9, tmp10] = items2;
  class AnimatedKeyboardProviderControllerTsx2 {
    constructor(arg0) {
      result = closure_0.set(arg0.height);
      return;
    }
  }
  const items3 = [tmp10];
  AnimatedKeyboardProviderControllerTsx2.__closure = items3;
  AnimatedKeyboardProviderControllerTsx2.__workletHash = 2792046606466;
  AnimatedKeyboardProviderControllerTsx2.__initData = tmp9;
  const items4 = [closure_8, tmp4, module_1652.KeyboardState, mutable];
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items4;
  class AnimatedKeyboardProviderControllerTsx3 {
    constructor(arg0) {
      tmp = closure_0;
      set = closure_0.set;
      if (0 === arg0.height) {
        tmp3 = closure_1;
        OPEN = closure_1.CLOSED;
      } else {
        tmp2 = closure_1;
        OPEN = closure_1.OPEN;
      }
      result = set(OPEN);
      result1 = closure_2.set(arg0.height);
      return;
    }
  }
  const items5 = [tmp12, tmp13, tmp14];
  AnimatedKeyboardProviderControllerTsx3.__closure = items5;
  AnimatedKeyboardProviderControllerTsx3.__workletHash = 4434952784341;
  AnimatedKeyboardProviderControllerTsx3.__initData = tmp11;
  useKeyboardHandler(obj, []);
  return null;
});
let obj = {
  Component(children) {
    let items;
    children = children.children;
    const KeyboardPreloadExperiment = KeyboardPreloadExperiment2.KeyboardPreloadExperiment;
    const obj = { enabled: true, navigationBarTranslucent: true, preload: !KeyboardPreloadExperiment.useConfig({ location: "AnimatedKeyboardProviderController" }).disablePreload, preserveEdgeToEdge: true, statusBarTranslucent: true, children: items };
    items = [children, ];
    const KeyboardProvider = KeyboardChatScrollView.KeyboardProvider;
    items[1] = React2(closure_9, {});
    return _false(KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default obj;
