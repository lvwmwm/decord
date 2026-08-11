// Module ID: 11160
// Function ID: 11161
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 11160 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
