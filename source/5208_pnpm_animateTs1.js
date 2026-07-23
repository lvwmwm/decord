// Module ID: 5208
// Function ID: 45134
// Name: pnpm_animateTs1
// Dependencies: [5190, 1582]

// Module 5208 (pnpm_animateTs1)
const require = arg1;
const dependencyMap = arg6;
/* worklet (recovered source) */ function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}
pnpm_animateTs1.__closure = { ANIMATION_CONFIGS: require("GESTURE_SOURCE").ANIMATION_CONFIGS, ANIMATION_METHOD: require("GESTURE_SOURCE").ANIMATION_METHOD, withTiming: require("cancelAnimation").withTiming, withSpring: require("cancelAnimation").withSpring };
pnpm_animateTs1.__workletHash = 17032227615993;
pnpm_animateTs1.__initData = { code: "function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}" };
arg5.animate = pnpm_animateTs1;
