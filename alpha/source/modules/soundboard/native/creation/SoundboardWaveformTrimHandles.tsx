// Module ID: 19957
// Function ID: 19958
// Name: SoundboardWaveformTrimHandles
// Dependencies: [32, 19, 17, 21, 19947, 5012, 575, 1653, 5272, 1112, 2]
// Exports: default

// Module 19957 (SoundboardWaveformTrimHandles)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1653 from "module_1653" /* 1653 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5272 */;
import SoundboardAudioNative from "SoundboardAudioNative" /* 19947 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let max, maxResult, min, minResult, result1, set, tmp5;

let metroImportDefault;
let metroRequire;
let size;
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 0.05;
let closure_9 = 1 / SoundboardAudioNative.WAVEFORM_BAR_COUNT;
let items = [{ name: "increment" }, { name: "decrement" }];
let obj = { container: { position: "absolute", top: 0, left: 0 }, touchTarget: { position: "absolute", top: 0, bottom: 0, width: 44, alignItems: "center", justifyContent: "center" }, handle: size, disabled: { opacity: 0.5 } };
size = { width: 6, height: "100%", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { code: "(function SoundboardWaveformTrimHandlesTsx1(){let[startGestureBeginRatio,startRatio,lastNotifiedStartRatio]=this.__closure;startGestureBeginRatio.set(startRatio.get());lastNotifiedStartRatio.set(startRatio.get());})" };
let closure_13 = { code: "(function SoundboardWaveformTrimHandlesTsx2(event){let[startGestureBeginRatio,width,endRatio,MIN_RATIO_GAP,startRatio,lastNotifiedStartRatio,NOTIFY_STEP_RATIO,runOnJS,notify]=this.__closure;const next=Math.min(Math.max(startGestureBeginRatio.get()+event.translationX/width,0),endRatio.get()-MIN_RATIO_GAP);startRatio.set(next);if(Math.abs(next-lastNotifiedStartRatio.get())>=NOTIFY_STEP_RATIO){lastNotifiedStartRatio.set(next);runOnJS(notify)();}})" };
let closure_14 = { code: "(function SoundboardWaveformTrimHandlesTsx3(){let[runOnJS,notify]=this.__closure;runOnJS(notify)();})" };
let closure_15 = { code: "(function SoundboardWaveformTrimHandlesTsx4(){let[endGestureBeginRatio,endRatio,lastNotifiedEndRatio]=this.__closure;endGestureBeginRatio.set(endRatio.get());lastNotifiedEndRatio.set(endRatio.get());})" };
let closure_16 = { code: "(function SoundboardWaveformTrimHandlesTsx5(event){let[endGestureBeginRatio,width,startRatio,MIN_RATIO_GAP,endRatio,lastNotifiedEndRatio,NOTIFY_STEP_RATIO,runOnJS,notify]=this.__closure;const next=Math.max(Math.min(endGestureBeginRatio.get()+event.translationX/width,1),startRatio.get()+MIN_RATIO_GAP);endRatio.set(next);if(Math.abs(next-lastNotifiedEndRatio.get())>=NOTIFY_STEP_RATIO){lastNotifiedEndRatio.set(next);runOnJS(notify)();}})" };
let closure_17 = { code: "(function SoundboardWaveformTrimHandlesTsx6(){let[runOnJS,notify]=this.__closure;runOnJS(notify)();})" };
let closure_18 = { code: "(function SoundboardWaveformTrimHandlesTsx7(){let[startRatio,width,HANDLE_TOUCH_WIDTH]=this.__closure;return{left:startRatio.get()*width-HANDLE_TOUCH_WIDTH/2};})" };
let closure_19 = { code: "(function SoundboardWaveformTrimHandlesTsx8(){let[endRatio,width,HANDLE_TOUCH_WIDTH]=this.__closure;return{left:endRatio.get()*width-HANDLE_TOUCH_WIDTH/2};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/soundboard/native/creation/SoundboardWaveformTrimHandles.tsx");

export default function SoundboardWaveformTrimHandles(width) {
  let View2;
  let _undefined;
  let c9;
  let intl;
  let intl2;
  let items10;
  let items8;
  let items9;
  let obj10;
  let obj12;
  let obj13;
  let obj9;
  let range;
  let range1;
  let str;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp9;
  width = width.width;
  const startRatio = width.startRatio;
  const endRatio = width.endRatio;
  const onChange = width.onChange;
  let flag = width.disabled;
  const height = width.height;
  if (flag === undefined) {
    flag = false;
  }
  c9 = undefined;
  let tmp = closure_11();
  const tmp3 = endRatio;
  let obj = width(endRatio[7]);
  const sharedValue = obj.useSharedValue(0);
  const obj2 = width(endRatio[7]);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = width(endRatio[7]);
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = width(endRatio[7]);
  const sharedValue3 = obj4.useSharedValue(1);
  const obj5 = { start: startRatio.get(), end: endRatio.get() };
  const tmp8 = onChange(flag.useState(obj5), 2);
  [tmp9, c9] = tmp8;
  items = [onChange, startRatio, endRatio];
  const accessibilityActions = flag.useCallback(() => {
    const obj = { start: startRatio.get(), end: endRatio.get() };
    _undefined(obj);
    const value = startRatio.get();
    onChange(value, endRatio.get());
  }, items);
  let items1 = [width, flag, startRatio, endRatio, accessibilityActions, sharedValue, sharedValue2];
  let items2 = [width, flag, startRatio, endRatio, accessibilityActions, sharedValue1, sharedValue3];
  const memo = flag.useMemo(() => {
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    items = [closure_12, sharedValue, startRatio, sharedValue2];
    let c0;
    let c1;
    let c2;
    [tmp6, tmp7, tmp8, tmp9] = items;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!flag);
    class SoundboardWaveformTrimHandlesTsx1 {
      constructor() {
        result = closure_0.set(closure_1.get());
        result1 = closure_2.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    SoundboardWaveformTrimHandlesTsx1.__closure = items1;
    SoundboardWaveformTrimHandlesTsx1.__workletHash = 11006989108153;
    SoundboardWaveformTrimHandlesTsx1.__initData = tmp6;
    const items2 = [closure_13, sharedValue, width, endRatio, c8, startRatio, sharedValue2, closure_9, , ];
    const onUpdate = enabledResult.onBegin(SoundboardWaveformTrimHandlesTsx1).onUpdate;
    enabledResult.onBegin(SoundboardWaveformTrimHandlesTsx1);
    items2[8] = _mod1653.runOnJS;
    items2[9] = callback;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    c8 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
    class SoundboardWaveformTrimHandlesTsx2 {
      constructor(arg0) {
        min = Math.min;
        bound = Math.max(closure_0.get() + arg0.translationX / closure_1, 0);
        minResult = min(bound, closure_2.get() - closure_3);
        result = closure_4.set(minResult);
        obj = closure_5;
        if (Math.abs(minResult - closure_5.get()) >= closure_6) {
          result1 = obj.set(minResult);
          tmp5 = closure_7;
          tmp6 = closure_8;
          tmp7 = closure_7(closure_8)();
        }
        return;
      }
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
    SoundboardWaveformTrimHandlesTsx2.__closure = items3;
    SoundboardWaveformTrimHandlesTsx2.__workletHash = 284697789328;
    SoundboardWaveformTrimHandlesTsx2.__initData = tmp12;
    const items4 = [closure_14, , ];
    const onFinalize = onUpdate(SoundboardWaveformTrimHandlesTsx2).onFinalize;
    onUpdate(SoundboardWaveformTrimHandlesTsx2);
    items4[1] = _mod1653.runOnJS;
    items4[2] = callback;
    c0 = undefined;
    c1 = undefined;
    [tmp23, tmp24, tmp25] = items4;
    class SoundboardWaveformTrimHandlesTsx3 {
      constructor() {
        tmp = closure_0(closure_1)();
        return;
      }
    }
    const items5 = [tmp24, tmp25];
    SoundboardWaveformTrimHandlesTsx3.__closure = items5;
    SoundboardWaveformTrimHandlesTsx3.__workletHash = 17317174796525;
    SoundboardWaveformTrimHandlesTsx3.__initData = tmp23;
    return onFinalize(SoundboardWaveformTrimHandlesTsx3);
  }, items1);
  const memo1 = flag.useMemo(() => {
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp17;
    let tmp18;
    let tmp19;
    let tmp20;
    let tmp21;
    let tmp23;
    let tmp24;
    let tmp25;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    const Gesture = LegacyBaseButton.Gesture;
    items = [closure_15, sharedValue1, endRatio, sharedValue3];
    let c0;
    let c1;
    let c2;
    [tmp6, tmp7, tmp8, tmp9] = items;
    const PanResult = Gesture.Pan();
    const enabledResult = PanResult.enabled(!flag);
    class SoundboardWaveformTrimHandlesTsx4 {
      constructor() {
        result = closure_0.set(closure_1.get());
        result1 = closure_2.set(closure_1.get());
        return;
      }
    }
    const items1 = [tmp7, tmp8, tmp9];
    SoundboardWaveformTrimHandlesTsx4.__closure = items1;
    SoundboardWaveformTrimHandlesTsx4.__workletHash = 6600976471827;
    SoundboardWaveformTrimHandlesTsx4.__initData = tmp6;
    const items2 = [closure_16, sharedValue1, width, startRatio, c8, endRatio, sharedValue3, closure_9, , ];
    const onUpdate = enabledResult.onBegin(SoundboardWaveformTrimHandlesTsx4).onUpdate;
    enabledResult.onBegin(SoundboardWaveformTrimHandlesTsx4);
    items2[8] = _mod1653.runOnJS;
    items2[9] = callback;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    c8 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
    class SoundboardWaveformTrimHandlesTsx5 {
      constructor(arg0) {
        max = Math.max;
        bound = Math.min(closure_0.get() + arg0.translationX / closure_1, 1);
        maxResult = max(bound, closure_2.get() + closure_3);
        result = closure_4.set(maxResult);
        obj = closure_5;
        if (Math.abs(maxResult - closure_5.get()) >= closure_6) {
          result1 = obj.set(maxResult);
          tmp5 = closure_7;
          tmp6 = closure_8;
          tmp7 = closure_7(closure_8)();
        }
        return;
      }
    }
    const items3 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21];
    SoundboardWaveformTrimHandlesTsx5.__closure = items3;
    SoundboardWaveformTrimHandlesTsx5.__workletHash = 16740779483743;
    SoundboardWaveformTrimHandlesTsx5.__initData = tmp12;
    const items4 = [closure_17, , ];
    const onFinalize = onUpdate(SoundboardWaveformTrimHandlesTsx5).onFinalize;
    onUpdate(SoundboardWaveformTrimHandlesTsx5);
    items4[1] = _mod1653.runOnJS;
    items4[2] = callback;
    c0 = undefined;
    c1 = undefined;
    [tmp23, tmp24, tmp25] = items4;
    class SoundboardWaveformTrimHandlesTsx6 {
      constructor() {
        tmp = closure_0(closure_1)();
        return;
      }
    }
    const items5 = [tmp24, tmp25];
    SoundboardWaveformTrimHandlesTsx6.__closure = items5;
    SoundboardWaveformTrimHandlesTsx6.__workletHash = 14476732501160;
    SoundboardWaveformTrimHandlesTsx6.__initData = tmp23;
    return onFinalize(SoundboardWaveformTrimHandlesTsx6);
  }, items2);
  let items3 = [closure_18, startRatio, width, 44];
  let c0;
  let c1;
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items3;
  const obj6 = width(endRatio[7]);
  class SoundboardWaveformTrimHandlesTsx7 {
    constructor() {
      const obj = { left: _undefined.get() * c1 - c2 / 2 };
      return obj;
    }
  }
  let items4 = [tmp14, tmp15, tmp16];
  SoundboardWaveformTrimHandlesTsx7.__closure = items4;
  SoundboardWaveformTrimHandlesTsx7.__workletHash = 13043813667435;
  SoundboardWaveformTrimHandlesTsx7.__initData = tmp13;
  const animatedStyle = obj6.useAnimatedStyle(SoundboardWaveformTrimHandlesTsx7);
  let items5 = [closure_19, endRatio, width, 44];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp18, tmp19, tmp20, tmp21] = items5;
  const tmp2Result = width(tmp3[7]);
  class SoundboardWaveformTrimHandlesTsx8 {
    constructor() {
      const obj = { left: _undefined.get() * c1 - c2 / 2 };
      return obj;
    }
  }
  const items6 = [tmp19, tmp20, tmp21];
  SoundboardWaveformTrimHandlesTsx8.__closure = items6;
  SoundboardWaveformTrimHandlesTsx8.__workletHash = 15443910628516;
  SoundboardWaveformTrimHandlesTsx8.__initData = tmp18;
  const tmp24 = sharedValue;
  const items7 = [tmp.container, { width, height }, ];
  let disabled = null;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(SoundboardWaveformTrimHandlesTsx8);
  const tmp23 = sharedValue2;
  if (flag) {
    disabled = tmp.disabled;
  }
  const obj7 = { style: items7, pointerEvents: str, children: items9 };
  items7[2] = disabled;
  str = "box-none";
  if (flag) {
    str = "none";
  }
  const obj8 = { gesture: memo, children: sharedValue1(View, obj9) };
  const GestureDetector = tmp2(tmp3[8]).GestureDetector;
  obj9 = {
    style: items8,
    accessible: true,
    accessibilityRole: "adjustable",
    accessibilityLabel: intl.string(width(tmp3[9]).t["+BTvw8"]),
    accessibilityState: { disabled: flag },
    accessibilityValue: range,
    accessibilityActions,
    onAccessibilityAction: function handleStartAccessibilityAction(nativeEvent) {
      const tmp = flag;
      if (!tmp) {
        let tmp4;
        if ("increment" === nativeEvent.nativeEvent.actionName) {
          tmp4 = closure_9;
        } else {
          tmp4 = -closure_9;
        }
        const _Math = Math;
        const _Math2 = Math;
        set = startRatio.set;
        const bound = Math.max(startRatio.get() + tmp4, 0);
        const result = set(min(bound, endRatio.get() - c8));
        callback();
      }
    },
    children: sharedValue1(tmp24, obj10)
  };
  items8 = [tmp.touchTarget, animatedStyle];
  View = startRatio(tmp3[7]).View;
  intl = tmp2(tmp3[9]).intl;
  range = { min: 0, max: 100, now: Math.round(100 * tmp9.start) };
  obj10 = { style: tmp.handle };
  items9 = [sharedValue1(GestureDetector, obj8), ];
  const obj11 = { gesture: memo1, children: sharedValue1(View2, obj12) };
  const GestureDetector2 = tmp2(tmp3[8]).GestureDetector;
  obj12 = {
    style: items10,
    accessible: true,
    accessibilityRole: "adjustable",
    accessibilityLabel: intl2.string(width(tmp3[9]).t.bBgBYo),
    accessibilityState: { disabled: flag },
    accessibilityValue: range1,
    accessibilityActions,
    onAccessibilityAction: function handleEndAccessibilityAction(nativeEvent) {
      const tmp = flag;
      if (!tmp) {
        let tmp4;
        if ("increment" === nativeEvent.nativeEvent.actionName) {
          tmp4 = closure_9;
        } else {
          tmp4 = -closure_9;
        }
        const _Math = Math;
        const _Math2 = Math;
        set = endRatio.set;
        const bound = Math.min(endRatio.get() + tmp4, 1);
        const result = set(max(bound, startRatio.get() + c8));
        callback();
      }
    },
    children: sharedValue1(tmp24, obj13)
  };
  items10 = [tmp.touchTarget, animatedStyle1];
  View2 = startRatio(tmp3[7]).View;
  intl2 = tmp2(tmp3[9]).intl;
  range1 = { min: 0, max: 100, now: Math.round(100 * tmp9.end) };
  obj13 = { style: tmp.handle };
  items9[1] = sharedValue1(GestureDetector2, obj11);
  return tmp23(tmp24, obj7);
};
