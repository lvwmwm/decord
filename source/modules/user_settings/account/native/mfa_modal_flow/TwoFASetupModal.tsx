// Module ID: 13736
// Function ID: 105377
// Name: getPageMarker
// Dependencies: [31, 27, 13737, 33, 4130, 689, 1456, 13735, 5121, 4543, 1212, 13738, 5087, 13739, 13742, 13743, 13745, 5450, 9239, 5517, 2]
// Exports: TwoFASetupModalScreen, default

// Module 13736 (getPageMarker)
import result from "result";
import { View } from "get ActivityIndicator";
import { TwoFAModalSetupSections } from "frozen";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function getPageMarker(arg0) {
  return callback(require(13738) /* PageMarker */.PageMarker, { currentPage: table[arg0], numMarkers: Object.keys(table).length - 1 });
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.floatingButton = { position: "absolute", bottom: 12, left: 12, right: 12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
const result = require("frozen").fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default function TwoFASetupModal(initialRouteName) {
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  let obj = {
    initialRouteName: LANDING,
    screens: importDefault(5450)(() => (function getScreens(arg0) {
      let closure_0 = arg0;
      let obj = {};
      obj = {
        headerLeft: outer2_0(outer2_2[12]).getHeaderCloseButton(outer2_1(outer2_2[7]).close),
        headerTitle() {
          return outer3_10(outer3_5.LANDING);
        },
        render() {
          return outer3_6(outer3_1(outer3_2[13]), {});
        }
      };
      obj[outer2_5.LANDING] = obj;
      obj[outer2_5.SCAN] = {
        headerTitle() {
          return outer3_10(outer3_5.SCAN);
        },
        render() {
          return outer3_6(outer3_1(outer3_2[14]), { totpSecret: closure_0 });
        }
      };
      obj[outer2_5.ENTER_CODE] = {
        headerTitle() {
          return outer3_10(outer3_5.ENTER_CODE);
        },
        render() {
          return outer3_6(outer3_1(outer3_2[15]), { totpSecret: closure_0 });
        }
      };
      obj = {};
      const obj3 = outer2_0(outer2_2[12]);
      obj.headerLeft = outer2_0(outer2_2[12]).getHeaderCloseButton(outer2_1(outer2_2[7]).close);
      obj.headerTitle = function headerTitle() {
        return null;
      };
      obj.render = function render() {
        return outer3_6(outer3_1(outer3_2[16]), {});
      };
      obj[outer2_5.SUCCESS] = obj;
      return obj;
    })(outer1_0(outer1_2[18]).generateTotpSecret()))
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj.headerTitleAlign = "center";
  return callback(require(5517) /* NavigationStack */.Navigator, obj);
};
export const TwoFASetupModalScreen = function TwoFASetupModalScreen(children) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const name = navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name;
  const items = [navigation, name];
  obj = { style: tmp.container };
  const items1 = [children.children, ];
  if (name === TwoFAModalSetupSections.ENTER_CODE) {
    items1[1] = tmp2;
    obj.children = items1;
    return tmp4(tmp5, obj);
  } else {
    obj = { bottom: true, style: tmp.floatingButton };
    let obj1 = { onPress: tmp3 };
    if (name === TwoFAModalSetupSections.SUCCESS) {
      const intl2 = navigation(1212).intl;
      let stringResult = intl2.string(navigation(1212).t.i4jeWR);
    } else {
      const intl = navigation(1212).intl;
      stringResult = intl.string(navigation(1212).t.XiOHRX);
    }
    obj1.text = stringResult;
    obj1 = closure_6(navigation(4543).Button, obj1);
    obj.children = obj1;
    closure_6(navigation(5121).SafeAreaPaddingView, obj);
    const tmp6 = closure_6;
    const tmp9 = closure_6;
  }
};
