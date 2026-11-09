// Module ID: 19399
// Function ID: 19400
// Name: PremiumMarketingMomentActionSheet
// Dependencies: [19, 17, 5141, 1072, 4986, 21, 5140, 575, 504, 7387, 572, 15592, 6160, 1260, 10730, 5388, 8281, 8947, 5842, 5751, 5834, 10409, 1113, 2]
// Exports: default

// Module 19399 (PremiumMarketingMomentActionSheet)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4986 */;
import LinkingDefault from "Linking" /* 5834 */;
import PremiumMarketingButtonActions from "PremiumMarketingButtonActions" /* 15592 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

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
  let buttonCopy;
  let copy;
  let items4;
  let items5;
  let obj10;
  let obj6;
  let obj8;
  let promotionId;
  let tmp14Result;
  let tmp5Result2;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const bottomSheetData = markAsDismissed.bottomSheetData;
  ({ copy, promotionId } = markAsDismissed);
  let helpArticleLink;
  const componentId = markAsDismissed.componentId;
  const tmp = closure_10();
  const tmp3 = promotionId;
  let obj = markAsDismissed(promotionId[8]);
  const items = [helpArticleLink];
  const stateFromStores = obj.useStateFromStores(items, () => helpArticleLink.useReducedMotion);
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
  const items2 = [buttonAction, , , , ];
  let button2 = bottomSheetData.button;
  let value;
  if (button2 != null) {
    const iter = button2.navigableStorefrontApplicationId;
    if (iter != null) {
      value = iter.value;
    }
  }
  items2[1] = value;
  let button3 = bottomSheetData.button;
  let value2;
  if (button3 != null) {
    const iter2 = button3.shopCollectionId;
    if (iter2 != null) {
      value2 = iter2.value;
    }
  }
  items2[2] = value2;
  items2[3] = callback;
  items2[4] = analyticsLocations;
  const items3 = [callback];
  const callback1 = useCallback(() => {
    let value;
    let value2;
    callback(ContentDismissActionType.PRIMARY);
    const button = bottomSheetData.button;
    let buttonAction;
    const getButtonActionHandler = PremiumMarketingButtonActions.getButtonActionHandler;
    if (button != null) {
      buttonAction = button.buttonAction;
    }
    const button2 = tmp3.button;
    const obj = { buttonAction, applicationId: value, shopCollectionId: value2, analyticsLocations, analyticsPage: AnalyticsPages.PREMIUM_MARKETING_MOMENT_ACTION_SHEET };
    value = undefined;
    if (button2 != null) {
      if (button2.navigableStorefrontApplicationId != null) {
        value = iter.value;
      }
    }
    const button3 = tmp3.button;
    value2 = undefined;
    if (button3 != null) {
      if (button3.shopCollectionId != null) {
        value2 = iter2.value;
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
  helpArticleLink = copy.helpArticleLink;
  const obj5 = { onDismiss: callback2, children: closure_9(callback, obj6) };
  obj6 = { style: tmp.container, children: items4 };
  const BottomSheet = tmp2(tmp3[15]).BottomSheet;
  const obj7 = { uri: bottomSheetData.assetUrl };
  const tmp2Result = markAsDismissed(tmp3[16]);
  if (tmp2Result.getFile(obj7).isVideo) {
    size = { src: obj8, style: tmp.video, muted: true, height: 188, width: 335, paused: stateFromStores, resizeMode: "contain" };
    obj8 = { videoURI: null, uri: null };
    ({ assetUrl: obj12.videoURI, assetUrl: obj12.uri } = bottomSheetData);
    tmp14Result = tmp14(tmp5(tmp3[17]), size);
  } else {
    const obj9 = { source: obj10, style: tmp.image, resizeMode: "contain" };
    obj10 = { uri: bottomSheetData.assetUrl };
    tmp14Result = tmp14(tmp5(tmp3[18]), obj9);
  }
  items4 = [tmp14Result, , , ];
  const obj11 = { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/semibold", children: copy.header };
  items4[1] = closure_8(markAsDismissed(tmp3[19]).Text, obj11);
  const obj13 = { style: tmp.body, color: "text-default", variant: "body-sm/normal", children: items5 };
  items5 = [copy.body, " ", ];
  let tmp14Result2 = null != helpArticleLink;
  const Text = tmp2(tmp3[19]).Text;
  if (tmp14Result2) {
    const obj14 = {
      color: "text-link",
      variant: "body-sm/normal",
      accessibilityRole: "link",
      onPress() {
          const obj = LinkingDefault;
          return obj.openURL(helpArticleLink.url);
        },
      children: helpArticleLink.linkText
    };
    tmp14Result2 = tmp14(tmp2(tmp3[19]).Text, obj14);
  }
  items5[2] = tmp14Result2;
  items4[2] = closure_9(Text, obj13);
  const obj15 = { style: tmp.buttonContainer, children: closure_8(tmp5Result2, { text: buttonCopy, onPress: callback1 }) };
  buttonCopy = copy.buttonCopy;
  tmp5Result2 = bottomSheetData(tmp3[21]);
  if (buttonCopy == null) {
    const intl = tmp2(tmp3[22]).intl;
    buttonCopy = intl.string(tmp2(tmp3[22]).t.J61px0);
  }
  items4[3] = closure_8(callback, obj15);
  return closure_8(BottomSheet, obj5);
};
