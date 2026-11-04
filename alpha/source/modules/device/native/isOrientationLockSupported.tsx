// Module ID: 11186
// Function ID: 11187
// Name: isOrientationLockSupported
// Dependencies: [5098, 1624, 2]
// Exports: default

// Module 11186 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import DeviceUtils from "DeviceUtils" /* 5098 */;
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
