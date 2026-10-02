// Module ID: 6058
// Function ID: 6059
// Dependencies: [1644]
// Exports: getKeyboardAnimationConfigs

// Module 6058
import _mod1644 from "module_1644" /* 1644 */;

const require = globalThis.__r;

const fn = function n(arg0, duration) {
  let Easing;
  let Easing2;
  let Easing3;
  if ("easeIn" === arg0) {
    const obj2 = { easing: Easing3.in(_mod1644.Easing.ease), duration };
    Easing3 = _mod1644.Easing;
    return obj2;
  } else if ("easeOut" === arg0) {
    const obj3 = { easing: Easing2.out(_mod1644.Easing.ease), duration };
    Easing2 = _mod1644.Easing;
    return obj3;
  } else if ("easeInEaseOut" === arg0) {
    const obj4 = { easing: Easing.inOut(_mod1644.Easing.ease), duration };
    Easing = _mod1644.Easing;
    return obj4;
  } else if ("linear" === arg0) {
    const obj = { easing: _mod1644.Easing.linear, duration };
    return obj;
  } else if ("keyboard" === arg0) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
};
let obj = { Easing: require("module_1644").Easing };
fn.__closure = obj;
fn.__workletHash = 10639588577824;
fn.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };

export const getKeyboardAnimationConfigs = fn;
