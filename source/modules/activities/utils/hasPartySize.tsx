// Module ID: 10919
// Function ID: 10920
// Name: hasPartySize
// Dependencies: [2]
// Exports: hasPartySize

// Module 10919 (hasPartySize)
const result = require("set").fileFinishedImporting("modules/activities/utils/hasPartySize.tsx");

export const hasPartySize = function hasPartySize(partySize) {
  return partySize.partySize > -1 && partySize.maxPartySize > -1;
};
