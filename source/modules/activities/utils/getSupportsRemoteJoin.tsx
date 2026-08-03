// Module ID: 11090
// Function ID: 11091
// Name: getSupportsRemoteJoin
// Dependencies: [676, 5808, 2]
// Exports: getSupportsRemoteJoin

// Module 11090 (getSupportsRemoteJoin)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = importDefault(5808)(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
