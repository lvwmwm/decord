// Module ID: 10601
// Function ID: 10602
// Name: isOrientationLockSupported
// Dependencies: [4780, 1627, 2]
// Exports: default

// Module 10601 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import DeviceUtils from "DeviceUtils" /* 4780 */;
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
