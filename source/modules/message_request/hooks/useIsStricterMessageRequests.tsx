// Module ID: 11718
// Function ID: 11719
// Name: set
// Dependencies: [11700, 2]
// Exports: default

// Module 11718 (set)
import set from "set";

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return require(11700) /* set */.useIsTeenInCountrySet(set);
};
