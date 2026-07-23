// Module ID: 14670
// Function ID: 111823
// Dependencies: [31, 33, 9113, 5519, 8769, 9122, 10161, 14671, 2]

// Module 14670
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "result";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("result").memo(function RevenueSmokeTestModal() {
  let Navigator;
  let Screen;
  let obj = _require(5519);
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
  obj1.component = importDefault(14671).RunAllFlows;
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
  return jsx(_require(8769).NativePaymentContextProvider, {
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
