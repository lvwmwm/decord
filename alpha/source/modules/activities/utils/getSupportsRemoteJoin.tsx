// Module ID: 11452
// Function ID: 11453
// Name: getSupportsRemoteJoin
// Dependencies: [1084, 7469, 2]
// Exports: getSupportsRemoteJoin

// Module 11452 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1084 */;
import hasFlagDefault from "hasFlag" /* 7469 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
}
