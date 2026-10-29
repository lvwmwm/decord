// Module ID: 10961
// Function ID: 10962
// Name: isOrientationLockSupported
// Dependencies: [4962, 1628, 2]
// Exports: default

// Module 10961 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import DeviceUtils from "DeviceUtils" /* 4962 */;
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
