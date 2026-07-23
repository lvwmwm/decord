// Module ID: 7456
// Function ID: 59797
// Name: MarketingPageBannerTile
// Dependencies: [31, 27, 33, 4130, 689, 5464, 7457, 8559, 480, 7453, 12362, 4126, 5459, 3827, 8560, 2]
// Exports: default

// Module 7456 (MarketingPageBannerTile)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { width: "100%" } };
_createForOfIteratorHelperLoose = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
const obj1 = { width: "100%", maxWidth: 317, height: 144, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_8, alignSelf: "center" };
_createForOfIteratorHelperLoose.image = obj1;
_createForOfIteratorHelperLoose.bodyText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.ctaButton = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  let analyticsPage;
  let cardStyle;
  let componentId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let style;
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = helpArticleLinkProps(7457);
  obj = {};
  const button = bannerFields.button;
  let buttonAction;
  if (null != button) {
    buttonAction = button.buttonAction;
  }
  obj.buttonAction = buttonAction;
  const button2 = bannerFields.button;
  let value;
  if (null != button2) {
    if (null != button2.navigableStorefrontApplicationId) {
      value = iter.value;
    }
  }
  obj.applicationId = value;
  obj.analyticsLocations = importDefault(5464)().analyticsLocations;
  obj.analyticsPage = analyticsPage;
  obj.onPaymentSuccess = onPaymentSuccess;
  obj.onPaymentDismiss = onPaymentDismiss;
  obj = {};
  const buttonActionHandler = obj.getButtonActionHandler(obj);
  obj.type = helpArticleLinkProps(480).ImpressionTypes.VIEW;
  obj.name = helpArticleLinkProps(480).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  const tmp5 = importDefault(8559);
  obj.properties = { component_type: helpArticleLinkProps(7453).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId };
  tmp5(obj);
  let obj4 = helpArticleLinkProps(12362);
  const formatStringWithCommonPremiumParams = obj4.useFormatStringWithCommonPremiumParams(bannerFields.body);
  let obj5 = helpArticleLinkProps(12362);
  helpArticleLinkProps = obj5.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj2 = { style: items };
  items = [tmp.container, style];
  const obj3 = { style: items1 };
  items1 = [tmp.card, cardStyle];
  let tmp12 = "" !== bannerFields.assetUrl;
  if (tmp12) {
    obj4 = {};
    obj5 = { uri: bannerFields.assetUrl };
    obj4.source = obj5;
    obj4.style = tmp.image;
    obj4.resizeMode = "contain";
    tmp12 = callback(closure_3, obj4);
  }
  const items2 = [tmp12, , , ];
  const obj6 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
  items2[1] = callback(helpArticleLinkProps(4126).Text, obj6);
  const obj7 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText };
  const items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp16 = null != helpArticleLinkProps;
  if (tmp16) {
    const obj8 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          return outer1_1(outer1_2[13]).openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp16 = callback(helpArticleLinkProps(4126).Text, obj8);
  }
  items3[2] = tmp16;
  obj7.children = items3;
  items2[2] = closure_6(helpArticleLinkProps(5459).TextWithIOSLinkWorkaround, obj7);
  let tmp20 = null != bannerFields.button;
  if (tmp20) {
    const obj9 = { style: tmp.ctaButton };
    const obj10 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    obj9.children = callback(importDefault(8560), obj10);
    tmp20 = callback(closure_4, obj9);
  }
  items2[3] = tmp20;
  obj3.children = items2;
  obj2.children = closure_6(closure_4, obj3);
  return callback(closure_4, obj2);
};
