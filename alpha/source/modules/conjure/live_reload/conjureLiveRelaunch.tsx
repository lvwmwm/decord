// Module ID: 12381
// Function ID: 12382
// Name: conjureLiveRelaunch
// Dependencies: [12366, 2]
// Exports: relaunchAppFramesForBuild, reloadAppFramesAfterDeploy

// Module 12381 (conjureLiveRelaunch)
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 12366 */;
import size from "module_2" /* 2 */;

let set;

const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveRelaunch.tsx");

export const relaunchAppFramesForBuild = function relaunchAppFramesForBuild(applicationId, build) {
  let flag = map.get(applicationId) !== build;
  const obj = map;
  if (flag) {
    const result = obj.set(applicationId, build);
    const value = map1.get(applicationId);
    if (null != value) {
      if (value.source !== "frame") {
        const _Date = Date;
        if (Date.now() - value.at < 30000) {
          map1.delete(applicationId);
          flag = true;
        }
      }
    }
    const _Date2 = Date;
    const obj3 = { source: "frame", at: Date.now() };
    set = map1.set;
    const result1 = set(applicationId, obj3);
    const obj4 = ConjurePlatformUtilsDefault;
    obj4.reloadAppFrames(applicationId);
    flag = true;
  }
  return flag;
};
export const reloadAppFramesAfterDeploy = function reloadAppFramesAfterDeploy(application_id) {
  const value = map1.get(application_id);
  if (null != value) {
    if (value.source !== "deploy") {
      const _Date = Date;
      if (Date.now() - value.at < 30000) {
        map1.delete(application_id);
      }
    }
  }
  const obj2 = { source: "deploy", at: Date.now() };
  const result = obj.set(application_id, obj2);
  const obj3 = ConjurePlatformUtilsDefault;
  obj3.reloadAppFrames(application_id);
};
