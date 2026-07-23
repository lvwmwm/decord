// Module ID: 14797
// Function ID: 112858
// Name: getGuildsComponent
// Dependencies: [31, 27, 1906, 3947, 8772, 33, 9113, 14798, 15128, 15176, 566, 15250, 8322, 5519, 5449, 2]

// Module 14797 (getGuildsComponent)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_9;
let require = arg1;
function getGuildsComponent() {
  return require(14798).default;
}
function getNotificationsComponent() {
  return require(15128) /* goBack */.ThemedNotifications;
}
function getICYMIComponent() {
  return require(15176) /* ICYMINavigator */.default;
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function YouBarStackNavigator() {
  const tmp = (function useInitialGuildParams() {
    const ref = outer1_3.useRef(undefined);
    let obj = tmp(accessibilityNativeStackOptions[10]);
    const items = [outer1_7];
    const stateFromStores = obj.useStateFromStores(items, () => outer2_7.getGuildId());
    if (tmp3) {
      obj = { guildId: stateFromStores };
      const channelId = outer1_6.getChannelId(stateFromStores);
      let tmp6;
      if (null != channelId) {
        tmp6 = channelId;
      }
      obj.channelId = tmp6;
      ref.current = obj;
    }
    return ref.current;
  })();
  const require = tmp;
  iCYMIEnabled(accessibilityNativeStackOptions[11])();
  let obj = require(accessibilityNativeStackOptions[12]);
  iCYMIEnabled = obj.useICYMIEnabled("TabsNavigator");
  let obj1 = require(accessibilityNativeStackOptions[13]);
  accessibilityNativeStackOptions = obj1.useAccessibilityNativeStackOptions();
  let items = [accessibilityNativeStackOptions];
  obj = { style: absoluteFillObject.absoluteFillObject };
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityNativeStackOptions);
    obj["headerShown"] = false;
    obj["gestureEnabled"] = true;
    obj["fullScreenGestureEnabled"] = true;
    return obj;
  }, items);
  obj = {};
  obj1 = { id: "tabs", screenOptions: memo };
  const items1 = [tmp, iCYMIEnabled, accessibilityNativeStackOptions];
  obj1.children = importAllResult.useMemo(() => {
    let obj = {};
    obj = {
      name: outer1_8.GUILDS,
      initialParams: closure_0,
      getComponent: outer1_13,
      options() {
        const merged = Object.assign(outer1_2);
        return {};
      }
    };
    const items = [outer1_9(outer1_12.Screen, obj), , ];
    let tmp3 = null;
    if (iCYMIEnabled) {
      obj = {
        name: outer1_8.ICYMI,
        getComponent: outer1_15,
        options() {
            const merged = Object.assign(outer1_2);
            return {};
          }
      };
      tmp3 = outer1_9(outer1_12.Screen, obj);
    }
    items[1] = tmp3;
    items[2] = outer1_9(outer1_12.Screen, {
      name: outer1_8.NOTIFICATIONS,
      getComponent: outer1_14,
      options() {
        const merged = Object.assign(outer1_2);
        return {};
      }
    });
    obj.children = items;
    return outer1_11(outer1_10, obj);
  }, items1);
  obj.children = callback(createNativeStackNavigator.Navigator, obj1);
  obj.children = callback(require(accessibilityNativeStackOptions[14]).LayerScope, obj);
  return callback(closure_5, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default memoResult;
