// Module ID: 11475
// Function ID: 89369
// Name: set
// Dependencies: [11452, 2]
// Exports: default

// Module 11475 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11452) /* useUserCountryCode */.useIsTeenInCountrySet(set);
};
