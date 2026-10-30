// Module ID: 10600
// Function ID: 10601
// Name: PremiumGiftFeaturesCard
// Dependencies: [19, 17, 9606, 1386, 1083, 21, 575, 5009, 6717, 504, 10589, 9894, 10601, 10602, 9505, 9908, 9906, 5619, 1114, 9915, 5629, 10603, 10588, 10604, 5075, 5582, 10605, 10607, 5735, 2028, 2]

// Module 10600 (PremiumGiftFeaturesCard)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import StringUtils from "StringUtils" /* 2028 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import TextStylesDefault from "TextStyles" /* 6717 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 9505 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 9894 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 9906 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 9908 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9915 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10588 */;
import MarketingComponentType from "MarketingComponentType" /* 10589 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10601 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10602 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10603 */;
import SlayerStorefrontTimeUtils from "SlayerStorefrontTimeUtils" /* 10604 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 10605 */;
import PremiumGiftCountdownBadgeDefault from "PremiumGiftCountdownBadge" /* 10607 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 9606 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import Constants from "Constants" /* 1083 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let marketingComponentByType;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj5;
let obj6;
let obj7;
let obj9;
function PremiumGiftPlanSelectPromotionDetails(config) {
  let ClockIcon;
  let giftPromotion;
  let header;
  let intl3;
  let isSelected;
  let items1;
  let mobileBody;
  let numClaimableRewards;
  let obj7;
  let onPress;
  let tmp10;
  let tmp12;
  let tmp9Result;
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  const tmp = closure_15(config.isLargeSize);
  obj = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  const enabled = GiftPromotionReminderExperiment.useConfig({ location: "PremiumGiftFeaturesCard" }).enabled;
  const items = [PromotionsStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft;
  SlayerStorefrontTimeUtils;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate, enabled);
  const obj3 = { theme: metroImportAll.DARK, children: tmp10(tmp12, obj4) };
  const ThemeContextProvider = tmp2(5075).ThemeContextProvider;
  const obj5 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: tmp9Result, title: header, subtitle: mobileBody, subtitleColor: "text-default", shouldAnimate: isSelected };
  tmp9Result = null != tickingFormattedLimitedOfferTimeLeft;
  obj4 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: items1 };
  tmp12 = LinearGradientDefault;
  tmp10 = authStore;
  const tmp13 = PremiumGiftPromotionDetailsDefault;
  if (tmp9Result) {
    const obj6 = { text: tickingFormattedLimitedOfferTimeLeft, icon: React4(ClockIcon, obj7), style: tmp.countdownBadge };
    obj7 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
    const tmp11Result = PremiumGiftCountdownBadgeDefault;
    ClockIcon = tmp2(5735).ClockIcon;
    tmp9Result = tmp9(tmp11Result, obj6);
  }
  const tmp2Result = StringUtils;
  if (tmp2Result.isNullOrEmpty(config.header)) {
    const intl = tmp2(1114).intl;
    header = intl.string(tmp2(1114).t.OEtqpm);
  } else {
    header = config.header;
  }
  const tmp2Result2 = StringUtils;
  if (tmp2Result2.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp2(1114).intl;
    obj8 = { availableCount: numClaimableRewards };
    mobileBody = intl2.formatToPlainString(tmp2(1114).t["2h5M+X"], obj8);
  } else {
    mobileBody = config.mobileBody;
  }
  items1 = [React4(tmp13, obj5), ];
  const obj9 = { variant: "primary-overlay", text: intl3.string(intl5.t.Ve9Ge6), onPress };
  const Button = tmp2(5629).Button;
  intl3 = tmp2(1114).intl;
  items1[1] = React4(Button, obj9);
  return React4(ThemeContextProvider, obj3);
}
const View = react_native.View;
({ PremiumTypes: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
({ Fonts: metroImportDefault, ThemeTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { default: obj2, compact: obj3, smallCompact: { paddingVertical: 2 } };
obj2 = { paddingVertical: nativeDefault.space.PX_8 };
obj3 = { paddingVertical: nativeDefault.space.PX_4 };
let obj4 = { default: obj5, compact: obj6, smallCompact: obj7 };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { marginTop: nativeDefault.space.PX_12 };
obj7 = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { default: obj9, compact: obj10, smallCompact: { marginTop: nativeDefault.space.PX_8 } };
obj9 = { marginTop: nativeDefault.space.PX_8 };
obj10 = { marginTop: nativeDefault.space.PX_12 };
const obj12 = { default: { marginTop: nativeDefault.space.PX_24 }, compact: { marginTop: nativeDefault.space.PX_12 }, smallCompact: { marginTop: nativeDefault.space.PX_8 } };
({ marginTop: nativeDefault.space.PX_8 });
({ marginTop: nativeDefault.space.PX_24 });
({ marginTop: nativeDefault.space.PX_12 });
({ marginTop: nativeDefault.space.PX_8 });
let closure_15 = createStyles.createStyles(() => {
  let obj2;
  obj = { card: obj2, logo: { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 }, pricing: { maxWidth: 140, marginStart: nativeDefault.space.PX_24 }, featureTitle: { marginStart: nativeDefault.space.PX_24 }, features: { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 }, button: { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 }, featureIcon: { width: 24, height: 24 }, featureText: obj8, promotionDetailsContainer: { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm }, countdownBadge: { alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 } };
  obj2 = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({ marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 });
  ({ maxWidth: 140, marginStart: nativeDefault.space.PX_24 });
  ({ marginStart: nativeDefault.space.PX_24 });
  ({ marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 });
  obj8 = { marginStart: -8 };
  ({ marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 });
  const tmp2 = TextStylesDefault;
  const merged1 = Object.assign(tmp2(metroImportDefault.PRIMARY_NORMAL, nativeDefault.colors.WHITE, 16));
  ({ marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm });
  ({ alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 });
  return obj;
});
const memoResult = react.memo(function PremiumGiftFeaturesCard(variant) {
  let Button;
  let claimableRewards;
  let intl;
  let intl2;
  let isSelected;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let onPress;
  let premiumType;
  let stringResult;
  let style;
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }));
  obj = get_initialized;
  const items = [PromotionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    marketingComponentByType = marketingComponentByType.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_PLAN_SELECTION_CARD_BANNER);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftPlanSelectionCardBanner" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftPlanSelectionCardBanner;
      }
    }
    return prop;
  });
  const tmp6 = closure_15(null != claimableRewards && 1 === claimableRewards.length);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, metroRequire.MONTH);
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, metroRequire.YEAR);
  const obj2 = { style: items1, children: null };
  items1 = [tmp6.card, style];
  const obj3 = { premiumType, style: items2 };
  items2 = [tmp6.card, style];
  const tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards && claimableRewards.length > 0;
  const tmp7Result = PremiumFeaturesBackgroundDefault;
  const merged1 = Object.assign(merged);
  const items3 = [React4(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = React4(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: items4, variant: "text-sm/medium", color: "text-overlay-light", children: intl.format(intl5.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 }) };
  items4 = [tmp6.pricing, obj8[str]];
  const Text = tmp2(5619).Text;
  intl = tmp2(1114).intl;
  items3[2] = React4(Text, obj5);
  const obj6 = { style: items5, variant: "heading-sm/bold", color: "text-overlay-light", children: intl2.string(intl5.t.JgsVht) };
  items5 = [tmp6.featureTitle, obj4[str]];
  const Text2 = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items3[3] = React4(Text2, obj6);
  const obj7 = { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] };
  items3[4] = React4(PremiumFeatureListDefault, obj7);
  items3[5] = React4(View, { style: { flexGrow: 1 } });
  const tmp14 = authStore;
  if (tmp11) {
    if (null != stateFromStores) {
      let tmp12Result;
      if (premiumType === hasOwnProperty.TIER_2) {
        obj8 = { config: stateFromStores, numClaimableRewards: claimableRewards.length, isLargeSize: null != claimableRewards && 1 === claimableRewards.length, isSelected, onPress };
        tmp12Result = tmp12(PremiumGiftPlanSelectPromotionDetails, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = tmp14(tmp7Result, obj3);
      return React4(View, obj2);
    }
  }
  const obj9 = { style: items6, children: React4(Button, { variant: "primary-overlay", text: stringResult, onPress }) };
  items6 = [tmp6.button, obj12[str]];
  Button = tmp2(5629).Button;
  if (premiumType === hasOwnProperty.TIER_0) {
    const intl4 = tmp2(1114).intl;
    stringResult = intl4.string(tmp2(1114).t.rk4Uu8);
  } else {
    const intl3 = tmp2(1114).intl;
    stringResult = intl3.string(tmp2(1114).t.Ve9Ge6);
  }
  tmp12Result = tmp12(tmp13, obj9);
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;
