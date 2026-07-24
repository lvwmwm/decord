// Module ID: 1657
// Function ID: 18404
// Name: validateConfig
// Dependencies: [1593, 1622, 1658, 1659, 1660]

// Module 1657 (validateConfig)
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function validateConfig_Pnpm_decayTs1(config){if(config.clamp){if(!Array.isArray(config.clamp)){throw new ReanimatedError(\"`config.clamp` must be an array but is \"+typeof config.clamp+\".\");}if(config.clamp.length!==2){throw new ReanimatedError(\"`clamp array` must contain 2 items but is given \"+config.clamp.length+\".\");}}if(config.velocityFactor<=0){throw new ReanimatedError(\"`config.velocityFactor` must be greater then 0 but is \"+config.velocityFactor+\".\");}if(config.rubberBandEffect&&!config.clamp){throw new ReanimatedError('You need to set `clamp` property when using `rubberBandEffect`.');}}" };
const tmp2 = (() => {
  function validateConfig(clamp) {
    if (clamp.clamp) {
      const _Array = Array;
      if (Array.isArray(clamp.clamp)) {
        if (2 !== clamp.clamp.length) {
          const ReanimatedError4 = outer1_0(outer1_1[0]).ReanimatedError;
          const _HermesInternal3 = HermesInternal;
          const prototype4 = ReanimatedError4.prototype;
          const reanimatedError4 = new ReanimatedError4("`clamp array` must contain 2 items but is given " + clamp.clamp.length + ".");
          throw reanimatedError4;
        }
      } else {
        const ReanimatedError = outer1_0(outer1_1[0]).ReanimatedError;
        const _HermesInternal = HermesInternal;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("`config.clamp` must be an array but is " + typeof clamp.clamp + ".");
        throw reanimatedError;
      }
    }
    if (clamp.velocityFactor <= 0) {
      const ReanimatedError3 = outer1_0(outer1_1[0]).ReanimatedError;
      const _HermesInternal2 = HermesInternal;
      const prototype3 = ReanimatedError3.prototype;
      const reanimatedError3 = new ReanimatedError3("`config.velocityFactor` must be greater then 0 but is " + clamp.velocityFactor + ".");
      throw reanimatedError3;
    } else if (clamp.rubberBandEffect) {
      if (!clamp.clamp) {
        const ReanimatedError2 = outer1_0(outer1_1[0]).ReanimatedError;
        const prototype2 = ReanimatedError2.prototype;
        const reanimatedError2 = new ReanimatedError2("You need to set `clamp` property when using `rubberBandEffect`.");
        throw reanimatedError2;
      }
    }
  }
  validateConfig.__closure = {};
  validateConfig.__workletHash = 14532293098342;
  validateConfig.__initData = closure_2;
  return validateConfig;
})();
let closure_3 = tmp2;
let closure_4 = { code: "function pnpm_decayTs3(){const{userConfig,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,callback,getReduceMotionForAnimation}=this.__closure;var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};}" };
/* worklet (recovered source) */ function pnpm_decayTs2(userConfig,callback){const{defineAnimation,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,getReduceMotionForAnimation}=this.__closure;return defineAnimation(0,function(){'worklet';var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}
pnpm_decayTs2.__closure = { defineAnimation: require("isValidLayoutAnimationProp").defineAnimation, isValidRubberBandConfig: require("VELOCITY_EPS").isValidRubberBandConfig, rubberBandDecay: require("rubberBandDecay").rubberBandDecay, rigidDecay: require("rigidDecay").rigidDecay, validateConfig: tmp2, getReduceMotionForAnimation: require("isValidLayoutAnimationProp").getReduceMotionForAnimation };
pnpm_decayTs2.__workletHash = 3913201228611;
pnpm_decayTs2.__initData = { code: "function pnpm_decayTs2(userConfig,callback){const{defineAnimation,isValidRubberBandConfig,rubberBandDecay,rigidDecay,validateConfig,getReduceMotionForAnimation}=this.__closure;return defineAnimation(0,function(){'worklet';var _config$velocity;const config={deceleration:0.998,velocityFactor:1,velocity:0,rubberBandFactor:0.6};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}const decay=isValidRubberBandConfig(config)?function(animation,now){return rubberBandDecay(animation,now,config);}:function(animation,now){return rigidDecay(animation,now,config);};function onStart(animation,value,now){const initialVelocity=config.velocity;animation.current=value;animation.lastTimestamp=now;animation.startTimestamp=now;animation.initialVelocity=initialVelocity;animation.velocity=initialVelocity;validateConfig(config);if(animation.reduceMotion&&config.clamp){if(value<config.clamp[0]){animation.current=config.clamp[0];}else if(value>config.clamp[1]){animation.current=config.clamp[1];}}}return{onFrame:decay,onStart:onStart,callback:callback,velocity:(_config$velocity=config.velocity)!==null&&_config$velocity!==void 0?_config$velocity:0,initialVelocity:0,current:undefined,lastTimestamp:0,startTimestamp:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};});}" };
arg5.withDecay = pnpm_decayTs2;
