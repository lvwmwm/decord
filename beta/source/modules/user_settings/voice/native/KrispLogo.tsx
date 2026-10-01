// Module ID: 9453
// Function ID: 9454
// Name: KrispLogo
// Dependencies: [19, 17, 1182, 1074, 21, 2111, 1241, 1115, 4525, 504, 4685, 9454, 9455, 4832, 2]
// Exports: default

// Module 9453 (KrispLogo)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import LinkingDefault from "Linking" /* 4525 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function handleKrispLinkPressed() {
  let intl;
  let obj3;
  const obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  const obj2 = { text: intl.string(intl4.t.hvVgAZ), href: articleURL, location: obj3 };
  const track = AnalyticsUtilsDefault.track;
  const NOISE_CANCELLATION_LINK_CLICKED = metroImportDefault.NOISE_CANCELLATION_LINK_CLICKED;
  AnalyticsUtilsDefault;
  intl = intl4.intl;
  obj3 = { page: metroImportAll.USER_SETTINGS, section: constants3.SETTINGS_VOICE_AND_VIDEO };
  track(NOISE_CANCELLATION_LINK_CLICKED, obj2);
  const obj4 = LinkingDefault;
  obj4.openURL(articleURL);
}
({ Image: c3, View: closure_4, Pressable: hasOwnProperty } = react_native);
({ AnalyticEvents: metroImportDefault, AnalyticsPages: metroImportAll, AnalyticsSections: c9, HelpdeskArticles: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default function KrispLogo() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj6;
  let theme;
  let tmp4Result;
  const items = [ThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj2 = shared;
  if (obj2.isThemeLight(stateFromStores)) {
    tmp4Result = tmp4(9454);
  } else {
    tmp4Result = tmp4(9455);
  }
  const obj3 = { style: closure_13.detailsView, children: items1 };
  const obj4 = { style: closure_13.logo, source: tmp4Result, accessibilityLabel: intl.string(intl4.t.vFiCSx) };
  intl = tmp(1115).intl;
  items1 = [unpackModuleId(_false, obj4), ];
  const obj5 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl4.t.hvVgAZ), onPress: handleKrispLinkPressed, children: unpackModuleId(Text, obj6) };
  intl2 = tmp(1115).intl;
  obj6 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl4.t.hvVgAZ) };
  Text = tmp(4832).Text;
  intl3 = tmp(1115).intl;
  items1[1] = unpackModuleId(hasOwnProperty, obj5);
  return closure_12(React3, obj3);
};
export { handleKrispLinkPressed };
