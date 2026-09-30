// Module ID: 9033
// Function ID: 9034
// Name: isOrientationLockSupported
// Dependencies: [4842, 1610, 2]
// Exports: default

// Module 9033 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4842 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !tmp(1610).isMetaQuest();
    const tmpResult = tmp(1610);
  }
  if (result) {
    result = tmp(4842).isOrientationLockSupported();
    const tmpResult2 = tmp(4842);
  }
  return result;
};
