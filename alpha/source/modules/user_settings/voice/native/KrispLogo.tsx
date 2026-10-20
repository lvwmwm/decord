// Module ID: 11501
// Function ID: 11502
// Name: KrispLogo
// Dependencies: [19, 17, 1207, 1087, 21, 2068, 1267, 1128, 5622, 558, 576, 504, 4952, 11502, 11503, 5631, 5195, 2]

// Module 11501 (KrispLogo)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2068 */;
import shared from "shared" /* 4952 */;
import LinkingDefault from "Linking" /* 5622 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1207 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function KrispLogo() {
  let Text;
  let intl3;
  let items1;
  let obj4;
  let theme;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp19;
  let tmp24;
  let tmp4;
  let tmp5;
  let tmp8Result;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function o() {
      return theme.theme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmpResult2 = shared;
  if (tmpResult2.isThemeLight(stateFromStores)) {
    tmp8Result = tmp8(11502);
    tmp10 = tmp8;
  } else {
    tmp8Result = tmp8(11503);
    tmp10 = tmp8;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl4.t.vFiCSx);
    cResult[2] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp8Result) {
    const obj2 = { style: closure_12.logo, source: tmp8Result, accessibilityLabel: tmp11 };
    const tmp16 = authStore(tmp10(5631), obj2);
    cResult[3] = tmp8Result;
    cResult[4] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(intl4.t.hvVgAZ);
    cResult[5] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { accessibilityRole: "link", accessibilityLabel: tmp17, onPress: handleKrispLinkPressed, children: authStore(Text, obj4) };
    obj4 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl4.t.hvVgAZ) };
    Text = tmp(5195).Text;
    intl3 = tmp(1128).intl;
    const tmp23 = authStore(React3, obj3);
    cResult[6] = tmp23;
    tmp19 = tmp23;
  } else {
    tmp19 = cResult[6];
  }
  if (cResult[7] !== tmp13) {
    const obj5 = { style: closure_12.detailsView, children: items1 };
    items1 = [tmp13, tmp19];
    const tmp28 = unpackModuleId(_false, obj5);
    cResult[7] = tmp13;
    cResult[8] = tmp28;
    tmp24 = tmp28;
  } else {
    tmp24 = cResult[8];
  }
  return tmp24;
}) : (function KrispLogo() {
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
    tmp4Result = tmp4(11502);
    tmp6 = tmp4;
  } else {
    tmp4Result = tmp4(11503);
    tmp6 = tmp4;
  }
  const obj3 = { style: closure_12.detailsView, children: items1 };
  const obj4 = { style: closure_12.logo, source: tmp4Result, accessibilityLabel: intl.string(intl4.t.vFiCSx) };
  const tmp6Result = tmp6(5631);
  intl = tmp(1128).intl;
  items1 = [authStore(tmp6Result, obj4), ];
  const obj5 = { accessibilityRole: "link", accessibilityLabel: intl2.string(intl4.t.hvVgAZ), onPress: handleKrispLinkPressed, children: authStore(Text, obj6) };
  intl2 = tmp(1128).intl;
  obj6 = { variant: "text-sm/medium", color: "text-link", children: intl3.string(intl4.t.hvVgAZ) };
  Text = tmp(5195).Text;
  intl3 = tmp(1128).intl;
  items1[1] = authStore(React3, obj5);
  return unpackModuleId(_false, obj3);
});
const result = size.fileFinishedImporting("modules/user_settings/voice/native/KrispLogo.tsx");

export default tmp6;
export { handleKrispLinkPressed };
