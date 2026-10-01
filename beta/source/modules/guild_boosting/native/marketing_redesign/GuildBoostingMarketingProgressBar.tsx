// Module ID: 13122
// Function ID: 13123
// Name: GuildBoostingMarketingProgressBar
// Dependencies: [32, 19, 17, 4825, 1074, 21, 4836, 13123, 576, 4767, 563, 4566, 4728, 5280, 5293, 4685, 2]
// Exports: default

// Module 13122 (GuildBoostingMarketingProgressBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import spring from "spring" /* 5280 */;
import GuildBoostingMarketingProgressBarMarker from "GuildBoostingMarketingProgressBarMarker" /* 13123 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GuildBoostingMarketingProgressBarMarkerDefault = GuildBoostingMarketingProgressBarMarker;
let set;

let c9;
let metroImportAll;
let obj2;
let obj3;
let size;
let react = react_mod;
let View = react_native.View;
const BoostedGuildTiers = Constants.BoostedGuildTiers;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { progressBarContainer: obj2, progressBar: { height: 54, maxWidth: 660, width: "100%" }, progressBarScrubber: obj3, progressBarTrack: size, progressBarFill: { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 }, progressBarGradientFill: { height: "100%", width: "100%", borderRadius: 8 } };
obj2 = { display: "flex", alignItems: "center", width: "100%", marginTop: 40, paddingHorizontal: GuildBoostingMarketingProgressBarMarker.MARKER_DIMENSIONS / 2 + 34 };
createStyles = createStyles.createStyles;
obj3 = { height: 8, top: GuildBoostingMarketingProgressBarMarker.MARKER_DIMENSIONS / 2 - 4, marginHorizontal: GuildBoostingMarketingProgressBarMarker.MARKER_DIMENSIONS / 2 + 2 };
size = { borderRadius: 8, height: "100%", width: "100%", position: "absolute", zIndex: 0, backgroundColor: nativeDefault.colors.SPINE_DEFAULT };
let closure_10 = createStyles(obj);
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = { stiffness: 27, damping: 10 };
const __initData = { code: "function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+\"%\"};}" };
const __initData2 = { code: "function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}" };
const __initData3 = { code: "function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx");

export default function ProgressBar(guild) {
  let closure_4;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj7;
  let tmp16;
  let useReducedMotion;
  guild = guild.guild;
  let stateFromStores;
  let sharedValue;
  let revealedTier;
  react = undefined;
  let fillFactor;
  let tmp = closure_10();
  let tmp2 = stateFromStores;
  let tmp3 = sharedValue;
  let tmp4 = stateFromStores(sharedValue[9])();
  let obj = guild(sharedValue[10]);
  items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = guild(sharedValue[11]);
  sharedValue = obj2.useSharedValue(0);
  const tmp7 = revealedTier(react.useState(BoostedGuildTiers.NONE), 2);
  revealedTier = tmp7[0];
  react = tmp9;
  const obj3 = guild(sharedValue[11]);
  class I {
    constructor() {
      const obj = { width: "" + sharedValue.get() + "%" };
      return obj;
    }
  }
  I.__closure = { width: sharedValue };
  I.__workletHash = 8013193810386;
  I.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(I);
  const fn = function p() {
    return sharedValue.get();
  };
  fn.__closure = { width: sharedValue };
  fn.__workletHash = 5482324713221;
  fn.__initData = __initData2;
  const fn2 = function w(arg0) {
    let TIER_3 = BoostedGuildTiers.NONE;
    if (arg0 >= 28.33) {
      TIER_3 = tmp.TIER_1;
    }
    if (arg0 >= 61.67) {
      TIER_3 = tmp.TIER_2;
    }
    if (arg0 >= 95) {
      TIER_3 = tmp.TIER_3;
    }
    if (TIER_3 !== first) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_4)(TIER_3);
    }
  };
  const obj4 = guild(sharedValue[11]);
  fn2.__closure = { BoostedGuildTiers, TIER_REACHED_OFFSET: 5, revealedTier, runOnJS: guild(sharedValue[11]).runOnJS, setRevealedTier: tmp7[1] };
  fn2.__workletHash = 4844648302516;
  fn2.__initData = __initData3;
  ({ BoostedGuildTiers, TIER_REACHED_OFFSET: 5, revealedTier, runOnJS: guild(sharedValue[11]).runOnJS, setRevealedTier: tmp7[1] });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const items1 = [guild];
  fillFactor = react.useMemo(() => {
    const obj = GuildBoostingUtils;
    return obj.getGuildBoostingProgressBarFillFactor(guild);
  }, items1).fillFactor;
  const items2 = [fillFactor, sharedValue, stateFromStores];
  const effect = react.useEffect(() => {
    let closure_1;
    const result = 100 * fillFactor;
    guild = result;
    let timeout = -1;
    const tmp2 = timeout;
    if (tmp2) {
      const result1 = sharedValue.set(result);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        set = sharedValue.set;
        const obj = spring;
        guild = set(obj.withSpring(guild, closure_12));
      }, 750);
    }
    return () => {
      window.clearTimeout(closure_1);
    };
  }, items2);
  const obj6 = { style: tmp.progressBarContainer, children: closure_9(fillFactor, obj7) };
  obj7 = { style: tmp.progressBar, children: items6 };
  const obj8 = { style: tmp.progressBarScrubber, children: items5 };
  const obj9 = { style: items3, children: closure_8(tmp16, obj11) };
  items3 = [tmp.progressBarFill, animatedStyle];
  View = stateFromStores(sharedValue[11]).View;
  let str = "#515359";
  tmp16 = stateFromStores(sharedValue[14]);
  const obj10 = guild(sharedValue[15]);
  if (!obj10.isThemeDark(tmp4)) {
    str = tmp2(tmp3[8]).unsafe_rawColors.PRIMARY_160;
  }
  obj11 = { useAngle: true, angle: 90, colors: items4, locations: [0.1577, 0.9905], style: tmp.progressBarGradientFill };
  items4 = [str, "#AB77F2"];
  items5 = [closure_8(View, obj9), ];
  const obj12 = { style: tmp.progressBarTrack };
  items5[1] = closure_8(fillFactor, obj12);
  items6 = [
    closure_9(fillFactor, obj8),
    items.map((tier) => {
      let tmp4;
      const obj = { guild, tier, revealedTier, useReducedMotion: stateFromStores, isDisabled: tmp4 };
      tmp4 = guild.premiumTier <= tier;
      const tmp = metroImportAll;
      const tmp3 = GuildBoostingMarketingProgressBarMarkerDefault;
      if (tmp4) {
        tmp4 = fillFactor > GuildBoostingMarketingProgressBarMarker.TierMarkerPositions[tier];
      }
      return tmp(tmp3, obj, tier);
    })
  ];
  return closure_8(fillFactor, obj6);
};
export const PROGRESS_BAR_SPACING = 40;
