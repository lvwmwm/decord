// Module ID: 10950
// Function ID: 10951
// Name: getSupportsRemoteJoin
// Dependencies: [676, 6023, 2]
// Exports: getSupportsRemoteJoin

// Module 10950 (getSupportsRemoteJoin)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = importDefault(6023)(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
