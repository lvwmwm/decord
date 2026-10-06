// Module ID: 11136
// Function ID: 11137
// Name: getSupportsRemoteJoin
// Dependencies: [1086, 6732, 2]
// Exports: getSupportsRemoteJoin

// Module 11136 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1086 */;
import hasFlagDefault from "hasFlag" /* 6732 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
