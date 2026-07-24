// Module ID: 13549
// Function ID: 104199
// Name: mutable
// Dependencies: [31, 33, 3991, 1571, 2]

// Module 13549 (mutable)
import jsxProd from "jsxProd";
import module_3991 from "module_3991";
import mutable from "result";
import module_3991 from "module_3991";
import importAllResult from "result";

let closure_2;
let closure_3;
const require = arg1;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const mutable1 = module_3991.makeMutable(require("module_3991").KeyboardState.UNKNOWN);
let closure_6 = { code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
let closure_7 = { code: "function AnimatedKeyboardProviderControllerTsx2(e){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e.height);}" };
let closure_8 = { code: "function AnimatedKeyboardProviderControllerTsx3(e){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);}" };
let closure_9 = require("result").memo(() => {
  let obj = require(1571) /* KeyboardChatScrollView */;
  obj = {};
  const fn = function o(height) {
    if (0 === height.height) {
      let OPEN = outer1_0(outer1_1[2]).KeyboardState.CLOSED;
    } else {
      OPEN = outer1_0(outer1_1[2]).KeyboardState.OPEN;
    }
    const result = outer1_5.set(OPEN);
  };
  obj = { animatedKeyboardState: mutable1, KeyboardState: require(3991).KeyboardState };
  fn.__closure = obj;
  fn.__workletHash = 12130162639136;
  fn.__initData = closure_6;
  obj.onStart = fn;
  const fn2 = function t(height) {
    const result = outer1_4.set(height.height);
  };
  fn2.__closure = { animatedKeyboardHeight: mutable };
  fn2.__workletHash = 1398293011995;
  fn2.__initData = closure_7;
  obj.onMove = fn2;
  const fn3 = function e(height) {
    if (0 === height.height) {
      let OPEN = outer1_0(outer1_1[2]).KeyboardState.CLOSED;
    } else {
      OPEN = outer1_0(outer1_1[2]).KeyboardState.OPEN;
    }
    const result = outer1_5.set(OPEN);
    const result1 = outer1_4.set(height.height);
  };
  fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: require(3991).KeyboardState, animatedKeyboardHeight: mutable };
  fn3.__workletHash = 10688534401196;
  fn3.__initData = closure_8;
  obj.onEnd = fn3;
  obj.useKeyboardHandler(obj, []);
  return null;
});
let obj = {
  Component(children) {
    const obj = { enabled: true, navigationBarTranslucent: true, preserveEdgeToEdge: true, statusBarTranslucent: true };
    const items = [children.children, callback(closure_9, {})];
    obj.children = items;
    return callback2(require(1571) /* KeyboardChatScrollView */.KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};
let result = require("module_3991").fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default obj;
