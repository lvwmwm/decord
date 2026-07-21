// Module ID: 15916
// Function ID: 121999
// Name: NewMemberActionsCompleted
// Dependencies: []
// Exports: default

// Module 15916 (NewMemberActionsCompleted)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { screen: { <string:3971503320>: true, <string:1286199080>: 12.1, <string:2070009117>: 103, <string:1385664337>: "deferred_action", <string:1358141595>: "message", <string:2690879073>: "state", <string:1650808571>: 104, <string:3630407931>: "temp_banned" }, text: { marginBottom: 16 } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round, height: 8, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL, width: "60%" };
obj.progressBackground = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.progressForeground = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_330, borderRadius: importDefault(dependencyMap[4]).radii.round, height: 8 };
let closure_7 = obj.createStyles(obj);
let closure_8 = { code: "function NewMemberActionsCompletedModalTsx1(){const{withDelay,withTiming,barWidth}=this.__closure;return{width:withDelay(500,withTiming(barWidth.get()*100+\"%\",{duration:700}))};}" };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_330, borderRadius: importDefault(dependencyMap[4]).radii.round, height: 8 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsCompletedModal.tsx");

export default function NewMemberActionsCompleted(arg0) {
  let initialPercent;
  let numActions;
  ({ initialPercent, numActions } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(initialPercent);
  const arg1 = sharedValue;
  const items = [sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(1);
  }, items);
  let obj1 = arg1(dependencyMap[5]);
  const fn = function b() {
    const obj = {};
    const obj2 = sharedValue(closure_2[5]);
    obj.width = obj2.withDelay(500, sharedValue(closure_2[6]).withTiming(`${100 * closure_0.get()}%`, { duration: 700 }));
    return obj;
  };
  obj = { withDelay: arg1(dependencyMap[5]).withDelay, withTiming: arg1(dependencyMap[6]).withTiming, barWidth: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7643178959760;
  fn.__initData = closure_8;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect1 = React.useEffect(() => {
    const timerId = setTimeout(() => callback2(closure_2[7]).popWithKey(callback(closure_2[8]).NEW_MEMBER_ACTION_COMPLETE_MODAL_KEY), 2500);
  }, []);
  obj = { style: tmp.screen };
  obj1 = { "Null": -2136670206, "Null": -727908351, "Null": -1774059519, style: tmp.text };
  const intl = arg1(dependencyMap[10]).intl;
  obj1.children = intl.format(arg1(dependencyMap[10]).t.pGj5u2, { count: numActions });
  const items1 = [callback(arg1(dependencyMap[9]).Text, obj1), ];
  const items2 = [tmp.progressForeground, animatedStyle];
  items1[1] = callback(View, { style: tmp.progressBackground, children: callback(importDefault(dependencyMap[5]).View, { style: items2 }) });
  obj.children = items1;
  return callback2(View, obj);
};
