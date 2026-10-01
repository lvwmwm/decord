// Module ID: 16750
// Function ID: 16751
// Name: GiftingPromotionCoachmark
// Dependencies: [19, 17, 4825, 10128, 1074, 2042, 21, 4836, 576, 1364, 504, 10218, 10202, 16751, 7720, 4800, 6583, 6603, 10124, 6571, 8271, 5899, 4832, 5281, 10496, 1115, 2]
// Exports: default

// Module 16750 (GiftingPromotionCoachmark)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import usePreviousDefault from "usePrevious" /* 7720 */;
import utils_openGiftModal from "utils/openGiftModal" /* 10124 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

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
let unpackModuleId;
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
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingPromotionCoachmark.tsx");

export default function GiftingPromotionCoachmarkActionSheet(arg0) {
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
  const useThemeAndReducedMotionAwareAssetUrl = markAsDismissed(10218).useThemeAndReducedMotionAwareAssetUrl;
  markAsDismissed(10218);
  if (coachmarkComponent != null) {
    asset = coachmarkComponent.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = useThemeAndReducedMotionAwareAssetUrl(asset);
  const GiftPromotionReminderExperiment = tmp2(10202).GiftPromotionReminderExperiment;
  let enabled = GiftPromotionReminderExperiment.useConfig({ location: "GiftingPromotionCoachmarkActionSheet" }).enabled;
  const items1 = [PromotionsStore];
  const tmp2Result = tmp2(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => giftPromotion.getGiftPromotion());
  let endDate;
  const useTickingFormattedLimitedOfferTimeLeft = tmp2(16751).useTickingFormattedLimitedOfferTimeLeft;
  tmp2(16751);
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
    BottomSheet = tmp2(6571).BottomSheet;
    if (tmp23) {
      const tmp2Result4 = tmp2(1364);
      if (tmp2Result4.isAndroid()) {
        let tmp20Result;
        if (!stateFromStores) {
          let obj4 = { style: items4, children: closure_11(tmp2(8271).APNGPlayer, obj5) };
          items4 = [, ];
          ({ imageShared: arr5[0], imageWrapperAndroid: arr5[1] } = tmp);
          obj5 = { url: themeAndReducedMotionAwareAssetUrl, style: tmp.imageShared, autoplay: true };
          tmp20Result = tmp20(tmp22, obj4);
        }
        tmp23 = tmp20Result;
      }
      const obj6 = { source: obj7, style: tmp.imageShared };
      obj7 = { uri: themeAndReducedMotionAwareAssetUrl };
      tmp20Result = tmp20(tmp12(5899), obj6);
    }
    items5 = [tmp23, , , ];
    if (enabled) {
      enabled = null != str;
    }
    if (enabled) {
      const obj8 = { style: tmp.countdownBadge, children: closure_11(Text, obj9) };
      obj9 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.countdownBadgeText, children: str.toUpperCase() };
      Text = tmp2(4832).Text;
      enabled = tmp20(tmp22, obj8);
    }
    items5[1] = enabled;
    const obj10 = { style: tmp.textContainer, children: items6 };
    const obj11 = { style: tmp.text, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: coachmarkComponent.header };
    items6 = [closure_11(tmp2(4832).Heading, obj11), ];
    const obj12 = { style: tmp.text, variant: "text-md/normal", color: "text-default", children: coachmarkComponent.body };
    items6[1] = closure_11(tmp2(4832).Text, obj12);
    items5[2] = closure_12(closure_4, obj10);
    const obj13 = { grow: true, icon: closure_11(GiftIcon, obj14), text: intl.string(tmp2(1115).t.Ve9Ge6), onPress: tmp18 };
    const Button = tmp2(5281).Button;
    obj14 = { size: "sm", color: nativeDefault.colors.WHITE };
    GiftIcon = tmp2(10496).GiftIcon;
    intl = tmp2(1115).intl;
    items5[3] = closure_11(Button, obj13);
    tmp20Result2 = tmp20(BottomSheet, obj2);
  }
  return tmp20Result2;
};
