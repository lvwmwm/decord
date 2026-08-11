// Module ID: 9749
// Function ID: 9750
// Name: isOrientationLockSupported
// Dependencies: [4283, 1624, 2]
// Exports: default

// Module 9749 (isOrientationLockSupported)
let result = require("set").fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = require(4283) /* DCDDeviceManager */.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1624);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4283);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
