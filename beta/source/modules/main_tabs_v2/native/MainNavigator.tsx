// Module ID: 15566
// Function ID: 15567
// Name: MainNavigator
// Dependencies: [32, 19, 17, 502, 15567, 1086, 21, 4837, 1370, 4813, 13993, 15568, 15569, 15629, 558, 576, 16565, 16572, 16575, 16603, 16631, 7342, 16689, 16692, 16696, 16698, 16727, 16732, 4703, 1489, 1617, 5017, 7292, 16733, 16789, 573, 8836, 4697, 6421, 5839, 16792, 10428, 11315, 17022, 17053, 9383, 16619, 2]
// Exports: getChannelScreen

// Module 15566 (MainNavigator)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import DeviceUtils from "DeviceUtils" /* 4813 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 9383 */;
import StartupProfiler from "StartupProfiler" /* 11315 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 13993 */;
import NavigationConstants from "NavigationConstants" /* 15567 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 15568 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 16619 */;
import AppComponents from "AppComponents" /* 16792 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 17022 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 17053 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import PlatformUtils_mod from "PlatformUtils" /* 1370 */;
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
const getNavigationModalPresentationDefault = tmp2(10428);
const AutoAnalytics = tmp(16565);
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
function getMemberVerificationComponent() {
  return require("MemberVerificationScreen").default;
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
let Screen = createAccessibleNativeStackNavigatorDefault();
let Screen2 = createChatPanelNativeStackNavigatorDefault();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => authStore(AutoAnalytics.default, {}));
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
  return closure_10(Screen2.Screen, obj);
}
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let accessibilityNativeStackOptions;
  let closure_1;
  let first;
  let homeIndicatorStore;
  let isChatBesideChannelList;
  let sessionId;
  let tmp10;
  let tmp15;
  let tmp9;
  let tmp = first;
  let tmp2 = homeIndicatorStore;
  let obj = first(homeIndicatorStore[15]);
  const cResult = obj.c(33);
  const tmp4 = closure_14();
  let obj2 = first(homeIndicatorStore[33]);
  const screenReaderEnabled = obj2.useScreenReaderEnabled();
  let obj3 = first(homeIndicatorStore[33]);
  const appKeyCommands = obj3.useAppKeyCommands();
  require("useNativeThemeUpdater")();
  const tmp7 = importDefault;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    const fn = function l() {
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
  const tmpResult6 = tmp(tmp2[39]);
  const isMemberVerificationRouteDeprecated = tmpResult6.useIsMemberVerificationRouteDeprecated("MainNavigator");
  if (cResult[3] !== stateFromStores) {
    let tmp20 = null;
    if (stateFromStores) {
      tmp20 = closure_10(closure_21, {});
    }
    cResult[3] = stateFromStores;
    cResult[4] = tmp20;
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
  const tmp24 = cResult[7];
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  if (tmp24 === undefined) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  let obj4 = {
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
      const Navigator = Screen2.Navigator;
      items = [authStore(Screen2.Screen, obj2), , ];
      let tmp4Result = null;
      const tmp2 = closure_12;
      if (!isMemberVerificationRouteDeprecated) {
        const obj3 = {
          name: "member-verification",
          getId(params) {
              return params.params.guildId;
            },
          getComponent: getMemberVerificationComponent,
          options: { presentation: "transparentModal", animation: "slide_from_bottom" }
        };
        tmp4Result = tmp4(tmp3.Screen, obj3);
      }
      items[1] = tmp4Result;
      let animation;
      if (accessibilityNativeStackOptions != null) {
        animation = accessibilityNativeStackOptions.animation;
      }
      if (animation == null) {
        animation = first;
      }
      if (animation === undefined) {
        animation = closure_7.animation;
      }
      const obj4 = { children: items1 };
      const obj5 = {
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
      items[2] = authStore(Screen2.Screen, obj5);
      items1 = [unpackModuleId(Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      return unpackModuleId(tmp2, obj4);
    }
  };
  const tmp25 = closure_10(Screen.Screen, obj4);
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        return { headerShown: false, autoHideHomeIndicator: homeIndicatorStore };
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = first;
  cResult[9] = isMemberVerificationRouteDeprecated;
  cResult[10] = tmp25;
}) : (() => {
  let accessibilityNativeStackOptions;
  let closure_3;
  let first;
  let getComponent;
  let getComponent2;
  let getComponent3;
  let homeIndicatorStore;
  let isMemberVerificationRouteDeprecated;
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
  [first, _slicedToArray] = homeIndicatorStore.useState(isMemberVerificationRouteDeprecated.animation);
  let obj4 = require("HomeIndicator");
  homeIndicatorStore = obj4.useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[37])().isChatBesideChannelList;
  let obj5 = require("Navigator");
  accessibilityNativeStackOptions = obj5.useAccessibilityNativeStackOptions();
  let obj6 = require("MemberVerificationRouteExperiment");
  isMemberVerificationRouteDeprecated = obj6.useIsMemberVerificationRouteDeprecated("MainNavigator");
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList, isMemberVerificationRouteDeprecated];
  return homeIndicatorStore.useMemo(() => {
    let Navigator;
    let animation2;
    let autoHideHomeIndicator;
    let fn;
    let items1;
    let items2;
    let obj10;
    let obj14;
    let obj15;
    let obj2;
    let obj4;
    let tmp6;
    let tmp7;
    let tmp = authStore;
    let tmp2 = importDefault;
    const tmp3 = dependencyMap;
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: tmp6(tmp7, obj2) };
    const tmp4 = StartupProfilerDefault;
    tmp6 = unpackModuleId;
    obj2 = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: items2 };
    tmp7 = VisualEffectViewTargetDefault;
    const tmp8 = LaunchPadContainerDefault;
    let tmpResult = null;
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
    let obj5 = {
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
        const Navigator = Screen2.Navigator;
        items = [closure_2_10(Screen2.Screen, obj2), , ];
        let tmp4Result = null;
        const tmp2 = closure_2_12;
        if (!animation2) {
          const obj3 = {
            name: "member-verification",
            getId(params) {
                return params.params.guildId;
              },
            getComponent: getComponent3,
            options: { presentation: "transparentModal", animation: "slide_from_bottom" }
          };
          tmp4Result = tmp4(tmp3.Screen, obj3);
        }
        items[1] = tmp4Result;
        animation = undefined;
        if (animation != null) {
          animation = animation.animation;
        }
        if (animation == null) {
          animation = closure_1_2;
        }
        if (animation === undefined) {
          animation = isMemberVerificationRouteDeprecated.animation;
        }
        const obj4 = { children: items1 };
        const obj5 = {
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
        items[2] = closure_2_10(Screen2.Screen, obj5);
        items1 = [tmp(Navigator, obj), styles(first[40]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        return closure_2_11(tmp2, obj4);
      }
    };
    Navigator = closure_16.Navigator;
    const tmp2Result = StartupProfilerDefault;
    items1 = [tmp(closure_16.Screen, obj5), , , , , , , , , , , ];
    const obj6 = { name: "search", getComponent: getSearchComponent };
    items1[1] = tmp(closure_16.Screen, obj6);
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(first[41])();
      }
    };
    items1[2] = tmp(closure_16.Screen, obj7);
    const obj8 = { name: "auth", getComponent: getAuthComponent, options };
    items1[3] = tmp(closure_16.Screen, obj8);
    Screen = closure_16.Screen;
    const obj9 = { name: "account-standing", getComponent: getAccountStanding, options: obj10 };
    obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
    let merged = Object.assign(options);
    items1[4] = tmp(Screen, obj9);
    const obj11 = {
      name: "you",
      options() {
        let obj2;
        let obj4;
        const tmp2 = stateFromStores(first[41]);
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
    items1[5] = tmp(closure_16.Screen, obj11);
    Screen2 = closure_16.Screen;
    const obj12 = {
      name: "friends",
      options(route) {
        let presentation;
        route = route.route;
        const params = route.params;
        let str;
        const tmp = stateFromStores(first[41]);
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
        const timerId = setTimeout(() => closure_1_3(animation2.animation), isMemberVerificationRouteDeprecated.duration);
      };
    }
    const obj13 = { children: tmp(tmp9, obj14) };
    obj14 = { children: tmp6(tmp10, obj15) };
    obj15 = { children: items };
    items1[6] = tmp(Screen2, obj12);
    const obj16 = {
      name: "settings",
      options() {
        let obj2;
        const tmp = stateFromStores(first[41]);
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
    items1[7] = tmp(closure_16.Screen, obj16);
    const obj17 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(first[41])({ lockOrientation: false });
      }
    };
    items1[8] = tmp(closure_16.Screen, obj17);
    const obj18 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[9] = tmp(closure_16.Screen, obj18);
    const obj19 = { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent };
    items1[10] = tmp(closure_16.Screen, obj19);
    const obj20 = {
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
        const tmp = stateFromStores(first[41]);
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
    items1[11] = tmp(closure_16.Screen, obj20);
    items[1] = tmp(tmp2Result, obj3);
    items2 = [tmp(tmp8, obj13), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    return tmp(tmp4, obj);
  }, items1);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default memoResult;
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
