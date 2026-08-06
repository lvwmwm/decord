// Module ID: 15457
// Function ID: 15458
// Name: ICYMINavigator
// Dependencies: [21, 8493, 5704, 15458, 15409, 2]
// Exports: default

// Module 15457 (ICYMINavigator)
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let c3;
let obj1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("NavigationStack").fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = _require(5704);
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
      return callback(15458).ICYMITab;
    }
  };
  const items = [
    callback(createNativeStackNavigator.Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(15409).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
};
