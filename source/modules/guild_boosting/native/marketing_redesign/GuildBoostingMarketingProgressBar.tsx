// Module ID: 12568
// Function ID: 97247
// Name: BoostedGuildTiers
// Dependencies: [57, 31, 27, 4122, 653, 33, 4130, 12569, 689, 4066, 624, 3991, 4022, 4542, 4554, 3976, 2]
// Exports: default

// Module 12568 (BoostedGuildTiers)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BoostedGuildTiers } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", width: "100%", marginTop: 40, paddingHorizontal: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 + 34 };
_createForOfIteratorHelperLoose.progressBarContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progressBar = { height: 54, maxWidth: 660, width: "100%" };
_createForOfIteratorHelperLoose.progressBarScrubber = { height: 8, top: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 - 4, marginHorizontal: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 + 2 };
let obj2 = { borderRadius: 8, height: "100%", width: "100%", position: "absolute", zIndex: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.SPINE_DEFAULT };
_createForOfIteratorHelperLoose.progressBarTrack = obj2;
_createForOfIteratorHelperLoose.progressBarFill = { borderRadius: 8, position: "absolute", height: "100%", left: 0, zIndex: 1 };
_createForOfIteratorHelperLoose.progressBarGradientFill = { height: "100%", width: "100%", borderRadius: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = { stiffness: 27, damping: 10 };
let closure_13 = { code: "function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+\"%\"};}" };
let closure_14 = { code: "function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}" };
let closure_15 = { code: "function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}" };
let obj1 = { height: 8, top: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 - 4, marginHorizontal: require("ProgressBarMarkerInnerContent").MARKER_DIMENSIONS / 2 + 2 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx");

export default function ProgressBar(guild) {
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(sharedValue[10]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.useReducedMotion);
  let obj1 = guild(sharedValue[11]);
  sharedValue = obj1.useSharedValue(0);
  const tmp5 = first(React.useState(BoostedGuildTiers.NONE), 2);
  first = tmp5[0];
  React = tmp7;
  let obj2 = guild(sharedValue[11]);
  class I {
    constructor() {
      obj = { width: "" + closure_2.get() + "%" };
      return obj;
    }
  }
  I.__closure = { width: sharedValue };
  I.__workletHash = 8013193810386;
  I.__initData = closure_13;
  const animatedStyle = obj2.useAnimatedStyle(I);
  let obj3 = guild(sharedValue[11]);
  const fn = function p() {
    return sharedValue.get();
  };
  fn.__closure = { width: sharedValue };
  fn.__workletHash = 5482324713221;
  fn.__initData = closure_14;
  const fn2 = function w(arg0) {
    let TIER_3 = outer1_7.NONE;
    if (arg0 >= 28.33) {
      TIER_3 = outer1_7.TIER_1;
    }
    if (arg0 >= 61.67) {
      TIER_3 = outer1_7.TIER_2;
    }
    if (arg0 >= 95) {
      TIER_3 = outer1_7.TIER_3;
    }
    if (TIER_3 !== first) {
      guild(sharedValue[11]).runOnJS(result)(TIER_3);
      const obj = guild(sharedValue[11]);
    }
  };
  obj = { BoostedGuildTiers, TIER_REACHED_OFFSET: 5, revealedTier: first, runOnJS: guild(sharedValue[11]).runOnJS, setRevealedTier: tmp7 };
  fn2.__closure = obj;
  fn2.__workletHash = 4844648302516;
  fn2.__initData = closure_15;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const items1 = [guild];
  const fillFactor = React.useMemo(() => guild(sharedValue[12]).getGuildBoostingProgressBarFillFactor(guild), items1).fillFactor;
  const items2 = [fillFactor, sharedValue, stateFromStores];
  const effect = React.useEffect(() => {
    let result = 100 * fillFactor;
    const guild = result;
    let timeout = -1;
    if (timeout) {
      const result1 = sharedValue.set(result);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const result = outer1_2.set(guild(sharedValue[13]).withSpring(closure_0, outer2_12));
      }, 750);
    }
    return () => {
      window.clearTimeout(closure_1);
    };
  }, items2);
  obj = { style: tmp.progressBarContainer };
  obj1 = { style: tmp.progressBar };
  obj2 = { style: tmp.progressBarScrubber };
  obj3 = { style: items3 };
  items3 = [tmp.progressBarFill, animatedStyle];
  const obj4 = { useAngle: true, angle: 90 };
  const tmp2 = stateFromStores(sharedValue[9])();
  const tmp14 = stateFromStores(sharedValue[14]);
  let str = "#515359";
  if (!obj11.isThemeDark(tmp2)) {
    str = stateFromStores(sharedValue[8]).unsafe_rawColors.PRIMARY_160;
  }
  const items4 = [str, "#AB77F2"];
  obj4.colors = items4;
  obj4.locations = [0.1577, 0.9905];
  obj4.style = tmp.progressBarGradientFill;
  obj3.children = callback(tmp14, obj4);
  const items5 = [callback(stateFromStores(sharedValue[11]).View, obj3), callback(fillFactor, { style: tmp.progressBarTrack })];
  obj2.children = items5;
  const items6 = [
    closure_9(fillFactor, obj2),
    items.map((tier) => {
      const obj = { guild, tier, revealedTier: first, useReducedMotion: stateFromStores };
      let tmp3 = guild.premiumTier <= tier;
      if (tmp3) {
        tmp3 = fillFactor > guild(sharedValue[7]).TierMarkerPositions[tier];
      }
      obj.isDisabled = tmp3;
      return outer1_8(stateFromStores(sharedValue[7]), obj, tier);
    })
  ];
  obj1.children = items6;
  obj.children = closure_9(fillFactor, obj1);
  return callback(fillFactor, obj);
};
export const PROGRESS_BAR_SPACING = 40;
