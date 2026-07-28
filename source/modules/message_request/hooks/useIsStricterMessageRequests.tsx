// Module ID: 11513
// Function ID: 89493
// Name: set
// Dependencies: [11490, 2]
// Exports: default

// Module 11513 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11490) /* useUserCountryCode */.useIsTeenInCountrySet(set);
};
