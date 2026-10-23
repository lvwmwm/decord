// Module ID: 16252
// Function ID: 16253
// Name: PremiumManagePlanScreen
// Dependencies: [19, 21, 558, 576, 14779, 2]

// Module 16252 (PremiumManagePlanScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PremiumManagePlanDefault from "PremiumManagePlan" /* 14779 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumPlanSelectSettingScreen() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumManagePlanDefault, {});
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function PremiumPlanSelectSettingScreen() {
  return jsx(PremiumManagePlanDefault, {});
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlanScreen.tsx");

export default tmp3;
