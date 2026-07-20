// Module ID: 15478
// Function ID: 118143
// Name: BogoPromotionActionSheet
// Dependencies: []
// Exports: default

// Module 15478 (BogoPromotionActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const PremiumTypes = arg1(dependencyMap[3]).PremiumTypes;
({ AnalyticsSections: closure_7, AnalyticsObjects: closure_8, AnalyticsPages: closure_9, AnalyticsObjectTypes: closure_10, HelpdeskArticles: closure_11 } = arg1(dependencyMap[4]));
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { 9223372036854775807: 1, 9223372036854775807: "row", 9223372036854775807: "stretch", 0: "100%", padding: importDefault(dependencyMap[8]).space.PX_16, borderRadius: importDefault(dependencyMap[8]).radii.lg, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
obj.container = obj;
const obj1 = { 0: null, 0: null, 0: null, marginTop: importDefault(dependencyMap[8]).space.PX_24 };
obj.buttonContainer = obj1;
obj.header = {};
obj.subheader = { textAlign: "center" };
const tmp3 = arg1(dependencyMap[6]);
obj.image = { paddingBottom: importDefault(dependencyMap[8]).space.PX_16, borderRadius: importDefault(dependencyMap[8]).radii.lg };
obj.nitroWheelIcon = {};
let closure_15 = obj.createStyles(obj);
const obj2 = { paddingBottom: importDefault(dependencyMap[8]).space.PX_16, borderRadius: importDefault(dependencyMap[8]).radii.lg };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/premium/promotions/native/BogoPromotionActionSheet.tsx");

export default function BogoPromotionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const tmp = callback3();
  const analyticsLocations = importDefault(dependencyMap[9])().analyticsLocations;
  const importDefault = analyticsLocations;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_5];
  const items1 = [analyticsLocations, markAsDismissed];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(constants5.PRIMARY);
    let obj = { analyticsLocation: obj, analyticsLocations, premiumType: TIER_2.TIER_2 };
    obj = { page: constants3.BOGO_PROMOTION_ACTION_SHEET, section: constants.FOOTER, object: constants2.BUTTON_CTA, objectType: constants4.BUY };
    analyticsLocations(closure_2[11])(obj);
  }, items1);
  const callback1 = React.useCallback(() => {
    markAsDismissed(constants5.USER_DISMISS);
  }, items2);
  obj = { onDismiss: callback1 };
  obj = { style: items3 };
  const items3 = [tmp.container];
  const items4 = [callback(importDefault(dependencyMap[13]), { source: { uri: "https://cdn.discordapp.com/assets/content/a59aed2e0e61a955dc3e0f4f6f7ab295e39f89a93c4f01e4bd84ed7fb418ec63.png" }, style: tmp.image }), , , ];
  const obj2 = { reportedPageIndex: null, pageIndex: null, scrollTargetPageIndex: null };
  const items5 = [tmp.header];
  obj2.style = items5;
  const intl = arg1(dependencyMap[15]).intl;
  obj2.children = intl.string(arg1(dependencyMap[15]).t.6Jjfk8);
  items4[1] = callback(arg1(dependencyMap[14]).Text, obj2);
  const obj3 = { reportedPageIndex: null, pageIndex: null, scrollTargetPageIndex: null };
  const items6 = [tmp.subheader];
  obj3.style = items6;
  const intl2 = arg1(dependencyMap[15]).intl;
  const obj4 = {};
  let obj7 = importDefault(dependencyMap[17]);
  obj4.helpCenterLink = obj7.getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025);
  obj3.children = intl2.format(arg1(dependencyMap[15]).t.y7lJK6, obj4);
  items4[2] = callback(arg1(dependencyMap[16]).TextWithIOSLinkWorkaround, obj3);
  const obj5 = { style: items7 };
  const items7 = [tmp.buttonContainer];
  const obj6 = {};
  const intl3 = arg1(dependencyMap[15]).intl;
  obj6.text = intl3.string(arg1(dependencyMap[15]).t.J61px0);
  obj6.onPress = callback;
  obj7 = { style: items8 };
  const items8 = [tmp.nitroWheelIcon];
  obj7.color = importDefault(dependencyMap[8]).unsafe_rawColors.WHITE;
  obj7.size = "custom";
  obj6.icon = callback(arg1(dependencyMap[19]).NitroWheelIcon, obj7);
  obj6.shiny = !stateFromStores;
  obj5.children = callback(arg1(dependencyMap[18]).Button, obj6);
  items4[3] = callback(View, obj5);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[12]).BottomSheet, obj);
};
