// Module ID: 5412
// Function ID: 5413
// Name: getKeyboardAnimationConfigs
// Dependencies: [1652]
// Exports: getKeyboardAnimationConfigs

// Module 5412 (getKeyboardAnimationConfigs)
import _mod1652 from "module_1652" /* 1652 */;

let tmp2;
let tmp3;
const items = [{ code: "(function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){let[Easing]=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}})" }, _mod1652.Easing];
let c0;
[tmp2, tmp3] = items;
function pnpm_getKeyboardAnimationConfigsTs1(arg0, duration) {
  if ("easeIn" === arg0) {
    const obj2 = { easing: _undefined.in(_undefined.ease), duration };
    return obj2;
  } else if ("easeOut" === arg0) {
    const obj3 = { easing: _undefined.out(_undefined.ease), duration };
    return obj3;
  } else if ("easeInEaseOut" === arg0) {
    const obj4 = { easing: _undefined.inOut(_undefined.ease), duration };
    return obj4;
  } else if ("linear" === arg0) {
    return { easing: _undefined.linear, duration };
  } else if ("keyboard" === arg0) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
}
const items1 = [tmp3];
pnpm_getKeyboardAnimationConfigsTs1.__closure = items1;
pnpm_getKeyboardAnimationConfigsTs1.__workletHash = 3250606586393;
pnpm_getKeyboardAnimationConfigsTs1.__initData = tmp2;

export const getKeyboardAnimationConfigs = pnpm_getKeyboardAnimationConfigsTs1;
