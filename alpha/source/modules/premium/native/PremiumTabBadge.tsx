// Module ID: 16077
// Function ID: 16078
// Name: PremiumTabBadge
// Dependencies: [32, 19, 17, 2059, 1394, 7493, 21, 4945, 587, 558, 576, 5000, 4952, 5166, 5195, 1275, 10424, 9291, 1202, 16078, 7506, 8379, 2054, 4970, 4784, 504, 7445, 8375, 8374, 14547, 16079, 1128, 1384, 5219, 1107, 2]

// Module 16077 (PremiumTabBadge)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1107 */;
import intl9 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumUtils from "PremiumUtils" /* 2054 */;
import dismissible_content from "dismissible_content" /* 4784 */;
import shared from "shared" /* 4952 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4970 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 5000 */;
import useThemeDefault from "useTheme" /* 5166 */;
import LinearGradientDefault from "LinearGradient" /* 5219 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7445 */;
import ColorConstants from "ColorConstants" /* 7493 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7506 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8374 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8375 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8379 */;
import useTrackImpressionDefault from "useTrackImpression" /* 9291 */;
import MarketingComponentType from "MarketingComponentType" /* 10424 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 14547 */;
import PremiumTabBadgeCopy from "PremiumTabBadgeCopy" /* 16079 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2059 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
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
const Text_Text = tmp(5195);
const AssetRegistryDefault = tmp5(16078);
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
        const obj4 = { source: tmp10(16078), size: native.Icon.Sizes.EXTRA_SMALL, color: tmp5.icon.color, style: tmp5.icon };
        const Icon = tmp(1202).Icon;
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
    const Icon = tmp(1202).Icon;
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
  const cResult = obj.c(76);
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
    const fn = function y() {
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
    if (cResult[6] === hasTier2Premium) {
      let tmp22;
      let tmp33;
      let tmp35;
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
      const tmpResult11 = useSelectedDismissibleContent;
      const first = tmp19(tmpResult11.useSelectedDismissibleContent(tmp21, tmp22), 1)[0];
      const tmpResult12 = useIsEligibleSenderForReferralProgram;
      const isEligibleSenderForReferralProgram = tmpResult12.useIsEligibleSenderForReferralProgram();
      const tmpResult13 = ReferralProgramUtils;
      const isReferralProgramEntrypointBadgeAcknowledged = tmpResult13.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult14 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmpResult14.usePromotionMarketingComponent(tmp(10424).MarketingComponentType.PREMIUM_TAB);
      let prop = null;
      const useSelectedSnowflakeBoundDismissibleContent = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
      const tmpResult15 = useSelectedDismissibleContent;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp(4784).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
        }
      }
      let str2;
      if (promotionMarketingComponent != null) {
        str2 = promotionMarketingComponent.promotionId;
      }
      if (str2 == null) {
        str2 = "";
      }
      const first1 = tmp19(useSelectedSnowflakeBoundDismissibleContent(prop, str2, undefined, true), 1)[0];
      if (cResult[10] !== promotionMarketingComponent) {
        let premiumTabBadgeCopy = null;
        if (null != promotionMarketingComponent) {
          const tmpResult16 = PremiumTabBadgeCopy;
          premiumTabBadgeCopy = tmpResult16.getPremiumTabBadgeCopy(promotionMarketingComponent);
        }
        cResult[10] = promotionMarketingComponent;
        cResult[11] = premiumTabBadgeCopy;
        tmp33 = premiumTabBadgeCopy;
      } else {
        tmp33 = cResult[11];
      }
      if (null != promotionMarketingComponent) {
        if (null != tmp33) {
          const tmp108 = first1 !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
          if (cResult[12] === tmp33.acknowledgedBadgeCopy) {
            if (cResult[13] === tmp33.badgeCopy) {
              if (cResult[14] === promotionMarketingComponent.id) {
                if (cResult[15] === promotionMarketingComponent.promotionId) {
                  let tmp109;
                  if (cResult[16] === tmp108) {
                    tmp109 = cResult[17];
                  }
                  return tmp109;
                }
              }
            }
          }
          const obj9 = { acked: tmp108, badgeCopy: null, ackedBadgeCopy: null, componentId: null, promotionId: null };
          ({ badgeCopy: obj29.badgeCopy, acknowledgedBadgeCopy: obj29.ackedBadgeCopy } = tmp33);
          ({ id: obj29.componentId, promotionId: obj29.promotionId } = promotionMarketingComponent);
          const tmp112 = metroImportAll(closure_12, obj9);
          cResult[12] = tmp33.acknowledgedBadgeCopy;
          cResult[13] = tmp33.badgeCopy;
          cResult[14] = promotionMarketingComponent.id;
          cResult[15] = promotionMarketingComponent.promotionId;
          cResult[16] = tmp108;
          cResult[17] = tmp112;
          tmp109 = tmp112;
        }
      }
      if (tmp20 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        let tmp38;
        const _Symbol3 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult = intl2.string(intl9.t.uO4bXn);
          cResult[18] = stringResult;
          tmp38 = stringResult;
        } else {
          tmp38 = cResult[18];
        }
        tmp35 = tmp38;
      } else {
        tmp35 = null;
        if (first === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          let tmp36;
          const _Symbol10 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1128).intl;
            const stringResult1 = intl.string(intl9.t["jyYgZ+"]);
            cResult[19] = stringResult1;
            tmp36 = stringResult1;
          } else {
            tmp36 = cResult[19];
          }
          tmp35 = tmp36;
        }
      }
      if (isEligibleSenderForReferralProgram) {
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          let tmp40;
          const _Symbol4 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { label: intl3.string(intl9.t.RDE0Sc) };
            intl3 = tmp(1128).intl;
            const tmp43 = metroImportAll(closure_11, obj10);
            cResult[20] = tmp43;
            tmp40 = tmp43;
          } else {
            tmp40 = cResult[20];
          }
          return tmp40;
        }
      }
      if (!result && hasTier2Premium) {
        let tmp94;
        const tag = tmp5.tag;
        if (cResult[21] !== tmp5.text) {
          let text;
          const tmpResult17 = PlatformUtils;
          if (tmpResult17.isAndroid()) {
            text = tmp5.text;
          }
          cResult[21] = tmp5.text;
          cResult[22] = text;
          tmp94 = text;
        } else {
          tmp94 = cResult[22];
        }
        if (cResult[23] === tmp5.uppercase) {
          let tmp96;
          let tmp97;
          if (cResult[24] === tmp94) {
            tmp96 = cResult[25];
          }
          const _Symbol9 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            const intl8 = tmp(1128).intl;
            const stringResult2 = intl8.string(intl9.t.y2b7CA);
            cResult[26] = stringResult2;
            tmp97 = stringResult2;
          } else {
            tmp97 = cResult[26];
          }
          if (cResult[27] === badgeTextVariant) {
            let tmp99;
            if (cResult[28] === tmp96) {
              tmp99 = cResult[29];
            }
            if (cResult[30] === tmp5.tag) {
              let tmp102;
              if (cResult[31] === tmp99) {
                tmp102 = cResult[32];
              }
              return tmp102;
            }
            const obj11 = { style: tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: tmp99 };
            const tmp105 = LinearGradientDefault;
            const tmp107 = metroImportAll(tmp105, obj11);
            cResult[30] = tmp5.tag;
            cResult[31] = tmp99;
            cResult[32] = tmp107;
            tmp102 = tmp107;
          }
          const obj12 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp96, children: tmp97 };
          const tmp101 = metroImportAll(Text_Text.Text, obj12);
          cResult[27] = badgeTextVariant;
          cResult[28] = tmp96;
          cResult[29] = tmp101;
          tmp99 = tmp101;
        }
        const items1 = [tmp5.uppercase, tmp94];
        cResult[23] = tmp5.uppercase;
        cResult[24] = tmp94;
        cResult[25] = items1;
        tmp96 = items1;
      } else if (null != premiumTrialOffer) {
        let tmp86;
        let tmp85;
        let tmp90;
        let hasAcknowledged;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const _Symbol8 = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = tmp(1128).intl;
          const stringResult3 = intl6.string(intl9.t.OS9KPu);
          const intl7 = tmp(1128).intl;
          const stringResult4 = intl7.string(intl9.t.OS9KPu);
          cResult[33] = stringResult3;
          cResult[34] = stringResult4;
          tmp86 = stringResult4;
          tmp85 = stringResult3;
        } else {
          tmp85 = cResult[33];
          tmp86 = cResult[34];
        }
        if (cResult[35] !== (true === hasAcknowledged)) {
          const obj13 = { acked: true === hasAcknowledged, badgeCopy: tmp85, ackedBadgeCopy: tmp86 };
          const tmp93 = metroImportAll(closure_12, obj13);
          cResult[35] = true === hasAcknowledged;
          cResult[36] = tmp93;
          tmp90 = tmp93;
        } else {
          tmp90 = cResult[36];
        }
        return tmp90;
      } else if (null != premiumDiscountOffer) {
        if (premiumDiscountOffer.hasAcknowledged()) {
          if (cResult[48] === tmp5.ackedBadge) {
            let tmp69;
            let tmp70;
            if (cResult[49] === tmp5.premiumDiscountBadge) {
              tmp69 = cResult[50];
            }
            if (cResult[51] !== tmp5.icon) {
              const obj14 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp5.icon.color, style: tmp5.icon };
              const Icon = tmp(1202).Icon;
              const tmp73 = metroImportAll(Icon, obj14);
              cResult[51] = tmp5.icon;
              cResult[52] = tmp73;
              tmp70 = tmp73;
            } else {
              tmp70 = cResult[52];
            }
            if (cResult[53] === tmp5.text) {
              let tmp74;
              let tmp75;
              if (cResult[54] === tmp5.uppercase) {
                tmp74 = cResult[55];
              }
              const _Symbol7 = Symbol;
              if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
                const intl5 = tmp(1128).intl;
                const stringResult5 = intl5.string(intl9.t["/DTtr6"]);
                cResult[56] = stringResult5;
                tmp75 = stringResult5;
              } else {
                tmp75 = cResult[56];
              }
              if (cResult[57] === badgeTextVariant) {
                let tmp77;
                if (cResult[58] === tmp74) {
                  tmp77 = cResult[59];
                }
                if (cResult[60] === tmp77) {
                  if (cResult[61] === tmp69) {
                    let tmp80;
                    if (cResult[62] === tmp70) {
                      tmp80 = cResult[63];
                    }
                    return tmp80;
                  }
                }
                const obj15 = { style: tmp69, children: items2 };
                items2 = [tmp70, tmp77];
                const tmp83 = React4(View, obj15);
                cResult[60] = tmp77;
                cResult[61] = tmp69;
                cResult[62] = tmp70;
                cResult[63] = tmp83;
                tmp80 = tmp83;
              }
              const obj16 = { variant: badgeTextVariant, color: "interactive-text-default", style: tmp74, children: tmp75 };
              const tmp79 = metroImportAll(Text_Text.Text, obj16);
              cResult[57] = badgeTextVariant;
              cResult[58] = tmp74;
              cResult[59] = tmp79;
              tmp77 = tmp79;
            }
            const items3 = [, ];
            ({ uppercase: arr8[0], text: arr8[1] } = tmp5);
            cResult[53] = tmp5.text;
            cResult[54] = tmp5.uppercase;
            cResult[55] = items3;
            tmp74 = items3;
          }
          const items4 = [, ];
          ({ premiumDiscountBadge: arr7[0], ackedBadge: arr7[1] } = tmp5);
          cResult[48] = tmp5.ackedBadge;
          cResult[49] = tmp5.premiumDiscountBadge;
          cResult[50] = items4;
          tmp69 = items4;
        } else {
          let tmp57;
          const _Symbol5 = Symbol;
          const premiumDiscountBadge = tmp5.premiumDiscountBadge;
          if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
            const items5 = ["#db00a4", "#5968f0"];
            cResult[37] = items5;
            tmp57 = items5;
          } else {
            tmp57 = cResult[37];
          }
          if (cResult[38] === tmp5.text) {
            let tmp58;
            let tmp59;
            if (cResult[39] === tmp5.uppercase) {
              tmp58 = cResult[40];
            }
            const _Symbol6 = Symbol;
            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1128).intl;
              const stringResult6 = intl4.string(intl9.t["/DTtr6"]);
              cResult[41] = stringResult6;
              tmp59 = stringResult6;
            } else {
              tmp59 = cResult[41];
            }
            if (cResult[42] === badgeTextVariant) {
              let tmp61;
              if (cResult[43] === tmp58) {
                tmp61 = cResult[44];
              }
              if (cResult[45] === tmp5.premiumDiscountBadge) {
                let tmp64;
                if (cResult[46] === tmp61) {
                  tmp64 = cResult[47];
                }
                return tmp64;
              }
              const obj17 = { style: premiumDiscountBadge, colors: tmp57, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: tmp61 };
              const tmp67 = LinearGradientDefault;
              const tmp68 = metroImportAll(tmp67, obj17);
              cResult[45] = tmp5.premiumDiscountBadge;
              cResult[46] = tmp61;
              cResult[47] = tmp68;
              tmp64 = tmp68;
            }
            const obj18 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp58, children: tmp59 };
            const tmp63 = metroImportAll(Text_Text.Text, obj18);
            cResult[42] = badgeTextVariant;
            cResult[43] = tmp58;
            cResult[44] = tmp63;
            tmp61 = tmp63;
          }
          const items6 = [, ];
          ({ uppercase: arr6[0], text: arr6[1] } = tmp5);
          cResult[38] = tmp5.text;
          cResult[39] = tmp5.uppercase;
          cResult[40] = items6;
          tmp58 = items6;
        }
      } else {
        let tmp56 = null;
        if (null != tmp35) {
          let tmp44;
          if (cResult[64] !== tmp5.text) {
            let text1;
            const tmpResult18 = PlatformUtils;
            if (tmpResult18.isAndroid()) {
              text1 = tmp5.text;
            }
            cResult[64] = tmp5.text;
            cResult[65] = text1;
            tmp44 = text1;
          } else {
            tmp44 = cResult[65];
          }
          if (cResult[66] === tmp5.uppercase) {
            let tmp46;
            if (cResult[67] === tmp44) {
              tmp46 = cResult[68];
            }
            if (cResult[69] === tmp35) {
              if (cResult[70] === badgeTextVariant) {
                let tmp47;
                if (cResult[71] === tmp46) {
                  tmp47 = cResult[72];
                }
                if (cResult[73] === tmp5.tag) {
                  let tmp50;
                  if (cResult[74] === tmp47) {
                    tmp50 = cResult[75];
                  }
                  tmp56 = tmp50;
                }
                const obj19 = { style: tmp5.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: tmp47 };
                const tmp53 = LinearGradientDefault;
                const tmp55 = metroImportAll(tmp53, obj19);
                cResult[73] = tmp5.tag;
                cResult[74] = tmp47;
                cResult[75] = tmp55;
                tmp50 = tmp55;
              }
            }
            const obj20 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp46, children: tmp35 };
            const tmp49 = metroImportAll(Text_Text.Text, obj20);
            cResult[69] = tmp35;
            cResult[70] = badgeTextVariant;
            cResult[71] = tmp46;
            cResult[72] = tmp49;
            tmp47 = tmp49;
          }
          const items7 = [tmp5.uppercase, tmp44];
          cResult[66] = tmp5.uppercase;
          cResult[67] = tmp44;
          cResult[68] = items7;
          tmp46 = items7;
        }
        return tmp56;
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
  let first;
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
      let tmp50Result;
      if (hasTier2Premium) {
        items2 = [dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD];
      }
      [tmp19, r10068] = tmp17(items2, { bypassAutoDismiss: true });
      _slicedToArray(tmp17(items2, { bypassAutoDismiss: true }), 2);
      const tmpResult12 = useIsEligibleSenderForReferralProgram;
      const isEligibleSenderForReferralProgram = tmpResult12.useIsEligibleSenderForReferralProgram();
      const tmpResult13 = ReferralProgramUtils;
      const isReferralProgramEntrypointBadgeAcknowledged = tmpResult13.useIsReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult14 = usePromotionMarketingComponent;
      const promotionMarketingComponent = tmpResult14.usePromotionMarketingComponent(tmp(10424).MarketingComponentType.PREMIUM_TAB);
      let prop = null;
      const useSelectedSnowflakeBoundDismissibleContent = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent;
      const tmpResult15 = useSelectedDismissibleContent;
      if (null != promotionMarketingComponent) {
        prop = null;
        if ("premiumTab" === promotionMarketingComponent.properties.properties.oneofKind) {
          prop = tmp(4784).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
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
        const tmpResult16 = PremiumTabBadgeCopy;
        premiumTabBadgeCopy = tmpResult16.getPremiumTabBadgeCopy(promotionMarketingComponent);
      }
      if (null != promotionMarketingComponent) {
        if (null != premiumTabBadgeCopy) {
          ({ badgeCopy: obj25.badgeCopy, acknowledgedBadgeCopy: obj25.ackedBadgeCopy } = premiumTabBadgeCopy);
          ({ id: obj25.componentId, promotionId: obj25.promotionId } = promotionMarketingComponent);
          const obj4 = { acked: first !== dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, badgeCopy: null, ackedBadgeCopy: null, componentId: null, promotionId: null };
          return metroImportAll(closure_12, obj4);
        }
      }
      if (tmp15 === dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE) {
        const intl2 = tmp(1128).intl;
        stringResult = intl2.string(tmp(1128).t.uO4bXn);
      } else {
        stringResult = null;
        if (tmp19 === dismissible_content.DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD) {
          const intl = tmp(1128).intl;
          stringResult = intl.string(tmp(1128).t["jyYgZ+"]);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        let tmp35;
        if (!isReferralProgramEntrypointBadgeAcknowledged) {
          const obj7 = { label: intl3.string(intl9.t.RDE0Sc) };
          intl3 = tmp(1128).intl;
          tmp35 = metroImportAll(closure_11, obj7);
        }
        return tmp35;
      }
      if (!result && hasTier2Premium) {
        const obj8 = { style: tmp4.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text4, obj9) };
        const tmp55 = LinearGradientDefault;
        obj9 = { variant: badgeTextVariant, color: "text-overlay-light", style: items3, children: intl8.string(intl9.t.y2b7CA) };
        items3 = [tmp4.uppercase, ];
        Text4 = tmp(5195).Text;
        let text;
        const tmpResult17 = PlatformUtils;
        if (tmpResult17.isAndroid()) {
          text = tmp4.text;
        }
        items3[1] = text;
        intl8 = tmp(1128).intl;
        tmp50Result = tmp53(tmp55, obj8);
      } else if (null != premiumTrialOffer) {
        let hasAcknowledged;
        const tmp50 = metroImportAll;
        const tmp51 = closure_12;
        if (premiumTrialOffer != null) {
          hasAcknowledged = premiumTrialOffer.hasAcknowledged;
        }
        const obj10 = { acked: true === hasAcknowledged, badgeCopy: intl6.string(intl9.t.OS9KPu), ackedBadgeCopy: intl7.string(intl9.t.OS9KPu) };
        intl6 = tmp(1128).intl;
        intl7 = tmp(1128).intl;
        tmp50Result = tmp50(tmp51, obj10);
      } else if (null != premiumDiscountOffer) {
        let tmp45;
        if (premiumDiscountOffer.hasAcknowledged()) {
          const obj11 = { style: items4, children: items5 };
          items4 = [, ];
          ({ premiumDiscountBadge: arr6[0], ackedBadge: arr6[1] } = tmp4);
          const obj12 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: tmp4.icon.color, style: tmp4.icon };
          const Icon = tmp(1202).Icon;
          items5 = [metroImportAll(Icon, obj12), ];
          const obj13 = { variant: badgeTextVariant, color: "interactive-text-default", style: items6, children: intl5.string(intl9.t["/DTtr6"]) };
          items6 = [, ];
          ({ uppercase: arr8[0], text: arr8[1] } = tmp4);
          const Text3 = tmp(5195).Text;
          intl5 = tmp(1128).intl;
          items5[1] = metroImportAll(Text3, obj13);
          tmp45 = React4(View, obj11);
        } else {
          const obj14 = { style: tmp4.premiumDiscountBadge, colors: ["#db00a4", "#5968f0"], start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text2, obj15) };
          const tmp44 = LinearGradientDefault;
          obj15 = { variant: badgeTextVariant, color: "text-overlay-light", style: items7, children: intl4.string(intl9.t["/DTtr6"]) };
          items7 = [, ];
          ({ uppercase: arr5[0], text: arr5[1] } = tmp4);
          Text2 = tmp(5195).Text;
          intl4 = tmp(1128).intl;
          tmp45 = metroImportAll(tmp44, obj14);
        }
        tmp50Result = tmp45;
      } else {
        tmp50Result = null;
        if (null != stringResult) {
          const obj16 = { style: tmp4.tag, colors: Gradients.PREMIUM_TIER_2, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, children: metroImportAll(Text, obj17) };
          obj17 = { variant: badgeTextVariant, color: "text-overlay-light", style: items8, children: stringResult };
          items8 = [tmp4.uppercase, ];
          const tmp38 = LinearGradientDefault;
          Text = tmp(5195).Text;
          let text1;
          const tmpResult18 = PlatformUtils;
          if (tmpResult18.isAndroid()) {
            text1 = tmp4.text;
          }
          items8[1] = text1;
          tmp50Result = tmp36(tmp38, obj16);
        }
      }
      tmp35 = tmp50Result;
    }
    items2 = [];
  }
  items1 = [];
});
let result = size.fileFinishedImporting("modules/premium/native/PremiumTabBadge.tsx");

export default tmp5;
