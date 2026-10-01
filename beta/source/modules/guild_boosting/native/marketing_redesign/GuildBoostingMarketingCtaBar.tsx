// Module ID: 13115
// Function ID: 13116
// Name: GuildBoostingMarketingCtaBar
// Dependencies: [32, 19, 17, 1372, 4729, 1074, 1374, 21, 1091, 4836, 576, 1177, 4566, 4837, 6583, 6603, 563, 13001, 7509, 4743, 4488, 1380, 13054, 13056, 5293, 13116, 4832, 1115, 5896, 5435, 13041, 6822, 13119, 13120, 5281, 5746, 10124, 13121, 8695, 2]
// Exports: default

// Module 13115 (GuildBoostingMarketingCtaBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1091 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5746 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10124 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4729 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import native from "native" /* 1177 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let View = react_native.View;
({ AnalyticsObjects: metroImportAll, AnalyticsPages: c9, AnalyticsSections: c10 } = Constants);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = 10 * DurationsDefault.Millis.SECOND;
let createStyles = createStyles_mod;
let obj = { heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" }, headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 }, guildIcon: size, guildIconText: obj2, guildName: { alignSelf: "center", maxWidth: "50%", textAlign: "center" }, guildBoostCountWrapper: { position: "relative" }, totalBoostCountWrapper: { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" }, guildBoostCountIcon: { flexGrow: 0, flexShrink: 0, marginRight: 3 }, guildBoostCount: { flexGrow: 0, flexShrink: 1, opacity: 0.6 }, guildBoostCurrentUserCountWrapper: { position: "absolute", top: 3, width: "100%" }, guildBoostCurrentUserCount: { alignSelf: "center" }, cta: obj3, ctaPrimary: obj4, ctaSecondary: { marginTop: 10 }, giftIcon: { marginRight: 8 }, gradient: { overflow: "visible" }, headerWave: { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 }, headerStars: { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 }, boostingUnavailablePill: { marginTop: -13, marginBottom: 23 } };
size = { alignSelf: "center", borderRadius: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj3 = { alignSelf: "center", borderRadius: nativeDefault.radii.xl, maxWidth: 300, width: "90%" };
obj4 = {};
const merged = Object.assign(native.generateBoxShadowStyle(native.EIGHT_DP_ELEVATION_SHADOW_PARAMS));
let closure_15 = createStyles(obj);
const __initData = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  let Button;
  let Icon2;
  let Text2;
  let analyticsLocations;
  let boostSlots;
  let closure_2;
  let fractionalPremiumInfo;
  let guild;
  let intent;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items12;
  let items13;
  let items15;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj23;
  let obj29;
  let obj30;
  let onLayout;
  let onResult;
  let previousGuildSubscriptionSlot;
  let ref;
  let stateFromStores1;
  let tmp20;
  let tmp4Result3;
  function o() {
    let num = 0;
    const withTiming = guild(closure_2[13]).withTiming;
    guild(closure_2[13]);
    if (closure_0) {
      num = 1;
    }
    const obj = { opacity: withTiming(num, { duration: 250 }) };
    return obj;
  }
  let tmp = closure_15();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  const tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const isVisible = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp6 = isVisible(6583);
  analyticsLocations = tmp6(isVisible(6603).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = guild(563);
  const items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  let obj2 = guild(563);
  const items1 = [GuildBoostSlotStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    let id;
    const keys = Object.keys(stateFromStores1);
    return keys.filter((item) => null != tmp.premiumGuildSubscription && tmp.premiumGuildSubscription.guildId === id.id).length;
  }, items2);
  let obj3 = guild(4566);
  const fn = o;
  let obj4 = { withTiming: guild(4837).withTiming, isVisible };
  fn.__closure = obj4;
  fn.__workletHash = 6895237370657;
  fn.__initData = __initData;
  let closure_0 = tmp12;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const fn2 = o;
  const obj5 = guild(4566);
  fn2.__closure = { withTiming: guild(4837).withTiming, isVisible: !isVisible };
  fn2.__workletHash = 6895237370657;
  fn2.__initData = __initData;
  ({ withTiming: guild(4837).withTiming, isVisible: !isVisible });
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  const tmp14 = isVisible(13001);
  const tmp14Result = tmp14(fractionalPremiumInfo.endsAt, guild(13001).CountDownMessageTypes.LONG_TIME_LEFT);
  const obj7 = guild(7509);
  const isInReverseTrial = obj7.useIsInReverseTrial();
  const total = isVisible(4743)(premiumGroupRole.guild.id).total;
  ref = stateFromStores1.useRef(-1);
  const items3 = [isVisible, memo];
  const effect = stateFromStores1.useEffect(() => {
    const tmp = memo > 0 || first;
    if (tmp) {
      const _window = window;
      ref.current = window.setTimeout(() => {
        closure_1_2((arg0) => !arg0);
      }, closure_14);
    }
    return () => {
      window.clearTimeout(ref.current);
    };
  }, items3);
  const obj8 = isVisible(4488);
  const isPremiumResult = obj8.isPremium(stateFromStores);
  if (premiumGroupRole === guild(1380).PremiumSubscriptionGroupRole.MEMBER) {
    const obj9 = { style: tmp.boostingUnavailablePill };
    tmp20 = closure_12(tmp4(13054), obj9);
  } else {
    tmp20 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      const obj10 = { fpDurationText: tmp14Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp20 = closure_12(tmp4(13056), obj10);
    }
  }
  const obj11 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: items4, locations: [0, 0.3221, 0.429, 0.7606, 1], useAngle: true, style: tmp.gradient, children: closure_13(tmp4Result3, obj12) };
  items4 = [, , , , ];
  const tmp4Result = isVisible(5293);
  items4[0] = isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1;
  items4[1] = isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2;
  items4[2] = isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3;
  items4[3] = isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4;
  items4[4] = isVisible(576).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5;
  obj12 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: items5 };
  items5 = [, , , ];
  tmp4Result3 = isVisible(5293);
  items5[0] = closure_12(isVisible(13116), { guild });
  const obj13 = { style: tmp.headerContent, children: items6 };
  const obj14 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: intl.string(guild(1115).t["AF+Tyh"]) };
  const Heading = tmp7(4832).Heading;
  intl = tmp7(1115).intl;
  items6 = [closure_12(Heading, obj14), , , , ];
  const obj15 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: guild(5896).GuildIconSizes.LARGE };
  const tmp4Result4 = isVisible(5896);
  items6[1] = closure_12(tmp4Result4, obj15);
  const obj16 = {
    onPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: items7
  };
  const PressableOpacity = tmp7(5435).PressableOpacity;
  items7 = [, ];
  const obj17 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  items7[0] = closure_12(guild(4832).Text, obj17);
  const obj19 = { style: items8, children: items9 };
  items8 = [animatedStyle1, tmp.totalBoostCountWrapper];
  const obj18 = { style: tmp.guildBoostCountWrapper, children: items10 };
  View = tmp4(4566).View;
  const obj20 = { style: tmp.guildBoostCountIcon, source: isVisible(13041), color: isVisible(576).unsafe_rawColors.GUILD_BOOSTING_PINK, size: guild(1177).Icon.Sizes.SMALL };
  const Icon = tmp7(1177).Icon;
  items9 = [closure_12(Icon, obj20), ];
  const obj21 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light", children: intl2.format(guild(1115).t["pob/cL"], { subscriptions: total }) };
  const Text = tmp7(4832).Text;
  intl2 = tmp7(1115).intl;
  items9[1] = closure_12(Text, obj21);
  items10 = [closure_13(View, obj19), ];
  const obj22 = { style: items11, children: closure_12(Text2, obj23) };
  items11 = [animatedStyle, tmp.guildBoostCurrentUserCountWrapper];
  const View2 = tmp4(4566).View;
  obj23 = { style: items12, variant: "text-sm/bold", color: "text-overlay-light", children: intl3.format(guild(1115).t.xXb78j, { numSubscriptions: memo }) };
  items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  Text2 = tmp7(4832).Text;
  intl3 = tmp7(1115).intl;
  items10[1] = closure_12(View2, obj22);
  items7[1] = closure_13(memo, obj18);
  items6[2] = closure_13(PressableOpacity, obj16);
  items6[3] = tmp20;
  const obj24 = { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants3.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult };
  items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = closure_12(isVisible(6822), obj24);
  items5[1] = closure_13(memo, obj13);
  const obj25 = { style: tmp.headerStars };
  items5[2] = closure_12(isVisible(13119), obj25);
  const obj26 = { style: tmp.headerWave };
  items5[3] = closure_12(isVisible(13120), obj26);
  const items14 = [closure_12(tmp4Result, obj11), ];
  const obj27 = { style: items15, children: closure_12(Button, obj30) };
  items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  Button = tmp7(5281).Button;
  const tmp23 = closure_13;
  if (isPremiumResult) {
    const obj28 = {
      variant: "secondary",
      text: intl5.string(guild(1115).t["8MYSQw"]),
      onPress() {
          let obj4;
          const obj = actions_BoostingActionCreators;
          obj.closeApplyBoostModal();
          const obj3 = { analyticsLocation: obj4, analyticsLocations };
          obj4 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
          const obj2 = utils_openGiftModal;
          obj2.openGiftModal(obj3);
        },
      icon: closure_12(Icon2, obj29),
      grow: true
    };
    intl5 = tmp7(1115).intl;
    obj29 = { size: guild(1177).Icon.Sizes.SMALL, source: isVisible(13121), style: tmp.giftIcon };
    Icon2 = tmp7(1177).Icon;
    obj30 = obj28;
  } else {
    obj30 = {
      variant: "secondary",
      text: intl4.string(guild(1115).t.pj0XBN),
      onPress() {
          let obj2;
          const obj = { analyticsLocation: obj2, analyticsLocations };
          obj2 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
          openPremiumModalDefault(obj);
        },
      grow: true
    };
    intl4 = tmp7(1115).intl;
  }
  const obj31 = { children: items14 };
  items14[1] = closure_12(memo, obj27);
  return tmp23(memo, obj31);
};
