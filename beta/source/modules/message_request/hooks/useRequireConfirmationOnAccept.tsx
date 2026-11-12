// Module ID: 14288
// Function ID: 14289
// Name: useRequireConfirmationOnAccept
// Dependencies: [14289, 2]
// Exports: default

// Module 14288 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 14289 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
