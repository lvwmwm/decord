// Module ID: 15564
// Function ID: 15565
// Name: MainNavigator
// Dependencies: [32, 19, 17, 502, 15565, 1074, 21, 4836, 1364, 4812, 13991, 15566, 15567, 15627, 16563, 16570, 16573, 16601, 16629, 7338, 16687, 16690, 16694, 16696, 16725, 16730, 4701, 1483, 1611, 5016, 7288, 16731, 16787, 563, 8841, 4695, 6421, 5838, 11027, 16617, 16790, 16821, 8965, 16823, 10386, 2]
// Exports: getChannelScreen

// Module 15564 (MainNavigator)
import react_native from "react-native" /* 17 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 8965 */;
import StartupProfiler from "StartupProfiler" /* 11027 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 13991 */;
import NavigationConstants from "NavigationConstants" /* 15565 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 15566 */;
import AutoAnalytics from "AutoAnalytics" /* 16563 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 16617 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 16790 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 16821 */;
import AppComponents from "AppComponents" /* 16823 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
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
const getNavigationModalPresentationDefault = tmp2(10386);
function getId(params) {
  return params.params.screenKey;
}
function beforeRemove(data) {
  let SWIPE;
  const obj = closure_1_0(closure_1_2[26]);
  if (null != obj.getBestActiveInput()) {
    const obj2 = { type: closure_1_0(closure_1_2[28]).KeyboardTypes.SYSTEM };
    const setKeyboardType = closure_1_0(closure_1_2[27]).setKeyboardType;
    closure_1_0(closure_1_2[27]);
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
  const trackWithMetadata = closure_1_1(closure_1_2[29]).trackWithMetadata;
  const CHANNEL_BACK_NAVIGATED = constants.CHANNEL_BACK_NAVIGATED;
  closure_1_1(closure_1_2[29]);
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
let animation = NavigationConstants.StackNavigationAnimationSettings;
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
  animation = arg0;
  if (arg0 === undefined) {
    animation = animation.animation;
  }
  const obj = {
    name: "channel",
    getId,
    listeners: { beforeRemove },
    options(arg0) {
      let route;
      ({ navigation, route } = arg0);
      const obj = { headerShown: true, header: closure_2_0(closure_2_2[30]).renderHeader, animation };
      const obj2 = closure_2_0(closure_2_2[30]);
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
  let getComponent3;
  let homeIndicatorStore;
  let isMemberVerificationRouteDeprecated;
  let options;
  let stateFromStores;
  let styles;
  let tmp = closure_14();
  _require = tmp;
  let obj = require("MainShared");
  const screenReaderEnabled = obj.useScreenReaderEnabled();
  let obj2 = require("MainShared");
  const appKeyCommands = obj2.useAppKeyCommands();
  let tmp4 = stateFromStores(first[32])();
  let obj3 = require("useStateFromStores");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = obj3.useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(isMemberVerificationRouteDeprecated.animation);
  let obj4 = require("HomeIndicator");
  homeIndicatorStore = obj4.useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[35])().isChatBesideChannelList;
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
            const obj2 = closure_1_0(closure_1_2[30]);
            const merged = Object.assign(obj2.getDefaultStackHeaderProps(navigation));
            const merged1 = Object.assign(animation2);
            return obj;
          },
          children: items
        };
        let obj2 = { name: "tabs", getComponent, options };
        const Navigator = Screen.Navigator;
        items = [closure_2_10(Screen.Screen, obj2), , ];
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
            const obj = { headerShown: true, header: closure_2_0(closure_2_2[30]).renderHeader, animation };
            const obj2 = closure_2_0(closure_2_2[30]);
            const merged = Object.assign(obj2.getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            return obj;
          },
          getComponent: getComponent2
        };
        items[2] = closure_2_10(Screen.Screen, obj5);
        items1 = [tmp(Navigator, obj), styles(first[43]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
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
        return stateFromStores(first[44])();
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
        const tmp2 = stateFromStores(first[44]);
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
    const Screen2 = closure_16.Screen;
    const obj12 = {
      name: "friends",
      options(route) {
        let presentation;
        route = route.route;
        const params = route.params;
        let str;
        const tmp = stateFromStores(first[44]);
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
        const tmp = stateFromStores(first[44]);
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
        return stateFromStores(first[44])({ lockOrientation: false });
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
        const tmp = stateFromStores(first[44]);
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
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default memoResult;
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
