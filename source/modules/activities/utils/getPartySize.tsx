// Module ID: 10934
// Function ID: 84965
// Name: getPartySize
// Dependencies: [57, 2]
// Exports: getPartySize

// Module 10934 (getPartySize)
import _slicedToArray from "_slicedToArray";

const result = require("set").fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

export const getPartySize = function getPartySize(activity) {
  if (null != activity) {
    if (null != activity.party) {
      if (null != activity.party.size) {
        if (activity.party.size.length >= 2) {
          const tmp2 = callback(activity.party.size, 2);
          const obj = { partySize: tmp2[0], maxPartySize: tmp2[1] };
          return obj;
        }
      }
    }
  }
  return { partySize: -1, maxPartySize: -1 };
};
