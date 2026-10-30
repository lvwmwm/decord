// Module ID: 15267
// Function ID: 15268
// Name: MarketingPageBannerTile
// Dependencies: [19, 17, 21, 5009, 575, 7320, 15268, 6023, 1261, 10589, 15271, 5712, 5619, 5704, 10270, 2]
// Exports: default

// Module 15267 (MarketingPageBannerTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5704 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6023 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10270 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  bannerFields = bannerFields.bannerFields;
  let helpArticleLinkProps;
  ({ style, cardStyle, componentId, promotionId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = closure_6();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  const getButtonActionHandler = helpArticleLinkProps(15268).getButtonActionHandler;
  if (button != null) {
    buttonAction = button.buttonAction;
  }
  let obj = { buttonAction, applicationId: value, analyticsLocations, analyticsPage, onPaymentSuccess, onPaymentDismiss };
  const button2 = bannerFields.button;
  value = undefined;
  if (button2 != null) {
    if (button2.navigableStorefrontApplicationId != null) {
      value = iter.value;
    }
  }
  const obj2 = { type: helpArticleLinkProps(1261).ImpressionTypes.VIEW, name: helpArticleLinkProps(1261).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: helpArticleLinkProps(10589).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId } };
  const buttonActionHandler = getButtonActionHandler(obj);
  const tmp2Result = useTrackImpressionDefault;
  ({ component_type: helpArticleLinkProps(10589).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId });
  tmp2Result(obj2);
  const tmp4Result = helpArticleLinkProps(15271);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result2 = helpArticleLinkProps(15271);
  helpArticleLinkProps = tmp4Result2.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj4 = { style: items, children: closure_5(View, obj5) };
  items = [tmp.container, style];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.card, cardStyle];
  let tmp13Result = "" !== bannerFields.assetUrl;
  if (tmp13Result) {
    const obj6 = { source: obj7, style: tmp.image, resizeMode: "contain" };
    obj7 = { uri: bannerFields.assetUrl };
    tmp13Result = tmp13(tmp2(5712), obj6);
  }
  items2 = [tmp13Result, , , ];
  const obj8 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
  items2[1] = closure_4(helpArticleLinkProps(5619).Text, obj8);
  const obj9 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: items3 };
  items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp13Result3 = null != helpArticleLinkProps;
  const Text = tmp4(5619).Text;
  if (tmp13Result3) {
    const obj10 = {
      color: "text-link",
      variant: "text-sm/medium",
      accessibilityRole: "link",
      onPress() {
          const obj = LinkingDefault;
          return obj.openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp13Result3 = tmp13(tmp4(5619).Text, obj10);
  }
  items3[2] = tmp13Result3;
  items2[2] = closure_5(Text, obj9);
  let tmp13Result4 = null != bannerFields.button;
  if (tmp13Result4) {
    const obj11 = { style: tmp.ctaButton, children: closure_4(NitroUpsellButtonDefault, obj12) };
    obj12 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    tmp13Result4 = tmp13(tmp14, obj11);
  }
  items2[3] = tmp13Result4;
  return closure_4(View, obj4);
};
