// Module ID: 19919
// Function ID: 19920
// Name: NewMemberActionsCompletedModal
// Dependencies: [19, 17, 21, 5170, 575, 1652, 5402, 6831, 7496, 5783, 1113, 2]
// Exports: default

// Module 19919 (NewMemberActionsCompletedModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: size, progressForeground: obj2 };
size = { borderRadius: nativeDefault.radii.round, height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_330, borderRadius: nativeDefault.radii.round, height: 8 };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function NewMemberActionsCompletedModalTsx1(){let[withDelay,withTiming,barWidth]=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let initialPercent;
  let intl;
  let items3;
  let items4;
  let numActions;
  let obj6;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [closure_8, , , ];
  const useAnimatedStyle = sharedValue(1652).useAnimatedStyle;
  sharedValue(1652);
  items1[1] = sharedValue(1652).withDelay;
  items1[2] = sharedValue(5402).withTiming;
  items1[3] = sharedValue;
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  const obj2 = react;
  class NewMemberActionsCompletedModalTsx1 {
    constructor() {
      const obj = { width: _undefined(500, _undefined2(`${100 * c2.get()}%`, { duration: 700 })) };
      return obj;
    }
  }
  const items2 = [tmp8, tmp9, tmp10];
  NewMemberActionsCompletedModalTsx1.__closure = items2;
  NewMemberActionsCompletedModalTsx1.__workletHash = 7122689544809;
  NewMemberActionsCompletedModalTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(NewMemberActionsCompletedModalTsx1);
  const effect1 = obj2.useEffect(() => {
    const timerId = setTimeout(() => {
      const obj = closure_1_1(closure_1_2[7]);
      return obj.popWithKey(sharedValue(closure_1_2[8]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
    }, 2500);
  }, []);
  const obj3 = { style: tmp.screen, children: items3 };
  const obj4 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: intl.format(sharedValue(1113).t.pGj5u2, { count: numActions }) };
  const Text = tmp2(5783).Text;
  intl = tmp2(1113).intl;
  items3 = [closure_5(Text, obj4), ];
  const obj5 = { style: tmp.progressBackground, children: closure_5(_modDef1652.View, obj6) };
  obj6 = { style: items4 };
  items4 = [tmp.progressForeground, animatedStyle];
  items3[1] = closure_5(View, obj5);
  return closure_6(View, obj3);
};
