// Module ID: 4985
// Function ID: 42738
// Name: pnpm_animateTs1
// Dependencies: []

// Module 4985 (pnpm_animateTs1)
/* worklet (recovered source) */ function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}
pnpm_animateTs1.__closure = { ANIMATION_CONFIGS: arg1(arg6[0]).ANIMATION_CONFIGS, ANIMATION_METHOD: arg1(arg6[0]).ANIMATION_METHOD, withTiming: arg1(arg6[1]).withTiming, withSpring: arg1(arg6[1]).withSpring };
pnpm_animateTs1.__workletHash = 17032227615993;
pnpm_animateTs1.__initData = { code: "function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}" };
arg5.animate = pnpm_animateTs1;
