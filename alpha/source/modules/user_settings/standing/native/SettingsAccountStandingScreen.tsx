// Module ID: 14994
// Function ID: 14995
// Name: SettingsAccountStandingScreen
// Dependencies: [21, 558, 576, 14995, 2]

// Module 14994 (SettingsAccountStandingScreen)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import SafetyHubPageDefault from "SafetyHubPage" /* 14995 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsAccountStandingScreen() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(SafetyHubPageDefault, { visible: true });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function SettingsAccountStandingScreen() {
  return jsx(SafetyHubPageDefault, { visible: true });
});
const result = size.fileFinishedImporting("modules/user_settings/standing/native/SettingsAccountStandingScreen.tsx");

export default tmp2;
