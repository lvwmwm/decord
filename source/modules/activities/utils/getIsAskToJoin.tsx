// Module ID: 11691
// Function ID: 11692
// Name: getIsAskToJoin
// Dependencies: [673, 2]
// Exports: getIsAskToJoin

// Module 11691 (getIsAskToJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ActivityActionTypes = ME.ActivityActionTypes;
const result = set.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};
