// Module ID: 16002
// Function ID: 16003
// Name: BillingFlows
// Dependencies: [17, 21, 558, 568, 2]

// Module 16002 (BillingFlows)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/billing/native/smoke/BillingFlows.android.tsx");

export default {
  RunAllFlows: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp5 = <View />;
      cResult[0] = tmp5;
      let first = tmp5;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => <View />)
};
