// Module ID: 14949
// Function ID: 14950
// Dependencies: [19, 21, 8510, 5723, 9506, 8322, 9613, 14950, 2]

// Module 14949
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "noop";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("noop").memo(function RevenueSmokeTestModal() {
  let Navigator;
  let Screen;
  let obj = _require(5723);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[6])());
      return obj;
    },
    children: null
  };
  const obj1 = {
    name: "RunAllFlows",
    options() {
      return { title: "Run All Payment Flows" };
    },
    component: null
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj1[2] = importDefault(14950).RunAllFlows;
  obj[1] = <Screen name="RunAllFlows" options={function options() {
    return { title: "Run All Payment Flows" };
  }} component={null} />;
  obj[2] = <Navigator screenOptions={function screenOptions(navigation) {
    const obj = {
      headerTitle(children) {
        const merged = Object.assign(children, Object.create(null));
        const merged1 = Object.assign(merged);
        return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
      },
      headerLeft: null,
      headerTitleAlign: "center"
    };
    obj[1] = callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation);
    let merged = Object.assign(callback);
    let merged1 = Object.assign(outer1_1(outer1_2[6])());
    return obj;
  }}>{null}</Navigator>;
  return jsx(_require(9506).NativePaymentContextProvider, {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[6])());
      return obj;
    },
    children: null
  });
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;
