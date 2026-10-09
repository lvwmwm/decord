// Module ID: 18069
// Function ID: 18070
// Name: NewUserModal
// Dependencies: [19, 17, 21, 9317, 5091, 587, 18070, 2000, 5300, 558, 576, 6686, 18068, 5941, 18067, 6211, 1382, 16336, 18071, 12375, 12363, 18072, 18078, 2]

// Module 18069 (NewUserModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import NewUserUtils from "NewUserUtils" /* 18068 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9317 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const f133082 = () => closure_1_0(paths[7])(paths[6], paths.paths);
let react = react_mod;
const NativeModules = react_native.NativeModules;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_8 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewUserModal(arg0) {
  let accessibilityNativeStackOptions;
  let closure_2;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items;
  let obj10;
  let obj12;
  let obj4;
  let obj6;
  let obj8;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(15);
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  const tmp4 = closure_8();
  _require = tmp4;
  if (cResult[0] !== initialOnboardingStepIndex) {
    let obj2 = { onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex };
    cResult[0] = initialOnboardingStepIndex;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const ref = accessibilityNativeStackOptions.useRef(tmp5);
  dependencyMap = accessibilityNativeStackOptions.useRef(null);
  const tmpResult = tmp(6686);
  accessibilityNativeStackOptions = tmpResult.useAccessibilityNativeStackOptions();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function f(flag) {
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
            const obj2 = closure_0(ref[12]);
            obj2.continueToNextStep(onboardingStepIndex, tmp.current);
          }
        }
        const obj = closure_1(ref[13]);
        obj.popWithKey(closure_0(ref[14]).NEW_USER_MODAL_KEY);
      });
    };
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let MinimizeApp = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      MinimizeApp = MinimizeApp.MinimizeApp;
      MinimizeApp.minimizeApp();
      return true;
    };
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  const tmpResult2 = tmp(6211);
  tmpResult2.useNavigatorBackPressHandler(tmp8);
  if (cResult[4] === accessibilityNativeStackOptions) {
    let tmp10;
    let tmp11;
    let tmp15;
    let tmp19;
    let tmp23;
    let tmp27;
    if (cResult[5] === tmp4.header) {
      tmp10 = cResult[6];
    }
    if (initialRouteName == null) {
      initialRouteName = "choose-avatar";
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {
        name: "enable-notification",
        getComponent() {
              return closure_0(closure_2[17]).RedesignNotificationScreen;
            },
        initialParams: obj4
      };
      obj4 = { onComplete: tmp7 };
      const tmp14 = closure_5(closure_7.Screen, obj3);
      cResult[7] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = {
        name: "choose-avatar",
        getComponent() {
              return closure_0(closure_2[18]).default;
            },
        options() {
              let obj = {
                headerRight(arg0) {
                  let obj = {
                    onPress() {
                      closure_0 = closure_1_4;
                      const lazyResult = React.lazy(f133082);
                      const obj = closure_2_0(closure_2_2[8]);
                      const obj2 = {
                        onConfirm() {
                          return closure_0(true);
                        }
                      };
                      obj.openAlert("skip-avatar-upload", closure_2_5(lazyResult, obj2));
                    }
                  };
                  const tmp = ref(closure_2[19]);
                  const merged = Object.assign(arg0);
                  return closure_2_5(tmp, obj);
                }
              };
              return obj;
            },
        initialParams: obj6
      };
      obj6 = { onComplete: tmp7 };
      const tmp18 = closure_5(closure_7.Screen, obj5);
      cResult[8] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = {
        name: "contact-sync",
        options: { headerShown: false },
        getComponent() {
              return closure_0(closure_2[20]).ContactSyncOnboardingModal;
            },
        initialParams: obj8
      };
      obj8 = { onComplete: tmp7 };
      const tmp22 = closure_5(closure_7.Screen, obj7);
      cResult[9] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = {
        name: "discoverability",
        options: { headerShown: false },
        getComponent() {
              return closure_0(closure_2[21]).default;
            },
        initialParams: obj10
      };
      obj10 = { onComplete: tmp7 };
      const tmp26 = closure_5(closure_7.Screen, obj9);
      cResult[10] = tmp26;
      tmp23 = tmp26;
    } else {
      tmp23 = cResult[10];
    }
    const _Symbol5 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj11 = {
        name: "connect-guardian",
        getComponent() {
              return closure_0(closure_2[22]).default;
            },
        initialParams: obj12
      };
      obj12 = { onComplete: tmp7 };
      const tmp30 = closure_5(closure_7.Screen, obj11);
      cResult[11] = tmp30;
      tmp27 = tmp30;
    } else {
      tmp27 = cResult[11];
    }
    if (cResult[12] === tmp10) {
      let tmp31;
      if (cResult[13] === initialRouteName) {
        tmp31 = cResult[14];
      }
      return tmp31;
    }
    const obj13 = { screenOptions: tmp10, initialRouteName, children: items };
    items = [tmp11, tmp15, tmp19, tmp23, tmp27];
    const tmp34 = closure_6(closure_7.Navigator, obj13);
    cResult[12] = tmp10;
    cResult[13] = initialRouteName;
    cResult[14] = tmp34;
    tmp31 = tmp34;
  }
  const fn3 = function y(navigation) {
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
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  };
  cResult[4] = accessibilityNativeStackOptions;
  cResult[5] = tmp4.header;
  cResult[6] = fn3;
  tmp10 = fn3;
}) : (function NewUserModal(arg0) {
  let closure_2;
  let closure_3;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items;
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  react = undefined;
  _require = closure_8();
  const ref = react.useRef({ onboardingStepIndex: initialOnboardingStepIndex, lastShownStepIndex: initialOnboardingStepIndex });
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
          const obj2 = closure_0(ref[12]);
          obj2.continueToNextStep(onboardingStepIndex, tmp.current);
        }
      }
      const obj = closure_1(ref[13]);
      obj.popWithKey(closure_0(ref[14]).NEW_USER_MODAL_KEY);
    });
  }, []);
  let obj2 = require("useNavigatorBackPressHandler");
  obj2.useNavigatorBackPressHandler(() => {
    const MinimizeApp = callback.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const Navigator = closure_7.Navigator;
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
  const tmp3 = closure_6;
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  items = [, , , , ];
  const obj4 = {
    name: "enable-notification",
    getComponent() {
      return closure_0(closure_2[17]).RedesignNotificationScreen;
    },
    initialParams: { onComplete }
  };
  items[0] = closure_5(closure_7.Screen, obj4);
  const obj5 = {
    name: "choose-avatar",
    getComponent() {
      return closure_0(closure_2[18]).default;
    },
    options() {
      let obj = {
        headerRight(arg0) {
          let obj = {
            onPress() {
              let paths;
              closure_0 = closure_1_4;
              const lazyResult = React.lazy(f133082);
              const obj = closure_2_0(closure_2_2[8]);
              const obj2 = {
                onConfirm() {
                  return closure_0(true);
                }
              };
              obj.openAlert("skip-avatar-upload", closure_2_5(lazyResult, obj2));
            }
          };
          const tmp = ref(closure_2[19]);
          const merged = Object.assign(arg0);
          return closure_2_5(tmp, obj);
        }
      };
      return obj;
    },
    initialParams: { onComplete }
  };
  items[1] = closure_5(closure_7.Screen, obj5);
  const obj6 = {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[20]).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete }
  };
  items[2] = closure_5(closure_7.Screen, obj6);
  const obj7 = {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[21]).default;
    },
    initialParams: { onComplete }
  };
  items[3] = closure_5(closure_7.Screen, obj7);
  const obj8 = {
    name: "connect-guardian",
    getComponent() {
      return closure_0(closure_2[22]).default;
    },
    initialParams: { onComplete }
  };
  items[4] = closure_5(closure_7.Screen, obj8);
  return tmp3(Navigator, obj3);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default tmp3;
