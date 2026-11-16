// Module ID: 1624
// Function ID: 1625
// Name: MetaQuestUtils
// Dependencies: [1354, 1376, 2]
// Exports: isMetaQuest, isQuestRelease

// Module 1624 (MetaQuestUtils)
import react_nativeAll from "react-native" /* 1376 */;
import react_native_mod from "react-native" /* 1354 */;
import size from "module_2" /* 2 */;

let constants;

let react_native = react_native_mod;
react_native = react_native.isMetaQuest();
const result = size.fileFinishedImporting("modules/device/MetaQuestUtils.android.tsx");

export function isMetaQuest() {
  const obj = react_native;
  return obj.isMetaQuest();
}
export function isQuestRelease() {
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
}
export const isThumbstickScrollDevice = react_native;
