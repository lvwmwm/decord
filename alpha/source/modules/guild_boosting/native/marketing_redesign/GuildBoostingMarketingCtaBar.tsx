// Module ID: 16000
// Function ID: 16001
// Name: GuildBoostingMarketingCtaBar
// Dependencies: [32, 19, 17, 1388, 9236, 1072, 1390, 21, 1089, 5306, 575, 1187, 1655, 5548, 7918, 7937, 563, 15328, 9317, 9241, 2174, 1401, 15388, 15390, 5893, 16001, 5929, 1113, 7720, 7428, 15375, 10799, 16004, 16005, 5936, 6952, 11661, 16006, 9579, 2]
// Exports: default

// Module 16000 (GuildBoostingMarketingCtaBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DurationsDefault from "Durations" /* 1089 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import BoostingActionCreators from "BoostingActionCreators" /* 6952 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import utils_openGiftModal from "utils/openGiftModal" /* 11661 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 9236 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import native from "native" /* 1187 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, num;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
function useBoostCountAnimatedStyles(arg0) {
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp = _mod1655;
  const items = [closure_16, , ];
  const useAnimatedStyle = tmp.useAnimatedStyle;
  items[1] = timing_timing.withTiming;
  items[2] = arg0;
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  class GuildBoostingMarketingCtaBarTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, { duration: 250 }) };
      return obj;
    }
  }
  const items1 = [tmp3, tmp4];
  GuildBoostingMarketingCtaBarTsx1.__closure = items1;
  GuildBoostingMarketingCtaBarTsx1.__workletHash = 9651184930840;
  GuildBoostingMarketingCtaBarTsx1.__initData = tmp2;
  return useAnimatedStyle(GuildBoostingMarketingCtaBarTsx1);
}
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
let closure_16 = { code: "(function GuildBoostingMarketingCtaBarTsx1(){let[withTiming,isVisible]=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};})" };
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
  let obj19;
  let obj25;
  let obj26;
  let obj8;
  let onLayout;
  let onResult;
  let previousGuildSubscriptionSlot;
  let ref;
  let stateFromStores1;
  let tmp19;
  let tmp4Result3;
  let tmp = closure_15();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  const tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp6 = first(7918);
  analyticsLocations = tmp6(first(7937).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
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
  const tmp11 = useBoostCountAnimatedStyles(first);
  const tmp12 = useBoostCountAnimatedStyles(!first);
  const tmp13 = first(15328);
  const tmp13Result = tmp13(fractionalPremiumInfo.endsAt, guild(15328).CountDownMessageTypes.LONG_TIME_LEFT);
  let obj3 = guild(9317);
  const isInReverseTrial = obj3.useIsInReverseTrial();
  const total = first(9241)(premiumGroupRole.guild.id).total;
  ref = stateFromStores1.useRef(-1);
  const items3 = [first, memo];
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
  let obj4 = first(2174);
  const isPremiumResult = obj4.isPremium(stateFromStores);
  if (premiumGroupRole === guild(1401).PremiumSubscriptionGroupRole.MEMBER) {
    const obj5 = { style: tmp.boostingUnavailablePill };
    tmp19 = closure_12(tmp4(15388), obj5);
  } else {
    tmp19 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      const obj6 = { fpDurationText: tmp13Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp19 = closure_12(tmp4(15390), obj6);
    }
  }
  const obj7 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 }, colors: items4, locations: [0, 0.3221, 0.429, 0.7606, 1], useAngle: true, style: tmp.gradient, children: closure_13(tmp4Result3, obj8) };
  items4 = [, , , , ];
  const tmp4Result = first(5893);
  items4[0] = first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1;
  items4[1] = first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2;
  items4[2] = first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3;
  items4[3] = first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4;
  items4[4] = first(575).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5;
  obj8 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient, children: items5 };
  items5 = [, , , ];
  tmp4Result3 = first(5893);
  items5[0] = closure_12(first(16001), { guild });
  const obj9 = { style: tmp.headerContent, children: items6 };
  const obj10 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm", children: intl.string(guild(1113).t["AF+Tyh"]) };
  const Heading = tmp7(5929).Heading;
  intl = tmp7(1113).intl;
  items6 = [closure_12(Heading, obj10), , , , ];
  const obj11 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild, size: guild(7720).GuildIconSizes.LARGE };
  const tmp4Result4 = first(7720);
  items6[1] = closure_12(tmp4Result4, obj11);
  const obj12 = {
    onPress: function handleBoostCountPress() {
      window.clearTimeout(ref.current);
      closure_2((arg0) => !arg0);
    },
    children: items7
  };
  const PressableOpacity = tmp7(7428).PressableOpacity;
  items7 = [, ];
  const obj13 = { style: tmp.guildName, color: "text-overlay-light", variant: "body-md/semibold", children: guild.name };
  items7[0] = closure_12(guild(5929).Text, obj13);
  const obj15 = { style: items8, children: items9 };
  items8 = [tmp12, tmp.totalBoostCountWrapper];
  const obj14 = { style: tmp.guildBoostCountWrapper, children: items10 };
  View = tmp4(1655).View;
  const obj16 = { style: tmp.guildBoostCountIcon, source: first(15375), color: first(575).unsafe_rawColors.GUILD_BOOSTING_PINK, size: guild(1187).Icon.Sizes.SMALL };
  const Icon = tmp7(1187).Icon;
  items9 = [closure_12(Icon, obj16), ];
  const obj17 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "body-sm/semibold", color: "text-overlay-light", children: intl2.format(guild(1113).t["pob/cL"], { subscriptions: total }) };
  const Text = tmp7(5929).Text;
  intl2 = tmp7(1113).intl;
  items9[1] = closure_12(Text, obj17);
  items10 = [closure_13(View, obj15), ];
  const obj18 = { style: items11, children: closure_12(Text2, obj19) };
  items11 = [tmp11, tmp.guildBoostCurrentUserCountWrapper];
  const View2 = tmp4(1655).View;
  obj19 = { style: items12, variant: "body-sm/semibold", color: "text-overlay-light", children: intl3.format(guild(1113).t.xXb78j, { numSubscriptions: memo }) };
  items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  Text2 = tmp7(5929).Text;
  intl3 = tmp7(1113).intl;
  items10[1] = closure_12(View2, obj18);
  items7[1] = closure_13(memo, obj14);
  items6[2] = closure_13(PressableOpacity, obj12);
  items6[3] = tmp19;
  const obj20 = { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants3.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult };
  items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = closure_12(first(10799), obj20);
  items5[1] = closure_13(memo, obj9);
  const obj21 = { style: tmp.headerStars };
  items5[2] = closure_12(first(16004), obj21);
  const obj22 = { style: tmp.headerWave };
  items5[3] = closure_12(first(16005), obj22);
  const items14 = [closure_12(tmp4Result, obj7), ];
  const obj23 = { style: items15, children: closure_12(Button, obj26) };
  items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  Button = tmp7(5936).Button;
  const tmp22 = closure_13;
  if (isPremiumResult) {
    const obj24 = {
      variant: "secondary",
      text: intl5.string(guild(1113).t["8MYSQw"]),
      onPress: function handleGiftPress() {
          let obj4;
          const obj = BoostingActionCreators;
          obj.closeApplyBoostModal();
          const obj3 = { analyticsLocation: obj4, analyticsLocations };
          obj4 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
          const obj2 = utils_openGiftModal;
          obj2.openGiftModal(obj3);
        },
      icon: closure_12(Icon2, obj25),
      grow: true
    };
    intl5 = tmp7(1113).intl;
    obj25 = { size: guild(1187).Icon.Sizes.SMALL, source: first(16006), style: tmp.giftIcon };
    Icon2 = tmp7(1187).Icon;
    obj26 = obj24;
  } else {
    obj26 = {
      variant: "secondary",
      text: intl4.string(guild(1113).t.pj0XBN),
      onPress: function handleNavigateToPremium() {
          let obj2;
          const obj = { analyticsLocation: obj2, analyticsLocations };
          obj2 = { page: constants.PREMIUM_GUILD_USER_MODAL, section: constants2.HEADER, object: metroImportAll.BUTTON_CTA };
          openPremiumModalDefault(obj);
        },
      grow: true
    };
    intl4 = tmp7(1113).intl;
  }
  const obj27 = { children: items14 };
  items14[1] = closure_12(memo, obj23);
  return tmp22(memo, obj27);
};
