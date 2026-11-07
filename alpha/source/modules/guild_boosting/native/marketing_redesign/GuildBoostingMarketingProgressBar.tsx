// Module ID: 15749
// Function ID: 15750
// Name: GuildBoostingMarketingProgressBar
// Dependencies: [32, 19, 17, 5141, 1072, 21, 5140, 15750, 575, 5369, 563, 1652, 1705, 8534, 5761, 5715, 5147, 2]
// Exports: default

// Module 15749 (GuildBoostingMarketingProgressBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import spring_spring from "spring/spring" /* 5761 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8534 */;
import GuildBoostingMarketingProgressBarMarker from "GuildBoostingMarketingProgressBarMarker" /* 15750 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const GuildBoostingMarketingProgressBarMarkerDefault = GuildBoostingMarketingProgressBarMarker;
let set;

let c9;
let metroImportAll;
let obj2;
let obj3;
let size;
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
let closure_13 = { code: "(function GuildBoostingMarketingProgressBarTsx1(){let[width]=this.__closure;return{width:width.get()+\"%\"};})" };
let closure_14 = { code: "(function GuildBoostingMarketingProgressBarTsx2(){let[width]=this.__closure;return width.get();})" };
let closure_15 = { code: "(function GuildBoostingMarketingProgressBarTsx3(width){let[BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,scheduleOnRN,setRevealedTier]=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)scheduleOnRN(setRevealedTier,tier);})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx");

export default function ProgressBar(guild) {
  let items10;
  let items11;
  let items12;
  let items9;
  let obj6;
  let obj9;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp2Result;
  let useReducedMotion;
  guild = guild.guild;
  let stateFromStores;
  let sharedValue;
  let revealedTier;
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
  const tmp9 = revealedTier(fillFactor.useState(BoostedGuildTiers.NONE), 2);
  revealedTier = tmp9[0];
  const items1 = [closure_13, sharedValue];
  let c0;
  const tmp11 = tmp9[1];
  [tmp12, tmp13] = items1;
  const obj4 = guild(sharedValue[11]);
  const tmp8 = BoostedGuildTiers;
  class GuildBoostingMarketingProgressBarTsx1 {
    constructor() {
      const obj = { width: "" + _undefined.get() + "%" };
      return obj;
    }
  }
  const items2 = [tmp13];
  GuildBoostingMarketingProgressBarTsx1.__closure = items2;
  GuildBoostingMarketingProgressBarTsx1.__workletHash = 12429210936939;
  GuildBoostingMarketingProgressBarTsx1.__initData = tmp12;
  const animatedStyle = obj4.useAnimatedStyle(GuildBoostingMarketingProgressBarTsx1);
  const items3 = [closure_14, sharedValue];
  c0 = undefined;
  [tmp16, tmp17] = items3;
  const tmp5Result = guild(tmp3[11]);
  class GuildBoostingMarketingProgressBarTsx2 {
    constructor() {
      return _undefined.get();
    }
  }
  const items4 = [tmp17];
  GuildBoostingMarketingProgressBarTsx2.__closure = items4;
  GuildBoostingMarketingProgressBarTsx2.__workletHash = 7658772434044;
  GuildBoostingMarketingProgressBarTsx2.__initData = tmp16;
  const items5 = [closure_15, tmp8, 5, revealedTier, , ];
  const useAnimatedReaction = tmp5Result.useAnimatedReaction;
  items5[4] = guild(tmp3[12]).scheduleOnRN;
  items5[5] = tmp11;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items5;
  class GuildBoostingMarketingProgressBarTsx3 {
    constructor(arg0) {
      let TIER_3 = _undefined.NONE;
      if (arg0 >= 33.33 - c1) {
        TIER_3 = tmp.TIER_1;
      }
      if (arg0 >= 66.67 - c1) {
        TIER_3 = tmp.TIER_2;
      }
      if (arg0 >= 100 - c1) {
        TIER_3 = tmp.TIER_3;
      }
      if (TIER_3 !== c2) {
        _undefined2(c4, TIER_3);
      }
    }
  }
  const items6 = [tmp19, tmp20, tmp21, tmp22, tmp23];
  GuildBoostingMarketingProgressBarTsx3.__closure = items6;
  GuildBoostingMarketingProgressBarTsx3.__workletHash = 1273150541408;
  GuildBoostingMarketingProgressBarTsx3.__initData = tmp18;
  const animatedReaction = useAnimatedReaction(GuildBoostingMarketingProgressBarTsx2, GuildBoostingMarketingProgressBarTsx3);
  const items7 = [guild];
  fillFactor = obj3.useMemo(() => {
    const obj = GuildBoostingUtils;
    return obj.getGuildBoostingProgressBarFillFactor(guild);
  }, items7).fillFactor;
  const items8 = [fillFactor, sharedValue, stateFromStores];
  const effect = obj3.useEffect(() => {
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
        const obj = spring_spring;
        guild = set(obj.withSpring(guild, closure_12));
      }, 750);
    }
    return () => {
      window.clearTimeout(closure_1);
    };
  }, items8);
  const obj5 = { style: tmp.progressBarContainer, children: closure_9(View, obj6) };
  obj6 = { style: tmp.progressBar, children: items12 };
  const obj7 = { style: tmp.progressBarScrubber, children: items11 };
  const obj8 = { style: items9, children: closure_8(tmp2Result, obj9) };
  items9 = [tmp.progressBarFill, animatedStyle];
  View = tmp2(tmp3[11]).View;
  let str = "#515359";
  tmp2Result = tmp2(tmp3[15]);
  const tmp5Result2 = guild(tmp3[16]);
  if (!tmp5Result2.isThemeDark(tmp4)) {
    str = tmp2(tmp3[8]).unsafe_rawColors.PRIMARY_160;
  }
  obj9 = { useAngle: true, angle: 90, colors: items10, locations: [0.1577, 0.9905], style: tmp.progressBarGradientFill };
  items10 = [str, "#AB77F2"];
  items11 = [closure_8(View, obj8), ];
  const obj10 = { style: tmp.progressBarTrack };
  items11[1] = closure_8(View, obj10);
  items12 = [
    closure_9(View, obj7),
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
  return closure_8(View, obj5);
};
export const PROGRESS_BAR_SPACING = 40;
