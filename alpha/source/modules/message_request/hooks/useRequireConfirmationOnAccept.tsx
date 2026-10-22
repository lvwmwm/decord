// Module ID: 13287
// Function ID: 13288
// Name: useRequireConfirmationOnAccept
// Dependencies: [558, 13288, 2]
// Exports: default

// Module 13287 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 13288 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
