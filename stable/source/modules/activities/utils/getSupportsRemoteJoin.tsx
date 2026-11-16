// Module ID: 11883
// Function ID: 11884
// Name: getSupportsRemoteJoin
// Dependencies: [1072, 7580, 2]
// Exports: getSupportsRemoteJoin

// Module 11883 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1072 */;
import hasFlagDefault from "hasFlag" /* 7580 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
}
