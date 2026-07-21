// Module ID: 7450
// Function ID: 59740
// Name: MarketingPageBannerTile
// Dependencies: []
// Exports: default

// Module 7450 (MarketingPageBannerTile)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { width: "100%" } };
obj = { padding: importDefault(dependencyMap[5]).space.PX_16, borderRadius: importDefault(dependencyMap[5]).radii.lg, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SECONDARY_ALT, overflow: "hidden" };
obj.card = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.image = { borderRadius: importDefault(dependencyMap[5]).radii.md, marginBottom: importDefault(dependencyMap[5]).space.PX_16, padding: importDefault(dependencyMap[5]).space.PX_8, alignSelf: "center" };
const obj1 = { borderRadius: importDefault(dependencyMap[5]).radii.md, marginBottom: importDefault(dependencyMap[5]).space.PX_16, padding: importDefault(dependencyMap[5]).space.PX_8, alignSelf: "center" };
obj.bodyText = { marginTop: importDefault(dependencyMap[5]).space.PX_4 };
const obj2 = { marginTop: importDefault(dependencyMap[5]).space.PX_4 };
obj.ctaButton = { marginTop: importDefault(dependencyMap[5]).space.PX_16 };
obj.nitroWheelIcon = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
let closure_8 = obj.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/premium/promotions/native/MarketingPageBannerTile.tsx");

export default function MarketingPageBannerTile(bannerFields) {
  let analyticsPage;
  let cardStyle;
  let componentId;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let style;
  bannerFields = bannerFields.bannerFields;
  let arg1;
  ({ style, cardStyle, componentId, analyticsPage, onPaymentSuccess, onPaymentDismiss } = bannerFields);
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = arg1(dependencyMap[8]);
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
  obj.analyticsLocations = importDefault(dependencyMap[7])().analyticsLocations;
  obj.analyticsPage = analyticsPage;
  obj.onPaymentSuccess = onPaymentSuccess;
  obj.onPaymentDismiss = onPaymentDismiss;
  obj = {};
  const buttonActionHandler = obj1.getButtonActionHandler(obj);
  obj.type = arg1(dependencyMap[10]).ImpressionTypes.VIEW;
  obj.name = arg1(dependencyMap[10]).ImpressionNames.PREMIUM_MARKETING_COMPONENT;
  obj1 = { component_type: arg1(dependencyMap[11]).MarketingComponentType.MARKETING_PAGE_BANNER, component_id: componentId };
  obj.properties = obj1;
  importDefault(dependencyMap[9])(obj);
  let obj5 = arg1(dependencyMap[12]);
  const formatStringWithCommonPremiumParams = obj5.useFormatStringWithCommonPremiumParams(bannerFields.body);
  let obj6 = arg1(dependencyMap[12]);
  const helpArticleLinkProps = obj6.getHelpArticleLinkProps(bannerFields.helpArticle, bannerFields.helpArticleId);
  arg1 = helpArticleLinkProps;
  const obj2 = { style: items1 };
  const items1 = [tmp.container, style];
  const obj3 = { style: items2 };
  const items2 = [tmp.card, cardStyle];
  let tmp13 = "" !== bannerFields.assetUrl;
  if (tmp13) {
    const obj4 = {};
    obj5 = { uri: bannerFields.assetUrl };
    obj4.source = obj5;
    obj4.style = tmp.image;
    obj4.resizeMode = "contain";
    tmp13 = callback(closure_3, obj4);
  }
  const items3 = [tmp13, , , ];
  obj6 = { children: bannerFields.header };
  items3[1] = callback(arg1(dependencyMap[13]).Text, obj6);
  const obj7 = { style: tmp.bodyText };
  const items4 = [formatStringWithCommonPremiumParams, " ", ];
  let tmp17 = null != helpArticleLinkProps;
  if (tmp17) {
    const obj8 = {
      alignItems: 32,
      justifyContent: 32,
      minWidth: null,
      onPress() {
          return callback(closure_2[15]).openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp17 = callback(arg1(dependencyMap[13]).Text, obj8);
  }
  items4[2] = tmp17;
  obj7.children = items4;
  items3[2] = closure_7(arg1(dependencyMap[14]).TextWithIOSLinkWorkaround, obj7);
  let tmp21 = null != bannerFields.button;
  if (tmp21) {
    const obj9 = { style: tmp.ctaButton };
    const obj10 = { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000232656173919898, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002540898980601415, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012741663005024175, "Null": -68.05714548874676, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014992948780250344, "Null": 0.000000000000000000000000000000000000005881211672176443, text: bannerFields.button.copy, onPress: buttonActionHandler };
    const obj11 = {};
    const items5 = [tmp.nitroWheelIcon];
    obj11.style = items5;
    obj11.color = importDefault(dependencyMap[5]).colors.WHITE;
    obj11.size = "custom";
    obj10.icon = callback(arg1(dependencyMap[17]).NitroWheelIcon, obj11);
    obj10.shiny = !stateFromStores;
    obj9.children = callback(arg1(dependencyMap[16]).Button, obj10);
    tmp21 = callback(closure_4, obj9);
  }
  items3[3] = tmp21;
  obj3.children = items3;
  obj2.children = closure_7(closure_4, obj3);
  return callback(closure_4, obj2);
};
