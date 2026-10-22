// Module ID: 11312
// Function ID: 11313
// Name: getSupportsRemoteJoin
// Dependencies: [1087, 7394, 2]
// Exports: getSupportsRemoteJoin

// Module 11312 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1087 */;
import hasFlagDefault from "hasFlag" /* 7394 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
