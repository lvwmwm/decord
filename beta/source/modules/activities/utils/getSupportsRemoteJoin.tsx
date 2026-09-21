// Module ID: 11890
// Function ID: 11891
// Name: getSupportsRemoteJoin
// Dependencies: [1078, 7557, 2]
// Exports: getSupportsRemoteJoin

// Module 11890 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1078 */;
import hasFlagDefault from "hasFlag" /* 7557 */;
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
