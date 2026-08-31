// Module ID: 1624
// Function ID: 1625
// Name: isMetaQuest
// Dependencies: [670, 1625, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1624 (isMetaQuest)
import getConstantsAll from "getConstants" /* 1625 */;
import importDefaultResult from "enforcing" /* 670 */;

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
