// Module ID: 9055
// Function ID: 9056
// Name: isOrientationLockSupported
// Dependencies: [4866, 1615, 2]
// Exports: default

// Module 9055 (isOrientationLockSupported)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import DeviceUtils from "DeviceUtils" /* 4866 */;
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
