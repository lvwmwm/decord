// Module ID: 6065
// Function ID: 6066
// Dependencies: [1638]
// Exports: getKeyboardAnimationConfigs

// Module 6065
import cancelAnimation from "cancelAnimation" /* 1638 */;

require = fn;
const dependencyMap = arg6;
fn = function n(arg0, duration) {
  if ("easeIn" === arg0) {
    const obj2 = { easing: null, duration: null };
    const Easing3 = cancelAnimation.Easing;
    obj2.easing = Easing3.in(cancelAnimation.Easing.ease);
    obj2.duration = duration;
    return obj2;
  } else if ("easeOut" === arg0) {
    const obj3 = { easing: null, duration: null };
    const Easing2 = cancelAnimation.Easing;
    obj3.easing = Easing2.out(cancelAnimation.Easing.ease);
    obj3.duration = duration;
    return obj3;
  } else if ("easeInEaseOut" === arg0) {
    const obj4 = { easing: null, duration: null };
    const Easing = cancelAnimation.Easing;
    obj4.easing = Easing.inOut(cancelAnimation.Easing.ease);
    obj4.duration = duration;
    return obj4;
  } else if ("linear" === arg0) {
    const obj = { easing: cancelAnimation.Easing.linear, duration };
    return obj;
  } else if ("keyboard" === arg0) {
    return { damping: 500, stiffness: 1000, mass: 3, overshootClamping: true, restDisplacementThreshold: 10, restSpeedThreshold: 10 };
  }
};
fn.__closure = { Easing: fn(1638).Easing };
fn.__workletHash = 10639588577824;
fn.__initData = { code: "function pnpm_getKeyboardAnimationConfigsTs1(easing,duration){const{Easing}=this.__closure;switch(easing){case'easeIn':return{easing:Easing.in(Easing.ease),duration:duration};case'easeOut':return{easing:Easing.out(Easing.ease),duration:duration};case'easeInEaseOut':return{easing:Easing.inOut(Easing.ease),duration:duration};case'linear':return{easing:Easing.linear,duration:duration};case'keyboard':return{damping:500,stiffness:1000,mass:3,overshootClamping:true,restDisplacementThreshold:10,restSpeedThreshold:10};}}" };

export const getKeyboardAnimationConfigs = fn;
