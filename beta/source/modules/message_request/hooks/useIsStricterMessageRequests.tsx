// Module ID: 12630
// Function ID: 12631
// Name: useIsStricterMessageRequests
// Dependencies: [558, 12604, 2]
// Exports: default

// Module 12630 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12604 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default () => RegionalTeenUtils.useIsTeenInCountrySet(set);
