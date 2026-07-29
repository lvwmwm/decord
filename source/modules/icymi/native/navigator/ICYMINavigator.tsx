// Module ID: 15319
// Function ID: 15320
// Name: ICYMINavigator
// Dependencies: [21, 9109, 5570, 15320, 15271, 2]
// Exports: default

// Module 15319 (ICYMINavigator)
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let c3;
let obj1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("NavigationStack").fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = _require(5570);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { headerShown: false, fullScreenGestureEnabled: true };
    },
    initialRouteName: "icymi-screen",
    children: null
  };
  obj = {
    name: "icymi-screen",
    getComponent() {
      return callback(15320).ICYMITab;
    }
  };
  const items = [
    callback(createNativeStackNavigator.Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(15271).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
};
