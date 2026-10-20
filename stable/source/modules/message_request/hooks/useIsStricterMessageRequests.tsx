// Module ID: 12170
// Function ID: 12171
// Name: useIsStricterMessageRequests
// Dependencies: [558, 12135, 2]
// Exports: default

// Module 12170 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 12135 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const set = new Set(["GB"]);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  const obj = RegionalTeenUtils;
  return obj.useIsTeenInCountrySet(set);
};
