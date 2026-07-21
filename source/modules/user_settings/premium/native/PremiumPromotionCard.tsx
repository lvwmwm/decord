// Module ID: 12281
// Function ID: 94131
// Name: PremiumPromotionCard
// Dependencies: []
// Exports: default

// Module 12281 (PremiumPromotionCard)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticsObjectTypes: closure_6, AnalyticsPages: closure_7, AnalyticsSections: closure_8, HelpdeskArticles: closure_9 } = arg1(dependencyMap[3]));
const PremiumTypes = arg1(dependencyMap[4]).PremiumTypes;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: { width: "100%" } };
obj = { paddingBottom: importDefault(dependencyMap[7]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16, borderRadius: importDefault(dependencyMap[7]).radii.lg, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SECONDARY_ALT, marginBottom: importDefault(dependencyMap[7]).space.PX_24, overflow: "hidden" };
obj.card = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.image = { alignSelf: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_24, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.lg, borderTopRightRadius: importDefault(dependencyMap[7]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.none, borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.none, width: "110%", height: 95 };
obj.nitroWheelIcon = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
let closure_13 = obj.createStyles(obj);
const obj1 = { alignSelf: "center", marginBottom: importDefault(dependencyMap[7]).space.PX_24, borderTopLeftRadius: importDefault(dependencyMap[7]).radii.lg, borderTopRightRadius: importDefault(dependencyMap[7]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[7]).radii.none, borderBottomLeftRadius: importDefault(dependencyMap[7]).radii.none, width: "110%", height: 95 };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/premium/native/PremiumPromotionCard.tsx");

export default function PremiumPromotionCard(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  const onPaymentSuccess = applicationId.onPaymentSuccess;
  const importDefault = onPaymentSuccess;
  const onPaymentDismiss = applicationId.onPaymentDismiss;
  const dependencyMap = onPaymentDismiss;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const analyticsLocations = importDefault(dependencyMap[9])().analyticsLocations;
  const React = analyticsLocations;
  const items1 = [analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss];
  obj = { style: items2 };
  const items2 = [tmp.container, applicationId.style];
  obj = { style: items3 };
  const items3 = [tmp.card];
  const callback = React.useCallback(() => {
    let obj = { analyticsLocation: obj, analyticsLocations, premiumType: TIER_2.TIER_2, applicationId, onPaymentSuccess, onPaymentDismiss };
    obj = { page: constants2.BOGO_PROMOTION_MARKETING_PAGE_BANNER, section: constants3.SETTINGS_PREMIUM, objectType: constants.BUY };
    onPaymentSuccess(onPaymentDismiss[10])(obj);
  }, items1);
  const items4 = [callback(importDefault(dependencyMap[11]), { source: { uri: "https://cdn.discordapp.com/assets/content/da4c50f6fba3cf58b484571ef1a57c355fbd31636683792858fa41d1ab027520.png" }, style: tmp.image }), , , ];
  const obj2 = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj2.children = intl.string(arg1(dependencyMap[13]).t.6Jjfk8);
  items4[1] = callback(arg1(dependencyMap[12]).Text, obj2);
  const obj3 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  const obj4 = {};
  let obj7 = importDefault(dependencyMap[14]);
  obj4.helpCenterLink = obj7.getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025);
  obj3.children = intl2.format(arg1(dependencyMap[13]).t.dE3+TP, obj4);
  items4[2] = callback(arg1(dependencyMap[12]).Text, obj3);
  const obj5 = { style: { marginTop: importDefault(dependencyMap[7]).space.PX_24 } };
  obj7 = {};
  const intl3 = arg1(dependencyMap[13]).intl;
  obj7.text = intl3.string(arg1(dependencyMap[13]).t.J61px0);
  obj7.onPress = callback;
  const obj8 = { style: items5 };
  const items5 = [tmp.nitroWheelIcon];
  obj8.color = importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND;
  obj8.size = "custom";
  obj7.icon = callback(arg1(dependencyMap[16]).NitroWheelIcon, obj8);
  obj7.shiny = !stateFromStores;
  obj5.children = callback(arg1(dependencyMap[15]).Button, obj7);
  items4[3] = callback(View, obj5);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(View, obj);
};
