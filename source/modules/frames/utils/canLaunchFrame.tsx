// Module ID: 10472
// Function ID: 81092
// Name: canLaunchFrame
// Dependencies: []
// Exports: canLaunchFrame

// Module 10472 (canLaunchFrame)
const ApplicationFlags = require(dependencyMap[0]).ApplicationFlags;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = require(dependencyMap[2]).hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const obj2 = require(dependencyMap[2]);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = obj3.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    const obj = require(dependencyMap[1]);
  }
  return false;
};
