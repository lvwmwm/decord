// Module ID: 9677
// Function ID: 9678
// Name: isOrientationLockSupported
// Dependencies: [4767, 1609, 2]
// Exports: default

// Module 9677 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4767 */;
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
    result = tmp(4767).isOrientationLockSupported();
    const tmpResult2 = tmp(4767);
  }
  return result;
};
