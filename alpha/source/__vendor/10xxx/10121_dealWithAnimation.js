// Module ID: 10121
// Function ID: 10122
// Name: dealWithAnimation
// Dependencies: [1655]
// Exports: dealWithAnimation

// Module 10121 (dealWithAnimation)
import _mod1655 from "module_1655" /* 1655 */;

const require = globalThis.__r;

let closure_2 = { code: "function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
let closure_3 = { code: "function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
function dealWithAnimation(type) {
  type = type.type;
  if ("spring" === type) {
    return (value, cb) => {
      type = cb;
      const fn = function o(arg0) {
        return closure_0(arg0);
      };
      fn.__closure = { cb };
      fn.__workletHash = 5381689684735;
      fn.__initData = __initData;
      const obj = _mod1655;
      return obj.withSpring(value, type.config, fn);
    };
  } else {
    return "timing" === type ? ((value, cb) => {
      type = cb;
      const fn = function o(arg0) {
        return closure_0(arg0);
      };
      fn.__closure = { cb };
      fn.__workletHash = 457847741022;
      fn.__initData = __initData2;
      const obj = _mod1655;
      return obj.withTiming(value, type.config, fn);
    }) : undefined;
  }
}
let obj = { withSpring: require("module_1655").withSpring, withTiming: require("module_1655").withTiming };
dealWithAnimation.__closure = obj;
dealWithAnimation.__workletHash = 2113361159301;
dealWithAnimation.__initData = { code: "function dealWithAnimation_Pnpm_dealWithAnimationTs1(withAnimation){const{withSpring,withTiming}=this.__closure;switch(withAnimation.type){case\"spring\":return function(value,cb){return withSpring(value,withAnimation.config,function(isFinished){return cb(isFinished);});};case\"timing\":return function(value,cb){return withTiming(value,withAnimation.config,function(isFinished){return cb(isFinished);});};}}" };

export { dealWithAnimation };
