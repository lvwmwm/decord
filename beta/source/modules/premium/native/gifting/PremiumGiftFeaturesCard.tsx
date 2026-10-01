// Module ID: 10215
// Function ID: 10216
// Name: PremiumGiftFeaturesCard
// Dependencies: [19, 17, 10128, 1374, 1085, 21, 576, 4836, 5836, 504, 10203, 8673, 10216, 10217, 8294, 8687, 8685, 4832, 1115, 8694, 5281, 10218, 4540, 5293, 10219, 2011, 2]

// Module 10215 (PremiumGiftFeaturesCard)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import StringUtils from "StringUtils" /* 2011 */;
import native from "native" /* 4540 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import TextStylesDefault from "TextStyles" /* 5836 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8294 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8673 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 8685 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8687 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8694 */;
import MarketingComponentType from "MarketingComponentType" /* 10203 */;
import usePremiumProductPricingStringDefault from "usePremiumProductPricingString" /* 10216 */;
import useShouldShowGiftingPromotionDecoDefault from "useShouldShowGiftingPromotionDeco" /* 10217 */;
import MarketingComponentHooks from "MarketingComponentHooks" /* 10218 */;
import PremiumGiftPromotionDetailsDefault from "PremiumGiftPromotionDetails" /* 10219 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let marketingComponentByType;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj5;
let obj6;
let obj7;
let obj9;
function PremiumGiftPlanSelectPromotionDetails(config) {
  let header;
  let intl3;
  let isSelected;
  let items;
  let mobileBody;
  let numClaimableRewards;
  let obj3;
  let onPress;
  let tmp6;
  let tmp7;
  config = config.config;
  ({ numClaimableRewards, isSelected, onPress } = config);
  const tmp = closure_15(config.isLargeSize);
  obj = MarketingComponentHooks;
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(config.avatarAsset, true);
  const obj2 = { theme: metroImportAll.DARK, children: tmp6(tmp7, obj3) };
  const ThemeContextProvider = native.ThemeContextProvider;
  obj3 = { style: tmp.promotionDetailsContainer, colors: [4294967102, 4294967053], children: items };
  obj4 = { imageUrl: themeAndReducedMotionAwareAssetUrl, title: header, subtitle: mobileBody, subtitleColor: "text-default", shouldAnimate: isSelected };
  tmp7 = LinearGradientDefault;
  const tmp8 = PremiumGiftPromotionDetailsDefault;
  const obj5 = StringUtils;
  tmp6 = authStore;
  if (obj5.isNullOrEmpty(config.header)) {
    const intl = tmp2(1115).intl;
    header = intl.string(tmp2(1115).t.OEtqpm);
  } else {
    header = config.header;
  }
  const tmp2Result = StringUtils;
  if (tmp2Result.isNullOrEmpty(config.mobileBody)) {
    const intl2 = tmp2(1115).intl;
    const obj6 = { availableCount: numClaimableRewards };
    mobileBody = intl2.formatToPlainString(tmp2(1115).t["2h5M+X"], obj6);
  } else {
    mobileBody = config.mobileBody;
  }
  items = [React4(tmp8, obj4), ];
  const obj7 = { variant: "primary-overlay", text: intl3.string(intl5.t.Ve9Ge6), onPress };
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items[1] = React4(Button, obj7);
  return React4(ThemeContextProvider, obj2);
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
let obj8 = { default: obj9, compact: { marginTop: nativeDefault.space.PX_12 }, smallCompact: { marginTop: nativeDefault.space.PX_8 } };
obj9 = { marginTop: nativeDefault.space.PX_8 };
({ marginTop: nativeDefault.space.PX_12 });
const obj12 = { default: { marginTop: nativeDefault.space.PX_24 }, compact: { marginTop: nativeDefault.space.PX_12 }, smallCompact: { marginTop: nativeDefault.space.PX_8 } };
({ marginTop: nativeDefault.space.PX_8 });
({ marginTop: nativeDefault.space.PX_24 });
({ marginTop: nativeDefault.space.PX_12 });
({ marginTop: nativeDefault.space.PX_8 });
let closure_15 = createStyles.createStyles(() => {
  let obj2;
  obj = { card: obj2, logo: { marginTop: nativeDefault.space.PX_40, marginStart: nativeDefault.space.PX_24 }, pricing: { maxWidth: 140, marginStart: nativeDefault.space.PX_24 }, featureTitle: { marginStart: nativeDefault.space.PX_24 }, features: { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_24 }, button: { marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 }, featureIcon: { width: 24, height: 24 }, featureText: obj8, promotionDetailsContainer: { marginHorizontal: nativeDefault.space.PX_24, marginTop: nativeDefault.space.PX_20, marginBottom: nativeDefault.space.PX_32, padding: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm } };
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
  const Text = tmp2(4832).Text;
  intl = tmp2(1115).intl;
  items3[2] = React4(Text, obj5);
  const obj6 = { style: items5, variant: "heading-sm/bold", color: "text-overlay-light", children: intl2.string(intl5.t.JgsVht) };
  items5 = [tmp6.featureTitle, obj4[str]];
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
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
  Button = tmp2(5281).Button;
  if (premiumType === hasOwnProperty.TIER_0) {
    const intl4 = tmp2(1115).intl;
    stringResult = intl4.string(tmp2(1115).t.rk4Uu8);
  } else {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp2(1115).t.Ve9Ge6);
  }
  tmp12Result = tmp12(tmp13, obj9);
});
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftFeaturesCard.tsx");

export default memoResult;
