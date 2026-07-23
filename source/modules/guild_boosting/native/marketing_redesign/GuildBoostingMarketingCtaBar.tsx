// Module ID: 12508
// Function ID: 96889
// Name: useBoostCountAnimatedStyles
// Dependencies: [57, 31, 27, 1849, 4023, 653, 1851, 33, 664, 4130, 689, 1273, 3991, 4131, 5464, 5484, 624, 12386, 7427, 4037, 3776, 1867, 12445, 12447, 4554, 12509, 4126, 1212, 5515, 4660, 12432, 6640, 12512, 12513, 4543, 4966, 9679, 12514, 8139, 2]
// Exports: default

// Module 12508 (useBoostCountAnimatedStyles)
import _slicedToArray from "_slicedToArray";
import _handleBoostPress from "_handleBoostPress";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "GuildBoostingMarketingWave";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_10;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function useBoostCountAnimatedStyles(first) {
  const _require = first;
  let obj = _require(3991);
  const fn = function o() {
    const obj = {};
    let num = 0;
    if (callback) {
      num = 1;
    }
    obj.opacity = callback(outer1_2[13]).withTiming(num, { duration: 250 });
    return obj;
  };
  obj = { withTiming: _require(4131).withTiming, isVisible: first };
  fn.__closure = obj;
  fn.__workletHash = 6895237370657;
  fn.__initData = closure_16;
  return obj.useAnimatedStyle(fn);
}
({ AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsSections: closure_10 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = 10 * require("set").Millis.SECOND;
_createForOfIteratorHelperLoose = { heading: { alignSelf: "center", marginBottom: 24, maxWidth: 395, paddingHorizontal: 16, textAlign: "center" }, headerContent: { paddingHorizontal: 16, paddingTop: 32, position: "relative", zIndex: 2 } };
_createForOfIteratorHelperLoose = { alignSelf: "center", borderRadius: 24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginBottom: 10, height: 48, width: 48 };
_createForOfIteratorHelperLoose.guildIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildIconText = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.guildName = { alignSelf: "center", maxWidth: "50%", textAlign: "center" };
_createForOfIteratorHelperLoose.guildBoostCountWrapper = { position: "relative" };
_createForOfIteratorHelperLoose.totalBoostCountWrapper = { display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 16, paddingBottom: 16, paddingTop: 3, position: "relative" };
_createForOfIteratorHelperLoose.guildBoostCountIcon = { flexGrow: 0, flexShrink: 0, marginRight: 3 };
_createForOfIteratorHelperLoose.guildBoostCount = { flexGrow: 0, flexShrink: 1, opacity: 0.6 };
_createForOfIteratorHelperLoose.guildBoostCurrentUserCountWrapper = { position: "absolute", top: 3, width: "100%" };
_createForOfIteratorHelperLoose.guildBoostCurrentUserCount = { alignSelf: "center" };
let obj2 = { alignSelf: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xl, maxWidth: 300, width: "90%" };
_createForOfIteratorHelperLoose.cta = obj2;
const merged = Object.assign(Button.generateBoxShadowStyle(require("Button").EIGHT_DP_ELEVATION_SHADOW_PARAMS));
_createForOfIteratorHelperLoose.ctaPrimary = {};
_createForOfIteratorHelperLoose.ctaSecondary = { marginTop: 10 };
_createForOfIteratorHelperLoose.giftIcon = { marginRight: 8 };
_createForOfIteratorHelperLoose.gradient = { overflow: "visible" };
_createForOfIteratorHelperLoose.headerWave = { bottom: -1, left: "-20%", position: "absolute", height: 125, width: "150%", zIndex: 1 };
_createForOfIteratorHelperLoose.headerStars = { height: "75%", left: "5%", opacity: 0.9, position: "absolute", top: 0, width: "90%", zIndex: 1 };
_createForOfIteratorHelperLoose.boostingUnavailablePill = { marginTop: -13, marginBottom: 23 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_16 = { code: "function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}" };
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj3 = {};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx");

export default function GuildBoostingMarketingCtaBar(premiumGroupRole) {
  let fractionalPremiumInfo;
  let guild;
  let intent;
  let onLayout;
  let onResult;
  let previousGuildSubscriptionSlot;
  const tmp = _createForOfIteratorHelperLoose();
  ({ fractionalPremiumInfo, guild } = premiumGroupRole);
  premiumGroupRole = premiumGroupRole.premiumGroupRole;
  ({ previousGuildSubscriptionSlot, onLayout, intent, onResult } = premiumGroupRole);
  let tmp2 = analyticsLocations(stateFromStores1.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  analyticsLocations = first(5464)(first(5484).BOOSTED_GUILD_PERKS_MODAL).analyticsLocations;
  let obj = guild(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getCurrentUser());
  let obj1 = guild(624);
  const items1 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.boostSlots);
  const items2 = [stateFromStores1, guild.id];
  const memo = stateFromStores1.useMemo(() => {
    const keys = Object.keys(stateFromStores1);
    return keys.filter((arg0) => {
      let tmp2 = null != tmp.premiumGuildSubscription;
      if (tmp2) {
        tmp2 = tmp.premiumGuildSubscription.guildId === outer1_0.id;
      }
      return tmp2;
    }).length;
  }, items2);
  const tmp4 = first(5464);
  const tmp8 = useBoostCountAnimatedStyles(first);
  const tmp9 = useBoostCountAnimatedStyles(!first);
  const tmp10 = first(12386);
  let obj2 = guild(7427);
  const isInReverseTrial = obj2.useIsInReverseTrial();
  _isNativeReflectConstruct = stateFromStores1.useRef(-1);
  const items3 = [first, memo];
  const effect = stateFromStores1.useEffect(() => {
    if (tmp) {
      const _window = window;
      _isNativeReflectConstruct.current = window.setTimeout(() => {
        outer1_2((arg0) => !arg0);
      }, outer1_14);
    }
    return () => {
      window.clearTimeout(outer1_6.current);
    };
  }, items3);
  let obj3 = first(3776);
  const tmp10Result = first(12386)(fractionalPremiumInfo.endsAt, guild(12386).CountDownMessageTypes.LONG_TIME_LEFT);
  if (premiumGroupRole === guild(1867).PremiumSubscriptionGroupRole.MEMBER) {
    obj = { style: tmp.boostingUnavailablePill };
    let tmp16 = callback(first(12445), obj);
  } else {
    tmp16 = null;
    if (fractionalPremiumInfo.fractionalState !== FractionalPremiumStates.NONE) {
      obj = { fpDurationText: tmp10Result, isInReverseTrial, style: tmp.boostingUnavailablePill };
      tmp16 = callback(first(12447), obj);
    }
  }
  obj1 = {};
  obj2 = { onLayout, angle: 160, angleCenter: { x: 0.5, y: 0.5 } };
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const tmp23 = callback2;
  const items4 = [first(689).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_1, first(689).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_2, first(689).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_3, first(689).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_4, first(689).unsafe_rawColors.PREMIUM_TIER_0_HEADER_GRADIENT_5];
  obj2.colors = items4;
  obj2.locations = [0, 0.3221, 0.429, 0.7606, 1];
  obj2.useAngle = true;
  obj2.style = tmp.gradient;
  obj3 = { angle: 0, angleCenter: { x: 0.5, y: 0.5 }, colors: ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0)"], locations: [0.12, 0.5], useAngle: true, style: tmp.gradient };
  const tmp26 = first(4554);
  const items5 = [callback(first(12509), { guild }), , , ];
  const obj4 = { style: tmp.headerContent };
  const obj5 = { style: tmp.heading, color: "text-overlay-light", variant: "display-sm" };
  const intl = guild(1212).intl;
  obj5.children = intl.string(guild(1212).t["AF+Tyh"]);
  const items6 = [callback(guild(4126).Text, obj5), , , , ];
  const obj6 = { style: tmp.guildIcon, textStyle: tmp.guildIconText, guild };
  const tmp27 = first(4554);
  obj6.size = guild(5515).GuildIconSizes.LARGE;
  items6[1] = callback(first(5515), obj6);
  const obj7 = {
    onPress() {
      window.clearTimeout(ref.current);
      dependencyMap((arg0) => !arg0);
    }
  };
  const obj8 = { style: tmp.guildName, color: "text-overlay-light", variant: "text-md/bold", children: guild.name };
  const items7 = [callback(guild(4126).Text, obj8), ];
  const obj9 = { style: tmp.guildBoostCountWrapper };
  const obj10 = { style: items8 };
  items8 = [tmp9, tmp.totalBoostCountWrapper];
  const obj11 = { style: tmp.guildBoostCountIcon, source: first(12432), color: first(689).unsafe_rawColors.GUILD_BOOSTING_PINK, size: guild(1273).Icon.Sizes.SMALL };
  const items9 = [callback(guild(1273).Icon, obj11), ];
  const obj12 = { style: tmp.guildBoostCount, accessibilityRole: "header", variant: "text-sm/bold", color: "text-overlay-light" };
  const intl2 = guild(1212).intl;
  obj12.children = intl2.format(guild(1212).t["pob/cL"], { subscriptions: first(4037)(premiumGroupRole.guild.id).total });
  items9[1] = callback(guild(4126).Text, obj12);
  obj10.children = items9;
  const items10 = [callback2(first(3991).View, obj10), ];
  const obj13 = { style: items11 };
  items11 = [tmp8, tmp.guildBoostCurrentUserCountWrapper];
  const obj14 = { style: null, variant: "text-sm/bold", color: "text-overlay-light" };
  const items12 = [, ];
  ({ guildBoostCount: arr13[0], guildBoostCurrentUserCount: arr13[1] } = tmp);
  obj14.style = items12;
  const intl3 = guild(1212).intl;
  obj14.children = intl3.format(guild(1212).t.xXb78j, { numSubscriptions: memo });
  obj13.children = callback(guild(4126).Text, obj14);
  items10[1] = callback(first(3991).View, obj13);
  obj9.children = items10;
  items7[1] = callback2(memo, obj9);
  obj7.children = items7;
  items6[2] = callback2(guild(4660).PressableOpacity, obj7);
  items6[3] = tmp16;
  const items13 = [, ];
  ({ cta: arr14[0], ctaPrimary: arr14[1] } = tmp);
  items6[4] = callback(first(6640), { styles: items13, guild, previousGuildSubscriptionSlot, analyticsSection: constants.HEADER, fractionalPremiumState: fractionalPremiumInfo.fractionalState, premiumGroupRole, intent, onResult });
  obj4.children = items6;
  items5[1] = callback2(memo, obj4);
  items5[2] = callback(first(12512), { style: tmp.headerStars });
  items5[3] = callback(first(12513), { style: tmp.headerWave });
  obj3.children = items5;
  obj2.children = callback2(tmp27, obj3);
  const items14 = [callback(tmp26, obj2), ];
  const obj18 = { style: items15 };
  items15 = [, ];
  ({ cta: arr16[0], ctaSecondary: arr16[1] } = tmp);
  if (isPremiumResult) {
    const obj19 = { variant: "secondary" };
    const intl5 = guild(1212).intl;
    obj19.text = intl5.string(guild(1212).t["8MYSQw"]);
    obj19.onPress = function onPress() {
      let obj = guild(4966);
      obj.closeApplyBoostModal();
      obj = { analyticsLocation: obj, analyticsLocations };
      obj = { page: outer1_9.PREMIUM_GUILD_USER_MODAL, section: outer1_10.HEADER, object: outer1_8.BUTTON_CTA };
      guild(9679).openGiftModal(obj);
    };
    const obj20 = { size: guild(1273).Icon.Sizes.SMALL, source: first(12514), style: tmp.giftIcon };
    obj19.icon = callback(guild(1273).Icon, obj20);
    obj19.grow = true;
    let obj21 = obj19;
  } else {
    obj21 = { variant: "secondary" };
    const intl4 = guild(1212).intl;
    obj21.text = intl4.string(guild(1212).t.pj0XBN);
    obj21.onPress = function onPress() {
      obj = { analyticsLocation: obj, analyticsLocations };
      obj = { page: outer1_9.PREMIUM_GUILD_USER_MODAL, section: outer1_10.HEADER, object: outer1_8.BUTTON_CTA };
      first(8139)(obj);
    };
    obj21.grow = true;
  }
  obj18.children = callback(guild(4543).Button, obj21);
  items14[1] = callback(memo, obj18);
  obj1.children = items14;
  return tmp23(memo, obj1);
};
