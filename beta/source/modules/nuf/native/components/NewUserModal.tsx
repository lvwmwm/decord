// Module ID: 17868
// Function ID: 17869
// Name: NewUserModal
// Dependencies: [32, 19, 17, 21, 8194, 4790, 580, 17869, 1984, 5144, 558, 568, 7278, 17866, 4993, 17867, 5877, 1368, 16343, 17870, 12879, 12868, 17871, 17873, 2]

// Module 17868 (NewUserModal)
import nativeDefault from "native" /* 580 */;
import NewUserUtils from "NewUserUtils" /* 17866 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let NativeModules = fn(17).NativeModules;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const NativeStackNavigator = fn(8194);
let closure_8 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(4790);
let obj3 = { header: { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_9 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj4 = { borderBottomWidth: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(32);
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  const tmp4 = closure_9();
  _require = tmp4;
  const tmp5 = first1(noop.useState(initialOnboardingStepIndex), 2);
  const first = tmp5[0];
  dependencyMap = tmp5[1];
  const tmp7 = first1(noop.useState(initialOnboardingStepIndex), 2);
  first1 = tmp7[0];
  noop = tmp7[1];
  NativeModules = noop.useRef(null);
  let obj = require("c");
  const tmp = _require;
  const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  if (cResult[0] === first1) {
    if (cResult[1] === first) {
      let tmp10 = cResult[2];
    }
    closure_7 = tmp10;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor() {
          MinimizeApp = closure_5.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      cResult[3] = M;
      const tmp12 = M;
    } else {
      class M {
        constructor() {
          MinimizeApp = closure_5.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
    }
    tmp(5877).useNavigatorBackPressHandler(tmp12);
    if (cResult[4] === accessibilityNativeStackOptions) {
      class M {
        constructor() {
          MinimizeApp = closure_5.MinimizeApp;
          minimizeAppResult = MinimizeApp.minimizeApp();
          return true;
        }
      }
      if (initialRouteName == null) {
        class M {
          constructor() {
            MinimizeApp = closure_5.MinimizeApp;
            minimizeAppResult = MinimizeApp.minimizeApp();
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
        const tmp15 = B;
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
        const obj3 = { name: "enable-notification", getComponent: tmp15, initialParams: null };
        const obj4 = { onComplete: tmp10 };
        obj3.initialParams = obj4;
        const tmp18 = accessibilityNativeStackOptions(closure_8.Screen, obj3);
        cResult[8] = tmp10;
        cResult[9] = tmp18;
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
        const tmp19 = W;
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
                  return {
                    headerRight(arg0) {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj.onPress = function onPress() {
                        closure_0 = closure_1_7;
                        const lazyResult = React.lazy(() => closure_0(paths[8])(paths[7], paths.paths));
                        closure_2_0(5144).openAlert("skip-avatar-upload", accessibilityNativeStackOptions(lazyResult, {
                          onConfirm() {
                            return closure_0(true);
                          }
                        }));
                      };
                      return accessibilityNativeStackOptions(first(12879), obj);
                    }
                  };
                },
          initialParams: null
        };
        const obj6 = { onComplete: tmp10 };
        obj5.initialParams = obj6;
        const tmp22 = accessibilityNativeStackOptions(closure_8.Screen, obj5);
        cResult[11] = tmp10;
        cResult[12] = tmp22;
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
        const tmp23 = K;
        const tmp24 = tmp25;
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
        const obj7 = { name: "contact-sync", options: tmp24, getComponent: tmp23, initialParams: null };
        const obj8 = { onComplete: tmp10 };
        obj7.initialParams = obj8;
        const tmp27 = accessibilityNativeStackOptions(closure_8.Screen, obj7);
        cResult[15] = tmp10;
        cResult[16] = tmp27;
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
        const tmp28 = tmp30;
        const tmp29 = tmp31;
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
        const obj9 = { name: "discoverability", options: tmp28, getComponent: tmp29, initialParams: null };
        const obj10 = { onComplete: tmp10 };
        obj9.initialParams = obj10;
        const tmp33 = accessibilityNativeStackOptions(closure_8.Screen, obj9);
        cResult[19] = tmp10;
        cResult[20] = tmp33;
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
        const tmp34 = G;
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
        const obj11 = { name: "connect-guardian", getComponent: tmp34, initialParams: null };
        const obj12 = { onComplete: tmp10 };
        obj11.initialParams = obj12;
        const tmp36 = accessibilityNativeStackOptions(closure_8.Screen, obj11);
        cResult[22] = tmp10;
        cResult[23] = tmp36;
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
      const obj13 = { screenOptions: tmp14, initialRouteName, children: null };
      const items = [tmp16, tmp20, tmp26, tmp32, tmp35];
      obj13.children = items;
      const tmp40 = closure_7(closure_8.Navigator, obj13);
      cResult[24] = tmp26;
      cResult[25] = tmp32;
      cResult[26] = tmp35;
      cResult[27] = tmp14;
      cResult[28] = initialRouteName;
      cResult[29] = tmp16;
      cResult[30] = tmp20;
      cResult[31] = tmp40;
    }
    const fn2 = function w(navigation) {
      closure_5.current = navigation.navigation;
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
        presentation: null,
        animation: "slide_from_right",
        headerBackVisible: false
      };
      let str = "card";
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      obj.presentation = str;
      const merged = Object.assign(accessibilityNativeStackOptions);
      return obj;
    };
    cResult[4] = accessibilityNativeStackOptions;
    cResult[5] = tmp4.header;
    cResult[6] = fn2;
    const tmpResult = tmp(5877);
  }
  const fn = function u(flag) {
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = NewUserUtils.getNextOnboardingStep(flag, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      dependencyMap(onboardingStepIndex);
      closure_1_4(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          closure_0(17866).continueToNextStep(onboardingStepIndex, tmp3.current);
          const obj2 = closure_0(17866);
        }
      }
      first(4993).popWithKey(closure_0(17867).NEW_USER_MODAL_KEY);
    });
  };
  cResult[0] = first1;
  cResult[1] = first;
  cResult[2] = fn;
  tmp10 = fn;
}) : ((arg0) => {
  ({ initialRouteName, initialOnboardingStepIndex } = arg0);
  let first1;
  noop = undefined;
  _require = closure_9();
  const tmp = first1(noop.useState(initialOnboardingStepIndex), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const tmp3 = first1(noop.useState(initialOnboardingStepIndex), 2);
  first1 = tmp3[0];
  noop = tmp3[1];
  let MinimizeApp = noop.useRef(null);
  closure_6 = require("Navigator").useAccessibilityNativeStackOptions();
  const items = [first1, first];
  const onComplete = noop.useCallback((flag) => {
    if (flag == null) {
      flag = false;
    }
    const nextOnboardingStep = NewUserUtils.getNextOnboardingStep(flag, first1, first);
    nextOnboardingStep.then((onboardingStepIndex) => {
      onboardingStepIndex = onboardingStepIndex.onboardingStepIndex;
      ({ lastShownStepIndex, continueNavigation } = onboardingStepIndex);
      dependencyMap(onboardingStepIndex);
      closure_1_4(lastShownStepIndex);
      if (continueNavigation) {
        if (null != ref.current) {
          closure_0(17866).continueToNextStep(onboardingStepIndex, tmp3.current);
          const obj2 = closure_0(17866);
        }
      }
      first(4993).popWithKey(closure_0(17867).NEW_USER_MODAL_KEY);
    });
  }, items);
  let obj = require("Navigator");
  require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(() => {
    MinimizeApp = MinimizeApp.MinimizeApp;
    MinimizeApp.minimizeApp();
    return true;
  });
  const obj3 = {
    screenOptions(navigation) {
      closure_5.current = navigation.navigation;
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
        presentation: null,
        animation: "slide_from_right",
        headerBackVisible: false
      };
      let str = "card";
      if (obj2.isAndroid()) {
        str = "transparentModal";
      }
      obj.presentation = str;
      const merged = Object.assign(closure_6);
      return obj;
    },
    initialRouteName: null,
    children: null
  };
  if (initialRouteName == null) {
    initialRouteName = "choose-avatar";
  }
  obj3.initialRouteName = initialRouteName;
  const items1 = [
    closure_6(closure_8.Screen, {
      name: "enable-notification",
      getComponent() {
        return closure_0(16343).RedesignNotificationScreen;
      },
      initialParams: { onComplete }
    }),
    closure_6(closure_8.Screen, {
      name: "choose-avatar",
      getComponent() {
        return closure_0(17870).default;
      },
      options() {
        return {
          headerRight(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.onPress = function onPress() {
              closure_0 = closure_1_7;
              const lazyResult = React.lazy(() => closure_0(paths[8])(paths[7], paths.paths));
              closure_2_0(5144).openAlert("skip-avatar-upload", closure_2_6(lazyResult, {
                onConfirm() {
                  return closure_0(true);
                }
              }));
            };
            return closure_6(first(12879), obj);
          }
        };
      },
      initialParams: { onComplete }
    }),
    closure_6(closure_8.Screen, {
      name: "contact-sync",
      options: { headerShown: false },
      getComponent() {
        return closure_0(12868).ContactSyncOnboardingModal;
      },
      initialParams: { onComplete }
    }),
    closure_6(closure_8.Screen, {
      name: "discoverability",
      options: { headerShown: false },
      getComponent() {
        return closure_0(17871).default;
      },
      initialParams: { onComplete }
    }),
    closure_6(closure_8.Screen, {
      name: "connect-guardian",
      getComponent() {
        return closure_0(17873).default;
      },
      initialParams: { onComplete }
    })
  ];
  obj3.children = items1;
  return onComplete(closure_8.Navigator, obj3);
});
