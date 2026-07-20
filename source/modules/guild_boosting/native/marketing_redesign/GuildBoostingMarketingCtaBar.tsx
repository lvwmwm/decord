// Module ID: 12380
// Function ID: 94660
// Name: useBoostCountAnimatedStyles
// Dependencies: []
// Exports: default

// Module 12380 (useBoostCountAnimatedStyles)
function useBoostCountAnimatedStyles(first) {
  const arg1 = first;
  let obj = arg1(dependencyMap[12]);
  const fn = function o() {
    const obj = {};
    let num = 0;
    if (arg0) {
      num = 1;
    }
    obj.opacity = arg0(closure_2[13]).withTiming(num, { duration: 250 });
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[13]).withTiming, isVisible: first };
  fn.__closure = obj;
  fn.__workletHash = 6895237370657;
  fn.__initData = closure_16;
  return obj.useAnimatedStyle(fn);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = arg1(dependencyMap[5]));
const FractionalPremiumStates = arg1(dependencyMap[6]).FractionalPremiumStates;
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = 10 * importDefault(dependencyMap[8]).Millis.SECOND;
let obj = arg1(dependencyMap[9]);
obj = { heading: {}, headerContent: {} };
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.guildIcon = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.guildIconText = { color: importDefault(dependencyMap[10]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.guildName = { <string:1635612414>: 10495, <string:2897826396>: 10240, <string:1415687352>: 5120 };
obj.guildBoostCountWrapper = { position: "relative" };
obj.totalBoostCountWrapper = { "Bool(true)": null, "Bool(true)": "Recents", "Bool(true)": "All", "Bool(true)": 56, "Bool(true)": 16, "Bool(true)": 8, "Bool(true)": "row" };
obj.guildBoostCountIcon = {};
obj.guildBoostCount = {};
obj.guildBoostCurrentUserCountWrapper = {};
obj.guildBoostCurrentUserCount = { alignSelf: "center" };
const obj1 = { color: importDefault(dependencyMap[10]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.cta = { borderRadius: importDefault(dependencyMap[10]).radii.xl };
const obj2 = { borderRadius: importDefault(dependencyMap[10]).radii.xl };
const obj3 = {};
const merged = Object.assign(arg1(dependencyMap[11]).generateBoxShadowStyle(arg1(dependencyMap[11]).EIGHT_DP_ELEVATION_SHADOW_PARAMS));
obj.ctaPrimary = obj3;
obj.ctaSecondary = { marginTop: 10 };
obj.giftIcon = { marginRight: 8 };
obj.gradient = { overflow: "visible" };
obj.headerWave = { "Null": "CREATE_CHANNEL_MODAL", "Null": "1i+hMi", "Null": "Array", "Null": "subtitleText", "Null": "chart_with_downwards_trend", "Null": "type" };
obj.headerStars = { "Bool(false)": 8, "Bool(false)": null, "Bool(false)": "flex", "Bool(false)": "center", "Bool(false)": "row", "Bool(false)": "center", "Bool(false)": "center" };
obj.boostingUnavailablePill = {};
let closure_15 = obj.createStyles(obj);
let closure_16 = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
const obj7 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  let fractionalPremiumInfo;
  let guild;
  let intent;
  let onLayout;
  let onResult;
  let previousGuildSubscriptionSlot;
  const tmp = callback4();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  const arg1 = guild;
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const callback = importDefault(closure_2[14])(importDefault(closure_2[15]).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = arg1(closure_2[16]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  let obj1 = arg1(closure_2[16]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
  const React = stateFromStores1;
  const items2 = [stateFromStores1, guild.id];
  const memo = React.useMemo(() => {
    const keys = Object.keys(stateFromStores1);
    return keys.filter((arg0) => {
      let tmp2 = null != tmp.premiumGuildSubscription;
      if (tmp2) {
        tmp2 = tmp.premiumGuildSubscription.guildId === id.id;
      }
      return tmp2;
    }).length;
  }, items2);
  const View = memo;
  const tmp4 = importDefault(closure_2[14]);
  const tmp8 = useBoostCountAnimatedStyles(first);
  const tmp9 = useBoostCountAnimatedStyles(!first);
  const tmp10 = importDefault(closure_2[17]);
  let obj2 = arg1(closure_2[18]);
  const isInReverseTrial = obj2.useIsInReverseTrial();
  closure_6 = React.useRef(-1);
  const items3 = [first, memo];
  const effect = React.useEffect(() => {
    if (tmp) {
      const _window = window;
      closure_6.current = window.setTimeout(() => {
        callback((arg0) => !arg0);
      }, closure_14);
    }
    return () => {
      window.clearTimeout(ref.current);
    };
  }, items3);
  let obj3 = importDefault(closure_2[20]);
  const tmp10Result = importDefault(closure_2[17])(fractionalPremiumInfo.endsAt, arg1(closure_2[17]).CountDownMessageTypes.LONG_TIME_LEFT);
  if (premiumGroupRole === arg1(closure_2[21]).PremiumSubscriptionGroupRole.MEMBER) {
    obj = { style: tmp.boostingUnavailablePill };
    let tmp16 = callback2(importDefault(closure_2[22]), obj);
  } else {
    tmp16 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      obj = { fpDurationText: tmp10Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp16 = callback2(importDefault(closure_2[23]), obj);
    }
  }
  obj1 = {};
  obj2 = { onLayout, angle: 160, angleCenter: {} };
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const tmp23 = callback3;
  const items4 = [importDefault(closure_2[10]).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, importDefault(closure_2[10]).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2, importDefault(closure_2[10]).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3, importDefault(closure_2[10]).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4, importDefault(closure_2[10]).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5];
  obj2.colors = items4;
  obj2.locations = ["isAffineMatrixFlat", "GRID", "language", "firstItemOffset", "gatedChannelId"];
  obj2.useAngle = true;
  obj2.style = tmp.gradient;
  obj3 = { angle: 0, angleCenter: {}, colors: [], locations: [null, null], useAngle: true, style: tmp.gradient };
  const tmp26 = importDefault(closure_2[24]);
  const items5 = [callback2(importDefault(closure_2[25]), { guild }), , , ];
  const obj4 = { style: tmp.headerContent };
  const obj5 = { reportedPageIndex: true, pageIndex: "/assets/images/native/premium/guild_boosting/tier_icons/simple", scrollTargetPageIndex: 32, style: tmp.heading };
  const intl = arg1(closure_2[27]).intl;
  obj5.children = intl.string(arg1(closure_2[27]).t.AF+Tyh);
  const items6 = [callback2(arg1(closure_2[26]).Text, obj5), , , , ];
  const obj6 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild };
  const tmp27 = importDefault(closure_2[24]);
  obj6.size = arg1(closure_2[28]).GuildIconSizes.LARGE;
  items6[1] = callback2(importDefault(closure_2[28]), obj6);
  const obj7 = {
    onPress() {
      window.clearTimeout(ref.current);
      lib((arg0) => !arg0);
    }
  };
  const items7 = [callback2(arg1(closure_2[26]).Text, { style: tmp.guildName, children: guild.name }), ];
  const obj9 = { style: tmp.guildBoostCountWrapper };
  const obj10 = { style: items8 };
  const items8 = [tmp9, tmp.totalBoostCountWrapper];
  const obj11 = { style: tmp.guildBoostCountIcon, source: importDefault(closure_2[30]), color: importDefault(closure_2[10]).unsafe_rawColors.GUILD_BOOSTING_PINK, size: arg1(closure_2[11]).Icon.Sizes.SMALL };
  const items9 = [callback2(arg1(closure_2[11]).Icon, obj11), ];
  const obj12 = { style: tmp.guildBoostCount };
  const intl2 = arg1(closure_2[27]).intl;
  obj12.children = intl2.format(arg1(closure_2[27]).t.pob/cL, { subscriptions: importDefault(closure_2[19])(premiumGroupRole.guild.id).total });
  items9[1] = callback2(arg1(closure_2[26]).Text, obj12);
  obj10.children = items9;
  const items10 = [callback3(importDefault(closure_2[12]).View, obj10), ];
  const obj13 = { style: items11 };
  const items11 = [tmp8, tmp.guildBoostCurrentUserCountWrapper];
  const obj14 = { style: items12 };
  const items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  const intl3 = arg1(closure_2[27]).intl;
  obj14.children = intl3.format(arg1(closure_2[27]).t.xXb78j, { numSubscriptions: memo });
  obj13.children = callback2(arg1(closure_2[26]).Text, obj14);
  items10[1] = callback2(importDefault(closure_2[12]).View, obj13);
  obj9.children = items10;
  items7[1] = callback3(View, obj9);
  obj7.children = items7;
  items6[2] = callback3(arg1(closure_2[29]).PressableOpacity, obj7);
  items6[3] = tmp16;
  const items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = callback2(importDefault(closure_2[31]), { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult });
  obj4.children = items6;
  items5[1] = callback3(View, obj4);
  items5[2] = callback2(importDefault(closure_2[32]), { style: tmp.headerStars });
  items5[3] = callback2(importDefault(closure_2[33]), { style: tmp.headerWave });
  obj3.children = items5;
  obj2.children = callback3(tmp27, obj3);
  const items14 = [callback2(tmp26, obj2), ];
  const obj18 = { style: items15 };
  const items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  if (isPremiumResult) {
    const obj19 = { variant: "secondary" };
    const intl5 = arg1(closure_2[27]).intl;
    obj19.text = intl5.string(arg1(closure_2[27]).t.8MYSQw);
    obj19.onPress = function onPress() {
      let obj = guild(closure_2[35]);
      obj.closeApplyBoostModal();
      obj = { analyticsLocation: obj, analyticsLocations };
      obj = { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA };
      guild(closure_2[36]).openGiftModal(obj);
    };
    const obj20 = { size: arg1(closure_2[11]).Icon.Sizes.SMALL, source: importDefault(closure_2[37]), style: tmp.giftIcon };
    obj19.icon = callback2(arg1(closure_2[11]).Icon, obj20);
    obj19.grow = true;
    let obj21 = obj19;
  } else {
    obj21 = { variant: "secondary" };
    const intl4 = arg1(closure_2[27]).intl;
    obj21.text = intl4.string(arg1(closure_2[27]).t.pj0XBN);
    obj21.onPress = function onPress() {
      let obj = first(lib[38]);
      obj = { analyticsLocation: obj, analyticsLocations };
      obj = { page: constants2.PREMIUM_GUILD_USER_MODAL, section: constants3.HEADER, object: constants.BUTTON_CTA };
      obj.pushLazy(guild(lib[40])(lib[39], lib.paths), obj);
    };
    obj21.grow = true;
  }
  obj18.children = callback2(arg1(closure_2[34]).Button, obj21);
  items14[1] = callback2(View, obj18);
  obj1.children = items14;
  return tmp23(View, obj1);
};
