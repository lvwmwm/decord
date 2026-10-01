// Module ID: 14518
// Function ID: 14519
// Name: PremiumTabBadge
// Dependencies: [32, 19, 17, 4494, 1374, 6852, 21, 4836, 576, 4546, 4685, 4767, 4832, 8230, 1249, 10203, 1177, 14519, 6867, 7504, 4488, 4654, 2029, 504, 6806, 7500, 7499, 12959, 1115, 5293, 1094, 1364, 2]
// Exports: default

// Module 14518 (PremiumTabBadge)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import intl9 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4546 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6806 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6867 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 7499 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 7500 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7504 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import MarketingComponentType from "MarketingComponentType" /* 10203 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 12959 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp5;
const AssetRegistryDefault = tmp5(14519);
function ThemedTabBadge(label) {
  let Text;
  let items1;
  let obj4;
  let str;
  label = label.label;
  const obj = useBadgeTextVariant;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const tmp4 = closure_10();
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(useThemeDefault());
  const items = [tmp4.badge, ];
  items[1] = isThemeDarkResult ? tmp4.badgeBackgroundDarkTheme : tmp4.badgeBackgroundLightTheme;
  const obj3 = { style: items, children: metroImportAll(Text, obj4) };
  obj4 = { variant: badgeTextVariant, color: str, style: items1, children: label };
  str = "text-overlay-light";
  Text = Text_Text.Text;
  const tmp7 = View;
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
  return metroImportAll(tmp7, obj3);
}
function OfferBadge(componentId) {
  let acked;
  let ackedBadgeCopy;
  let badgeCopy;
  let items;
  let items1;
  let promotionId;
  let tmp10;
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const obj = useBadgeTextVariant;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const tmp4 = closure_10();
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId } };
  const tmp6 = useTrackImpressionDefault;
  ({ component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId });
  const obj4 = { disableTrack: null == componentId };
  tmp6(obj2, obj4);
  if (acked) {
    const obj5 = { style: tmp4.acked, children: items };
    const obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
    const Icon = tmp(1177).Icon;
    items = [metroImportAll(Icon, obj6), ];
    const obj7 = { variant: badgeTextVariant, color: "interactive-text-default", style: items1, children: ackedBadgeCopy };
    items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
    items[1] = metroImportAll(Text_Text.Text, obj7);
    tmp10 = React4(View, obj5);
  } else {
    const obj8 = { label: badgeCopy };
    tmp10 = metroImportAll(ThemedTabBadge, obj8);
  }
  return tmp10;
}
const View = react_native.View;
let closure_6 = PremiumConstants.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = ColorConstants.Gradients;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { tag: obj2, badge: obj3, badgeBackgroundLightTheme: obj4, badgeBackgroundDarkTheme: obj5, acked: obj6, ackedBadge: obj7, icon: obj8, uppercase: { textTransform: "uppercase" }, text: { paddingBottom: 2 }, premiumDiscountBadge: obj9 };
obj2 = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { backgroundColor: nativeDefault.colors.WHITE };
obj6 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
obj7 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj9 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let Text;
  let Text2;
  let Text4;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj15;
  let obj17;
  let obj9;
  let premiumTypeSubscription;
  let tmp15;
  let tmp19;
  const obj = useBadgeTextVariant;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const tmp4 = closure_10();
  const obj2 = usePremiumTrialOffer;
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  const obj3 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj3.usePremiumDiscountOffer();
  const obj5 = PremiumUtils;
  const hasTier2Premium = obj5.useHasTier2Premium();
  const obj6 = DismissibleContentUnsafeUtils;
  const result = obj6.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  const items = [SubscriptionStore];
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  useSelectedDismissibleContent;
  if (trialId === closure_6) {
    let items1;
    if (!(!result && hasTier2Premium)) {
      items1 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp15, r10055] = tmp12(items1, undefined, true);
    _slicedToArray(tmp12(items1, undefined, true), 2);
    useSelectedDismissibleContent;
    if (!(!result && hasTier2Premium)) {
      let items2;
      let stringResult;
      let tmp49Result;
      if (hasTier2Premium) {
        items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp19, r10067] = tmp17(items2, undefined, true);
      _slicedToArray(tmp17(items2, undefined, true), 2);
      const tmpResult11 = useIsEligibleSenderForReferralProgram;
      const isEligibleSenderForReferralProgram = tmpResult11.useIsEligibleSenderForReferralProgram();
      const tmpResult12 = ReferralProgramUtils;
      const isReferralProgramEntrypointBadgeAcknowledged = tmpResult12.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult13 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmpResult13.usePromotionMarketingComponent(tmp(10203).MarketingComponentType.PREMIUM_TAB);
      let prop = null;
      const useSelectedSnowflakeBoundDismissibleContent = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
      const tmpResult14 = useSelectedDismissibleContent;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp(2029).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      _slicedToArray(useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          ({ id: obj24.componentId, promotionId: obj24.promotionId } = promotionMarketingComponent);
          const obj4 = { acked: tmp29 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: null, promotionId: null };
          return metroImportAll(OfferBadge, obj4);
        }
      }
      if (tmp15 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp(1115).intl;
        stringResult = intl2.string(tmp(1115).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp19 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp(1115).intl;
          stringResult = intl.string(tmp(1115).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        let tmp34;
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj7 = { label: intl3.string(intl9.t.RDE0Sc) };
          intl3 = tmp(1115).intl;
          tmp34 = metroImportAll(ThemedTabBadge, obj7);
        }
        return tmp34;
      }
      if (!result && hasTier2Premium) {
        const obj8 = { style: tmp4.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text4, obj9) };
        const tmp54 = LinearGradientDefault;
        obj9 = { variant: badgeTextVariant, color: "text-overlay-light", style: items3, children: intl8.string(intl9.t.y2b7CA) };
        items3 = [tmp4.uppercase, ];
        Text4 = tmp(4832).Text;
        let text;
        const tmpResult15 = PlatformUtils;
        if (tmpResult15.isAndroid()) {
          text = tmp4.text;
        }
        items3[1] = text;
        intl8 = tmp(1115).intl;
        tmp49Result = tmp52(tmp54, obj8);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        const tmp49 = metroImportAll;
        const tmp50 = OfferBadge;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj10 = { acked: true === hasAcknowledged, badgeCopy: intl6.string(intl9.t.OS9KPu), ackedBadgeCopy: intl7.string(intl9.t.OS9KPu) };
        intl6 = tmp(1115).intl;
        intl7 = tmp(1115).intl;
        tmp49Result = tmp49(tmp50, obj10);
      } else if (null != premiumDiscountOffer) {
        let tmp44;
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj11 = { style: items4, children: items5 };
          items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp4);
          const obj12 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
          const Icon = tmp(1177).Icon;
          items5 = [metroImportAll(Icon, obj12), ];
          const obj13 = { variant: badgeTextVariant, color: "interactive-text-default", style: items6, children: intl5.string(intl9.t["/DTtr6"]) };
          items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp4);
          const Text3 = tmp(4832).Text;
          intl5 = tmp(1115).intl;
          items5[1] = metroImportAll(Text3, obj13);
          tmp44 = React4(View, obj11);
        } else {
          const obj14 = { style: tmp4.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text2, obj15) };
          const tmp43 = LinearGradientDefault;
          obj15 = { variant: badgeTextVariant, color: "text-overlay-light", style: items7, children: intl4.string(intl9.t["/DTtr6"]) };
          items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp4);
          Text2 = tmp(4832).Text;
          intl4 = tmp(1115).intl;
          tmp44 = metroImportAll(tmp43, obj14);
        }
        tmp49Result = tmp44;
      } else {
        tmp49Result = null;
        if (null != stringResult) {
          const obj16 = { style: tmp4.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text, obj17) };
          obj17 = { variant: badgeTextVariant, color: "text-overlay-light", style: items8, children: stringResult };
          items8 = [tmp4.uppercase, ];
          const tmp37 = LinearGradientDefault;
          Text = tmp(4832).Text;
          let text1;
          const tmpResult16 = PlatformUtils;
          if (tmpResult16.isAndroid()) {
            text1 = tmp4.text;
          }
          items8[1] = text1;
          tmp49Result = tmp35(tmp37, obj16);
        }
      }
      tmp34 = tmp49Result;
    }
    items2 = [];
  }
  items1 = [];
};
