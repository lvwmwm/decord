// Module ID: 14726
// Function ID: 112262
// Name: getAuthComponent
// Dependencies: [57, 31, 27, 1194, 14727, 653, 33, 4130, 477, 4110, 13085, 14728, 14729, 14787, 15425, 15430, 15433, 15470, 15494, 9286, 15548, 15551, 15555, 15557, 15586, 15591, 3989, 1454, 1555, 4324, 9122, 15592, 15638, 624, 10537, 3984, 5519, 10856, 15486, 15641, 15679, 10635, 15681, 10161, 2]

// Module 14726 (getAuthComponent)
import _slicedToArray from "_slicedToArray";
import importAllResult from "BurstReactionAnimationContainer";
import { View } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { StackNavigationAnimationSettings as closure_7 } from "StackNavigationAnimationSettings";
import ME from "ME";
import jsxProd from "defaultAreStatesEqual";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "get ActivityIndicator";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
let require = arg1;
function getAuthComponent() {
  return require(14729) /* getInitialAuthScreen */.default;
}
function getTabsComponent() {
  return require(14787).default;
}
function getChannelComponent() {
  return View;
}
function WrappedAutoAnalytics() {
  return callback2(require(15425) /* _isNativeReflectConstruct */.default, {});
}
function getMemberVerificationComponent() {
  return require(15430) /* Loading */.default;
}
function getFriendsNavigatorComponent() {
  return require(15433) /* RequestsSettingsModalButton */.default;
}
function getYouComponent() {
  return require(15470).default;
}
function getChannelDetailsComponent() {
  return require(15494) /* ConnectedCreateThreadHeaderButton */.default;
}
function getConversationsComponent() {
  return require(9286) /* HeaderWithBorder */.default;
}
function getSearchComponent() {
  return require(15548).default;
}
function getContextMenuCommandNavigatorComponent() {
  return require(15551) /* ContextMenuCommandNavigator */.default;
}
function getModalComponent() {
  return require(15555) /* Modal */.default;
}
function getMessageRequestsComponent() {
  return require(15557) /* MessageRequestsNavigator */.default;
}
function getSettingsComponent() {
  return require(15586) /* Settings */.default;
}
function getAccountStanding() {
  return require(15591) /* SuspendedUserSafetyHubPage */.default;
}
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  obj = {
    name: "channel",
    listeners: obj,
    options(arg0) {
      let navigation;
      let route;
      const obj = { headerShown: true, header: animation(outer1_2[30]).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(animation(outer1_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(outer1_7);
      obj["animation"] = animation;
      return obj;
    },
    getComponent: getChannelComponent
  };
  obj = {
    beforeRemove(data) {
      let obj = animation(outer1_2[26]);
      if (null != obj.getBestActiveInput()) {
        obj = { type: animation(outer1_2[28]).KeyboardTypes.SYSTEM };
        animation(outer1_2[27]).setKeyboardType(obj);
        const obj2 = animation(outer1_2[27]);
      }
      data = data.data;
      let type;
      if (null != data) {
        const action = data.action;
        if (null != action) {
          type = action.type;
        }
      }
      obj = {};
      if ("GO_BACK" === type) {
        let SWIPE = outer1_9.BACK_BUTTON;
      } else {
        SWIPE = outer1_9.SWIPE;
      }
      obj.source = SWIPE;
      outer1_1(outer1_2[29]).trackWithMetadata(outer1_8.CHANNEL_BACK_NAVIGATED, obj);
    }
  };
  return callback2(Screen.Screen, obj);
}
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ flex: { flex: 1 } });
set = set.isIOS();
if (set) {
  set = require("getSystemVersion").getSystemVersionMajor() <= 15;
  let obj4 = require("getSystemVersion");
}
let closure_15 = require("useAccessibilityPatchedDescriptors")();
let closure_16 = require("navigatorFactory")();
let closure_17 = Object.freeze({ animation: "none" });
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default importAllResult.memo(function StackNavigator() {
  let tmp = callback3();
  const require = tmp;
  const screenReaderEnabled = require(first[31]).useScreenReaderEnabled();
  let obj = require(first[31]);
  const appKeyCommands = require(first[31]).useAppKeyCommands();
  stateFromStores(first[32])();
  let obj2 = require(first[31]);
  let items = [accessibilityNativeStackOptions];
  stateFromStores = require(first[33]).useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  let tmp6 = callback(homeIndicatorStore.useState(closure_7.animation), 2);
  first = tmp6[0];
  callback = tmp6[1];
  let obj3 = require(first[33]);
  homeIndicatorStore = require(first[34]).useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = stateFromStores(first[35])().isChatBesideChannelList;
  let obj4 = require(first[34]);
  accessibilityNativeStackOptions = require(first[36]).useAccessibilityNativeStackOptions();
  let items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: outer1_10(first[37]).Profiles.MainNavigator };
    obj = { style: outer1_10.flex, nativeID: "mainNavigator", collapsableChildren: false };
    let tmp2 = stateFromStores(first[37]);
    obj = {};
    let tmp4 = stateFromStores(first[38]);
    const tmp5 = outer1_10;
    let obj1 = {};
    const tmp6 = stateFromStores(first[39]);
    let tmp7 = outer1_10;
    const obj2 = {};
    let tmp10 = null;
    const tmp8 = stateFromStores(first[40]);
    if (stateFromStores) {
      tmp10 = outer1_10(outer1_21, {});
    }
    let items = [tmp10, ];
    let obj3 = {};
    const tmp13 = outer1_10;
    const tmp9 = stateFromStores(first[41]);
    obj3.profile = outer1_10(first[37]).Profiles.StackNavigator;
    const obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator: outer1_4 };
      }
    };
    let items1 = [
      outer1_10(outer1_15.Screen, {
        name: "main",
        options: outer1_17,
        children() {
          let obj = {};
          obj = {
            id: "tabs",
            screenOptions(navigation) {
              const obj = {};
              let str;
              if (outer3_14) {
                str = "default";
              }
              obj.orientation = str;
              obj.headerShown = false;
              const merged = Object.assign(callback(first[30]).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(outer3_7);
              return obj;
            }
          };
          obj = { name: "tabs", getComponent: outer2_19, options: outer2_17 };
          const items = [outer2_10(outer2_16.Screen, obj), outer2_10(outer2_16.Screen, { name: "member-verification", getComponent: outer2_22, options: { presentation: "transparentModal", animation: "slide_from_bottom" } }), ];
          let animation;
          if (null != outer1_6) {
            animation = outer1_6.animation;
          }
          if (null == animation) {
            animation = outer1_2;
          }
          items[2] = outer2_33(animation);
          obj.children = items;
          const items1 = [outer2_11(outer2_16.Navigator, obj), callback(first[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj.children = items1;
          return outer2_11(outer2_12, obj);
        }
      }),
      outer1_10(outer1_15.Screen, { name: "search", getComponent: outer1_27 }),
      outer1_10(outer1_15.Screen, {
        name: "conversations",
        getComponent: outer1_26,
        options() {
          return stateFromStores(first[43])();
        }
      }),
      outer1_10(outer1_15.Screen, { name: "auth", getComponent: outer1_18, options: outer1_17 }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj9 = { name: "account-standing", getComponent: outer1_32 };
    let merged = Object.assign(outer1_17);
    obj9.options = { presentation: "fullScreenModal", gestureEnabled: false };
    items1[4] = outer1_10(outer1_15.Screen, obj9);
    items1[5] = outer1_10(outer1_15.Screen, {
      name: "you",
      options() {
        let obj = {};
        let obj1 = callback(first[9]);
        if (obj1.isIpadOS()) {
          obj = { presentation: "modal" };
          let tmp4 = obj;
        } else {
          if (obj3.isAndroid()) {
            if (outer1_5) {
              obj = { presentation: "transparentModal" };
              tmp4 = obj;
            }
          }
          obj3 = callback(first[8]);
        }
        const merged = Object.assign(stateFromStores(first[43])(tmp4));
        const tmp = stateFromStores(first[43]);
        let tmp7;
        if (obj6.isAndroid()) {
          if (outer1_5) {
            obj1 = { backgroundColor: "transparent" };
            tmp7 = obj1;
          }
        }
        obj["contentStyle"] = tmp7;
        obj["animation"] = "slide_from_bottom";
        return obj;
      },
      getComponent: outer1_24
    });
    const obj12 = {
      name: "friends",
      options(route) {
        route = route.route;
        let obj = {};
        obj = {};
        const params = route.params;
        let presentation;
        if (null != params) {
          const params2 = params.params;
          if (null != params2) {
            presentation = params2.presentation;
          }
        }
        let str = "modal";
        if (null != presentation) {
          str = presentation;
        }
        obj.presentation = str;
        const merged = Object.assign(stateFromStores(first[43])(obj));
        const params3 = route.params;
        let presentation1;
        if (null != params3) {
          const params4 = params3.params;
          if (null != params4) {
            presentation1 = params4.presentation;
          }
        }
        obj["fullScreenGestureEnabled"] = "card" === presentation1;
        return obj;
      }
    };
    const obj13 = {};
    let obj16 = tmp(first[8]);
    let fn;
    if (!obj16.isAndroid()) {
      fn = () => {
        outer1_3("none");
        const timerId = setTimeout(() => outer2_3(outer3_7.animation), outer2_7.duration);
      };
    }
    obj13.beforeRemove = fn;
    obj12.listeners = obj13;
    obj12.getComponent = outer1_23;
    items1[6] = outer1_10(outer1_15.Screen, obj12);
    items1[7] = outer1_10(outer1_15.Screen, {
      name: "settings",
      options() {
        let obj = {};
        const tmp = stateFromStores(first[43]);
        let tmp2;
        if (obj2.isIpadOS()) {
          obj = { presentation: "modal" };
          tmp2 = obj;
        }
        const merged = Object.assign(tmp(tmp2));
        obj["animation"] = "slide_from_bottom";
        obj["fullScreenGestureEnabled"] = true;
        return obj;
      },
      getComponent: outer1_31
    });
    items1[8] = outer1_10(outer1_15.Screen, {
      name: "sidebar",
      getComponent: outer1_25,
      options() {
        return stateFromStores(first[43])({ lockOrientation: false });
      }
    });
    obj16 = { name: "message-requests", options: stateFromStores(first[43])(), getComponent: outer1_30 };
    items1[9] = outer1_10(outer1_15.Screen, obj16);
    const obj10 = { presentation: "fullScreenModal", gestureEnabled: false };
    const obj11 = {
      name: "you",
      options() {
        let obj = {};
        let obj1 = callback(first[9]);
        if (obj1.isIpadOS()) {
          obj = { presentation: "modal" };
          let tmp4 = obj;
        } else {
          if (obj3.isAndroid()) {
            if (outer1_5) {
              obj = { presentation: "transparentModal" };
              tmp4 = obj;
            }
          }
          obj3 = callback(first[8]);
        }
        const merged = Object.assign(stateFromStores(first[43])(tmp4));
        const tmp = stateFromStores(first[43]);
        let tmp7;
        if (obj6.isAndroid()) {
          if (outer1_5) {
            obj1 = { backgroundColor: "transparent" };
            tmp7 = obj1;
          }
        }
        obj["contentStyle"] = tmp7;
        obj["animation"] = "slide_from_bottom";
        return obj;
      },
      getComponent: outer1_24
    };
    const obj14 = {
      name: "settings",
      options() {
        let obj = {};
        const tmp = stateFromStores(first[43]);
        let tmp2;
        if (obj2.isIpadOS()) {
          obj = { presentation: "modal" };
          tmp2 = obj;
        }
        const merged = Object.assign(tmp(tmp2));
        obj["animation"] = "slide_from_bottom";
        obj["fullScreenGestureEnabled"] = true;
        return obj;
      },
      getComponent: outer1_31
    };
    const obj15 = {
      name: "sidebar",
      getComponent: outer1_25,
      options() {
        return stateFromStores(first[43])({ lockOrientation: false });
      }
    };
    const obj5 = {
      name: "main",
      options: outer1_17,
      children() {
        let obj = {};
        obj = {
          id: "tabs",
          screenOptions(navigation) {
            const obj = {};
            let str;
            if (outer3_14) {
              str = "default";
            }
            obj.orientation = str;
            obj.headerShown = false;
            const merged = Object.assign(callback(first[30]).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(outer3_7);
            return obj;
          }
        };
        obj = { name: "tabs", getComponent: outer2_19, options: outer2_17 };
        const items = [outer2_10(outer2_16.Screen, obj), outer2_10(outer2_16.Screen, { name: "member-verification", getComponent: outer2_22, options: { presentation: "transparentModal", animation: "slide_from_bottom" } }), ];
        let animation;
        if (null != outer1_6) {
          animation = outer1_6.animation;
        }
        if (null == animation) {
          animation = outer1_2;
        }
        items[2] = outer2_33(animation);
        obj.children = items;
        const items1 = [outer2_11(outer2_16.Navigator, obj), callback(first[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj.children = items1;
        return outer2_11(outer2_12, obj);
      }
    };
    const obj6 = { name: "search", getComponent: outer1_27 };
    const obj7 = {
      name: "conversations",
      getComponent: outer1_26,
      options() {
        return stateFromStores(first[43])();
      }
    };
    const obj8 = { name: "auth", getComponent: outer1_18, options: outer1_17 };
    const tmp14 = stateFromStores(first[37]);
    const tmp15 = outer1_11;
    const tmp17 = outer1_10;
    items1[10] = outer1_10(outer1_15.Screen, { name: "context-menu-commands", options: stateFromStores(first[43])(), getComponent: outer1_28 });
    items1[11] = outer1_10(outer1_15.Screen, {
      name: "modal",
      options(route) {
        route = route.route;
        let obj = { fullScreenGestureEnabled: route.params.fullScreenGestureEnabled };
        const animation = route.params.animation;
        let str = "slide_from_bottom";
        if (null != animation) {
          str = animation;
        }
        obj.animation = str;
        obj = {};
        let str2 = "transparentModal";
        if ("card" !== route.params.presentation) {
          const presentation = route.params.presentation;
          str2 = "transparentModal";
          if (null != presentation) {
            str2 = presentation;
          }
        }
        obj.presentation = str2;
        const merged = Object.assign(stateFromStores(first[43])(obj));
        return obj;
      },
      getComponent: outer1_29
    });
    obj4.children = items1;
    obj3.children = tmp15(outer1_15.Navigator, obj4);
    items[1] = tmp13(tmp14, obj3);
    obj2.children = items;
    obj1.children = outer1_11(tmp9, obj2);
    obj.children = tmp7(tmp8, obj1);
    const items2 = [tmp5(tmp6, obj), outer1_10(first[42]).APP_EXTRA_COMPONENTS, outer1_10(first[42]).APP_EXTRA_COMPONENTS_NEVER_FREEZE, outer1_10(first[42]).APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj.children = items2;
    obj.children = outer1_11(tmp4, obj);
    return outer1_10(tmp2, obj);
  }, items1);
});
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
