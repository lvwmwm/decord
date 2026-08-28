// Module ID: 11261
// Function ID: 11262
// Name: getIsAskToJoin
// Dependencies: [676, 2]
// Exports: getIsAskToJoin

// Module 11261 (getIsAskToJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

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
