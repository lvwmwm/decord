// Module ID: 16761
// Function ID: 16762
// Name: FamilyCenterRequestsPage
// Dependencies: [19, 17, 7709, 11230, 21, 5009, 575, 8361, 8362, 13312, 1114, 2537, 5619, 11272, 7286, 16722, 16762, 16767, 16775, 2]
// Exports: default

// Module 16761 (FamilyCenterRequestsPage)
import nativeDefault from "native" /* 575 */;
import _modDef2537 from "module_2537" /* 2537 */;
import Text_Text from "Text/Text" /* 5619 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import useUserLinks from "useUserLinks" /* 8361 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8362 */;
import Constants from "Constants" /* 11230 */;
import useHelpLineVisibility from "useHelpLineVisibility" /* 11272 */;
import useAgeSpecificText from "useAgeSpecificText" /* 13312 */;
import FamilyCenterParentalConsentNoticeDefault from "FamilyCenterParentalConsentNotice" /* 16722 */;
import FamilyCenterLinkingBannerDefault from "FamilyCenterLinkingBanner" /* 16762 */;
import FamilyCenterAcceptedLinksDefault from "FamilyCenterAcceptedLinks" /* 16767 */;
import FamilyCenterPendingLinksDefault from "FamilyCenterPendingLinks" /* 16775 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
  const intl = tmp2(1114).intl;
  intl.formatToPlainString(_modDef2537["1/PzIj"], { maxConnections: tmp6 });
  const intl2 = tmp2(1114).intl;
  let tmp10 = null;
  if (hasMaxConnections) {
    const obj2 = { style: tmp.container, children: metroImportAll(Text_Text.Text, obj3) };
    obj3 = { variant: "text-xxs/medium", color: "text-muted", children: tmp9 };
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
    const intl2 = tmp2(1114).intl;
    formatResult = intl2.format(_modDef2537["KOwsf/"], { helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line" });
  } else {
    formatResult = null;
    if (tmp6) {
      const intl = tmp2(1114).intl;
      const obj2 = { helpLink: THROUGHLINE_URL };
      formatResult = intl.format(_modDef2537["6tsC8u"], obj2);
    }
  }
  let tmp11 = null;
  if (null != formatResult) {
    const obj3 = { style: tmp.container, children: items };
    const obj4 = { style: tmp.supportHeader, variant: "heading-sm/semibold", children: intl3.string(_modDef2537["7/tVhv"]) };
    const Text = tmp2(5619).Text;
    intl3 = tmp2(1114).intl;
    items = [metroImportAll(Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatResult };
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
