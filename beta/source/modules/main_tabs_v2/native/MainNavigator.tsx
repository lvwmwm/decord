// Module ID: 16274
// Function ID: 16275
// Name: MainNavigator
// Dependencies: [32, 19, 17, 502, 16275, 1078, 21, 4758, 1368, 4737, 14456, 16276, 16277, 16336, 558, 568, 17214, 17221, 17224, 17252, 17278, 8161, 17336, 17339, 17343, 17345, 17374, 17379, 4625, 1486, 1614, 4938, 8112, 17380, 17429, 565, 9648, 4619, 7246, 5745, 17432, 11230, 12087, 17663, 17694, 10185, 17268, 2]
// Exports: getChannelScreen

// Module 16274 (MainNavigator)
import c from "c" /* 568 */;
import PlatformUtils2 from "PlatformUtils" /* 1368 */;
import DeviceUtils from "DeviceUtils" /* 4737 */;
import GlobalStatusIndicatorDefault from "GlobalStatusIndicator" /* 10185 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 11230 */;
import StartupProfiler from "StartupProfiler" /* 12087 */;
import createAccessibleNativeStackNavigatorDefault from "createAccessibleNativeStackNavigator" /* 14456 */;
import createChatPanelNativeStackNavigatorDefault from "createChatPanelNativeStackNavigator" /* 16276 */;
import AutoAnalytics from "AutoAnalytics" /* 17214 */;
import VisualEffectViewTargetDefault from "VisualEffectViewTarget" /* 17268 */;
import AppComponents from "AppComponents" /* 17432 */;
import LaunchPadContainerDefault from "LaunchPadContainer" /* 17663 */;
import ParentalConsentWarningBannerDefault from "ParentalConsentWarningBanner" /* 17694 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;

require = fn;
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
const View = fn(17).View;
let closure_7 = fn(16275).StackNavigationAnimationSettings;
const Constants = fn(1078);
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const mainNavigator = "mainNavigator";
const createStyles = fn(4758);
let closure_14 = createStyles.createStyles({ flex: { flex: 1 } });
let PlatformUtils = fn(1368);
PlatformUtils = PlatformUtils.isIOS();
if (PlatformUtils) {
  PlatformUtils = fn(4737).getSystemVersionMajor() <= 15;
  let obj4 = fn(4737);
}
const Screen = createAccessibleNativeStackNavigatorDefault();
const Screen2 = createChatPanelNativeStackNavigatorDefault();
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AutoAnalytics;
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = v65535(first.default, {});
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => v65535(AutoAnalytics.default, {}));
const options = Object.freeze({ animation: "none" });
ReactCompilerGating = fn(558);
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  return closure_10(Screen2.Screen, {
    name: "channel",
    getId(params) {
      return params.params.screenKey;
    },
    listeners: {
      beforeRemove(data) {
        if (null != obj.getBestActiveInput()) {
          const obj2 = { type: tmp(1614).KeyboardTypes.SYSTEM };
          tmp(1486).setKeyboardType(obj2);
          const tmpResult = tmp(1486);
        }
        data = data.data;
        let type;
        if (data != null) {
          const action = data.action;
          if (action != null) {
            type = action.type;
          }
        }
        obj = animation(4625);
        if ("GO_BACK" === type) {
          let SWIPE = constants2.BACK_BUTTON;
        } else {
          SWIPE = constants2.SWIPE;
        }
        closure_1_1(4938).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
      }
    },
    options(arg0) {
      const obj = { headerShown: true, header: styles(8112).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(styles(8112).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(animation2);
      obj.animation = animation;
      return obj;
    },
    getComponent: getChannelComponent
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(homeIndicatorStore[15]).c(33);
  closure_14();
  let obj = first(homeIndicatorStore[15]);
  const screenReaderEnabled = first(homeIndicatorStore[33]).useScreenReaderEnabled();
  let obj2 = first(homeIndicatorStore[33]);
  const appKeyCommands = first(homeIndicatorStore[33]).useAppKeyCommands();
  require("useNativeThemeUpdater")();
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
  let obj3 = first(homeIndicatorStore[33]);
  const tmp7 = importDefault;
  const stateFromStores = first(homeIndicatorStore[35]).useStateFromStores(tmp9, tmp10);
  const tmp13 = isChatBesideChannelList(accessibilityNativeStackOptions.useState(closure_7.animation), 2);
  first = tmp13[0];
  importDefault = tmp13[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(autoHideHomeIndicator) {
      return autoHideHomeIndicator.autoHideHomeIndicator;
    };
    cResult[2] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[2];
  }
  const tmpResult = first(homeIndicatorStore[35]);
  homeIndicatorStore = first(homeIndicatorStore[36]).useHomeIndicatorStore(tmp15);
  isChatBesideChannelList = tmp7(tmp2[37])().isChatBesideChannelList;
  const tmpResult4 = first(homeIndicatorStore[36]);
  accessibilityNativeStackOptions = first(homeIndicatorStore[38]).useAccessibilityNativeStackOptions();
  const tmpResult5 = first(homeIndicatorStore[38]);
  const isMemberVerificationRouteDeprecated = first(homeIndicatorStore[39]).useIsMemberVerificationRouteDeprecated("MainNavigator");
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
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
    cResult[5] = homeIndicatorStore;
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  if (cResult[7] === undefined) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  let obj4 = {
    name: "main",
    options,
    children() {
      const obj = {
        id: "tabs",
        screenOptions(navigation) {
          let str;
          if (closure_1_15) {
            str = "default";
          }
          const merged = Object.assign(animation(homeIndicatorStore[32]).getDefaultStackHeaderProps(navigation.navigation));
          const merged1 = Object.assign(closure_1_7);
          return { orientation: str, headerShown: false };
        },
        children: null
      };
      const items = [v65535(closure_17.Screen, { name: "tabs", getComponent: getTabsComponent, options }), , ];
      let tmp4Result = null;
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
      const obj4 = { children: null };
      items[2] = v65535(closure_17.Screen, {
        name: "channel",
        getId(params) {
          return params.params.screenKey;
        },
        listeners: {
          beforeRemove(data) {
            if (null != obj.getBestActiveInput()) {
              const obj2 = { type: tmp(1614).KeyboardTypes.SYSTEM };
              tmp(1486).setKeyboardType(obj2);
              const tmpResult = tmp(1486);
            }
            data = data.data;
            let type;
            if (data != null) {
              const action = data.action;
              if (action != null) {
                type = action.type;
              }
            }
            obj = animation(4625);
            if ("GO_BACK" === type) {
              let SWIPE = constants2.BACK_BUTTON;
            } else {
              SWIPE = constants2.SWIPE;
            }
            closure_1_1(4938).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
          }
        },
        options(arg0) {
          const obj = { headerShown: true, header: styles(8112).renderHeader };
          ({ navigation, route } = arg0);
          const merged = Object.assign(styles(8112).getDefaultChannelStackHeaderProps(navigation, route));
          const merged1 = Object.assign(animation2);
          obj.animation = animation;
          return obj;
        },
        getComponent: getChannelComponent
      });
      obj.children = items;
      const items1 = [closure_2_11(closure_17.Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      obj4.children = items1;
      return closure_2_11(__initData, obj4);
    }
  };
  const tmpResult6 = first(homeIndicatorStore[39]);
  if (accessibilityNativeStackOptions != null) {
    class R {
      constructor() {
        obj = { headerShown: false, autoHideHomeIndicator: closure_2 };
        return obj;
      }
    }
  }
  cResult[7] = undefined;
  cResult[8] = first;
  cResult[9] = isMemberVerificationRouteDeprecated;
  cResult[10] = closure_10(Screen.Screen, {
    name: "main",
    options,
    children() {
      const obj = {
        id: "tabs",
        screenOptions(navigation) {
          let str;
          if (closure_1_15) {
            str = "default";
          }
          const merged = Object.assign(animation(homeIndicatorStore[32]).getDefaultStackHeaderProps(navigation.navigation));
          const merged1 = Object.assign(closure_1_7);
          return { orientation: str, headerShown: false };
        },
        children: null
      };
      const items = [v65535(closure_17.Screen, { name: "tabs", getComponent: getTabsComponent, options }), , ];
      let tmp4Result = null;
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
      const obj4 = { children: null };
      items[2] = v65535(closure_17.Screen, {
        name: "channel",
        getId(params) {
          return params.params.screenKey;
        },
        listeners: {
          beforeRemove(data) {
            if (null != obj.getBestActiveInput()) {
              const obj2 = { type: tmp(1614).KeyboardTypes.SYSTEM };
              tmp(1486).setKeyboardType(obj2);
              const tmpResult = tmp(1486);
            }
            data = data.data;
            let type;
            if (data != null) {
              const action = data.action;
              if (action != null) {
                type = action.type;
              }
            }
            obj = animation(4625);
            if ("GO_BACK" === type) {
              let SWIPE = constants2.BACK_BUTTON;
            } else {
              SWIPE = constants2.SWIPE;
            }
            closure_1_1(4938).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
          }
        },
        options(arg0) {
          const obj = { headerShown: true, header: styles(8112).renderHeader };
          ({ navigation, route } = arg0);
          const merged = Object.assign(styles(8112).getDefaultChannelStackHeaderProps(navigation, route));
          const merged1 = Object.assign(animation2);
          obj.animation = animation;
          return obj;
        },
        getComponent: getChannelComponent
      });
      obj.children = items;
      const items1 = [closure_2_11(closure_17.Navigator, obj), AppComponents.APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
      obj4.children = items1;
      return closure_2_11(__initData, obj4);
    }
  });
}) : (() => {
  let tmp = closure_14();
  _require = tmp;
  const screenReaderEnabled = require("MainShared").useScreenReaderEnabled();
  let obj = require("MainShared");
  const appKeyCommands = require("MainShared").useAppKeyCommands();
  stateFromStores(first[34])();
  let obj2 = require("MainShared");
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require("useStateFromStores").useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  [first, _slicedToArray] = homeIndicatorStore.useState(isMemberVerificationRouteDeprecated.animation);
  let obj3 = require("useStateFromStores");
  homeIndicatorStore = require("HomeIndicator").useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[37])().isChatBesideChannelList;
  let obj4 = require("HomeIndicator");
  accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
  let obj5 = require("Navigator");
  isMemberVerificationRouteDeprecated = require("MemberVerificationRouteExperiment").useIsMemberVerificationRouteDeprecated("MainNavigator");
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList, isMemberVerificationRouteDeprecated];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: StartupProfiler.Profiles.MainNavigator, children: null };
    let obj2 = { style: styles.flex, nativeID: mainNavigator, collapsableChildren: false, children: null };
    const tmp4 = StartupProfilerDefault;
    const tmp7 = VisualEffectViewTargetDefault;
    const tmp8 = LaunchPadContainerDefault;
    let tmpResult = null;
    const tmp9 = ParentalConsentWarningBannerDefault;
    if (stateFromStores) {
      tmpResult = tmp(closure_21, {});
    }
    let items = [tmpResult, ];
    let obj3 = { profile: null, children: null };
    const tmp10 = GlobalStatusIndicatorDefault;
    obj3.profile = StartupProfiler.Profiles.StackNavigator;
    let obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator };
      },
      children: null
    };
    let items1 = [
      v65535(closure_16.Screen, {
        name: "main",
        options,
        children() {
          let obj = {
            id: "tabs",
            screenOptions(navigation) {
              let str;
              if (closure_1_15) {
                str = "default";
              }
              const merged = Object.assign(animation(8112).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(animation2);
              return { orientation: str, headerShown: false };
            },
            children: null
          };
          const items = [closure_2_10(Screen2.Screen, { name: "tabs", getComponent, options }), , ];
          let tmp4Result = null;
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
            animation = dependencyMap;
          }
          if (animation === undefined) {
            animation = isMemberVerificationRouteDeprecated.animation;
          }
          const obj4 = { children: null };
          items[2] = closure_2_10(Screen2.Screen, {
            name: "channel",
            getId(params) {
              return params.params.screenKey;
            },
            listeners: {
              beforeRemove(data) {
                if (null != obj.getBestActiveInput()) {
                  const obj2 = { type: tmp(1614).KeyboardTypes.SYSTEM };
                  tmp(1486).setKeyboardType(obj2);
                  const tmpResult = tmp(1486);
                }
                data = data.data;
                let type;
                if (data != null) {
                  const action = data.action;
                  if (action != null) {
                    type = action.type;
                  }
                }
                obj = animation(4625);
                if ("GO_BACK" === type) {
                  let SWIPE = constants2.BACK_BUTTON;
                } else {
                  SWIPE = constants2.SWIPE;
                }
                closure_1_1(4938).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
              }
            },
            options(arg0) {
              const obj = { headerShown: true, header: styles(8112).renderHeader };
              ({ navigation, route } = arg0);
              const merged = Object.assign(styles(8112).getDefaultChannelStackHeaderProps(navigation, route));
              const merged1 = Object.assign(animation2);
              obj.animation = animation;
              return obj;
            },
            getComponent: getComponent2
          });
          obj.children = items;
          const items1 = [closure_2_11(Screen2.Navigator, obj), closure_0(first[40]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj4.children = items1;
          return closure_2_11(closure_2_12, obj4);
        }
      }),
      v65535(closure_16.Screen, { name: "search", getComponent: getSearchComponent }),
      v65535(closure_16.Screen, {
        name: "conversations",
        getComponent: getConversationsComponent,
        options() {
          return stateFromStores(11230)();
        }
      }),
      v65535(closure_16.Screen, { name: "auth", getComponent: getAuthComponent, options }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj9 = { name: "account-standing", getComponent: getAccountStanding, options: null };
    let merged = Object.assign(options);
    obj9.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = v65535(closure_16.Screen, obj9);
    items1[5] = v65535(closure_16.Screen, {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[41]);
        if (obj.isIpadOS()) {
          let obj2 = { presentation: "modal" };
        } else {
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj2 = { presentation: "transparentModal" };
            }
          }
          tmp3Result = tmp3(tmp[8]);
        }
        const obj3 = {};
        const merged = Object.assign(tmp2(obj2));
        obj = closure_0(first[9]);
        let obj4;
        if (tmp3Result2.isAndroid()) {
          if (isChatBesideChannelList) {
            obj4 = { backgroundColor: "transparent" };
          }
        }
        obj3.contentStyle = obj4;
        obj3.animation = "slide_from_bottom";
        return obj3;
      },
      getComponent: getYouComponent
    });
    const obj12 = {
      name: "friends",
      options(route) {
        route = route.route;
        const params = route.params;
        let str;
        if (params != null) {
          const params2 = params.params;
          if (params2 != null) {
            str = params2.presentation;
          }
        }
        if (str == null) {
          str = "modal";
        }
        const obj = {};
        const merged = Object.assign(stateFromStores(11230)({ presentation: str }));
        const params3 = route.params;
        let presentation;
        if (params3 != null) {
          const params4 = params3.params;
          if (params4 != null) {
            presentation = params4.presentation;
          }
        }
        obj.fullScreenGestureEnabled = "card" === presentation;
        return obj;
      },
      listeners: null,
      getComponent: null
    };
    const obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj11 = {
      name: "you",
      options() {
        const tmp2 = stateFromStores(first[41]);
        if (obj.isIpadOS()) {
          let obj2 = { presentation: "modal" };
        } else {
          if (tmp3Result.isAndroid()) {
            if (isChatBesideChannelList) {
              obj2 = { presentation: "transparentModal" };
            }
          }
          tmp3Result = tmp3(tmp[8]);
        }
        const obj3 = {};
        const merged = Object.assign(tmp2(obj2));
        obj = closure_0(first[9]);
        let obj4;
        if (tmp3Result2.isAndroid()) {
          if (isChatBesideChannelList) {
            obj4 = { backgroundColor: "transparent" };
          }
        }
        obj3.contentStyle = obj4;
        obj3.animation = "slide_from_bottom";
        return obj3;
      },
      getComponent: getYouComponent
    };
    const obj5 = {
      name: "main",
      options,
      children() {
        let obj = {
          id: "tabs",
          screenOptions(navigation) {
            let str;
            if (closure_1_15) {
              str = "default";
            }
            const merged = Object.assign(animation(8112).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(animation2);
            return { orientation: str, headerShown: false };
          },
          children: null
        };
        const items = [closure_2_10(Screen2.Screen, { name: "tabs", getComponent, options }), , ];
        let tmp4Result = null;
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
          animation = dependencyMap;
        }
        if (animation === undefined) {
          animation = isMemberVerificationRouteDeprecated.animation;
        }
        const obj4 = { children: null };
        items[2] = closure_2_10(Screen2.Screen, {
          name: "channel",
          getId(params) {
            return params.params.screenKey;
          },
          listeners: {
            beforeRemove(data) {
              if (null != obj.getBestActiveInput()) {
                const obj2 = { type: tmp(1614).KeyboardTypes.SYSTEM };
                tmp(1486).setKeyboardType(obj2);
                const tmpResult = tmp(1486);
              }
              data = data.data;
              let type;
              if (data != null) {
                const action = data.action;
                if (action != null) {
                  type = action.type;
                }
              }
              obj = animation(4625);
              if ("GO_BACK" === type) {
                let SWIPE = constants2.BACK_BUTTON;
              } else {
                SWIPE = constants2.SWIPE;
              }
              closure_1_1(4938).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, { source: SWIPE });
            }
          },
          options(arg0) {
            const obj = { headerShown: true, header: styles(8112).renderHeader };
            ({ navigation, route } = arg0);
            const merged = Object.assign(styles(8112).getDefaultChannelStackHeaderProps(navigation, route));
            const merged1 = Object.assign(animation2);
            obj.animation = animation;
            return obj;
          },
          getComponent: getComponent2
        });
        obj.children = items;
        const items1 = [closure_2_11(Screen2.Navigator, obj), closure_0(first[40]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj4.children = items1;
        return closure_2_11(closure_2_12, obj4);
      }
    };
    const obj6 = { name: "search", getComponent: getSearchComponent };
    const obj7 = {
      name: "conversations",
      getComponent: getConversationsComponent,
      options() {
        return stateFromStores(11230)();
      }
    };
    const obj8 = { name: "auth", getComponent: getAuthComponent, options };
    const tmp2Result = StartupProfilerDefault;
    let fn;
    if (!tmp5Result.isAndroid()) {
      fn = () => {
        closure_1_3("none");
        const timerId = setTimeout(() => closure_1_3(animation2.animation), isMemberVerificationRouteDeprecated.duration);
      };
    }
    const obj13 = { children: null };
    const obj14 = { children: null };
    const obj15 = { children: null };
    obj12.listeners = { beforeRemove: fn };
    obj12.getComponent = getFriendsNavigatorComponent;
    items1[6] = v65535(closure_16.Screen, obj12);
    items1[7] = v65535(closure_16.Screen, {
      name: "settings",
      options() {
        const tmp = stateFromStores(11230);
        let obj2;
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        }
        const obj3 = {};
        const merged = Object.assign(tmp(obj2));
        obj3.animation = "slide_from_bottom";
        obj3.fullScreenGestureEnabled = true;
        return obj3;
      },
      getComponent: getSettingsComponent
    });
    items1[8] = v65535(closure_16.Screen, {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(11230)({ lockOrientation: false });
      }
    });
    const obj16 = {
      name: "settings",
      options() {
        const tmp = stateFromStores(11230);
        let obj2;
        if (obj.isIpadOS()) {
          obj2 = { presentation: "modal" };
        }
        const obj3 = {};
        const merged = Object.assign(tmp(obj2));
        obj3.animation = "slide_from_bottom";
        obj3.fullScreenGestureEnabled = true;
        return obj3;
      },
      getComponent: getSettingsComponent
    };
    const obj17 = {
      name: "sidebar",
      getComponent: getChannelDetailsComponent,
      options() {
        return stateFromStores(11230)({ lockOrientation: false });
      }
    };
    tmp5Result = PlatformUtils2;
    items1[9] = v65535(closure_16.Screen, { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent });
    const obj18 = { name: "message-requests", options: getNavigationModalPresentationDefault(), getComponent: getMessageRequestsComponent };
    items1[10] = v65535(closure_16.Screen, { name: "context-menu-commands", options: getNavigationModalPresentationDefault(), getComponent: getContextMenuCommandNavigatorComponent });
    items1[11] = v65535(closure_16.Screen, {
      name: "modal",
      getId(params) {
        return params.params.modal.key;
      },
      options(route) {
        route = route.route;
        const obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled, animation: null };
        let str = route.params.animation;
        if (str == null) {
          str = "slide_from_bottom";
        }
        obj.animation = str;
        let str2 = "transparentModal";
        if ("card" !== route.params.presentation) {
          let str3 = route.params.presentation;
          if (str3 == null) {
            str3 = "transparentModal";
          }
          str2 = str3;
        }
        const merged = Object.assign(stateFromStores(11230)({ presentation: str2 }));
        return obj;
      },
      getComponent: getModalComponent
    });
    obj4.children = items1;
    obj3.children = closure_2_11(closure_16.Navigator, obj4);
    items[1] = v65535(tmp2Result, obj3);
    obj15.children = items;
    obj14.children = closure_2_11(tmp10, obj15);
    obj13.children = v65535(tmp9, obj14);
    const items2 = [v65535(tmp8, obj13), AppComponents.APP_EXTRA_COMPONENTS, AppComponents.APP_EXTRA_COMPONENTS_NEVER_FREEZE, AppComponents.APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj2.children = items2;
    obj.children = closure_2_11(tmp7, obj2);
    return v65535(tmp4, obj);
  }, items1);
}));
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
