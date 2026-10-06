// Module ID: 16752
// Function ID: 16753
// Name: GiftingPromotionCoachmark
// Dependencies: [19, 17, 4826, 10167, 1086, 2048, 21, 4837, 588, 1370, 558, 576, 504, 10256, 10240, 16753, 7724, 4801, 6584, 6604, 10163, 8268, 5896, 4833, 10528, 1127, 5282, 6572, 2]

// Module 16752 (GiftingPromotionCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6584 */;
import usePreviousDefault from "usePrevious" /* 7724 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10163 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4826 */;
import PromotionsStore from "PromotionsStore" /* 10167 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import PlatformUtils_mod from "PlatformUtils" /* 1370 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap, hideActionSheetResult, hideActionSheetResult1, importDefault, obj1, openGiftModalResult, tmp11, tmp3, tmp8, tmp9;

let PX_4;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let tmp22;
let unpackModuleId;
const AnalyticsLocationDefault = tmp22(6604);
let react = react_mod;
const View = react_native.View;
({ AnalyticsSections: metroImportDefault, AnalyticsObjects: metroImportAll, AnalyticsPages: c9 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, text: { textAlign: "center" }, countdownBadge: obj4, countdownBadgeText: obj5, imageShared: size, imageWrapperAndroid: { overflow: "hidden" } };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj4 = { flexDirection: "row", alignSelf: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
const space = nativeDefault.space;
obj5 = { lineHeight: PlatformUtils ? space.PX_12 : space.PX_16, paddingVertical: PX_4 };
PlatformUtils = PlatformUtils_mod;
PX_4 = undefined;
if (PlatformUtils.isAndroid()) {
  PX_4 = nativeDefault.space.PX_4;
}
size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let closure_1;
  let closure_2;
  let closure_3;
  let coachmarkComponent;
  let giftPromotion;
  let markAsDismissed;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp = markAsDismissed;
  let tmp2 = dependencyMap;
  let obj = markAsDismissed(576);
  const cResult = obj.c(50);
  ({ coachmarkComponent, markAsDismissed } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    class T {
      constructor() {
        return analyticsLocations.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp6 = T;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let asset;
  const useThemeAndReducedMotionAwareAssetUrl = tmp(10256).useThemeAndReducedMotionAwareAssetUrl;
  tmp(10256);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "GiftingPromotionCoachmarkActionSheet" };
    cResult[2] = obj2;
    class T {
      constructor() {
        return analyticsLocations.useReducedMotion;
      }
    }
  } else {
    tmp12 = cResult[2];
  }
  const GiftPromotionReminderExperiment = tmp(10240).GiftPromotionReminderExperiment;
  const enabled = GiftPromotionReminderExperiment.useConfig(tmp12).enabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    class T {
      constructor() {
        return analyticsLocations.useReducedMotion;
      }
    }
    cResult[3] = items1;
    cResult[4] = tmp16;
    tmp14 = tmp16;
    tmp13 = items1;
  } else {
    tmp13 = cResult[3];
    tmp14 = cResult[4];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp13, tmp14);
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = tmp(16753).useTickingFormattedLimitedOfferTimeLeft;
  tmp(16753);
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp21;
  const tmp23 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp23;
  react = tmp24;
  const tmp25 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  let closure_4 = tmp25;
  if (cResult[5] === tmp23) {
    if (cResult[6] === tmp25) {
      if (cResult[7] === null != stateFromStores1) {
        if (cResult[8] === null != tickingFormattedLimitedOfferTimeLeft) {
          let tmp26;
          let tmp27;
          if (cResult[9] === markAsDismissed) {
            tmp26 = cResult[10];
            tmp27 = cResult[11];
          }
          const effect = react.useEffect(tmp26, tmp27);
          class T {
            constructor() {
              return analyticsLocations.useReducedMotion;
            }
          }
          analyticsLocations = tmp30(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
          if (cResult[12] === analyticsLocations) {
            if (null == coachmarkComponent) {
              return null;
            } else {
              if (cResult[15] !== markAsDismissed) {
                class H {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                cResult[15] = markAsDismissed;
                class T {
                  constructor() {
                    return analyticsLocations.useReducedMotion;
                  }
                }
                cResult[16] = H;
              } else {
                class H {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              if (cResult[17] === themeAndReducedMotionAwareAssetUrl) {
                class H {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              class T {
                constructor() {
                  return analyticsLocations.useReducedMotion;
                }
              }
              cResult[17] = themeAndReducedMotionAwareAssetUrl;
              class F {
                constructor() {
                  obj = closure_1(closure_2[17]);
                  hideActionSheetResult = obj.hideActionSheet();
                  tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
                  obj2 = closure_0(closure_2[20]);
                  obj1 = { analyticsLocation: null, analyticsLocations };
                  obj5 = { page: AnalyticsPages.PREMUIM_UPSELL_GIFTING_PROMOTION, section: AnalyticsSections.FOOTER, object: AnalyticsObjects.BUTTON_CTA };
                  obj1.analyticsLocation = obj5;
                  openGiftModalResult = obj2.openGiftModal(obj1);
                  return;
                }
              }
              cResult[19] = tmp4.imageWrapperAndroid;
              cResult[20] = stateFromStores;
              cResult[21] = null != themeAndReducedMotionAwareAssetUrl;
            }
          }
          class F {
            constructor() {
              obj = closure_1(closure_2[17]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[20]);
              obj1 = { analyticsLocation: null, analyticsLocations };
              obj5 = { page: AnalyticsPages.PREMUIM_UPSELL_GIFTING_PROMOTION, section: AnalyticsSections.FOOTER, object: AnalyticsObjects.BUTTON_CTA };
              obj1.analyticsLocation = obj5;
              openGiftModalResult = obj2.openGiftModal(obj1);
              return;
            }
          }
          cResult[12] = analyticsLocations;
          cResult[13] = markAsDismissed;
          cResult[14] = F;
        }
      }
    }
  }
  class M {
    constructor() {
      tmp = closure_2;
      if (tmp) {
        tmp2 = closure_1;
        if (!tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[17]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
      tmp6 = closure_4;
      if (tmp6) {
        tmp7 = closure_3;
        tmp6 = !closure_3;
      }
      if (tmp6) {
        tmp8 = closure_1;
        tmp9 = closure_2;
        obj2 = closure_1(closure_2[17]);
        hideActionSheetResult1 = obj2.hideActionSheet();
        tmp11 = markAsDismissed;
        tmp12 = ContentDismissActionType;
        tmp13 = markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
      }
      return;
    }
  }
  const items2 = [tmp25, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp23, markAsDismissed];
  cResult[5] = tmp23;
  cResult[6] = tmp25;
  cResult[7] = null != stateFromStores1;
  cResult[8] = null != tickingFormattedLimitedOfferTimeLeft;
  cResult[9] = markAsDismissed;
  cResult[10] = M;
  cResult[11] = items2;
  tmp27 = items2;
  tmp26 = M;
}) : ((arg0) => {
  let GiftIcon;
  let Text;
  let closure_1;
  let closure_2;
  let closure_3;
  let coachmarkComponent;
  let giftPromotion;
  let intl;
  let items4;
  let items5;
  let items6;
  let markAsDismissed;
  let obj14;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  ({ coachmarkComponent, markAsDismissed } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  react = undefined;
  let closure_4;
  let analyticsLocations;
  let tmp = closure_13();
  let tmp2 = markAsDismissed;
  let obj = markAsDismissed(504);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let asset;
  const useThemeAndReducedMotionAwareAssetUrl = markAsDismissed(10256).useThemeAndReducedMotionAwareAssetUrl;
  markAsDismissed(10256);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = tmp2(10240).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  const items1 = [PromotionsStore];
  const tmp2Result = tmp2(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = tmp2(16753).useTickingFormattedLimitedOfferTimeLeft;
  tmp2(16753);
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const str = useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp11;
  const tmp13 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp13;
  react = tmp14;
  const tmp15 = usePreviousDefault(null != str);
  closure_4 = tmp15;
  const items2 = [tmp15, null != str, tmp11, tmp13, markAsDismissed];
  const effect = react.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      const tmp2 = closure_1;
      if (!tmp2) {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    }
    const tmp6 = closure_4 && !closure_3;
    if (tmp6) {
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items2);
  const tmp17 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp17(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp20Result2 = null;
  if (null != coachmarkComponent) {
    let obj2 = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      children: closure_12(closure_4, obj3)
    };
    obj3 = { style: tmp.container, children: items5 };
    let tmp23 = null != themeAndReducedMotionAwareAssetUrl;
    BottomSheet = tmp2(6572).BottomSheet;
    if (tmp23) {
      const tmp2Result4 = tmp2(1370);
      if (tmp2Result4.isAndroid()) {
        let tmp20Result;
        if (!stateFromStores) {
          let obj4 = { style: items4, children: closure_11(tmp2(8268).APNGPlayer, obj5) };
          items4 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj5 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          tmp20Result = tmp20(tmp22, obj4);
        }
        tmp23 = tmp20Result;
      }
      const obj6 = { source: obj7, style: tmp.imageShared };
      obj7 = { uri: themeAndReducedMotionAwareAssetUrl };
      tmp20Result = tmp20(tmp12(5896), obj6);
    }
    items5 = [tmp23, , , ];
    if (enabled) {
      enabled = null != str;
    }
    if (enabled) {
      const obj8 = { style: tmp.countdownBadge, children: closure_11(Text, obj9) };
      obj9 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.countdownBadgeText, children: str.toUpperCase() };
      Text = tmp2(4833).Text;
      enabled = tmp20(tmp22, obj8);
    }
    items5[1] = enabled;
    const obj10 = { style: tmp.textContainer, children: items6 };
    const obj11 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
    items6 = [closure_11(tmp2(4833).Heading, obj11), ];
    const obj12 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
    items6[1] = closure_11(tmp2(4833).Text, obj12);
    items5[2] = closure_12(closure_4, obj10);
    const obj13 = { grow: true, icon: closure_11(GiftIcon, obj14), text: intl.string(tmp2(1127).t.Ve9Ge6), onPress: tmp18 };
    const Button = tmp2(5282).Button;
    obj14 = { size: "sm", color: nativeDefault.colors.WHITE };
    GiftIcon = tmp2(10528).GiftIcon;
    intl = tmp2(1127).intl;
    items5[3] = closure_11(Button, obj13);
    tmp20Result2 = tmp20(BottomSheet, obj2);
  }
  return tmp20Result2;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default tmp7;
