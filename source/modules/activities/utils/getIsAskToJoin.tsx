// Module ID: 11072
// Function ID: 11073
// Name: getIsAskToJoin
// Dependencies: [676, 2]
// Exports: getIsAskToJoin

// Module 11072 (getIsAskToJoin)
import { ActivityActionTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/getIsAskToJoin.tsx");

export const getIsAskToJoin = function getIsAskToJoin(message) {
  const activity = message.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  return type === ActivityActionTypes.JOIN_REQUEST;
};
