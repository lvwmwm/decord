// Module ID: 15011
// Function ID: 113103
// Name: ForYouMentionPlaceholder
// Dependencies: []
// Exports: ForYouMentionPlaceholder

// Module 15011 (ForYouMentionPlaceholder)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { placeholder: {} };
obj = { "Bool(true)": 43429592153108390000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 13340730698059850000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050927898995, "Bool(true)": -59845937205215580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002775203530023864, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.placeholderImage = obj;
const obj1 = { INITIALIZED: null, getTextChannels: 14, EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS: null, paddingVertical: "\u{1FAF0}\u{1F3FC}", paddingLeft: true, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.placeholderText = obj1;
obj.placeholderTextContainer = { APP_DMS_ENTRY_POINT_COMMAND_BUTTON: null, desert: null };
const tmp3 = arg1(dependencyMap[3]);
obj.placeholderBody = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: importDefault(dependencyMap[5]).radii.sm, marginTop: 4 };
let closure_7 = obj.createStyles(obj);
let closure_8 = [false, false];
let closure_9 = { code: "function ForYouMentionPlaceholderTsx1(){const{reducedMotion,opacity}=this.__closure;return{opacity:reducedMotion?0.7:opacity.get()};}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG, height: 40, borderRadius: importDefault(dependencyMap[5]).radii.sm, marginTop: 4 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/notification_center/native/ForYouMentionPlaceholder.tsx");

export const ForYouMentionPlaceholder = function ForYouMentionPlaceholder() {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[7]);
  const sharedValue = obj1.useSharedValue(0.3);
  const dependencyMap = sharedValue;
  let obj3 = arg1(dependencyMap[7]);
  obj = { duration: 1000 };
  const Easing = arg1(dependencyMap[7]).Easing;
  obj.easing = Easing.inOut(arg1(dependencyMap[7]).Easing.ease);
  const result = sharedValue.set(obj3.withRepeat(arg1(dependencyMap[8]).withTiming(0.7, obj), -1, true));
  const obj5 = arg1(dependencyMap[8]);
  const fn = function y() {
    const obj = {};
    let num = 0.7;
    if (!stateFromStores) {
      num = sharedValue.get();
    }
    obj.opacity = num;
    return obj;
  };
  fn.__closure = { reducedMotion: stateFromStores, opacity: sharedValue };
  fn.__workletHash = 8828208724188;
  fn.__initData = closure_9;
  const animatedStyle = arg1(dependencyMap[7]).useAnimatedStyle(fn);
  obj = { style: items1 };
  const items1 = [tmp.placeholder, animatedStyle];
  obj1 = { style: tmp.placeholderImage };
  const items2 = [callback(View, obj1), ];
  const obj2 = {};
  obj3 = {
    style: tmp.placeholderTextContainer,
    children: closure_8.map((arg0, arg1) => {
      let obj = {};
      const items = [tmp.placeholderText, ];
      obj = { width: "" + arg0 + "%" };
      items[1] = obj;
      obj.style = items;
      return callback(closure_3, obj, arg1);
    })
  };
  const items3 = [callback(View, obj3), ];
  const items4 = [tmp.placeholderBody, { width: "85%" }];
  items3[1] = callback(View, { style: items4 });
  obj2.children = items3;
  items2[1] = callback2(View, obj2);
  obj.children = items2;
  return callback2(importDefault(dependencyMap[7]).View, obj);
};
