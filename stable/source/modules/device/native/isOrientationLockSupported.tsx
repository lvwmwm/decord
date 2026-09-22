// Module ID: 9602
// Function ID: 9603
// Name: isOrientationLockSupported
// Dependencies: [4615, 1608, 2]
// Exports: default

// Module 9602 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4615 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DeviceUtils.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    result = !tmp(1608).isMetaQuest();
    const tmpResult = tmp(1608);
  }
  if (result) {
    result = tmp(4615).isOrientationLockSupported();
    const tmpResult2 = tmp(4615);
  }
  return result;
};
