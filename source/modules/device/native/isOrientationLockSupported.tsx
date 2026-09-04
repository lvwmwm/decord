// Module ID: 9401
// Function ID: 9402
// Name: isOrientationLockSupported
// Dependencies: [4460, 1623, 2]
// Exports: default

// Module 9401 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4460 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1623);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4460);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
