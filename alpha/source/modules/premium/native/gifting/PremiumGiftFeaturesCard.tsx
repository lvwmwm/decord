// Module ID: 10416
// Function ID: 10417
// Name: PremiumGiftFeaturesCard
// Dependencies: [19, 17, 10329, 1374, 1085, 21, 576, 4866, 6033, 504, 10404, 8872, 10417, 10418, 8490, 8886, 8884, 4862, 1115, 8893, 5477, 10419, 10403, 10420, 4570, 5489, 10421, 10423, 4825, 2011, 2]

// Module 10416 (PremiumGiftFeaturesCard)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import StringUtils from "StringUtils" /* 2011 */;
import native from "native" /* 4570 */;
import Text_Text from "Text/Text" /* 4862 */;
import components_Button_Button from "components/Button/Button" /* 5477 */;
import LinearGradientDefault from "LinearGradient" /* 5489 */;
import TextStylesDefault from "TextStyles" /* 6033 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8872 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 8884 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8886 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8893 */;
import GiftPromotionReminderExperiment2 from "GiftPromotionReminderExperiment" /* 10403 */;
import MarketingComponentType from "MarketingComponentType" /* 10404 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10417 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10418 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10419 */;
import SlayerStorefrontTimeUtils from "SlayerStorefrontTimeUtils" /* 10420 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 10421 */;
import noop from "module_19" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10329 */;

