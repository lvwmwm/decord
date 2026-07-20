// Module ID: 13555
// Function ID: 102819
// Name: getPageMarker
// Dependencies: []
// Exports: TwoFASetupModalScreen, default

// Module 13555 (getPageMarker)
function getPageMarker(arg0) {
  return callback(arg1(dependencyMap[11]).PageMarker, { currentPage: closure_9[arg0], numMarkers: Object.keys(closure_9).length - 1 });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const TwoFAModalSetupSections = arg1(dependencyMap[2]).TwoFAModalSetupSections;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.floatingButton = {};
let closure_8 = obj.createStyles(obj);
let closure_9 = { [TwoFAModalSetupSections.LANDING]: 1, [TwoFAModalSetupSections.SCAN]: 2, [TwoFAModalSetupSections.ENTER_CODE]: 3 };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupModal.tsx");

export default function TwoFASetupModal(initialRouteName) {
  let LANDING = initialRouteName.initialRouteName;
  if (LANDING === undefined) {
    LANDING = TwoFAModalSetupSections.LANDING;
  }
  const obj = {
    initialRouteName: LANDING,
    screens: importDefault(dependencyMap[17])(() => function getScreens(arg0) {
      let obj = {};
      obj = {
        headerLeft: arg0(closure_2[12]).getHeaderCloseButton(callback(closure_2[7]).close),
        headerTitle() {
          return callback3(constants.LANDING);
        },
        render() {
          return callback2(callback(closure_2[13]), {});
        }
      };
      obj[constants.LANDING] = obj;
      obj[constants.SCAN] = {
        headerTitle() {
          return callback3(constants.SCAN);
        },
        render() {
          return callback2(callback(closure_2[14]), { totpSecret: arg0 });
        }
      };
      obj[constants.ENTER_CODE] = {
        headerTitle() {
          return callback3(constants.ENTER_CODE);
        },
        render() {
          return callback2(callback(closure_2[15]), { totpSecret: arg0 });
        }
      };
      obj = {};
      const obj3 = arg0(closure_2[12]);
      obj.headerLeft = arg0(closure_2[12]).getHeaderCloseButton(callback(closure_2[7]).close);
      obj.headerTitle = function headerTitle() {
        return null;
      };
      obj.render = function render() {
        return callback2(callback(closure_2[16]), {});
      };
      obj[constants.SUCCESS] = obj;
      return obj;
    }(callback(closure_2[18]).generateTotpSecret()))
  };
  const intl = arg1(dependencyMap[10]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[10]).t.13/7kX);
  obj.headerTitleAlign = "center";
  return callback(arg1(dependencyMap[19]).Navigator, obj);
};
export const TwoFASetupModalScreen = function TwoFASetupModalScreen(children) {
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const name = navigation.getState().routes[navigation.getState(navigation).routes.length - 1].name;
  const importDefault = name;
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
      const intl2 = arg1(dependencyMap[10]).intl;
      let stringResult = intl2.string(arg1(dependencyMap[10]).t.i4jeWR);
    } else {
      const intl = arg1(dependencyMap[10]).intl;
      stringResult = intl.string(arg1(dependencyMap[10]).t.XiOHRX);
    }
    obj1.text = stringResult;
    obj1 = closure_6(arg1(dependencyMap[9]).Button, obj1);
    obj.children = obj1;
    closure_6(arg1(dependencyMap[8]).SafeAreaPaddingView, obj);
    const tmp6 = closure_6;
    const tmp9 = closure_6;
  }
};
