// Module ID: 18062
// Function ID: 18063
// Name: HomeDrawerAnimations
// Dependencies: [5095, 2]

// Module 18062 (HomeDrawerAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import size from "module_2" /* 2 */;

let Easing;
let Easing3;
let Easing4;
let out;
const obj = { duration: 200, easing: Easing.out(ReanimatedRexport.Easing.cubic) };
Easing = ReanimatedRexport.Easing;
const obj2 = { duration: 100, easing: out(Easing3.poly(4)) };
const Easing2 = ReanimatedRexport.Easing;
out = Easing2.out;
Easing3 = ReanimatedRexport.Easing;
const obj3 = { duration: 180, easing: Easing4.bezier(0, 0, 0.2, 1) };
Easing4 = ReanimatedRexport.Easing;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_FLING_THROW_TIMING = obj2;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj3;
