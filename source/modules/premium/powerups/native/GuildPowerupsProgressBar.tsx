// Module ID: 15091
// Function ID: 114886
// Name: GuildPowerupsProgressBar
// Dependencies: [31, 27, 15092, 1838, 33, 689, 3991, 4554, 4130, 624, 15093, 15094, 4131, 11542, 5482, 1212, 2230, 8416, 4126, 5512, 2]
// Exports: default

// Module 15091 (GuildPowerupsProgressBar)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_7;
let closure_8;
const require = arg1;
const View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = ["rgba(255, 115, 250, 0.4)", "rgba(255, 115, 250, 0.1)"];
let result = 2 * require("_createForOfIteratorHelperLoose").space.PX_4;
let obj = {};
obj = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
_createForOfIteratorHelperLoose = { height: 30, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, justifyContent: "center" };
obj.track = _createForOfIteratorHelperLoose;
let obj2 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj2["padding"] = 2;
obj.fillContainer = obj2;
let obj3 = { height: "100%", minWidth: 26, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1, borderColor: "rgba(255, 115, 250, 0.2)", overflow: "hidden" };
obj.fill = obj3;
let obj4 = { shadowColor: "rgba(0, 0, 0, 0.14)", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2 };
obj.fillShadow = obj4;
let obj5 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.textContainer = obj5;
obj.rightContent = { flexDirection: "row", alignItems: "center" };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
let result1 = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default function GuildPowerupsProgressBar(guildId) {
  guildId = guildId.guildId;
  let num;
  let num2;
  let sharedValue;
  let sharedValue1;
  const tmp = callback3();
  let obj = guildId(num[9]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId), items1);
  const tmp3 = stateFromStores1(num[10])(stateFromStores);
  let obj1 = guildId(num[9]);
  const items2 = [sharedValue1];
  const items3 = [guildId];
  stateFromStores1 = obj1.useStateFromStores(items2, () => {
    const countForGuild = sharedValue1.getCountForGuild(guildId);
    let num = 0;
    if (null != countForGuild) {
      num = countForGuild;
    }
    return num;
  }, items3);
  let prop;
  if (null != stateFromStores) {
    prop = stateFromStores.premiumSubscriberCount;
  }
  num = 0;
  if (null != prop) {
    num = prop;
  }
  const items4 = [guildId, stateFromStores1, num];
  const effect = num2.useEffect(() => {
    if (stateFromStores1 !== num) {
      const result = guildId(11[11]).updateGuildPremiumSubscriptionCount(guildId, num);
      const obj = guildId(11[11]);
    }
  }, items4);
  num2 = 0;
  if (tmp3 > 0) {
    const _Math = Math;
    num2 = Math.min(stateFromStores1 / tmp3 * 100, 100);
  }
  let obj2 = guildId(num[6]);
  sharedValue = obj2.useSharedValue(num2);
  let obj3 = guildId(num[6]);
  let num4 = 0;
  if (num2 > 0) {
    num4 = 1;
  }
  sharedValue1 = obj3.useSharedValue(num4);
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = num2.useEffect(() => {
    const result = sharedValue.set(guildId(num[12]).withTiming(num2, { duration: 500 }));
    let obj = guildId(num[12]);
    num = 0;
    if (num2 > 0) {
      num = 1;
    }
    const result1 = sharedValue1.set(guildId(num[12]).withTiming(num, { duration: 500 }));
    return () => {
      guildId(num[6]).cancelAnimation(outer1_4);
      const obj = guildId(num[6]);
      guildId(num[6]).cancelAnimation(outer1_5);
    };
  }, items5);
  let obj4 = guildId(num[6]);
  const fn = function v() {
    return { width: "" + sharedValue.get() + "%", opacity: sharedValue1.get() };
  };
  fn.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  fn.__workletHash = 6718232104000;
  fn.__initData = closure_12;
  const items6 = [guildId];
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const callback = num2.useCallback(() => {
    const obj = { guildId, analyticsLocation: stateFromStores1(num[14]).GUILD_BOOSTING_SIDEBAR_DISPLAY };
    stateFromStores1(num[13])(obj);
  }, items6);
  if (stateFromStores1 >= tmp3) {
    const intl2 = guildId(num[15]).intl;
    obj = { appliedBoostCount: stateFromStores1 };
    let formatToPlainStringResult = intl2.formatToPlainString(stateFromStores1(num[16])["Ehpq+7"], obj);
  } else {
    const intl = guildId(num[15]).intl;
    obj = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp3 };
    formatToPlainStringResult = intl.formatToPlainString(stateFromStores1(num[16])["/rbPDs"], obj);
  }
  obj1 = { accessibilityRole: "button" };
  const intl3 = guildId(num[15]).intl;
  obj1.accessibilityLabel = intl3.string(stateFromStores1(num[16]).NI6Ihe);
  obj1.onPress = callback;
  obj1.style = tmp.container;
  obj2 = { style: tmp.track };
  obj3 = { style: tmp.fillContainer, children: callback(LinearGradient, obj4) };
  obj4 = { style: items7, colors: closure_9, useAngle: true, angle: 270 };
  items7 = [, , ];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  const items8 = [callback(sharedValue, obj3), ];
  const obj5 = { style: tmp.textContainer };
  const obj6 = { variant: "text-xs/semibold", color: "text-default" };
  if (num >= tmp3) {
    const intl5 = guildId(num[15]).intl;
    const _HermesInternal = HermesInternal;
    let combined = "" + intl5.string(stateFromStores1(num[16]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = guildId(num[15]).intl;
    combined = intl4.string(stateFromStores1(num[16]).NI6Ihe);
  }
  obj6.children = combined;
  const items9 = [callback(guildId(num[18]).Text, obj6), ];
  const obj7 = { style: tmp.rightContent };
  const obj8 = { variant: "text-xs/semibold", color: "text-default", style: { opacity: 0.7 }, children: formatToPlainStringResult };
  const items10 = [callback(guildId(num[18]).Text, obj8), ];
  const obj9 = { size: "sm", color: stateFromStores1(num[5]).colors.TEXT_DEFAULT };
  items10[1] = callback(guildId(num[19]).ChevronSmallRightIcon, obj9);
  obj7.children = items10;
  items9[1] = callback2(sharedValue, obj7);
  obj5.children = items9;
  items8[1] = callback2(sharedValue, obj5);
  obj2.children = items8;
  obj1.children = callback2(sharedValue, obj2);
  return callback(guildId(num[17]).PressableScale, obj1);
};
export const BOOST_PROGRESS_BAR_HEIGHT = result + 30;
