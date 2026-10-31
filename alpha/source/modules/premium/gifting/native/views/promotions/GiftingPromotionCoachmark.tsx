// Module ID: 19018
// Function ID: 19019
// Name: GiftingPromotionCoachmark
// Dependencies: [19, 17, 5015, 9626, 1072, 4860, 21, 5014, 575, 504, 10623, 10608, 10624, 6732, 5258, 7326, 7351, 10558, 5272, 1375, 9504, 5717, 10627, 5624, 5634, 13350, 1113, 2]
// Exports: default

// Module 19018 (GiftingPromotionCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import usePreviousDefault from "usePrevious" /* 6732 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10558 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import PromotionsStore from "PromotionsStore" /* 9626 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ AnalyticsSections: metroImportDefault, AnalyticsObjects: metroImportAll, AnalyticsPages: c9 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, text: { textAlign: "center" }, countdownBadge: obj4, imageShared: size, imageWrapperAndroid: { overflow: "hidden" } };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj4 = { alignSelf: "center", marginTop: nativeDefault.space.PX_24 };
size = { height: 188, width: 335, borderRadius: nativeDefault.radii.sm };
let closure_13 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
  let GiftIcon;
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
  let obj13;
  let obj3;
  let obj5;
  let obj7;
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
  const useThemeAndReducedMotionAwareAssetUrl = markAsDismissed(10623).useThemeAndReducedMotionAwareAssetUrl;
  markAsDismissed(10623);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = tmp2(10608).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  const items1 = [PromotionsStore];
  const tmp2Result = tmp2(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = tmp2(10624).useTickingFormattedLimitedOfferTimeLeft;
  tmp2(10624);
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  const tickingFormattedLimitedOfferTimeLeft = useTickingFormattedLimitedOfferTimeLeft(endDate);
  importDefault = tmp12;
  const tmp14 = usePreviousDefault(null != stateFromStores1);
  dependencyMap = tmp14;
  react = tmp15;
  const tmp16 = usePreviousDefault(null != tickingFormattedLimitedOfferTimeLeft);
  closure_4 = tmp16;
  const items2 = [tmp16, null != tickingFormattedLimitedOfferTimeLeft, tmp12, tmp14, markAsDismissed];
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
  const tmp18 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp18(AnalyticsLocationDefault.GIFTING_PROMOTION_COACHMARK).analyticsLocations;
  const items3 = [analyticsLocations, markAsDismissed];
  let tmp21Result2 = null;
  if (null != coachmarkComponent) {
    let obj2 = {
      startExpanded: true,
      onDismiss() {
          return markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      children: closure_12(closure_4, obj3)
    };
    obj3 = { style: tmp.container, children: items5 };
    let tmp24 = null != themeAndReducedMotionAwareAssetUrl;
    BottomSheet = tmp2(5272).BottomSheet;
    if (tmp24) {
      const tmp2Result4 = tmp2(1375);
      if (tmp2Result4.isAndroid()) {
        let tmp21Result;
        if (!stateFromStores) {
          let obj4 = { style: items4, children: closure_11(tmp2(9504).APNGPlayer, obj5) };
          items4 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj5 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          tmp21Result = tmp21(tmp23, obj4);
        }
        tmp24 = tmp21Result;
      }
      const obj6 = { source: obj7, style: tmp.imageShared };
      obj7 = { uri: themeAndReducedMotionAwareAssetUrl };
      tmp21Result = tmp21(tmp13(5717), obj6);
    }
    items5 = [tmp24, , , ];
    if (enabled) {
      enabled = null != tickingFormattedLimitedOfferTimeLeft;
    }
    if (enabled) {
      const obj8 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
      enabled = tmp21(tmp13(10627), obj8);
    }
    items5[1] = enabled;
    const obj10 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
    const obj9 = { style: tmp.textContainer, children: items6 };
    items6 = [closure_11(tmp2(5624).Heading, obj10), ];
    const obj11 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
    items6[1] = closure_11(tmp2(5624).Text, obj11);
    items5[2] = closure_12(closure_4, obj9);
    const obj12 = { grow: true, icon: closure_11(GiftIcon, obj13), text: intl.string(tmp2(1113).t.Ve9Ge6), onPress: tmp19 };
    const Button = tmp2(5634).Button;
    obj13 = { size: "sm", color: nativeDefault.colors.WHITE };
    GiftIcon = tmp2(13350).GiftIcon;
    intl = tmp2(1113).intl;
    items5[3] = closure_11(Button, obj12);
    tmp21Result2 = tmp21(BottomSheet, obj2);
  }
  return tmp21Result2;
};
