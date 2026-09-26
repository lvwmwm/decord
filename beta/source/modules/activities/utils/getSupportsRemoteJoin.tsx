// Module ID: 12044
// Function ID: 12045
// Name: getSupportsRemoteJoin
// Dependencies: [1074, 7587, 2]
// Exports: getSupportsRemoteJoin

// Module 12044 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7587 */;
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
