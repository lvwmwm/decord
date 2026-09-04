// Module ID: 17291
// Function ID: 17292
// Name: NewMemberActionsCompleted
// Dependencies: [19, 17, 21, 4481, 709, 4218, 4482, 4731, 12217, 4477, 1233, 2]
// Exports: default

// Module 17291 (NewMemberActionsCompleted)
import ThemesDefault from "Themes" /* 709 */;
import _modDef4218 from "module_4218" /* 4218 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { screen: { flex: 1, position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.8)", display: "flex", alignItems: "center", justifyContent: "center" }, text: { marginBottom: 16 }, progressBackground: null, progressForeground: null };
createCacheKey = { borderRadius: ThemesDefault.radii.round, height: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL, width: "60%" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_330, borderRadius: ThemesDefault.radii.round, height: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let closure_8 = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
let obj1 = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_330, borderRadius: ThemesDefault.radii.round, height: 8 };
let result = require("set").fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let sharedValue;
  ({ initialPercent, numActions } = arg0);
  const tmp = callback3();
  let obj = sharedValue(4218);
  sharedValue = obj.useSharedValue(initialPercent);
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  obj1 = sharedValue(4218);
  const fn = function b() {
    const obj = { width: null };
    const obj2 = sharedValue(closure_1_2[5]);
    obj[0] = obj2.withDelay(500, sharedValue(closure_1_2[6]).withTiming(`${100 * sharedValue.get()}%`, { duration: 700 }));
    return obj;
  };
  obj = { withDelay: sharedValue(4218).withDelay, withTiming: sharedValue(4482).withTiming, barWidth: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7643178959760;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect1 = React.useEffect(() => {
    const timerId = setTimeout(() => callback2(4731).popWithKey(callback(12217).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  obj = { style: tmp.screen, children: null };
  obj1 = { style: tmp.text, variant: "heading-xl/semibold", color: "text-overlay-light", children: null };
  const intl = sharedValue(1233).intl;
  obj1[3] = intl.format(sharedValue(1233).t.pGj5u2, { count: numActions });
  const items1 = [callback(sharedValue(4477).Text, obj1), ];
  const items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = callback(View, { style: tmp.progressBackground, children: callback(_modDef4218.View, { style: items2 }) });
  obj[1] = items1;
  return callback2(View, obj);
};
