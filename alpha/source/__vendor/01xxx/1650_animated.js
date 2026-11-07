// Module ID: 1650
// Function ID: 1651
// Name: animated
// Dependencies: [5, 32, 19, 17, 21, 1651, 1652, 1642, 1968, 1970, 1971, 1972]
// Exports: KeyboardProvider

// Module 1650 (animated)
import KeyboardControllerNative from "KeyboardControllerNative" /* 1642 */;
import KeyboardController2 from "KeyboardController" /* 1971 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native_mod from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react_native_mod2 from "react-native" /* 1651 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, ref;

let Platform;
let StyleSheet;
let c10;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ useCallback: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useRef: metroImportDefault, useState: metroImportAll } = react);
react = react_mod;
let react_native = react_native_mod2;
let Animated = react_native.Animated;
({ Platform, StyleSheet } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
react_native = react_native_mod2;
let closure_12 = react_native.isEdgeToEdge();
let closure_13 = module_1652.createAnimatedComponent(Animated.createAnimatedComponent(KeyboardControllerNative.KeyboardControllerView));
const container = StyleSheet.create({ container: { flex: 1 }, hidden: { display: "none", position: "absolute" } });
let closure_15 = { code: "(function pnpm_animatedTsx1(event,platforms){let[OS,progressSV,heightSV]=this.__closure;if(platforms.includes(OS)){progressSV.value=event.progress;heightSV.value=-event.height;}})" };
let closure_16 = { code: "(function pnpm_animatedTsx2(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"ios\"]);})" };
let closure_17 = { code: "(function pnpm_animatedTsx3(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"android\"]);})" };
let closure_18 = { code: "(function pnpm_animatedTsx4(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"android\",\"ios\"]);})" };
let closure_19 = { code: "(function pnpm_animatedTsx5(event){let[updateSharedValues]=this.__closure;updateSharedValues(event,[\"android\"]);})" };
let closure_20 = { code: "(function pnpm_animatedTsx6(e){let[layout]=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}})" };

export const KeyboardProvider = (enabled) => {
  let children;
  let hidden;
  let items14;
  let navigationBarTranslucent;
  let pnpm_animatedTsx2;
  let pnpm_animatedTsx3;
  let pnpm_animatedTsx4;
  let pnpm_animatedTsx5;
  let pnpm_animatedTsx6;
  let preserveEdgeToEdge;
  let setEnabled;
  let setKeyboardHandlers;
  let sharedValue1;
  let sharedValue2;
  let statusBarTranslucent;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp28;
  let tmp34;
  let tmp35;
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  ({ children, statusBarTranslucent, navigationBarTranslucent, preserveEdgeToEdge } = enabled);
  if (!tmp) {
    tmp = enabled;
  }
  const preload = enabled.preload;
  const tmp2 = undefined === preload || preload;
  _require = tmp2;
  const tmp3 = sharedValue1(null);
  dependencyMap = tmp3;
  [enabled, _slicedToArray] = sharedValue2(tmp);
  let obj = require("module_1968");
  let closure_4 = obj.useAnimatedValue(0);
  let obj2 = require("module_1968");
  let closure_5 = obj2.useAnimatedValue(0);
  let obj3 = require("module_1652");
  const sharedValue = obj3.useSharedValue(0);
  let obj4 = require("module_1652");
  sharedValue1 = obj4.useSharedValue(0);
  const obj5 = require("module_1652");
  sharedValue2 = obj5.useSharedValue(null);
  const obj6 = require("module_1968");
  Animated = obj6.useEventHandlerRegistration(tmp3);
  const obj7 = require("module_1968");
  const setInputHandlers = obj7.useEventHandlerRegistration(tmp3);
  const update = closure_4(enabled(function*(arg0, value) {
    let v3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const KeyboardControllerViewCommands = c0(ref[7]).KeyboardControllerViewCommands;
            const result = KeyboardControllerViewCommands.synchronizeFocusedInputLayout(ref.current);
            const self = this;
            const self2 = this;
            const promise = new Promise((arg0) => {
              closure_0 = arg0;
              const FocusedInputEvents = v3(ref[7]).FocusedInputEvents;
              let closure_1 = FocusedInputEvents.addListener("layoutDidSynchronize", () => {
                closure_1.remove();
                closure_0(null);
              });
            });
            ref = 1;
            c0 = 1;
            const obj4 = { value: promise, done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp11) {
        c0 = 3;
        throw tmp11;
      }
    }
  }), []);
  let items = [enabled];
  const tmp11 = sharedValue(() => {
    let obj3;
    const obj = { enabled, animated: { progress, height: Animated.multiply(closure_5, -1) }, reanimated: obj3, layout: sharedValue2, update, setKeyboardHandlers, setInputHandlers, setEnabled };
    obj3 = { progress: sharedValue, height: sharedValue1 };
    ({ progress, height: Animated.multiply(closure_5, -1) });
    return obj;
  }, items);
  const tmp12 = sharedValue(() => {
    let items1;
    const items = [hidden.hidden, ];
    const obj = { transform: items1 };
    items1 = [, ];
    const obj2 = { translateX };
    items1[0] = obj2;
    const obj3 = { translateY };
    items1[1] = obj3;
    items[1] = obj;
    return items;
  }, []);
  const tmp13 = sharedValue(() => {
    let obj2;
    const obj = { nativeEvent: obj2 };
    const items = [obj];
    obj2 = { progress, height };
    return Animated.event(items, { useNativeDriver: true });
  }, []);
  let items1 = [closure_15, "android", sharedValue, sharedValue1];
  let c1;
  let c2;
  [tmp14, tmp15, tmp16, tmp17] = items1;
  function pnpm_animatedTsx1(progress, arr) {
    if (arr.includes(c0)) {
      c1.value = progress.progress;
      c2.value = -progress.height;
    }
  }
  const items2 = [tmp15, tmp16, tmp17];
  pnpm_animatedTsx1.__closure = items2;
  pnpm_animatedTsx1.__workletHash = 12673803440141;
  pnpm_animatedTsx1.__initData = tmp14;
  const items3 = [closure_16, pnpm_animatedTsx1];
  [tmp18, tmp19] = items3;
  const obj8 = { onKeyboardMoveStart: pnpm_animatedTsx2, onKeyboardMove: pnpm_animatedTsx3, onKeyboardMoveInteractive: pnpm_animatedTsx4, onKeyboardMoveEnd: pnpm_animatedTsx5 };
  pnpm_animatedTsx2 = function pnpm_animatedTsx2(arg0) {
    _undefined(arg0, ["ios"]);
  };
  const items4 = [tmp19];
  pnpm_animatedTsx2.__closure = items4;
  pnpm_animatedTsx2.__workletHash = 15897406011308;
  pnpm_animatedTsx2.__initData = tmp18;
  const items5 = [closure_17, pnpm_animatedTsx1];
  [tmp20, tmp21] = items5;
  pnpm_animatedTsx3 = function pnpm_animatedTsx3(arg0) {
    _undefined(arg0, ["android"]);
  };
  const items6 = [tmp21];
  pnpm_animatedTsx3.__closure = items6;
  pnpm_animatedTsx3.__workletHash = 3503338460579;
  pnpm_animatedTsx3.__initData = tmp20;
  const items7 = [closure_18, pnpm_animatedTsx1];
  [tmp22, tmp23] = items7;
  pnpm_animatedTsx4 = function pnpm_animatedTsx4(arg0) {
    _undefined(arg0, ["android", "ios"]);
  };
  const items8 = [tmp23];
  pnpm_animatedTsx4.__closure = items8;
  pnpm_animatedTsx4.__workletHash = 4479201835645;
  pnpm_animatedTsx4.__initData = tmp22;
  const items9 = [closure_19, pnpm_animatedTsx1];
  [tmp24, tmp25] = items9;
  pnpm_animatedTsx5 = function pnpm_animatedTsx5(arg0) {
    _undefined(arg0, ["android"]);
  };
  const items10 = [tmp25];
  pnpm_animatedTsx5.__closure = items10;
  pnpm_animatedTsx5.__workletHash = 8054499004197;
  pnpm_animatedTsx5.__initData = tmp24;
  const tmp6Result = require("reanimatedNative");
  const items11 = [closure_20, sharedValue2];
  let c0;
  [tmp27, tmp28] = items11;
  const obj9 = { onFocusedInputLayoutChanged: pnpm_animatedTsx6 };
  pnpm_animatedTsx6 = function pnpm_animatedTsx6(target) {
    if (-1 !== target.target) {
      c0.value = target;
    } else {
      c0.value = null;
    }
  };
  const items12 = [tmp28];
  pnpm_animatedTsx6.__closure = items12;
  pnpm_animatedTsx6.__workletHash = 12222184660346;
  pnpm_animatedTsx6.__initData = tmp27;
  const items13 = [tmp2];
  const animatedKeyboardHandler = tmp6Result.useAnimatedKeyboardHandler(obj8, []);
  const tmp6Result2 = require("reanimatedNative");
  const focusedInputLayoutHandler = tmp6Result2.useFocusedInputLayoutHandler(obj9, []);
  closure_5(() => {
    const tmp = closure_0;
    if (tmp) {
      const KeyboardController = KeyboardController2.KeyboardController;
      KeyboardController.preload();
    }
  }, items13);
  const obj11 = { ref: tmp3, enabled, navigationBarTranslucent: tmp35, statusBarTranslucent: tmp34 || statusBarTranslucent, preserveEdgeToEdge: tmp34, style: container.container, onKeyboardMoveReanimated: animatedKeyboardHandler, onKeyboardMoveStart: "Boolean", onKeyboardMove: tmp13, onKeyboardMoveInteractive: tmp13, onKeyboardMoveEnd: tmp13, onFocusedInputLayoutChangedReanimated: focusedInputLayoutHandler, children };
  tmp34 = closure_12;
  tmp35 = closure_12;
  const obj10 = { value: tmp11, children: items14 };
  const Provider = tmp6(1972).KeyboardContext.Provider;
  const tmp31 = update;
  const tmp33 = closure_13;
  if (!closure_12) {
    tmp35 = navigationBarTranslucent;
  }
  if (!tmp34) {
    tmp34 = preserveEdgeToEdge;
  }
  items14 = [setInputHandlers(tmp33, obj11), setInputHandlers(Animated.View, { style: tmp12 })];
  return tmp31(Provider, obj10);
};
