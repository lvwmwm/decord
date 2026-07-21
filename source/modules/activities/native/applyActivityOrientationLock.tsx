// Module ID: 15563
// Function ID: 118754
// Name: applyActivityOrientationLock
// Dependencies: []
// Exports: default

// Module 15563 (applyActivityOrientationLock)
const OrientationLockState = require(dependencyMap[0]).OrientationLockState;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/activities/native/applyActivityOrientationLock.tsx");

export default function applyActivityOrientationLock(arg0) {
  let obj = require(dependencyMap[1]);
  if (!obj.getIsTabletActivitySurface()) {
    if (OrientationLockState.UNLOCKED === arg0) {
      obj = { unlockAfterRotatingToPreviousLock: true };
      require(dependencyMap[2]).unlockOrientation(obj);
      const obj4 = require(dependencyMap[2]);
    } else if (OrientationLockState.PORTRAIT === arg0) {
      require(dependencyMap[2]).lockOrientation("PORTRAIT", true);
      const obj3 = require(dependencyMap[2]);
    } else if (OrientationLockState.LANDSCAPE === arg0) {
      require(dependencyMap[2]).lockOrientation("LANDSCAPE", true);
      const obj2 = require(dependencyMap[2]);
    }
  }
};
