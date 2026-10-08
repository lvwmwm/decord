// Module ID: 11390
// Function ID: 11391
// Name: getSupportsRemoteJoin
// Dependencies: [1085, 6999, 2]
// Exports: getSupportsRemoteJoin

// Module 11390 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 6999 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
