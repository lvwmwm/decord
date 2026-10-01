// Module ID: 16730
// Function ID: 16731
// Name: SuspendedUserPage
// Dependencies: [19, 17, 7881, 7868, 21, 4836, 576, 504, 6544, 7363, 1115, 6010, 6413, 4832, 4525, 14300, 2]
// Exports: default

// Module 16730 (SuspendedUserPage)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import LinkingDefault from "Linking" /* 4525 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 14300 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7881 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AgeCheckStatus: hasOwnProperty, SafetyHubLinks: metroRequire } = SafetyHubConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, text: obj4, link: { textDecorationLine: "underline" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  let ageCheckStatus;
  let intl;
  let intl3;
  let items1;
  let items2;
  let items3;
  const tmp = closure_9();
  let obj = get_initialized;
  const items = [SafetyHubStore];
  let tmp6Result = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== hasOwnProperty.VERIFIED;
  const obj2 = { style: tmp.container, children: items3 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  if (tmp6Result) {
    const obj3 = { style: tmp.header, children: items1 };
    const obj4 = {
      variant: "destructive",
      accessibilityLabel: intl.string(intl4.t.cpT0Cq),
      onPress() {
          const obj = AuthenticationActionCreatorsDefault;
          obj.closeSuspendedUser();
        },
      icon: AssetRegistryDefault
    };
    const IconButton = tmp2(7363).IconButton;
    intl = tmp2(1115).intl;
    items1 = [metroImportDefault(IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress() {
          const obj = LinkingDefault;
          obj.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "text-xs/medium",
      color: "control-critical-primary-text-default",
      children: items2
    };
    const Text = tmp2(4832).Text;
    const intl2 = tmp2(1115).intl;
    items2 = [intl2.string(intl4.t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "text-xs/medium", color: "control-critical-primary-text-default", children: intl3.string(intl4.t["9JceHN"]) };
    const Text2 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    items2[2] = metroImportDefault(Text2, obj6);
    items1[1] = metroImportAll(Text, obj5);
    tmp6Result = tmp6(tmp7, obj3);
  }
  const rect = { top: true, right: true, left: true, children: metroImportAll(View, obj2) };
  items3 = [tmp6Result, metroImportDefault(SafetyHubPageDefault, { visible: true })];
  return metroImportDefault(SafeAreaPaddingView, rect);
};
