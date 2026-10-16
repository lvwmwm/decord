// Module ID: 10604
// Function ID: 10605
// Name: isOrientationLockSupported
// Dependencies: [5130, 1630, 2]
// Exports: default

// Module 10604 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import DeviceUtils from "DeviceUtils" /* 5130 */;
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
