// Module ID: 9673
// Function ID: 9674
// Name: isOrientationLockSupported
// Dependencies: [4769, 1613, 2]
// Exports: default

// Module 9673 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4769 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !tmp(1613).isMetaQuest();
    const tmpResult = tmp(1613);
  }
  if (result) {
    result = tmp(4769).isOrientationLockSupported();
    const tmpResult2 = tmp(4769);
  }
  return result;
};
