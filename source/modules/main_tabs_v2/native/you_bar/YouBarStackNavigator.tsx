// Module ID: 14664
// Function ID: 110597
// Name: getGuildsComponent
// Dependencies: []

// Module 14664 (getGuildsComponent)
function getGuildsComponent() {
  return arg1(dependencyMap[7]).default;
}
function getNotificationsComponent() {
  return arg1(dependencyMap[8]).ThemedNotifications;
}
function getICYMIComponent() {
  return arg1(dependencyMap[9]).default;
}
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const YouBarNavigatorScreens = arg1(dependencyMap[4]).YouBarNavigatorScreens;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[6]).createNativeStackNavigator();
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function YouBarStackNavigator() {
  const tmp = function useInitialGuildParams() {
    const ref = React.useRef(undefined);
    let obj = tmp(accessibilityNativeStackOptions[10]);
    const items = [closure_7];
    const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
    if (tmp3) {
      obj = { guildId: stateFromStores };
      const channelId = channelId.getChannelId(stateFromStores);
      let tmp6;
      if (null != channelId) {
        tmp6 = channelId;
      }
      obj.channelId = tmp6;
      ref.current = obj;
    }
    return ref.current;
  }();
  const arg1 = tmp;
  importDefault(dependencyMap[11])();
  let obj = arg1(dependencyMap[12]);
  const iCYMIEnabled = obj.useICYMIEnabled("TabsNavigator");
  const importDefault = iCYMIEnabled;
  let obj1 = arg1(dependencyMap[13]);
  const accessibilityNativeStackOptions = obj1.useAccessibilityNativeStackOptions();
  const dependencyMap = accessibilityNativeStackOptions;
  const items = [accessibilityNativeStackOptions];
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
      name: constants.GUILDS,
      initialParams: tmp,
      getComponent: closure_13,
      options() {
        const merged = Object.assign(closure_2);
        return {};
      }
    };
    const items = [callback(closure_12.Screen, obj), , ];
    let tmp3 = null;
    if (iCYMIEnabled) {
      obj = {
        name: constants.ICYMI,
        getComponent: closure_15,
        options() {
            const merged = Object.assign(closure_2);
            return {};
          }
      };
      tmp3 = callback(closure_12.Screen, obj);
    }
    items[1] = tmp3;
    items[2] = callback(closure_12.Screen, {
      name: constants.NOTIFICATIONS,
      getComponent: closure_14,
      options() {
        const merged = Object.assign(closure_2);
        return {};
      }
    });
    obj.children = items;
    return closure_11(closure_10, obj);
  }, items1);
  obj.children = callback(Navigator.Navigator, obj1);
  obj.children = callback(arg1(dependencyMap[14]).LayerScope, obj);
  return callback(closure_5, obj);
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default memoResult;
