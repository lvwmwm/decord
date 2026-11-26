// Module ID: 10013
// Function ID: 10014
// Name: isOrientationLockSupported
// Dependencies: [5000, 1626, 2]
// Exports: default

// Module 10013 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
import DeviceUtils from "DeviceUtils" /* 5000 */;
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
