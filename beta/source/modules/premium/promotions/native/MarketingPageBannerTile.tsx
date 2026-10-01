// Module ID: 12965
// Function ID: 12966
// Name: MarketingPageBannerTile
// Dependencies: [19, 17, 21, 4836, 576, 6583, 12966, 8230, 1249, 10203, 12969, 4832, 4525, 9425, 2]
// Exports: default

// Module 12965 (MarketingPageBannerTile)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4525 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 9425 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: "100%" }, card: obj2, image: size, bodyText: obj3, ctaButton: obj4 };
obj2 = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: "100%", maxWidth: 317, height: 144, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_8, alignSelf: "center" };
obj3 = { marginTop: nativeDefault.space.PX_4 };
obj4 = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
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
  const tmp = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const button = bannerFields.button;
  let buttonAction;
  const getButtonActionHandler = helpArticleLinkProps(12966).getButtonActionHandler;
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
  const obj2 = { type: helpArticleLinkProps(1249).ImpressionTypes.VIEW, name: helpArticleLinkProps(1249).ImpressionNames.PREMIUM_MARKETING_COMPONENT, properties: { component_type: helpArticleLinkProps(10203).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId } };
  const buttonActionHandler = getButtonActionHandler(obj);
  const tmp2Result = useTrackImpressionDefault;
  ({ component_type: helpArticleLinkProps(10203).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId, promotion_id: promotionId });
  tmp2Result(obj2);
  const tmp4Result = helpArticleLinkProps(12969);
  const formatStringWithCommonPremiumParams = tmp4Result.useFormatStringWithCommonPremiumParams(bannerFields.body);
  const tmp4Result2 = helpArticleLinkProps(12969);
  helpArticleLinkProps = tmp4Result2.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  const obj4 = { style: items, children: closure_6(closure_4, obj5) };
  items = [tmp.container, style];
  obj5 = { style: items1, children: items2 };
  items1 = [tmp.card, cardStyle];
  let tmp13Result = "" !== bannerFields.assetUrl;
  if (tmp13Result) {
    const obj6 = { source: obj7, style: tmp.image, resizeMode: "contain" };
    obj7 = { uri: bannerFields.assetUrl };
    tmp13Result = tmp13(closure_3, obj6);
  }
  items2 = [tmp13Result, , , ];
  const obj8 = { color: "mobile-text-heading-primary", variant: "text-lg/bold", children: bannerFields.header };
  items2[1] = closure_5(helpArticleLinkProps(4832).Text, obj8);
  const obj9 = { color: "mobile-text-heading-primary", variant: "text-sm/medium", style: tmp.bodyText, children: items3 };
  items3 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp13Result3 = null != helpArticleLinkProps;
  const Text = tmp4(4832).Text;
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
    tmp13Result3 = tmp13(tmp4(4832).Text, obj10);
  }
  items3[2] = tmp13Result3;
  items2[2] = closure_6(Text, obj9);
  let tmp13Result4 = null != bannerFields.button;
  if (tmp13Result4) {
    const obj11 = { style: tmp.ctaButton, children: closure_5(NitroUpsellButtonDefault, obj12) };
    obj12 = { text: bannerFields.button.copy, onPress: buttonActionHandler };
    tmp13Result4 = tmp13(tmp14, obj11);
  }
  items2[3] = tmp13Result4;
  return closure_5(closure_4, obj4);
};
