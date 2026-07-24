// Module ID: 10938
// Function ID: 84973
// Name: getIsAskToJoin
// Dependencies: [653, 2]
// Exports: getIsAskToJoin

// Module 10938 (getIsAskToJoin)
import { ActivityActionTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (null != activity) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};
