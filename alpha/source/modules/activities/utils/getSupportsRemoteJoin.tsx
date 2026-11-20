// Module ID: 12067
// Function ID: 12068
// Name: getSupportsRemoteJoin
// Dependencies: [1071, 7941, 2]
// Exports: getSupportsRemoteJoin

// Module 12067 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1071 */;
import hasFlagDefault from "hasFlag" /* 7941 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
}
