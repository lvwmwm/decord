// Module ID: 15179
// Function ID: 15180
// Name: PremiumTabBadge
// Dependencies: [32, 19, 17, 4734, 1392, 7145, 21, 5091, 587, 558, 576, 4791, 4930, 4992, 5087, 1273, 10065, 8952, 1200, 15180, 7163, 8071, 4728, 4899, 2049, 504, 7093, 8067, 8066, 13636, 1126, 1382, 5388, 1105, 2]

// Module 15179 (PremiumTabBadge)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl9 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4791 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7093 */;
import ColorConstants from "ColorConstants" /* 7145 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7163 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8066 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8067 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8071 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8952 */;
import MarketingComponentType from "MarketingComponentType" /* 10065 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 13636 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let tmp;
let tmp5;
const Text_Text = tmp(5087);
const AssetRegistryDefault = tmp5(15180);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedTabBadge(label) {
  const obj = react2;
  const cResult = obj.c(14);
  label = label.label;
  const obj2 = useBadgeTextVariant;
  const badgeTextVariant = obj2.useBadgeTextVariant();
  const tmp5 = closure_10();
  const obj3 = shared;
  const isThemeDarkResult = obj3.isThemeDark(useThemeDefault());
  const tmp7 = isThemeDarkResult ? tmp5.badgeBackgroundDarkTheme : tmp5.badgeBackgroundLightTheme;
  if (cResult[0] === tmp5.badge) {
    let tmp8;
    if (cResult[1] === tmp7) {
      tmp8 = cResult[2];
    }
    let str = "text-overlay-light";
    if (isThemeDarkResult) {
      str = "text-overlay-dark";
    }
    if (cResult[3] === tmp5.text) {
      let tmp9;
      if (cResult[4] === tmp5.uppercase) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === badgeTextVariant) {
        if (cResult[7] === label) {
          if (cResult[8] === str) {
            let tmp10;
            if (cResult[9] === tmp9) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === tmp8) {
              let tmp13;
              if (cResult[12] === tmp10) {
                tmp13 = cResult[13];
              }
              return tmp13;
            }
            const obj4 = { style: tmp8, children: tmp10 };
            const tmp16 = metroImportAll(View, obj4);
            cResult[11] = tmp8;
            cResult[12] = tmp10;
            cResult[13] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
      const obj5 = { variant: badgeTextVariant, color: str, style: tmp9, children: label };
      const tmp12 = metroImportAll(Text_Text.Text, obj5);
      cResult[6] = badgeTextVariant;
      cResult[7] = label;
      cResult[8] = str;
      cResult[9] = tmp9;
      cResult[10] = tmp12;
      tmp10 = tmp12;
    }
    const items = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp5);
    cResult[3] = tmp5.text;
    cResult[4] = tmp5.uppercase;
    cResult[5] = items;
    tmp9 = items;
  }
  const items1 = [tmp5.badge, tmp7];
  cResult[0] = tmp5.badge;
  cResult[1] = tmp7;
  cResult[2] = items1;
  tmp8 = items1;
}) : (function ThemedTabBadge(label) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OfferBadge(arg0) {
  let acked;
  let ackedBadgeCopy;
  let badgeCopy;
  let componentId;
  let items;
  let promotionId;
  const obj = react2;
  const cResult = obj.c(20);
  ({ badgeCopy, ackedBadgeCopy, componentId, promotionId, acked } = arg0);
  const obj2 = useBadgeTextVariant;
  const badgeTextVariant = obj2.useBadgeTextVariant();
  const tmp5 = closure_10();
  if (cResult[0] === componentId) {
    let tmp6;
    let tmp9;
    let tmp12;
    if (cResult[1] === promotionId) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== (null == componentId)) {
      const obj3 = { disableTrack: null == componentId };
      cResult[3] = null == componentId;
      cResult[4] = obj3;
      tmp9 = obj3;
    } else {
      tmp9 = cResult[4];
    }
    useTrackImpressionDefault(tmp6, tmp9);
    const tmp10 = importDefault;
    if (acked) {
      let tmp16;
      if (cResult[5] !== tmp5.icon) {
        const obj4 = { source: tmp10(15180), size: native.Icon.Sizes.EXTRA_SMALL, color: tmp5.icon.color, style: tmp5.icon };
        const Icon = tmp(1200).Icon;
        const tmp18 = metroImportAll(Icon, obj4);
        cResult[5] = tmp5.icon;
        cResult[6] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp5.text) {
        let tmp19;
        if (cResult[8] === tmp5.uppercase) {
          tmp19 = cResult[9];
        }
        if (cResult[10] === ackedBadgeCopy) {
          if (cResult[11] === badgeTextVariant) {
            let tmp20;
            if (cResult[12] === tmp19) {
              tmp20 = cResult[13];
            }
            if (cResult[14] === tmp5.acked) {
              if (cResult[15] === tmp16) {
                let tmp23;
                if (cResult[16] === tmp20) {
                  tmp23 = cResult[17];
                }
                tmp12 = tmp23;
              }
            }
            const obj5 = { style: tmp5.acked, children: items };
            items = [tmp16, tmp20];
            const tmp26 = React4(View, obj5);
            cResult[14] = tmp5.acked;
            cResult[15] = tmp16;
            cResult[16] = tmp20;
            cResult[17] = tmp26;
            tmp23 = tmp26;
          }
        }
        const obj6 = { variant: badgeTextVariant, color: "interactive-text-default", style: tmp19, children: ackedBadgeCopy };
        const tmp22 = metroImportAll(Text_Text.Text, obj6);
        cResult[10] = ackedBadgeCopy;
        cResult[11] = badgeTextVariant;
        cResult[12] = tmp19;
        cResult[13] = tmp22;
        tmp20 = tmp22;
      }
      const items1 = [, ];
      ({ uppercase: arr[0], text: arr[1] } = tmp5);
      cResult[7] = tmp5.text;
      cResult[8] = tmp5.uppercase;
      cResult[9] = items1;
      tmp19 = items1;
    } else if (cResult[18] !== badgeCopy) {
      const obj7 = { label: badgeCopy };
      const tmp15 = metroImportAll(closure_11, obj7);
      cResult[18] = badgeCopy;
      cResult[19] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[19];
    }
    return tmp12;
  }
  const obj8 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId } };
  cResult[0] = componentId;
  cResult[1] = promotionId;
  cResult[2] = obj8;
  tmp6 = obj8;
  ({ component_type: MarketingComponentType.MarketingComponentType.PREMIUM_TAB, component_id: componentId, promotion_id: promotionId });
}) : (function OfferBadge(componentId) {
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
    const Icon = tmp(1200).Icon;
    items = [metroImportAll(Icon, obj6), ];
    const obj7 = { variant: badgeTextVariant, color: "interactive-text-default", style: items1, children: ackedBadgeCopy };
    items1 = [, ];
    ({ uppercase: arr2[0], text: arr2[1] } = tmp4);
    items[1] = metroImportAll(Text_Text.Text, obj7);
    tmp10 = React4(View, obj5);
  } else {
    const obj8 = { label: badgeCopy };
    tmp10 = metroImportAll(closure_11, obj8);
  }
  return tmp10;
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumTabBadge() {
  let intl3;
  let items2;
  let premiumTypeSubscription;
  let tmp10;
  let tmp11;
  const obj = react2;
  const cResult = obj.c(74);
  const obj2 = useBadgeTextVariant;
  const badgeTextVariant = obj2.useBadgeTextVariant();
  const tmp5 = closure_10();
  const obj3 = usePremiumTrialOffer;
  const premiumTrialOffer = obj3.usePremiumTrialOffer();
  const obj4 = usePremiumDiscountOffer;
  const premiumDiscountOffer = obj4.usePremiumDiscountOffer();
  const obj6 = PremiumUtils;
  const hasTier2Premium = obj6.useHasTier2Premium();
  const obj7 = DismissibleContentUnsafeUtils;
  const result = obj7.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function b() {
      return premiumTypeSubscription.getPremiumTypeSubscription();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  let trialId;
  if (stateFromStores != null) {
    trialId = stateFromStores.trialId;
  }
  if (cResult[2] === trialId === closure_6) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { bypassAutoDismiss: true };
      cResult[5] = obj5;
    }
    useSelectedDismissibleContent;
    const tmp19 = _slicedToArray;
    if (cResult[6] === hasTier2Premium) {
      let tmp22;
      let tmp33;
      if (cResult[7] === (!result && hasTier2Premium)) {
        tmp21 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { bypassAutoDismiss: true };
        cResult[9] = obj8;
        tmp22 = obj8;
      } else {
        tmp22 = cResult[9];
      }
      const tmpResult10 = useSelectedDismissibleContent;
      const first = tmp19(tmpResult10.useSelectedDismissibleContent(tmp21, tmp22), 1)[0];
      const tmpResult11 = useIsEligibleSenderForReferralProgram;
      const isEligibleSenderForReferralProgram = tmpResult11.useIsEligibleSenderForReferralProgram();
      const tmpResult12 = ReferralProgramUtils;
      const isReferralProgramEntrypointBadgeAcknowledged = tmpResult12.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult13 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmpResult13.usePromotionMarketingComponent(tmp(10065).MarketingComponentType.PREMIUM_TAB);
      let prop = null;
      const useSelectedSnowflakeBoundDismissibleContent = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
      const tmpResult14 = useSelectedDismissibleContent;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp(2049).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      if (null != promotionMarketingComponent) {
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          const tmp106 = tmp32 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
          if (cResult[10] === promotionMarketingComponent.id) {
            if (cResult[11] === promotionMarketingComponent.promotionId) {
              if (cResult[12] === promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel) {
                if (cResult[13] === promotionMarketingComponent.properties.properties.premiumTab.badgeLabel) {
                  let tmp107;
                  if (cResult[14] === tmp106) {
                    tmp107 = cResult[15];
                  }
                  return tmp107;
                }
              }
            }
          }
          const obj9 = { acked: tmp106, badgeCopy: promotionMarketingComponent.properties.properties.premiumTab.badgeLabel, ackedBadgeCopy: promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel, componentId: null, promotionId: null };
          ({ id: obj28.componentId, promotionId: obj28.promotionId } = promotionMarketingComponent);
          const tmp110 = metroImportAll(closure_12, obj9);
          cResult[10] = promotionMarketingComponent.id;
          cResult[11] = promotionMarketingComponent.promotionId;
          cResult[12] = promotionMarketingComponent.properties.properties.premiumTab.acknowledgedBadgeLabel;
          cResult[13] = promotionMarketingComponent.properties.properties.premiumTab.badgeLabel;
          cResult[14] = tmp106;
          cResult[15] = tmp110;
          tmp107 = tmp110;
        }
      }
      if (tmp20 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        let tmp36;
        const _Symbol3 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(intl9.t.uO4bXn);
          cResult[16] = stringResult;
          tmp36 = stringResult;
        } else {
          tmp36 = cResult[16];
        }
        tmp33 = tmp36;
      } else {
        tmp33 = null;
        if (first === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          let tmp34;
          const _Symbol10 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult1 = intl.string(intl9.t["jyYgZ+"]);
            cResult[17] = stringResult1;
            tmp34 = stringResult1;
          } else {
            tmp34 = cResult[17];
          }
          tmp33 = tmp34;
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          let tmp38;
          const _Symbol4 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { label: intl3.string(intl9.t.RDE0Sc) };
            intl3 = tmp(1126).intl;
            const tmp41 = metroImportAll(closure_11, obj10);
            cResult[18] = tmp41;
            tmp38 = tmp41;
          } else {
            tmp38 = cResult[18];
          }
          return tmp38;
        }
      }
      if (!result && hasTier2Premium) {
        let tmp92;
        const tag = tmp5.tag;
        if (cResult[19] !== tmp5.text) {
          let text;
          const tmpResult15 = PlatformUtils;
          if (tmpResult15.isAndroid()) {
            text = tmp5.text;
          }
          cResult[19] = tmp5.text;
          cResult[20] = text;
          tmp92 = text;
        } else {
          tmp92 = cResult[20];
        }
        if (cResult[21] === tmp5.uppercase) {
          let tmp94;
          let tmp95;
          if (cResult[22] === tmp92) {
            tmp94 = cResult[23];
          }
          const _Symbol9 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            const intl8 = tmp(1126).intl;
            const stringResult2 = intl8.string(intl9.t.y2b7CA);
            cResult[24] = stringResult2;
            tmp95 = stringResult2;
          } else {
            tmp95 = cResult[24];
          }
          if (cResult[25] === badgeTextVariant) {
            let tmp97;
            if (cResult[26] === tmp94) {
              tmp97 = cResult[27];
            }
            if (cResult[28] === tmp5.tag) {
              let tmp100;
              if (cResult[29] === tmp97) {
                tmp100 = cResult[30];
              }
              return tmp100;
            }
            const obj11 = { style: tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: tmp97 };
            const tmp103 = LinearGradientDefault;
            const tmp105 = metroImportAll(tmp103, obj11);
            cResult[28] = tmp5.tag;
            cResult[29] = tmp97;
            cResult[30] = tmp105;
            tmp100 = tmp105;
          }
          const obj12 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp94, children: tmp95 };
          const tmp99 = metroImportAll(Text_Text.Text, obj12);
          cResult[25] = badgeTextVariant;
          cResult[26] = tmp94;
          cResult[27] = tmp99;
          tmp97 = tmp99;
        }
        const items1 = [tmp5.uppercase, tmp92];
        cResult[21] = tmp5.uppercase;
        cResult[22] = tmp92;
        cResult[23] = items1;
        tmp94 = items1;
      } else if (null != premiumTrialOffer) {
        let tmp84;
        let tmp83;
        let tmp88;
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const _Symbol8 = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = tmp(1126).intl;
          const stringResult3 = intl6.string(intl9.t.OS9KPu);
          const intl7 = tmp(1126).intl;
          const stringResult4 = intl7.string(intl9.t.OS9KPu);
          cResult[31] = stringResult3;
          cResult[32] = stringResult4;
          tmp84 = stringResult4;
          tmp83 = stringResult3;
        } else {
          tmp83 = cResult[31];
          tmp84 = cResult[32];
        }
        if (cResult[33] !== (true === hasAcknowledged)) {
          const obj13 = { acked: true === hasAcknowledged, badgeCopy: tmp83, ackedBadgeCopy: tmp84 };
          const tmp91 = metroImportAll(closure_12, obj13);
          cResult[33] = true === hasAcknowledged;
          cResult[34] = tmp91;
          tmp88 = tmp91;
        } else {
          tmp88 = cResult[34];
        }
        return tmp88;
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          if (cResult[46] === tmp5.ackedBadge) {
            let tmp67;
            let tmp68;
            if (cResult[47] === tmp5.premiumDiscountBadge) {
              tmp67 = cResult[48];
            }
            if (cResult[49] !== tmp5.icon) {
              const obj14 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp5.icon.color, style: tmp5.icon };
              const Icon = tmp(1200).Icon;
              const tmp71 = metroImportAll(Icon, obj14);
              cResult[49] = tmp5.icon;
              cResult[50] = tmp71;
              tmp68 = tmp71;
            } else {
              tmp68 = cResult[50];
            }
            if (cResult[51] === tmp5.text) {
              let tmp72;
              let tmp73;
              if (cResult[52] === tmp5.uppercase) {
                tmp72 = cResult[53];
              }
              const _Symbol7 = Symbol;
              if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1126).intl;
                const stringResult5 = intl5.string(intl9.t["/DTtr6"]);
                cResult[54] = stringResult5;
                tmp73 = stringResult5;
              } else {
                tmp73 = cResult[54];
              }
              if (cResult[55] === badgeTextVariant) {
                let tmp75;
                if (cResult[56] === tmp72) {
                  tmp75 = cResult[57];
                }
                if (cResult[58] === tmp75) {
                  if (cResult[59] === tmp67) {
                    let tmp78;
                    if (cResult[60] === tmp68) {
                      tmp78 = cResult[61];
                    }
                    return tmp78;
                  }
                }
                const obj15 = { style: tmp67, children: items2 };
                items2 = [tmp68, tmp75];
                const tmp81 = React4(View, obj15);
                cResult[58] = tmp75;
                cResult[59] = tmp67;
                cResult[60] = tmp68;
                cResult[61] = tmp81;
                tmp78 = tmp81;
              }
              const obj16 = { variant: badgeTextVariant, color: "interactive-text-default", style: tmp72, children: tmp73 };
              const tmp77 = metroImportAll(Text_Text.Text, obj16);
              cResult[55] = badgeTextVariant;
              cResult[56] = tmp72;
              cResult[57] = tmp77;
              tmp75 = tmp77;
            }
            const items3 = [, ];
            ({ uppercase: arr8[0], text: arr8[1] } = tmp5);
            cResult[51] = tmp5.text;
            cResult[52] = tmp5.uppercase;
            cResult[53] = items3;
            tmp72 = items3;
          }
          const items4 = [, ];
          ({ premiumDiscountBadge: arr7[0], ackedBadge: arr7[1] } = tmp5);
          cResult[46] = tmp5.ackedBadge;
          cResult[47] = tmp5.premiumDiscountBadge;
          cResult[48] = items4;
          tmp67 = items4;
        } else {
          let tmp55;
          const _Symbol5 = Symbol;
          const premiumDiscountBadge = tmp5.premiumDiscountBadge;
          if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
            const items5 = ["#db00a4", "#5968f0"];
            cResult[35] = items5;
            tmp55 = items5;
          } else {
            tmp55 = cResult[35];
          }
          if (cResult[36] === tmp5.text) {
            let tmp56;
            let tmp57;
            if (cResult[37] === tmp5.uppercase) {
              tmp56 = cResult[38];
            }
            const _Symbol6 = Symbol;
            if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult6 = intl4.string(intl9.t["/DTtr6"]);
              cResult[39] = stringResult6;
              tmp57 = stringResult6;
            } else {
              tmp57 = cResult[39];
            }
            if (cResult[40] === badgeTextVariant) {
              let tmp59;
              if (cResult[41] === tmp56) {
                tmp59 = cResult[42];
              }
              if (cResult[43] === tmp5.premiumDiscountBadge) {
                let tmp62;
                if (cResult[44] === tmp59) {
                  tmp62 = cResult[45];
                }
                return tmp62;
              }
              const obj17 = { style: premiumDiscountBadge, colors: tmp55, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: tmp59 };
              const tmp65 = LinearGradientDefault;
              const tmp66 = metroImportAll(tmp65, obj17);
              cResult[43] = tmp5.premiumDiscountBadge;
              cResult[44] = tmp59;
              cResult[45] = tmp66;
              tmp62 = tmp66;
            }
            const obj18 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp56, children: tmp57 };
            const tmp61 = metroImportAll(Text_Text.Text, obj18);
            cResult[40] = badgeTextVariant;
            cResult[41] = tmp56;
            cResult[42] = tmp61;
            tmp59 = tmp61;
          }
          const items6 = [, ];
          ({ uppercase: arr6[0], text: arr6[1] } = tmp5);
          cResult[36] = tmp5.text;
          cResult[37] = tmp5.uppercase;
          cResult[38] = items6;
          tmp56 = items6;
        }
      } else {
        let tmp54 = null;
        if (null != tmp33) {
          let tmp42;
          if (cResult[62] !== tmp5.text) {
            let text1;
            const tmpResult16 = PlatformUtils;
            if (tmpResult16.isAndroid()) {
              text1 = tmp5.text;
            }
            cResult[62] = tmp5.text;
            cResult[63] = text1;
            tmp42 = text1;
          } else {
            tmp42 = cResult[63];
          }
          if (cResult[64] === tmp5.uppercase) {
            let tmp44;
            if (cResult[65] === tmp42) {
              tmp44 = cResult[66];
            }
            if (cResult[67] === tmp33) {
              if (cResult[68] === badgeTextVariant) {
                let tmp45;
                if (cResult[69] === tmp44) {
                  tmp45 = cResult[70];
                }
                if (cResult[71] === tmp5.tag) {
                  let tmp48;
                  if (cResult[72] === tmp45) {
                    tmp48 = cResult[73];
                  }
                  tmp54 = tmp48;
                }
                const obj19 = { style: tmp5.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: tmp45 };
                const tmp51 = LinearGradientDefault;
                const tmp53 = metroImportAll(tmp51, obj19);
                cResult[71] = tmp5.tag;
                cResult[72] = tmp45;
                cResult[73] = tmp53;
                tmp48 = tmp53;
              }
            }
            const obj20 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp44, children: tmp33 };
            const tmp47 = metroImportAll(Text_Text.Text, obj20);
            cResult[67] = tmp33;
            cResult[68] = badgeTextVariant;
            cResult[69] = tmp44;
            cResult[70] = tmp47;
            tmp45 = tmp47;
          }
          const items7 = [tmp5.uppercase, tmp42];
          cResult[64] = tmp5.uppercase;
          cResult[65] = tmp42;
          cResult[66] = items7;
          tmp44 = items7;
        }
        return tmp54;
      }
    }
    if (!(!result && hasTier2Premium)) {
      let items8;
      if (hasTier2Premium) {
        items8 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      cResult[6] = hasTier2Premium;
      cResult[7] = !result && hasTier2Premium;
      cResult[8] = items8;
      tmp21 = items8;
    }
    items8 = [];
  }
  if (trialId === closure_6) {
    let items9;
    if (!(!result && hasTier2Premium)) {
      items9 = [dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE];
    }
    cResult[2] = trialId === closure_6;
    cResult[3] = !result && hasTier2Premium;
    cResult[4] = items9;
  }
  items9 = [];
}) : (function PremiumTabBadge() {
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
    [tmp15, r10055] = tmp12(items1, { bypassAutoDismiss: true });
    _slicedToArray(tmp12(items1, { bypassAutoDismiss: true }), 2);
    useSelectedDismissibleContent;
    if (!(!result && hasTier2Premium)) {
      let items2;
      let stringResult;
      let tmp49Result;
      if (hasTier2Premium) {
        items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp19, r10068] = tmp17(items2, { bypassAutoDismiss: true });
      _slicedToArray(tmp17(items2, { bypassAutoDismiss: true }), 2);
      const tmpResult11 = useIsEligibleSenderForReferralProgram;
      const isEligibleSenderForReferralProgram = tmpResult11.useIsEligibleSenderForReferralProgram();
      const tmpResult12 = ReferralProgramUtils;
      const isReferralProgramEntrypointBadgeAcknowledged = tmpResult12.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult13 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmpResult13.usePromotionMarketingComponent(tmp(10065).MarketingComponentType.PREMIUM_TAB);
      let prop = null;
      const useSelectedSnowflakeBoundDismissibleContent = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
      const tmpResult14 = useSelectedDismissibleContent;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp(2049).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
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
          return metroImportAll(closure_12, obj4);
        }
      }
      if (tmp15 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp(1126).intl;
        stringResult = intl2.string(tmp(1126).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp19 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        let tmp34;
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj7 = { label: intl3.string(intl9.t.RDE0Sc) };
          intl3 = tmp(1126).intl;
          tmp34 = metroImportAll(closure_11, obj7);
        }
        return tmp34;
      }
      if (!result && hasTier2Premium) {
        const obj8 = { style: tmp4.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text4, obj9) };
        const tmp54 = LinearGradientDefault;
        obj9 = { variant: badgeTextVariant, color: "text-overlay-light", style: items3, children: intl8.string(intl9.t.y2b7CA) };
        items3 = [tmp4.uppercase, ];
        Text4 = tmp(5087).Text;
        let text;
        const tmpResult15 = PlatformUtils;
        if (tmpResult15.isAndroid()) {
          text = tmp4.text;
        }
        items3[1] = text;
        intl8 = tmp(1126).intl;
        tmp49Result = tmp52(tmp54, obj8);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        const tmp49 = metroImportAll;
        const tmp50 = closure_12;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj10 = { acked: true === hasAcknowledged, badgeCopy: intl6.string(intl9.t.OS9KPu), ackedBadgeCopy: intl7.string(intl9.t.OS9KPu) };
        intl6 = tmp(1126).intl;
        intl7 = tmp(1126).intl;
        tmp49Result = tmp49(tmp50, obj10);
      } else if (null != premiumDiscountOffer) {
        let tmp44;
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj11 = { style: items4, children: items5 };
          items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp4);
          const obj12 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
          const Icon = tmp(1200).Icon;
          items5 = [metroImportAll(Icon, obj12), ];
          const obj13 = { variant: badgeTextVariant, color: "interactive-text-default", style: items6, children: intl5.string(intl9.t["/DTtr6"]) };
          items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp4);
          const Text3 = tmp(5087).Text;
          intl5 = tmp(1126).intl;
          items5[1] = metroImportAll(Text3, obj13);
          tmp44 = React4(View, obj11);
        } else {
          const obj14 = { style: tmp4.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text2, obj15) };
          const tmp43 = LinearGradientDefault;
          obj15 = { variant: badgeTextVariant, color: "text-overlay-light", style: items7, children: intl4.string(intl9.t["/DTtr6"]) };
          items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp4);
          Text2 = tmp(5087).Text;
          intl4 = tmp(1126).intl;
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
          Text = tmp(5087).Text;
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
});
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default tmp5;
