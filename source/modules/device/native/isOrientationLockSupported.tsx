// Module ID: 9805
// Function ID: 9806
// Name: isOrientationLockSupported
// Dependencies: [4322, 1624, 2]
// Exports: default

// Module 9805 (isOrientationLockSupported)
let result = require("set").fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = require(4322) /* DCDDeviceManager */.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1624);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4322);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
