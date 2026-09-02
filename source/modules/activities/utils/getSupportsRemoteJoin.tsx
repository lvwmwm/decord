// Module ID: 11552
// Function ID: 11553
// Name: getSupportsRemoteJoin
// Dependencies: [673, 6166, 2]
// Exports: getSupportsRemoteJoin

// Module 11552 (getSupportsRemoteJoin)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import hasFlagDefault from "hasFlag" /* 6166 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
