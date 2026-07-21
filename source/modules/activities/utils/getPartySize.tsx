// Module ID: 10896
// Function ID: 84703
// Name: getPartySize
// Dependencies: [1953825491, 683]
// Exports: getPartySize

// Module 10896 (getPartySize)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_0 = importDefault(dependencyMap[0]);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/activities/utils/getPartySize.tsx");

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
  return { POLL_VOTE_SELECTED: false, GIF_PICKER_GUTTER_SPACING: false };
};
