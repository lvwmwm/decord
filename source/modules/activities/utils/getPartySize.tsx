// Module ID: 10918
// Function ID: 10919
// Name: getPartySize
// Dependencies: [32, 2]
// Exports: getPartySize

// Module 10918 (getPartySize)
import _slicedToArray from "_slicedToArray";

const result = require("set").fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

export const getPartySize = function getPartySize(activity) {
  if (null != activity) {
    if (null != activity.party) {
      if (null != activity.party.size) {
        if (activity.party.size.length >= 2) {
          const obj = { partySize: null, maxPartySize: null };
          [obj[0], obj[1]] = callback(activity.party.size, 2);
          return obj;
        }
      }
    }
  }
  return { partySize: -1, maxPartySize: -1 };
};
