// Module ID: 11300
// Function ID: 11301
// Name: getIsAskToJoin
// Dependencies: [1087, 2]
// Exports: getIsAskToJoin

// Module 11300 (getIsAskToJoin)
import Constants from "Constants" /* 1087 */;
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
