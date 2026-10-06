// Module ID: 11831
// Function ID: 11832
// Name: useRequireConfirmationOnAccept
// Dependencies: [558, 11832, 2]
// Exports: default

// Module 11831 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 11832 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default () => useIsStricterMessageRequestsDefault();
