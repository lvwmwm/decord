// Module ID: 12679
// Function ID: 12680
// Name: useRequireConfirmationOnAccept
// Dependencies: [558, 12680, 2]
// Exports: default

// Module 12679 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 12680 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
