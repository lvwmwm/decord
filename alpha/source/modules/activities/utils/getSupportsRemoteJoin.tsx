// Module ID: 11137
// Function ID: 11138
// Name: getSupportsRemoteJoin
// Dependencies: [1087, 7234, 2]
// Exports: getSupportsRemoteJoin

// Module 11137 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1087 */;
import hasFlagDefault from "hasFlag" /* 7234 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
