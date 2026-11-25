// Module ID: 19188
// Function ID: 19189
// Name: SuspendedUserPage
// Dependencies: [19, 17, 7878, 7852, 21, 5012, 575, 504, 6099, 572, 7449, 7910, 1112, 6808, 7718, 5603, 5691, 16192, 2]
// Exports: default

// Module 19188 (SuspendedUserPage)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import LinkingDefault from "Linking" /* 5691 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6808 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7449 */;
import AssetRegistryDefault from "AssetRegistry" /* 7718 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 16192 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7878 */;
import SafetyHubConstants from "SafetyHubConstants" /* 7852 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ AgeCheckStatus: metroRequire, SafetyHubLinks: metroImportDefault } = SafetyHubConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, text: obj4, link: { textDecorationLine: "underline" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, flexDirection: "row", paddingVertical: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { marginRight: nativeDefault.space.PX_8, textAlign: "left", flexShrink: 1 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_hub/native/SuspendedUserPage.tsx");

export default function SuspendedUserSafetyHubPage() {
  let ageCheckStatus;
  let intl;
  let intl3;
  let items1;
  let items2;
  let items3;
  const tmp = closure_10();
  let obj = get_initialized;
  const items = [SafetyHubStore];
  let tmp7Result = obj.useStateFromStores(items, () => ageCheckStatus.getAgeCheckStatus()) !== metroRequire.VERIFIED;
  const effect = react.useEffect(() => {
    function handleSuspendedUserTokenExpired() {
      const obj = closure_1_1(closure_1_2[8]);
      obj.popAll();
    }
    let obj = closure_1(closure_2[9]);
    const subscription = obj.subscribe("SUSPENDED_USER_TOKEN_EXPIRED", handleSuspendedUserTokenExpired);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("SUSPENDED_USER_TOKEN_EXPIRED", handleSuspendedUserTokenExpired);
    };
  }, []);
  const obj2 = { style: tmp.container, children: items3 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  if (tmp7Result) {
    const obj3 = { style: tmp.header, children: items1 };
    const obj4 = {
      variant: "destructive",
      accessibilityLabel: intl.string(intl4.t.cpT0Cq),
      onPress: function onClose() {
          const obj = AuthenticationActionCreatorsDefault;
          obj.closeSuspendedUser();
        },
      icon: AssetRegistryDefault
    };
    const IconButton = tmp2(7910).IconButton;
    intl = tmp2(1112).intl;
    items1 = [metroImportAll(IconButton, obj4), ];
    const obj5 = {
      style: tmp.text,
      onPress: function openLearnMore() {
          const obj = LinkingDefault;
          obj.openURL(constants.WARNING_SYSTEM_HELPCENTER_LINK);
        },
      variant: "body-xs/medium",
      color: "control-critical-primary-text-default",
      children: items2
    };
    const Text = tmp2(5603).Text;
    const intl2 = tmp2(1112).intl;
    items2 = [intl2.string(intl4.t["MG+Bzb"]), " ", ];
    const obj6 = { style: tmp.link, variant: "body-xs/medium", color: "control-critical-primary-text-default", children: intl3.string(intl4.t["9JceHN"]) };
    const Text2 = tmp2(5603).Text;
    intl3 = tmp2(1112).intl;
    items2[2] = metroImportAll(Text2, obj6);
    items1[1] = React4(Text, obj5);
    tmp7Result = tmp7(tmp8, obj3);
  }
  const rect = { top: true, right: true, left: true, children: React4(View, obj2) };
  items3 = [tmp7Result, metroImportAll(SafetyHubPageDefault, { visible: true })];
  return metroImportAll(SafeAreaPaddingView, rect);
};
