// Module ID: 10338
// Function ID: 10339
// Name: isOrientationLockSupported
// Dependencies: [5066, 1627, 2]
// Exports: default

// Module 10338 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import DeviceUtils from "DeviceUtils" /* 5066 */;
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
