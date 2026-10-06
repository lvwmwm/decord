// Module ID: 8829
// Function ID: 8830
// Name: isOrientationLockSupported
// Dependencies: [4813, 1616, 2]
// Exports: default

// Module 8829 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1616 */;
import DeviceUtils from "DeviceUtils" /* 4813 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const obj = DeviceUtils;
  let result = !obj.isIpadOS();
  obj.isIpadOS();
  if (result) {
    const tmpResult = MetaQuestUtils;
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    const tmpResult2 = DeviceUtils;
    result = tmpResult2.isOrientationLockSupported();
  }
  return result;
};
