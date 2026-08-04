// Module ID: 11069
// Function ID: 11070
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11069 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
