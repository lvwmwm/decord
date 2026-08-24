// Module ID: 8713
// Function ID: 8714
// Name: isOrientationLockSupported
// Dependencies: [4358, 1625, 2]
// Exports: default

// Module 8713 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4358 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1625);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4358);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
