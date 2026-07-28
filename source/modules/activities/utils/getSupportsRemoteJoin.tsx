// Module ID: 10930
// Function ID: 84696
// Name: getSupportsRemoteJoin
// Dependencies: [653, 6007, 2]
// Exports: getSupportsRemoteJoin

// Module 10930 (getSupportsRemoteJoin)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = importDefault(6007)(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
