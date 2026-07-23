// Module ID: 10727
// Function ID: 83461
// Name: handleKrispLinkPressed
// Dependencies: [31, 27, 1278, 653, 33, 1920, 675, 1212, 3827, 566, 3976, 10728, 10729, 4126, 2]
// Exports: default

// Module 10727 (handleKrispLinkPressed)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_3;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function handleKrispLinkPressed() {
  let obj = importDefault(1920);
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
  obj.href = articleURL;
  obj = { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  obj.location = obj;
  importDefault(675).track(constants.NOISE_CANCELLATION_LINK_CLICKED, obj);
  const obj2 = importDefault(675);
  importDefault(3827).openURL(articleURL);
}
({ Image: closure_3, View: closure_4, Pressable: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9, HelpdeskArticles: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.theme);
  let obj1 = require(3976) /* AccessibilityAnnouncer */;
  if (obj1.isThemeLight(stateFromStores)) {
    let tmp2Result = tmp2(10728);
  } else {
    tmp2Result = tmp2(10729);
  }
  obj = { style: closure_13.detailsView };
  obj = { style: closure_13.logo, source: tmp2Result };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.vFiCSx);
  const items1 = [callback(closure_3, obj), ];
  obj1 = { accessibilityRole: "link" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
  obj1.onPress = handleKrispLinkPressed;
  const obj2 = { variant: "text-sm/medium", color: "text-link" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl3.string(require(1212) /* getSystemLocale */.t.hvVgAZ);
  obj1.children = callback(require(4126) /* Text */.Text, obj2);
  items1[1] = callback(closure_5, obj1);
  obj.children = items1;
  return callback2(closure_4, obj);
};
export { handleKrispLinkPressed };
