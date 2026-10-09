// Module ID: 10763
// Function ID: 10764
// Name: getSupportsRemoteJoin
// Dependencies: [1085, 7006, 2]
// Exports: getSupportsRemoteJoin

// Module 10763 (getSupportsRemoteJoin)
import Constants from "Constants" /* 1085 */;
import hasFlagDefault from "hasFlag" /* 7006 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  const tmp = null != applicationActivity && hasFlagDefault(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  return tmp;
};
