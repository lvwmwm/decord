// Module ID: 13935
// Function ID: 106569
// Name: ThemedTabBadge
// Dependencies: [57, 31, 27, 3782, 1851, 6671, 33, 4130, 689, 3976, 4066, 4126, 8604, 480, 7429, 1273, 13936, 6686, 7126, 3776, 3946, 1334, 566, 5802, 7831, 7830, 7425, 1212, 4554, 668, 477, 2]
// Exports: default

// Module 13935 (ThemedTabBadge)
import _slicedToArray from "_slicedToArray";
import "set";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_6 } from "GuildFeatures";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function ThemedTabBadge(label) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const isThemeDarkResult = obj.isThemeDark(importDefault(4066)());
  obj = { style: items };
  items = [tmp.badge, isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme];
  obj = { variant: "eyebrow" };
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj.color = str;
  obj.style = tmp.text;
  obj.children = label.label;
  obj.children = closure_8(require(4126) /* Text */.Text, obj);
  return closure_8(View, obj);
}
function OfferBadge(componentId) {
  let acked;
  let ackedBadgeCopy;
  let badgeCopy;
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy } = componentId);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { type: require(480) /* isThrottled */.ImpressionTypes.VIEW, name: require(480) /* isThrottled */.ImpressionNames.PREMIUM_MARKETING_COMPONENT };
  obj = { component_type: require(7429) /* MarketingComponentType */.MarketingComponentType.PREMIUM_TAB, component_id: componentId };
  obj.properties = obj;
  obj = { disableTrack: null == componentId };
  importDefault(8604)(obj, obj);
  if (acked) {
    const obj1 = { style: tmp.acked };
    const obj2 = { source: importDefault(13936), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
    const items = [callback2(require(1273) /* Button */.Icon, obj2), ];
    const obj3 = { variant: "eyebrow", color: "interactive-text-default", style: tmp.text, children: ackedBadgeCopy };
    items[1] = callback2(require(4126) /* Text */.Text, obj3);
    obj1.children = items;
    let tmp6 = callback3(View, obj1);
  } else {
    const obj4 = { label: badgeCopy };
    tmp6 = callback2(ThemedTabBadge, obj4);
  }
  return tmp6;
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: 4, paddingHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.tag = _createForOfIteratorHelperLoose;
let obj1 = { display: "flex", minWidth: 16, minHeight: 16, paddingHorizontal: 8, justifyContent: "center", alignItems: "center", gap: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.badge = obj1;
_createForOfIteratorHelperLoose.badgeBackgroundLightTheme = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.badgeBackgroundDarkTheme = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj4 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
_createForOfIteratorHelperLoose.acked = obj4;
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.ackedBadge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.icon = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
_createForOfIteratorHelperLoose.text = { paddingBottom: 2 };
let obj7 = { paddingVertical: 2, paddingHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, display: "flex", flexDirection: "row", alignItems: "center", textAlignVertical: "center" };
_createForOfIteratorHelperLoose.premiumDiscountBadge = obj7;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let string = _createForOfIteratorHelperLoose();
  let obj = require(6686) /* useGetTrialOffer */;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = require(7126) /* useGetDiscountOffer */;
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj3 = require(3776) /* _createForOfIteratorHelperLoose */;
  const hasTier2Premium = obj3.useHasTier2Premium();
  let obj4 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
  const tmp3 = !obj4.useIsDismissibleContentDismissed_UNSAFE(require(1334) /* DismissibleContent */.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE) && hasTier2Premium;
  let obj5 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj5.useStateFromStores(items, () => outer1_5.getPremiumTypeSubscription());
  let trialId;
  if (null != stateFromStores) {
    trialId = stateFromStores.trialId;
  }
  require(5802) /* useSelectedDismissibleContent */;
  if (trialId === closure_6) {
    if (!tmp3) {
      let items1 = [require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    const tmp11 = callback(tmp7(items1, undefined, true), 2);
    require(5802) /* useSelectedDismissibleContent */;
    if (!tmp3) {
      if (hasTier2Premium) {
        let items2 = [require(1334) /* DismissibleContent */.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      const tmp20 = callback(tmp16(items2, undefined, true), 2);
      let obj6 = require(7831) /* useIsEligibleSenderForReferralProgram */;
      const isEligibleSenderForReferralProgram = obj6.useIsEligibleSenderForReferralProgram();
      let obj7 = require(7830) /* isReferralProgramPopoverSeen */;
      const isReferralProgramEntrypointBadgeAcknowledged = obj7.useIsReferralProgramEntrypointBadgeAcknowledged();
      let obj8 = require(7425) /* usePromotionMarketingComponent */;
      const promotionMarketingComponent = obj8.usePromotionMarketingComponent(require(7429) /* MarketingComponentType */.MarketingComponentType.PREMIUM_TAB);
      let obj9 = require(5802) /* useSelectedDismissibleContent */;
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = require(1334) /* DismissibleContent */.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let promotionId;
      if (null != promotionMarketingComponent) {
        promotionId = promotionMarketingComponent.promotionId;
      }
      let str2 = "";
      if (null != promotionId) {
        str2 = promotionId;
      }
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          obj = { acked: tmp36 !== require(1334) /* DismissibleContent */.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: promotionMarketingComponent.id };
          return callback2(OfferBadge, obj);
        }
      }
      if (tmp11[0] === require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp20[0] === require(1334) /* DismissibleContent */.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = require(1212) /* getSystemLocale */.intl;
          stringResult = intl.string(require(1212) /* getSystemLocale */.t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          obj = {};
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj.label = intl3.string(require(1212) /* getSystemLocale */.t.RDE0Sc);
          return callback2(ThemedTabBadge, obj);
        }
      }
      if (tmp3) {
        obj1 = { style: string.tag, colors: Gradients.PREMIUM_TIER_2, start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END };
        const obj2 = { variant: "eyebrow", color: "text-overlay-light" };
        const tmp80 = callback2;
        const tmp83 = importDefault(4554);
        const tmp86 = callback2;
        let text;
        if (obj23.isAndroid()) {
          text = string.text;
        }
        obj2.style = text;
        const intl8 = require(1212) /* getSystemLocale */.intl;
        string = intl8.string;
        obj2.children = string(require(1212) /* getSystemLocale */.t.y2b7CA);
        obj1.children = tmp86(require(4126) /* Text */.Text, obj2);
        let tmp75Result = tmp80(tmp83, obj1);
        obj23 = require(477) /* set */;
      } else if (null != premiumTrialOffer) {
        obj3 = {};
        let expires_at;
        if (null != premiumTrialOffer) {
          expires_at = premiumTrialOffer.expires_at;
        }
        obj3.acked = null != expires_at;
        const intl6 = require(1212) /* getSystemLocale */.intl;
        obj3.badgeCopy = intl6.string(require(1212) /* getSystemLocale */.t.OS9KPu);
        const intl7 = require(1212) /* getSystemLocale */.intl;
        obj3.ackedBadgeCopy = intl7.string(require(1212) /* getSystemLocale */.t.OS9KPu);
        tmp75Result = callback2(OfferBadge, obj3);
        const tmp75 = callback2;
        const tmp76 = OfferBadge;
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          obj4 = {};
          const items3 = [, ];
          ({ premiumDiscountBadge: arr4[0], ackedBadge: arr4[1] } = string);
          obj4.style = items3;
          obj5 = { source: importDefault(13936), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL, color: string.icon.color, style: string.icon };
          const items4 = [callback2(require(1273) /* Button */.Icon, obj5), ];
          obj6 = { variant: "eyebrow", color: "interactive-text-default", style: string.text };
          const intl5 = require(1212) /* getSystemLocale */.intl;
          obj6.children = intl5.string(require(1212) /* getSystemLocale */.t["/DTtr6"]);
          items4[1] = callback2(require(4126) /* Text */.Text, obj6);
          obj4.children = items4;
          let tmp66 = callback3(View, obj4);
        } else {
          obj7 = { style: string.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END };
          obj8 = { variant: "eyebrow", color: "text-overlay-light", style: string.text };
          const intl4 = require(1212) /* getSystemLocale */.intl;
          obj8.children = intl4.string(require(1212) /* getSystemLocale */.t["/DTtr6"]);
          obj7.children = callback2(require(4126) /* Text */.Text, obj8);
          tmp66 = callback2(importDefault(4554), obj7);
          const tmp63 = importDefault(4554);
        }
      } else {
        tmp75Result = null;
        if (null != stringResult) {
          obj9 = { style: string.tag, colors: Gradients.PREMIUM_TIER_2, start: require(668) /* keys */.HorizontalGradient.START, end: require(668) /* keys */.HorizontalGradient.END };
          const obj10 = { variant: "eyebrow", color: "text-overlay-light" };
          const tmp51 = callback2;
          const tmp54 = importDefault(4554);
          const tmp57 = callback2;
          let text1;
          if (obj14.isAndroid()) {
            text1 = string.text;
          }
          obj10.style = text1;
          obj10.children = stringResult;
          obj9.children = tmp57(require(4126) /* Text */.Text, obj10);
          tmp75Result = tmp51(tmp54, obj9);
          obj14 = require(477) /* set */;
        }
      }
      const tmp35 = callback(obj9.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
    }
    items2 = [];
  }
  items1 = [];
};
