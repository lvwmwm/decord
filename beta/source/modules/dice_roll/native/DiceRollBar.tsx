// Module ID: 11872
// Function ID: 11873
// Name: DiceRollBar
// Dependencies: [19, 17, 4825, 11441, 21, 4836, 576, 504, 4566, 4837, 1177, 11873, 8295, 4832, 2]
// Exports: default

// Module 11872 (DiceRollBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import DiceRollStore from "DiceRollStore" /* 11441 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set, set2;

let metroImportAll;
let metroImportDefault;
let obj2;
let View = react_native.View;
const useDiceRollState = DiceRollStore.useDiceRollState;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { animatedContainer: { overflow: "hidden" }, container: obj2 };
obj2 = { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 12, borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function DiceRollBarTsx1(){const{useReducedMotion,height,opacity,withTiming,ANIMATION_DURATION_MS,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get(),opacity:opacity.get()};}return{height:withTiming(height.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING}),opacity:withTiming(opacity.get(),{duration:ANIMATION_DURATION_MS,easing:DECELERATED_EASING})};}" };
const __initData2 = { code: "function DiceRollBarTsx2(){const{rotation}=this.__closure;return{transform:[{rotate:rotation.get()+\"deg\"}]};}" };
let result = size.fileFinishedImporting("modules/dice_roll/native/DiceRollBar.tsx");

export default function DiceRollBar(channelId) {
  let items3;
  let items4;
  let obj7;
  let stateFromStores;
  let sharedValue1;
  let flag;
  channelId = channelId.channelId;
  let tmp = closure_9();
  let tmp2 = useDiceRollState(channelId);
  const tmp3 = stateFromStores;
  let obj = stateFromStores(sharedValue1[7]);
  let items = [flag];
  stateFromStores = obj.useStateFromStores(items, () => flag.useReducedMotion);
  let obj2 = stateFromStores(sharedValue1[8]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = stateFromStores(sharedValue1[8]);
  sharedValue1 = obj3.useSharedValue(0);
  const obj4 = stateFromStores(sharedValue1[8]);
  const sharedValue2 = obj4.useSharedValue(0);
  let tmp9 = null != tmp2 && !tmp2.dismissing;
  let closure_4 = tmp9;
  flag = undefined;
  if (tmp2 != null) {
    flag = tmp2.rolling;
  }
  if (flag == null) {
    flag = false;
  }
  const items1 = [tmp9, sharedValue, sharedValue1];
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
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const obj = { duration: 800, easing: ReanimatedRexport.Easing.linear };
        const withTiming = timing.withTiming;
        timing;
        const result = set(withRepeat(withTiming(360, obj), -1, false));
      }
    }
    const result1 = sharedValue2.set(0);
  }, items2);
  const fn = function w() {
    let tmp9;
    const obj = { height: null, opacity: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      obj.opacity = sharedValue1.get();
      tmp9 = obj;
    } else {
      const withTiming = timing.withTiming;
      const obj2 = { duration: 300, easing: native.DECELERATED_EASING };
      timing;
      const value = sharedValue.get();
      obj.height = withTiming(value, obj2);
      const withTiming2 = timing.withTiming;
      const obj3 = { duration: 300, easing: native.DECELERATED_EASING };
      timing;
      const value2 = sharedValue1.get();
      obj.opacity = withTiming2(value2, obj3);
      tmp9 = obj;
    }
    return tmp9;
  };
  const tmp3Result = tmp3(sharedValue1[8]);
  fn.__closure = { useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: tmp3(sharedValue1[9]).withTiming, ANIMATION_DURATION_MS: 300, DECELERATED_EASING: tmp3(sharedValue1[10]).DECELERATED_EASING };
  fn.__workletHash = 2405066513233;
  fn.__initData = __initData;
  ({ useReducedMotion: stateFromStores, height: sharedValue, opacity: sharedValue1, withTiming: tmp3(sharedValue1[9]).withTiming, ANIMATION_DURATION_MS: 300, DECELERATED_EASING: tmp3(sharedValue1[10]).DECELERATED_EASING });
  const animatedStyle = tmp3Result.useAnimatedStyle(fn);
  tmp3(sharedValue1[8]);
  const fn2 = function p() {
    let items;
    const obj = { transform: items };
    items = [{ rotate: "" + sharedValue2.get() + "deg" }];
    ({ rotate: "" + sharedValue2.get() + "deg" });
    return obj;
  };
  fn2.__closure = { rotation: sharedValue2 };
  fn2.__workletHash = 12265072947874;
  fn2.__initData = __initData2;
  if (null == tmp2) {
    return null;
  } else {
    const tmp3Result4 = tmp3(sharedValue1[11]);
    const barText = tmp3Result4.getBarText(flag, tmp2.results);
    const obj6 = { style: items3, children: closure_8(closure_4, obj7) };
    items3 = [animatedStyle, tmp.animatedContainer];
    obj7 = { style: tmp.container, children: items4 };
    View = sharedValue(tmp4[8]).View;
    const obj8 = { style: tmp14, children: closure_7(tmp3(sharedValue1[12]).DiceIcon, { size: "md" }) };
    const View2 = sharedValue(tmp4[8]).View;
    items4 = [closure_7(View2, obj8), ];
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: barText };
    items4[1] = closure_7(tmp3(sharedValue1[13]).Text, obj9);
    return closure_7(View, obj6);
  }
};
