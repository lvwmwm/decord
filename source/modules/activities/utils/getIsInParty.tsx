// Module ID: 10910
// Function ID: 84782
// Name: getIsInParty
// Dependencies: [2]
// Exports: getIsInParty

// Module 10910 (getIsInParty)
const result = require("set").fileFinishedImporting("modules/activities/utils/getIsInParty.tsx");

export const getIsInParty = function getIsInParty(tmp8Result, activity) {
  let id;
  if (null != activity) {
    const party = activity.party;
    if (null != party) {
      id = party.id;
    }
  }
  let tmp2 = null != id;
  if (tmp2) {
    let id1;
    if (null != tmp8Result) {
      const party2 = tmp8Result.party;
      if (null != party2) {
        id1 = party2.id;
      }
    }
    tmp2 = null != id1 && tmp8Result.party.id === activity.party.id;
    const tmp4 = null != id1 && tmp8Result.party.id === activity.party.id;
  }
  return tmp2;
};
