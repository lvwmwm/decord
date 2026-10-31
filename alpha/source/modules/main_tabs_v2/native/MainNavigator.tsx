// Module ID: 17970
// Function ID: 17971
// Name: MainNavigator
// Dependencies: [32, 19, 17, 502, 17971, 1072, 21, 5014, 1375, 4971, 15867, 17972, 17973, 18039, 18814, 18821, 18853, 18879, 9855, 18945, 18946, 18949, 18953, 18955, 18984, 18990, 18991, 5207, 1495, 1623, 18992, 5760, 9812, 18996, 19054, 563, 11702, 5201, 7169, 11562, 18861, 19057, 19088, 11862, 19090, 10144, 2]
// Exports: getChannelScreen

// Module 17970 (MainNavigator)
import react_native from "react-native" /* 17 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1495 */;
import KeyboardTypes from "KeyboardTypes" /* 1623 */;
import DeviceUtils from "DeviceUtils" /* 4971 */;
import ChatInputUtils from "ChatInputUtils" /* 5207 */;
import StartupProfiler from "StartupProfiler" /* 11562 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 11862 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 15867 */;
import NavigationConstants from "NavigationConstants" /* 17971 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 17972 */;
import AutoAnalytics from "AutoAnalytics" /* 18814 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 18861 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 19057 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 19088 */;
import AppComponents from "AppComponents" /* 19090 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;
let _require;

let c10;
let c9;
let closure_12;
let metroImportAll;
let tmp2;
let unpackModuleId;
const getNavigationModalPresentationDefault = tmp2(10144);
function getId(params) {
  return params.params.screenKey;
}
function beforeRemove(data) {
  let SWIPE;
  const obj = closure_1_0(closure_1_2[27]);
  if (null != obj.getBestActiveInput()) {
    const obj2 = { type: closure_1_0(closure_1_2[29]).KeyboardTypes.SYSTEM };
    const setKeyboardType = closure_1_0(closure_1_2[28]).setKeyboardType;
    closure_1_0(closure_1_2[28]);
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
function WrappedAutoAnalytics() {
  return authStore(AutoAnalytics.default, {});
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
function getConjureHomeComponent() {
  return require("ConjureHomeScreen").default;
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
function getOrbsArcadeGameComponent() {
  return require("OrbsArcadeGameScreen").default;
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
let closure_16 = createAccessibleNativeStackNavigatorDefault();
let Screen = createChatPanelNativeStackNavigatorDefault();
let closure_30 = Object.freeze({ animation: "none" });
const memoResult = react.memo(function StackNavigator() {
  let accessibilityNativeStackOptions;
  let closure_3;
  let first;
  let getComponent;
  let getComponent2;
  let homeIndicatorStore;
  let options;
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
    let autoHideHomeIndicator;
    let fn;
    let items1;
    let items2;
    let obj12;
    let obj17;
    let obj18;
    let obj2;
    let obj24;
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
      tmpResult = tmp(WrappedAutoAnalytics, {});
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
    items1 = [, , , , , , , , , , , , , , ];
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
        items1 = [tmp(Navigator, obj), styles(first[44]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
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
        return stateFromStores(first[45])();
      }
    };
    items1[2] = tmp(closure_16.Screen, obj7);
    const obj8 = {
      name: "channel-secondary-view-chat",
      getComponent: getChannelSecondaryViewChatComponent,
      options() {
        return stateFromStores(first[45])();
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
    const obj13 = { name: "orbs-arcade-game", getComponent: getOrbsArcadeGameComponent, options: { presentation: "fullScreenModal", animation: "slide_from_bottom", gestureEnabled: false, orientation: "portrait" } };
    items1[6] = tmp(closure_16.Screen, obj13);
    const obj14 = {
      name: "you",
      options() {
        let obj2;
        let obj4;
        const tmp2 = stateFromStores(first[45]);
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
    items1[7] = tmp(closure_16.Screen, obj14);
    const Screen2 = closure_16.Screen;
    const obj15 = {
      name: "friends",
      options(route) {
        let presentation;
        route = route.route;
        const params = route.params;
        let str;
        const tmp = stateFromStores(first[45]);
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
    const obj16 = { children: tmp(tmp9, obj17) };
    obj17 = { children: tmp6(tmp10, obj18) };
    obj18 = { children: items };
    items1[8] = tmp(Screen2, obj15);
    const obj19 = {
      name: "settings",
      options() {
        let obj2;
        const tmp = stateFromStores(first[45]);
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
    items1[9] = tmp(closure_16.Screen, obj19);
    const obj20 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(first[45])({ lockOrientation: false });
      }
    };
    items1[10] = tmp(closure_16.Screen, obj20);
    const obj21 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[11] = tmp(closure_16.Screen, obj21);
    const obj22 = { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent };
    items1[12] = tmp(closure_16.Screen, obj22);
    const obj23 = { name: "conjure", options: obj24, getComponent: getConjureHomeComponent };
    const Screen3 = tmp14.Screen;
    obj24 = { gestureEnabled: true };
    let merged1 = Object.assign(animation2);
    items1[13] = tmp(Screen3, obj23);
    const obj25 = {
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
        const tmp = stateFromStores(first[45]);
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
    items1[14] = tmp(closure_16.Screen, obj25);
    items[1] = tmp(tmp2Result, obj3);
    items2 = [tmp(tmp8, obj16), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    return tmp(tmp4, obj);
  }, items1);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default memoResult;
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
