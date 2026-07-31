// Module ID: 10962
// Function ID: 10963
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 10962 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
