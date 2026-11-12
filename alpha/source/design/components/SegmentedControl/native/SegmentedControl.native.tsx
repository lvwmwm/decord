// Module ID: 11184
// Function ID: 11185
// Name: SegmentedControl
// Dependencies: [19, 17, 21, 5243, 575, 5839, 1652, 5876, 11185, 5535, 1705, 1377, 2]
// Exports: SegmentedControl

// Module 11184 (SegmentedControl)
import nativeDefault from "native" /* 575 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = { mass: 0.3, damping: 13, stiffness: 100, overshootClamping: true };
let closure_9 = createStyles.createStyles((borderRadius, paddingVertical) => {
  const obj = { scrollContentContainer: { flexGrow: 1 }, controlsContainer: { backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" }, indicatorContainer: { position: "absolute", width: "100%", height: "100%", borderRadius, flexDirection: "row" }, indicator: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius } };
  ({ backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_BACKGROUND, borderRadius: borderRadius + paddingVertical, paddingVertical, display: "flex", flexDirection: "row", alignItems: "center" });
  ({ flex: 1, backgroundColor: nativeDefault.colors.MOBILE_SEGMENTED_CONTROL_INDICATOR_BACKGROUND, borderRadius });
  return obj;
});
let closure_10 = { code: "(function SegmentedControlNativeTsx1(){let[indicatorWidth]=this.__closure;return indicatorWidth.get();})" };
let closure_11 = { code: "(function SegmentedControlNativeTsx2(_,previous){let[previousIndicatorWidth]=this.__closure;if(previous!=null){previousIndicatorWidth.set(previous);}})" };
let closure_12 = { code: "(function SegmentedControlNativeTsx3(){let[activeIndex,itemCount]=this.__closure;return Math.min(Math.max(activeIndex.get(),0),itemCount-1);})" };
let closure_13 = { code: "(function SegmentedControlNativeTsx4(){let[clampedActiveIndex,defaultActiveIndex,indicatorWidth]=this.__closure;return(clampedActiveIndex.get()-defaultActiveIndex.get())*indicatorWidth.get();})" };
let closure_14 = { code: "(function SegmentedControlNativeTsx5(){let[indicatorTranslateX,pressedIndex,clampedActiveIndex,PRESSED_TRANSLATE_AMOUNT,indicatorWidth,scrollOverflow,interpolate,SCROLL_OVERFLOW_UPPER_BOUND,SCROLL_OVERFLOW_MAX_SCALE,segmentSpacing,itemCount,previousIndicatorWidth,withSpring,SELECTED_INDICATOR_SPRING]=this.__closure;let translateX=indicatorTranslateX.get();let scaleX=1;if(pressedIndex.get()>=0){if(pressedIndex.get()<clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX-=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}else if(pressedIndex.get()>clampedActiveIndex.get()){scaleX+=PRESSED_TRANSLATE_AMOUNT;translateX+=indicatorWidth.get()*(PRESSED_TRANSLATE_AMOUNT/2);}}if(scrollOverflow.get()<0){const scaleFactor=interpolate(scrollOverflow.get(),[-SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=-scaleAmount/2;}else if(scrollOverflow.get()>0){const scaleFactor=interpolate(scrollOverflow.get(),[SCROLL_OVERFLOW_UPPER_BOUND,0],[SCROLL_OVERFLOW_MAX_SCALE,1],'clamp');const scaleAmount=indicatorWidth.get()*(1-scaleFactor);scaleX=scaleFactor;translateX+=scaleAmount/2;}if(clampedActiveIndex.get()===0){translateX+=segmentSpacing;}else if(clampedActiveIndex.get()===itemCount-1){translateX-=segmentSpacing;}const animated=indicatorWidth.get()===previousIndicatorWidth.get();if(!animated){previousIndicatorWidth.set(indicatorWidth.get());}return{transform:[{translateX:animated?withSpring(translateX,SELECTED_INDICATOR_SPRING):translateX},{scaleX:withSpring(scaleX,SELECTED_INDICATOR_SPRING)}]};})" };
let closure_15 = { code: "(function onPanGestureUpdate_SegmentedControlNativeTsx6(event){let[indicatorWidth,panIndex,activeIndex,itemCount]=this.__closure;const progess=event.translationX/indicatorWidth.get();const index=panIndex.get()+progess;activeIndex.set(Math.min(Math.max(index,0),itemCount-1));})" };
let closure_16 = { code: "(function SegmentedControlNativeTsx7(){let[panIndex,activeIndex]=this.__closure;panIndex.set(activeIndex.get());})" };
let closure_17 = { code: "(function SegmentedControlNativeTsx8(){let[panIndex,activeIndex,scheduleOnRN,setActiveIndex]=this.__closure;panIndex.set(-1);activeIndex.set(Math.round(activeIndex.get()));scheduleOnRN(setActiveIndex,activeIndex.get());})" };
let result = size.fileFinishedImporting("design/components/SegmentedControl/native/SegmentedControl.native.tsx");

export function SegmentedControl(state) {
  let activeIndex;
  let items;
  let items20;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp50;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp8;
  let tmp9;
  state = state.state;
  let str = state.variant;
  if (str === undefined) {
    str = "default";
  }
  items = undefined;
  let closure_7;
  let length;
  let sharedValue1;
  let callback;
  let sharedValue3;
  let animatedStyle;
  ({ activeIndex, items } = state);
  const pressedIndex = state.pressedIndex;
  const setActiveIndex = state.setActiveIndex;
  let tmp = "experimental_Large" === str;
  let closure_5 = tmp;
  let num = 4;
  const keyboardShouldPersistTaps = state.keyboardShouldPersistTaps;
  const scrollOverflow = state.scrollOverflow;
  if (tmp) {
    num = 8;
  }
  let tmp2 = state;
  let tmp3 = items;
  let obj = state(items[5]);
  const tmp4 = sharedValue1(obj.useToken(str(items[4]).modules.mobile.SEGMENTED_CONTROL_BORDER_RADIUS), num);
  closure_7 = tmp4;
  length = items.length;
  let obj2 = state(items[6]);
  const sharedValue = obj2.useSharedValue(-1);
  const obj3 = state(items[6]);
  sharedValue1 = obj3.useSharedValue(0);
  let obj4 = state(items[6]);
  const sharedValue2 = obj4.useSharedValue(0);
  let obj5 = state(items[6]);
  let items1 = [callback, sharedValue1];
  let c0;
  [tmp8, tmp9] = items1;
  class SegmentedControlNativeTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  let items2 = [tmp9];
  SegmentedControlNativeTsx1.__closure = items2;
  SegmentedControlNativeTsx1.__workletHash = 1609866190981;
  SegmentedControlNativeTsx1.__initData = tmp8;
  let items3 = [sharedValue3, sharedValue2];
  c0 = undefined;
  [tmp10, tmp11] = items3;
  class SegmentedControlNativeTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        const result = _undefined.set(arg1);
      }
    }
  }
  let items4 = [tmp11];
  SegmentedControlNativeTsx2.__closure = items4;
  SegmentedControlNativeTsx2.__workletHash = 4382534066101;
  SegmentedControlNativeTsx2.__initData = tmp10;
  const animatedReaction = obj5.useAnimatedReaction(SegmentedControlNativeTsx1, SegmentedControlNativeTsx2);
  let obj6 = pressedIndex;
  const items5 = [sharedValue1];
  callback = pressedIndex.useCallback((nativeEvent) => {
    const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
  }, items5);
  const tmp2Result = tmp2(tmp3[6]);
  sharedValue3 = tmp2Result.useSharedValue(activeIndex.get());
  const items6 = [animatedStyle, activeIndex, length];
  c0 = undefined;
  let c1;
  [tmp15, tmp16, tmp17] = items6;
  const tmp2Result6 = tmp2(tmp3[6]);
  class SegmentedControlNativeTsx3 {
    constructor() {
      return Math.min(Math.max(_undefined.get(), 0), c1 - 1);
    }
  }
  const items7 = [tmp16, tmp17];
  SegmentedControlNativeTsx3.__closure = items7;
  SegmentedControlNativeTsx3.__workletHash = 609070730457;
  SegmentedControlNativeTsx3.__initData = tmp15;
  const derivedValue = tmp2Result6.useDerivedValue(SegmentedControlNativeTsx3);
  const items8 = [closure_13, derivedValue, sharedValue3, sharedValue1];
  c0 = undefined;
  c1 = undefined;
  let c2;
  [tmp19, tmp20, tmp21, tmp22] = items8;
  const tmp2Result7 = tmp2(tmp3[6]);
  class SegmentedControlNativeTsx4 {
    constructor() {
      const value = _undefined.get();
      const diff = value - _undefined2.get();
      return diff * _undefined3.get();
    }
  }
  const items9 = [tmp20, tmp21, tmp22];
  SegmentedControlNativeTsx4.__closure = items9;
  SegmentedControlNativeTsx4.__workletHash = 2708340331974;
  SegmentedControlNativeTsx4.__initData = tmp19;
  const derivedValue1 = tmp2Result7.useDerivedValue(SegmentedControlNativeTsx4);
  const items10 = [closure_14, derivedValue1, pressedIndex, derivedValue, 0.04, sharedValue1, scrollOverflow, , , , , , , , ];
  const useAnimatedStyle = tmp2(tmp3[6]).useAnimatedStyle;
  tmp2(tmp3[6]);
  items10[7] = tmp2(tmp3[6]).interpolate;
  items10[8] = 50;
  items10[9] = 0.9;
  items10[10] = num;
  items10[11] = length;
  items10[12] = sharedValue2;
  items10[13] = tmp2(tmp3[7]).withSpring;
  items10[14] = length;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39] = items10;
  class SegmentedControlNativeTsx5 {
    constructor() {
      let items4;
      let sum;
      let sum1;
      const value = _undefined.get();
      num = 1;
      let tmp2 = value;
      if (_undefined2.get() >= 0) {
        let num2;
        let diff;
        const value4 = obj.get();
        const obj2 = _undefined3;
        if (value4 < _undefined3.get()) {
          num2 = 1 + c3;
          diff = value - _undefined4.get() * (c3 / 2);
        } else {
          const value5 = obj.get();
          num2 = 1;
          diff = value;
          if (value5 > obj2.get()) {
            num2 = 1 + c3;
            diff = value + _undefined4.get() * (c3 / 2);
          }
        }
        num = num2;
        tmp2 = diff;
      }
      if (_undefined5.get() < 0) {
        items = [-c7, 0];
        const items1 = [c8, 1];
        const tmp16 = _undefined6(_undefined5.get(), items, items1, "clamp");
        sum = tmp2 + -_undefined4.get() * (1 - tmp16) / 2;
        num = tmp16;
      } else {
        sum = tmp2;
        if (_undefined5.get() > 0) {
          const items2 = [c7, 0];
          const items3 = [c8, 1];
          const tmp33 = _undefined6(_undefined5.get(), items2, items3, "clamp");
          sum = tmp2 + _undefined4.get() * (1 - tmp33) / 2;
          num = tmp33;
        }
      }
      const obj4 = _undefined3;
      if (0 === _undefined3.get()) {
        sum1 = sum + c9;
      } else {
        sum1 = sum;
        if (obj4.get() === c10 - 1) {
          sum1 = sum - c9;
        }
      }
      const value6 = _undefined4.get();
      const tmp23 = value6 === _undefined7.get();
      const obj5 = _undefined4;
      const obj6 = _undefined7;
      if (!tmp23) {
        const result = obj6.set(obj5.get());
      }
      let tmp25 = sum1;
      if (tmp23) {
        tmp25 = _undefined8(sum1, c13);
      }
      const obj7 = { transform: items4 };
      items4 = [{ translateX: tmp25 }, { scaleX: _undefined8(num, c13) }];
      ({ scaleX: _undefined8(num, c13) });
      return obj7;
    }
  }
  const items11 = [tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39];
  SegmentedControlNativeTsx5.__closure = items11;
  SegmentedControlNativeTsx5.__workletHash = 11542678716522;
  SegmentedControlNativeTsx5.__initData = tmp25;
  animatedStyle = useAnimatedStyle(SegmentedControlNativeTsx5);
  const items12 = [items, sharedValue3, callback, tmp4.indicator, animatedStyle];
  const items13 = [items, length, num, state, pressedIndex, tmp, str, setActiveIndex];
  const memo = obj6.useMemo(() => {
    let indicator;
    return items.map((id, index) => {
      id = id.id;
      const tmp = sharedValue3.get() === index;
      let tmp3;
      const View = str(items[6]).View;
      const tmp2 = num;
      if (tmp) {
        tmp3 = callback;
      }
      const obj = { onLayout: tmp3, style: items };
      items = [indicator.indicator, tmp ? animatedStyle : { opacity: 0 }];
      return tmp2(View, obj, id);
    });
  }, items12);
  const items14 = [closure_15, sharedValue1, sharedValue, activeIndex, length];
  c2 = undefined;
  c3 = undefined;
  [tmp43, tmp44, tmp45, tmp46, tmp47] = items14;
  function onPanGestureUpdate(translationX) {
    const result = translationX.translationX / _undefined.get();
    const result1 = _undefined3.set(Math.min(Math.max(_undefined2.get() + result, 0), c3 - 1));
  }
  const items15 = [tmp44, tmp45, tmp46, tmp47];
  onPanGestureUpdate.__closure = items15;
  onPanGestureUpdate.__workletHash = 17036555913324;
  onPanGestureUpdate.__initData = tmp43;
  const memo1 = obj6.useMemo(() => {
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
        tmp3 = closure_6;
      } else if (index === itemCount - 1) {
        tmp3 = -closure_6;
      }
      if (0 === index) {
        tmp6 = -closure_6;
      } else if (index === itemCount - 1) {
        tmp6 = closure_6;
      }
      const obj = {
        style: obj2,
        index,
        itemCount,
        label,
        state,
        pressed,
        onPress: function handlePress() {
          setActiveIndex(index);
        },
        onPressIn: function handlePressIn() {
          const result = pressed.set(index);
        },
        onPressOut: function handlePressOut() {
          const result = pressed.set(-1);
        },
        icon: tmp9,
        variant
      };
      tmp9 = null;
      obj2 = { minWidth: `${1 / closure_8 * 100}%`, marginStart: tmp3, marginEnd: tmp6 };
      const SegmentedControlItem = state(items[8]).SegmentedControlItem;
      const tmp8 = num;
      if (closure_5) {
        tmp9 = icon;
      }
      return tmp8(SegmentedControlItem, obj, id);
    });
  }, items13);
  const Gesture = tmp2(tmp3[9]).Gesture;
  const items16 = [closure_16, sharedValue, activeIndex];
  c0 = undefined;
  c1 = undefined;
  [tmp48, tmp49, tmp50] = items16;
  const PanResult = Gesture.Pan();
  class SegmentedControlNativeTsx7 {
    constructor() {
      const result = _undefined.set(_undefined2.get());
    }
  }
  const items17 = [tmp49, tmp50];
  SegmentedControlNativeTsx7.__closure = items17;
  SegmentedControlNativeTsx7.__workletHash = 8480234970536;
  SegmentedControlNativeTsx7.__initData = tmp48;
  const onStartResult = PanResult.onStart(SegmentedControlNativeTsx7);
  const items18 = [closure_17, sharedValue, activeIndex, , ];
  const onEnd = onStartResult.onUpdate(onPanGestureUpdate).onEnd;
  onStartResult.onUpdate(onPanGestureUpdate);
  items18[3] = tmp2(tmp3[10]).scheduleOnRN;
  items18[4] = setActiveIndex;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp52, tmp53, tmp54, tmp55, tmp56] = items18;
  class SegmentedControlNativeTsx8 {
    constructor() {
      const result = _undefined.set(-1);
      const result1 = _undefined2.set(Math.round(_undefined2.get()));
      _undefined3(c3, _undefined2.get());
    }
  }
  const items19 = [tmp53, tmp54, tmp55, tmp56];
  SegmentedControlNativeTsx8.__closure = items19;
  SegmentedControlNativeTsx8.__workletHash = 15809961228383;
  SegmentedControlNativeTsx8.__initData = tmp52;
  let str2 = "tablist";
  const onEndResult = onEnd(SegmentedControlNativeTsx8);
  const tmp2Result9 = tmp2(tmp3[11]);
  if (!tmp2Result9.isAndroid()) {
    let str3;
    if (tmp) {
      str3 = "tabbar";
    }
    str2 = str3;
  }
  let obj7 = { accessibilityRole: str2, style: tmp4.controlsContainer, children: items20 };
  const obj8 = { accessible: false, style: tmp4.indicatorContainer, children: memo };
  items20 = [num(setActiveIndex, obj8), memo1];
  const tmp59 = closure_7(setActiveIndex, obj7, items.length);
  let str4;
  const tmp2Result10 = tmp2(tmp3[11]);
  const tmp60 = closure_5;
  if (tmp2Result10.isIOS()) {
    str4 = "tabbar";
  }
  const obj9 = { horizontal: true, accessibilityRole: str4, alwaysBounceHorizontal: false, contentContainerStyle: tmp4.scrollContentContainer, keyboardShouldPersistTaps, children: tmp59 };
  let tmp58Result = tmp58(tmp60, obj9);
  if (tmp) {
    const obj10 = { gesture: onEndResult, children: tmp59 };
    tmp58Result = tmp58(tmp2(tmp3[9]).GestureDetector, obj10);
  }
  return tmp58Result;
}
