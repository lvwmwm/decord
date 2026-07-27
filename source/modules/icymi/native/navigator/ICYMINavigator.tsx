// Module ID: 15246
// Function ID: 116025
// Name: ICYMINavigator
// Dependencies: [33, 9041, 5517, 15247, 15198, 2]
// Exports: default

// Module 15246 (ICYMINavigator)
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let closure_2;
let closure_3;
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const result = require("NavigationStack").fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = _require(5517);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { headerShown: false, fullScreenGestureEnabled: true };
    },
    initialRouteName: "icymi-screen"
  };
  obj = {
    name: "icymi-screen",
    getComponent() {
      return callback(outer1_1[3]).ICYMITab;
    }
  };
  const items = [
    callback(createNativeStackNavigator.Screen, obj),
    callback(createNativeStackNavigator.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(outer1_1[4]).ThemedNotificationsModal;
      }
    })
  ];
  obj.children = items;
  return callback2(createNativeStackNavigator.Navigator, obj);
};
