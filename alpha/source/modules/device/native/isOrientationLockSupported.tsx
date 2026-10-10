// Module ID: 10358
// Function ID: 10359
// Name: isOrientationLockSupported
// Dependencies: [5068, 1628, 2]
// Exports: default

// Module 10358 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import DeviceUtils from "DeviceUtils" /* 5068 */;
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
