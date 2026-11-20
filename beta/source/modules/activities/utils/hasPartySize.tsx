// Module ID: 12692
// Function ID: 12693
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 12692 (hasPartySize)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
}
