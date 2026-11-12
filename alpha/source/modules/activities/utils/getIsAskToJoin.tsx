// Module ID: 12597
// Function ID: 12598
// Name: getIsAskToJoin
// Dependencies: [1072, 2]
// Exports: getIsAskToJoin

// Module 12597 (getIsAskToJoin)
import Constants from "Constants" /* 1072 */;
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
