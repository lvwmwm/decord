// Module ID: 11361
// Function ID: 11362
// Name: getSupportsRemoteJoin
// Dependencies: [1084, 7411, 2]
// Exports: getSupportsRemoteJoin

// Module 11361 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1084 */;
import hasFlagDefault from "hasFlag" /* 7411 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
