// Module ID: 17008
// Function ID: 17009
// Name: RevenueSmokeTestModal
// Dependencies: [19, 21, 8518, 6972, 9488, 8441, 10418, 17009, 2]

// Module 17008 (RevenueSmokeTestModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 8441 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10418 */;
import BillingFlowsDefault from "BillingFlows" /* 17009 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 8518 */;
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
