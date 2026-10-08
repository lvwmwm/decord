// Module ID: 12179
// Function ID: 12180
// Name: useRequireConfirmationOnAccept
// Dependencies: [558, 12180, 2]
// Exports: default

// Module 12179 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 12180 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
