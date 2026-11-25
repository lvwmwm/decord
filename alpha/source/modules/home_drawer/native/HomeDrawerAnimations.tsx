// Module ID: 17688
// Function ID: 17689
// Name: HomeDrawerAnimations
// Dependencies: [1653, 2]

// Module 17688 (HomeDrawerAnimations)
import _mod1653 from "module_1653" /* 1653 */;
import size from "module_2" /* 2 */;

let Easing;
let Easing3;
let Easing4;
let out;
const obj = { duration: 200, easing: Easing.out(_mod1653.Easing.cubic) };
Easing = _mod1653.Easing;
const obj2 = { duration: 100, easing: out(Easing3.poly(4)) };
const Easing2 = _mod1653.Easing;
out = Easing2.out;
Easing3 = _mod1653.Easing;
const obj3 = { duration: 180, easing: Easing4.bezier(0, 0, 0.2, 1) };
Easing4 = _mod1653.Easing;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_FLING_THROW_TIMING = obj2;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj3;
