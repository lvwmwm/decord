// Module ID: 16088
// Function ID: 16089
// Name: ICYMINavigator
// Dependencies: [21, 7339, 6421, 16089, 16038, 2]
// Exports: default

// Module 16088 (ICYMINavigator)
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let closure_4 = NativeStackView.createNativeStackNavigator();
const result = size.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let closure_0;
  let items;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  const Navigator = closure_4.Navigator;
  const obj2 = {
    screenOptions() {
      const obj = { headerShown: false, fullScreenGestureEnabled: true };
      const merged = Object.assign(closure_0);
      return obj;
    },
    initialRouteName: "icymi-screen",
    children: items
  };
  items = [, ];
  const obj3 = {
    name: "icymi-screen",
    getComponent() {
      return closure_0(dependencyMap[3]).ICYMITab;
    }
  };
  items[0] = closure_2(closure_4.Screen, obj3);
  const obj4 = {
    name: "notifications-screen",
    getComponent() {
      return closure_0(dependencyMap[4]).ThemedNotificationsModal;
    }
  };
  items[1] = closure_2(closure_4.Screen, obj4);
  return closure_3(Navigator, obj2);
};
