// Module ID: 11866
// Function ID: 11867
// Name: set
// Dependencies: [11848, 2]
// Exports: default

// Module 11866 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11848) /* set */.useIsTeenInCountrySet(set);
};
