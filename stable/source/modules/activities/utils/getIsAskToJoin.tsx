// Module ID: 12041
// Function ID: 12042
// Name: getIsAskToJoin
// Dependencies: [1074, 2]
// Exports: getIsAskToJoin

// Module 12041 (getIsAskToJoin)
import Constants from "Constants" /* 1074 */;
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
