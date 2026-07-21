// Module ID: 14603
// Function ID: 110055
// Name: getAuthComponent
// Dependencies: []

// Module 14603 (getAuthComponent)
function getAuthComponent() {
  return arg1(dependencyMap[12]).default;
}
function getTabsComponent() {
  return arg1(dependencyMap[13]).default;
}
function getChannelComponent() {
  return View;
}
function WrappedAutoAnalytics() {
  return callback2(arg1(dependencyMap[14]).default, {});
}
function getMemberVerificationComponent() {
  return arg1(dependencyMap[15]).default;
}
function getFriendsNavigatorComponent() {
  return arg1(dependencyMap[16]).default;
}
function getYouComponent() {
  return arg1(dependencyMap[17]).default;
}
function getChannelDetailsComponent() {
  return arg1(dependencyMap[18]).default;
}
function getConversationsComponent() {
  return arg1(dependencyMap[19]).default;
}
function getSearchComponent() {
  return arg1(dependencyMap[20]).default;
}
function getContextMenuCommandNavigatorComponent() {
  return arg1(dependencyMap[21]).default;
}
function getModalComponent() {
  return arg1(dependencyMap[22]).default;
}
function getMessageRequestsComponent() {
  return arg1(dependencyMap[23]).default;
}
function getSettingsComponent() {
  return arg1(dependencyMap[24]).default;
}
function getAccountStanding() {
  return arg1(dependencyMap[25]).default;
}
function getChannelScreen() {
  let animation = arg0;
  if (arg0 === undefined) {
    animation = closure_7.animation;
  }
  const arg1 = animation;
  let obj = {
    name: "channel",
    listeners: obj,
    options(arg0) {
      let navigation;
      let route;
      const obj = { headerShown: true, header: animation(closure_2[30]).renderHeader };
      ({ navigation, route } = arg0);
      const merged = Object.assign(animation(closure_2[30]).getDefaultChannelStackHeaderProps(navigation, route));
      const merged1 = Object.assign(closure_7);
      obj["animation"] = animation;
      return obj;
    },
    getComponent: getChannelComponent
  };
  obj = {
    beforeRemove(data) {
      let obj = animation(closure_2[26]);
      if (null != obj.getBestActiveInput()) {
        obj = { type: animation(closure_2[28]).KeyboardTypes.SYSTEM };
        animation(closure_2[27]).setKeyboardType(obj);
        const obj2 = animation(closure_2[27]);
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
        let SWIPE = constants2.BACK_BUTTON;
      } else {
        SWIPE = constants2.SWIPE;
      }
      obj.source = SWIPE;
      callback(closure_2[29]).trackWithMetadata(constants.CHANNEL_BACK_NAVIGATED, obj);
    }
  };
  return callback2(Screen.Screen, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).StackNavigationAnimationSettings;
({ AnalyticEvents: closure_8, DrawerSourceTypes: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
let closure_13 = arg1(dependencyMap[7]).createStyles({ flex: { flex: 1 } });
const obj2 = arg1(dependencyMap[7]);
let isIOSResult = arg1(dependencyMap[8]).isIOS();
if (isIOSResult) {
  isIOSResult = arg1(dependencyMap[9]).getSystemVersionMajor() <= 15;
  const obj4 = arg1(dependencyMap[9]);
}
let closure_15 = importDefault(dependencyMap[10])();
let closure_16 = importDefault(dependencyMap[11])();
let closure_17 = Object.freeze({ animation: "none" });
const obj3 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function StackNavigator() {
  const tmp = callback3();
  const arg1 = tmp;
  const screenReaderEnabled = arg1(dependencyMap[31]).useScreenReaderEnabled();
  const obj = arg1(dependencyMap[31]);
  const appKeyCommands = arg1(dependencyMap[31]).useAppKeyCommands();
  importDefault(dependencyMap[32])();
  const obj2 = arg1(dependencyMap[31]);
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[33]).useStateFromStores(items, () => null != accessibilityNativeStackOptions.getSessionId());
  const importDefault = stateFromStores;
  const tmp6 = callback(importAllResult.useState(closure_7.animation), 2);
  const first = tmp6[0];
  const dependencyMap = first;
  const callback = tmp6[1];
  const obj3 = arg1(dependencyMap[33]);
  const homeIndicatorStore = arg1(dependencyMap[34]).useHomeIndicatorStore((autoHideHomeIndicator) => autoHideHomeIndicator.autoHideHomeIndicator);
  const isChatBesideChannelList = importDefault(dependencyMap[35])().isChatBesideChannelList;
  const View = isChatBesideChannelList;
  const obj4 = arg1(dependencyMap[34]);
  const accessibilityNativeStackOptions = arg1(dependencyMap[36]).useAccessibilityNativeStackOptions();
  closure_6 = accessibilityNativeStackOptions;
  const items1 = [tmp, stateFromStores, homeIndicatorStore, accessibilityNativeStackOptions, first, isChatBesideChannelList];
  return homeIndicatorStore.useMemo(() => {
    let obj = { profile: callback(first[37]).Profiles.MainNavigator };
    obj = { style: tmp.flex };
    const tmp2 = stateFromStores(first[37]);
    obj = {};
    const tmp4 = stateFromStores(first[38]);
    const tmp5 = callback;
    const obj1 = {};
    const tmp6 = stateFromStores(first[39]);
    const tmp7 = callback;
    const obj2 = {};
    let tmp10 = null;
    const tmp8 = stateFromStores(first[40]);
    if (stateFromStores) {
      tmp10 = callback(closure_21, {});
    }
    const items = [tmp10, ];
    const obj3 = {};
    const tmp13 = callback;
    const tmp9 = stateFromStores(first[41]);
    obj3.profile = callback(first[37]).Profiles.StackNavigator;
    const obj4 = {
      id: "root",
      screenOptions() {
        return { headerShown: false, autoHideHomeIndicator: closure_4 };
      }
    };
    const items1 = [
      callback(closure_15.Screen, {
        name: "main",
        options: closure_17,
        children() {
          let obj = {};
          obj = {
            id: "tabs",
            screenOptions(navigation) {
              const obj = {};
              let str;
              if (closure_14) {
                str = "default";
              }
              obj.orientation = str;
              obj.headerShown = false;
              const merged = Object.assign(callback(closure_2[30]).getDefaultStackHeaderProps(navigation.navigation));
              const merged1 = Object.assign(closure_7);
              return obj;
            }
          };
          obj = { name: "tabs", getComponent: closure_19, options: closure_17 };
          const items = [callback4(closure_16.Screen, obj), callback4(closure_16.Screen, { name: "member-verification", getComponent: closure_22, options: { "Null": "companion_remote_auth", "Null": false } }), ];
          let animation;
          if (null != animation) {
            animation = animation.animation;
          }
          if (null == animation) {
            animation = closure_2;
          }
          items[2] = closure_33(animation);
          obj.children = items;
          const items1 = [closure_11(closure_16.Navigator, obj), callback(closure_2[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
          obj.children = items1;
          return closure_11(closure_12, obj);
        }
      }),
      callback(closure_15.Screen, { name: "search", getComponent: closure_27 }),
      callback(closure_15.Screen, {
        name: "conversations",
        getComponent: closure_26,
        options() {
          return callback2(closure_2[43])();
        }
      }),
      callback(closure_15.Screen, { name: "auth", getComponent: closure_18, options: closure_17 }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,

    ];
    const obj9 = { name: "account-standing", getComponent: closure_32 };
    const merged = Object.assign(closure_17);
    obj9.options = { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122086003363, "Bool(true)": -688316616681342600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    items1[4] = callback(closure_15.Screen, obj9);
    items1[5] = callback(closure_15.Screen, {
      name: "you",
      options() {
        let obj = {};
        let obj1 = callback(closure_2[9]);
        if (obj1.isIpadOS()) {
          obj = { presentation: "modal" };
          let tmp4 = obj;
        } else {
          if (obj3.isAndroid()) {
            if (closure_5) {
              obj = { presentation: "transparentModal" };
              tmp4 = obj;
            }
          }
          const obj3 = callback(closure_2[8]);
        }
        const merged = Object.assign(callback2(closure_2[43])(tmp4));
        const tmp = callback2(closure_2[43]);
        let tmp7;
        if (obj6.isAndroid()) {
          if (closure_5) {
            obj1 = { backgroundColor: "transparent" };
            tmp7 = obj1;
          }
        }
        obj["contentStyle"] = tmp7;
        obj["animation"] = "slide_from_bottom";
        return obj;
      },
      getComponent: closure_24
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
        const merged = Object.assign(callback2(closure_2[43])(obj));
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
        callback3("none");
        const timerId = setTimeout(() => callback(animation.animation), duration.duration);
      };
    }
    obj13.beforeRemove = fn;
    obj12.listeners = obj13;
    obj12.getComponent = closure_23;
    items1[6] = callback(closure_15.Screen, obj12);
    items1[7] = callback(closure_15.Screen, {
      name: "settings",
      options() {
        let obj = {};
        const tmp = callback2(closure_2[43]);
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
      getComponent: closure_31
    });
    items1[8] = callback(closure_15.Screen, {
      name: "sidebar",
      getComponent: closure_25,
      options() {
        return callback2(closure_2[43])({ lockOrientation: false });
      }
    });
    obj16 = { name: "message-requests", options: stateFromStores(first[43])(), getComponent: closure_30 };
    items1[9] = callback(closure_15.Screen, obj16);
    const obj10 = { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122086003363, "Bool(true)": -688316616681342600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
    const obj11 = {
      name: "you",
      options() {
        let obj = {};
        let obj1 = callback(closure_2[9]);
        if (obj1.isIpadOS()) {
          obj = { presentation: "modal" };
          let tmp4 = obj;
        } else {
          if (obj3.isAndroid()) {
            if (closure_5) {
              obj = { presentation: "transparentModal" };
              tmp4 = obj;
            }
          }
          const obj3 = callback(closure_2[8]);
        }
        const merged = Object.assign(callback2(closure_2[43])(tmp4));
        const tmp = callback2(closure_2[43]);
        let tmp7;
        if (obj6.isAndroid()) {
          if (closure_5) {
            obj1 = { backgroundColor: "transparent" };
            tmp7 = obj1;
          }
        }
        obj["contentStyle"] = tmp7;
        obj["animation"] = "slide_from_bottom";
        return obj;
      },
      getComponent: closure_24
    };
    const obj14 = {
      name: "settings",
      options() {
        let obj = {};
        const tmp = callback2(closure_2[43]);
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
      getComponent: closure_31
    };
    const obj15 = {
      name: "sidebar",
      getComponent: closure_25,
      options() {
        return callback2(closure_2[43])({ lockOrientation: false });
      }
    };
    const obj5 = {
      name: "main",
      options: closure_17,
      children() {
        let obj = {};
        obj = {
          id: "tabs",
          screenOptions(navigation) {
            const obj = {};
            let str;
            if (closure_14) {
              str = "default";
            }
            obj.orientation = str;
            obj.headerShown = false;
            const merged = Object.assign(callback(closure_2[30]).getDefaultStackHeaderProps(navigation.navigation));
            const merged1 = Object.assign(closure_7);
            return obj;
          }
        };
        obj = { name: "tabs", getComponent: closure_19, options: closure_17 };
        const items = [callback4(closure_16.Screen, obj), callback4(closure_16.Screen, { name: "member-verification", getComponent: closure_22, options: { "Null": "companion_remote_auth", "Null": false } }), ];
        let animation;
        if (null != animation) {
          animation = animation.animation;
        }
        if (null == animation) {
          animation = closure_2;
        }
        items[2] = closure_33(animation);
        obj.children = items;
        const items1 = [closure_11(closure_16.Navigator, obj), callback(closure_2[42]).APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO];
        obj.children = items1;
        return closure_11(closure_12, obj);
      }
    };
    const obj6 = { name: "search", getComponent: closure_27 };
    const obj7 = {
      name: "conversations",
      getComponent: closure_26,
      options() {
        return callback2(closure_2[43])();
      }
    };
    const obj8 = { name: "auth", getComponent: closure_18, options: closure_17 };
    const tmp14 = stateFromStores(first[37]);
    const tmp15 = closure_11;
    const tmp17 = callback;
    items1[10] = callback(closure_15.Screen, { name: "context-menu-commands", options: stateFromStores(first[43])(), getComponent: closure_28 });
    items1[11] = callback(closure_15.Screen, {
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
        const merged = Object.assign(callback2(closure_2[43])(obj));
        return obj;
      },
      getComponent: closure_29
    });
    obj4.children = items1;
    obj3.children = tmp15(closure_15.Navigator, obj4);
    items[1] = tmp13(tmp14, obj3);
    obj2.children = items;
    obj1.children = closure_11(tmp9, obj2);
    obj.children = tmp7(tmp8, obj1);
    const items2 = [tmp5(tmp6, obj), callback(first[42]).APP_EXTRA_COMPONENTS, callback(first[42]).APP_EXTRA_COMPONENTS_NEVER_FREEZE, callback(first[42]).APP_EXTRA_COMPONENTS_EXTERNAL_PIP];
    obj.children = items2;
    obj.children = closure_11(tmp4, obj);
    return callback(tmp2, obj);
  }, items1);
});
const result = arg1(dependencyMap[44]).fileFinishedImporting("modules/main_tabs_v2/native/MainNavigator.tsx");

export default memoResult;
export const MAIN_NAVIGATOR_ID = "mainNavigator";
export { getChannelScreen };
