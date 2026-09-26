// Module ID: 8834
// Function ID: 8835
// Name: isOrientationLockSupported
// Dependencies: [4812, 1610, 2]
// Exports: default

// Module 8834 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4812 */;
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
    result = tmp(4812).isOrientationLockSupported();
    const tmpResult2 = tmp(4812);
  }
  return result;
};
