// Module ID: 14248
// Function ID: 14249
// Name: useRequireConfirmationOnAccept
// Dependencies: [14249, 2]
// Exports: default

// Module 14248 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14249 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
