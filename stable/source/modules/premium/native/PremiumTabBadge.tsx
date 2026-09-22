// Module ID: 15071
// Function ID: 15072
// Name: PremiumTabBadge
// Dependencies: [32, 19, 17, 4300, 1373, 7535, 21, 4636, 576, 4353, 4488, 4571, 4632, 8894, 1248, 10871, 1176, 15072, 7550, 8165, 4294, 4457, 1943, 504, 7491, 8161, 8160, 13508, 1114, 5068, 1093, 1363, 2]
// Exports: default

// Module 15071 (PremiumTabBadge)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import PremiumUtils from "PremiumUtils" /* 4294 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4353 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4457 */;
import shared from "shared" /* 4488 */;
import useThemeDefault from "useTheme" /* 4571 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7491 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7550 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8165 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8894 */;
import MarketingComponentType from "MarketingComponentType" /* 10871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4300 */;

const Text_Text = tmp(4632);
const _modDef15072 = tmp5(15072);
require = fn;
function ThemedTabBadge(label) {
  const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  const tmp4 = closure_10();
  const isThemeDarkResult = shared.isThemeDark(useThemeDefault());
  const items = [tmp4.badge, ];
  const obj3 = { style: items, children: null };
  items[1] = isThemeDarkResult ? tmp4.badgeBackgroundDarkTheme : tmp4.badgeBackgroundLightTheme;
  const obj4 = { variant: badgeTextVariant, color: null, style: null, children: null };
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj4.color = str;
  const items1 = [, ];
  ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
  obj4.style = items1;
  obj4.children = label.label;
  obj3.children = React6(Text_Text.Text, obj4);
  return React6(View, obj3);
}
function OfferBadge(componentId) {
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy, promotionId } = componentId);
  const badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  const tmp4 = closure_10();
  const obj2 = { type: null, name: null, properties: null };
  obj2.type = discord_common_AnalyticsUtils.ImpressionTypes.VIEW;
  obj2.name = discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp6 = useTrackImpressionDefault;
  obj2.properties = { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId };
  tmp6(obj2, { disableTrack: null == componentId });
  if (acked) {
    const obj5 = { style: tmp4.acked, children: null };
    const obj6 = { source: _modDef15072, size: tmp(1176).Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
    const items = [React6(tmp(1176).Icon, obj6), ];
    const obj7 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
    const items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
    obj7.style = items1;
    obj7.children = ackedBadgeCopy;
    items[1] = React6(tmp(4632).Text, obj7);
    obj5.children = items;
    let tmp10 = React7(View, obj5);
  } else {
    const obj8 = { label: badgeCopy };
    tmp10 = React6(ThemedTabBadge, obj8);
  }
  return tmp10;
}
const View = fn(17).View;
let closure_6 = fn(1373).PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
const Gradients = fn(7535).Gradients;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { tag: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round }, badge: null, badgeBackgroundLightTheme: null, badgeBackgroundDarkTheme: null, acked: null, ackedBadge: null, icon: null, uppercase: null, text: null, premiumDiscountBadge: null };
let obj3 = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: nativeDefault.radii.round };
obj2.badge = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
let obj4 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: nativeDefault.radii.round };
obj2.badgeBackgroundLightTheme = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.badgeBackgroundDarkTheme = { backgroundColor: nativeDefault.colors.WHITE };
let obj6 = { backgroundColor: nativeDefault.colors.WHITE };
obj2.acked = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let obj7 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
obj2.ackedBadge = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.icon = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.uppercase = { textTransform: "uppercase" };
obj2.text = { paddingBottom: 2 };
let obj9 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj2.premiumDiscountBadge = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: nativeDefault.radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let badgeTextVariant = useBadgeTextVariant.useBadgeTextVariant();
  let intl = closure_10();
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  const premiumDiscountOffer = usePremiumDiscountOffer.usePremiumDiscountOffer();
  const hasTier2Premium = PremiumUtils.useHasTier2Premium();
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  let tmp7 = !result;
  if (!result) {
    tmp7 = hasTier2Premium;
  }
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  useSelectedDismissibleContent;
  if (trialId === closure_6) {
    if (!tmp7) {
      let items1 = [tmp(1943).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    [tmp14, r10055] = tmp11(items1, undefined, true);
    tmp(7491);
    if (!tmp7) {
      if (hasTier2Premium) {
        let items2 = [tmp(1943).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp18, r10067] = tmp12(tmp16(items2, undefined, true), 2);
      const tmp12Result = tmp12(tmp16(items2, undefined, true), 2);
      const isEligibleSenderForReferralProgram = tmp(8161).useIsEligibleSenderForReferralProgram();
      const tmpResult11 = tmp(8161);
      const isReferralProgramEntrypointBadgeAcknowledged = tmp(8160).useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult12 = tmp(8160);
      const promotionMarketingComponent = tmp(13508).usePromotionMarketingComponent(tmp(10871).MarketingComponentType.PREMIUM_TAB);
      const tmpResult14 = tmp(7491);
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp(1943).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      const tmpResult13 = tmp(13508);
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          const obj4 = { acked: tmp27 !== tmp(1943).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: null, promotionId: null };
          ({ id: obj25.componentId, promotionId: obj25.promotionId } = promotionMarketingComponent);
          return React6(OfferBadge, obj4);
        }
      }
      if (tmp14 === tmp(1943).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl3 = tmp(1114).intl;
        let stringResult = intl3.string(tmp(1114).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp18 === tmp(1943).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl2 = tmp(1114).intl;
          stringResult = intl2.string(tmp(1114).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj7 = { label: null };
          const intl4 = tmp(1114).intl;
          obj7.label = intl4.string(tmp(1114).t.RDE0Sc);
          return React6(ThemedTabBadge, obj7);
        }
      }
      if (tmp7) {
        const obj8 = { style: intl.tag, colors: Gradients.PREMIUM_TIER_2, start: tmp(1093).HorizontalGradient.START, end: tmp(1093).HorizontalGradient.END, children: null };
        const obj9 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
        const items3 = [intl.uppercase, ];
        const tmp52 = LinearGradientDefault;
        let text;
        if (tmpResult15.isAndroid()) {
          text = intl.text;
        }
        items3[1] = text;
        obj9.style = items3;
        intl = tmp(1114).intl;
        badgeTextVariant = intl.string(tmp(1114).t.y2b7CA);
        obj9.children = badgeTextVariant;
        obj8.children = React6(tmp(4632).Text, obj9);
        let tmp47Result = tmp50(tmp52, obj8);
        tmpResult15 = tmp(1363);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj10 = { acked: true === hasAcknowledged, badgeCopy: null, ackedBadgeCopy: null };
        const intl7 = tmp(1114).intl;
        obj10.badgeCopy = intl7.string(tmp(1114).t.OS9KPu);
        const intl8 = tmp(1114).intl;
        obj10.ackedBadgeCopy = intl8.string(tmp(1114).t.OS9KPu);
        tmp47Result = React6(OfferBadge, obj10);
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj11 = { style: null, children: null };
          const items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = intl);
          obj11.style = items4;
          const obj12 = { source: _modDef15072, size: tmp(1176).Icon.Sizes.EXTRA_SMALL, color: intl.icon.color, style: intl.icon };
          const items5 = [React6(tmp(1176).Icon, obj12), ];
          const obj13 = { variant: badgeTextVariant, color: "interactive-text-default", style: null, children: null };
          const items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = intl);
          obj13.style = items6;
          const intl6 = tmp(1114).intl;
          obj13.children = intl6.string(tmp(1114).t["/DTtr6"]);
          items5[1] = React6(tmp(4632).Text, obj13);
          obj11.children = items5;
          let tmp41 = React7(View, obj11);
        } else {
          const obj14 = { style: intl.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: tmp(1093).HorizontalGradient.START, end: tmp(1093).HorizontalGradient.END, children: null };
          const obj15 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
          const items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = intl);
          obj15.style = items7;
          const intl5 = tmp(1114).intl;
          obj15.children = intl5.string(tmp(1114).t["/DTtr6"]);
          obj14.children = React6(tmp(4632).Text, obj15);
          tmp41 = React6(LinearGradientDefault, obj14);
        }
      } else {
        tmp47Result = null;
        if (null != stringResult) {
          const obj16 = { style: intl.tag, colors: Gradients.PREMIUM_TIER_2, start: tmp(1093).HorizontalGradient.START, end: tmp(1093).HorizontalGradient.END, children: null };
          const obj17 = { variant: badgeTextVariant, color: "text-overlay-light", style: null, children: null };
          const items8 = [intl.uppercase, ];
          const tmp34 = LinearGradientDefault;
          let text1;
          if (tmpResult16.isAndroid()) {
            text1 = intl.text;
          }
          items8[1] = text1;
          obj17.style = items8;
          obj17.children = stringResult;
          obj16.children = React6(tmp(4632).Text, obj17);
          tmp47Result = tmp32(tmp34, obj16);
          tmpResult16 = tmp(1363);
        }
      }
      const tmp12Result2 = tmp12(tmpResult14.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
    }
    items2 = [];
    const tmp13 = _slicedToArray(tmp11(items1, undefined, true), 2);
  }
  items1 = [];
};
