// Module ID: 16092
// Function ID: 124581
// Name: NewMemberActionsCompleted
// Dependencies: [31, 27, 33, 4130, 689, 3991, 4131, 4337, 11413, 4126, 1212, 2]
// Exports: default

// Module 16092 (NewMemberActionsCompleted)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, width: "60%" };
_createForOfIteratorHelperLoose.progressBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progressForeground = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_330, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_330, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 8 };
let result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let initialPercent;
  let numActions;
  ({ initialPercent, numActions } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj1 = sharedValue(3991);
  const fn = function b() {
    const obj = {};
    const obj2 = sharedValue(outer1_2[5]);
    obj.width = obj2.withDelay(500, sharedValue(outer1_2[6]).withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  obj = { withDelay: sharedValue(3991).withDelay, withTiming: sharedValue(4131).withTiming, barWidth: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7643178959760;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect1 = React.useEffect(() => {
    const timerId = setTimeout(() => outer2_1(outer2_2[7]).popWithKey(sharedValue(outer2_2[8]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  obj = { style: tmp.screen };
  obj1 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light" };
  const intl = sharedValue(1212).intl;
  obj1.children = intl.format(sharedValue(1212).t.pGj5u2, { count: numActions });
  const items1 = [callback(sharedValue(4126).Text, obj1), ];
  const items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = callback(View, { style: tmp.progressBackground, children: callback(importDefault(3991).View, { style: items2 }) });
  obj.children = items1;
  return callback2(View, obj);
};
