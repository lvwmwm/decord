// Module ID: 9645
// Function ID: 9646
// Name: isOrientationLockSupported
// Dependencies: [4735, 1609, 2]
// Exports: default

// Module 9645 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4735 */;
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
    result = tmp(4735).isOrientationLockSupported();
    const tmpResult2 = tmp(4735);
  }
  return result;
};
