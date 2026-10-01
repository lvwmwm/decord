// Module ID: 14316
// Function ID: 14317
// Name: TwoFASetupModal
// Dependencies: [19, 17, 14317, 21, 4836, 576, 1485, 1486, 14315, 6544, 5281, 1115, 14318, 5936, 14319, 14322, 14323, 14325, 5910, 6370, 6421, 2]
// Exports: TwoFASetupModalScreen, default

// Module 14316 (TwoFASetupModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import reactDefault from "react" /* 5910 */;
import Navigator2 from "Navigator" /* 6421 */;
import TwoFASetupModalActionCreatorsDefault from "TwoFASetupModalActionCreators" /* 14315 */;
import TwoFAConstants from "TwoFAConstants" /* 14317 */;
import TwoFASetupScanDefault from "TwoFASetupScan" /* 14322 */;
import TwoFASetupEnterCodeDefault from "TwoFASetupEnterCode" /* 14323 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const TwoFAModalSetupSections = TwoFAConstants.TwoFAModalSetupSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, floatingButton: { position: "absolute", bottom: 12, left: 12, right: 12 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default function TwoFASetupModal(initialRouteName) {
  let intl;
  const f99488 = () => {
    let obj4;
    let obj6;
    let totpSecret;
    let obj = totpSecret(closure_2[19]);
    totpSecret = obj.generateTotpSecret();
    const obj2 = {};
    let LANDING = constants.LANDING;
    const obj3 = {
      headerLeft: obj4.getHeaderCloseButton(closure_1(closure_2[8]).close),
      headerTitle() {
        const LANDING = constants.LANDING;
        const obj = { currentPage: closure_1_9[LANDING], numMarkers: Object.keys(closure_1_9).length - 1 };
        return closure_1_6(totpSecret(closure_1_2[12]).PageMarker, obj);
      },
      render() {
        return closure_1_6(closure_1_1(closure_1_2[14]), {});
      }
    };
    obj2[LANDING] = obj3;
    obj2[constants.SCAN] = {
      headerTitle() {
        const SCAN = constants.SCAN;
        const obj = { currentPage: closure_1_9[SCAN], numMarkers: Object.keys(closure_1_9).length - 1 };
        return closure_1_6(totpSecret(closure_1_2[12]).PageMarker, obj);
      },
      render() {
        const obj = { totpSecret };
        return closure_2_6(TwoFASetupScanDefault, obj);
      }
    };
    obj2[constants.ENTER_CODE] = {
      headerTitle() {
        const ENTER_CODE = constants.ENTER_CODE;
        const obj = { currentPage: closure_1_9[ENTER_CODE], numMarkers: Object.keys(closure_1_9).length - 1 };
        return closure_1_6(totpSecret(closure_1_2[12]).PageMarker, obj);
      },
      render() {
        const obj = { totpSecret };
        return closure_2_6(TwoFASetupEnterCodeDefault, obj);
      }
    };
    obj4 = totpSecret(closure_2[13]);
    const SUCCESS = constants.SUCCESS;
    const obj5 = {
      headerLeft: obj6.getHeaderCloseButton(closure_1(closure_2[8]).close),
      headerTitle() {
        return null;
      },
      render() {
        return closure_1_6(closure_1_1(closure_1_2[17]), {});
      }
    };
    obj2[SUCCESS] = obj5;
    obj6 = totpSecret(closure_2[13]);
    return obj2;
  };
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = { initialRouteName: LANDING, screens: reactDefault(f99488), headerBackTitle: intl.string(intl3.t["13/7kX"]), headerTitleAlign: "center" };
  reactDefault(f99488);
  const Navigator = Navigator2.Navigator;
  intl = intl3.intl;
  return metroRequire(Navigator, obj);
};
export const TwoFASetupModalScreen = function TwoFASetupModalScreen(children) {
  let Button;
  let items1;
  let obj5;
  let stringResult;
  navigation = undefined;
  children = children.children;
  const tmp = closure_8();
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  const obj2 = navigation(1486);
  const name = obj2.useRoute().name;
  let tmp10Result = name !== TwoFAModalSetupSections.ENTER_CODE;
  const items = [navigation, name];
  const obj3 = { style: tmp.container, children: items1 };
  items1 = [children, ];
  const tmp5 = TwoFAModalSetupSections;
  const tmp8 = closure_7;
  const tmp9 = View;
  if (tmp10Result) {
    const obj4 = { bottom: true, style: tmp.floatingButton, children: closure_6(Button, obj5) };
    const SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
    obj5 = { onPress: tmp7, text: stringResult };
    Button = tmp2(5281).Button;
    if (name === tmp5.SUCCESS) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.i4jeWR);
    } else {
      const intl = tmp2(1115).intl;
      stringResult = intl.string(tmp2(1115).t.XiOHRX);
    }
    tmp10Result = tmp10(SafeAreaPaddingView, obj4);
  }
  items1[1] = tmp10Result;
  return tmp8(tmp9, obj3);
};
