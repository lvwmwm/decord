// Module ID: 8834
// Function ID: 8835
// Name: isOrientationLockSupported
// Dependencies: [4812, 1610, 2]
// Exports: default

// Module 8834 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import DeviceUtils from "DeviceUtils" /* 4812 */;
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
