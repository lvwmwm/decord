// Module ID: 1630
// Function ID: 1631
// Name: MetaQuestUtils
// Dependencies: [1368, 1383, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1630 (MetaQuestUtils)
import react_nativeAll from "react-native" /* 1383 */;
import react_native_mod from "react-native" /* 1368 */;
import size from "module_2" /* 2 */;

let constants;

let react_native = react_native_mod;
react_native = react_native.isMetaQuest();
const result = size.fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export const isMetaQuest = function isMetaQuest() {
  const obj = react_native;
  return obj.isMetaQuest();
};
export const isQuestRelease = function isQuestRelease() {
  const obj = react_nativeAll;
  constants = obj.getConstants();
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
export const isThumbstickScrollDevice = react_native;
