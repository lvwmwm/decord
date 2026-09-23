// Module ID: 9724
// Function ID: 9725
// Name: isOrientationLockSupported
// Dependencies: [4806, 1609, 2]
// Exports: default

// Module 9724 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4806 */;
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
    result = tmp(4806).isOrientationLockSupported();
    const tmpResult2 = tmp(4806);
  }
  return result;
};
