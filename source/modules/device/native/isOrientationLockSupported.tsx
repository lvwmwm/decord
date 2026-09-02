// Module ID: 9538
// Function ID: 9539
// Name: isOrientationLockSupported
// Dependencies: [4457, 1623, 2]
// Exports: default

// Module 9538 (isOrientationLockSupported)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4457 */;

let result = set.fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = DCDDeviceManager.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1623);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4457);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
