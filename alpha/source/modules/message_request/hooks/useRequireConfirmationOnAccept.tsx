// Module ID: 13331
// Function ID: 13332
// Name: useRequireConfirmationOnAccept
// Dependencies: [13332, 2]
// Exports: default

// Module 13331 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 13332 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
