// Module ID: 17026
// Function ID: 17027
// Name: PremiumTabBadge
// Dependencies: [32, 19, 17, 2181, 1387, 7741, 21, 5141, 575, 5148, 5376, 5747, 6148, 1260, 10739, 1187, 17027, 7751, 8652, 2176, 5171, 4974, 504, 7693, 8648, 8647, 15448, 17028, 1113, 5710, 1092, 1377, 2]
// Exports: default

// Module 17026 (PremiumTabBadge)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import intl9 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtils from "PremiumUtils" /* 2176 */;
import dismissible_content from "dismissible_content" /* 4974 */;
import shared from "shared" /* 5148 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5171 */;
import useThemeDefault from "useTheme" /* 5376 */;
import LinearGradientDefault from "LinearGradient" /* 5710 */;
import Text_Text from "Text/Text" /* 5747 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6148 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7693 */;
import ColorConstants from "ColorConstants" /* 7741 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7751 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8647 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8648 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8652 */;
import MarketingComponentType from "MarketingComponentType" /* 10739 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 15448 */;
import PremiumTabBadgeCopy from "PremiumTabBadgeCopy" /* 17028 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2181 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
let tmp2;
const AssetRegistryDefault = tmp2(17027);
function ThemedTabBadge(label) {
  let Text;
  let items1;
  let obj3;
  label = label.label;
  const tmp = closure_10();
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(useThemeDefault());
  const items = [tmp.badge, ];
  items[1] = isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme;
  let str = "text-overlay-light";
  const obj2 = { style: items, children: metroImportAll(Text, obj3) };
  Text = Text_Text.Text;
  const tmp6 = View;
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj3 = { variant: "body-xs/semibold", color: str, style: items1, children: label };
  items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp);
  return metroImportAll(tmp6, obj2);
}
function OfferBadge(componentId) {
  let acked;
  let ackedBadgeCopy;
  let badgeCopy;
  let items;
  let items1;
  let promotionId;
  let tmp9;
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const tmp = closure_10();
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId } };
  const tmp4 = useTrackImpressionDefault;
  ({ component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId });
  const obj3 = { disableTrack: null == componentId };
  tmp4(obj, obj3);
  if (acked) {
    const obj4 = { style: tmp.acked, children: items };
    const obj5 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
    const Icon = tmp5(1187).Icon;
    items = [metroImportAll(Icon, obj5), ];
    const obj6 = { variant: "body-xs/semibold", color: "interactive-text-default", style: items1, children: ackedBadgeCopy };
    items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp);
    items[1] = metroImportAll(Text_Text.Text, obj6);
    tmp9 = React4(View, obj4);
  } else {
    const obj7 = { label: badgeCopy };
    tmp9 = metroImportAll(ThemedTabBadge, obj7);
  }
  return tmp9;
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
  let first;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj16;
  let obj8;
  let premiumTypeSubscription;
  let tmp14;
  let tmp18;
  const tmp = closure_10();
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj2.usePremiumDiscountOffer();
  const obj4 = PremiumUtils;
  const hasTier2Premium = obj4.useHasTier2Premium();
  const obj5 = DismissibleContentUnsafeUtils;
  const result = obj5.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  const items = [SubscriptionStore];
  const tmp2Result = get_initialized;
  const stateFromStores = tmp2Result.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
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
    [tmp14, r10051] = tmp11(items1, { bypassAutoDismiss: true });
    _slicedToArray(tmp11(items1, { bypassAutoDismiss: true }), 2);
    useSelectedDismissibleContent;
    if (!(!result && hasTier2Premium)) {
      let items2;
      let stringResult;
      let tmp49Result;
      if (hasTier2Premium) {
        items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp18, r10064] = tmp16(items2, { bypassAutoDismiss: true });
      _slicedToArray(tmp16(items2, { bypassAutoDismiss: true }), 2);
      const tmp2Result12 = useIsEligibleSenderForReferralProgram;
      const isEligibleSenderForReferralProgram = tmp2Result12.useIsEligibleSenderForReferralProgram();
      const tmp2Result13 = ReferralProgramUtils;
      const isReferralProgramEntrypointBadgeAcknowledged = tmp2Result13.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmp2Result14 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmp2Result14.usePromotionMarketingComponent(tmp2(10739).MarketingComponentType.PREMIUM_TAB);
      let prop = null;
      const useSelectedSnowflakeBoundDismissibleContent = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
      const tmp2Result15 = useSelectedDismissibleContent;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp2(4974).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      [first] = useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true);
      let premiumTabBadgeCopy = null;
      if (null != promotionMarketingComponent) {
        const tmp2Result16 = PremiumTabBadgeCopy;
        premiumTabBadgeCopy = tmp2Result16.getPremiumTabBadgeCopy(promotionMarketingComponent);
      }
      if (null != promotionMarketingComponent) {
        if (null != premiumTabBadgeCopy) {
          ({ badgeCopy: obj24.badgeCopy, acknowledgedBadgeCopy: obj24.ackedBadgeCopy } = premiumTabBadgeCopy);
          ({ id: obj24.componentId, promotionId: obj24.promotionId } = promotionMarketingComponent);
          const obj3 = { acked: first !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: null, ackedBadgeCopy: null, componentId: null, promotionId: null };
          return metroImportAll(OfferBadge, obj3);
        }
      }
      if (tmp14 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp2(1113).intl;
        stringResult = intl2.string(tmp2(1113).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp2(1113).intl;
          stringResult = intl.string(tmp2(1113).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        let tmp34;
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj6 = { label: intl3.string(intl9.t.RDE0Sc) };
          intl3 = tmp2(1113).intl;
          tmp34 = metroImportAll(ThemedTabBadge, obj6);
        }
        return tmp34;
      }
      if (!result && hasTier2Premium) {
        const obj7 = { style: tmp.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text4, obj8) };
        const items3 = [tmp.uppercase, ];
        const tmp54 = LinearGradientDefault;
        Text4 = tmp2(5747).Text;
        let text;
        const tmp2Result17 = PlatformUtils;
        if (tmp2Result17.isAndroid()) {
          text = tmp.text;
        }
        items3[1] = text;
        obj8 = { variant: "body-xs/semibold", color: "text-overlay-light", style: items3, children: intl8.string(intl9.t.y2b7CA) };
        intl8 = tmp2(1113).intl;
        tmp49Result = tmp52(tmp54, obj7);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        const tmp49 = metroImportAll;
        const tmp50 = OfferBadge;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj9 = { acked: true === hasAcknowledged, badgeCopy: intl6.string(intl9.t.OS9KPu), ackedBadgeCopy: intl7.string(intl9.t.OS9KPu) };
        intl6 = tmp2(1113).intl;
        intl7 = tmp2(1113).intl;
        tmp49Result = tmp49(tmp50, obj9);
      } else if (null != premiumDiscountOffer) {
        let tmp44;
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj10 = { style: items4, children: items5 };
          items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp);
          const obj11 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
          const Icon = tmp2(1187).Icon;
          items5 = [metroImportAll(Icon, obj11), ];
          const obj12 = { variant: "body-xs/semibold", color: "interactive-text-default", style: items6, children: intl5.string(intl9.t["/DTtr6"]) };
          items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp);
          const Text3 = tmp2(5747).Text;
          intl5 = tmp2(1113).intl;
          items5[1] = metroImportAll(Text3, obj12);
          tmp44 = React4(View, obj10);
        } else {
          const obj13 = { style: tmp.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text2, obj14) };
          const tmp43 = LinearGradientDefault;
          obj14 = { variant: "body-xs/semibold", color: "text-overlay-light", style: items7, children: intl4.string(intl9.t["/DTtr6"]) };
          items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp);
          Text2 = tmp2(5747).Text;
          intl4 = tmp2(1113).intl;
          tmp44 = metroImportAll(tmp43, obj13);
        }
        tmp49Result = tmp44;
      } else {
        tmp49Result = null;
        if (null != stringResult) {
          const obj15 = { style: tmp.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text, obj16) };
          const items8 = [tmp.uppercase, ];
          const tmp37 = LinearGradientDefault;
          Text = tmp2(5747).Text;
          let text1;
          const tmp2Result18 = PlatformUtils;
          if (tmp2Result18.isAndroid()) {
            text1 = tmp.text;
          }
          obj16 = { variant: "body-xs/semibold", color: "text-overlay-light", style: items8, children: stringResult };
          items8[1] = text1;
          tmp49Result = tmp35(tmp37, obj15);
        }
      }
      tmp34 = tmp49Result;
    }
    items2 = [];
  }
  items1 = [];
};
