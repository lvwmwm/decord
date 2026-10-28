// Module ID: 13588
// Function ID: 13589
// Name: useIsStricterMessageRequests
// Dependencies: [558, 13553, 2]
// Exports: default

// Module 13588 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13553 */;
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
