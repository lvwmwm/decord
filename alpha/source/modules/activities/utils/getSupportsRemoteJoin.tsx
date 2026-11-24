// Module ID: 12139
// Function ID: 12140
// Name: getSupportsRemoteJoin
// Dependencies: [1071, 8260, 2]
// Exports: getSupportsRemoteJoin

// Module 12139 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1071 */;
import hasFlagDefault from "hasFlag" /* 8260 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
}
