// Module ID: 12015
// Function ID: 12016
// Name: getSupportsRemoteJoin
// Dependencies: [1074, 7555, 2]
// Exports: getSupportsRemoteJoin

// Module 12015 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7555 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
