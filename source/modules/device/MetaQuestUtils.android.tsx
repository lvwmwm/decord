// Module ID: 1608
// Function ID: 1609
// Name: isMetaQuest
// Dependencies: [1342, 1364, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1608 (isMetaQuest)
import getConstantsAll from "getConstants" /* 1364 */;
import importDefaultResult from "enforcing" /* 1342 */;

const isMetaQuestResult = importDefaultResult.isMetaQuest();
const result = require("set").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return importDefaultResult.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const constants = getConstantsAll.getConstants();
  let flag;
  if (constants != null) {
    const ReleaseChannel = constants.ReleaseChannel;
    if (ReleaseChannel != null) {
      flag = ReleaseChannel.startsWith("quest");
    }
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isThumbstickScrollDevice = isMetaQuestResult;
