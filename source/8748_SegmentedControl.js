// Module ID: 8748
// Function ID: 69178
// Name: SegmentedControl
// Dependencies: []
// Exports: SegmentedControl

// Module 8748 (SegmentedControl)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = {};
const tmp3 = arg1(dependencyMap[2]);
let closure_9 = arg1(dependencyMap[3]).createStyles((borderRadius, paddingVertical) => {
  let obj = { scrollContentContainer: { flexGrow: 1 } };
  obj = { handleResetDismissibilityClick: null, fromDiscoverableGuildServer: null, Line: null, UNKNOWN_FUNCTION: null, 1364605794: null, -1604188635: null, backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical };
  obj.controlsContainer = obj;
  obj.indicatorContainer = { borderRadius };
  obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius };
  obj.indicator = obj;
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
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export const SegmentedControl = function SegmentedControl(state) {
  state = state.state;
  const arg1 = state;
  let str = state.variant;
  if (str === undefined) {
    str = "default";
  }
  const importDefault = str;
  let dependencyMap;
  let React;
  let items;
  let pressedIndex;
  let setActiveIndex;
  let tmp;
  let closure_8;
  let callback;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let closure_15;
  let closure_16;
  let closure_17;
  let animatedStyle;
  const activeIndex = state.activeIndex;
  dependencyMap = activeIndex;
  const scrollOverflow = state.scrollOverflow;
  React = scrollOverflow;
  items = state.items;
  pressedIndex = state.pressedIndex;
  setActiveIndex = state.setActiveIndex;
  tmp = "experimental_Large" === str;
  let num = 4;
  if (tmp) {
    num = 8;
  }
  closure_8 = num;
  let obj = arg1(dependencyMap[5]);
  const tmp2 = callback(obj.useToken(importDefault(dependencyMap[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  callback = tmp2;
  closure_10 = length;
  let obj1 = arg1(dependencyMap[6]);
  const sharedValue = obj1.useSharedValue(-1);
  closure_11 = sharedValue;
  let obj2 = arg1(dependencyMap[6]);
  const sharedValue1 = obj2.useSharedValue(0);
  closure_12 = sharedValue1;
  let obj3 = arg1(dependencyMap[6]);
  const sharedValue2 = obj3.useSharedValue(0);
  closure_13 = sharedValue2;
  let obj4 = arg1(dependencyMap[6]);
  class T {
    constructor() {
      return closure_12.get();
    }
  }
  T.__closure = { indicatorWidth: sharedValue1 };
  T.__workletHash = 5223249035388;
  T.__initData = closure_10;
  class R {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = closure_13;
        result = closure_13.set(arg1);
      }
      return;
    }
  }
  R.__closure = { previousIndicatorWidth: sharedValue2 };
  R.__workletHash = 14748619096684;
  R.__initData = closure_11;
  const animatedReaction = obj4.useAnimatedReaction(T, R);
  const items1 = [sharedValue1];
  callback = React.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
  }, items1);
  closure_14 = callback;
  const sharedValue3 = arg1(dependencyMap[6]).useSharedValue(activeIndex.get());
  closure_15 = sharedValue3;
  const obj6 = arg1(dependencyMap[6]);
  const fn = function k() {
    return Math.min(Math.max(activeIndex.get(), 0), length - 1);
  };
  fn.__closure = { activeIndex, itemCount: items.length };
  fn.__workletHash = 790542357728;
  fn.__initData = closure_12;
  const derivedValue = arg1(dependencyMap[6]).useDerivedValue(fn);
  closure_16 = derivedValue;
  const obj7 = arg1(dependencyMap[6]);
  class G {
    constructor() {
      value = closure_16.get();
      diff = value - closure_15.get();
      return diff * closure_12.get();
    }
  }
  G.__closure = { clampedActiveIndex: derivedValue, defaultActiveIndex: sharedValue3, indicatorWidth: sharedValue1 };
  G.__workletHash = 10116271570175;
  G.__initData = closure_13;
  const derivedValue1 = arg1(dependencyMap[6]).useDerivedValue(G);
  closure_17 = derivedValue1;
  const obj8 = arg1(dependencyMap[6]);
  class B {
    constructor() {
      value = closure_17.get();
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
          interpolateResult = obj.interpolate(scrollOverflow.get(), items, [], "clamp");
          tmp20 = closure_12;
          num7 = 2;
          sum = value + -closure_12.get() * (1 - interpolateResult) / 2;
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
            interpolateResult1 = obj7.interpolate(scrollOverflow.get(), ["values", "application"], [], "clamp");
            tmp48 = closure_12;
            num11 = 2;
            sum = value + closure_12.get() * (1 - interpolateResult1) / 2;
            num = interpolateResult1;
          }
        }
        tmp22 = closure_16;
        if (0 === closure_16.get()) {
          tmp27 = closure_8;
          sum1 = sum + closure_8;
        } else {
          tmp23 = closure_16;
          tmp24 = length;
          sum1 = sum;
          if (closure_16.get() === length - 1) {
            tmp26 = closure_8;
            sum1 = sum - closure_8;
          }
        }
        tmp28 = closure_12;
        tmp30 = closure_13;
        value1 = closure_12.get();
        tmp31 = value1 === closure_13.get();
        if (!tmp31) {
          tmp32 = closure_13;
          tmp33 = closure_12;
          result = closure_13.set(closure_12.get());
        }
        obj = {};
        obj1 = {};
        withSpringResult = sum1;
        if (tmp31) {
          tmp36 = state;
          tmp37 = activeIndex;
          num8 = 7;
          obj4 = state(activeIndex[7]);
          tmp38 = closure_8;
          withSpringResult = obj4.withSpring(sum1, closure_8);
        }
        obj1.translateX = withSpringResult;
        items1 = [, ];
        items1[0] = obj1;
        obj2 = {};
        tmp39 = state;
        tmp40 = activeIndex;
        num9 = 7;
        obj6 = state(activeIndex[7]);
        tmp41 = closure_8;
        obj2.scaleX = obj6.withSpring(num, closure_8);
        items1[1] = obj2;
        obj.transform = items1;
        return obj;
      } else {
        tmp2 = pressedIndex;
        tmp4 = closure_16;
        value2 = pressedIndex.get();
        if (value2 < closure_16.get()) {
          tmp10 = closure_12;
          num4 = 0.02;
          diff = value - 0.02 * closure_12.get();
          num2 = 1.04;
        } else {
          tmp5 = pressedIndex;
          tmp7 = closure_16;
          value3 = pressedIndex.get();
          diff = value;
          num2 = 1;
          if (value3 > closure_16.get()) {
            tmp9 = closure_12;
            num3 = 0.02;
            diff = value + 0.02 * closure_12.get();
            num2 = 1.04;
          }
        }
        tmp11 = diff;
        tmp12 = num2;
      }
      return;
    }
  }
  obj = { indicatorTranslateX: derivedValue1, pressedIndex, clampedActiveIndex: derivedValue, PRESSED_TRANSLATE_AMOUNT: 0.04, indicatorWidth: sharedValue1, scrollOverflow, interpolate: arg1(dependencyMap[6]).interpolate, SCROLL_OVERFLOW_UPPER_BOUND: 50, SCROLL_OVERFLOW_MAX_SCALE: 0.9, segmentSpacing: num, itemCount: items.length, previousIndicatorWidth: sharedValue2, withSpring: arg1(dependencyMap[7]).withSpring, SELECTED_INDICATOR_SPRING: closure_8 };
  B.__closure = obj;
  B.__workletHash = 5537358752627;
  B.__initData = closure_14;
  animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(B);
  const items2 = [items, sharedValue3, callback, tmp2.indicator, animatedStyle];
  const items3 = [items, items.length, num, state, pressedIndex, tmp, str, setActiveIndex];
  const memo = React.useMemo(() => items.map((id) => {
    const tmp = closure_15.get() === arg1;
    let obj = {};
    let tmp3;
    if (tmp) {
      tmp3 = closure_14;
    }
    obj.onLayout = tmp3;
    const items = [indicator.indicator, ];
    if (tmp) {
      obj = closure_18;
    } else {
      obj = { opacity: 0 };
    }
    items[1] = obj;
    obj.style = items;
    return closure_6(callback(closure_2[6]).View, obj, id.id);
  }), items2);
  const memo1 = React.useMemo(() => items.map((arg0, index) => {
    let icon;
    let id;
    let label;
    ({ label, id, icon } = arg0);
    if (0 === index) {
      let tmp3 = closure_8;
    } else if (index === closure_10 - 1) {
      tmp3 = -closure_8;
    }
    if (0 === index) {
      let tmp6 = -closure_8;
    } else if (index === closure_10 - 1) {
      tmp6 = closure_8;
    }
    let obj = {
      style: obj,
      index,
      itemCount: closure_10,
      label,
      state: index,
      pressed: closure_5,
      onPress() {
        callback(arg1);
      },
      onPressIn() {
        const result = store.set(arg1);
      },
      onPressOut() {
        const result = store.set(-1);
      }
    };
    obj = { minWidth: `${1 / closure_10 * 100}%`, marginStart: tmp3, marginEnd: tmp6 };
    let tmp9 = null;
    if (closure_7) {
      tmp9 = icon;
    }
    obj.icon = tmp9;
    obj.variant = closure_1;
    return closure_6(index(closure_2[8]).SegmentedControlItem, obj, id);
  }), items3);
  const obj9 = arg1(dependencyMap[6]);
  const Gesture = arg1(dependencyMap[9]).Gesture;
  const tmp14 = () => {
    function onPanGestureUpdate(translationX) {
      const result = translationX.translationX / closure_12.get();
      const result1 = closure_2.set(Math.min(Math.max(closure_11.get() + result, 0), closure_10 - 1));
    }
    onPanGestureUpdate.__closure = { indicatorWidth: sharedValue1, panIndex: sharedValue, activeIndex, itemCount: length };
    onPanGestureUpdate.__workletHash = 4853281820821;
    onPanGestureUpdate.__initData = sharedValue3;
    return onPanGestureUpdate;
  }();
  class J {
    constructor() {
      result = closure_11.set(activeIndex.get());
      return;
    }
  }
  J.__closure = { panIndex: sharedValue, activeIndex };
  J.__workletHash = 16822477236158;
  J.__initData = closure_17;
  const PanResult = Gesture.Pan();
  const onStartResult = Gesture.Pan().onStart(J);
  class H {
    constructor() {
      result = closure_11.set(-1);
      result1 = activeIndex.set(Math.round(activeIndex.get()));
      obj = state(activeIndex[6]);
      runOnJSResult = obj.runOnJS(setActiveIndex);
      tmp3Result = runOnJSResult(activeIndex.get());
      return;
    }
  }
  obj = { panIndex: sharedValue, activeIndex, runOnJS: arg1(dependencyMap[6]).runOnJS, setActiveIndex };
  H.__closure = obj;
  H.__workletHash = 4531135834116;
  H.__initData = closure_16;
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
  const tmp16 = tmp(items, obj1, items.length);
  obj3 = { accessibilityRole: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, call: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986, contentContainerStyle: tmp2.scrollContentContainer, keyboardShouldPersistTaps: state.keyboardShouldPersistTaps, children: tmp16 };
  let tmp17 = setActiveIndex(pressedIndex, obj3);
  if (tmp) {
    obj4 = { gesture: onEndResult, children: tmp16 };
    tmp17 = setActiveIndex(arg1(dependencyMap[9]).GestureDetector, obj4);
  }
  return tmp17;
};
