// Module ID: 9967
// Function ID: 9968
// Name: isOrientationLockSupported
// Dependencies: [4423, 1625, 2]
// Exports: default

// Module 9967 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4423 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1625);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4423);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
