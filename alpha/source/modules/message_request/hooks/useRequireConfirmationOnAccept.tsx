// Module ID: 13012
// Function ID: 13013
// Name: useRequireConfirmationOnAccept
// Dependencies: [558, 13013, 2]
// Exports: default

// Module 13012 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 13013 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
