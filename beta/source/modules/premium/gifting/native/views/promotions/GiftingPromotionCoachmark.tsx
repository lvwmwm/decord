// Module ID: 19074
// Function ID: 19075
// Name: GiftingPromotionCoachmark
// Dependencies: [19, 17, 4914, 9143, 1071, 4759, 21, 4913, 575, 504, 9505, 9477, 9506, 6417, 5127, 7520, 7539, 9465, 5141, 5600, 9508, 5504, 5511, 12471, 1112, 2]
// Exports: default

// Module 19074 (GiftingPromotionCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import usePreviousDefault from "usePrevious" /* 6417 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7520 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import utils_openGiftModal from "utils/openGiftModal" /* 9465 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;
import PromotionsStore from "PromotionsStore" /* 9143 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
let obj = { container: obj2, textContainer: obj3, text: { textAlign: "center" }, countdownBadge: obj4, imageShared: size };
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
  let markAsDismissed;
  let obj11;
  let obj3;
  let obj5;
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
  const useThemeAndReducedMotionAwareAssetUrl = markAsDismissed(9505).useThemeAndReducedMotionAwareAssetUrl;
  markAsDismissed(9505);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = tmp2(9477).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  const items1 = [PromotionsStore];
  const tmp2Result = tmp2(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = tmp2(9506).useTickingFormattedLimitedOfferTimeLeft;
  tmp2(9506);
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
    obj3 = { style: tmp.container, children: items4 };
    let tmp21Result = null != themeAndReducedMotionAwareAssetUrl;
    const BottomSheet = tmp2(5141).BottomSheet;
    if (tmp21Result) {
      let obj4 = { source: obj5, style: tmp.imageShared, enableAnimation: !stateFromStores };
      obj5 = { uri: themeAndReducedMotionAwareAssetUrl };
      tmp21Result = tmp21(tmp13(5600), obj4);
    }
    items4 = [tmp21Result, , , ];
    if (enabled) {
      enabled = null != tickingFormattedLimitedOfferTimeLeft;
    }
    if (enabled) {
      const obj6 = { text: tickingFormattedLimitedOfferTimeLeft, style: tmp.countdownBadge };
      enabled = tmp21(tmp13(9508), obj6);
    }
    items4[1] = enabled;
    const obj7 = { style: tmp.textContainer, children: items5 };
    const obj8 = { style: tmp.text, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
    items5 = [closure_11(tmp2(5504).Heading, obj8), ];
    const obj9 = { style: tmp.text, variant: "body-md/normal", color: "text-default", children: coachmarkComponent.body };
    items5[1] = closure_11(tmp2(5504).Text, obj9);
    items4[2] = closure_12(closure_4, obj7);
    const obj10 = { grow: true, icon: closure_11(GiftIcon, obj11), text: intl.string(tmp2(1112).t.Ve9Ge6), onPress: tmp19 };
    const Button = tmp2(5511).Button;
    obj11 = { size: "sm", color: nativeDefault.colors.WHITE };
    GiftIcon = tmp2(12471).GiftIcon;
    intl = tmp2(1112).intl;
    items4[3] = closure_11(Button, obj10);
    tmp21Result2 = tmp21(BottomSheet, obj2);
  }
  return tmp21Result2;
};
