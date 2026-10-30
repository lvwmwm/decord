// Module ID: 11921
// Function ID: 11922
// Name: KrispLogo
// Dependencies: [19, 17, 1193, 1072, 21, 2062, 1253, 1114, 5704, 504, 5016, 11922, 11923, 5712, 5619, 2]
// Exports: default

// Module 11921 (KrispLogo)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import shared from "shared" /* 5016 */;
import LinkingDefault from "Linking" /* 5704 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function handleKrispLinkPressed() {
  let intl;
  let obj3;
  const obj = HelpdeskUtilsDefault;
  const articleURL = obj.getArticleURL(constants4.NOISE_SUPPRESSION);
  const obj2 = { text: intl.string(intl4.t.hvVgAZ), href: articleURL, location: obj3 };
  const track = AnalyticsUtilsDefault.track;
  const NOISE_CANCELLATION_LINK_CLICKED = metroRequire.NOISE_CANCELLATION_LINK_CLICKED;
  AnalyticsUtilsDefault;
  intl = intl4.intl;
  obj3 = { page: metroImportDefault.USER_SETTINGS, section: metroImportAll.SETTINGS_VOICE_AND_VIDEO };
  track(NOISE_CANCELLATION_LINK_CLICKED, obj2);
  const obj4 = LinkingDefault;
  obj4.openURL(articleURL);
}
({ View: c3, Pressable: closure_4 } = react_native);
({ AnalyticEvents: metroRequire, AnalyticsPages: metroImportDefault, AnalyticsSections: metroImportAll, HelpdeskArticles: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = { logo: { marginLeft: 20, height: 30, width: 67 }, detailsView: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: 12, gap: 12 } };
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
  let tmp6;
  const items = [ThemeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => theme.theme);
  const obj2 = shared;
  if (obj2.isThemeLight(stateFromStores)) {
    tmp4Result = tmp4(11922);
    tmp6 = tmp4;
  } else {
    tmp4Result = tmp4(11923);
    tmp6 = tmp4;
  }
  const obj3 = { style: closure_12.detailsView, children: items1 };
  const obj4 = { style: closure_12.logo, source: tmp4Result, accessibilityLabel: intl.string(intl4.t.vFiCSx) };
  const tmp6Result = tmp6(5712);
  intl = tmp(1114).intl;
  items1 = [authStore(tmp6Result, obj4), ];
  const obj5 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl4.t.hvVgAZ), onPress: handleKrispLinkPressed, children: authStore(Text, obj6) };
  intl2 = tmp(1114).intl;
  obj6 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl4.t.hvVgAZ) };
  Text = tmp(5619).Text;
  intl3 = tmp(1114).intl;
  items1[1] = authStore(React3, obj5);
  return unpackModuleId(_false, obj3);
};
export { handleKrispLinkPressed };
