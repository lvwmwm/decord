// Module ID: 9446
// Function ID: 9447
// Name: isOrientationLockSupported
// Dependencies: [4424, 1625, 2]
// Exports: default

// Module 9446 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4424 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1625);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4424);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
