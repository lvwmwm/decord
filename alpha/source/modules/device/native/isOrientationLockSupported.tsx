// Module ID: 10945
// Function ID: 10946
// Name: isOrientationLockSupported
// Dependencies: [5200, 1624, 2]
// Exports: default

// Module 10945 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import DeviceUtils from "DeviceUtils" /* 5200 */;
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
