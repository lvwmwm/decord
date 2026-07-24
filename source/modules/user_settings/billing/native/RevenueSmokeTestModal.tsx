// Module ID: 14717
// Function ID: 112144
// Dependencies: [31, 33, 9149, 5517, 8808, 9158, 10191, 14718, 2]

// Module 14717
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "result";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("result").memo(function RevenueSmokeTestModal() {
  let Navigator;
  let Screen;
  let obj = _require(5517);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = { skuIDs: [], activeSubscription: null };
  obj = {
    screenOptions(navigation) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_3(callback(outer2_2[5]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[6])());
      return obj;
    }
  };
  const obj1 = {
    name: "RunAllFlows",
    options() {
      return { title: "Run All Payment Flows" };
    }
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj1.component = importDefault(14718).RunAllFlows;
  obj.children = <Screen name="RunAllFlows" options={function options() {
    return { title: "Run All Payment Flows" };
  }} />;
  obj.children = <Navigator screenOptions={function screenOptions(navigation) {
    let obj = {
      headerTitle(children) {
        let obj = Object.create(null);
        obj.children = 0;
        const merged = Object.assign(children, obj);
        obj = { title: children.children };
        const merged1 = Object.assign(merged);
        return outer2_3(callback(outer2_2[5]).GenericHeaderTitle, obj);
      },
      headerLeft: callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation),
      headerTitleAlign: "center"
    };
    let merged = Object.assign(callback);
    let merged1 = Object.assign(outer1_1(outer1_2[6])());
    return obj;
  }} />;
  return jsx(_require(8808).NativePaymentContextProvider, {
    screenOptions(navigation) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_3(callback(outer2_2[5]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[6])());
      return obj;
    }
  });
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;
