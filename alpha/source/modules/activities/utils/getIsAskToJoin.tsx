// Module ID: 11448
// Function ID: 11449
// Name: getIsAskToJoin
// Dependencies: [1084, 2]
// Exports: getIsAskToJoin

// Module 11448 (getIsAskToJoin)
import Constants from "Constants" /* 1084 */;
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
