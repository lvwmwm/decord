// Module ID: 15700
// Function ID: 15701
// Name: GuildBoostingMarketingProgressBarMarker
// Dependencies: [19, 17, 1072, 21, 15701, 15702, 15703, 5141, 575, 5377, 1652, 5138, 5148, 5771, 14375, 5851, 11784, 5761, 8604, 2]
// Exports: default

// Module 15700 (GuildBoostingMarketingProgressBarMarker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import useThemeDefault from "useTheme" /* 5377 */;
import spring_spring from "spring/spring" /* 5771 */;
import FastImageDefault from "FastImage" /* 5851 */;
import AssetRegistryDefault from "AssetRegistry" /* 11784 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15701 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 15702 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 15703 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault, set;

let TIER_1;
let TIER_2;
let TIER_3;
let items;
let items1;
let metroImportDefault;
let metroRequire;
let obj5;
let obj6;
let size;
let size1;
let size2;
function ProgressBarMarkerInnerContent(arg0) {
  let PREMIUM_PERK_PINK;
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let items3;
  let items4;
  let items5;
  let tier;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp19;
  let tmp9;
  let useReducedMotion;
  ({ tier, isTierUnlocked } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  ({ isTierAnimated, isCurrentTier, useReducedMotion, isDisabled } = arg0);
  let tmp = closure_10();
  const tmp4 = isTierUnlocked(5377)();
  let obj = sharedValue(1652);
  let num = 1;
  sharedValue = obj.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp2(575).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const hexWithOpacity = tmp5(5138).hexWithOpacity;
    sharedValue(5138);
    const WHITE = tmp2(575).unsafe_rawColors.WHITE;
    const tmp5Result3 = sharedValue(5148);
    if (tmp5Result3.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = hexWithOpacity(WHITE, num);
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = react.useEffect(() => {
    const tmp = isTierUnlocked;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = spring_spring;
      const result1 = set(obj.withSpring(1, closure_11));
    }
  }, items);
  const items1 = [closure_12, PREMIUM_PERK_PINK, useReducedMotion, isTierUnlocked, sharedValue];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  const tmp5Result4 = sharedValue(1652);
  class GuildBoostingMarketingProgressBarMarkerTsx1 {
    constructor() {
      let items;
      let num = 1;
      const obj = { backgroundColor, transform: items };
      if (!c1) {
        num = 1;
        if (c2) {
          num = _undefined.get();
        }
      }
      items = [{ scale: num }];
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13];
  GuildBoostingMarketingProgressBarMarkerTsx1.__closure = items2;
  GuildBoostingMarketingProgressBarMarkerTsx1.__workletHash = 6190229582867;
  GuildBoostingMarketingProgressBarMarkerTsx1.__initData = tmp9;
  let tmp15 = null;
  const animatedStyle = tmp5Result4.useAnimatedStyle(GuildBoostingMarketingProgressBarMarkerTsx1);
  if (tier !== BoostedGuildTiers.NONE) {
    let tmp23Result;
    if (isDisabled) {
      tmp23Result = tmp23(tmp5(14375).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
    } else {
      obj2 = { source: obj2[tier], style: items3 };
      items3 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
      const tmp2Result = isTierUnlocked(5851);
      const unsafe_rawColors = tmp2(575).unsafe_rawColors;
      const obj3 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
      items3[1] = obj3;
      tmp23Result = tmp23(tmp2Result, obj2);
    }
    tmp15 = tmp23Result;
  }
  if (!isCurrentTier) {
    const obj5 = { style: items4 };
    items4 = [tmp.progressBarMarkerInnerCircleBackground, animatedStyle];
    const obj4 = { style: tmp.progressBarMarkerInnerCircle, children: items5 };
    items5 = [closure_6(tmp2(1652).View, obj5), tmp15];
    tmp19 = closure_7(View, obj4);
  } else {
    tmp19 = tmp15;
  }
  return tmp19;
}
const View = react_native.View;
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: AssetRegistryDefault2, [TIER_2]: AssetRegistryDefault3, [TIER_3]: AssetRegistryDefault4 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = createStyles_mod;
let obj3 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: size };
size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
let closure_10 = createStyles.createStyles(obj3);
let closure_11 = { stiffness: 50, damping: 5 };
let closure_12 = { code: "(function GuildBoostingMarketingProgressBarMarkerTsx1(){let[backgroundColor,useReducedMotion,shouldAnimate,scale]=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};})" };
createStyles = createStyles_mod;
let obj4 = { progressBarMarker: size1, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: obj5, progressBarMarkerLabelWithIcon: obj6, progressBarMarkerLabelLocked: { opacity: 0.4 }, progressBarMarkerUnlockedIcon: size2 };
size1 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: items, zIndex: 1 };
items = [{ translateX: -14 }];
obj5 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
createStyles = createStyles.createStyles;
obj6 = { transform: items1 };
items1 = [{ translateX: -7 }];
size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_14 = createStyles(obj4);
let closure_15 = { code: "(function GuildBoostingMarketingProgressBarMarkerTsx2(){let[backgroundColor,useReducedMotion,scale]=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  let PREMIUM_PERK_PINK;
  let closure_1;
  let closure_2;
  let guild;
  let isDisabled;
  let items3;
  let items4;
  let items5;
  let items7;
  let revealedTier;
  let tier;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp5Result4;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let sharedValue;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_14();
  const tmp4 = useThemeDefault();
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(1);
  importDefault = tmp7;
  let tmp25Result = tmp9 && tmp8;
  dependencyMap = tmp25Result;
  if (tier === guild.premiumTier) {
    if (tmp25Result) {
      PREMIUM_PERK_PINK = tmp2(575).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp25Result, sharedValue, tier === guild.premiumTier];
    const effect = react.useEffect(() => {
      const tmp = closure_2 && closure_1;
      if (tmp) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring_spring;
        const result1 = set(obj.withSpring(1, closure_11));
      }
    }, items);
    const items1 = [closure_15, PREMIUM_PERK_PINK, useReducedMotion, sharedValue];
    let c0;
    let c1;
    let c2;
    [tmp17, tmp18, tmp19, tmp20] = items1;
    const tmp5Result = sharedValue(1652);
    class GuildBoostingMarketingProgressBarMarkerTsx2 {
      constructor() {
        let items;
        let num = 1;
        const obj = { backgroundColor, transform: items };
        if (!c1) {
          num = _undefined.get();
        }
        items = [{ scale: num }];
        return obj;
      }
    }
    const items2 = [tmp18, tmp19, tmp20];
    GuildBoostingMarketingProgressBarMarkerTsx2.__closure = items2;
    GuildBoostingMarketingProgressBarMarkerTsx2.__workletHash = 12397163114717;
    GuildBoostingMarketingProgressBarMarkerTsx2.__initData = tmp17;
    obj2 = { style: items3, children: items5 };
    items3 = [tmp.progressBarMarker, ];
    const obj3 = { left: `${100 * obj[tier]}%` };
    items3[1] = obj3;
    const animatedStyle = tmp5Result.useAnimatedStyle(GuildBoostingMarketingProgressBarMarkerTsx2);
    const obj4 = { style: items4 };
    items4 = [tmp.progressBarMarkerBackground, animatedStyle];
    items5 = [closure_6(tmp2(1652).View, obj4), , ];
    const obj5 = { tier, isDisabled, isTierUnlocked: guild.premiumTier >= tier, isTierAnimated: revealedTier >= tier, isCurrentTier: tier === guild.premiumTier, useReducedMotion };
    items5[1] = closure_6(ProgressBarMarkerInnerContent, obj5);
    const items6 = [tmp.progressBarMarkerLabel, !tmp25Result && tmp.progressBarMarkerLabelLocked, ];
    const progressBarMarkerLabelWithIcon = tmp25Result && tier !== BoostedGuildTiers.NONE && tmp.progressBarMarkerLabelWithIcon;
    const obj6 = { style: items6, children: items7 };
    items6[2] = progressBarMarkerLabelWithIcon;
    if (tmp25Result) {
      tmp25Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp25Result) {
      const obj7 = { source: AssetRegistryDefault, style: tmp.progressBarMarkerUnlockedIcon };
      const tmp2Result = FastImageDefault;
      tmp25Result = tmp25(tmp2Result, obj7);
    }
    items7 = [tmp25Result, ];
    const obj8 = { variant: "body-xs/medium", children: tmp5Result4.getTierName(tier, { useLevels: false }) };
    const Text = tmp5(5761).Text;
    tmp5Result4 = sharedValue(8604);
    items7[1] = closure_6(Text, obj8);
    items5[2] = closure_7(View, obj6);
    return closure_7(View, obj2);
  }
  const tmp5Result5 = sharedValue(5148);
  const isThemeDarkResult = tmp5Result5.isThemeDark(tmp4);
  const hexWithOpacity = tmp5(5138).hexWithOpacity;
  sharedValue(5138);
  const unsafe_rawColors = tmp2(575).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    let num = 0.4;
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
};
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };
