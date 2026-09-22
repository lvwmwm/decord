// Module ID: 12702
// Function ID: 12703
// Name: useRequireConfirmationOnAccept
// Dependencies: [12703, 2]
// Exports: default

// Module 12702 (useRequireConfirmationOnAccept)
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 12703 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/message_request/hooks/useRequireConfirmationOnAccept.tsx");

export default function useRequireConfirmationOnAccept() {
  return useIsStricterMessageRequestsDefault();
};
