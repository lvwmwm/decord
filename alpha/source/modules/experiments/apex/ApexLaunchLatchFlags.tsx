// Module ID: 1252
// Function ID: 1253
// Name: ApexLaunchLatchFlags
// Dependencies: [1253, 2]
// Exports: resolveLaunchLatchFlags

// Module 1252 (ApexLaunchLatchFlags)
import ApexUnitUtils from "ApexUnitUtils" /* 1253 */;
import size from "module_2" /* 2 */;

let obj3;
let obj = { writer: true, reads: false, exposures: false, suppressions: false };
const obj2 = { kind: "installation", name: "2026-11-apex-launch-latch", defaultConfig: obj, variations: obj3 };
obj3 = { 0: obj, 1: null, 2: null, 3: null, 4: null, 5: null };
const obj4 = { writer: false };
const merged = Object.assign(obj);
obj3[1] = obj4;
const obj5 = { reads: true };
const merged1 = Object.assign(obj);
obj3[2] = obj5;
const obj6 = { reads: true, exposures: true };
const merged2 = Object.assign(obj);
obj3[3] = obj6;
const obj7 = { reads: true, exposures: true, suppressions: true };
const merged3 = Object.assign(obj);
obj3[4] = obj7;
const obj8 = { suppressions: true };
const merged4 = Object.assign(obj);
obj3[5] = obj8;
const result = size.fileFinishedImporting("modules/experiments/apex/ApexLaunchLatchFlags.tsx");

export const SHADOW_LATCH_FLAGS = obj;
export const ApexLaunchLatchFlags = obj2;
export function resolveLaunchLatchFlags(getAssignment) {
  const obj = ApexUnitUtils;
  const unitId = obj.getUnitId("installation", { location: "apex_launch_latch_flags" });
  if ("" === unitId) {
    return obj2.defaultConfig;
  } else {
    const assignment = getAssignment.getAssignment("installation", unitId, obj2.name);
    let defaultConfig;
    if (null != assignment) {
      defaultConfig = tmp3.variations[assignment.variantId];
    }
    if (null == defaultConfig) {
      defaultConfig = tmp3.defaultConfig;
    }
    return defaultConfig;
  }
}
