// Module ID: 16024
// Function ID: 16025
// Name: HOME_DRAWER_SETTLE_TIMING
// Dependencies: [4296, 2]

// Module 16024 (HOME_DRAWER_SETTLE_TIMING)
import set from "set" /* 2 */;
import _mod4296 from "module_4296" /* 4296 */;

let obj = { duration: 280, easing: null };
const Easing = _mod4296.Easing;
obj[1] = Easing.out(_mod4296.Easing.cubic);
obj = { duration: 180, easing: null };
const Easing2 = _mod4296.Easing;
obj[1] = Easing2.out(_mod4296.Easing.cubic);
const result = set.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_SNAP_TIMING = obj;
