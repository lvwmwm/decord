// Module ID: 17218
// Function ID: 17219
// Name: NewUserModal
// Dependencies: [32, 19, 17, 21, 7339, 4836, 576, 17219, 1981, 5205, 6421, 17216, 5039, 17217, 5942, 1364, 15624, 17220, 12193, 12182, 17221, 17223, 2]
// Exports: default

// Module 17218 (NewUserModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NewUserUtils from "NewUserUtils" /* 17216 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, flag, onboardingStepIndex;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
const NativeModules = react_native.NativeModules;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let Navigator = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  let closure_2;
  let closure_4;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items1;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  let first1;
  react = undefined;
  _require = closure_9();
  let tmp = first1(react.useState(initialOnboardingStepIndex), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(react.useState(initialOnboardingStepIndex), 2);
  first1 = tmp3[0];
  react = tmp3[1];
  let MinimizeApp = react.useRef(null);
  let obj = require("Navigator");
  let closure_6 = obj.useAccessibilityNativeStackOptions();
  const items = [first1, first];
  const onComplete = react.useCallback((flag) => {
    let ref;
    const getNextOnboardingStep = NewUserUtils.getNextOnboardingStep;
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = getNextOnboardingStep(flag, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      let continueNavigation;
      let lastShownStepIndex;
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      closure_1_2(onboardingStepIndex);
      closure_1_4(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          const obj2 = closure_0(closure_2[11]);
          obj2.continueToNextStep(onboardingStepIndex, tmp3.current);
        }
      }
      const obj = first(closure_2[12]);
      obj.popWithKey(closure_0(closure_2[13]).NEW_USER_MODAL_KEY);
    });
  }, items);
  let obj2 = require("useNavigatorBackPressHandler");
  obj2.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  Navigator = Navigator.Navigator;
  const obj3 = {
    screenOptions(navigation) {
      let str;
      MinimizeApp.current = navigation.navigation;
      const obj = {
        headerStyle: closure_0.header,
        headerShadowVisible: false,
        title: "",
        headerLeft() {
          return null;
        },
        headerRight() {
          return null;
        },
        fullScreenGestureEnabled: false,
        presentation: str,
        animation: "slide_from_right",
        headerBackVisible: false
      };
      str = "card";
      const obj2 = PlatformUtils;
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      const merged = Object.assign(closure_6);
      return obj;
    },
    initialRouteName,
    children: items1
  };
  const tmp7 = onComplete;
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  items1 = [, , , , ];
  const obj4 = {
    name: "enable-notification",
    getComponent() {
      return closure_0(closure_2[16]).RedesignNotificationScreen;
    },
    initialParams: { onComplete }
  };
  items1[0] = closure_6(Navigator.Screen, obj4);
  const obj5 = {
    name: "choose-avatar",
    getComponent() {
      return closure_0(closure_2[17]).default;
    },
    options() {
      let obj = {
        headerRight(arg0) {
          let obj = {
            onPress() {
              let paths;
              closure_0 = closure_1_7;
              const lazyResult = React.lazy(() => closure_1_0(paths[8])(paths[7], paths.paths));
              const obj = closure_2_0(closure_2_2[9]);
              const obj2 = {
                onConfirm() {
                  return closure_0(true);
                }
              };
              obj.openAlert("skip-avatar-upload", closure_2_6(lazyResult, obj2));
            }
          };
          const tmp = first(closure_2[18]);
          const merged = Object.assign(arg0);
          return closure_6(tmp, obj);
        }
      };
      return obj;
    },
    initialParams: { onComplete }
  };
  items1[1] = closure_6(Navigator.Screen, obj5);
  const obj6 = {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[19]).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete }
  };
  items1[2] = closure_6(Navigator.Screen, obj6);
  const obj7 = {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[20]).default;
    },
    initialParams: { onComplete }
  };
  items1[3] = closure_6(Navigator.Screen, obj7);
  const obj8 = {
    name: "connect-guardian",
    getComponent() {
      return closure_0(closure_2[21]).default;
    },
    initialParams: { onComplete }
  };
  items1[4] = closure_6(Navigator.Screen, obj8);
  return tmp7(Navigator, obj3);
};
