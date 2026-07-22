// Module ID: 1580
// Function ID: 17656
// Name: Animated
// Dependencies: []
// Exports: KeyboardProvider

// Module 1580 (Animated)
let Platform;
let StyleSheet;
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ useCallback: closure_4, useEffect: closure_5, useMemo: closure_6, useRef: closure_7, useState: closure_8 } = arg1(dependencyMap[2]));
importDefault(dependencyMap[2]);
const tmp4 = arg1(dependencyMap[3]);
const Animated = tmp4.Animated;
({ Platform, StyleSheet } = tmp4);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const tmp5 = arg1(dependencyMap[4]);
let closure_12 = arg1(dependencyMap[5]).isEdgeToEdge();
const obj = arg1(dependencyMap[5]);
let closure_13 = importDefault(dependencyMap[6]).createAnimatedComponent(Animated.createAnimatedComponent(arg1(dependencyMap[7]).KeyboardControllerView));
const styles = StyleSheet.create({ container: { flex: 1 }, hidden: { transparent: null, aliceblue: 0.3 } });
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
  const arg1 = tmp2;
  const tmp3 = sharedValue1(null);
  const dependencyMap = tmp3;
  const tmp4 = callback2(sharedValue2(tmp), 2);
  const first = tmp4[0];
  const callback = first;
  const callback2 = tmp4[1];
  let obj = arg1(dependencyMap[8]);
  const callback3 = obj.useAnimatedValue(0);
  const callback4 = arg1(dependencyMap[8]).useAnimatedValue(0);
  const obj2 = arg1(dependencyMap[8]);
  const sharedValue = arg1(dependencyMap[6]).useSharedValue(0);
  const obj3 = arg1(dependencyMap[6]);
  const sharedValue1 = arg1(dependencyMap[6]).useSharedValue(0);
  const obj4 = arg1(dependencyMap[6]);
  const sharedValue2 = arg1(dependencyMap[6]).useSharedValue(null);
  const obj5 = arg1(dependencyMap[6]);
  const RN = arg1(dependencyMap[8]).useEventHandlerRegistration(tmp3);
  const obj6 = arg1(dependencyMap[8]);
  const callback5 = arg1(dependencyMap[8]).useEventHandlerRegistration(tmp3);
  let closure_11 = callback3(callback(async () => {
    const KeyboardControllerViewCommands = callback(ref[7]).KeyboardControllerViewCommands;
    const result = KeyboardControllerViewCommands.synchronizeFocusedInputLayout(ref.current);
    yield new Promise((arg0) => {
      const FocusedInputEvents = arg0(closure_1[7]).FocusedInputEvents;
      closure_1 = FocusedInputEvents.addListener("layoutDidSynchronize", () => {
        closure_1.remove();
        arg0(null);
      });
    });
  }), []);
  const items = [first];
  const obj7 = arg1(dependencyMap[8]);
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
    obj.setEnabled = closure_3;
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
  let closure_12 = pnpm_animatedTsx1;
  const tmp10 = sharedValue(() => {
    const items = [hidden.hidden, ];
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
  const obj8 = arg1(dependencyMap[9]);
  const animatedKeyboardHandler = arg1(dependencyMap[9]).useAnimatedKeyboardHandler({ onKeyboardMoveStart: pnpm_animatedTsx2, onKeyboardMove: pnpm_animatedTsx3, onKeyboardMoveInteractive: pnpm_animatedTsx4, onKeyboardMoveEnd: pnpm_animatedTsx5 }, []);
  /* worklet (recovered source) */ function pnpm_animatedTsx6(e){const{layout}=this.__closure;if(e.target!==-1){layout.value=e;}else{layout.value=null;}}
  pnpm_animatedTsx6.__closure = { layout: sharedValue2 };
  pnpm_animatedTsx6.__workletHash = 9857955983587;
  pnpm_animatedTsx6.__initData = closure_20;
  const items1 = [undefined === preload || preload];
  const obj9 = arg1(dependencyMap[9]);
  callback4(() => {
    if (tmp2) {
      const KeyboardController = tmp2(tmp3[10]).KeyboardController;
      KeyboardController.preload();
    }
  }, items1);
  obj = { value: tmp9 };
  obj = { ref: tmp3, enabled: first };
  let tmp18 = closure_12;
  if (!closure_12) {
    tmp18 = navigationBarTranslucent;
  }
  obj.navigationBarTranslucent = tmp18;
  let tmp19 = closure_12;
  if (!closure_12) {
    tmp19 = statusBarTranslucent;
  }
  obj.statusBarTranslucent = tmp19;
  let tmp20 = closure_12;
  if (!closure_12) {
    tmp20 = preserveEdgeToEdge;
  }
  obj.preserveEdgeToEdge = tmp20;
  obj.style = container.container;
  obj.onKeyboardMoveReanimated = animatedKeyboardHandler;
  obj.onKeyboardMoveStart = undefined;
  obj.onKeyboardMove = tmp11;
  obj.onKeyboardMoveInteractive = tmp11;
  obj.onKeyboardMoveEnd = tmp11;
  obj.onFocusedInputLayoutChangedReanimated = arg1(dependencyMap[9]).useFocusedInputLayoutHandler({ onFocusedInputLayoutChanged: pnpm_animatedTsx6 }, []);
  obj.children = children;
  const items2 = [callback5(closure_13, obj), callback5(RN.View, { style: tmp10 })];
  obj.children = items2;
  return closure_11(arg1(dependencyMap[11]).KeyboardContext.Provider, obj);
};
