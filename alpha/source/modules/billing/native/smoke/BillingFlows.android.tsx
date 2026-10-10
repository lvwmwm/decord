// Module ID: 16050
// Function ID: 16051
// Name: BillingFlows
// Dependencies: [17, 21, 558, 576, 2]

// Module 16050 (BillingFlows)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let obj = {
  RunAllFlows: ReactCompilerGating.isReactCompilerEnabled() ? (function RunAllFlows() {
    let first;
    const obj = react;
    const cResult = obj.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp5 = <View />;
      cResult[0] = tmp5;
      first = tmp5;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function RunAllFlows() {
    return <View />;
  })
};
const result = size.fileFinishedImporting("modules/billing/native/smoke/BillingFlows.android.tsx");

export default obj;
