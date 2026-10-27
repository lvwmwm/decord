// Module ID: 13355
// Function ID: 13356
// Name: useIsStricterMessageRequests
// Dependencies: [558, 13322, 2]
// Exports: default

// Module 13355 (useIsStricterMessageRequests)
import RegionalTeenUtils from "RegionalTeenUtils" /* 13322 */;
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
