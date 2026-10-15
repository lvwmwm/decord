// Module ID: 11121
// Function ID: 11122
// Name: getSupportsRemoteJoin
// Dependencies: [1085, 7232, 2]
// Exports: getSupportsRemoteJoin

// Module 11121 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 7232 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
