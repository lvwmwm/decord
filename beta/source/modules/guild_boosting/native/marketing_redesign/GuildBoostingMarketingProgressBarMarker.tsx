// Module ID: 13123
// Function ID: 13124
// Name: GuildBoostingMarketingProgressBarMarker
// Dependencies: [19, 17, 1074, 21, 13124, 13125, 13126, 4836, 576, 4767, 4566, 4683, 4685, 5280, 12080, 11059, 4832, 4728, 2]
// Exports: default

// Module 13123 (GuildBoostingMarketingProgressBarMarker)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import spring from "spring" /* 5280 */;
import AssetRegistryDefault from "AssetRegistry" /* 13124 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13125 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13126 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, set;

let TIER_1;
let TIER_2;
let TIER_3;
let closure_4;
let hasOwnProperty;
let items;
let items1;
let metroImportAll;
let metroImportDefault;
let obj5;
let obj6;
let size;
let size1;
let size2;
function ProgressBarMarkerInnerContent(arg0) {
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let items1;
  let items2;
  let items3;
  let items4;
  let tier;
  let tmp14;
  let useReducedMotion;
  ({ tier, isTierUnlocked, useReducedMotion } = arg0);
  let sharedValue;
  isTierUnlocked = undefined;
  let PREMIUM_PERK_PINK;
  ({ isTierAnimated, isCurrentTier, isDisabled } = arg0);
  let tmp = closure_11();
  const tmp4 = sharedValue(isTierUnlocked[9])();
  let obj = useReducedMotion(isTierUnlocked[10]);
  let num = 1;
  sharedValue = obj.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  if (isTierUnlocked) {
    PREMIUM_PERK_PINK = tmp2(tmp3[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
  } else {
    const hexWithOpacity = tmp5(isTierUnlocked[11]).hexWithOpacity;
    useReducedMotion(isTierUnlocked[11]);
    const WHITE = tmp2(tmp3[8]).unsafe_rawColors.WHITE;
    const tmp5Result3 = useReducedMotion(isTierUnlocked[12]);
    if (tmp5Result3.isThemeDark(tmp4)) {
      num = 0.5;
    }
    PREMIUM_PERK_PINK = hexWithOpacity(WHITE, num);
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = PREMIUM_PERK_PINK.useEffect(() => {
    const tmp = isTierUnlocked;
    if (tmp) {
      const result = sharedValue.set(0);
      set = sharedValue.set;
      const obj = spring;
      const result1 = set(obj.withSpring(1, closure_12));
    }
  }, items);
  const fn = function x() {
    let items;
    let num = 1;
    const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
    if (!useReducedMotion) {
      num = 1;
      if (isTierUnlocked) {
        num = sharedValue.get();
      }
    }
    items = [{ scale: num }];
    return obj;
  };
  fn.__closure = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, shouldAnimate: isTierUnlocked, scale: sharedValue };
  fn.__workletHash = 15398057099178;
  fn.__initData = __initData;
  let tmp10 = null;
  const tmp5Result4 = useReducedMotion(isTierUnlocked[10]);
  const animatedStyle = tmp5Result4.useAnimatedStyle(fn);
  if (tier !== BoostedGuildTiers.NONE) {
    let tmp18Result;
    if (isDisabled) {
      tmp18Result = tmp18(tmp5(tmp3[14]).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
    } else {
      obj2 = { source: obj2[tier], style: items1 };
      items1 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
      const unsafe_rawColors = tmp2(tmp3[8]).unsafe_rawColors;
      const obj3 = { tintColor: isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK };
      items1[1] = obj3;
      tmp18Result = tmp18(closure_5, obj2);
    }
    tmp10 = tmp18Result;
  }
  if (!isCurrentTier) {
    const obj4 = { style: items2, children: items4 };
    items2 = [tmp.progressBarMarkerInnerCircle];
    const obj5 = { style: items3 };
    items3 = [tmp.progressBarMarkerInnerCircleBackground, animatedStyle];
    items4 = [closure_7(tmp2(isTierUnlocked[10]).View, obj5), tmp10];
    tmp14 = closure_8(closure_4, obj4);
  } else {
    tmp14 = tmp10;
  }
  return tmp14;
}
let react = react_mod;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const TierMarkerPositions = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
let obj2 = { [TIER_1]: AssetRegistryDefault, [TIER_2]: AssetRegistryDefault2, [TIER_3]: AssetRegistryDefault3 };
({ TIER_1, TIER_2, TIER_3 } = BoostedGuildTiers);
let createStyles = createStyles_mod;
let obj3 = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 }, progressBarMarkerInnerCircleIconUnlocked: size };
size = { width: "95%", height: "95%", tintColor: nativeDefault.colors.WHITE };
let closure_11 = createStyles.createStyles(obj3);
let closure_12 = { stiffness: 50, damping: 5 };
const __initData = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{backgroundColor,useReducedMotion,shouldAnimate,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion||!shouldAnimate?1:scale.get()}]};}" };
createStyles = createStyles_mod;
let obj4 = { progressBarMarker: size1, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 }, progressBarMarkerLabel: obj5, progressBarMarkerLabelWithIcon: obj6, progressBarMarkerLabelLocked: { opacity: 0.4 }, progressBarMarkerUnlockedIcon: size2 };
size1 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: items, zIndex: 1 };
items = [{ translateX: -14 }];
obj5 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
createStyles = createStyles.createStyles;
obj6 = { transform: items1 };
items1 = [{ translateX: -7 }];
size2 = { height: 12, width: 12, marginRight: 2, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_15 = createStyles(obj4);
const __initData2 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{backgroundColor,useReducedMotion,scale}=this.__closure;return{backgroundColor:backgroundColor,transform:[{scale:useReducedMotion?1:scale.get()}]};}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  let closure_2;
  let closure_3;
  let guild;
  let isDisabled;
  let items1;
  let items2;
  let items3;
  let items5;
  let revealedTier;
  let tier;
  let tmp5Result4;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let sharedValue;
  let PREMIUM_PERK_PINK;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = closure_15();
  const tmp4 = sharedValue(4767)();
  let obj = useReducedMotion(4566);
  sharedValue = obj.useSharedValue(1);
  dependencyMap = tmp7;
  let tmp20Result = tmp9 && tmp8;
  react = tmp20Result;
  if (tier === guild.premiumTier) {
    if (tmp20Result) {
      PREMIUM_PERK_PINK = tmp2(576).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    let items = [tmp20Result, sharedValue, tier === guild.premiumTier];
    const effect = react.useEffect(() => {
      const tmp = closure_3 && closure_2;
      if (tmp) {
        const result = sharedValue.set(0);
        set = sharedValue.set;
        const obj = spring;
        const result1 = set(obj.withSpring(1, closure_12));
      }
    }, items);
    const tmp5Result = useReducedMotion(4566);
    class P {
      constructor() {
        let items;
        let num = 1;
        const obj = { backgroundColor: PREMIUM_PERK_PINK, transform: items };
        if (!useReducedMotion) {
          num = sharedValue.get();
        }
        items = [{ scale: num }];
        return obj;
      }
    }
    obj2 = { backgroundColor: PREMIUM_PERK_PINK, useReducedMotion, scale: sharedValue };
    P.__closure = obj2;
    P.__workletHash = 9850302957604;
    P.__initData = __initData2;
    const obj3 = { style: items1, children: items3 };
    items1 = [tmp.progressBarMarker, ];
    const obj4 = { left: `${100 * obj[tier]}%` };
    items1[1] = obj4;
    const animatedStyle = tmp5Result.useAnimatedStyle(P);
    const obj5 = { style: items2 };
    items2 = [tmp.progressBarMarkerBackground, animatedStyle];
    items3 = [closure_7(tmp2(4566).View, obj5), , ];
    const obj6 = { tier, isDisabled, isTierUnlocked: guild.premiumTier >= tier, isTierAnimated: revealedTier >= tier, isCurrentTier: tier === guild.premiumTier, useReducedMotion };
    items3[1] = closure_7(ProgressBarMarkerInnerContent, obj6);
    const items4 = [tmp.progressBarMarkerLabel, !tmp20Result && tmp.progressBarMarkerLabelLocked, ];
    const progressBarMarkerLabelWithIcon = tmp20Result && tier !== BoostedGuildTiers.NONE && tmp.progressBarMarkerLabelWithIcon;
    const obj7 = { style: items4, children: items5 };
    items4[2] = progressBarMarkerLabelWithIcon;
    if (tmp20Result) {
      tmp20Result = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp20Result) {
      const obj8 = { source: sharedValue(11059), style: tmp.progressBarMarkerUnlockedIcon };
      tmp20Result = tmp20(closure_5, obj8);
    }
    items5 = [tmp20Result, ];
    const obj9 = { variant: "text-xs/medium", children: tmp5Result4.getTierName(tier, { useLevels: false }) };
    const Text = tmp5(4832).Text;
    tmp5Result4 = useReducedMotion(4728);
    items5[1] = closure_7(Text, obj9);
    items3[2] = closure_8(PREMIUM_PERK_PINK, obj7);
    return closure_8(PREMIUM_PERK_PINK, obj3);
  }
  const tmp5Result5 = useReducedMotion(4685);
  const isThemeDarkResult = tmp5Result5.isThemeDark(tmp4);
  const hexWithOpacity = tmp5(4683).hexWithOpacity;
  useReducedMotion(4683);
  const unsafe_rawColors = tmp2(576).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    let num = 0.4;
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
};
export const MARKER_DIMENSIONS = 28;
export { TierMarkerPositions };
