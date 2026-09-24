// Module ID: 11112
// Function ID: 11113
// Name: dealWithAnimation
// Dependencies: [1641]
// Exports: dealWithAnimation

// Module 11112 (dealWithAnimation)
import cancelAnimation from "cancelAnimation" /* 1641 */;

require = fn;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
let closure_3 = { code: "function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
function dealWithAnimation(type) {
  type = type.type;
  if ("spring" === type) {
    return (value, cb) => {
      type = cb;
      const fn = function o(arg0) {
        return cb(arg0);
      };
      fn.__closure = { cb };
      fn.__workletHash = 5381689684735;
      fn.__initData = __initData;
      return cancelAnimation.withSpring(value, type.config, fn);
    };
  } else {
    return "timing" === type ? ((value, cb) => {
      type = cb;
      const fn = function o(arg0) {
        return cb(arg0);
      };
      fn.__closure = { cb };
      fn.__workletHash = 457847741022;
      fn.__initData = __initData2;
      return cancelAnimation.withTiming(value, type.config, fn);
    }) : undefined;
  }
}
dealWithAnimation.__closure = { withSpring: fn(1641).withSpring, withTiming: fn(1641).withTiming };
dealWithAnimation.__workletHash = 2113361159301;
dealWithAnimation.__initData = { code: "function dealWithAnimation_Pnpm_dealWithAnimationTs1(withAnimation){const{withSpring,withTiming}=this.__closure;switch(withAnimation.type){case\"spring\":return function(value,cb){return withSpring(value,withAnimation.config,function(isFinished){return cb(isFinished);});};case\"timing\":return function(value,cb){return withTiming(value,withAnimation.config,function(isFinished){return cb(isFinished);});};}}" };

export { dealWithAnimation };
