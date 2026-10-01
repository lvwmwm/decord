// Module ID: 9084
// Function ID: 9085
// Name: SegmentedControl
// Dependencies: [19, 17, 21, 4836, 576, 4531, 4566, 5280, 9085, 6073, 1364, 2]
// Exports: SegmentedControl

// Module 9084 (SegmentedControl)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let __initData;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 0.04;
let SELECTED_INDICATOR_SPRING = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
let closure_10 = createStyles.createStyles((borderRadius, paddingVertical) => {
  const obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" }, indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" }, indicator: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius } };
  ({ backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" });
  ({ flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius });
  return obj;
});
let closure_11 = { code: "function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
let closure_12 = { code: "function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}" };
let closure_13 = { code: "function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
let closure_14 = { code: "function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}" };
let closure_15 = { code: "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let closure_16 = { code: "function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}" };
let closure_17 = { code: "function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}" };
let closure_18 = { code: "function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}" };
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export const SegmentedControl = function SegmentedControl(state) {
  let closure_9;
  let items4;
  state = state.state;
  let str = state.variant;
  if (str === undefined) {
    str = "default";
  }
  SELECTED_INDICATOR_SPRING = undefined;
  let length;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  __initData = undefined;
  let sharedValue3;
  let derivedValue;
  let derivedValue1;
  let animatedStyle;
  const activeIndex = state.activeIndex;
  const scrollOverflow = state.scrollOverflow;
  let items = state.items;
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  let tmp = "experimental_Large" === str;
  let closure_7 = tmp;
  let num = 4;
  const keyboardShouldPersistTaps = state.keyboardShouldPersistTaps;
  if (tmp) {
    num = 8;
  }
  let tmp2 = state;
  let tmp3 = activeIndex;
  let obj = state(activeIndex[5]);
  const tmp4 = length(obj.useToken(str(activeIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  SELECTED_INDICATOR_SPRING = tmp4;
  length = items.length;
  let obj2 = state(activeIndex[6]);
  sharedValue = obj2.useSharedValue(-1);
  const obj3 = state(activeIndex[6]);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = state(activeIndex[6]);
  sharedValue2 = obj4.useSharedValue(0);
  let obj5 = state(activeIndex[6]);
  class T {
    constructor() {
      return sharedValue1.get();
    }
  }
  T.__closure = { indicatorWidth: sharedValue1 };
  T.__workletHash = 5223249035388;
  T.__initData = sharedValue;
  class R {
    constructor(arg0, arg1) {
      if (null != arg1) {
        const result = sharedValue2.set(arg1);
      }
    }
  }
  R.__closure = { previousIndicatorWidth: sharedValue2 };
  R.__workletHash = 14748619096684;
  R.__initData = sharedValue1;
  const animatedReaction = obj5.useAnimatedReaction(T, R);
  const items1 = [sharedValue1];
  __initData = scrollOverflow.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  let obj6 = state(activeIndex[6]);
  sharedValue3 = obj6.useSharedValue(activeIndex.get());
  let obj7 = state(activeIndex[6]);
  const fn = function k() {
    return Math.min(Math.max(activeIndex.get(), 0), length - 1);
  };
  fn.__closure = { activeIndex, itemCount: length };
  fn.__workletHash = 790542357728;
  fn.__initData = sharedValue2;
  derivedValue = obj7.useDerivedValue(fn);
  let obj8 = state(activeIndex[6]);
  class G {
    constructor() {
      const value = derivedValue.get();
      const diff = value - sharedValue3.get();
      return diff * sharedValue1.get();
    }
  }
  G.__closure = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue3, indicatorWidth: sharedValue1 };
  G.__workletHash = 10116271570175;
  G.__initData = __initData;
  derivedValue1 = obj8.useDerivedValue(G);
  let obj9 = state(activeIndex[6]);
  class B {
    constructor() {
      let obj11;
      let sum;
      let sum1;
      const value = derivedValue1.get();
      num = 1;
      let tmp2 = value;
      if (pressedIndex.get() >= 0) {
        let num2;
        let diff;
        const value4 = obj.get();
        const obj2 = derivedValue;
        if (value4 < derivedValue.get()) {
          num2 = 1 + c8;
          diff = value - 0.02 * sharedValue1.get();
        } else {
          const value5 = obj.get();
          num2 = 1;
          diff = value;
          if (value5 > obj2.get()) {
            num2 = 1 + c8;
            diff = value + 0.02 * sharedValue1.get();
          }
        }
        num = num2;
        tmp2 = diff;
      }
      if (scrollOverflow.get() < 0) {
        const obj4 = ReanimatedRexport;
        const interpolateResult = obj4.interpolate(scrollOverflow.get(), [-50, 0], [0.9, 1], "clamp");
        sum = tmp2 + -sharedValue1.get() * (1 - interpolateResult) / 2;
        num = interpolateResult;
      } else {
        sum = tmp2;
        if (scrollOverflow.get() > 0) {
          const obj12 = ReanimatedRexport;
          const interpolateResult1 = obj12.interpolate(scrollOverflow.get(), [50, 0], [0.9, 1], "clamp");
          sum = tmp2 + sharedValue1.get() * (1 - interpolateResult1) / 2;
          num = interpolateResult1;
        }
      }
      const obj5 = derivedValue;
      if (0 === derivedValue.get()) {
        sum1 = sum + num;
      } else {
        sum1 = sum;
        if (obj5.get() === length - 1) {
          sum1 = sum - num;
        }
      }
      const value6 = sharedValue1.get();
      const tmp21 = value6 === sharedValue2.get();
      const obj6 = sharedValue1;
      const obj7 = sharedValue2;
      if (!tmp21) {
        const result = obj7.set(obj6.get());
      }
      let withSpringResult = sum1;
      if (tmp21) {
        const obj8 = spring;
        withSpringResult = obj8.withSpring(sum1, SELECTED_INDICATOR_SPRING);
      }
      const obj9 = { transform: items };
      items = [{ translateX: withSpringResult }, ];
      const obj10 = { scaleX: obj11.withSpring(num, SELECTED_INDICATOR_SPRING) };
      items[1] = obj10;
      obj11 = spring;
      return obj9;
    }
  }
  let obj10 = { indicatorTranslateX: derivedValue1, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: num, indicatorWidth: sharedValue1, scrollOverflow, interpolate: state(activeIndex[6]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: 0.9, segmentSpacing: num, itemCount: length, previousIndicatorWidth: sharedValue2, withSpring: state(activeIndex[7]).withSpring, SELECTED_INDICATOR_SPRING };
  B.__closure = obj10;
  B.__workletHash = 5537358752627;
  B.__initData = sharedValue3;
  animatedStyle = obj9.useAnimatedStyle(B);
  const items2 = [items, sharedValue3, __initData, tmp4.indicator, animatedStyle];
  const items3 = [items, length, num, state, pressedIndex, tmp, str, setActiveIndex];
  const memo = scrollOverflow.useMemo(() => {
    let indicator;
    return items.map((id, index) => {
      id = id.id;
      const tmp = sharedValue3.get() === index;
      let tmp3;
      const View = str(activeIndex[6]).View;
      const tmp2 = setActiveIndex;
      if (tmp) {
        tmp3 = __initData;
      }
      const obj = { onLayout: tmp3, style: items };
      items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
      return tmp2(View, obj, id);
    });
  }, items2);
  function onPanGestureUpdate(translationX) {
    const result = translationX.translationX / sharedValue1.get();
    const result1 = activeIndex.set(Math.min(Math.max(sharedValue.get() + result, 0), length - 1));
  }
  onPanGestureUpdate.__closure = { indicatorWidth: sharedValue1, panIndex: sharedValue, activeIndex, itemCount: length };
  onPanGestureUpdate.__workletHash = 4853281820821;
  onPanGestureUpdate.__initData = derivedValue;
  const memo1 = scrollOverflow.useMemo(() => {
    let itemCount;
    let pressed;
    let variant;
    return items.map((item, index) => {
      let icon;
      let id;
      let label;
      let obj2;
      let tmp3;
      let tmp6;
      let tmp9;
      state = index;
      ({ label, id, icon } = item);
      if (0 === index) {
        tmp3 = closure_8;
      } else if (index === itemCount - 1) {
        tmp3 = -closure_8;
      }
      if (0 === index) {
        tmp6 = -closure_8;
      } else if (index === itemCount - 1) {
        tmp6 = closure_8;
      }
      const obj = {
        style: obj2,
        index,
        itemCount,
        label,
        state,
        pressed,
        onPress() {
          setActiveIndex(index);
        },
        onPressIn() {
          const result = pressed.set(index);
        },
        onPressOut() {
          const result = pressed.set(-1);
        },
        icon: tmp9,
        variant
      };
      tmp9 = null;
      obj2 = { minWidth: `${1 / closure_10 * 100}%`, marginStart: tmp3, marginEnd: tmp6 };
      const SegmentedControlItem = state(activeIndex[8]).SegmentedControlItem;
      const tmp8 = setActiveIndex;
      if (closure_7) {
        tmp9 = icon;
      }
      return tmp8(SegmentedControlItem, obj, id);
    });
  }, items3);
  const Gesture = state(activeIndex[9]).Gesture;
  const PanResult = Gesture.Pan();
  class J {
    constructor() {
      const result = sharedValue.set(activeIndex.get());
    }
  }
  J.__closure = { panIndex: sharedValue, activeIndex };
  J.__workletHash = 16822477236158;
  J.__initData = animatedStyle;
  const onStartResult = PanResult.onStart(J);
  const onUpdateResult = onStartResult.onUpdate(onPanGestureUpdate);
  class H {
    constructor() {
      const result = sharedValue.set(-1);
      const result1 = activeIndex.set(Math.round(activeIndex.get()));
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(setActiveIndex);
      runOnJSResult(activeIndex.get());
    }
  }
  let obj11 = { panIndex: sharedValue, activeIndex, runOnJS: state(activeIndex[6]).runOnJS, setActiveIndex };
  H.__closure = obj11;
  H.__workletHash = 4531135834116;
  H.__initData = derivedValue1;
  let str2 = "tablist";
  const onEndResult = onUpdateResult.onEnd(H);
  const obj15 = state(activeIndex[10]);
  if (!obj15.isAndroid()) {
    let str3;
    if (tmp) {
      str3 = "tabbar";
    }
    str2 = str3;
  }
  let obj12 = { accessibilityRole: str2, style: tmp4.controlsContainer, children: items4 };
  items4 = [, ];
  const obj13 = { accessible: false, style: tmp4.indicatorContainer, children: memo };
  items4[0] = setActiveIndex(items, obj13);
  items4[1] = memo1;
  const tmp18 = closure_7(items, obj12, items.length);
  let str4;
  const tmp19 = pressedIndex;
  const tmp2Result = tmp2(tmp3[10]);
  if (tmp2Result.isIOS()) {
    str4 = "tabbar";
  }
  const obj14 = { horizontal: true, accessibilityRole: str4, alwaysBounceHorizontal: false, contentContainerStyle: tmp4.scrollContentContainer, keyboardShouldPersistTaps, children: tmp18 };
  let tmp17Result = tmp17(tmp19, obj14);
  if (tmp) {
    const obj16 = { gesture: onEndResult, children: tmp18 };
    tmp17Result = tmp17(tmp2(tmp3[9]).GestureDetector, obj16);
  }
  return tmp17Result;
};
