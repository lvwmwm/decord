// Module ID: 10795
// Function ID: 10796
// Name: getIsAskToJoin
// Dependencies: [1085, 2]
// Exports: getIsAskToJoin

// Module 10795 (getIsAskToJoin)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};
