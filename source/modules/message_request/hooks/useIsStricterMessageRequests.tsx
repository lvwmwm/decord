// Module ID: 11537
// Function ID: 11538
// Name: set
// Dependencies: [11514, 2]
// Exports: default

// Module 11537 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11514) /* set */.useIsTeenInCountrySet(set);
};
