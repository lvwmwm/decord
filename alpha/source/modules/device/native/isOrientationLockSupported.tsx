// Module ID: 9091
// Function ID: 9092
// Name: isOrientationLockSupported
// Dependencies: [4872, 1615, 2]
// Exports: default

// Module 9091 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
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
