// Module ID: 11328
// Function ID: 11329
// Name: _slicedToArray
// Dependencies: [32, 2]
// Exports: getPartySize

// Module 11328 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

export const getPartySize = function getPartySize(activity) {
  if (null != activity) {
    if (null != activity.party) {
      if (null != activity.party.size) {
        if (activity.party.size.length >= 2) {
          const obj = { partySize: null, maxPartySize: null };
          [obj.partySize, obj.maxPartySize] = activity.party.size;
          _slicedToArray(activity.party.size, 2);
          return obj;
        }
      }
    }
  }
  return { partySize: -1, maxPartySize: -1 };
};
