// Module ID: 11321
// Function ID: 11322
// Name: getSupportsRemoteJoin
// Dependencies: [676, 6037, 2]
// Exports: getSupportsRemoteJoin

// Module 11321 (getSupportsRemoteJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlagDefault from "hasFlag" /* 6037 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
