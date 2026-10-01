// Module ID: 9027
// Function ID: 9028
// Name: isOrientationLockSupported
// Dependencies: [4821, 1610, 2]
// Exports: default

// Module 9027 (isOrientationLockSupported)
import DeviceUtils from "DeviceUtils" /* 4821 */;
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
    result = tmp(4821).isOrientationLockSupported();
    const tmpResult2 = tmp(4821);
  }
  return result;
};
