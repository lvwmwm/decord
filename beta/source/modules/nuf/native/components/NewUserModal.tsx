// Module ID: 17220
// Function ID: 17221
// Name: NewUserModal
// Dependencies: [32, 19, 17, 21, 7343, 4837, 588, 17221, 1987, 5206, 558, 576, 6421, 17218, 5040, 17219, 5939, 1370, 15626, 17222, 12086, 12075, 17223, 17225, 2]

// Module 17220 (NewUserModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import NewUserUtils from "NewUserUtils" /* 17218 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7343 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, onboardingStepIndex;

let metroImportDefault;
let metroRequire;
let obj2;
const f129542 = () => closure_1_0(paths[8])(paths[7], paths.paths);
let react = react_mod;
let NativeModules = react_native.NativeModules;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
let closure_9 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let closure_4;
  let first1;
  let initialOnboardingStepIndex;
  let initialRouteName;
  let items;
  let obj10;
  let obj12;
  let obj4;
  let obj6;
  let obj8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(32);
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  const tmp4 = closure_9();
  _require = tmp4;
  const tmp5 = first1(react.useState(initialOnboardingStepIndex), 2);
  const first = tmp5[0];
  dependencyMap = tmp5[1];
  const tmp7 = first1(react.useState(initialOnboardingStepIndex), 2);
  first1 = tmp7[0];
  react = tmp7[1];
  NativeModules = react.useRef(null);
  let obj2 = require("Navigator");
  const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
  if (cResult[0] === first1) {
    let tmp10;
    let tmp12;
    if (cResult[1] === first) {
      tmp10 = cResult[2];
    }
    let closure_7 = tmp10;
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      cResult[3] = M;
      tmp12 = M;
    } else {
      class M {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    const tmpResult = tmp(5939);
    tmpResult.useNavigatorBackPressHandler(tmp12);
    if (cResult[4] === accessibilityNativeStackOptions) {
      let tmp15;
      let tmp19;
      let tmp23;
      let tmp24;
      let tmp28;
      let tmp29;
      let tmp34;
      class M {
        constructor() {
          MinimizeApp = MinimizeApp.MinimizeApp;
          MinimizeApp.minimizeApp();
          return true;
        }
      }
      if (initialRouteName == null) {
        class M {
          constructor() {
            MinimizeApp = MinimizeApp.MinimizeApp;
            MinimizeApp.minimizeApp();
            return true;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            return closure_0(closure_2[18]).RedesignNotificationScreen;
          }
        }
        cResult[7] = B;
        tmp15 = B;
      } else {
        class B {
          constructor() {
            return closure_0(closure_2[18]).RedesignNotificationScreen;
          }
        }
      }
      if (cResult[8] !== tmp10) {
        class B {
          constructor() {
            return closure_0(closure_2[18]).RedesignNotificationScreen;
          }
        }
        const obj3 = { name: "enable-notification", getComponent: tmp15, initialParams: obj4 };
        obj4 = { onComplete: tmp10 };
        cResult[8] = tmp10;
        cResult[9] = accessibilityNativeStackOptions(closure_8.Screen, obj3);
        const tmp18 = accessibilityNativeStackOptions(closure_8.Screen, obj3);
      } else {
        class B {
          constructor() {
            return closure_0(closure_2[18]).RedesignNotificationScreen;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        cResult[10] = W;
        tmp19 = W;
      } else {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
      }
      if (cResult[11] !== tmp10) {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        const obj5 = {
          name: "choose-avatar",
          getComponent: tmp19,
          options() {
                  let obj = {
                    headerRight(arg0) {
                      let obj = {
                        onPress() {
                          closure_0 = closure_1_7;
                          const lazyResult = React.lazy(f129542);
                          const obj = closure_2_0(closure_2_2[9]);
                          const obj2 = {
                            onConfirm() {
                              return closure_0(true);
                            }
                          };
                          obj.openAlert("skip-avatar-upload", accessibilityNativeStackOptions(lazyResult, obj2));
                        }
                      };
                      const tmp = first(closure_2[20]);
                      const merged = Object.assign(arg0);
                      return accessibilityNativeStackOptions(tmp, obj);
                    }
                  };
                  return obj;
                },
          initialParams: obj6
        };
        obj6 = { onComplete: tmp10 };
        cResult[11] = tmp10;
        cResult[12] = accessibilityNativeStackOptions(closure_8.Screen, obj5);
        const tmp22 = accessibilityNativeStackOptions(closure_8.Screen, obj5);
      } else {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
        cResult[13] = K;
        cResult[14] = tmp25;
        tmp23 = K;
        tmp24 = tmp25;
      } else {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
      }
      if (cResult[15] !== tmp10) {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
        const obj7 = { name: "contact-sync", options: tmp24, getComponent: tmp23, initialParams: obj8 };
        obj8 = { onComplete: tmp10 };
        cResult[15] = tmp10;
        cResult[16] = accessibilityNativeStackOptions(closure_8.Screen, obj7);
        const tmp27 = accessibilityNativeStackOptions(closure_8.Screen, obj7);
      } else {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
      }
      const _Symbol5 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
        cResult[17] = tmp30;
        cResult[18] = tmp31;
        tmp28 = tmp30;
        tmp29 = tmp31;
      } else {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
      }
      if (cResult[19] !== tmp10) {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
        const obj9 = { name: "discoverability", options: tmp28, getComponent: tmp29, initialParams: obj10 };
        obj10 = { onComplete: tmp10 };
        cResult[19] = tmp10;
        cResult[20] = accessibilityNativeStackOptions(closure_8.Screen, obj9);
        const tmp33 = accessibilityNativeStackOptions(closure_8.Screen, obj9);
      } else {
        class W {
          constructor() {
            return closure_0(closure_2[19]).default;
          }
        }
      }
      const _Symbol6 = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            return closure_0(closure_2[23]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
        cResult[21] = G;
        tmp34 = G;
      } else {
        class G {
          constructor() {
            return closure_0(closure_2[23]).default;
          }
        }
      }
      if (cResult[22] !== tmp10) {
        class G {
          constructor() {
            return closure_0(closure_2[23]).default;
          }
        }
        class K {
          constructor() {
            return closure_0(closure_2[21]).ContactSyncOnboardingModal;
          }
        }
        const obj11 = { name: "connect-guardian", getComponent: tmp34, initialParams: obj12 };
        obj12 = { onComplete: tmp10 };
        cResult[22] = tmp10;
        cResult[23] = accessibilityNativeStackOptions(closure_8.Screen, obj11);
        const tmp36 = accessibilityNativeStackOptions(closure_8.Screen, obj11);
      } else {
        class G {
          constructor() {
            return closure_0(closure_2[23]).default;
          }
        }
      }
      if (cResult[24] === tmp26) {
        class G {
          constructor() {
            return closure_0(closure_2[23]).default;
          }
        }
      }
      const obj13 = { screenOptions: tmp14, initialRouteName, children: items };
      items = [tmp16, tmp20, tmp26, tmp32, tmp35];
      cResult[24] = tmp26;
      cResult[25] = tmp32;
      cResult[26] = tmp35;
      cResult[27] = tmp14;
      cResult[28] = initialRouteName;
      cResult[29] = tmp16;
      cResult[30] = tmp20;
      cResult[31] = closure_7(closure_8.Navigator, obj13);
      const tmp40 = closure_7(closure_8.Navigator, obj13);
    }
    const fn2 = function w(navigation) {
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
      const merged = Object.assign(accessibilityNativeStackOptions);
      return obj;
    };
    cResult[4] = accessibilityNativeStackOptions;
    cResult[5] = tmp4.header;
    cResult[6] = fn2;
  }
  const fn = function u(flag) {
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
          const obj2 = closure_0(closure_2[13]);
          obj2.continueToNextStep(onboardingStepIndex, tmp3.current);
        }
      }
      const obj = first(closure_2[14]);
      obj.popWithKey(closure_0(closure_2[15]).NEW_USER_MODAL_KEY);
    });
  };
  cResult[0] = first1;
  cResult[1] = first;
  cResult[2] = fn;
  tmp10 = fn;
}) : ((arg0) => {
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
          const obj2 = closure_0(closure_2[13]);
          obj2.continueToNextStep(onboardingStepIndex, tmp3.current);
        }
      }
      const obj = first(closure_2[14]);
      obj.popWithKey(closure_0(closure_2[15]).NEW_USER_MODAL_KEY);
    });
  }, items);
  let obj2 = require("useNavigatorBackPressHandler");
  obj2.useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const Navigator = closure_8.Navigator;
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
      return closure_0(closure_2[18]).RedesignNotificationScreen;
    },
    initialParams: { onComplete }
  };
  items1[0] = closure_6(closure_8.Screen, obj4);
  const obj5 = {
    name: "choose-avatar",
    getComponent() {
      return closure_0(closure_2[19]).default;
    },
    options() {
      let obj = {
        headerRight(arg0) {
          let obj = {
            onPress() {
              let paths;
              closure_0 = closure_1_7;
              const lazyResult = React.lazy(f129542);
              const obj = closure_2_0(closure_2_2[9]);
              const obj2 = {
                onConfirm() {
                  return closure_0(true);
                }
              };
              obj.openAlert("skip-avatar-upload", closure_2_6(lazyResult, obj2));
            }
          };
          const tmp = first(closure_2[20]);
          const merged = Object.assign(arg0);
          return closure_6(tmp, obj);
        }
      };
      return obj;
    },
    initialParams: { onComplete }
  };
  items1[1] = closure_6(closure_8.Screen, obj5);
  const obj6 = {
    name: "contact-sync",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[21]).ContactSyncOnboardingModal;
    },
    initialParams: { onComplete }
  };
  items1[2] = closure_6(closure_8.Screen, obj6);
  const obj7 = {
    name: "discoverability",
    options: { headerShown: false },
    getComponent() {
      return closure_0(closure_2[22]).default;
    },
    initialParams: { onComplete }
  };
  items1[3] = closure_6(closure_8.Screen, obj7);
  const obj8 = {
    name: "connect-guardian",
    getComponent() {
      return closure_0(closure_2[23]).default;
    },
    initialParams: { onComplete }
  };
  items1[4] = closure_6(closure_8.Screen, obj8);
  return tmp7(Navigator, obj3);
});
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default tmp3;
