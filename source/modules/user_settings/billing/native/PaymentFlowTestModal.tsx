// Module ID: 15096
// Function ID: 15097
// Dependencies: [19, 21, 8633, 5844, 8453, 9738, 15097, 2]

// Module 15096
import { jsx } from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "noop";

const require = arg1;
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = require("noop").memo(function PaymentFlowTestModal() {
  let Navigator;
  let Screen;
  let obj = _require(5844);
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[4]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = callback(outer1_2[4]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(callback);
      let merged1 = Object.assign(outer1_1(outer1_2[5])());
      return obj;
    },
    children: null
  };
  obj = {
    name: "PaymentFlowTest",
    options() {
      return { title: "Payment Flow Test" };
    },
    component: importDefault(15097)
  };
  ({ Navigator, Screen } = createNativeStackNavigator);
  obj[1] = <Screen name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={importDefault(15097)} />;
  return <Navigator name="PaymentFlowTest" options={function options() {
    return { title: "Payment Flow Test" };
  }} component={importDefault(15097)} />;
});
const result = require("createNativeStackNavigator").fileFinishedImporting("modules/user_settings/billing/native/PaymentFlowTestModal.tsx");

export default memoResult;
