// Module ID: 17950
// Function ID: 17951
// Name: RevenueSmokeTestModal
// Dependencies: [19, 21, 10035, 7306, 10867, 9961, 10322, 17951, 2]

// Module 17950 (RevenueSmokeTestModal)
import Fragment from "Fragment" /* 21 */;
import HeaderShared from "HeaderShared" /* 9961 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10322 */;
import BillingFlowsDefault from "BillingFlows" /* 17951 */;
import react from "react" /* 19 */;
import NativeStackView from "NativeStackView" /* 10035 */;
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
