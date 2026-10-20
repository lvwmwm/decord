// Module ID: 17088
// Function ID: 17089
// Name: MainNavigator
// Dependencies: [32, 19, 17, 502, 17089, 1087, 21, 4945, 1384, 4902, 15091, 17090, 17091, 17155, 558, 576, 17918, 17925, 17957, 17979, 9657, 18042, 18043, 18046, 18050, 18052, 18081, 18087, 5120, 1503, 1631, 5673, 9614, 18088, 18150, 573, 11244, 5114, 7043, 18153, 9948, 12854, 18399, 18430, 11441, 17965, 2]
// Exports: getChannelScreen

// Module 17088 (MainNavigator)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1503 */;
import KeyboardTypes from "KeyboardTypes" /* 1631 */;
import DeviceUtils from "DeviceUtils" /* 4902 */;
import ChatInputUtils from "ChatInputUtils" /* 5120 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 11441 */;
import StartupProfiler from "StartupProfiler" /* 12854 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 15091 */;
import NavigationConstants from "NavigationConstants" /* 17089 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 17090 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 17965 */;
import AppComponents from "AppComponents" /* 18153 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 18399 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 18430 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4945 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;
let _require, importDefault;

let c10;
let c9;
let closure_12;
let metroImportAll;
let tmp;
let tmp2;
let unpackModuleId;
const getNavigationModalPresentationDefault = tmp2(9948);
const AutoAnalytics = tmp(17918);
function getId(params) {
  return params.params.screenKey;
}
function beforeRemove(data) {
  let SWIPE;
  const obj = closure_1_0(closure_1_2[28]);
  if (null != obj.getBestActiveInput()) {
    const obj2 = { type: closure_1_0(closure_1_2[30]).KeyboardTypes.SYSTEM };
    const setKeyboardType = closure_1_0(closure_1_2[29]).setKeyboardType;
    closure_1_0(closure_1_2[29]);
    setKeyboardType(obj2);
  }
  data = data.data;
  let type;
  if (data != null) {
    const action = data.action;
    if (action != null) {
      type = action.type;
    }
  }
  const trackWithMetadata = closure_1_1(closure_1_2[31]).trackWithMetadata;
  const CHANNEL_BACK_NAVIGATED = constants.CHANNEL_BACK_NAVIGATED;
  closure_1_1(closure_1_2[31]);
  if ("GO_BACK" === type) {
    SWIPE = constants2.BACK_BUTTON;
  } else {
    SWIPE = constants2.SWIPE;
  }
  trackWithMetadata(CHANNEL_BACK_NAVIGATED, { source: SWIPE });
}
function getAuthComponent() {
  return require("Auth").default;
}
function getTabsComponent() {
  return require("MainTabs").default;
}
function getChannelComponent() {
  return View;
}
function getFriendsNavigatorComponent() {
  return require("FriendsNavigator").default;
}
function getYouComponent() {
  return require("YouScreenContainer").default;
}
function getChannelDetailsComponent() {
  return require("ChannelDetailsNavigator").default;
}
function getConversationsComponent() {
  return require("ConversationNavigator").default;
}
function getChannelSecondaryViewChatComponent() {
  return require("ChannelSecondaryViewChatNavigator").default;
}
function getSearchComponent() {
  return require("SearchNavigator").default;
}
function getContextMenuCommandNavigatorComponent() {
  return require("ContextMenuCommandNavigator").default;
}
function getModalComponent() {
  return require("modal/ModalScreen").default;
}
function getMessageRequestsComponent() {
  return require("MessageRequestsNavigator").default;
}
function getSettingsComponent() {
  return require("Settings").default;
}
function getAccountStanding() {
  return require("SuspendedUserPage").default;
}
function resetChatKeyboard() {
  const obj = ChatInputUtils;
  if (null != obj.getBestActiveInput()) {
    const obj2 = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
    const setKeyboardType = KeyboardUIStore.setKeyboardType;
    KeyboardUIStore;
    setKeyboardType(obj2);
  }
}
const View = react_native.View;
let closure_7 = NavigationConstants.StackNavigationAnimationSettings;
({ AnalyticEvents: metroImportAll, DrawerSourceTypes: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const mainNavigator = "mainNavigator";
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  const _module4 = DeviceUtils;
  PlatformUtils = _module4.getSystemVersionMajor() <= 15;
}
let closure_16 = createAccessibleNativeStackNavigatorDefault();
let Screen = createChatPanelNativeStackNavigatorDefault();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function WrappedAutoAnalytics() {
  let first;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AutoAnalytics;
    cResult[0] = tmpResult;
    first = tmpResult;
  } else {
    first = cResult[0];
  }
  const _default = first.default;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = authStore(_default, {});
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (function WrappedAutoAnalytics() {
  return authStore(AutoAnalytics.default, {});
});
const options = Object.freeze({ animation: "none" });
ReactCompilerGating = ReactCompilerGating_mod;
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  const obj = {
    name: "channel",
    getId,
    listeners: { beforeRemove },
    options(arg0) {
      let route;
      ({ navigation, route } = arg0);
      const obj = { headerShown: true, header: closure_2_0(closure_2_2[32]).renderHeader, animation };
      const obj2 = closure_2_0(closure_2_2[32]);
      const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(animation2);
      return obj;
    },
    getComponent: getChannelComponent
  };
  return closure_10(Screen.Screen, obj);
}
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StackNavigator() {
  let accessibilityNativeStackOptions;
  let closure_1;
  let first;
  let homeIndicatorStore;
  let isChatBesideChannelList;
  let items1;
  let obj10;
  let obj13;
  let obj20;
  let obj7;
  let sessionId;
  let tmp10;
  let tmp15;
  let tmp9;
  let tmp = first;
  let tmp2 = homeIndicatorStore;
  let obj = first(homeIndicatorStore[15]);
  const cResult = obj.c(33);
  let tmp4 = closure_14();
  let obj2 = first(homeIndicatorStore[33]);
  const screenReaderEnabled = obj2.useScreenReaderEnabled();
  let obj3 = first(homeIndicatorStore[33]);
  const appKeyCommands = obj3.useAppKeyCommands();
  require("useNativeThemeUpdater")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    const fn = function c() {
      return null != sessionId.getSessionId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(tmp2[35]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  const tmp13 = isChatBesideChannelList(accessibilityNativeStackOptions.useState(closure_7.animation), 2);
  first = tmp13[0];
  importDefault = tmp13[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(autoHideHomeIndicator) {
      return autoHideHomeIndicator.autoHideHomeIndicator;
    };
    cResult[2] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[2];
  }
  const tmpResult4 = tmp(tmp2[36]);
  homeIndicatorStore = tmpResult4.useHomeIndicatorStore(tmp15);
  isChatBesideChannelList = tmp7(tmp2[37])().isChatBesideChannelList;
  const tmpResult5 = tmp(tmp2[38]);
  accessibilityNativeStackOptions = tmpResult5.useAccessibilityNativeStackOptions();
  if (cResult[3] !== stateFromStores) {
    let tmp19 = null;
    if (stateFromStores) {
      tmp19 = closure_10(closure_21, {});
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp19;
  }
  if (cResult[5] !== homeIndicatorStore) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
    cResult[5] = homeIndicatorStore;
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  const tmp23 = cResult[7];
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  if (tmp23 === undefined) {
    let tmp26;
    let tmp30;
    let tmp35;
    let tmp34;
    let tmp43;
    let tmp54;
    let tmp59;
    let tmp63;
    let tmp67;
    let tmp71;
    let tmp75;
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      let obj4 = { name: "search", getComponent: getSearchComponent };
      const tmp29 = closure_10(closure_16.Screen, obj4);
      cResult[10] = tmp29;
      tmp26 = tmp29;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj5 = {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
              return closure_1(homeIndicatorStore[40])();
            }
      };
      const tmp33 = closure_10(closure_16.Screen, obj5);
      cResult[11] = tmp33;
      tmp30 = tmp33;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj6 = {
        name: "channel-secondary-view-chat",
        getComponent: getChannelSecondaryViewChatComponent,
        options() {
              return closure_1(homeIndicatorStore[40])();
            },
        listeners: obj7
      };
      obj7 = { beforeRemove: resetChatKeyboard };
      const tmp39 = closure_10(closure_16.Screen, obj6);
      const obj8 = { name: "auth", getComponent: getAuthComponent, options };
      const tmp42 = closure_10(closure_16.Screen, obj8);
      cResult[12] = tmp39;
      cResult[13] = tmp42;
      tmp35 = tmp42;
      tmp34 = tmp39;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      tmp35 = cResult[13];
    }
    const _Symbol4 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj9 = { name: "account-standing", getComponent: getAccountStanding, options: obj10 };
      Screen = closure_16.Screen;
      obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
      let merged = Object.assign(options);
      const tmp49 = closure_10(Screen, obj9);
      cResult[14] = tmp49;
      tmp43 = tmp49;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    if (cResult[15] !== isChatBesideChannelList) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj11 = {
        name: "you",
        options() {
              let obj2;
              let obj4;
              const tmp2 = getNavigationModalPresentationDefault;
              const obj = DeviceUtils;
              if (obj.isIpadOS()) {
                obj2 = { presentation: "modal" };
              } else {
                const tmp3Result = PlatformUtils;
                if (tmp3Result.isAndroid()) {
                  if (isChatBesideChannelList) {
                    obj2 = { presentation: "transparentModal" };
                  }
                }
              }
              const obj3 = { contentStyle: obj4, animation: "slide_from_bottom" };
              const merged = Object.assign(tmp2(obj2));
              obj4 = undefined;
              const tmp3Result2 = PlatformUtils;
              if (tmp3Result2.isAndroid()) {
                if (isChatBesideChannelList) {
                  obj4 = { backgroundColor: "transparent" };
                }
              }
              return obj3;
            },
        getComponent: getYouComponent
      };
      cResult[15] = isChatBesideChannelList;
      cResult[16] = closure_10(closure_16.Screen, obj11);
      const tmp53 = closure_10(closure_16.Screen, obj11);
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const Screen2 = closure_16.Screen;
      const obj12 = {
        name: "friends",
        options(route) {
              let presentation;
              route = route.route;
              const params = route.params;
              let str;
              const tmp = closure_1(homeIndicatorStore[40]);
              if (params != null) {
                const params2 = params.params;
                if (params2 != null) {
                  str = params2.presentation;
                }
              }
              if (str == null) {
                str = "modal";
              }
              const obj = { fullScreenGestureEnabled: "card" === presentation };
              const merged = Object.assign(tmp({ presentation: str }));
              const params3 = route.params;
              presentation = undefined;
              if (params3 != null) {
                const params4 = params3.params;
                if (params4 != null) {
                  presentation = params4.presentation;
                }
              }
              return obj;
            },
        listeners: obj13,
        getComponent: getFriendsNavigatorComponent
      };
      const tmp55 = closure_10;
      const tmpResult6 = tmp(tmp2[8]);
      if (!tmpResult6.isAndroid()) {
        class R {
          constructor() {
            return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
          }
        }
      }
      obj13 = { beforeRemove: undefined };
      const tmp55Result = tmp55(Screen2, obj12);
      cResult[17] = tmp55Result;
      tmp54 = tmp55Result;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj14 = {
        name: "settings",
        options() {
              let obj2;
              const tmp = closure_1(homeIndicatorStore[40]);
              const obj = first(homeIndicatorStore[9]);
              if (obj.isIpadOS()) {
                obj2 = { presentation: "modal" };
              }
              const obj3 = { animation: "slide_from_bottom", fullScreenGestureEnabled: true };
              const merged = Object.assign(tmp(obj2));
              return obj3;
            },
        getComponent: getSettingsComponent
      };
      const tmp62 = closure_10(closure_16.Screen, obj14);
      cResult[18] = tmp62;
      tmp59 = tmp62;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol7 = Symbol;
    if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj15 = {
        name: "sidebar",
        getComponent: getChannelDetailsComponent,
        options() {
              return closure_1(homeIndicatorStore[40])({ lockOrientation: false });
            }
      };
      const tmp66 = closure_10(closure_16.Screen, obj15);
      cResult[19] = tmp66;
      tmp63 = tmp66;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol8 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const Screen3 = closure_16.Screen;
      const obj16 = { name: "message-requests", options: require("getNavigationModalPresentation")(), getComponent: getMessageRequestsComponent };
      const tmp70 = closure_10(Screen3, obj16);
      cResult[20] = tmp70;
      tmp67 = tmp70;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol9 = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const Screen4 = closure_16.Screen;
      const obj17 = { name: "context-menu-commands", options: require("getNavigationModalPresentation")(), getComponent: getContextMenuCommandNavigatorComponent };
      const tmp74 = closure_10(Screen4, obj17);
      cResult[21] = tmp74;
      tmp71 = tmp74;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const _Symbol10 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
      const obj18 = {
        name: "modal",
        getId(params) {
              return params.params.modal.key;
            },
        options(route) {
              let str;
              route = route.route;
              const obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled, animation: str };
              str = route.params.animation;
              if (str == null) {
                str = "slide_from_bottom";
              }
              let str2 = "transparentModal";
              const tmp = closure_1(homeIndicatorStore[40]);
              if ("card" !== route.params.presentation) {
                let str3 = route.params.presentation;
                if (str3 == null) {
                  str3 = "transparentModal";
                }
                str2 = str3;
              }
              const merged = Object.assign(tmp({ presentation: str2 }));
              return obj;
            },
        getComponent: getModalComponent
      };
      const tmp78 = closure_10(closure_16.Screen, obj18);
      cResult[22] = tmp78;
      tmp75 = tmp78;
    } else {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    if (cResult[23] === tmp50) {
      class R {
        constructor() {
          return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
        }
      }
    }
    const obj19 = { profile: tmp(tmp2[41]).Profiles.StackNavigator, children: closure_11(closure_16.Navigator, obj20) };
    obj20 = { id: "root", screenOptions: tmp22, children: items1 };
    items1 = [tmp24, tmp26, tmp30, tmp34, tmp35, tmp43, tmp50, tmp54, tmp59, tmp63, tmp67, tmp71, tmp75];
    const tmp7Result = require("StartupProfiler");
    cResult[23] = tmp50;
    cResult[24] = tmp22;
    cResult[25] = tmp24;
    cResult[26] = closure_10(tmp7Result, obj19);
    const tmp84 = closure_10(tmp7Result, obj19);
  }
  const obj21 = {
    name: "main",
    options,
    children() {
      let items;
      let items1;
      let obj = {
        id: "tabs",
        screenOptions(navigation) {
          let str;
          navigation = navigation.navigation;
          if (closure_1_15) {
            str = "default";
          }
          const obj = { orientation: str, headerShown: false };
          const obj2 = first(homeIndicatorStore[32]);
          const merged = Object.assign(obj2.getDefaultStackHeaderProps(navigation));
          const merged1 = Object.assign(closure_1_7);
          return obj;
        },
        children: items
      };
      let obj2 = { name: "tabs", getComponent: getTabsComponent, options };
      const Navigator = Screen.Navigator;
      items = [authStore(Screen.Screen, obj2), ];
      let animation;
      const tmp2 = authStore2;
      const tmp3 = Screen;
      const tmp4 = authStore;
      if (accessibilityNativeStackOptions != null) {
        animation = accessibilityNativeStackOptions.animation;
      }
      if (animation == null) {
        animation = first;
      }
      if (animation === undefined) {
        animation = closure_7.animation;
      }
      const obj3 = { children: items1 };
      const obj4 = {
        name: "channel",
        getId,
        listeners: { beforeRemove },
        options(arg0) {
          let route;
          ({ navigation, route } = arg0);
          const obj = { headerShown: true, header: closure_2_0(closure_2_2[32]).renderHeader, animation };
          const obj2 = closure_2_0(closure_2_2[32]);
          const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
          const merged1 = Object.assign(animation2);
          return obj;
        },
        getComponent: getChannelComponent
      };
      items[1] = tmp4(tmp3.Screen, obj4);
      items1 = [unpackModuleId(Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      return unpackModuleId(tmp2, obj3);
    }
  };
  const tmp25 = closure_10(closure_16.Screen, obj21);
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = first;
  cResult[9] = tmp25;
}) : (function StackNavigator() {
  let accessibilityNativeStackOptions;
  let closure_3;
  let first;
  let getComponent;
  let getComponent2;
  let homeIndicatorStore;
  let stateFromStores;
  let styles;
  let tmp = closure_14();
  _require = tmp;
  let obj = require("MainShared");
  const screenReaderEnabled = obj.useScreenReaderEnabled();
  let obj2 = require("MainShared");
  const appKeyCommands = obj2.useAppKeyCommands();
  let tmp4 = stateFromStores(first[34])();
  let obj3 = require("useStateFromStores");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = obj3.useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(closure_7.animation);
  let obj4 = require("HomeIndicator");
  homeIndicatorStore = obj4.useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[37])().isChatBesideChannelList;
  let obj5 = require("Navigator");
  accessibilityNativeStackOptions = obj5.useAccessibilityNativeStackOptions();
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    let Navigator;
    let animation2;
    let autoHideHomeIndicator;
    let fn;
    let items1;
    let items2;
    let obj12;
    let obj16;
    let obj17;
    let obj2;
    let obj4;
    let obj9;
    let tmp6;
    let tmp7;
    let tmp = authStore;
    let tmp2 = importDefault;
    let tmp3 = dependencyMap;
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: tmp6(tmp7, obj2) };
    let tmp4 = StartupProfilerDefault;
    tmp6 = unpackModuleId;
    obj2 = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: items2 };
    tmp7 = VisualEffectViewTargetDefault;
    let tmpResult = null;
    const tmp8 = LaunchPadContainerDefault;
    const tmp9 = ParentalConsentWarningBannerDefault;
    const tmp10 = GlobalStatusIndicatorDefault;
    if (stateFromStores) {
      tmpResult = tmp(closure_21, {});
    }
    let items = [tmpResult, ];
    let obj3 = { profile: StartupProfiler.Profiles.StackNavigator, children: tmp6(Navigator, obj4) };
    obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator };
      },
      children: items1
    };
    Navigator = closure_16.Navigator;
    items1 = [, , , , , , , , , , , , ];
    const obj5 = {
      name: "main",
      options,
      children() {
        let constants2;
        let items;
        let items1;
        let obj = {
          id: "tabs",
          screenOptions(navigation) {
            let str;
            navigation = navigation.navigation;
            if (closure_1_15) {
              str = "default";
            }
            const obj = { orientation: str, headerShown: false };
            const obj2 = closure_1_0(closure_1_2[32]);
            const merged = Object.assign(obj2.getDefaultStackHeaderProps(navigation));
            const merged1 = Object.assign(animation2);
            return obj;
          },
          children: items
        };
        let obj2 = { name: "tabs", getComponent, options };
        const Navigator = Screen.Navigator;
        items = [closure_2_10(Screen.Screen, obj2), ];
        animation = undefined;
        const tmp2 = closure_2_12;
        const tmp3 = Screen;
        const tmp4 = closure_2_10;
        if (animation != null) {
          animation = animation.animation;
        }
        if (animation == null) {
          animation = closure_1_2;
        }
        if (animation === undefined) {
          animation = closure_2_7.animation;
        }
        const obj3 = { children: items1 };
        const obj4 = {
          name: "channel",
          getId,
          listeners: { beforeRemove },
          options(arg0) {
            let route;
            ({ navigation, route } = arg0);
            const obj = { headerShown: true, header: closure_2_0(closure_2_2[32]).renderHeader, animation };
            const obj2 = closure_2_0(closure_2_2[32]);
            const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            return obj;
          },
          getComponent: getComponent2
        };
        items[1] = tmp4(tmp3.Screen, obj4);
        items1 = [tmp(Navigator, obj), styles(first[39]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        return closure_2_11(tmp2, obj3);
      }
    };
    const tmp2Result = StartupProfilerDefault;
    items1[0] = tmp(closure_16.Screen, obj5);
    const obj6 = { name: "search", getComponent: getSearchComponent };
    items1[1] = tmp(closure_16.Screen, obj6);
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(first[40])();
      }
    };
    items1[2] = tmp(closure_16.Screen, obj7);
    const obj8 = {
      name: "channel-secondary-view-chat",
      getComponent: getChannelSecondaryViewChatComponent,
      options() {
        return stateFromStores(first[40])();
      },
      listeners: obj9
    };
    obj9 = { beforeRemove: resetChatKeyboard };
    items1[3] = tmp(closure_16.Screen, obj8);
    const obj10 = { name: "auth", getComponent: getAuthComponent, options };
    items1[4] = tmp(closure_16.Screen, obj10);
    Screen = closure_16.Screen;
    const obj11 = { name: "account-standing", getComponent: getAccountStanding, options: obj12 };
    obj12 = { presentation: "fullScreenModal", gestureEnabled: false };
    let merged = Object.assign(options);
    items1[5] = tmp(Screen, obj11);
    const obj13 = {
      name: "you",
      options() {
        let obj2;
        let obj4;
        const tmp2 = stateFromStores(first[40]);
        const obj = styles(first[9]);
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        } else {
          const tmp3Result = styles(first[8]);
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj2 = { presentation: "transparentModal" };
            }
          }
        }
        const obj3 = { contentStyle: obj4, animation: "slide_from_bottom" };
        const merged = Object.assign(tmp2(obj2));
        obj4 = undefined;
        const tmp3Result2 = styles(first[8]);
        if (tmp3Result2.isAndroid()) {
          if (isChatBesideChannelList) {
            obj4 = { backgroundColor: "transparent" };
          }
        }
        return obj3;
      },
      getComponent: getYouComponent
    };
    items1[6] = tmp(closure_16.Screen, obj13);
    const Screen2 = closure_16.Screen;
    const obj14 = {
      name: "friends",
      options(route) {
        let presentation;
        route = route.route;
        const params = route.params;
        let str;
        const tmp = stateFromStores(first[40]);
        if (params != null) {
          const params2 = params.params;
          if (params2 != null) {
            str = params2.presentation;
          }
        }
        if (str == null) {
          str = "modal";
        }
        const obj = { fullScreenGestureEnabled: "card" === presentation };
        const merged = Object.assign(tmp({ presentation: str }));
        const params3 = route.params;
        presentation = undefined;
        if (params3 != null) {
          const params4 = params3.params;
          if (params4 != null) {
            presentation = params4.presentation;
          }
        }
        return obj;
      },
      listeners: { beforeRemove: fn },
      getComponent: getFriendsNavigatorComponent
    };
    fn = undefined;
    const tmp5Result = PlatformUtils;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(() => closure_1_3(animation2.animation), closure_2_7.duration);
      };
    }
    const obj15 = { children: tmp(tmp9, obj16) };
    obj16 = { children: tmp6(tmp10, obj17) };
    obj17 = { children: items };
    items1[7] = tmp(Screen2, obj14);
    const obj18 = {
      name: "settings",
      options() {
        let obj2;
        const tmp = stateFromStores(first[40]);
        const obj = styles(first[9]);
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        }
        const obj3 = { animation: "slide_from_bottom", fullScreenGestureEnabled: true };
        const merged = Object.assign(tmp(obj2));
        return obj3;
      },
      getComponent: getSettingsComponent
    };
    items1[8] = tmp(closure_16.Screen, obj18);
    const obj19 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(first[40])({ lockOrientation: false });
      }
    };
    items1[9] = tmp(closure_16.Screen, obj19);
    const obj20 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[10] = tmp(closure_16.Screen, obj20);
    const obj21 = { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent };
    items1[11] = tmp(closure_16.Screen, obj21);
    const obj22 = {
      name: "modal",
      getId(params) {
        return params.params.modal.key;
      },
      options(route) {
        let str;
        route = route.route;
        const obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled, animation: str };
        str = route.params.animation;
        if (str == null) {
          str = "slide_from_bottom";
        }
        let str2 = "transparentModal";
        const tmp = stateFromStores(first[40]);
        if ("card" !== route.params.presentation) {
          let str3 = route.params.presentation;
          if (str3 == null) {
            str3 = "transparentModal";
          }
          str2 = str3;
        }
        const merged = Object.assign(tmp({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    };
    items1[12] = tmp(closure_16.Screen, obj22);
    items[1] = tmp(tmp2Result, obj3);
    items2 = [tmp(tmp8, obj15), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    return tmp(tmp4, obj);
  }, items1);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default memoResult;
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
