// Module ID: 9641
// Function ID: 9642
// Name: isOrientationLockSupported
// Dependencies: [4737, 1613, 2]
// Exports: default

// Module 9641 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4737 */;
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
    result = tmp(4737).isOrientationLockSupported();
    const tmpResult2 = tmp(4737);
  }
  return result;
};
