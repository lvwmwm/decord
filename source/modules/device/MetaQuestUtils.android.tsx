// Module ID: 1605
// Function ID: 1606
// Name: isMetaQuest
// Dependencies: [670, 1606, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1605 (isMetaQuest)
import importDefaultResult from "enforcing";

const isMetaQuestResult = require("enforcing").isMetaQuest();
const result = require("set").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return importDefault(670).isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const constants = importAll(1606).getConstants();
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
