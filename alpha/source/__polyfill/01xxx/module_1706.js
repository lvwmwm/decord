// Module ID: 1706
// Function ID: 1707
// Dependencies: [1695, 1707]
// Exports: withTiming

// Module 1706
const require = globalThis.__r;
let _require, dependencyMap;

let __initData = { code: "function pnpm_timingTs2(){const{Easing,userConfig,toValue,callback,getReduceMotionForAnimation}=this.__closure;var _userConfig;const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation((_userConfig=userConfig)===null||_userConfig===void 0?void 0:_userConfig.reduceMotion)};}" };
let fn = function t(toValue, userConfig, callback) {
  _require = toValue;
  dependencyMap = userConfig;
  __initData = callback;
  const obj = require("module_1695");
  const fn = function u() {
    let Easing;
    let getReduceMotionForAnimation;
    let obj;
    let reduceMotion;
    const current = { duration: 300, easing: Easing.inOut(toValue(userConfig[1]).Easing.quad) };
    let tmp = toValue;
    const tmp2 = userConfig;
    Easing = toValue(userConfig[1]).Easing;
    const tmp3 = userConfig;
    if (tmp3) {
      const _Object = Object;
      const keys = Object.keys(tmp3);
      const item = keys.forEach((item) => {
        obj[item] = userConfig[item];
        return userConfig[item];
      });
    }
    const obj2 = {
      type: "timing",
      onFrame: function timing(startTime, arg1) {
        let startValue;
        ({ toValue, startValue } = startTime);
        const diff = arg1 - startTime.startTime;
        if (diff >= obj.duration) {
          startTime.startTime = 0;
          startTime.current = toValue;
          return true;
        } else {
          startTime.current = startValue + (toValue - startValue) * startTime.easing(diff / tmp2.duration);
          return false;
        }
      },
      onStart(arg0, current, startTime, type) {
        const tmp = type;
        if (tmp) {
          if ("timing" === type.type) {
            if (type.toValue === toValue) {
              if (type.startTime) {
                ({ startTime: arg0.startTime, startValue: arg0.startValue } = type);
              }
              arg0.current = current;
              if (typeof obj.easing === "object") {
                const easing = tmp3.easing;
                arg0.easing = easing.factory();
              } else {
                arg0.easing = obj.easing;
              }
            }
          }
        }
        arg0.startTime = startTime;
        arg0.startValue = current;
      },
      progress: 0,
      toValue: current,
      startValue: 0,
      startTime: 0,
      easing() {
        return 0;
      },
      current,
      callback,
      reduceMotion: getReduceMotionForAnimation(reduceMotion)
    };
    reduceMotion = undefined;
    getReduceMotionForAnimation = tmp(tmp2[0]).getReduceMotionForAnimation;
    tmp(tmp2[0]);
    if (tmp3 != null) {
      reduceMotion = tmp3.reduceMotion;
    }
    return obj2;
  };
  let obj2 = { Easing: require("EasingNameSymbol").Easing, userConfig, toValue, callback, getReduceMotionForAnimation: require("module_1695").getReduceMotionForAnimation };
  fn.__closure = obj2;
  fn.__workletHash = 16704866504175;
  fn.__initData = __initData;
  return obj.defineAnimation(toValue, fn);
};
let obj = { __DEV__: false, assertEasingIsWorklet: require("module_1695").assertEasingIsWorklet, defineAnimation: require("module_1695").defineAnimation, Easing: require("EasingNameSymbol").Easing, getReduceMotionForAnimation: require("module_1695").getReduceMotionForAnimation };
fn.__closure = obj;
fn.__workletHash = 7258055328141;
fn.__initData = { code: "function pnpm_timingTs1(toValue,userConfig,callback){const{__DEV__,assertEasingIsWorklet,defineAnimation,Easing,getReduceMotionForAnimation}=this.__closure;if(__DEV__&&userConfig!==null&&userConfig!==void 0&&userConfig.easing){assertEasingIsWorklet(userConfig.easing);}return defineAnimation(toValue,function(){'worklet';const config={duration:300,easing:Easing.inOut(Easing.quad)};if(userConfig){Object.keys(userConfig).forEach(function(key){return config[key]=userConfig[key];});}function timing(animation,now){const{toValue:toValue,startTime:startTime,startValue:startValue}=animation;const runtime=now-startTime;if(runtime>=config.duration){animation.startTime=0;animation.current=toValue;return true;}const progress=animation.easing(runtime/config.duration);animation.current=startValue+(toValue-startValue)*progress;return false;}function onStart(animation,value,now,previousAnimation){if(previousAnimation&&previousAnimation.type==='timing'&&previousAnimation.toValue===toValue&&previousAnimation.startTime){animation.startTime=previousAnimation.startTime;animation.startValue=previousAnimation.startValue;}else{animation.startTime=now;animation.startValue=value;}animation.current=value;if(typeof config.easing==='object'){animation.easing=config.easing.factory();}else{animation.easing=config.easing;}}return{type:'timing',onFrame:timing,onStart:onStart,progress:0,toValue:toValue,startValue:0,startTime:0,easing:function(){return 0;},current:toValue,callback:callback,reduceMotion:getReduceMotionForAnimation(userConfig===null||userConfig===void 0?void 0:userConfig.reduceMotion)};});}" };

export const withTiming = fn;
