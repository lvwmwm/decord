// Module ID: 9872
// Function ID: 9873
// Name: isOrientationLockSupported
// Dependencies: [4874, 1625, 2]
// Exports: default

// Module 9872 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import DeviceUtils from "DeviceUtils" /* 4874 */;
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
