// Module ID: 15061
// Function ID: 113357
// Name: ICYMINavigator
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15061 (ICYMINavigator)
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_2, jsxs: closure_3 } = __exportStarResult1);
__exportStarResult1 = __exportStarResult1.createNativeStackNavigator();
const result = __exportStarResult1.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = callback(dependencyMap[2]);
  const callback = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { 1716927330: 1766088043, 1403737748: 827788593 };
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
    callback2(__exportStarResult1.Screen, obj),
    callback2(__exportStarResult1.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(closure_1[4]).ThemedNotificationsModal;
      }
    })
  ];
  obj.children = items;
  return callback3(__exportStarResult1.Navigator, obj);
};
