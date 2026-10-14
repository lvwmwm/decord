// Module ID: 12087
// Function ID: 12088
// Name: useIsStricterMessageRequests
// Dependencies: [558, 12061, 2]
// Exports: default

// Module 12087 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12061 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default () => {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
