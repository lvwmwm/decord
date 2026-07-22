// Module ID: 10904
// Function ID: 84742
// Name: getSupportsRemoteJoin
// Dependencies: []
// Exports: getSupportsRemoteJoin

// Module 10904 (getSupportsRemoteJoin)
const ActivityFlags = require(dependencyMap[0]).ActivityFlags;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/activities/utils/getSupportsRemoteJoin.tsx");

export const getSupportsRemoteJoin = function getSupportsRemoteJoin(applicationActivity) {
  let tmp = null != applicationActivity;
  if (tmp) {
    tmp = importDefault(dependencyMap[1])(applicationActivity, ActivityFlags.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN);
  }
  return tmp;
};
