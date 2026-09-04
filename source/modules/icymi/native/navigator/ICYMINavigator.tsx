// Module ID: 16373
// Function ID: 16374
// Name: ICYMINavigator
// Dependencies: [21, 7844, 6940, 16374, 16325, 2]
// Exports: default

// Module 16373 (ICYMINavigator)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7844 */;

({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const result = set.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = _require(6940);
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
      return callback(16374).ICYMITab;
    }
  };
  const items = [
    callback(closure_4.Screen, obj),
    callback(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(16325).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_4.Navigator, obj);
};
