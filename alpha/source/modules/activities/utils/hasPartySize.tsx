// Module ID: 11646
// Function ID: 11647
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11646 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
}
