// Module ID: 14350
// Function ID: 14351
// Name: conjureLiveRelaunch
// Dependencies: [8702, 2]
// Exports: relaunchAppFramesForBuild

// Module 14350 (conjureLiveRelaunch)
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 8702 */;
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveRelaunch.tsx");

export const relaunchAppFramesForBuild = function relaunchAppFramesForBuild(applicationId, build) {
  let flag = map.get(applicationId) !== build;
  const obj = map;
  if (flag) {
    const result = obj.set(applicationId, build);
    const obj2 = ConjurePlatformUtilsDefault;
    obj2.reloadAppFrames(applicationId);
    flag = true;
  }
  return flag;
};
