// Module ID: 18056
// Function ID: 18057
// Name: YouBarStackNavigator
// Dependencies: [19, 17, 4917, 5045, 11513, 21, 9856, 18057, 18463, 18512, 504, 18584, 8925, 7169, 5611, 2]

// Module 18056 (YouBarStackNavigator)
import MainTabsConstants from "MainTabsConstants" /* 11513 */;
import Notifications from "Notifications" /* 18463 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9856 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
function getGuildsComponent() {
  return require("guilds/Guilds").default;
}
function getNotificationsComponent() {
  return Notifications.ThemedNotifications;
}
function getICYMIComponent() {
  return require("ICYMINavigator").default;
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let Navigator = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function YouBarStackNavigator() {
  let LayerScope;
  let Screen;
  let accessibilityNativeStackOptions;
  let channelId;
  let current;
  let guildId;
  let iCYMIEnabled;
  let items2;
  let obj5;
  let obj6;
  let obj = react;
  const ref = react.useRef(undefined);
  let tmp2 = current;
  const tmp3 = accessibilityNativeStackOptions;
  let obj2 = current(accessibilityNativeStackOptions[10]);
  let items = [SelectedGuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId());
  const tmp5 = null == ref.current && null != stateFromStores;
  if (tmp5) {
    let obj3 = { guildId: stateFromStores, channelId };
    channelId = SelectedChannelStore.getChannelId(stateFromStores);
    ref.current = obj3;
  }
  current = ref.current;
  iCYMIEnabled(tmp3[11])();
  const tmp2Result = tmp2(tmp3[12]);
  iCYMIEnabled = tmp2Result.useICYMIEnabled("TabsNavigator");
  const tmp2Result2 = tmp2(tmp3[13]);
  accessibilityNativeStackOptions = tmp2Result2.useAccessibilityNativeStackOptions();
  const items1 = [accessibilityNativeStackOptions];
  let obj4 = { style: absoluteFillObject.absoluteFillObject, children: closure_9(LayerScope, obj5) };
  const memo = obj.useMemo(() => {
    const obj = { headerShown: false, gestureEnabled: true, fullScreenGestureEnabled: true };
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  }, items1);
  obj5 = { children: closure_9(Navigator, obj6) };
  obj6 = {
    id: "tabs",
    screenOptions: memo,
    children: obj.useMemo(() => {
      let obj = {
        name: YouBarNavigatorScreens.GUILDS,
        initialParams: current,
        getComponent: getGuildsComponent,
        options() {
          const obj = {};
          const merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        }
      };
      const items = [React4(Screen.Screen, obj), , ];
      let tmp3Result = null;
      const tmp = unpackModuleId;
      const tmp2 = authStore;
      if (iCYMIEnabled) {
        const obj2 = {
          name: YouBarNavigatorScreens.ICYMI,
          getComponent: getICYMIComponent,
          options() {
              const obj = {};
              const merged = Object.assign(accessibilityNativeStackOptions);
              return obj;
            }
        };
        tmp3Result = tmp3(tmp4.Screen, obj2);
      }
      const obj3 = { children: items };
      items[1] = tmp3Result;
      const obj4 = {
        name: YouBarNavigatorScreens.NOTIFICATIONS,
        getComponent: getNotificationsComponent,
        options() {
          const obj = {};
          const merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        }
      };
      items[2] = React4(Screen.Screen, obj4);
      return tmp(tmp2, obj3);
    }, items2)
  };
  items2 = [current, iCYMIEnabled, accessibilityNativeStackOptions];
  LayerScope = tmp2(tmp3[14]).LayerScope;
  Navigator = Navigator.Navigator;
  return closure_9(closure_5, obj4);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default memoResult;
