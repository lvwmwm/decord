// Module ID: 1553
// Function ID: 17590
// Name: isMetaQuest
// Dependencies: []
// Exports: isMetaQuest, isQuestRelease

// Module 1553 (isMetaQuest)
function isMetaQuest() {
  return importDefault(dependencyMap[0]).isMetaQuest();
}
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export { isMetaQuest };
export const isQuestRelease = function isQuestRelease() {
  const constants = importAll(dependencyMap[1]).getConstants();
  let startsWithResult;
  if (null != constants) {
    const ReleaseChannel = constants.ReleaseChannel;
    if (null != ReleaseChannel) {
      startsWithResult = ReleaseChannel.startsWith("quest");
    }
  }
  return null != startsWithResult && startsWithResult;
};
export const isThumbstickScrollDevice = isMetaQuest();
