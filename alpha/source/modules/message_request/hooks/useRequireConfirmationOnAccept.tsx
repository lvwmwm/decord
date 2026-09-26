// Module ID: 11937
// Function ID: 11938
// Name: useRequireConfirmationOnAccept
// Dependencies: [11938, 2]
// Exports: default

// Module 11937 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 11938 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
