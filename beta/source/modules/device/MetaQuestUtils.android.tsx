// Module ID: 1613
// Function ID: 1614
// Name: MetaQuestUtils
// Dependencies: [1345, 1367, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1613 (MetaQuestUtils)
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1367 */;
import NativeMetaQuestModule_mod from "NativeMetaQuestModule" /* 1345 */;

let NativeMetaQuestModule = NativeMetaQuestModule_mod;
NativeMetaQuestModule = NativeMetaQuestModule.isMetaQuest();
const size = fn(2);
const result = size.fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  return NativeMetaQuestModule.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  constants = ClientInfoUtilsAll.getConstants();
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
export const isThumbstickScrollDevice = NativeMetaQuestModule;