require = fn;
function PremiumGiftPlanSelectPromotionDetails(config) {
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  const tmp = closure_15(config.isLargeSize);
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  const items = [PromotionsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => giftPromotion.getGiftPromotion());
  let endDate;
  if (stateFromStores != null) {
    endDate = stateFromStores.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = SlayerStorefrontTimeUtils.useTickingFormattedLimitedOfferTimeLeft(endDate, GiftPromotionReminderExperiment.useConfig({ location: "PremiumGiftFeaturesCard" }).enabled);
  obj4 = { theme: constants3.DARK, children: null };
  const obj5 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: null };
  const tmp9 = closure_1_10;
  const obj6 = { imageUrl: themeAndReducedMotionAwareAssetUrl, topContent: null, title: null, subtitle: null, subtitleColor: "text-default", shouldAnimate: null };
  let tmp8Result = null != tickingFormattedLimitedOfferTimeLeft;
  const tmp11 = LinearGradientDefault;
  if (tmp8Result) {
    const obj7 = { text: tickingFormattedLimitedOfferTimeLeft, icon: null, style: null };
    obj8 = { size: "xxs", color: tmp10(576).colors.ICON_OVERLAY_LIGHT };
    obj7.icon = tmp8(tmp2(4825).ClockIcon, obj8);
    obj7.style = tmp.countdownBadge;
    tmp8Result = tmp8(tmp10(10423), obj7);
    const tmp10Result = tmp10(10423);
  }
  obj6.topContent = tmp8Result;
  const tmp12 = PremiumGiftPromotionDetailsDefault;
  if (tmp2Result.isNullOrEmpty(config.header)) {
    const intl = tmp2(1115).intl;
    let header = intl.string(tmp2(1115).t.OEtqpm);
  } else {
    header = config.header;
  }
  obj6.title = header;
  tmp2Result = StringUtils;
  if (tmp2Result2.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp2(1115).intl;
    const obj9 = { availableCount: numClaimableRewards };
    let mobileBody = intl2.formatToPlainString(tmp2(1115).t["2h5M+X"], obj9);
  } else {
    mobileBody = config.mobileBody;
  }
  obj6.subtitle = mobileBody;
  obj6.shouldAnimate = isSelected;
  const items1 = [React7(tmp12, obj6), ];
  const obj10 = { variant: "primary-overlay", text: null, onPress: null };
  const intl3 = tmp2(1115).intl;
  obj10.text = intl3.string(util.t.Ve9Ge6);
  obj10.onPress = onPress;
  items1[1] = React7(components_Button_Button.Button, obj10);
  obj5.children = items1;
  obj4.children = tmp9(tmp11, obj5);
  return React7(native.ThemeContextProvider, obj4);
}
const View = fn(17).View;
const PremiumConstants = fn(1374);
({ PremiumTypes: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
const Constants = fn(1085);
({ Fonts: closure_7, ThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let obj = { default: { paddingVertical: nativeDefault.space.PX_8 }, compact: null, smallCompact: null };
let obj2 = { paddingVertical: nativeDefault.space.PX_8 };
obj.compact = { paddingVertical: nativeDefault.space.PX_4 };
obj.smallCompact = { paddingVertical: 2 };
let obj4 = { default: null, compact: null, smallCompact: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_4 };
obj4.default = { marginTop: nativeDefault.space.PX_24 };
let obj5 = { marginTop: nativeDefault.space.PX_24 };
obj4.compact = { marginTop: nativeDefault.space.PX_12 };
let obj6 = { marginTop: nativeDefault.space.PX_12 };
obj4.smallCompact = { marginTop: nativeDefault.space.PX_8 };
let obj8 = { default: null, compact: null, smallCompact: null };
let obj7 = { marginTop: nativeDefault.space.PX_8 };
obj8.default = { marginTop: nativeDefault.space.PX_8 };
let obj9 = { marginTop: nativeDefault.space.PX_8 };
obj8.compact = { marginTop: nativeDefault.space.PX_12 };
let obj10 = { marginTop: nativeDefault.space.PX_12 };
obj8.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const obj12 = { default: null, compact: null, smallCompact: null };
const obj11 = { marginTop: nativeDefault.space.PX_8 };
obj12.default = { marginTop: nativeDefault.space.PX_24 };
const obj13 = { marginTop: nativeDefault.space.PX_24 };
obj12.compact = { marginTop: nativeDefault.space.PX_12 };
const obj14 = { marginTop: nativeDefault.space.PX_12 };
obj12.smallCompact = { marginTop: nativeDefault.space.PX_8 };
const createStyles = fn(4866);
let closure_15 = createStyles.createStyles(() => {
  obj = { card: null, logo: null, pricing: null, featureTitle: null, features: null, button: null, featureIcon: null, featureText: null, promotionDetailsContainer: null, countdownBadge: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.card = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const obj2 = { justifyContent: "flex-start", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  obj.logo = { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 };
  const obj3 = { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 };
  obj.pricing = { maxWidth: 140, marginStart: nativeDefault.space.PX_24 };
  obj4 = { maxWidth: 140, marginStart: nativeDefault.space.PX_24 };
  obj.featureTitle = { marginStart: nativeDefault.space.PX_24 };
  const obj5 = { marginStart: nativeDefault.space.PX_24 };
  obj.features = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  const obj6 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 };
  obj.button = { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
  obj.featureIcon = { width: 24, height: 24 };
  obj8 = {};
  const obj7 = { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
  const merged1 = Object.assign(TextStylesDefault(constants2.PRIMARY_NORMAL, nativeDefault.colors.WHITE, 16));
  obj8.marginStart = -8;
  obj.featureText = obj8;
  obj.promotionDetailsContainer = { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
  const obj9 = { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm };
  obj.countdownBadge = { alignSelf: "flex-start", marginBottom: nativeDefault.space.PX_4 };
  return obj;
});
const obj15 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default noop.memo(function PremiumGiftFeaturesCard(variant) {
  ({ premiumType, onPress, style, claimableRewards, isSelected } = variant);
  if (isSelected === undefined) {
    isSelected = true;
  }
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  const merged = Object.assign(variant, Object.assign({ premiumType: 0, onPress: 0, style: 0, claimableRewards: 0, isSelected: 0, variant: 0 }));
  obj = initialize;
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
  let tmp5 = null != claimableRewards;
  if (tmp5) {
    tmp5 = 1 === claimableRewards.length;
  }
  const tmp6 = closure_15(tmp5);
  const tmp8 = usePremiumFeaturesDefault(premiumType);
  const tmp9 = usePremiumProductPricingStringDefault(premiumType, constants.MONTH);
  let tmp11 = useShouldShowGiftingPromotionDecoDefault(premiumType) && null != claimableRewards;
  if (tmp11) {
    tmp11 = claimableRewards.length > 0;
  }
  const obj2 = { style: null, children: null };
  const items1 = [tmp6.card, style];
  obj2.style = items1;
  const obj3 = { premiumType, style: null };
  const items2 = [tmp6.card, style];
  obj3.style = items2;
  const tmp10 = usePremiumProductPricingStringDefault(premiumType, constants.YEAR);
  const tmp14 = closure_1_10;
  const merged1 = Object.assign(merged);
  const items3 = [React7(PremiumFeaturesWumpusDefault, { premiumType }), , , , , , ];
  obj4 = { style: tmp6.logo, premiumType };
  items3[1] = React7(PremiumFeaturesLogoDefault, obj4);
  const obj5 = { style: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
  const items4 = [tmp6.pricing, obj8[str]];
  obj5.style = items4;
  const intl = tmp2(1115).intl;
  obj5.children = intl.format(util.t.Ob6fwp, { monthlyPrice: tmp9, yearlyPrice: tmp10 });
  items3[2] = React7(Text_Text.Text, obj5);
  const obj6 = { style: null, variant: "heading-sm/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp6.featureTitle, obj4[str]];
  obj6.style = items5;
  const intl2 = tmp2(1115).intl;
  obj6.children = intl2.string(util.t.JgsVht);
  items3[3] = React7(Text_Text.Text, obj6);
  items3[4] = React7(PremiumFeatureListDefault, { style: tmp6.features, features: tmp8, iconStyle: tmp6.featureIcon, labelStyle: tmp6.featureText, rowStyle: obj[str] });
  items3[5] = React7(View, { style: { flexGrow: 1 } });
  if (tmp11) {
    if (null != stateFromStores) {
      if (premiumType === hasOwnProperty.TIER_2) {
        obj8 = { config: stateFromStores, numClaimableRewards: claimableRewards.length, isLargeSize: tmp5, isSelected, onPress };
        let tmp12Result = tmp12(PremiumGiftPlanSelectPromotionDetails, obj8);
      }
      items3[6] = tmp12Result;
      obj3.children = items3;
      obj2.children = tmp14(tmp7Result, obj3);
      return tmp12(tmp13, obj2);
    }
  }
  const obj9 = { style: null, children: null };
  const items6 = [tmp6.button, obj12[str]];
  obj9.style = items6;
  if (premiumType === hasOwnProperty.TIER_0) {
    const intl4 = tmp2(1115).intl;
    let stringResult = intl4.string(tmp2(1115).t.rk4Uu8);
  } else {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t.Ve9Ge6);
  }
  obj9.children = React7(components_Button_Button.Button, { variant: "primary-overlay", text: stringResult, onPress });
  tmp12Result = tmp12(tmp13, obj9);
});
