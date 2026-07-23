// Module ID: 12516
// Function ID: 96934
// Name: ProgressBarMarkerInnerContent
// Dependencies: [31, 27, 653, 33, 12517, 12518, 12519, 4130, 689, 4066, 3991, 4542, 11618, 3974, 3976, 9985, 4126, 4022, 2]
// Exports: default

// Module 12516 (ProgressBarMarkerInnerContent)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { BoostedGuildTiers } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
function ProgressBarMarkerInnerContent(arg0) {
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let tier;
  let useReducedMotion;
  ({ tier, isTierUnlocked } = arg0);
  isTierUnlocked = undefined;
  ({ isTierAnimated, isCurrentTier, useReducedMotion, isDisabled } = arg0);
  const tmp = callback2();
  let obj = sharedValue(3991);
  let num = 1;
  sharedValue = obj.useSharedValue(1);
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  let items = [isTierUnlocked, sharedValue];
  const effect = React.useEffect(() => {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(sharedValue(outer1_2[11]).withSpring(1, outer1_12));
      const obj = sharedValue(outer1_2[11]);
    }
  }, items);
  sharedValue(3991);
  const fn = function y() {
    let obj = {};
    obj = { scale: sharedValue.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scale: sharedValue };
  fn.__workletHash = 7240908357686;
  fn.__initData = closure_13;
  if (tier === BoostedGuildTiers.NONE) {
    if (isCurrentTier) {
      if (isTierUnlocked) {
        return null;
      }
    }
    obj = {};
    const items1 = [tmp.progressBarMarkerInnerCircle];
    obj.style = items1;
    let View = isTierUnlocked(3991).View;
    obj = {};
    const items2 = [tmp.progressBarMarkerInnerCircleBackground, !useReducedMotion && isTierUnlocked && tmp6, ];
    const obj1 = {};
    if (isTierUnlocked) {
      let PREMIUM_PERK_PINK = isTierUnlocked(689).unsafe_rawColors.PREMIUM_PERK_PINK;
    } else {
      const obj6 = sharedValue(3974);
      if (obj7.isThemeDark(tmp2)) {
        num = 0.5;
      }
      PREMIUM_PERK_PINK = obj6.hexWithOpacity(isTierUnlocked(689).unsafe_rawColors.WHITE, num);
      obj7 = sharedValue(3976);
    }
    obj1.backgroundColor = PREMIUM_PERK_PINK;
    items2[2] = obj1;
    obj.style = items2;
    View = closure_7(View, obj);
    obj = [View, null];
    obj.children = obj;
    closure_8(closure_4, obj);
    const tmp16 = closure_8;
    const tmp17 = closure_4;
    const tmp18 = closure_7;
  } else if (isDisabled) {
    let tmp27Result = tmp27(sharedValue(11618).BoostGemSlashIcon, { size: "xxs", color: "currentColor" });
  } else {
    const obj2 = { source: obj[tier] };
    const items3 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const obj3 = {};
    const unsafe_rawColors = isTierUnlocked(689).unsafe_rawColors;
    obj3.tintColor = isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK;
    items3[1] = obj3;
    obj2.style = items3;
    tmp27Result = tmp27(closure_5, obj2);
    const tmp7 = closure_5;
  }
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
obj = { [BoostedGuildTiers.TIER_1]: require("registerAsset"), [BoostedGuildTiers.TIER_2]: require("registerAsset"), [BoostedGuildTiers.TIER_3]: require("registerAsset") };
obj = { progressBarMarkerInnerCircle: { width: 17.5, height: 17.5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, progressBarMarkerInnerCircleBackground: { width: "100%", height: "100%", borderRadius: 17.5, position: "absolute" }, progressBarMarkerInnerCircleIcon: { width: 16, height: 16 } };
let obj1 = { width: "95%", height: "95%", tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj.progressBarMarkerInnerCircleIconUnlocked = obj1;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { stiffness: 50, damping: 5 };
let closure_13 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
_createForOfIteratorHelperLoose = { progressBarMarker: obj3, progressBarMarkerBackground: { width: "100%", height: "100%", position: "absolute", borderRadius: 28 } };
obj3 = { height: 28, width: 28, position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transform: null, zIndex: 1 };
let items = [{ translateX: -14 }];
obj3.transform = items;
let obj4 = { width: 75, position: "absolute", top: "100%", paddingTop: 8, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center", textAlign: "center" };
_createForOfIteratorHelperLoose.progressBarMarkerLabel = obj4;
let items1 = [{ translateX: -7 }];
_createForOfIteratorHelperLoose.progressBarMarkerLabelWithIcon = { transform: items1 };
_createForOfIteratorHelperLoose.progressBarMarkerLabelLocked = { opacity: 0.4 };
_createForOfIteratorHelperLoose = { height: 12, width: 12, marginRight: 2, tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.progressBarMarkerUnlockedIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_15 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
let result = require("ME").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  let guild;
  let isDisabled;
  let revealedTier;
  let tier;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let dependencyMap;
  ({ revealedTier, isDisabled } = arg0);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(1);
  const importDefault = tmp4;
  let tmp7 = tmp6;
  if (guild.premiumTier >= tier) {
    tmp7 = tmp5;
  }
  dependencyMap = tmp7;
  let items = [tmp7, sharedValue, tier === guild.premiumTier];
  const effect = React.useEffect(() => {
    let tmp = _undefined;
    if (_undefined) {
      tmp = closure_1;
    }
    if (tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(sharedValue(_undefined[11]).withSpring(1, outer1_12));
      const obj = sharedValue(_undefined[11]);
    }
  }, items);
  let obj1 = sharedValue(3991);
  class P {
    constructor() {
      obj = {};
      obj = { scale: closure_0.get() };
      items = [];
      items[0] = obj;
      obj.transform = items;
      return obj;
    }
  }
  P.__closure = { scale: sharedValue };
  P.__workletHash = 6884434326805;
  P.__initData = closure_15;
  obj = { style: items1 };
  items1 = [tmp.progressBarMarker, ];
  obj = { left: `${100 * obj[tier]}%` };
  items1[1] = obj;
  const animatedStyle = obj1.useAnimatedStyle(P);
  obj1 = {};
  const items2 = [tmp.progressBarMarkerBackground, , ];
  let tmp13 = !useReducedMotion;
  if (tmp13) {
    tmp13 = animatedStyle;
  }
  items2[1] = tmp13;
  const obj2 = {};
  if (tier === guild.premiumTier) {
    if (tmp7) {
      let PREMIUM_PERK_PINK = importDefault(689).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    obj2.backgroundColor = PREMIUM_PERK_PINK;
    items2[2] = obj2;
    obj1.style = items2;
    const items3 = [tmp12(importDefault(3991).View, obj1), , ];
    const obj3 = { tier, isDisabled, isTierUnlocked: tmp6, isTierAnimated: tmp5, isCurrentTier: tmp4, useReducedMotion };
    items3[1] = callback(ProgressBarMarkerInnerContent, obj3);
    const obj4 = {};
    const items4 = [tmp.progressBarMarkerLabel, , ];
    let progressBarMarkerLabelLocked = !tmp7;
    if (!tmp7) {
      progressBarMarkerLabelLocked = tmp.progressBarMarkerLabelLocked;
    }
    items4[1] = progressBarMarkerLabelLocked;
    let progressBarMarkerLabelWithIcon = tmp7;
    if (tmp7) {
      progressBarMarkerLabelWithIcon = tier !== BoostedGuildTiers.NONE;
    }
    if (progressBarMarkerLabelWithIcon) {
      progressBarMarkerLabelWithIcon = tmp.progressBarMarkerLabelWithIcon;
    }
    items4[2] = progressBarMarkerLabelWithIcon;
    obj4.style = items4;
    if (tmp7) {
      tmp7 = tier !== BoostedGuildTiers.NONE;
    }
    if (tmp7) {
      const obj5 = { source: importDefault(9985), style: tmp.progressBarMarkerUnlockedIcon };
      tmp7 = callback(closure_5, obj5);
    }
    const items5 = [tmp7, ];
    class P {
      constructor() {
        obj = {};
        obj = { scale: closure_0.get() };
        items = [];
        items[0] = obj;
        obj.transform = items;
        return obj;
      }
    }
    let obj6 = { variant: "text-xs/medium" };
    const obj7 = { useLevels: false };
    obj6.children = sharedValue(4022).getTierName(tier, obj7);
    items5[1] = callback(sharedValue(4126).Text, obj6);
    obj4.children = items5;
    items3[2] = closure_8(closure_4, obj4);
    obj.children = items3;
    return tmp10(tmp11, obj);
  }
  obj6 = sharedValue(3976);
  tmp10 = closure_8;
  tmp11 = closure_4;
  tmp12 = callback;
  const tmp2 = importDefault(4066)();
  const isThemeDarkResult = obj6.isThemeDark(importDefault(4066)());
  const hexWithOpacity = sharedValue(3974).hexWithOpacity;
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
};
export const MARKER_DIMENSIONS = 28;
export const TierMarkerPositions = obj;
