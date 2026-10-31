// Module ID: 19558
// Function ID: 19559
// Name: NewUserModal
// Dependencies: [19, 17, 21, 9856, 5014, 575, 19559, 1994, 5960, 7169, 19556, 6744, 19555, 7004, 19560, 1375, 18031, 19561, 14253, 14241, 19562, 19568, 19574, 2]
// Exports: default

// Module 19558 (NewUserModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import NewUserUtils from "NewUserUtils" /* 19556 */;
import InterestPickerPicksContextDefault from "InterestPickerPicksContext" /* 19560 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9856 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, flag, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
const NativeModules = react_native.NativeModules;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let Navigator = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  let closure_2;
  let closure_3;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items;
  let ref;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  react = undefined;
  _require = closure_8();
  importDefault = react.useRef({ onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex });
  dependencyMap = react.useRef(null);
  let obj = require("Navigator");
  react = obj.useAccessibilityNativeStackOptions();
  const onComplete = react.useCallback((flag) => {
    let lastShownStepIndex;
    let onboardingStepIndex;
    ({ lastShownStepIndex, onboardingStepIndex } = ref.current);
    const tmp = NewUserUtils;
    const getNextOnboardingStep = tmp.getNextOnboardingStep;
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = getNextOnboardingStep(flag, lastShownStepIndex, onboardingStepIndex);
    nextOnboardingStep.then((lastShownStepIndex) => {
      const onboardingStepIndex = lastShownStepIndex.onboardingStepIndex;
      closure_1_1.current = { onboardingStepIndex, lastShownStepIndex: lastShownStepIndex.lastShownStepIndex };
      if (lastShownStepIndex.continueNavigation) {
        if (null != ref.current) {
          const obj2 = closure_0(ref[10]);
          obj2.continueToNextStep(onboardingStepIndex, tmp.current);
        }
      }
      const obj = closure_1(ref[11]);
      obj.popWithKey(closure_0(ref[12]).NEW_USER_MODAL_KEY);
    });
  }, []);
  let obj2 = require("useNavigatorBackPressHandler");
  obj2.useNavigatorBackPressHandler(() => {
    const MinimizeApp = callback.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const obj3 = {
    screenOptions(navigation) {
      let str;
      closure_2.current = navigation.navigation;
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
      const merged = Object.assign(closure_3);
      return obj;
    },
    initialRouteName,
    children: items
  };
  Navigator = Navigator.Navigator;
  const tmp4 = InterestPickerPicksContextDefault;
  const tmp5 = closure_6;
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  items = [, , , , , ];
  const obj4 = { children: tmp5(Navigator, obj3) };
  const obj5 = {
    name: "enable-notification",
    getComponent() {
      return closure_0(closure_2[16]).RedesignNotificationScreen;
    },
    initialParams: { onComplete }
  };
  items[0] = closure_5(Navigator.Screen, obj5);
  const obj6 = {
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
              closure_0 = closure_1_4;
              const lazyResult = React.lazy(() => closure_1_0(paths[7])(paths[6], paths.paths));
              const obj = closure_2_0(closure_2_2[8]);
              const obj2 = {
                onConfirm() {
                  return closure_0(true);
                }
              };
              obj.openAlert("skip-avatar-upload", closure_2_5(lazyResult, obj2));
            }
          };
          const tmp = ref(closure_2[18]);
          const merged = Object.assign(arg0);
          return closure_2_5(tmp, obj);
        }
      };
      return obj;
    },
    initialParams: { onComplete }
  };
  items[1] = closure_5(Navigator.Screen, obj6);
  const obj7 = {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[19]).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete }
  };
  items[2] = closure_5(Navigator.Screen, obj7);
  const obj8 = {
    name: "interest-picker",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[20]).default;
    },
    initialParams: { onComplete }
  };
  items[3] = closure_5(Navigator.Screen, obj8);
  const obj9 = {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[21]).default;
    },
    initialParams: { onComplete }
  };
  items[4] = closure_5(Navigator.Screen, obj9);
  const obj10 = {
    name: "connect-guardian",
    getComponent() {
      return closure_0(closure_2[22]).default;
    },
    initialParams: { onComplete }
  };
  items[5] = closure_5(Navigator.Screen, obj10);
  return closure_5(tmp4, obj4);
};
