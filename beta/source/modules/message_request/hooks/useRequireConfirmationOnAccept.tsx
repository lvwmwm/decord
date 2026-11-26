// Module ID: 13335
// Function ID: 13336
// Name: useRequireConfirmationOnAccept
// Dependencies: [13336, 2]
// Exports: default

// Module 13335 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 13336 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
