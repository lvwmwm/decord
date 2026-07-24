// Module ID: 14710
// Function ID: 112073
// Dependencies: [31, 33, 9149, 5517, 9158, 10191, 14711, 2]

// Module 14710
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "result";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("result").memo(function PaymentFlowTestModal() {
  let Navigator;
  let Screen;
  let obj = _require(5517);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      let obj = {
        headerTitle(children) {
          let obj = Object.create(null);
          obj.children = 0;
          const merged = Object.assign(children, obj);
          obj = { title: children.children };
          const merged1 = Object.assign(merged);
          return outer2_3(callback(outer2_2[4]).GenericHeaderTitle, obj);
        },
        headerLeft: callback(outer1_2[4]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[5])());
      return obj;
    }
  };
  obj = {
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: importDefault(14711)
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj.children = <Screen name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={importDefault(14711)} />;
  return <Navigator name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={importDefault(14711)} />;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default memoResult;
