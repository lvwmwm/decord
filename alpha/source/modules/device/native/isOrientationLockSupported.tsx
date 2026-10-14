// Module ID: 10369
// Function ID: 10370
// Name: isOrientationLockSupported
// Dependencies: [5072, 1628, 2]
// Exports: default

// Module 10369 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import DeviceUtils from "DeviceUtils" /* 5072 */;
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
