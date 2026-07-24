// Module ID: 1776
// Function ID: 19768
// Name: useGenericKeyboardHandler
// Dependencies: [31, 1774, 1777, 1775, 1582, 1778, 1779]
// Exports: useFocusedInputHandler, useKeyboardAnimation, useKeyboardController, useKeyboardHandler, useReanimatedFocusedInput, useReanimatedKeyboardAnimation

// Module 1776 (useGenericKeyboardHandler)
import result from "result";

let closure_2;
let closure_3;
function useGenericKeyboardHandler(handler, items) {
  const _require = handler;
  const dependencyMap = _require(1775).useKeyboardContext();
  const obj = _require(1775);
  const obj2 = _require(1582);
  /* worklet (recovered source) */ function pnpm_indexTs1(target){const{contentOffsetY,IS_FABRIC,Platform,scrollTo,scrollViewRef}=this.__closure;if(contentOffsetY&&IS_FABRIC){contentOffsetY.value=target;}else if(Platform.OS==="android"){requestAnimationFrame(function(){scrollTo(scrollViewRef,0,target,false);});}else{scrollTo(scrollViewRef,0,target,false);}}
  pnpm_indexTs1.__closure = { handler };
  pnpm_indexTs1.__workletHash = 7080794218426;
  pnpm_indexTs1.__initData = closure_5;
  let closure_2 = _require(1582).useEvent(pnpm_indexTs1, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], obj2.useHandler(handler, items).doDependenciesDiffer);
  callback2(() => {
    keyboardHandlers.setKeyboardHandlers(closure_2);
    return () => callback();
  }, items);
}
({ useEffect: closure_2, useLayoutEffect: closure_3 } = result);
function useResizeMode() {
  callback(() => {
    let KeyboardController = outer1_0(outer1_1[1]).KeyboardController;
    KeyboardController.setInputMode(outer1_0(outer1_1[2]).AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
    return () => {
      const KeyboardController = outer2_0(outer2_1[1]).KeyboardController;
      return KeyboardController.setDefaultMode();
    };
  }, []);
}
let closure_5 = { code: "function pnpm_indexTs1(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onKeyboardMoveStart\")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith(\"onKeyboardMove\")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith(\"onKeyboardMoveEnd\")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith(\"onKeyboardMoveInteractive\")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}}" };
let closure_6 = { code: "function pnpm_indexTs2(event){const{handler}=this.__closure;if(event.eventName.endsWith(\"onFocusedInputTextChanged\")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith(\"onFocusedInputSelectionChanged\")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}}" };
for (const key10026 in require("useWindowDimensions")) {
  let tmp3 = key10026;
  arg5[key10026] = require("useWindowDimensions")[key10026];
  continue;
}
for (const key10031 in require("getLatestState")) {
  let tmp4 = key10031;
  arg5[key10031] = require("getLatestState")[key10031];
  continue;
}

export { useResizeMode };
export const useKeyboardAnimation = function useKeyboardAnimation() {
  useResizeMode();
  return require(1775) /* NOOP */.useKeyboardContext().animated;
};
export const useReanimatedKeyboardAnimation = function useReanimatedKeyboardAnimation() {
  useResizeMode();
  return require(1775) /* NOOP */.useKeyboardContext().reanimated;
};
export { useGenericKeyboardHandler };
export const useKeyboardHandler = function useKeyboardHandler(handler, items) {
  useResizeMode();
  useGenericKeyboardHandler(handler, items);
};
export const useKeyboardController = function useKeyboardController() {
  let obj = require(1775) /* NOOP */;
  const keyboardContext = obj.useKeyboardContext();
  obj = { setEnabled: keyboardContext.setEnabled, enabled: keyboardContext.enabled };
  return obj;
};
export const useReanimatedFocusedInput = function useReanimatedFocusedInput() {
  let obj = require(1775) /* NOOP */;
  const keyboardContext = obj.useKeyboardContext();
  obj = { input: keyboardContext.layout, update: keyboardContext.update };
  return obj;
};
export const useFocusedInputHandler = function useFocusedInputHandler(handler, items10) {
  const _require = handler;
  const dependencyMap = _require(1775).useKeyboardContext();
  const obj = _require(1775);
  const obj2 = _require(1582);
  /* worklet (recovered source) */ function pnpm_indexTs2(){const{extraContentPadding}=this.__closure;return extraContentPadding.value;}
  pnpm_indexTs2.__closure = { handler };
  pnpm_indexTs2.__workletHash = 16071593392303;
  pnpm_indexTs2.__initData = closure_6;
  let closure_2 = _require(1582).useEvent(pnpm_indexTs2, ["onFocusedInputTextChanged", "onFocusedInputSelectionChanged"], obj2.useHandler(handler, items10).doDependenciesDiffer);
  callback2(() => {
    inputHandlers.setInputHandlers(closure_2);
    return () => callback();
  }, items10);
};
