// Module ID: 15948
// Function ID: 15949
// Name: HOME_DRAWER_SETTLE_TIMING
// Dependencies: [4218, 2]

// Module 15948 (HOME_DRAWER_SETTLE_TIMING)
import set from "set" /* 2 */;
import _mod4218 from "module_4218" /* 4218 */;

let obj = { duration: 280, easing: null };
const Easing = _mod4218.Easing;
obj[1] = Easing.out(_mod4218.Easing.cubic);
obj = { duration: 180, easing: null };
const Easing2 = _mod4218.Easing;
obj[1] = Easing2.out(_mod4218.Easing.cubic);
const result = set.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj;
