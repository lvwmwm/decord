// Module ID: 1973
// Function ID: 1974
// Dependencies: [19, 1971, 1974, 1972, 1652, 1975, 1976]
// Exports: useFocusedInputHandler, useKeyboardAnimation, useKeyboardController, useKeyboardHandler, useReanimatedFocusedInput, useReanimatedKeyboardAnimation

// Module 1973
import _mod1652 from "module_1652" /* 1652 */;
import KeyboardController2 from "KeyboardController" /* 1971 */;
import _mod1972 from "module_1972" /* 1972 */;
import AndroidSoftInputModes from "AndroidSoftInputModes" /* 1974 */;
import _mod1975 from "module_1975" /* 1975 */;
import _mod1976 from "module_1976" /* 1976 */;
import react from "react" /* 19 */;

let inputHandlers, keyboardHandlers;

let c2;
let c3;
const f83517 = () => {
  let KeyboardController = KeyboardController2.KeyboardController;
  KeyboardController.setInputMode(AndroidSoftInputModes.AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE);
  return () => {
    const KeyboardController = closure_1_0(closure_1_1[1]).KeyboardController;
    return KeyboardController.setDefaultMode();
  };
};
function useGenericKeyboardHandler(ChannelListLegendListTsx1, items2) {
  let tmp;
  let tmp2;
  const obj = _mod1972;
  let closure_0 = obj.useKeyboardContext();
  const obj2 = _mod1652;
  const doDependenciesDiffer = obj2.useHandler(ChannelListLegendListTsx1, items2).doDependenciesDiffer;
  const items = [closure_5, ChannelListLegendListTsx1];
  let c0;
  [tmp, tmp2] = items;
  function pnpm_indexTs1(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onKeyboardMoveStart")) {
      const onStart = _undefined.onStart;
      if (onStart != null) {
        onStart(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onKeyboardMove")) {
      const onMove = _undefined.onMove;
      if (onMove != null) {
        onMove(eventName);
      }
    }
    const eventName3 = eventName.eventName;
    if (eventName3.endsWith("onKeyboardMoveEnd")) {
      const onEnd = _undefined.onEnd;
      if (onEnd != null) {
        onEnd(eventName);
      }
    }
    const eventName4 = eventName.eventName;
    if (eventName4.endsWith("onKeyboardMoveInteractive")) {
      const onInteractive = _undefined.onInteractive;
      if (onInteractive != null) {
        onInteractive(eventName);
      }
    }
  }
  const items1 = [tmp2];
  pnpm_indexTs1.__closure = items1;
  pnpm_indexTs1.__workletHash = 82243721795;
  pnpm_indexTs1.__initData = tmp;
  const obj3 = _mod1652;
  let closure_1 = obj3.useEvent(pnpm_indexTs1, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], doDependenciesDiffer);
  _false(() => {
    keyboardHandlers = keyboardHandlers.setKeyboardHandlers(closure_1);
    return () => closure_0();
  }, items2);
}
({ useEffect: c2, useLayoutEffect: c3 } = react);
function useResizeMode() {
  React2(f83517, []);
}
let closure_5 = { code: "(function pnpm_indexTs1(event){let[handler]=this.__closure;if(event.eventName.endsWith(\"onKeyboardMoveStart\")){var _handler$onStart,_handler;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,event);}if(event.eventName.endsWith(\"onKeyboardMove\")){var _handler$onMove,_handler2;(_handler$onMove=(_handler2=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler2,event);}if(event.eventName.endsWith(\"onKeyboardMoveEnd\")){var _handler$onEnd,_handler3;(_handler$onEnd=(_handler3=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler3,event);}if(event.eventName.endsWith(\"onKeyboardMoveInteractive\")){var _handler$onInteractiv,_handler4;(_handler$onInteractiv=(_handler4=handler).onInteractive)===null||_handler$onInteractiv===void 0||_handler$onInteractiv.call(_handler4,event);}})" };
let closure_7 = { code: "(function pnpm_indexTs2(event){let[handler]=this.__closure;if(event.eventName.endsWith(\"onFocusedInputTextChanged\")){var _handler$onChangeText,_handler;(_handler$onChangeText=(_handler=handler).onChangeText)===null||_handler$onChangeText===void 0||_handler$onChangeText.call(_handler,event);}if(event.eventName.endsWith(\"onFocusedInputSelectionChanged\")){var _handler$onSelectionC,_handler2;(_handler$onSelectionC=(_handler2=handler).onSelectionChange)===null||_handler$onSelectionC===void 0||_handler$onSelectionC.call(_handler2,event);}})" };
for (const key10021 in _mod1975) {
  exports[key10021] = _mod1975[key10021];
  continue;
}
for (const key10025 in _mod1976) {
  exports[key10025] = _mod1976[key10025];
  continue;
}

export { useResizeMode };
export const useKeyboardAnimation = () => {
  if (typeof useResizeMode === "function") {
    React2(f83517, []);
    const obj = _mod1972;
    return obj.useKeyboardContext().animated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const useReanimatedKeyboardAnimation = () => {
  if (typeof useResizeMode === "function") {
    React2(f83517, []);
    const obj = _mod1972;
    return obj.useKeyboardContext().reanimated;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { useGenericKeyboardHandler };
export function useKeyboardHandler(ChannelListLegendListTsx1, items2) {
  if (typeof useResizeMode === "function") {
    React2(f83517, []);
    useGenericKeyboardHandler(ChannelListLegendListTsx1, items2);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
export function useKeyboardController() {
  const obj = _mod1972;
  const keyboardContext = obj.useKeyboardContext();
  return { setEnabled: keyboardContext.setEnabled, enabled: keyboardContext.enabled };
}
export function useReanimatedFocusedInput() {
  const obj = _mod1972;
  const keyboardContext = obj.useKeyboardContext();
  return { input: keyboardContext.layout, update: keyboardContext.update };
}
export function useFocusedInputHandler(ChannelListLegendListTsx1, items26) {
  let tmp;
  let tmp2;
  const obj = _mod1972;
  let closure_0 = obj.useKeyboardContext();
  const obj2 = _mod1652;
  const doDependenciesDiffer = obj2.useHandler(ChannelListLegendListTsx1, items26).doDependenciesDiffer;
  const items = [closure_7, ChannelListLegendListTsx1];
  let c0;
  [tmp, tmp2] = items;
  function pnpm_indexTs2(eventName) {
    eventName = eventName.eventName;
    if (eventName.endsWith("onFocusedInputTextChanged")) {
      const onChangeText = _undefined.onChangeText;
      if (onChangeText != null) {
        onChangeText(eventName);
      }
    }
    const eventName2 = eventName.eventName;
    if (eventName2.endsWith("onFocusedInputSelectionChanged")) {
      const onSelectionChange = _undefined.onSelectionChange;
      if (onSelectionChange != null) {
        onSelectionChange(eventName);
      }
    }
  }
  const items1 = [tmp2];
  pnpm_indexTs2.__closure = items1;
  pnpm_indexTs2.__workletHash = 3141072070902;
  pnpm_indexTs2.__initData = tmp;
  const obj3 = _mod1652;
  let closure_1 = obj3.useEvent(pnpm_indexTs2, ["onFocusedInputTextChanged", "onFocusedInputSelectionChanged"], doDependenciesDiffer);
  _false(() => {
    inputHandlers = inputHandlers.setInputHandlers(closure_1);
    return () => closure_0();
  }, items26);
}
