// Module ID: 12400
// Function ID: 96322
// Name: PremiumPromotionCard
// Dependencies: [31, 27, 4122, 653, 1851, 33, 4130, 689, 566, 5464, 6661, 5085, 4126, 1212, 1920, 4543, 7871, 2]
// Exports: default

// Module 12400 (PremiumPromotionCard)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticsObjectTypes: closure_6, AnalyticsPages: closure_7, AnalyticsSections: closure_8, HelpdeskArticles: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { width: "100%" } };
_createForOfIteratorHelperLoose = { display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SECONDARY_ALT, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, overflow: "hidden" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.image = { alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.none, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, width: "110%", height: 95 };
_createForOfIteratorHelperLoose.nitroWheelIcon = { bottom: -1, width: 22, height: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { alignSelf: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.none, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.none, width: "110%", height: 95 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/premium/native/PremiumPromotionCard.tsx");

export default function PremiumPromotionCard(applicationId) {
  applicationId = applicationId.applicationId;
  const onPaymentSuccess = applicationId.onPaymentSuccess;
  const onPaymentDismiss = applicationId.onPaymentDismiss;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = applicationId(onPaymentDismiss[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const analyticsLocations = onPaymentSuccess(onPaymentDismiss[9])().analyticsLocations;
  const items1 = [analyticsLocations, applicationId, onPaymentSuccess, onPaymentDismiss];
  obj = { style: items2 };
  items2 = [tmp.container, applicationId.style];
  obj = { style: items3 };
  items3 = [tmp.card];
  const callback = analyticsLocations.useCallback(() => {
    obj = { analyticsLocation: obj, analyticsLocations, premiumType: outer1_10.TIER_2, applicationId, onPaymentSuccess, onPaymentDismiss };
    obj = { page: outer1_7.BOGO_PROMOTION_MARKETING_PAGE_BANNER, section: outer1_8.SETTINGS_PREMIUM, objectType: outer1_6.BUY };
    onPaymentSuccess(onPaymentDismiss[10])(obj);
  }, items1);
  const items4 = [callback(onPaymentSuccess(onPaymentDismiss[11]), { source: { uri: "https://cdn.discordapp.com/assets/content/da4c50f6fba3cf58b484571ef1a57c355fbd31636683792858fa41d1ab027520.png" }, style: tmp.image }), , , ];
  const obj2 = { color: "mobile-text-heading-primary", variant: "heading-md/extrabold" };
  const intl = applicationId(onPaymentDismiss[13]).intl;
  obj2.children = intl.string(applicationId(onPaymentDismiss[13]).t["6Jjfk8"]);
  items4[1] = callback(applicationId(onPaymentDismiss[12]).Text, obj2);
  const obj3 = { color: "mobile-text-heading-primary", variant: "text-sm/normal" };
  const intl2 = applicationId(onPaymentDismiss[13]).intl;
  const obj4 = {};
  let obj7 = onPaymentSuccess(onPaymentDismiss[14]);
  obj4.helpCenterLink = obj7.getArticleURL(SUMMER_BOGO_2025.SUMMER_BOGO_2025);
  obj3.children = intl2.format(applicationId(onPaymentDismiss[13]).t["dE3+TP"], obj4);
  items4[2] = callback(applicationId(onPaymentDismiss[12]).Text, obj3);
  const obj5 = { style: { marginTop: onPaymentSuccess(onPaymentDismiss[7]).space.PX_24 } };
  obj7 = { text: null, size: "lg", onPress: null, icon: null, iconPosition: "start", variant: "experimental_premium-secondary" };
  const intl3 = applicationId(onPaymentDismiss[13]).intl;
  obj7.text = intl3.string(applicationId(onPaymentDismiss[13]).t.J61px0);
  obj7.onPress = callback;
  const obj8 = { style: items5 };
  items5 = [tmp.nitroWheelIcon];
  obj8.color = onPaymentSuccess(onPaymentDismiss[7]).colors.BACKGROUND_BRAND;
  obj8.size = "custom";
  obj7.icon = callback(applicationId(onPaymentDismiss[16]).NitroWheelIcon, obj8);
  obj7.shiny = !stateFromStores;
  obj5.children = callback(applicationId(onPaymentDismiss[15]).Button, obj7);
  items4[3] = callback(View, obj5);
  obj.children = items4;
  obj.children = callback2(View, obj);
  return callback(View, obj);
};
