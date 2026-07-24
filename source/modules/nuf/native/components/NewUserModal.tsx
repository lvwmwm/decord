// Module ID: 16177
// Function ID: 125348
// Name: NewUserModal
// Dependencies: [57, 31, 27, 33, 9149, 4130, 689, 16178, 1934, 4472, 5517, 16175, 4337, 16176, 5093, 477, 14831, 16179, 11752, 11741, 16180, 16182, 2]
// Exports: default

// Module 16177 (NewUserModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { NativeModules } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
createNativeStackNavigator = {};
createNativeStackNavigator = { borderBottomWidth: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
createNativeStackNavigator.header = createNativeStackNavigator;
createNativeStackNavigator = _createForOfIteratorHelperLoose.createStyles(createNativeStackNavigator);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default function NewUserModal(arg0) {
  let initialOnboardingStepIndex;
  let initialRouteName;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  const _require = createNativeStackNavigator();
  let tmp = first1(React.useState(initialOnboardingStepIndex), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const tmp3 = first1(React.useState(initialOnboardingStepIndex), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  let closure_5 = React.useRef(null);
  let obj = _require(5517);
  let callback = obj.useAccessibilityNativeStackOptions();
  const items = [first1, first];
  callback = React.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = arg0;
    }
    const nextOnboardingStep = lib(16175).getNextOnboardingStep(tmp, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      let continueNavigation;
      let lastShownStepIndex;
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      outer1_2(onboardingStepIndex);
      outer1_4(lastShownStepIndex);
      if (continueNavigation) {
        if (null != outer1_5.current) {
          callback(16175).continueToNextStep(onboardingStepIndex, outer1_5.current);
          const obj2 = callback(16175);
        }
      }
      first(4337).popWithKey(callback(16176).NEW_USER_MODAL_KEY);
    });
  }, items);
  let obj1 = _require(5093);
  obj1.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  obj = {
    screenOptions(navigation) {
      closure_5.current = navigation.navigation;
      const obj = {
        headerStyle: lib.header,
        headerShadowVisible: false,
        title: "",
        headerLeft() {
          return null;
        },
        headerRight() {
          return null;
        },
        fullScreenGestureEnabled: false
      };
      let str = "card";
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      obj.presentation = str;
      obj.animation = "slide_from_right";
      obj.headerBackVisible = false;
      const merged = Object.assign(closure_6);
      return obj;
    }
  };
  let str = "choose-avatar";
  if (null != initialRouteName) {
    str = initialRouteName;
  }
  obj.initialRouteName = str;
  obj = {
    name: "enable-notification",
    getComponent() {
      return lib(14831).RedesignNotificationScreen;
    },
    initialParams: { onComplete: callback }
  };
  const items1 = [callback(createNativeStackNavigator.Screen, obj), , , , ];
  obj1 = {
    name: "choose-avatar",
    getComponent() {
      return lib(16179).default;
    },
    options() {
      return {
        headerRight(arg0) {
          let obj = {};
          const merged = Object.assign(arg0);
          obj["onPress"] = function onPress() {
            (function handleChooseAvatarSkip(outer2_7) {
              const callback = outer2_7;
              let obj = callback(table[9]);
              obj = { onConfirm() { ... } };
              obj.openAlert("skip-avatar-upload", callback2(React.lazy(() => { ... }), obj));
            })(outer2_7);
          };
          return callback(first(table[18]), obj);
        }
      };
    },
    initialParams: { onComplete: callback }
  };
  items1[1] = callback(createNativeStackNavigator.Screen, obj1);
  items1[2] = callback(createNativeStackNavigator.Screen, {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return lib(11741).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete: callback }
  });
  items1[3] = callback(createNativeStackNavigator.Screen, {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return lib(16180).default;
    },
    initialParams: { onComplete: callback }
  });
  items1[4] = callback(createNativeStackNavigator.Screen, {
    name: "connect-guardian",
    getComponent() {
      return lib(16182).default;
    },
    initialParams: { onComplete: callback }
  });
  obj.children = items1;
  return callback(createNativeStackNavigator.Navigator, obj);
};
