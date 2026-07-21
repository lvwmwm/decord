// Module ID: 13761
// Function ID: 104034
// Name: ThemedTabBadge
// Dependencies: [0, 4294967295, 0, 4294967295, 0, 809566208, 131072, 2373320704, 1711276034, 3154116647, 1174405124, 385875999, 33554480, 2097152000, 31, 653, 33, 6651, 7221, 12274, 1273, 10086, 1212, 8765, 3787, 12364, 2, 167289, 2582016, 310272, 2676224, 3526144]
// Exports: default

// Module 13761 (ThemedTabBadge)
import __exportStarResult1 from "__exportStarResult1";
import { View } from "__exportStarResult1";
import { PREMIUM_TIER_2_REFERRAL_TRIAL_ID as closure_6 } from "__exportStarResult1";

function ThemedTabBadge(label) {
  const tmp = callback4();
  let obj = arg1(dependencyMap[9]);
  const isThemeDarkResult = obj.isThemeDark(importDefault(dependencyMap[10])());
  obj = { style: items };
  const items = [tmp.badge, isThemeDarkResult ? tmp.badgeBackgroundDarkTheme : tmp.badgeBackgroundLightTheme];
  obj = { variant: "eyebrow" };
  let str = "text-overlay-light";
  if (isThemeDarkResult) {
    str = "text-overlay-dark";
  }
  obj.color = str;
  obj.style = tmp.text;
  obj.children = label.label;
  obj.children = closure_8(arg1(dependencyMap[11]).Text, obj);
  return closure_8(View, obj);
}
function OfferBadge(componentId) {
  let acked;
  let ackedBadgeCopy;
  let badgeCopy;
  componentId = componentId.componentId;
  ({ acked, badgeCopy, ackedBadgeCopy } = componentId);
  const tmp = callback4();
  let obj = { type: arg1(dependencyMap[13]).ImpressionTypes.VIEW, name: arg1(dependencyMap[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT };
  obj = { component_type: arg1(dependencyMap[14]).MarketingComponentType.PREMIUM_TAB, component_id: componentId };
  obj.properties = obj;
  obj = { disableTrack: null == componentId };
  importDefault(dependencyMap[12])(obj, obj);
  if (acked) {
    const obj1 = { style: tmp.acked };
    const obj2 = { source: importDefault(dependencyMap[16]), size: arg1(dependencyMap[15]).Icon.Sizes.EXTRA_SMALL, color: tmp.icon.color, style: tmp.icon };
    const items = [callback2(arg1(dependencyMap[15]).Icon, obj2), ];
    const obj3 = { style: tmp.text, children: ackedBadgeCopy };
    items[1] = callback2(arg1(dependencyMap[11]).Text, obj3);
    obj1.children = items;
    let tmp6 = callback3(View, obj1);
  } else {
    const obj4 = { label: badgeCopy };
    tmp6 = callback2(ThemedTabBadge, obj4);
  }
  return tmp6;
}
importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[3]);
const Gradients = arg1(dependencyMap[5]).Gradients;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: false, display: false, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.tag = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.badge = { borderRadius: importDefault(dependencyMap[8]).radii.round };
const obj1 = { borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.badgeBackgroundLightTheme = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.badgeBackgroundDarkTheme = { backgroundColor: importDefault(dependencyMap[8]).colors.WHITE };
const obj4 = { flexShrink: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391321045464, borderRadius: importDefault(dependencyMap[8]).radii.round, overflow: -101896492595637750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, height: 16125703161008383000000000000000000000000000000000000000000000000000000000000000000, width: 131140.9010046313, flex: 0.0000000000013786758193691202, backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE, display: 173179887481068780000000000000000000000000000000000000000000000000000000000000000000000000000 };
obj.acked = obj4;
const obj3 = { backgroundColor: importDefault(dependencyMap[8]).colors.WHITE };
obj.ackedBadge = { backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
const obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.icon = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj.text = { paddingBottom: 2 };
const obj6 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT, marginRight: 2 };
obj.premiumDiscountBadge = { borderRadius: importDefault(dependencyMap[8]).radii.round };
let closure_10 = obj.createStyles(obj);
const obj7 = { borderRadius: importDefault(dependencyMap[8]).radii.round };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default function PremiumTabBadge() {
  let string = callback4();
  let obj = arg1(dependencyMap[17]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = arg1(dependencyMap[18]);
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj3 = arg1(dependencyMap[19]);
  const hasTier2Premium = obj3.useHasTier2Premium();
  let obj4 = arg1(dependencyMap[20]);
  const tmp3 = !obj4.useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[21]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE) && hasTier2Premium;
  let obj5 = arg1(dependencyMap[22]);
  const items = [closure_5];
  const stateFromStores = obj5.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let trialId;
  if (null != stateFromStores) {
    trialId = stateFromStores.trialId;
  }
  arg1(dependencyMap[23]);
  if (trialId === closure_6) {
    if (!tmp3) {
      let items1 = [arg1(dependencyMap[21]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    const tmp11 = callback(tmp7(items1, undefined, true), 2);
    arg1(dependencyMap[23]);
    if (!tmp3) {
      if (hasTier2Premium) {
        let items2 = [arg1(dependencyMap[21]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      const tmp20 = callback(tmp16(items2, undefined, true), 2);
      let obj6 = arg1(dependencyMap[24]);
      const isEligibleSenderForReferralProgram = obj6.useIsEligibleSenderForReferralProgram();
      let obj7 = arg1(dependencyMap[25]);
      const isReferralProgramEntrypointBadgeAcknowledged = obj7.useIsReferralProgramEntrypointBadgeAcknowledged();
      let obj8 = arg1(dependencyMap[26]);
      const promotionMarketingComponent = obj8.usePromotionMarketingComponent(arg1(dependencyMap[14]).MarketingComponentType.PREMIUM_TAB);
      let obj9 = arg1(dependencyMap[23]);
      let prop = null;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = arg1(dependencyMap[21]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
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
          obj = { acked: tmp36 !== arg1(dependencyMap[21]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: promotionMarketingComponent.id };
          return callback2(OfferBadge, obj);
        }
      }
      if (tmp11[0] === arg1(dependencyMap[21]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = arg1(dependencyMap[27]).intl;
        let stringResult = intl2.string(arg1(dependencyMap[27]).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp20[0] === arg1(dependencyMap[21]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = arg1(dependencyMap[27]).intl;
          stringResult = intl.string(arg1(dependencyMap[27]).t.jyYgZ+);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          obj = {};
          const intl3 = arg1(dependencyMap[27]).intl;
          obj.label = intl3.string(arg1(dependencyMap[27]).t.RDE0Sc);
          return callback2(ThemedTabBadge, obj);
        }
      }
      if (tmp3) {
        obj1 = { style: string.tag, colors: Gradients.PREMIUM_TIER_2, start: arg1(dependencyMap[29]).HorizontalGradient.START, end: arg1(dependencyMap[29]).HorizontalGradient.END };
        const obj2 = {};
        const tmp80 = callback2;
        const tmp83 = importDefault(dependencyMap[28]);
        const tmp86 = callback2;
        let text;
        if (obj23.isAndroid()) {
          text = string.text;
        }
        obj2.style = text;
        const intl8 = arg1(dependencyMap[27]).intl;
        string = intl8.string;
        obj2.children = string(arg1(dependencyMap[27]).t.y2b7CA);
        obj1.children = tmp86(arg1(dependencyMap[11]).Text, obj2);
        let tmp75Result = tmp80(tmp83, obj1);
        const obj23 = arg1(dependencyMap[30]);
      } else if (null != premiumTrialOffer) {
        obj3 = {};
        let expires_at;
        if (null != premiumTrialOffer) {
          expires_at = premiumTrialOffer.expires_at;
        }
        obj3.acked = null != expires_at;
        const intl6 = arg1(dependencyMap[27]).intl;
        obj3.badgeCopy = intl6.string(arg1(dependencyMap[27]).t.OS9KPu);
        const intl7 = arg1(dependencyMap[27]).intl;
        obj3.ackedBadgeCopy = intl7.string(arg1(dependencyMap[27]).t.OS9KPu);
        tmp75Result = callback2(OfferBadge, obj3);
        const tmp75 = callback2;
        const tmp76 = OfferBadge;
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          obj4 = {};
          const items3 = [, ];
          ({ premiumDiscountBadge: arr4[0], ackedBadge: arr4[1] } = string);
          obj4.style = items3;
          obj5 = { source: importDefault(dependencyMap[16]), size: arg1(dependencyMap[15]).Icon.Sizes.EXTRA_SMALL, color: string.icon.color, style: string.icon };
          const items4 = [callback2(arg1(dependencyMap[15]).Icon, obj5), ];
          obj6 = { style: string.text };
          const intl5 = arg1(dependencyMap[27]).intl;
          obj6.children = intl5.string(arg1(dependencyMap[27]).t./DTtr6);
          items4[1] = callback2(arg1(dependencyMap[11]).Text, obj6);
          obj4.children = items4;
          let tmp66 = callback3(View, obj4);
        } else {
          obj7 = { style: string.premiumDiscountBadge, colors: [], start: arg1(dependencyMap[29]).HorizontalGradient.START, end: arg1(dependencyMap[29]).HorizontalGradient.END };
          obj8 = { style: string.text };
          const intl4 = arg1(dependencyMap[27]).intl;
          obj8.children = intl4.string(arg1(dependencyMap[27]).t./DTtr6);
          obj7.children = callback2(arg1(dependencyMap[11]).Text, obj8);
          tmp66 = callback2(importDefault(dependencyMap[28]), obj7);
          const tmp63 = importDefault(dependencyMap[28]);
        }
      } else {
        tmp75Result = null;
        if (null != stringResult) {
          obj9 = { style: string.tag, colors: Gradients.PREMIUM_TIER_2, start: arg1(dependencyMap[29]).HorizontalGradient.START, end: arg1(dependencyMap[29]).HorizontalGradient.END };
          const obj10 = {};
          const tmp51 = callback2;
          const tmp54 = importDefault(dependencyMap[28]);
          const tmp57 = callback2;
          let text1;
          if (obj14.isAndroid()) {
            text1 = string.text;
          }
          obj10.style = text1;
          obj10.children = stringResult;
          obj9.children = tmp57(arg1(dependencyMap[11]).Text, obj10);
          tmp75Result = tmp51(tmp54, obj9);
          const obj14 = arg1(dependencyMap[30]);
        }
      }
      const tmp35 = callback(obj9.useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 2);
    }
    items2 = [];
  }
  items1 = [];
};
