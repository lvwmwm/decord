// Module ID: 17399
// Function ID: 17400
// Name: GiftingPromotionCoachmark
// Dependencies: [19, 17, 4750, 10963, 1078, 2042, 21, 4758, 580, 558, 568, 504, 11050, 11051, 8548, 4725, 7409, 7429, 10959, 1368, 9087, 5802, 11052, 4754, 11330, 1119, 5188, 7397, 2]

// Module 17399 (GiftingPromotionCoachmark)
import nativeDefault from "native" /* 580 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7409 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import usePreviousDefault from "usePrevious" /* 8548 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10959 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;
import PromotionsStore from "PromotionsStore" /* 10963 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1078);
({ AnalyticsSections: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9 } = Constants);
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { alignItems: "center", padding: nativeDefault.space.PX_16 }, textContainer: null, text: null, countdownBadge: null, imageShared: null, imageWrapperAndroid: null };
let obj3 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
obj2.textContainer = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.text = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj2.countdownBadge = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
let size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
obj2.imageShared = size;
obj2.imageWrapperAndroid = { overflow: "hidden" };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = markAsDismissed(568).c(47);
  ({ coachmarkComponent, markAsDismissed } = arg0);
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations];
    class T {
      constructor() {
        return analyticsLocations.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp5 = items;
    tmp6 = T;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = markAsDismissed(568);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp5, tmp6);
  const tmpResult = markAsDismissed(504);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(11050).useThemeAndReducedMotionAwareAssetUrl(asset);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    class M {
      constructor() {
        return closure_1_6.getGiftPromotion();
      }
    }
    cResult[2] = items1;
    cResult[3] = M;
    let tmp12 = M;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult4 = markAsDismissed(11050);
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(tmp11, tmp12);
  const tmpResult5 = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = markAsDismissed(11051).useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp17;
  const tmp19 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp19;
  noop = tmp20;
  const tmp21 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  closure_4 = tmp21;
  if (cResult[4] === tmp19) {
    if (cResult[5] === tmp21) {
      if (cResult[6] === tmp17) {
        if (cResult[7] === tmp20) {
          if (cResult[8] === markAsDismissed) {
            let tmp22 = cResult[9];
            let tmp23 = cResult[10];
          }
          const effect = noop.useEffect(tmp22, tmp23);
          class M {
            constructor() {
              return closure_1_6.getGiftPromotion();
            }
          }
          analyticsLocations = tmp26(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
          if (cResult[11] === analyticsLocations) {
            if (null == coachmarkComponent) {
              return null;
            } else {
              if (cResult[14] !== markAsDismissed) {
                class D {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                cResult[14] = markAsDismissed;
                class M {
                  constructor() {
                    return closure_1_6.getGiftPromotion();
                  }
                }
                cResult[15] = D;
              } else {
                class D {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              if (cResult[16] === themeAndReducedMotionAwareAssetUrl) {
                class D {
                  constructor() {
                    return markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
              }
              class M {
                constructor() {
                  return closure_1_6.getGiftPromotion();
                }
              }
            }
          }
          class U {
            constructor() {
              obj = closure_1(closure_2[15]);
              hideActionSheetResult = obj.hideActionSheet();
              tmp2 = markAsDismissed(ContentDismissActionType.TAKE_ACTION);
              obj2 = closure_0(closure_2[18]);
              obj1 = { analyticsLocation: null, analyticsLocations };
              obj5 = { page: AnalyticsPages.PREMUIM_UPSELL_GIFTING_PROMOTION, section: AnalyticsSections.FOOTER, object: AnalyticsObjects.BUTTON_CTA };
              obj1.analyticsLocation = obj5;
              openGiftModalResult = obj2.openGiftModal(obj1);
              return;
            }
          }
          cResult[11] = analyticsLocations;
          cResult[12] = markAsDismissed;
          cResult[13] = U;
        }
      }
    }
  }
  class G {
    constructor() {
      if (closure_2) {
        tmp = closure_1;
        if (!closure_1) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          hideActionSheetResult = obj.hideActionSheet();
        }
        return;
      }
      tmp5 = closure_4;
      if (closure_4) {
        tmp6 = closure_3;
        tmp5 = !closure_3;
      }
      if (tmp5) {
        tmp7 = closure_1;
        tmp8 = closure_2;
        obj2 = closure_1(closure_2[15]);
        hideActionSheetResult1 = obj2.hideActionSheet();
        tmp10 = markAsDismissed;
        tmp11 = ContentDismissActionType;
        tmp12 = markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
      }
      return;
    }
  }
  const items2 = [tmp21, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp19, markAsDismissed];
  cResult[4] = tmp19;
  cResult[5] = tmp21;
  cResult[6] = null != stateFromStores1;
  cResult[7] = null != tickingFormattedLimitedOfferTimeLeft;
  cResult[8] = markAsDismissed;
  cResult[9] = G;
  cResult[10] = items2;
  tmp23 = items2;
  tmp22 = G;
}) : ((arg0) => {
  ({ coachmarkComponent, markAsDismissed } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  closure_4 = undefined;
  let analyticsLocations;
  const tmp = closure_13();
  const items = [analyticsLocations];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let obj = markAsDismissed(504);
  let asset;
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = markAsDismissed(11050).useThemeAndReducedMotionAwareAssetUrl(asset);
  let obj2 = markAsDismissed(11050);
  const items1 = [PromotionsStore];
  const stateFromStores1 = markAsDismissed(504).useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  const tmp2Result = markAsDismissed(504);
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = markAsDismissed(11051).useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp10;
  const tmp12 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp12;
  noop = tmp13;
  const tmp14 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  closure_4 = tmp14;
  const items2 = [tmp14, null != tickingFormattedLimitedOfferTimeLeft, null != stateFromStores1, tmp12, markAsDismissed];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      if (!closure_1) {
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    }
    let tmp5 = closure_4;
    if (closure_4) {
      tmp5 = !closure_3;
    }
    if (tmp5) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items2);
  const tmp2Result3 = markAsDismissed(11051);
  analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp19Result3 = null;
  if (null != coachmarkComponent) {
    let obj3 = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      children: null
    };
    const obj4 = { style: tmp.container, children: null };
    if (null == themeAndReducedMotionAwareAssetUrl) {
      const items4 = [tmp23, , , ];
      let tmp19Result = null != tickingFormattedLimitedOfferTimeLeft;
      if (tmp19Result) {
        const obj5 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
        tmp19Result = tmp19(tmp11(11052), obj5);
      }
      items4[1] = tmp19Result;
      const obj6 = { style: tmp.textContainer, children: null };
      const obj7 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
      const items5 = [tmp19(tmp2(4754).Heading, obj7), ];
      const obj8 = { style: tmp.text, variant: "text-md/normal", color: "text-subtle", children: coachmarkComponent.body };
      items5[1] = tmp19(tmp2(4754).Text, obj8);
      obj6.children = items5;
      items4[2] = tmp21(tmp22, obj6);
      const obj9 = { grow: true, icon: null, text: null, onPress: null };
      const obj10 = { size: "sm", color: tmp11(580).colors.WHITE };
      obj9.icon = tmp19(tmp2(11330).GiftIcon, obj10);
      const intl = tmp2(1119).intl;
      obj9.text = intl.string(tmp2(1119).t.Ve9Ge6);
      obj9.onPress = tmp17;
      items4[3] = tmp19(tmp2(5188).Button, obj9);
      obj4.children = items4;
      obj3.children = tmp21(tmp22, obj4);
      tmp19Result3 = tmp19(tmp20, obj3);
    } else {
      if (tmp2Result4.isAndroid()) {
        if (!stateFromStores) {
          const obj11 = { style: null, children: null };
          const items6 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj11.style = items6;
          const obj12 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          obj11.children = tmp19(tmp2(9087).APNGPlayer, obj12);
          let tmp19Result4 = tmp19(tmp22, obj11);
        }
      }
      const obj13 = { source: null, style: null };
      const obj14 = { uri: themeAndReducedMotionAwareAssetUrl };
      obj13.source = obj14;
      obj13.style = tmp.imageShared;
      tmp19Result4 = tmp19(tmp11(5802), obj13);
      tmp2Result4 = tmp2(1368);
    }
  }
  return tmp19Result3;
});
