// Module ID: 11943
// Function ID: 11944
// Name: set
// Dependencies: [11921, 2]
// Exports: default

// Module 11943 (set)
import set2 from "set" /* 11921 */;
import set from "set" /* 2 */;

let set = new Set(["GB"]);
const result = set.fileFinishedImporting("modules/message_request/hooks/useIsStricterMessageRequests.tsx");

export default function useIsStricterMessageRequests() {
  return set2.useIsTeenInCountrySet(set);
};
