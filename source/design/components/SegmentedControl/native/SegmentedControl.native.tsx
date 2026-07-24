// Module ID: 8799
// Function ID: 69469
// Name: SegmentedControl
// Dependencies: [31, 27, 33, 4130, 689, 3834, 3991, 4542, 8800, 5217, 477, 2]
// Exports: SegmentedControl

// Module 8799 (SegmentedControl)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { mass: 0.3, damping: 13, stiffness: 100, restDisplacementThreshold: 0.001, overshootClamping: true };
let closure_9 = _createForOfIteratorHelperLoose.createStyles((borderRadius, paddingVertical) => {
  let obj = { scrollContentContainer: { flexGrow: 1 } };
  obj = { backgroundColor: importDefault(689).colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" };
  obj.controlsContainer = obj;
  obj = { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" };
  obj.indicatorContainer = obj;
  obj.indicator = { flex: 1, backgroundColor: importDefault(689).colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius };
  return obj;
});
let closure_10 = { code: "function SegmentedControlNativeTsx1(){const{indicatorWidth}=this.__closure;return indicatorWidth.get();}" };
let closure_11 = { code: "function SegmentedControlNativeTsx2(_,previous){const{previousIndicatorWidth}=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}}" };
let closure_12 = { code: "function SegmentedControlNativeTsx3(){const{activeIndex,itemCount}=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);}" };
let closure_13 = { code: "function SegmentedControlNativeTsx4(){const{clampedActiveIndex,defaultActiveIndex,indicatorWidth}=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();}" };
let closure_14 = { code: "function SegmentedControlNativeTsx5(){const{indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING}=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};}" };
let closure_15 = { code: "function onPanGestureUpdate_SegmentedControlNativeTsx6(event){const{indicatorWidth,panIndex,activeIndex,itemCount}=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));}" };
let closure_16 = { code: "function SegmentedControlNativeTsx7(){const{panIndex,activeIndex,runOnJS,setActiveIndex}=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));runOnJS(setActiveIndex)(activeIndex.get());}" };
let closure_17 = { code: "function SegmentedControlNativeTsx8(){const{panIndex,activeIndex}=this.__closure;panIndex.set(activeIndex.get());}" };
let result = require("jsxProd").fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export const SegmentedControl = function SegmentedControl(state) {
  state = state.state;
  let str = state.variant;
  if (str === undefined) {
    str = "default";
  }
  let activeIndex;
  let scrollOverflow;
  let items;
  let pressedIndex;
  let setActiveIndex;
  let callback;
  let num;
  let callback2;
  let length;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  callback = undefined;
  let sharedValue3;
  let derivedValue;
  let derivedValue1;
  let animatedStyle;
  activeIndex = state.activeIndex;
  scrollOverflow = state.scrollOverflow;
  items = state.items;
  pressedIndex = state.pressedIndex;
  setActiveIndex = state.setActiveIndex;
  callback = tmp;
  num = 4;
  if ("experimental_Large" === str) {
    num = 8;
  }
  let obj = state(activeIndex[5]);
  const tmp2 = callback2(obj.useToken(str(activeIndex[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  callback2 = tmp2;
  length = items.length;
  let obj1 = state(activeIndex[6]);
  sharedValue = obj1.useSharedValue(-1);
  let obj2 = state(activeIndex[6]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = state(activeIndex[6]);
  sharedValue2 = obj3.useSharedValue(0);
  let obj4 = state(activeIndex[6]);
  class T {
    constructor() {
      return c12.get();
    }
  }
  T.__closure = { indicatorWidth: sharedValue1 };
  T.__workletHash = 5223249035388;
  T.__initData = length;
  class R {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = c13;
        result = c13.set(arg1);
      }
      return;
    }
  }
  R.__closure = { previousIndicatorWidth: sharedValue2 };
  R.__workletHash = 14748619096684;
  R.__initData = sharedValue;
  const animatedReaction = obj4.useAnimatedReaction(T, R);
  let items1 = [sharedValue1];
  callback = scrollOverflow.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  sharedValue3 = state(activeIndex[6]).useSharedValue(activeIndex.get());
  const obj6 = state(activeIndex[6]);
  const fn = function k() {
    return Math.min(Math.max(activeIndex.get(), 0), length - 1);
  };
  fn.__closure = { activeIndex, itemCount: length };
  fn.__workletHash = 790542357728;
  fn.__initData = sharedValue1;
  derivedValue = state(activeIndex[6]).useDerivedValue(fn);
  let obj7 = state(activeIndex[6]);
  class G {
    constructor() {
      value = c16.get();
      diff = value - c15.get();
      return diff * c12.get();
    }
  }
  G.__closure = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue3, indicatorWidth: sharedValue1 };
  G.__workletHash = 10116271570175;
  G.__initData = sharedValue2;
  derivedValue1 = state(activeIndex[6]).useDerivedValue(G);
  const obj8 = state(activeIndex[6]);
  class B {
    constructor() {
      value = c17.get();
      num = 1;
      if (pressedIndex.get() < 0) {
        tmp13 = scrollOverflow;
        if (scrollOverflow.get() < 0) {
          tmp14 = state;
          tmp15 = activeIndex;
          num5 = 6;
          obj = state(activeIndex[6]);
          tmp16 = scrollOverflow;
          items = [, ];
          num6 = -50;
          items[0] = -50;
          items[1] = 0;
          str = "clamp";
          tmp17 = obj;
          tmp18 = items;
          interpolateResult = obj.interpolate(scrollOverflow.get(), items, [0.9, 1], "clamp");
          tmp20 = c12;
          num7 = 2;
          sum = value + -c12.get() * (1 - interpolateResult) / 2;
          num = interpolateResult;
        } else {
          tmp42 = scrollOverflow;
          sum = value;
          if (scrollOverflow.get() > 0) {
            tmp43 = state;
            tmp44 = activeIndex;
            num10 = 6;
            obj7 = state(activeIndex[6]);
            tmp45 = scrollOverflow;
            str2 = "clamp";
            tmp46 = obj7;
            interpolateResult1 = obj7.interpolate(scrollOverflow.get(), [50, 0], [0.9, 1], "clamp");
            tmp48 = c12;
            num11 = 2;
            sum = value + c12.get() * (1 - interpolateResult1) / 2;
            num = interpolateResult1;
          }
        }
        tmp22 = c16;
        if (0 === c16.get()) {
          tmp27 = c8;
          sum1 = sum + c8;
        } else {
          tmp23 = c16;
          tmp24 = length;
          sum1 = sum;
          if (c16.get() === length - 1) {
            tmp26 = c8;
            sum1 = sum - c8;
          }
        }
        tmp28 = c12;
        tmp30 = c13;
        value1 = c12.get();
        tmp31 = value1 === c13.get();
        if (!tmp31) {
          tmp32 = c13;
          tmp33 = c12;
          result = c13.set(c12.get());
        }
        obj = {};
        obj1 = {};
        withSpringResult = sum1;
        if (tmp31) {
          tmp36 = state;
          tmp37 = activeIndex;
          num8 = 7;
          obj4 = state(activeIndex[7]);
          tmp38 = c8;
          withSpringResult = obj4.withSpring(sum1, c8);
        }
        obj1.translateX = withSpringResult;
        items1 = [, ];
        items1[0] = obj1;
        obj2 = {};
        tmp39 = state;
        tmp40 = activeIndex;
        num9 = 7;
        obj6 = state(activeIndex[7]);
        tmp41 = c8;
        obj2.scaleX = obj6.withSpring(num, c8);
        items1[1] = obj2;
        obj.transform = items1;
        return obj;
      } else {
        tmp2 = pressedIndex;
        tmp4 = c16;
        value2 = pressedIndex.get();
        if (value2 < c16.get()) {
          tmp10 = c12;
          num4 = 0.02;
          diff = value - 0.02 * c12.get();
          num2 = 1.04;
        } else {
          tmp5 = pressedIndex;
          tmp7 = c16;
          value3 = pressedIndex.get();
          diff = value;
          num2 = 1;
          if (value3 > c16.get()) {
            tmp9 = c12;
            num3 = 0.02;
            diff = value + 0.02 * c12.get();
            num2 = 1.04;
          }
        }
        tmp11 = diff;
        tmp12 = num2;
      }
      return;
    }
  }
  obj = { indicatorTranslateX: derivedValue1, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: 0.04, indicatorWidth: sharedValue1, scrollOverflow, interpolate: state(activeIndex[6]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: 0.9, segmentSpacing: num, itemCount: length, previousIndicatorWidth: sharedValue2, withSpring: state(activeIndex[7]).withSpring, SELECTED_INDICATOR_SPRING: num };
  B.__closure = obj;
  B.__workletHash = 5537358752627;
  B.__initData = callback;
  animatedStyle = state(activeIndex[6]).useAnimatedStyle(B);
  const items2 = [items, sharedValue3, callback, tmp2.indicator, animatedStyle];
  const items3 = [items, length, num, state, pressedIndex, "experimental_Large" === str, str, setActiveIndex];
  const memo = scrollOverflow.useMemo(() => items.map((id) => {
    const tmp = outer1_15.get() === arg1;
    let obj = {};
    let tmp3;
    if (tmp) {
      tmp3 = outer1_14;
    }
    obj.onLayout = tmp3;
    const items = [outer1_9.indicator, ];
    if (tmp) {
      obj = outer1_18;
    } else {
      obj = { opacity: 0 };
    }
    items[1] = obj;
    obj.style = items;
    return setActiveIndex(str(activeIndex[6]).View, obj, id.id);
  }), items2);
  const memo1 = scrollOverflow.useMemo(() => items.map((arg0, index) => {
    let icon;
    let id;
    let label;
    let closure_0 = index;
    ({ label, id, icon } = arg0);
    if (0 === index) {
      let tmp3 = outer1_8;
    } else if (index === outer1_10 - 1) {
      tmp3 = -outer1_8;
    }
    if (0 === index) {
      let tmp6 = -outer1_8;
    } else if (index === outer1_10 - 1) {
      tmp6 = outer1_8;
    }
    obj = {
      style: obj,
      index,
      itemCount: outer1_10,
      label,
      state: outer1_0,
      pressed: outer1_5,
      onPress() {
        outer2_6(closure_0);
      },
      onPressIn() {
        const result = outer2_5.set(closure_0);
      },
      onPressOut() {
        const result = outer2_5.set(-1);
      }
    };
    obj = { minWidth: `${1 / outer1_10 * 100}%`, marginStart: tmp3, marginEnd: tmp6 };
    let tmp9 = null;
    if (outer1_7) {
      tmp9 = icon;
    }
    obj.icon = tmp9;
    obj.variant = outer1_1;
    return setActiveIndex(state(activeIndex[8]).SegmentedControlItem, obj, id);
  }), items3);
  const obj9 = state(activeIndex[6]);
  const Gesture = state(activeIndex[9]).Gesture;
  const tmp14 = (() => {
    function onPanGestureUpdate(translationX) {
      const result = translationX.translationX / outer1_12.get();
      const result1 = outer1_2.set(Math.min(Math.max(outer1_11.get() + result, 0), outer1_10 - 1));
    }
    onPanGestureUpdate.__closure = { indicatorWidth: sharedValue1, panIndex: sharedValue, activeIndex, itemCount: length };
    onPanGestureUpdate.__workletHash = 4853281820821;
    onPanGestureUpdate.__initData = sharedValue3;
    return onPanGestureUpdate;
  })();
  class J {
    constructor() {
      result = c11.set(activeIndex.get());
      return;
    }
  }
  J.__closure = { panIndex: sharedValue, activeIndex };
  J.__workletHash = 16822477236158;
  J.__initData = derivedValue1;
  const PanResult = Gesture.Pan();
  const onStartResult = Gesture.Pan().onStart(J);
  class H {
    constructor() {
      result = c11.set(-1);
      result1 = activeIndex.set(Math.round(activeIndex.get()));
      obj = state(activeIndex[6]);
      runOnJSResult = obj.runOnJS(setActiveIndex);
      tmp3Result = runOnJSResult(activeIndex.get());
      return;
    }
  }
  obj = { panIndex: sharedValue, activeIndex, runOnJS: state(activeIndex[6]).runOnJS, setActiveIndex };
  H.__closure = obj;
  H.__workletHash = 4531135834116;
  H.__initData = derivedValue;
  const onUpdateResult = Gesture.Pan().onStart(J).onUpdate(tmp14);
  const onEndResult = Gesture.Pan().onStart(J).onUpdate(tmp14).onEnd(H);
  let str2 = "tabbar";
  if (obj15.isAndroid()) {
    str2 = "tablist";
  }
  obj1 = { accessibilityRole: str2, style: tmp2.controlsContainer };
  obj2 = { accessible: false, style: tmp2.indicatorContainer, children: memo };
  const items4 = [setActiveIndex(items, obj2), memo1];
  obj1.children = items4;
  const tmp16 = callback(items, obj1, items.length);
  obj3 = { horizontal: true, alwaysBounceHorizontal: false, contentContainerStyle: tmp2.scrollContentContainer, keyboardShouldPersistTaps: state.keyboardShouldPersistTaps, children: tmp16 };
  let tmp17 = setActiveIndex(pressedIndex, obj3);
  if ("experimental_Large" === str) {
    obj4 = { gesture: onEndResult, children: tmp16 };
    tmp17 = setActiveIndex(state(activeIndex[9]).GestureDetector, obj4);
  }
  return tmp17;
};
