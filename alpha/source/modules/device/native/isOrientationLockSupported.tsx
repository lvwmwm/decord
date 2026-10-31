// Module ID: 11005
// Function ID: 11006
// Name: isOrientationLockSupported
// Dependencies: [4971, 1622, 2]
// Exports: default

// Module 11005 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
import DeviceUtils from "DeviceUtils" /* 4971 */;
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
