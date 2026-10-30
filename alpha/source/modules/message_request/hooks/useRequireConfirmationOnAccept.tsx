// Module ID: 13967
// Function ID: 13968
// Name: useRequireConfirmationOnAccept
// Dependencies: [13968, 2]
// Exports: default

// Module 13967 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 13968 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
