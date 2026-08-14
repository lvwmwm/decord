// Module ID: 15655
// Function ID: 15656
// Name: ICYMINavigator
// Dependencies: [21, 8633, 5844, 15656, 15607, 2]
// Exports: default

// Module 15655 (ICYMINavigator)
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let c3;
let obj1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("NavigationStack").fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = _require(5844);
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
      return callback(15656).ICYMITab;
    }
  };
  const items = [
    callback(createNativeStackNavigator.Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(15607).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
};
