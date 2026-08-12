// Module ID: 11219
// Function ID: 11220
// Name: getSupportsRemoteJoin
// Dependencies: [676, 5969, 2]
// Exports: getSupportsRemoteJoin

// Module 11219 (getSupportsRemoteJoin)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = importDefault(5969)(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
