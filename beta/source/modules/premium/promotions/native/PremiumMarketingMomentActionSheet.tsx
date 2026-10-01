// Module ID: 16755
// Function ID: 16756
// Name: PremiumMarketingMomentActionSheet
// Dependencies: [19, 17, 4825, 1074, 2042, 21, 4836, 576, 504, 6583, 573, 12966, 8230, 1249, 10203, 12969, 6571, 5441, 7755, 5899, 4832, 4525, 9425, 1115, 2]
// Exports: default

// Module 16755 (PremiumMarketingMomentActionSheet)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import LinkingDefault from "Linking" /* 4525 */;
import PremiumMarketingButtonActions from "PremiumMarketingButtonActions" /* 12966 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let size;
let size1;
const View = react_native.View;
const AnalyticsPages = Constants.AnalyticsPages;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: size, header: obj3, body: { textAlign: "center" }, image: size1, video: obj4 };
obj2 = { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: 12, paddingHorizontal: 20, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj3 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
size1 = { height: 188, width: 335, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
obj4 = { borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default function PremiumMarketingMomentActionSheet(markAsDismissed) {
  let copy;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj6;
  let obj8;
  let tmp14Result;
  let tmp5Result2;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const bottomSheetData = markAsDismissed.bottomSheetData;
  const promotionId = markAsDismissed.promotionId;
  let helpArticleLinkProps;
  const componentId = markAsDismissed.componentId;
  const tmp = closure_10();
  let tmp3 = promotionId;
  let obj = markAsDismissed(promotionId[8]);
  const items = [helpArticleLinkProps];
  const stateFromStores = obj.useStateFromStores(items, () => helpArticleLinkProps.useReducedMotion);
  const analyticsLocations = bottomSheetData(promotionId[9])().analyticsLocations;
  let obj2 = analyticsLocations;
  const items1 = [markAsDismissed, promotionId];
  const callback = analyticsLocations.useCallback((arg0) => {
    markAsDismissed(arg0);
    const obj = DispatcherDefault;
    const obj2 = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
    obj.dispatch(obj2);
  }, items1);
  let button = bottomSheetData.button;
  let buttonAction;
  const useCallback = analyticsLocations.useCallback;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  const items2 = [buttonAction, , , ];
  let button2 = bottomSheetData.button;
  let value;
  if (button2 != null) {
    const iter = button2.navigableStorefrontApplicationId;
    if (iter != null) {
      value = iter.value;
    }
  }
  items2[1] = value;
  items2[2] = callback;
  items2[3] = analyticsLocations;
  const items3 = [callback];
  const callback1 = useCallback(() => {
    let value;
    callback(ContentDismissActionType.PRIMARY);
    const button = bottomSheetData.button;
    let buttonAction;
    const getButtonActionHandler = PremiumMarketingButtonActions.getButtonActionHandler;
    const tmp3 = bottomSheetData;
    if (button != null) {
      buttonAction = button.buttonAction;
    }
    const button2 = tmp3.button;
    const obj = { buttonAction, applicationId: value, analyticsLocations, analyticsPage: AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET };
    value = undefined;
    if (button2 != null) {
      if (button2.navigableStorefrontApplicationId != null) {
        value = iter.value;
      }
    }
    getButtonActionHandler(obj)();
  }, items2);
  const callback2 = obj2.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj3 = { type: markAsDismissed(tmp3[13]).ImpressionTypes.HALFSHEET, name: markAsDismissed(tmp3[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: markAsDismissed(tmp3[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: componentId, dismissible_content: bottomSheetData.dismissibleContent, promotion_id: promotionId } };
  const tmp5Result = bottomSheetData(tmp3[12]);
  ({ component_type: markAsDismissed(tmp3[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: componentId, dismissible_content: bottomSheetData.dismissibleContent, promotion_id: promotionId });
  tmp5Result(obj3);
  const tmp2Result = markAsDismissed(tmp3[15]);
  helpArticleLinkProps = tmp2Result.getHelpArticleLinkProps(bottomSheetData.helpArticle, bottomSheetData.helpArticleId);
  const obj5 = { onDismiss: callback2, children: closure_9(callback, obj6) };
  obj6 = { style: items4, children: items5 };
  items4 = [tmp.container];
  BottomSheet = tmp2(tmp3[16]).BottomSheet;
  const obj7 = { uri: bottomSheetData.assetUrl };
  const tmp2Result2 = markAsDismissed(tmp3[17]);
  if (tmp2Result2.getFile(obj7).isVideo) {
    size = { src: obj8, style: tmp.video, muted: true, height: 188, width: 335, paused: stateFromStores, resizeMode: "contain" };
    obj8 = { videoURI: null, uri: null };
    ({ assetUrl: obj13.videoURI, assetUrl: obj13.uri } = bottomSheetData);
    tmp14Result = tmp14(tmp5(tmp3[18]), size);
  } else {
    const obj9 = { source: obj10, style: tmp.image, resizeMode: "contain" };
    obj10 = { uri: bottomSheetData.assetUrl };
    tmp14Result = tmp14(tmp5(tmp3[19]), obj9);
  }
  items5 = [tmp14Result, , , ];
  const obj11 = { style: items6, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold", children: bottomSheetData.header };
  items6 = [tmp.header];
  items5[1] = closure_8(markAsDismissed(tmp3[20]).Text, obj11);
  const obj12 = { style: items7, color: "text-default", variant: "text-sm/normal", children: items8 };
  items7 = [tmp.body];
  items8 = [bottomSheetData.body, " ", ];
  let tmp14Result2 = null != helpArticleLinkProps;
  const Text = tmp2(tmp3[20]).Text;
  if (tmp14Result2) {
    const obj14 = {
      color: "text-link",
      variant: "text-sm/normal",
      accessibilityRole: "link",
      onPress() {
          const obj = LinkingDefault;
          return obj.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp14Result2 = tmp14(tmp2(tmp3[20]).Text, obj14);
  }
  items8[2] = tmp14Result2;
  items5[2] = closure_9(Text, obj12);
  const obj15 = { style: items9, children: closure_8(tmp5Result2, { text: copy, onPress: callback1 }) };
  items9 = [tmp.buttonContainer];
  const button3 = bottomSheetData.button;
  copy = undefined;
  tmp5Result2 = bottomSheetData(tmp3[22]);
  if (button3 != null) {
    copy = button3.copy;
  }
  if (copy == null) {
    const intl = tmp2(tmp3[23]).intl;
    copy = intl.string(tmp2(tmp3[23]).t.J61px0);
  }
  items5[3] = closure_8(callback, obj15);
  return closure_8(BottomSheet, obj5);
};
