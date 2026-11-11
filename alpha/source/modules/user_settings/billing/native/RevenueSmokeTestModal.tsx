// Module ID: 18227
// Function ID: 18228
// Name: RevenueSmokeTestModal
// Dependencies: [19, 21, 9062, 7424, 11683, 8985, 10845, 18228, 2]

// Module 18227 (RevenueSmokeTestModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 8985 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10845 */;
import BillingFlowsDefault from "BillingFlows" /* 18228 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 9062 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_4 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(function RevenueSmokeTestModal() {
  let Navigator;
  let Screen;
  let closure_0;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  ({
    name: "RunAllFlows",
    options() {
      return { title: "Run All Payment Flows" };
    },
    component: BillingFlowsDefault.RunAllFlows
  });
  const NativePaymentContextProvider = require("NativePaymentContext").NativePaymentContextProvider;
  ({ Navigator, Screen } = closure_4);
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
});
const result = size.fileFinishedImporting("modules/user_settings/billing/native/RevenueSmokeTestModal.tsx");

export default memoResult;
