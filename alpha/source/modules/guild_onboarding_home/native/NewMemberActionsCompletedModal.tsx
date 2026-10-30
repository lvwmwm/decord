// Module ID: 19414
// Function ID: 19415
// Name: NewMemberActionsCompletedModal
// Dependencies: [19, 17, 21, 5009, 575, 5090, 5249, 6738, 7393, 5619, 1114, 2]
// Exports: default

// Module 19414 (NewMemberActionsCompletedModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

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
const __initData = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let initialPercent;
  let intl;
  let items1;
  let items2;
  let numActions;
  let obj7;
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = closure_7();
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj2 = sharedValue(5090);
  const fn = function b() {
    let obj2;
    let withDelay;
    const obj = { width: withDelay(500, obj2.withTiming(`${100 * sharedValue.get()}%`, { duration: 700 })) };
    withDelay = ReanimatedRexport.withDelay;
    ReanimatedRexport;
    obj2 = timing;
    return obj;
  };
  fn.__closure = { withDelay: sharedValue(5090).withDelay, withTiming: sharedValue(5249).withTiming, barWidth: sharedValue };
  fn.__workletHash = 7643178959760;
  fn.__initData = __initData;
  ({ withDelay: sharedValue(5090).withDelay, withTiming: sharedValue(5249).withTiming, barWidth: sharedValue });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect1 = react.useEffect(() => {
    const timerId = setTimeout(() => {
      const obj = closure_1_1(closure_1_2[7]);
      return obj.popWithKey(sharedValue(closure_1_2[8]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY);
    }, 2500);
  }, []);
  const obj4 = { style: tmp.screen, children: items1 };
  const obj5 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: intl.format(sharedValue(1114).t.pGj5u2, { count: numActions }) };
  const Text = sharedValue(5619).Text;
  intl = sharedValue(1114).intl;
  items1 = [closure_5(Text, obj5), ];
  const obj6 = { style: tmp.progressBackground, children: closure_5(ReanimatedRexportDefault.View, obj7) };
  obj7 = { style: items2 };
  items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = closure_5(View, obj6);
  return closure_6(View, obj4);
};
