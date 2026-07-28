// Module ID: 9084
// Function ID: 71235
// Dependencies: [31, 33, 9085, 5552, 9094, 10163, 477, 2]

// Module 9084
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "result";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("result").memo(function ModalStackNavigator(children) {
  let importDefault;
  let require;
  let screenKey;
  ({ screenKey, title: require, titleIcon: importDefault } = children);
  let obj = require(5552) /* NavigationStack */;
  const dependencyMap = obj.useAccessibilityNativeStackOptions();
  obj = {
    initialRouteName: screenKey,
    screenOptions(navigation) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children, icon: outer1_1 };
          const merged1 = Object.assign(merged);
          return outer2_3(outer2_0(table[4]).GenericHeaderTitle, obj);
        },
        headerLeft: outer1_0(9094).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(dependencyMap);
      let merged1 = Object.assign(outer1_1(10163)());
      return obj;
    },
    children: <createNativeStackNavigator.Screen {...obj} />
  };
  obj = {
    name: screenKey,
    children: children.render,
    options() {
      const obj = { title: closure_0 };
      let str;
      if (obj2.isIOS()) {
        str = "portrait";
      }
      obj.orientation = str;
      return obj;
    }
  };
  return <createNativeStackNavigator.Navigator name={screenKey} options={function options() {
    const obj = { title: closure_0 };
    let str;
    if (obj2.isIOS()) {
      str = "portrait";
    }
    obj.orientation = str;
    return obj;
  }}>{arg0.render}</createNativeStackNavigator.Navigator>;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/main_tabs_v2/native/utils/ModalStackNavigator.tsx");

export default memoResult;
