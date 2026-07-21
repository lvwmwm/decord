// Module ID: 14917
// Function ID: 112320
// Name: GuildPowerupsProgressBar
// Dependencies: []
// Exports: default

// Module 14917 (GuildPowerupsProgressBar)
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = [];
const result = 2 * importDefault(dependencyMap[5]).space.PX_4;
const tmp3 = arg1(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[6]).createAnimatedComponent(importDefault(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { paddingVertical: importDefault(dependencyMap[5]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
obj1 = { height: 30, borderRadius: importDefault(dependencyMap[5]).radii.round, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_NORMAL, justifyContent: "center" };
obj.track = obj1;
const obj2 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj2["padding"] = 2;
obj.fillContainer = obj2;
const obj3 = { "Bool(true)": -2130705821, "Bool(true)": 16777670, "Bool(true)": 48, "Bool(true)": 12, "Bool(true)": 0, "Bool(true)": 150, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.fill = obj3;
obj.fillShadow = { shadowOffset: {} };
const obj4 = { bottom: "<string:3435973836>", left: "<string:1903247380>", padding: "r", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.textContainer = obj4;
obj.rightContent = {};
let closure_11 = obj1.createStyles(obj);
let closure_12 = { code: "function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
const importDefaultResult = importDefault(dependencyMap[6]);
const result1 = arg1(dependencyMap[20]).fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default function GuildPowerupsProgressBar(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let dependencyMap;
  let React;
  let View;
  let closure_5;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId), items1);
  const tmp3 = importDefault(dependencyMap[10])(stateFromStores);
  let obj1 = arg1(dependencyMap[9]);
  const items2 = [closure_5];
  const items3 = [guildId];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    const countForGuild = sharedValue1.getCountForGuild(guildId);
    let num = 0;
    if (null != countForGuild) {
      num = countForGuild;
    }
    return num;
  }, items3);
  const importDefault = stateFromStores1;
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.premiumSubscriberCount;
  }
  let num = 0;
  if (null != prop) {
    num = prop;
  }
  dependencyMap = num;
  const items4 = [guildId, stateFromStores1, num];
  const effect = React.useEffect(() => {
    if (stateFromStores1 !== num) {
      const result = guildId(11[11]).updateGuildPremiumSubscriptionCount(guildId, num);
      const obj = guildId(11[11]);
    }
  }, items4);
  let num2 = 0;
  if (tmp3 > 0) {
    const _Math = Math;
    num2 = Math.min(stateFromStores1 / tmp3 * 100, 100);
  }
  React = num2;
  let obj2 = arg1(dependencyMap[6]);
  const sharedValue = obj2.useSharedValue(num2);
  View = sharedValue;
  let obj3 = arg1(dependencyMap[6]);
  let num4 = 0;
  if (num2 > 0) {
    num4 = 1;
  }
  const sharedValue1 = obj3.useSharedValue(num4);
  closure_5 = sharedValue1;
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = React.useEffect(() => {
    const result = sharedValue.set(guildId(num[12]).withTiming(num2, { duration: 500 }));
    const obj = guildId(num[12]);
    let num = 0;
    if (num2 > 0) {
      num = 1;
    }
    const result1 = sharedValue1.set(guildId(num[12]).withTiming(num, { duration: 500 }));
    return () => {
      callback(closure_2[6]).cancelAnimation(closure_4);
      const obj = callback(closure_2[6]);
      callback(closure_2[6]).cancelAnimation(closure_5);
    };
  }, items5);
  let obj4 = arg1(dependencyMap[6]);
  const fn = function v() {
    return { width: "" + sharedValue.get() + "%", opacity: sharedValue1.get() };
  };
  fn.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  fn.__workletHash = 6718232104000;
  fn.__initData = closure_12;
  const items6 = [guildId];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const callback = React.useCallback(() => {
    const obj = { guildId, analyticsLocation: stateFromStores1(num[14]).GUILD_BOOSTING_SIDEBAR_DISPLAY };
    stateFromStores1(num[13])(obj);
  }, items6);
  if (stateFromStores1 >= tmp3) {
    const intl2 = arg1(dependencyMap[15]).intl;
    obj = { appliedBoostCount: stateFromStores1 };
    let formatToPlainStringResult = intl2.formatToPlainString(importDefault(dependencyMap[16]).Ehpq+7, obj);
  } else {
    const intl = arg1(dependencyMap[15]).intl;
    obj = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp3 };
    formatToPlainStringResult = intl.formatToPlainString(importDefault(dependencyMap[16])./rbPDs, obj);
  }
  obj1 = { accessibilityRole: "button" };
  const intl3 = arg1(dependencyMap[15]).intl;
  obj1.accessibilityLabel = intl3.string(importDefault(dependencyMap[16]).NI6Ihe);
  obj1.onPress = callback;
  obj1.style = tmp.container;
  obj2 = { style: tmp.track };
  obj3 = { style: tmp.fillContainer, children: callback(closure_10, obj4) };
  obj4 = { style: items7, colors: closure_9, useAngle: true, angle: 270 };
  const items7 = [, , ];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  const items8 = [callback(View, obj3), ];
  const obj5 = { style: tmp.textContainer };
  const obj6 = {};
  if (num >= tmp3) {
    const intl5 = arg1(dependencyMap[15]).intl;
    const _HermesInternal = HermesInternal;
    let combined = "" + intl5.string(importDefault(dependencyMap[16]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = arg1(dependencyMap[15]).intl;
    combined = intl4.string(importDefault(dependencyMap[16]).NI6Ihe);
  }
  obj6.children = combined;
  const items9 = [callback(arg1(dependencyMap[18]).Text, obj6), ];
  const obj7 = { style: tmp.rightContent };
  const obj8 = { style: { opacity: 0.7 }, children: formatToPlainStringResult };
  const items10 = [callback(arg1(dependencyMap[18]).Text, obj8), ];
  const obj9 = { size: "sm", color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
  items10[1] = callback(arg1(dependencyMap[19]).ChevronSmallRightIcon, obj9);
  obj7.children = items10;
  items9[1] = callback2(View, obj7);
  obj5.children = items9;
  items8[1] = callback2(View, obj5);
  obj2.children = items8;
  obj1.children = callback2(View, obj2);
  return callback(arg1(dependencyMap[17]).PressableScale, obj1);
};
export const BOOST_PROGRESS_BAR_HEIGHT = result + 30;
