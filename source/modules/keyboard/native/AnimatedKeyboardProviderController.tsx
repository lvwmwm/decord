// Module ID: 13375
// Function ID: 101683
// Name: mutable
// Dependencies: [0, 0, 0, 0, 0]

// Module 13375 (mutable)
import result from "result";
import result from "result";
import mutable from "result";
import result from "result";
import result from "result";

({ jsx: closure_2, jsxs: closure_3 } = result);
const mutable1 = result.makeMutable(require("result").KeyboardState.UNKNOWN);
let closure_6 = { code: "function AnimatedKeyboardProviderControllerTsx1(e){const{animatedKeyboardState,KeyboardState}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);}" };
let closure_7 = { code: "function AnimatedKeyboardProviderControllerTsx2(e){const{animatedKeyboardHeight}=this.__closure;animatedKeyboardHeight.set(e.height);}" };
let closure_8 = { code: "function AnimatedKeyboardProviderControllerTsx3(e){const{animatedKeyboardState,KeyboardState,animatedKeyboardHeight}=this.__closure;animatedKeyboardState.set(e.height===0?KeyboardState.CLOSED:KeyboardState.OPEN);animatedKeyboardHeight.set(e.height);}" };
let closure_9 = require("result").memo(() => {
  let obj = arg1(dependencyMap[3]);
  obj = {};
  const fn = function o(height) {
    if (0 === height.height) {
      let OPEN = callback(closure_1[2]).KeyboardState.CLOSED;
    } else {
      OPEN = callback(closure_1[2]).KeyboardState.OPEN;
    }
    const result = store2.set(OPEN);
  };
  obj = { animatedKeyboardState: mutable1, KeyboardState: arg1(dependencyMap[2]).KeyboardState };
  fn.__closure = obj;
  fn.__workletHash = 12130162639136;
  fn.__initData = closure_6;
  obj.onStart = fn;
  const fn2 = function t(height) {
    const result = store.set(height.height);
  };
  fn2.__closure = { animatedKeyboardHeight: mutable };
  fn2.__workletHash = 1398293011995;
  fn2.__initData = closure_7;
  obj.onMove = fn2;
  const fn3 = function e(height) {
    if (0 === height.height) {
      let OPEN = callback(closure_1[2]).KeyboardState.CLOSED;
    } else {
      OPEN = callback(closure_1[2]).KeyboardState.OPEN;
    }
    const result = store2.set(OPEN);
    const result1 = store.set(height.height);
  };
  fn3.__closure = { animatedKeyboardState: mutable1, KeyboardState: arg1(dependencyMap[2]).KeyboardState, animatedKeyboardHeight: mutable };
  fn3.__workletHash = 10688534401196;
  fn3.__initData = closure_8;
  obj.onEnd = fn3;
  obj.useKeyboardHandler(obj, []);
  return null;
});
result = result.fileFinishedImporting("modules/keyboard/native/AnimatedKeyboardProviderController.tsx");

export default {
  Component(children) {
    const obj = {};
    const items = [children.children, callback(closure_9, {})];
    obj.children = items;
    return callback2(arg1(dependencyMap[3]).KeyboardProvider, obj);
  },
  animatedKeyboardHeight: mutable,
  animatedKeyboardState: mutable1
};
