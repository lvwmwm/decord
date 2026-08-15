// Module ID: 8676
// Function ID: 8677
// Name: isOrientationLockSupported
// Dependencies: [4354, 1625, 2]
// Exports: default

// Module 8676 (isOrientationLockSupported)
let result = require("set").fileFinishedImporting("modules/device/native/isOrientationLockSupported.tsx");

export default function isOrientationLockSupported() {
  const isIpadOSResult = require(4354) /* DCDDeviceManager */.isIpadOS();
  let result = !isIpadOSResult;
  if (!isIpadOSResult) {
    let tmpResult = tmp(1625);
    result = !tmpResult.isMetaQuest();
  }
  if (result) {
    tmpResult = tmp(4354);
    result = tmpResult.isOrientationLockSupported();
  }
  return result;
};
