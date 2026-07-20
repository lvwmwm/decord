// Module ID: 12387
// Function ID: 94694
// Name: BoostedGuildTiers
// Dependencies: []
// Exports: default

// Module 12387 (BoostedGuildTiers)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const BoostedGuildTiers = arg1(dependencyMap[4]).BoostedGuildTiers;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Null": true, "Null": true, "Null": true, "Null": true, paddingHorizontal: arg1(dependencyMap[7]).MARKER_DIMENSIONS / 2 + 34 };
obj.progressBarContainer = obj;
obj.progressBar = { 0: "isArray", 0: "Array", 0: "x" };
const tmp2 = arg1(dependencyMap[5]);
obj.progressBarScrubber = { height: 8, top: arg1(dependencyMap[7]).MARKER_DIMENSIONS / 2 - 4, marginHorizontal: arg1(dependencyMap[7]).MARKER_DIMENSIONS / 2 + 2 };
const obj1 = { height: 8, top: arg1(dependencyMap[7]).MARKER_DIMENSIONS / 2 - 4, marginHorizontal: arg1(dependencyMap[7]).MARKER_DIMENSIONS / 2 + 2 };
obj.progressBarTrack = { backgroundColor: importDefault(dependencyMap[8]).colors.SPINE_DEFAULT };
obj.progressBarFill = {};
obj.progressBarGradientFill = { onChange: 1929379840, autoFocus: 0, placeholder: 14 };
let closure_10 = obj.createStyles(obj);
const items = [, , , ];
({ NONE: arr[0], TIER_1: arr[1], TIER_2: arr[2], TIER_3: arr[3] } = BoostedGuildTiers);
let closure_12 = {};
let closure_13 = { code: "function GuildBoostingMarketingProgressBarTsx1(){const{width}=this.__closure;return{width:width.get()+\"%\"};}" };
let closure_14 = { code: "function GuildBoostingMarketingProgressBarTsx2(){const{width}=this.__closure;return width.get();}" };
let closure_15 = { code: "function GuildBoostingMarketingProgressBarTsx3(width){const{BoostedGuildTiers,TIER_REACHED_OFFSET,revealedTier,runOnJS,setRevealedTier}=this.__closure;let tier=BoostedGuildTiers.NONE;if(width>=33.33-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_1;if(width>=66.67-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_2;if(width>=100-TIER_REACHED_OFFSET)tier=BoostedGuildTiers.TIER_3;if(tier!==revealedTier)runOnJS(setRevealedTier)(tier);}" };
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.SPINE_DEFAULT };
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBar.tsx");

export default function ProgressBar(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const sharedValue = obj1.useSharedValue(0);
  const dependencyMap = sharedValue;
  const tmp5 = callback(React.useState(BoostedGuildTiers.NONE), 2);
  const first = tmp5[0];
  const callback = first;
  const React = tmp7;
  let obj2 = arg1(dependencyMap[11]);
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
  let obj3 = arg1(dependencyMap[11]);
  const fn = function p() {
    return sharedValue.get();
  };
  fn.__closure = { width: sharedValue };
  fn.__workletHash = 5482324713221;
  fn.__initData = closure_14;
  const fn2 = function w(arg0) {
    let TIER_3 = closure_7.NONE;
    if (arg0 >= 28.33) {
      TIER_3 = closure_7.TIER_1;
    }
    if (arg0 >= 61.67) {
      TIER_3 = closure_7.TIER_2;
    }
    if (arg0 >= 95) {
      TIER_3 = closure_7.TIER_3;
    }
    if (TIER_3 !== first) {
      const tmp7 = guild(sharedValue[11]).runOnJS(tmp7)(TIER_3);
      const obj = guild(sharedValue[11]);
    }
  };
  obj = { BoostedGuildTiers, TIER_REACHED_OFFSET: 5, revealedTier: first, runOnJS: arg1(dependencyMap[11]).runOnJS, setRevealedTier: tmp7 };
  fn2.__closure = obj;
  fn2.__workletHash = 4844648302516;
  fn2.__initData = closure_15;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const items1 = [guild];
  const fillFactor = React.useMemo(() => guild(sharedValue[12]).getGuildBoostingProgressBarFillFactor(guild), items1).fillFactor;
  const View = fillFactor;
  const items2 = [fillFactor, sharedValue, stateFromStores];
  const effect = React.useEffect(() => {
    const result = 100 * fillFactor;
    const guild = result;
    let timeout = -1;
    if (timeout) {
      const result1 = sharedValue.set(result);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const result = closure_2.set(result(closure_2[13]).withSpring(result, closure_12));
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
  const items3 = [tmp.progressBarFill, animatedStyle];
  const obj4 = {};
  const tmp2 = importDefault(dependencyMap[9])();
  const tmp14 = importDefault(dependencyMap[14]);
  let str = "#515359";
  if (!obj11.isThemeDark(tmp2)) {
    str = importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_160;
  }
  const items4 = [str, "#AB77F2"];
  obj4.colors = items4;
  obj4.locations = [-1019239695, -1889785611];
  obj4.style = tmp.progressBarGradientFill;
  obj3.children = callback2(tmp14, obj4);
  const items5 = [callback2(importDefault(dependencyMap[11]).View, obj3), callback2(View, { style: tmp.progressBarTrack })];
  obj2.children = items5;
  const items6 = [
    closure_9(View, obj2),
    items.map((tier) => {
      const obj = { guild, tier, revealedTier: first, useReducedMotion: stateFromStores };
      let tmp3 = guild.premiumTier <= tier;
      if (tmp3) {
        tmp3 = fillFactor > guild(sharedValue[7]).TierMarkerPositions[tier];
      }
      obj.isDisabled = tmp3;
      return closure_8(stateFromStores(sharedValue[7]), obj, tier);
    })
  ];
  obj1.children = items6;
  obj.children = closure_9(View, obj1);
  return callback2(View, obj);
};
export const PROGRESS_BAR_SPACING = 40;
