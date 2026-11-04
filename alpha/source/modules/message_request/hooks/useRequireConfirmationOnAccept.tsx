// Module ID: 14235
// Function ID: 14236
// Name: useRequireConfirmationOnAccept
// Dependencies: [14236, 2]
// Exports: default

// Module 14235 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14236 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
