// Module ID: 18737
// Function ID: 18738
// Name: HomeDrawerAnimations
// Dependencies: [1655, 2]

// Module 18737 (HomeDrawerAnimations)
import _mod1655 from "module_1655" /* 1655 */;
import size from "module_2" /* 2 */;

let Easing;
let Easing3;
let Easing4;
let out;
const obj = { duration: 200, easing: Easing.out(_mod1655.Easing.cubic) };
Easing = _mod1655.Easing;
const obj2 = { duration: 100, easing: out(Easing3.poly(4)) };
const Easing2 = _mod1655.Easing;
out = Easing2.out;
Easing3 = _mod1655.Easing;
const obj3 = { duration: 180, easing: Easing4.bezier(0, 0, 0.2, 1) };
Easing4 = _mod1655.Easing;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAnimations.tsx");

export const HOME_DRAWER_SETTLE_TIMING = obj;
export const HOME_DRAWER_FLING_THROW_TIMING = obj2;
export const HOME_DRAWER_FLING_RETURN_TIMING = obj3;
