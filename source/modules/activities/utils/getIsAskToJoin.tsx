// Module ID: 10900
// Function ID: 84722
// Name: getIsAskToJoin
// Dependencies: []
// Exports: getIsAskToJoin

// Module 10900 (getIsAskToJoin)
const ActivityActionTypes = require(dependencyMap[0]).ActivityActionTypes;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (null != activity) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};
