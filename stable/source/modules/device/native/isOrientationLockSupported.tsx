// Module ID: 10667
// Function ID: 10668
// Name: isOrientationLockSupported
// Dependencies: [5167, 1630, 2]
// Exports: default

// Module 10667 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import DeviceUtils from "DeviceUtils" /* 5167 */;
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
