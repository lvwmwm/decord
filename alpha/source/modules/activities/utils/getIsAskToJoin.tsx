// Module ID: 12135
// Function ID: 12136
// Name: getIsAskToJoin
// Dependencies: [1071, 2]
// Exports: getIsAskToJoin

// Module 12135 (getIsAskToJoin)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
}
