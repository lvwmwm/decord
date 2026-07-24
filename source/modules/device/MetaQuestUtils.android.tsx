// Module ID: 1553
// Function ID: 17592
// Name: isMetaQuest
// Dependencies: [647, 1554, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1553 (isMetaQuest)
function isMetaQuest() {
  return importDefault(647).isMetaQuest();
}
const isMetaQuestResult = isMetaQuest();
const result = require("set").fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export { isMetaQuest };
export const isQuestRelease = function isQuestRelease() {
  const constants = importAll(1554).getConstants();
  let startsWithResult;
  if (null != constants) {
    const ReleaseChannel = constants.ReleaseChannel;
    if (null != ReleaseChannel) {
      startsWithResult = ReleaseChannel.startsWith("quest");
    }
  }
  return null != startsWithResult && startsWithResult;
};
export const isThumbstickScrollDevice = isMetaQuestResult;
