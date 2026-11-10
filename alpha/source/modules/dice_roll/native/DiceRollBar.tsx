// Module ID: 14202
// Function ID: 14203
// Name: DiceRollBar
// Dependencies: [19, 17, 5143, 13981, 21, 5142, 575, 504, 1652, 5372, 1187, 14203, 9619, 5753, 2]
// Exports: default

// Module 14202 (DiceRollBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import DiceRollStore from "DiceRollStore" /* 13981 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let duration, set, set2;

let metroImportAll;
let metroImportDefault;
let obj2;
let View = react_native.View;
const useDiceRollState = DiceRollStore.useDiceRollState;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { animatedContainer: { overflow: "hidden" }, container: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { code: "(function DiceRollBarTsx1(){let[useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};})" };
let closure_11 = { code: "(function DiceRollBarTsx2(){let[rotation]=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};})" };
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let closure_4;
  let items7;
  let items8;
  let obj6;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp22;
  let tmp23;
  let stateFromStores;
  let sharedValue1;
  let flag;
  channelId = channelId.channelId;
  let tmp = closure_9();
  let tmp2 = useDiceRollState(channelId);
  let obj = stateFromStores(sharedValue1[7]);
  let items = [flag];
  stateFromStores = obj.useStateFromStores(items, () => flag.useReducedMotion);
  let obj2 = stateFromStores(sharedValue1[8]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[8]);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = stateFromStores(sharedValue1[8]);
  const sharedValue2 = obj4.useSharedValue(0);
  duration = tmp9;
  flag = undefined;
  if (tmp2 != null) {
    flag = tmp2.rolling;
  }
  if (flag == null) {
    flag = false;
  }
  const items1 = [null != tmp2 && !tmp2.dismissing, sharedValue, sharedValue1];
  const effect = sharedValue2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (closure_4) {
      num = 56;
    }
    const result = set(num);
    let num2 = 0;
    set2 = sharedValue1.set;
    if (closure_4) {
      num2 = 1;
    }
    set2(num2);
  }, items1);
  const items2 = [flag, stateFromStores, sharedValue2];
  const effect1 = sharedValue2.useEffect(() => {
    const tmp = flag;
    if (tmp) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        set = sharedValue2.set;
        const withRepeat = _mod1652.withRepeat;
        _mod1652;
        const obj = { duration: 800, easing: _mod1652.Easing.linear };
        const withTiming = timing_timing.withTiming;
        timing_timing;
        const result = set(withRepeat(withTiming(360, obj), -1, false));
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  const items3 = [closure_10, stateFromStores, sharedValue, sharedValue1, , , ];
  const useAnimatedStyle = tmp3(tmp4[8]).useAnimatedStyle;
  stateFromStores(sharedValue1[8]);
  items3[4] = stateFromStores(sharedValue1[9]).withTiming;
  items3[5] = 300;
  items3[6] = stateFromStores(sharedValue1[10]).DECELERATED_EASING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items3;
  class DiceRollBarTsx1 {
    constructor() {
      let tmp6;
      const obj = { height: null, opacity: null };
      if (c0) {
        obj.height = _undefined.get();
        obj.opacity = _undefined2.get();
        tmp6 = obj;
      } else {
        const obj2 = { duration, easing };
        obj.height = _undefined3(_undefined.get(), obj2);
        const obj3 = { duration, easing };
        obj.opacity = _undefined3(_undefined2.get(), obj3);
        tmp6 = obj;
      }
      return tmp6;
    }
  }
  const items4 = [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  DiceRollBarTsx1.__closure = items4;
  DiceRollBarTsx1.__workletHash = 2869558544264;
  DiceRollBarTsx1.__initData = tmp13;
  const animatedStyle = useAnimatedStyle(DiceRollBarTsx1);
  stateFromStores(sharedValue1[8]);
  const items5 = [closure_11, sharedValue2];
  c0 = undefined;
  [tmp22, tmp23] = items5;
  class DiceRollBarTsx2 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ rotate: "" + _undefined.get() + "deg" }];
      ({ rotate: "" + _undefined.get() + "deg" });
      return obj;
    }
  }
  const items6 = [tmp23];
  DiceRollBarTsx2.__closure = items6;
  DiceRollBarTsx2.__workletHash = 8268904051195;
  DiceRollBarTsx2.__initData = tmp22;
  if (null == tmp2) {
    return null;
  } else {
    const tmp3Result4 = stateFromStores(sharedValue1[11]);
    const barText = tmp3Result4.getBarText(flag, tmp2.results);
    const obj5 = { style: items7, children: closure_8(duration, obj6) };
    items7 = [animatedStyle, tmp.animatedContainer];
    obj6 = { style: tmp.container, children: items8 };
    const View = sharedValue(tmp4[8]).View;
    const obj7 = { style: tmp24, children: closure_7(stateFromStores(sharedValue1[12]).DiceIcon, { size: "md" }) };
    const View2 = sharedValue(tmp4[8]).View;
    items8 = [closure_7(View2, obj7), ];
    const obj8 = { variant: "body-sm/normal", color: "text-default", children: barText };
    items8[1] = closure_7(stateFromStores(sharedValue1[13]).Text, obj8);
    return closure_7(View, obj5);
  }
};
