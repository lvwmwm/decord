// Module ID: 16697
// Function ID: 16698
// Name: SuspendedUserPage
// Dependencies: [19, 17, 7873, 7860, 21, 4829, 576, 504, 6539, 7358, 1115, 6005, 6408, 4825, 4522, 14276, 2]
// Exports: default

// Module 16697 (SuspendedUserPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4522 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6005 */;
import _modDef6408 from "module_6408" /* 6408 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6539 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 14276 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7873 */;

require = fn;
const View = fn(17).View;
const SafetyHubConstants = fn(7860);
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" }, header: null, text: null, link: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
obj2.header = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj2.text = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
obj2.link = { textDecorationLine: "underline" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  const tmp = closure_9();
  const items = [SafetyHubStore];
  let tmp6Result = initialize.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== constants.VERIFIED;
  const obj2 = { style: tmp.container, children: null };
  if (tmp6Result) {
    const obj3 = { style: tmp.header, children: null };
    const obj4 = { variant: "destructive", accessibilityLabel: null, onPress: null, icon: null };
    const intl = tmp2(1115).intl;
    obj4.accessibilityLabel = intl.string(tmp2(1115).t.cpT0Cq);
    obj4.onPress = function onPress() {
      AuthenticationActionCreatorsDefault.closeSuspendedUser();
    };
    obj4.icon = _modDef6408;
    const items1 = [tmp5(tmp2(7358).IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress() {
          LinkingDefault.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "text-xs/medium",
      color: "control-critical-primary-text-default",
      children: null
    };
    const intl2 = tmp2(1115).intl;
    const items2 = [intl2.string(tmp2(1115).t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: null };
    const intl3 = tmp2(1115).intl;
    obj6.children = intl3.string(tmp2(1115).t["9JceHN"]);
    items2[2] = tmp5(tmp2(4825).Text, obj6);
    obj5.children = items2;
    items1[1] = tmp6(tmp2(4825).Text, obj5);
    obj3.children = items1;
    tmp6Result = tmp6(tmp7, obj3);
  }
  const rect = { top: true, right: true, left: true, children: null };
  const items3 = [tmp6Result, React5(SafetyHubPageDefault, { visible: true })];
  obj2.children = items3;
  rect.children = React6(View, obj2);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
};
