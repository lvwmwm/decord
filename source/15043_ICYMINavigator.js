// Module ID: 15043
// Function ID: 113256
// Name: ICYMINavigator
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15043 (ICYMINavigator)
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_2, jsxs: closure_3 } = result);
result = result.createNativeStackNavigator();
result = result.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = callback(dependencyMap[2]);
  const callback = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { "Null": true, "Null": true };
    },
    initialRouteName: "icymi-screen"
  };
  obj = {
    name: "icymi-screen",
    getComponent() {
      return callback(closure_1[3]).ICYMITab;
    }
  };
  const items = [
    callback2(result.Screen, obj),
    callback2(result.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(closure_1[4]).ThemedNotificationsModal;
      }
    })
  ];
  obj.children = items;
  return callback3(result.Navigator, obj);
};
