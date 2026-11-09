// Module ID: 15591
// Function ID: 15592
// Name: MarketingPageBannerTile
// Dependencies: [19, 17, 21, 5140, 575, 7387, 15592, 6160, 1260, 10730, 15595, 5842, 5751, 5834, 10409, 2]
// Exports: default

// Module 15591 (MarketingPageBannerTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5834 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6160 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10409 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%" }, card: obj2, image: size, bodyText: obj3, ctaButton: obj4 };
obj2 = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
obj3 = { marginTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  let analyticsPage;
  let cardStyle;
  let componentId;
  let items;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj5;
  let obj7;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let promotionId;
  let style;
  let value;
  let value2;
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_6();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  const getButtonActionHandler = helpArticleLinkProps(15592).getButtonActionHandler;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  let obj = { buttonAction, applicationId: value, shopCollectionId: value2, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  const button3 = bannerFields.button;
  value2 = undefined;
  if (button3 != null) {
    if (button3.shopCollectionId != null) {
      value2 = iter2.value;
    }
  }
  const obj2 = { type: helpArticleLinkProps(1260).ImpressionTypes.VIEW, name: helpArticleLinkProps(1260).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: helpArticleLinkProps(10730).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId } };
  const buttonActionHandler = getButtonActionHandler(obj);
  const tmp2Result = useTrackImpressionDefault;
  ({ component_type: helpArticleLinkProps(10730).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId });
  tmp2Result(obj2);
  const tmp4Result = helpArticleLinkProps(15595);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result2 = helpArticleLinkProps(15595);
  helpArticleLinkProps = tmp4Result2.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj4 = { style: items, children: closure_5(View, obj5) };
  items = [tmp.container, style];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.card, cardStyle];
  let tmp14Result = "" !== bannerFields.assetUrl;
  if (tmp14Result) {
    const obj6 = { source: obj7, style: tmp.image, resizeMode: "contain" };
    obj7 = { uri: bannerFields.assetUrl };
    tmp14Result = tmp14(tmp2(5842), obj6);
  }
  items2 = [tmp14Result, , , ];
  const obj8 = { color: "mobile-text-heading-primary", variant: "body-lg/semibold", children: bannerFields.header };
  items2[1] = closure_4(helpArticleLinkProps(5751).Text, obj8);
  const obj9 = { color: "mobile-text-heading-primary", variant: "body-sm/medium", style: tmp.bodyText, children: items3 };
  items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp14Result3 = null != helpArticleLinkProps;
  const Text = tmp4(5751).Text;
  if (tmp14Result3) {
    const obj10 = {
      color: "text-link",
      variant: "body-sm/medium",
      accessibilityRole: "link",
      onPress() {
          const obj = LinkingDefault;
          return obj.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp14Result3 = tmp14(tmp4(5751).Text, obj10);
  }
  items3[2] = tmp14Result3;
  items2[2] = closure_5(Text, obj9);
  let tmp14Result4 = null != bannerFields.button;
  if (tmp14Result4) {
    const obj11 = { style: tmp.ctaButton, children: closure_4(NitroUpsellButtonDefault, obj12) };
    obj12 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    tmp14Result4 = tmp14(tmp15, obj11);
  }
  items2[3] = tmp14Result4;
  return closure_4(View, obj4);
};
