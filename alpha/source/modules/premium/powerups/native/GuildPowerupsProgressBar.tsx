// Module ID: 16569
// Function ID: 16570
// Name: GuildPowerupsProgressBar
// Dependencies: [19, 17, 16570, 2086, 21, 587, 4811, 5388, 5091, 558, 576, 573, 16571, 16572, 5092, 12171, 6872, 1126, 2597, 5087, 6899, 8525, 2]

// Module 16569 (GuildPowerupsProgressBar)
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 5092 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12171 */;
import GuildBoostingProgressBarActionCreators from "GuildBoostingProgressBarActionCreators" /* 16572 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildBoostingProgressBarPersistedStore from "GuildBoostingProgressBarPersistedStore" /* 16570 */;
import GuildStore from "GuildStore" /* 2086 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, set, set2;

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
let c10 = 500;
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
let closure_12 = createStyles(obj);
let closure_13 = { code: "function GuildPowerupsProgressBarTsx1(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
const __initData = { code: "function GuildPowerupsProgressBarTsx2(){const{animatedFillPercent,animatedFillOpacity}=this.__closure;return{width:animatedFillPercent.get()+\"%\",opacity:animatedFillOpacity.get()};}" };
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsProgressBar(guildId) {
  let c2;
  let duration;
  let first;
  let stateFromStores1;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(59);
  guildId = guildId.guildId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  stateFromStores1(16571)(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildBoostingProgressBarPersistedStore];
    cResult[4] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class I {
      constructor() {
        let num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
    const items3 = [guildId];
    cResult[5] = guildId;
    cResult[6] = I;
    cResult[7] = items3;
    tmp14 = items3;
    tmp13 = I;
  } else {
    class I {
      constructor() {
        let num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult2 = tmp(573);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13, tmp14);
  if (stateFromStores != null) {
    class I {
      constructor() {
        let num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
  }
  if (undefined == null) {
    class I {
      constructor() {
        let num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
  }
  dependencyMap = tmp16;
  if (cResult[8] === stateFromStores1) {
    class I {
      constructor() {
        let num = GuildBoostingProgressBarPersistedStore.getCountForGuild(guildId);
        if (num == null) {
          num = 0;
        }
        return num;
      }
    }
  }
  class A {
    constructor() {
      if (stateFromStores1 !== c2) {
        const obj = GuildBoostingProgressBarActionCreators;
        const result = obj.updateGuildPremiumSubscriptionCount(guildId, tmp);
      }
    }
  }
  const items4 = [guildId, stateFromStores1, undefined];
  cResult[8] = stateFromStores1;
  cResult[9] = guildId;
  cResult[10] = undefined;
  cResult[11] = A;
  cResult[12] = items4;
}) : (function GuildPowerupsProgressBar(guildId) {
  let combined;
  let duration;
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
  let tmp = closure_12();
  let obj = guildId(num[11]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp6 = stateFromStores1(num[12])(stateFromStores);
  let obj2 = guildId(num[11]);
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
  const tmp2Result = guildId(num[6]);
  sharedValue = tmp2Result.useSharedValue(num2);
  let num4 = 0;
  const useSharedValue = tmp2(tmp3[6]).useSharedValue;
  guildId(num[6]);
  if (num2 > 0) {
    num4 = 1;
  }
  sharedValue1 = useSharedValue(num4);
  const items5 = [sharedValue, sharedValue1, num2];
  const effect1 = obj3.useEffect(() => {
    set = sharedValue.set;
    let obj = timing;
    let obj2 = { duration };
    const result = set(obj.withTiming(num2, obj2));
    num = 0;
    set2 = sharedValue1.set;
    const withTiming = timing.withTiming;
    timing;
    const tmp = duration;
    if (num2 > 0) {
      num = 1;
    }
    set2(withTiming(num, { duration: tmp }));
    return () => {
      const obj = guildId(num[6]);
      obj.cancelAnimation(sharedValue);
      const obj2 = guildId(num[6]);
      obj2.cancelAnimation(sharedValue1);
    };
  }, items5);
  const tmp2Result4 = guildId(num[6]);
  class F {
    constructor() {
      const obj = { width: "" + sharedValue.get() + "%", opacity: sharedValue1.get() };
      return obj;
    }
  }
  F.__closure = { animatedFillPercent: sharedValue, animatedFillOpacity: sharedValue1 };
  F.__workletHash = 3044920745091;
  F.__initData = __initData;
  const items6 = [guildId];
  const animatedStyle = tmp2Result4.useAnimatedStyle(F);
  const callback = obj3.useCallback(() => {
    const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_BOOSTING_SIDEBAR_DISPLAY };
    const tmp = openGuildPowerupsModalDefault;
    tmp(obj);
  }, items6);
  if (stateFromStores1 >= tmp6) {
    const intl2 = tmp2(tmp3[17]).intl;
    const obj4 = { appliedBoostCount: stateFromStores1 };
    formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp3[18])["Ehpq+7"], obj4);
  } else {
    const intl = tmp2(tmp3[17]).intl;
    const obj5 = { appliedBoostCount: stateFromStores1, maxBoostCount: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(tmp5(tmp3[18])["/rbPDs"], obj5);
  }
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl3.string(stateFromStores1(num[18]).NI6Ihe), accessibilityValue: { text: formatToPlainStringResult }, onPress: callback, style: tmp.container, children: closure_8(sharedValue, obj7) };
  const PressableScale = tmp2(tmp3[21]).PressableScale;
  intl3 = tmp2(tmp3[17]).intl;
  obj7 = { style: tmp.track, children: items8 };
  const obj8 = { style: tmp.fillContainer, children: closure_7(LinearGradient, obj9) };
  obj9 = { style: items7, colors, useAngle: true, angle: 270 };
  items7 = [, , ];
  ({ fill: arr8[0], fillShadow: arr8[1] } = tmp);
  items7[2] = animatedStyle;
  items8 = [closure_7(sharedValue, obj8), ];
  const obj10 = { style: tmp.textContainer, children: items9 };
  const obj11 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.headerText, children: combined };
  const Text = tmp2(tmp3[19]).Text;
  if (num >= tmp6) {
    const intl5 = tmp2(tmp3[17]).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + intl5.string(tmp5(tmp3[18]).NI6Ihe) + " \u{1F389}";
  } else {
    const intl4 = tmp2(tmp3[17]).intl;
    combined = intl4.string(tmp5(tmp3[18]).NI6Ihe);
  }
  items9 = [closure_7(Text, obj11), ];
  const obj12 = { style: tmp.rightContent, children: items10 };
  items10 = [, ];
  const obj13 = { variant: "text-xs/semibold", color: "text-default", lineClamp: 1, style: tmp.descriptionText, children: formatToPlainStringResult };
  items10[0] = closure_7(guildId(num[19]).Text, obj13);
  const obj14 = { size: "sm", color: stateFromStores1(num[5]).colors.TEXT_DEFAULT };
  const ChevronSmallRightIcon = tmp2(tmp3[20]).ChevronSmallRightIcon;
  items10[1] = closure_7(ChevronSmallRightIcon, obj14);
  items9[1] = closure_8(sharedValue, obj12);
  items8[1] = closure_8(sharedValue, obj10);
  return closure_7(PressableScale, obj6);
});
const sum = result + 30;
const result1 = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsProgressBar.tsx");

export default tmp7;
export const BOOST_PROGRESS_BAR_HEIGHT = sum;
