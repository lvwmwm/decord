// Module ID: 8826
// Function ID: 8827
// Name: isOrientationLockSupported
// Dependencies: [4808, 1609, 2]
// Exports: default

// Module 8826 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4808 */;
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
    result = tmp(4808).isOrientationLockSupported();
    const tmpResult2 = tmp(4808);
  }
  return result;
};
