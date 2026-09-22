// Module ID: 16800
// Function ID: 16801
// Name: ICYMINavigator
// Dependencies: [21, 8161, 7247, 16801, 16752, 2]
// Exports: default

// Module 16800 (ICYMINavigator)
import jsxProd from "jsxProd" /* 21 */;
import NativeStackNavigator from "NativeStackNavigator" /* 8161 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ jsx: c2, jsxs: c3 } = jsxProd);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const result = size.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  const obj2 = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { headerShown: false, fullScreenGestureEnabled: true };
    },
    initialRouteName: "icymi-screen",
    children: null
  };
  const items = [
    closure_2(closure_4.Screen, {
      name: "icymi-screen",
      getComponent() {
        return closure_0(16801).ICYMITab;
      }
    }),
    closure_2(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return closure_0(16752).ThemedNotificationsModal;
      }
    })
  ];
  obj2.children = items;
  return closure_3(closure_4.Navigator, obj2);
};
