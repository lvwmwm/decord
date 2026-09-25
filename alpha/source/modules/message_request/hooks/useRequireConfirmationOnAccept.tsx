// Module ID: 11919
// Function ID: 11920
// Name: useRequireConfirmationOnAccept
// Dependencies: [11920, 2]
// Exports: default

// Module 11919 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 11920 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
