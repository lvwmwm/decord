// Module ID: 15663
// Function ID: 120764
// Name: PremiumMarketingMomentActionSheet
// Dependencies: [31, 27, 4122, 653, 1345, 33, 4130, 689, 566, 5462, 686, 7537, 8604, 480, 7429, 12389, 5187, 4666, 8346, 5085, 4126, 3827, 8605, 1212, 2]
// Exports: default

// Module 15663 (PremiumMarketingMomentActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsPages } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: 12, paddingHorizontal: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, width: 335, height: 48 };
_createForOfIteratorHelperLoose.buttonContainer = obj1;
_createForOfIteratorHelperLoose.header = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.body = { textAlign: "center" };
let obj3 = { height: 188, width: 335, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.image = obj3;
let obj2 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, textAlign: "center" };
_createForOfIteratorHelperLoose.video = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default function PremiumMarketingMomentActionSheet(component_id) {
  const markAsDismissed = component_id.markAsDismissed;
  const bottomSheetData = component_id.bottomSheetData;
  const promotionId = component_id.promotionId;
  let helpArticleLinkProps;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(promotionId[8]);
  const items = [helpArticleLinkProps];
  const stateFromStores = obj.useStateFromStores(items, () => helpArticleLinkProps.useReducedMotion);
  const analyticsLocations = bottomSheetData(promotionId[9])().analyticsLocations;
  const items1 = [markAsDismissed, promotionId];
  const callback = analyticsLocations.useCallback((arg0) => {
    markAsDismissed(arg0);
    let obj = bottomSheetData(promotionId[10]);
    obj = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
    obj.dispatch(obj);
  }, items1);
  let button = bottomSheetData.button;
  let buttonAction;
  if (null != button) {
    buttonAction = button.buttonAction;
  }
  const items2 = [buttonAction, , , ];
  let button2 = bottomSheetData.button;
  let value;
  if (null != button2) {
    if (null != button2.navigableStorefrontApplicationId) {
      value = iter.value;
    }
  }
  items2[1] = value;
  items2[2] = callback;
  items2[3] = analyticsLocations;
  const items3 = [callback];
  const callback1 = analyticsLocations.useCallback(() => {
    callback(outer1_7.PRIMARY);
    let obj = markAsDismissed(promotionId[11]);
    obj = {};
    const button = bottomSheetData.button;
    let buttonAction;
    if (null != button) {
      buttonAction = button.buttonAction;
    }
    obj.buttonAction = buttonAction;
    const button2 = bottomSheetData.button;
    let value;
    if (null != button2) {
      if (null != button2.navigableStorefrontApplicationId) {
        value = iter.value;
      }
    }
    obj.applicationId = value;
    obj.analyticsLocations = analyticsLocations;
    obj.analyticsPage = outer1_6.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
    obj.getButtonActionHandler(obj)();
  }, items2);
  const callback2 = analyticsLocations.useCallback(() => {
    callback(outer1_7.USER_DISMISS);
  }, items3);
  obj = { type: markAsDismissed(promotionId[13]).ImpressionTypes.HALFSHEET, name: markAsDismissed(promotionId[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT };
  obj = { component_type: markAsDismissed(promotionId[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: component_id.componentId, dismissible_content: bottomSheetData.dismissibleContent };
  obj.properties = obj;
  bottomSheetData(promotionId[12])(obj);
  let obj3 = markAsDismissed(promotionId[15]);
  helpArticleLinkProps = obj3.getHelpArticleLinkProps(bottomSheetData.helpArticle, bottomSheetData.helpArticleId);
  const obj1 = { onDismiss: callback2 };
  const obj2 = { style: items4 };
  items4 = [tmp.container];
  let obj6 = markAsDismissed(promotionId[17]);
  obj3 = { uri: bottomSheetData.assetUrl };
  if (obj6.getFile(obj3).isVideo) {
    const obj4 = { src: null, style: null, muted: true, height: 188, width: 335, paused: null, resizeMode: "contain" };
    ({ assetUrl: obj12.videoURI, assetUrl: obj12.uri } = bottomSheetData);
    obj4.src = {};
    obj4.style = tmp.video;
    obj4.paused = stateFromStores;
    let tmp15Result = tmp15(tmp16(tmp17[18]), obj4);
    const obj5 = {};
  } else {
    obj6 = {};
    const obj7 = { uri: bottomSheetData.assetUrl };
    obj6.source = obj7;
    obj6.style = tmp.image;
    obj6.resizeMode = "contain";
    tmp15Result = tmp15(tmp16(tmp17[19]), obj6);
  }
  const items5 = [tmp15Result, , , ];
  const obj8 = { style: null, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold" };
  const items6 = [tmp.header];
  obj8.style = items6;
  obj8.children = bottomSheetData.header;
  items5[1] = callback(markAsDismissed(promotionId[20]).Text, obj8);
  const obj9 = { style: null, color: "text-default", variant: "text-sm/normal" };
  const items7 = [tmp.body];
  obj9.style = items7;
  const items8 = [bottomSheetData.body, " ", ];
  let tmp20 = null != helpArticleLinkProps;
  if (tmp20) {
    const obj10 = {
      color: "text-link",
      variant: "text-sm/normal",
      accessibilityRole: "link",
      onPress() {
          return bottomSheetData(promotionId[21]).openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp20 = callback(markAsDismissed(promotionId[20]).Text, obj10);
  }
  items8[2] = tmp20;
  obj9.children = items8;
  items5[2] = closure_9(markAsDismissed(promotionId[20]).Text, obj9);
  const obj11 = { style: items9 };
  items9 = [tmp.buttonContainer];
  const obj12 = {};
  const button3 = bottomSheetData.button;
  let copy;
  const tmp12 = callback;
  const tmp13 = closure_9;
  const tmp14 = callback;
  const tmp19 = closure_9;
  const tmp25 = callback;
  const tmp9 = bottomSheetData(promotionId[12]);
  if (null != button3) {
    copy = button3.copy;
  }
  if (null == copy) {
    const intl = markAsDismissed(promotionId[23]).intl;
    copy = intl.string(markAsDismissed(promotionId[23]).t.J61px0);
  }
  obj12.text = copy;
  obj12.onPress = callback1;
  obj11.children = callback(bottomSheetData(promotionId[22]), obj12);
  items5[3] = callback(tmp25, obj11);
  obj2.children = items5;
  obj1.children = tmp13(tmp14, obj2);
  return tmp12(markAsDismissed(promotionId[16]).BottomSheet, obj1);
};
