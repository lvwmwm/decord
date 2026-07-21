// Module ID: 9706
// Function ID: 75469
// Name: dealWithAnimation
// Dependencies: []

// Module 9706 (dealWithAnimation)
let closure_2 = { code: "function dealWithAnimation_Pnpm_dealWithAnimationTs1(withAnimation){const{withSpring,withTiming}=this.__closure;switch(withAnimation.type){case\"spring\":return function(value,cb){return withSpring(value,withAnimation.config,function(isFinished){return cb(isFinished);});};case\"timing\":return function(value,cb){return withTiming(value,withAnimation.config,function(isFinished){return cb(isFinished);});};}}" };
let closure_3 = { code: "function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
let closure_4 = { code: "function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
arg5.dealWithAnimation = () => {
  function dealWithAnimation(type) {
    type = type.type;
    if ("spring" === type) {
      return (targetHeight, cb) => {
        targetHeight = cb;
        /* worklet (recovered source) */ function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}
        pnpm_dealWithAnimationTs2.__closure = { cb };
        pnpm_dealWithAnimationTs2.__workletHash = 5381689684735;
        pnpm_dealWithAnimationTs2.__initData = closure_3;
        return targetHeight(closure_1[0]).withSpring(targetHeight, targetHeight.config, pnpm_dealWithAnimationTs2);
      };
    } else {
      return "timing" === type ? (value, cb) => {
        value = cb;
        /* worklet (recovered source) */ function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}
        pnpm_dealWithAnimationTs3.__closure = { cb };
        pnpm_dealWithAnimationTs3.__workletHash = 457847741022;
        pnpm_dealWithAnimationTs3.__initData = closure_4;
        return value(closure_1[0]).withTiming(value, value.config, pnpm_dealWithAnimationTs3);
      } : undefined;
    }
  }
  dealWithAnimation.__closure = { withSpring: arg1(arg6[0]).withSpring, withTiming: arg1(arg6[0]).withTiming };
  dealWithAnimation.__workletHash = 2113361159301;
  dealWithAnimation.__initData = closure_2;
  return dealWithAnimation;
}();
