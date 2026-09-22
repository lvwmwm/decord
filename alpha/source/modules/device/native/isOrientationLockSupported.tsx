// Module ID: 9651
// Function ID: 9652
// Name: isOrientationLockSupported
// Dependencies: [4736, 1609, 2]
// Exports: default

// Module 9651 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4736 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !tmp(1609).isMetaQuest();
    const tmpResult = tmp(1609);
  }
  if (result) {
    result = tmp(4736).isOrientationLockSupported();
    const tmpResult2 = tmp(4736);
  }
  return result;
};
