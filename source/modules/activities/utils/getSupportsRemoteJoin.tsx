// Module ID: 11075
// Function ID: 11076
// Name: getSupportsRemoteJoin
// Dependencies: [676, 5837, 2]
// Exports: getSupportsRemoteJoin

// Module 11075 (getSupportsRemoteJoin)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = importDefault(5837)(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
