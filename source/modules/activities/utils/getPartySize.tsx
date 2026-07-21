// Module ID: 10896
// Function ID: 84714
// Name: getPartySize
// Dependencies: []
// Exports: getPartySize

// Module 10896 (getPartySize)
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

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
  return { ix: "<string:1876819969>", from: "<string:2170814465>" };
};
