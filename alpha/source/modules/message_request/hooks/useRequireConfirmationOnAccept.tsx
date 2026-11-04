// Module ID: 14234
// Function ID: 14235
// Name: useRequireConfirmationOnAccept
// Dependencies: [14235, 2]
// Exports: default

// Module 14234 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14235 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
