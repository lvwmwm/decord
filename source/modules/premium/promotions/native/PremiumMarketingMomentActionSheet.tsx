// Module ID: 15499
// Function ID: 118269
// Name: PremiumMarketingMomentActionSheet
// Dependencies: []
// Exports: default

// Module 15499 (PremiumMarketingMomentActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticsPages = arg1(dependencyMap[3]).AnalyticsPages;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[7]).radii.lg };
obj.container = obj;
const obj1 = { padding: 255, spriteIndex: 812777728, Date: 805306368, marginTop: importDefault(dependencyMap[7]).space.PX_24 };
obj.buttonContainer = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.header = { marginBottom: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
obj.body = { textAlign: "center" };
const obj2 = { marginBottom: importDefault(dependencyMap[7]).space.PX_8, textAlign: "center" };
obj.image = { borderRadius: importDefault(dependencyMap[7]).radii.md, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
const obj3 = { borderRadius: importDefault(dependencyMap[7]).radii.md, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj.video = { borderRadius: importDefault(dependencyMap[7]).radii.md, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
obj.nitroWheelIcon = { options: "100%", body: null, transform: null };
let closure_10 = obj.createStyles(obj);
const obj4 = { borderRadius: importDefault(dependencyMap[7]).radii.md, marginBottom: importDefault(dependencyMap[7]).space.PX_24 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/premium/promotions/native/PremiumMarketingMomentActionSheet.tsx");

export default function PremiumMarketingMomentActionSheet(component_id) {
  const markAsDismissed = component_id.markAsDismissed;
  const arg1 = markAsDismissed;
  const bottomSheetData = component_id.bottomSheetData;
  const importDefault = bottomSheetData;
  const promotionId = component_id.promotionId;
  const dependencyMap = promotionId;
  let closure_5;
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => helpArticleLinkProps.useReducedMotion);
  const analyticsLocations = importDefault(dependencyMap[9])().analyticsLocations;
  const React = analyticsLocations;
  const items1 = [markAsDismissed, promotionId];
  const callback = React.useCallback((arg0) => {
    markAsDismissed(arg0);
    let obj = bottomSheetData(promotionId[10]);
    obj = { type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED", promotionId };
    obj.dispatch(obj);
  }, items1);
  const View = callback;
  const button = bottomSheetData.button;
  let buttonAction;
  if (null != button) {
    buttonAction = button.buttonAction;
  }
  const items2 = [buttonAction, , , ];
  const button2 = bottomSheetData.button;
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
  const callback1 = React.useCallback(() => {
    callback(constants2.PRIMARY);
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
    obj.analyticsPage = constants.PREMIUM_MARKETING_MOMENT_ACTION_SHEET;
    obj.getButtonActionHandler(obj)();
  }, items2);
  const callback2 = React.useCallback(() => {
    callback(constants2.USER_DISMISS);
  }, items3);
  obj = { type: arg1(dependencyMap[13]).ImpressionTypes.HALFSHEET, name: arg1(dependencyMap[13]).ImpressionNames.PREMIUM_MARKETING_COMPONENT };
  obj = { component_type: arg1(dependencyMap[14]).MarketingComponentType.MOBILE_BOTTOM_SHEET, component_id: component_id.componentId, dismissible_content: bottomSheetData.dismissibleContent };
  obj.properties = obj;
  importDefault(dependencyMap[12])(obj);
  let obj3 = arg1(dependencyMap[15]);
  const helpArticleLinkProps = obj3.getHelpArticleLinkProps(bottomSheetData.helpArticle, bottomSheetData.helpArticleId);
  closure_5 = helpArticleLinkProps;
  const obj1 = { onDismiss: callback2 };
  const obj2 = { style: items4 };
  const items4 = [tmp.container];
  let obj6 = arg1(dependencyMap[17]);
  obj3 = { uri: bottomSheetData.assetUrl };
  if (obj6.getFile(obj3).isVideo) {
    const obj4 = {};
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
  const obj8 = { -9223372036854775808: null, 9223372036854775807: null, 0: null };
  const items6 = [tmp.header];
  obj8.style = items6;
  obj8.children = bottomSheetData.header;
  items5[1] = callback(arg1(dependencyMap[20]).Text, obj8);
  const obj9 = { -9223372036854775808: 285212971, 9223372036854775807: "/assets/modules/premium/referral_program/native/images", 0: 180 };
  const items7 = [tmp.body];
  obj9.style = items7;
  const items8 = [bottomSheetData.body, " ", ];
  let tmp20 = null != helpArticleLinkProps;
  if (tmp20) {
    const obj10 = {
      lastEffect: 13567,
      events: 13312,
      stores: 1280377600,
      onPress() {
          return bottomSheetData(promotionId[22]).openURL(helpArticleLinkProps.url);
        },
      children: helpArticleLinkProps.linkText
    };
    tmp20 = callback(arg1(dependencyMap[20]).Text, obj10);
  }
  items8[2] = tmp20;
  obj9.children = items8;
  items5[2] = closure_9(arg1(dependencyMap[21]).TextWithIOSLinkWorkaround, obj9);
  const obj11 = { style: items9 };
  const items9 = [tmp.buttonContainer];
  const obj12 = {};
  const button3 = bottomSheetData.button;
  let copy;
  if (null != button3) {
    copy = button3.copy;
  }
  if (null == copy) {
    const intl = arg1(dependencyMap[24]).intl;
    copy = intl.string(arg1(dependencyMap[24]).t.J61px0);
  }
  obj12.text = copy;
  obj12.onPress = callback1;
  const obj13 = { style: items10 };
  const items10 = [tmp.nitroWheelIcon];
  obj13.color = importDefault(dependencyMap[7]).unsafe_rawColors.WHITE;
  obj13.size = "custom";
  obj12.icon = callback(arg1(dependencyMap[25]).NitroWheelIcon, obj13);
  obj12.shiny = !stateFromStores;
  obj11.children = callback(arg1(dependencyMap[23]).Button, obj12);
  items5[3] = callback(View, obj11);
  obj2.children = items5;
  obj1.children = closure_9(View, obj2);
  return callback(arg1(dependencyMap[16]).BottomSheet, obj1);
};
