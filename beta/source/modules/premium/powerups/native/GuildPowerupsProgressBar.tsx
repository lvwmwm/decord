// Module ID: 15852
// Function ID: 15853
// Name: GuildPowerupsProgressBar
// Dependencies: [19, 17, 15853, 2067, 21, 576, 4566, 5293, 4836, 563, 15854, 15855, 4837, 11975, 6603, 1115, 2519, 8370, 4832, 6630, 2]
// Exports: default

// Module 15852 (GuildPowerupsProgressBar)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4837 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 11975 */;
import GuildBoostingProgressBarActionCreators from "GuildBoostingProgressBarActionCreators" /* 15855 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildBoostingProgressBarPersistedStore from "GuildBoostingProgressBarPersistedStore" /* 15853 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set, set2;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const colors = ["rgba(255, 115, 250, 0.4)", "rgba(255, 115, 250, 0.1)"];
let result = 2 * nativeDefault.space.PX_4;
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let createStyles = createStyles_mod;
let obj = { container: obj2, track: obj3, fillContainer: obj4, fill: obj5, fillShadow: { shadowColor: "rgba(0, 0, 0, 0.14)", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 4, elevation: 2 }, textContainer: obj6, headerText: { flexShrink: 1 }, rightContent: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, descriptionText: { flexShrink: 1, opacity: 0.7 } };
obj2 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { height: 30, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, justifyContent: "center" };
obj4 = { padding: 2 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { height: "100%", minWidth: 26, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: "rgba(255, 115, 250, 0.2)", overflow: "hidden" };
obj6 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const __initData = { code: "function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
const result1 = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default function GuildPowerupsProgressBar(guildId) {
  let combined;
  let formatToPlainStringResult;
  let intl3;
  let items10;
  let items7;
  let items8;
  let items9;
  let obj7;
  let obj9;
  guildId = guildId.guildId;
  let stateFromStores1;
  let num;
  let num2;
  let sharedValue;
  let sharedValue1;
  let tmp = closure_11();
  const tmp3 = num;
  let obj = guildId(num[9]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp6 = stateFromStores1(num[10])(stateFromStores);
  let obj2 = guildId(num[9]);
  const items2 = [sharedValue1];
  const items3 = [guildId];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
    if (num == null) {
      num = 0;
    }
    return num;
  }, items3);
  num = undefined;
  if (stateFromStores != null) {
    num = stateFromStores.premiumSubscriberCount;
  }
  if (num == null) {
    num = 0;
  }
  const items4 = [guildId, stateFromStores1, num];
  const effect = num2.useEffect(() => {
    if (stateFromStores1 !== num) {
      const obj = GuildBoostingProgressBarActionCreators;
      const result = obj.updateGuildPremiumSubscriptionCount(guildId, tmp);
    }
  }, items4);
  num2 = 0;
  if (tmp6 > 0) {
    const _Math = Math;
    num2 = Math.min(stateFromStores1 / tmp6 * 100, 100);
  }
  const tmp2Result = guildId(tmp3[6]);
  sharedValue = tmp2Result.useSharedValue(num2);
  let num4 = 0;
  const useSharedValue = tmp2(tmp3[6]).useSharedValue;
  guildId(tmp3[6]);
  if (num2 > 0) {
    num4 = 1;
  }
  sharedValue1 = useSharedValue(num4);
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = obj3.useEffect(() => {
    set = sharedValue.set;
    let obj = timing;
    const result = set(obj.withTiming(num2, { duration: 500 }));
    num = 0;
    set2 = sharedValue1.set;
    const withTiming = timing.withTiming;
    timing;
    if (num2 > 0) {
      num = 1;
    }
    set2(withTiming(num, { duration: 500 }));
    return () => {
      const obj = guildId(num[6]);
      obj.cancelAnimation(sharedValue);
      const obj2 = guildId(num[6]);
      obj2.cancelAnimation(sharedValue1);
    };
  }, items5);
  const tmp2Result4 = guildId(tmp3[6]);
  class T {
    constructor() {
      const obj = { width: "" + sharedValue.get() + "%", opacity: sharedValue1.get() };
      return obj;
    }
  }
  T.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  T.__workletHash = 6718232104000;
  T.__initData = __initData;
  const items6 = [guildId];
  const animatedStyle = tmp2Result4.useAnimatedStyle(T);
  const callback = obj3.useCallback(() => {
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_BOOSTING_SIDEBAR_DISPLAY };
    const tmp = openGuildPowerupsModalDefault;
    tmp(obj);
  }, items6);
  if (stateFromStores1 >= tmp6) {
    const intl2 = tmp2(tmp3[15]).intl;
    const obj4 = { appliedBoostCount: stateFromStores1 };
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[16])["Ehpq+7"], obj4);
  } else {
    const intl = tmp2(tmp3[15]).intl;
    const obj5 = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp3[16])["/rbPDs"], obj5);
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl3.string(stateFromStores1(tmp3[16]).NI6Ihe), accessibilityValue: { text: formatToPlainStringResult }, onPress: callback, style: tmp.container, children: closure_8(sharedValue, obj7) };
  const PressableScale = tmp2(tmp3[17]).PressableScale;
  intl3 = tmp2(tmp3[15]).intl;
  obj7 = { style: tmp.track, children: items8 };
  const obj8 = { style: tmp.fillContainer, children: closure_7(LinearGradient, obj9) };
  obj9 = { style: items7, colors, useAngle: true, angle: 270 };
  items7 = [, , ];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  items8 = [closure_7(sharedValue, obj8), ];
  const obj10 = { style: tmp.textContainer, children: items9 };
  const obj11 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.headerText, children: combined };
  const Text = tmp2(tmp3[18]).Text;
  if (num >= tmp6) {
    const intl5 = tmp2(tmp3[15]).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl5.string(tmp5(tmp3[16]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = tmp2(tmp3[15]).intl;
    combined = intl4.string(tmp5(tmp3[16]).NI6Ihe);
  }
  items9 = [closure_7(Text, obj11), ];
  const obj12 = { style: tmp.rightContent, children: items10 };
  items10 = [, ];
  const obj13 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.descriptionText, children: formatToPlainStringResult };
  items10[0] = closure_7(guildId(tmp3[18]).Text, obj13);
  const obj14 = { size: "sm", color: stateFromStores1(tmp3[5]).colors.TEXT_DEFAULT };
  const ChevronSmallRightIcon = tmp2(tmp3[19]).ChevronSmallRightIcon;
  items10[1] = closure_7(ChevronSmallRightIcon, obj14);
  items9[1] = closure_8(sharedValue, obj12);
  items8[1] = closure_8(sharedValue, obj10);
  return closure_7(PressableScale, obj6);
};
export const BOOST_PROGRESS_BAR_HEIGHT = result + 30;
