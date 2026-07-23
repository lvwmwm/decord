// Module ID: 1580
// Function ID: 17657
// Name: Animated
// Dependencies: [5, 57, 31, 27, 33, 1581, 1582, 1572, 1771, 1773, 1774, 1775]
// Exports: KeyboardProvider

// Module 1580 (Animated)
import closure_2 from "controlEdgeToEdgeValues";
import _slicedToArray from "_slicedToArray";
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import controlEdgeToEdgeValues from "controlEdgeToEdgeValues";

let Platform;
let StyleSheet;
let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let require = arg1;
({ useCallback: closure_4, useEffect: closure_5, useMemo: closure_6, useRef: closure_7, useState: closure_8 } = result);
let Animated = get_ActivityIndicator.Animated;
({ Platform, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
controlEdgeToEdgeValues = controlEdgeToEdgeValues.isEdgeToEdge();
let closure_13 = require("cancelAnimation").createAnimatedComponent(Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardControllerView));
const styles = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
let closure_15 = { code: "function pnpm_animatedTsx1(event,platforms){const{OS,progressSV,heightSV}=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}}" };
let closure_16 = { code: "function pnpm_animatedTsx2(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"ios\"]);}" };
let closure_17 = { code: "function pnpm_animatedTsx3(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
let closure_18 = { code: "function pnpm_animatedTsx4(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\",\"ios\"]);}" };
let closure_19 = { code: "function pnpm_animatedTsx5(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,[\"android\"]);}" };
let closure_20 = { code: "function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}" };

export const KeyboardProvider = function KeyboardProvider(enabled) {
  let children;
  let navigationBarTranslucent;
  let preserveEdgeToEdge;
  let statusBarTranslucent;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  ({ children, statusBarTranslucent, navigationBarTranslucent, preserveEdgeToEdge } = enabled);
  if (!tmp) {
    tmp = enabled;
  }
  const preload = enabled.preload;
  const require = tmp2;
  const tmp3 = sharedValue1(null);
  const dependencyMap = tmp3;
  const tmp4 = callback(sharedValue2(tmp), 2);
  const first = tmp4[0];
  callback = tmp4[1];
  let obj = require(1771) /* useEventHandlerRegistration */;
  const callback2 = obj.useAnimatedValue(0);
  const callback3 = require(1771) /* useEventHandlerRegistration */.useAnimatedValue(0);
  const obj2 = require(1771) /* useEventHandlerRegistration */;
  const sharedValue = require(1582) /* cancelAnimation */.useSharedValue(0);
  const obj3 = require(1582) /* cancelAnimation */;
  sharedValue1 = require(1582) /* cancelAnimation */.useSharedValue(0);
  const obj4 = require(1582) /* cancelAnimation */;
  sharedValue2 = require(1582) /* cancelAnimation */.useSharedValue(null);
  const obj5 = require(1582) /* cancelAnimation */;
  const Animated = require(1771) /* useEventHandlerRegistration */.useEventHandlerRegistration(tmp3);
  const obj6 = require(1771) /* useEventHandlerRegistration */;
  const callback4 = require(1771) /* useEventHandlerRegistration */.useEventHandlerRegistration(tmp3);
  let closure_11 = callback2(first(async () => {
    const KeyboardControllerViewCommands = callback(table[7]).KeyboardControllerViewCommands;
    const result = KeyboardControllerViewCommands.synchronizeFocusedInputLayout(outer1_1.current);
    yield new Promise((arg0) => {
      const callback = arg0;
      const FocusedInputEvents = callback(table[7]).FocusedInputEvents;
      table = FocusedInputEvents.addListener("layoutDidSynchronize", () => {
        closure_1.remove();
        callback(null);
      });
    });
  }), []);
  let items = [first];
  const obj7 = require(1771) /* useEventHandlerRegistration */;
  const tmp9 = sharedValue(() => {
    let obj = { enabled: first };
    obj = { progress: closure_4, height: closure_9.multiply(closure_5, -1) };
    obj.animated = obj;
    obj = { progress: sharedValue, height: sharedValue1 };
    obj.reanimated = obj;
    obj.layout = sharedValue2;
    obj.update = closure_11;
    obj.setKeyboardHandlers = closure_9;
    obj.setInputHandlers = closure_10;
    obj.setEnabled = _slicedToArray;
    return obj;
  }, items);
  const tmp11 = sharedValue(() => {
    const items = [{ nativeEvent: { progress: closure_4, height: closure_5 } }];
    return closure_9.event(items, { useNativeDriver: true });
  }, []);
  /* worklet (recovered source) */ function pnpm_animatedTsx1(event,platforms){const{OS,progressSV,heightSV}=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}}
  pnpm_animatedTsx1.__closure = { OS: "android", progressSV: sharedValue, heightSV: sharedValue1 };
  pnpm_animatedTsx1.__workletHash = 2170890222740;
  pnpm_animatedTsx1.__initData = closure_15;
  const tmp10 = sharedValue(() => {
    const items = [outer1_14.hidden, ];
    let obj = { translateX: closure_5 };
    const items1 = [obj, ];
    obj = { translateY: closure_4 };
    items1[1] = obj;
    items[1] = { transform: items1 };
    return items;
  }, []);
  /* worklet (recovered source) */ function pnpm_animatedTsx2(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["ios"]);}
  pnpm_animatedTsx2.__closure = { updateSharedValues: pnpm_animatedTsx1 };
  pnpm_animatedTsx2.__workletHash = 17024171887285;
  pnpm_animatedTsx2.__initData = closure_16;
  /* worklet (recovered source) */ function pnpm_animatedTsx3(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["android"]);}
  pnpm_animatedTsx3.__closure = { updateSharedValues: pnpm_animatedTsx1 };
  pnpm_animatedTsx3.__workletHash = 9343239356186;
  pnpm_animatedTsx3.__initData = closure_17;
  /* worklet (recovered source) */ function pnpm_animatedTsx4(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["android","ios"]);}
  pnpm_animatedTsx4.__closure = { updateSharedValues: pnpm_animatedTsx1 };
  pnpm_animatedTsx4.__workletHash = 9270729921284;
  pnpm_animatedTsx4.__initData = closure_18;
  /* worklet (recovered source) */ function pnpm_animatedTsx5(event){const{updateSharedValues}=this.__closure;updateSharedValues(event,["android"]);}
  pnpm_animatedTsx5.__closure = { updateSharedValues: pnpm_animatedTsx1 };
  pnpm_animatedTsx5.__workletHash = 10129400155228;
  pnpm_animatedTsx5.__initData = closure_19;
  const obj8 = require(1773) /* useAnimatedKeyboardHandler */;
  const animatedKeyboardHandler = require(1773) /* useAnimatedKeyboardHandler */.useAnimatedKeyboardHandler({ onKeyboardMoveStart: pnpm_animatedTsx2, onKeyboardMove: pnpm_animatedTsx3, onKeyboardMoveInteractive: pnpm_animatedTsx4, onKeyboardMoveEnd: pnpm_animatedTsx5 }, []);
  /* worklet (recovered source) */ function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}
  pnpm_animatedTsx6.__closure = { layout: sharedValue2 };
  pnpm_animatedTsx6.__workletHash = 9857955983587;
  pnpm_animatedTsx6.__initData = closure_20;
  let items1 = [undefined === preload || preload];
  const obj9 = require(1773) /* useAnimatedKeyboardHandler */;
  callback3(() => {
    if (tmp2) {
      const KeyboardController = tmp2(tmp3[10]).KeyboardController;
      KeyboardController.preload();
    }
  }, items1);
  obj = { value: tmp9 };
  obj = { ref: tmp3, enabled: first };
  let tmp18 = pnpm_animatedTsx1;
  if (!pnpm_animatedTsx1) {
    tmp18 = navigationBarTranslucent;
  }
  obj.navigationBarTranslucent = tmp18;
  let tmp19 = pnpm_animatedTsx1;
  if (!pnpm_animatedTsx1) {
    tmp19 = statusBarTranslucent;
  }
  obj.statusBarTranslucent = tmp19;
  let tmp20 = pnpm_animatedTsx1;
  if (!pnpm_animatedTsx1) {
    tmp20 = preserveEdgeToEdge;
  }
  obj.preserveEdgeToEdge = tmp20;
  obj.style = container.container;
  obj.onKeyboardMoveReanimated = animatedKeyboardHandler;
  obj.onKeyboardMoveStart = undefined;
  obj.onKeyboardMove = tmp11;
  obj.onKeyboardMoveInteractive = tmp11;
  obj.onKeyboardMoveEnd = tmp11;
  obj.onFocusedInputLayoutChangedReanimated = require(1773) /* useAnimatedKeyboardHandler */.useFocusedInputLayoutHandler({ onFocusedInputLayoutChanged: pnpm_animatedTsx6 }, []);
  obj.children = children;
  const items2 = [callback4(closure_13, obj), callback4(Animated.View, { style: tmp10 })];
  obj.children = items2;
  return closure_11(require(1775) /* NOOP */.KeyboardContext.Provider, obj);
};
