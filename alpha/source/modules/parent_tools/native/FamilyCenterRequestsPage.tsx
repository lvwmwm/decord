// Module ID: 17320
// Function ID: 17321
// Name: FamilyCenterRequestsPage
// Dependencies: [19, 17, 8674, 11957, 21, 5243, 575, 9549, 9550, 14120, 1113, 2685, 5866, 12210, 7351, 17280, 17321, 17326, 17334, 2]
// Exports: default

// Module 17320 (FamilyCenterRequestsPage)
import nativeDefault from "native" /* 575 */;
import _modDef2685 from "module_2685" /* 2685 */;
import Text_Text from "Text/Text" /* 5866 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7351 */;
import useUserLinks from "useUserLinks" /* 9549 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 9550 */;
import Constants from "Constants" /* 11957 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 12210 */;
import useAgeSpecificText from "useAgeSpecificText" /* 14120 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 17280 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 17321 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 17326 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 17334 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 8674 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj4;
let obj5;
function FamilyCenterMaxConnectionsBlurb() {
  let obj3;
  const tmp = closure_10();
  const obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  const tmp6 = useIsInAdultAgeGroupDefault() ? hasOwnProperty : metroRequire;
  useAgeSpecificText;
  const intl = tmp2(1113).intl;
  intl.formatToPlainString(_modDef2685["1/PzIj"], { maxConnections: tmp6 });
  const intl2 = tmp2(1113).intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: metroImportAll(Text_Text.Text, obj3) };
    obj3 = { variant: "footnote/medium", color: "text-muted", children: tmp9 };
    tmp10 = metroImportAll(_false, obj2);
  }
  return tmp10;
}
function FamilyCenterHelpLineInfo() {
  let formatResult;
  let intl3;
  let items;
  const tmp = closure_12();
  const obj = useHelpLineVisibility;
  const shouldShowHelplineLink = obj.useShouldShowHelplineLink();
  useHelpLineVisibility;
  if (shouldShowHelplineLink) {
    const intl2 = tmp2(1113).intl;
    formatResult = intl2.format(_modDef2685["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = tmp2(1113).intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2685["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.supportHeader, variant: "heading-xs/semibold", children: intl3.string(_modDef2685["7/tVhv"]) };
    const Text = tmp2(5866).Text;
    intl3 = tmp2(1113).intl;
    items = [metroImportAll(Text, obj4), ];
    const obj5 = { variant: "body-xs/medium", color: "text-muted", children: formatResult };
    items[1] = metroImportAll(Text_Text.Text, obj5);
    tmp11 = React4(_false, obj3);
  }
  return tmp11;
}
({ View: c3, ScrollView: closure_4 } = react_native);
({ MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: hasOwnProperty, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: metroRequire } = FamilyCenterConstants);
const THROUGHLINE_URL = Constants.THROUGHLINE_URL;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { display: "flex", paddingTop: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_12, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
let closure_10 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { container: obj4, supportHeader: obj5 };
obj4 = { display: "flex", marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj5 = { marginBottom: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj3);
createStyles = createStyles_mod;
const obj6 = { scrollView: { flex: 1 }, container: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
({ paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 });
let closure_14 = createStyles.createStyles(obj6);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterRequestsPage.tsx");

export default function FamilyCenterRequestsPage() {
  let SafeAreaPaddingView;
  let items;
  let obj2;
  let obj3;
  const tmp = closure_14();
  const obj = { style: tmp.scrollView, children: metroImportAll(SafeAreaPaddingView, obj2) };
  obj2 = { bottom: true, children: React4(_false, obj3) };
  obj3 = { style: tmp.container, children: items };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [metroImportAll(FamilyCenterParentalConsentNoticeDefault, {}), metroImportAll(FamilyCenterLinkingBannerDefault, {}), metroImportAll(FamilyCenterAcceptedLinksDefault, {}), metroImportAll(FamilyCenterPendingLinksDefault, {}), metroImportAll(FamilyCenterMaxConnectionsBlurb, {}), metroImportAll(FamilyCenterHelpLineInfo, {})];
  return metroImportAll(React3, obj);
};
