// Module ID: 12402
// Function ID: 94778
// Name: ProgressBarMarkerInnerContent
// Dependencies: []
// Exports: default

// Module 12402 (ProgressBarMarkerInnerContent)
function ProgressBarMarkerInnerContent(arg0) {
  let isCurrentTier;
  let isDisabled;
  let isTierAnimated;
  let isTierUnlocked;
  let tier;
  let useReducedMotion;
  ({ tier, isTierUnlocked } = arg0);
  let importDefault;
  ({ isTierAnimated, isCurrentTier, useReducedMotion, isDisabled } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  let num = 1;
  const sharedValue = obj.useSharedValue(1);
  const arg1 = sharedValue;
  if (isTierUnlocked) {
    isTierUnlocked = isTierAnimated;
  }
  importDefault = isTierUnlocked;
  const items = [isTierUnlocked, sharedValue];
  const effect = React.useEffect(() => {
    if (isTierUnlocked) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(sharedValue(closure_2[11]).withSpring(1, closure_12));
      const obj = sharedValue(closure_2[11]);
    }
  }, items);
  arg1(dependencyMap[10]);
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
    let View = importDefault(dependencyMap[10]).View;
    obj = {};
    const items2 = [tmp.progressBarMarkerInnerCircleBackground, !useReducedMotion && isTierUnlocked && tmp6, ];
    const obj1 = {};
    if (isTierUnlocked) {
      let PREMIUM_PERK_PINK = importDefault(dependencyMap[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
    } else {
      const obj6 = arg1(dependencyMap[13]);
      if (obj7.isThemeDark(tmp2)) {
        num = 0.5;
      }
      PREMIUM_PERK_PINK = obj6.hexWithOpacity(importDefault(dependencyMap[8]).unsafe_rawColors.WHITE, num);
      const obj7 = arg1(dependencyMap[14]);
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
    let tmp27Result = tmp27(arg1(dependencyMap[12]).BoostGemSlashIcon, { "Bool(false)": false, "Bool(false)": false });
  } else {
    const obj2 = { source: obj[tier] };
    const items3 = [isTierUnlocked ? tmp.progressBarMarkerInnerCircleIconUnlocked : tmp.progressBarMarkerInnerCircleIcon, ];
    const obj3 = {};
    const unsafe_rawColors = importDefault(dependencyMap[8]).unsafe_rawColors;
    obj3.tintColor = isTierUnlocked ? unsafe_rawColors.WHITE : unsafe_rawColors.PREMIUM_PERK_PINK;
    items3[1] = obj3;
    obj2.style = items3;
    tmp27Result = tmp27(closure_5, obj2);
    const tmp7 = closure_5;
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
const BoostedGuildTiers = arg1(dependencyMap[2]).BoostedGuildTiers;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = { [BoostedGuildTiers.NONE]: 0, [BoostedGuildTiers.TIER_1]: 0.3333333333333333, [BoostedGuildTiers.TIER_2]: 0.6666666666666666, [BoostedGuildTiers.TIER_3]: 1 };
obj = { [BoostedGuildTiers.TIER_1]: importDefault(dependencyMap[4]), [BoostedGuildTiers.TIER_2]: importDefault(dependencyMap[5]), [BoostedGuildTiers.TIER_3]: importDefault(dependencyMap[6]) };
let obj2 = arg1(dependencyMap[7]);
obj = { progressBarMarkerInnerCircle: {}, progressBarMarkerInnerCircleBackground: { replace: "Masterpass is not enabled for this merchant.", kind: null, source: "MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION", parent: "Missing required option for tokenize." }, progressBarMarkerInnerCircleIcon: { "Null": null, "Null": null } };
const tmp3 = arg1(dependencyMap[3]);
obj.progressBarMarkerInnerCircleIconUnlocked = { tintColor: importDefault(dependencyMap[8]).colors.WHITE };
let closure_11 = obj2.createStyles(obj);
let closure_12 = {};
let closure_13 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
const obj1 = { tintColor: importDefault(dependencyMap[8]).colors.WHITE };
obj2 = { progressBarMarker: { transform: items }, progressBarMarkerBackground: {} };
const items = [{ translateX: -14 }];
const obj3 = { EmojiReactionRowButton: "p\u00F3\u0142 minuty", CHECKPOINT_PERSONA_SEVEN_SECONDARY: "p\u00F3\u0142 minuty", 1376280978: "p\u00F3\u0142 minuty", 766942332: null, 598351956: "mniej ni\u017C {{count}} minuty", 1898640879: "mniej ni\u017C {{count}} minut", -131509629: "mniej ni\u017C minuta", -1956539411: "mniej ni\u017C minut\u0119", 1373414737: "mniej ni\u017C minut\u0119", -1906207285: null, color: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.progressBarMarkerLabel = obj3;
const items1 = [{ translateX: -7 }];
obj2.progressBarMarkerLabelWithIcon = { transform: items1 };
obj2.progressBarMarkerLabelLocked = { opacity: 0.4 };
const obj4 = { "Null": 20, "Null": "relative", -9223372036854775808: 10, tintColor: importDefault(dependencyMap[8]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.progressBarMarkerUnlockedIcon = obj4;
let closure_14 = arg1(dependencyMap[7]).createStyles(obj2);
let closure_15 = { code: "function GuildBoostingMarketingProgressBarMarkerTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}" };
const obj6 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx");

export default function ProgressBarMarker(arg0) {
  let guild;
  let isDisabled;
  let revealedTier;
  let tier;
  let useReducedMotion;
  ({ guild, tier, useReducedMotion } = arg0);
  let dependencyMap;
  ({ revealedTier, isDisabled } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const sharedValue = obj.useSharedValue(1);
  const arg1 = sharedValue;
  const importDefault = tmp4;
  let tmp7 = tmp6;
  if (guild.premiumTier >= tier) {
    tmp7 = tmp5;
  }
  dependencyMap = tmp7;
  const items = [tmp7, sharedValue, tier === guild.premiumTier];
  const effect = React.useEffect(() => {
    let tmp = tmp7;
    if (tmp7) {
      tmp = tmp4;
    }
    if (tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue.set(sharedValue(tmp7[11]).withSpring(1, closure_12));
      const obj = sharedValue(tmp7[11]);
      const tmp4 = sharedValue;
    }
  }, items);
  let obj1 = arg1(dependencyMap[10]);
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
  const items1 = [tmp.progressBarMarker, ];
  obj = { left: `${100 * closure_9[tier]}%` };
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
      let PREMIUM_PERK_PINK = importDefault(dependencyMap[8]).unsafe_rawColors.PREMIUM_PERK_PINK;
    }
    obj2.backgroundColor = PREMIUM_PERK_PINK;
    items2[2] = obj2;
    obj1.style = items2;
    const items3 = [tmp12(importDefault(dependencyMap[10]).View, obj1), , ];
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
      const obj5 = { source: importDefault(dependencyMap[15]), style: tmp.progressBarMarkerUnlockedIcon };
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
    obj6.children = arg1(dependencyMap[17]).getTierName(tier, obj7);
    items5[1] = callback(arg1(dependencyMap[16]).Text, obj6);
    obj4.children = items5;
    items3[2] = closure_8(closure_4, obj4);
    obj.children = items3;
    return tmp10(tmp11, obj);
  }
  obj6 = arg1(dependencyMap[14]);
  const tmp10 = closure_8;
  const tmp11 = closure_4;
  const tmp12 = callback;
  const tmp2 = importDefault(dependencyMap[9])();
  const isThemeDarkResult = obj6.isThemeDark(importDefault(dependencyMap[9])());
  const hexWithOpacity = arg1(dependencyMap[13]).hexWithOpacity;
  const unsafe_rawColors = importDefault(dependencyMap[8]).unsafe_rawColors;
  if (isThemeDarkResult) {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.WHITE, 0.4);
  } else {
    PREMIUM_PERK_PINK = hexWithOpacity(unsafe_rawColors.PRIMARY_200, 0.4);
  }
};
export const MARKER_DIMENSIONS = 28;
export const TierMarkerPositions = obj;
