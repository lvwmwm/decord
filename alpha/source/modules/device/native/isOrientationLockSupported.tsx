// Module ID: 10986
// Function ID: 10987
// Name: isOrientationLockSupported
// Dependencies: [4966, 1623, 2]
// Exports: default

// Module 10986 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import DeviceUtils from "DeviceUtils" /* 4966 */;
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
