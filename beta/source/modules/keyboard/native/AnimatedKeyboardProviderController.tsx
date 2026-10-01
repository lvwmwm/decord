// Module ID: 14135
// Function ID: 14136
// Name: AnimatedKeyboardProviderController
// Dependencies: [19, 21, 4566, 1627, 2]

// Module 14135 (AnimatedKeyboardProviderController)
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1627 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport_mod from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

let set;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
const mutable = ReanimatedRexport.makeMutable(0);
ReanimatedRexport = ReanimatedRexport_mod;
const mutable1 = ReanimatedRexport.makeMutable(ReanimatedRexport.KeyboardState.UNKNOWN);
const __initData = { code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
const __initData2 = { code: "function AnimatedKeyboardProviderControllerTsx2(e){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e.height);}" };
const __initData3 = { code: "function AnimatedKeyboardProviderControllerTsx3(e){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);}" };
let closure_9 = react.memo(() => {
  let fn;
  let fn2;
  let fn3;
  const obj = { onStart: fn, onMove: fn2, onEnd: fn3 };
  fn = function o(height) {
    let OPEN;
    set = mutable1.set;
    if (0 === height.height) {
      OPEN = ReanimatedRexport.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport.KeyboardState.OPEN;
    }
    const result = set(OPEN);
  };
  const useKeyboardHandler = KeyboardChatScrollView.useKeyboardHandler;
  fn.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState };
  fn.__workletHash = 12130162639136;
  fn.__initData = __initData;
  fn2 = function t(height) {
    const result = mutable.set(height.height);
  };
  const obj3 = { animatedKeyboardHeight: mutable };
  fn2.__closure = obj3;
  fn2.__workletHash = 1398293011995;
  fn2.__initData = __initData2;
  fn3 = function e(height) {
    let OPEN;
    set = mutable1.set;
    if (0 === height.height) {
      OPEN = ReanimatedRexport.KeyboardState.CLOSED;
    } else {
      OPEN = ReanimatedRexport.KeyboardState.OPEN;
    }
    const result = set(OPEN);
    const result1 = mutable.set(height.height);
  };
  ({ animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState });
  fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState, animatedKeyboardHeight: mutable };
  fn3.__workletHash = 10688534401196;
  fn3.__initData = __initData3;
  ({ animatedKeyboardState: mutable1, KeyboardState: ReanimatedRexport.KeyboardState, animatedKeyboardHeight: mutable });
  useKeyboardHandler(obj, []);
  return null;
});
let obj = {
  Component(children) {
    let items;
    const obj = { enabled: true, navigationBarTranslucent: true, preserveEdgeToEdge: true, statusBarTranslucent: true, children: items };
    items = [children.children, ];
    const KeyboardProvider = KeyboardChatScrollView.KeyboardProvider;
    items[1] = React2(closure_9, {});
    return _false(KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};
let result = size.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default obj;
