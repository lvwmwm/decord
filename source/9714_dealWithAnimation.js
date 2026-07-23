// Module ID: 9714
// Function ID: 75523
// Name: dealWithAnimation
// Dependencies: [1582]

// Module 9714 (dealWithAnimation)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function dealWithAnimation_Pnpm_dealWithAnimationTs1(withAnimation){const{withSpring,withTiming}=this.__closure;switch(withAnimation.type){case\"spring\":return function(value,cb){return withSpring(value,withAnimation.config,function(isFinished){return cb(isFinished);});};case\"timing\":return function(value,cb){return withTiming(value,withAnimation.config,function(isFinished){return cb(isFinished);});};}}" };
let closure_3 = { code: "function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
let closure_4 = { code: "function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}" };
arg5.dealWithAnimation = (() => {
  function dealWithAnimation(type) {
    let closure_0 = type;
    type = type.type;
    if ("spring" === type) {
      return (targetHeight, cb) => {
        const type = cb;
        /* worklet (recovered source) */ function pnpm_dealWithAnimationTs2(isFinished){const{cb}=this.__closure;return cb(isFinished);}
        pnpm_dealWithAnimationTs2.__closure = { cb };
        pnpm_dealWithAnimationTs2.__workletHash = 5381689684735;
        pnpm_dealWithAnimationTs2.__initData = outer2_3;
        return outer2_0(outer2_1[0]).withSpring(targetHeight, type.config, pnpm_dealWithAnimationTs2);
      };
    } else {
      return "timing" === type ? ((value, cb) => {
        const type = cb;
        /* worklet (recovered source) */ function pnpm_dealWithAnimationTs3(isFinished){const{cb}=this.__closure;return cb(isFinished);}
        pnpm_dealWithAnimationTs3.__closure = { cb };
        pnpm_dealWithAnimationTs3.__workletHash = 457847741022;
        pnpm_dealWithAnimationTs3.__initData = outer2_4;
        return outer2_0(outer2_1[0]).withTiming(value, type.config, pnpm_dealWithAnimationTs3);
      }) : undefined;
    }
  }
  dealWithAnimation.__closure = { withSpring: require(1582) /* cancelAnimation */.withSpring, withTiming: require(1582) /* cancelAnimation */.withTiming };
  dealWithAnimation.__workletHash = 2113361159301;
  dealWithAnimation.__initData = closure_2;
  return dealWithAnimation;
})();
