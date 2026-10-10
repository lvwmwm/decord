// Module ID: 6326
// Function ID: 6327
// Dependencies: [1656]
// Exports: getKeyboardAnimationConfigs

// Module 6326
import _mod1656 from "module_1656" /* 1656 */;

const require = globalThis.__r;

const fn = function n(arg0, duration) {
  let Easing;
  let Easing2;
  let Easing3;
  if ("easeIn" === arg0) {
    const obj2 = { easing: Easing3.in(_mod1656.Easing.ease), duration };
    Easing3 = _mod1656.Easing;
    return obj2;
  } else if ("easeOut" === arg0) {
    const obj3 = { easing: Easing2.out(_mod1656.Easing.ease), duration };
    Easing2 = _mod1656.Easing;
    return obj3;
  } else if ("easeInEaseOut" === arg0) {
    const obj4 = { easing: Easing.inOut(_mod1656.Easing.ease), duration };
    Easing = _mod1656.Easing;
    return obj4;
  } else if ("linear" === arg0) {
    const obj = { easing: _mod1656.Easing.linear, duration };
    return obj;
  } else if ("keyboard" === arg0) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
};
let obj = { Easing: require("module_1656").Easing };
fn.__closure = obj;
fn.__workletHash = 10639588577824;
fn.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };

export const getKeyboardAnimationConfigs = fn;
