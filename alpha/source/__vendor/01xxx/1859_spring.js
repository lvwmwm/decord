// Module ID: 1859
// Function ID: 1860
// Name: spring
// Dependencies: [1844, 1860, 1861]
// Exports: withSpring

// Module 1859 (spring)
import utilNative from "utilNative" /* 1844 */;
import Reanimated3DefaultSpringConfig from "Reanimated3DefaultSpringConfig" /* 1860 */;
import springUtils from "springUtils" /* 1861 */;

let closure_0;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
let items = [{ code: "(function pnpm_springTs2(toValue,userConfig,callback){let[defineAnimation,_worklet_13381173591538_init_data,GentleSpringConfig,GentleSpringConfigWithDuration,safeMergeConfigs,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewStiffnessToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getEnergy,getReduceMotionForAnimation]=this.__closure;return defineAnimation(toValue,function pnpm_springTs1Factory([_worklet_13381173591538_init_data,GentleSpringConfig,GentleSpringConfigWithDuration,safeMergeConfigs,userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewStiffnessToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getEnergy,toValue,callback,getReduceMotionForAnimation]){const pnpm_springTs1=function(){const defaultConfig={...GentleSpringConfig,...GentleSpringConfigWithDuration,overshootClamping:false,energyThreshold:6e-9,velocity:0,reduceMotion:undefined,clamp:undefined};const config=safeMergeConfigs({...defaultConfig,useDuration:!!(userConfig!==null&&userConfig!==void 0&&userConfig.duration||userConfig!==null&&userConfig!==void 0&&userConfig.dampingRatio),skipAnimation:false},userConfig);config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,current:current}=animation;if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=velocity;const x0=current-toValue;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;if(isAnimationTerminatingCalculation(animation,config)){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;let stiffness=config.stiffness;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:value-animation.toValue;animation.startValue=x0;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}const toValueNum=Number(animation.toValue);if(toValueNum>value&&animation.velocity<0||toValueNum<value&&animation.velocity>0){animation.velocity=0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;stiffness=calculateNewStiffnessToMatchDuration(x0,config,animation.velocity);config.stiffness=stiffness;}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(stiffness,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}const initialEnergy=getEnergy(x0,config.velocity,config.stiffness,config.mass);animation.initialEnergy=initialEnergy;animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,initialEnergy:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};};pnpm_springTs1.__closure=[GentleSpringConfig,GentleSpringConfigWithDuration,safeMergeConfigs,userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewStiffnessToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getEnergy,toValue,callback,getReduceMotionForAnimation];pnpm_springTs1.__workletHash=13381173591538;pnpm_springTs1.__initData=_worklet_13381173591538_init_data;return pnpm_springTs1;}([_worklet_13381173591538_init_data,GentleSpringConfig,GentleSpringConfigWithDuration,safeMergeConfigs,userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewStiffnessToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getEnergy,toValue,callback,getReduceMotionForAnimation]));})" }, utilNative.defineAnimation, { code: "(function pnpm_springTs1(){let[GentleSpringConfig,GentleSpringConfigWithDuration,safeMergeConfigs,userConfig,checkIfConfigIsValid,underDampedSpringCalculations,criticallyDampedSpringCalculations,isAnimationTerminatingCalculation,calculateNewStiffnessToMatchDuration,initialCalculations,scaleZetaToMatchClamps,getEnergy,toValue,callback,getReduceMotionForAnimation]=this.__closure;var _userConfig,_userConfig2;const defaultConfig={...GentleSpringConfig,...GentleSpringConfigWithDuration,overshootClamping:false,energyThreshold:6e-9,velocity:0,reduceMotion:undefined,clamp:undefined};const config=safeMergeConfigs({...defaultConfig,useDuration:!!((_userConfig=userConfig)!==null&&_userConfig!==void 0&&_userConfig.duration||(_userConfig2=userConfig)!==null&&_userConfig2!==void 0&&_userConfig2.dampingRatio),skipAnimation:false},userConfig);config.skipAnimation=!checkIfConfigIsValid(config);if(config.duration===0){config.skipAnimation=true;}function springOnFrame(animation,now){const{toValue:toValue,current:current}=animation;if(config.skipAnimation){animation.current=toValue;animation.lastTimestamp=0;return true;}const{lastTimestamp:lastTimestamp,velocity:velocity}=animation;const deltaTime=Math.min(Math.max(now-lastTimestamp,0),64);animation.lastTimestamp=now;const t=deltaTime/1000;const v0=velocity;const x0=current-toValue;const{zeta:zeta,omega0:omega0,omega1:omega1}=animation;const{position:newPosition,velocity:newVelocity}=zeta<1?underDampedSpringCalculations(animation,{zeta:zeta,v0:v0,x0:x0,omega0:omega0,omega1:omega1,t:t}):criticallyDampedSpringCalculations(animation,{v0:v0,x0:x0,omega0:omega0,t:t});animation.current=newPosition;animation.velocity=newVelocity;if(isAnimationTerminatingCalculation(animation,config)){animation.velocity=0;animation.current=toValue;animation.lastTimestamp=0;return true;}return false;}function isTriggeredTwice(previousAnimation,animation){return(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.toValue)===animation.toValue&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.duration)===animation.duration&&(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.dampingRatio)===animation.dampingRatio;}function onStart(animation,value,now,previousAnimation){animation.current=value;let stiffness=config.stiffness;const triggeredTwice=isTriggeredTwice(previousAnimation,animation);const duration=config.duration;const x0=triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startValue:value-animation.toValue;animation.startValue=x0;if(previousAnimation){animation.velocity=(triggeredTwice?previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity:(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.velocity)+config.velocity)||0;}else{animation.velocity=config.velocity||0;}const toValueNum=Number(animation.toValue);if(toValueNum>value&&animation.velocity<0||toValueNum<value&&animation.velocity>0){animation.velocity=0;}if(triggeredTwice){animation.zeta=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.zeta)||0;animation.omega0=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega0)||0;animation.omega1=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.omega1)||0;}else{if(config.useDuration){const actualDuration=triggeredTwice?duration-(((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||0)-((previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||0)):duration;config.duration=actualDuration;stiffness=calculateNewStiffnessToMatchDuration(x0,config,animation.velocity);config.stiffness=stiffness;}const{zeta:zeta,omega0:omega0,omega1:omega1}=initialCalculations(stiffness,config);animation.zeta=zeta;animation.omega0=omega0;animation.omega1=omega1;if(config.clamp!==undefined){animation.zeta=scaleZetaToMatchClamps(animation,config.clamp);}}const initialEnergy=getEnergy(x0,config.velocity,config.stiffness,config.mass);animation.initialEnergy=initialEnergy;animation.lastTimestamp=(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.lastTimestamp)||now;animation.startTimestamp=triggeredTwice?(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.startTimestamp)||now:now;}return{onFrame:springOnFrame,onStart:onStart,toValue:toValue,velocity:config.velocity||0,current:toValue,startValue:0,callback:callback,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,initialEnergy:0,reduceMotion:getReduceMotionForAnimation(config.reduceMotion)};})" }, Reanimated3DefaultSpringConfig.GentleSpringConfig, Reanimated3DefaultSpringConfig.GentleSpringConfigWithDuration, springUtils.safeMergeConfigs, springUtils.checkIfConfigIsValid, springUtils.underDampedSpringCalculations, springUtils.criticallyDampedSpringCalculations, springUtils.isAnimationTerminatingCalculation, springUtils.calculateNewStiffnessToMatchDuration, springUtils.initialCalculations, springUtils.scaleZetaToMatchClamps, springUtils.getEnergy, utilNative.getReduceMotionForAnimation];
let c0;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
let c10;
let c11;
let c12;
let c13;
[tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
function pnpm_springTs2(arg0, arg1, arg2) {
  let tmp;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const items = [c1, c2, c3, c4, arg1, c5, c6, c7, c8, c9, c10, c11, c12, arg0, arg2, c13];
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_springTs1() {
    let num;
    let tmp10;
    let tmp7;
    let toValue;
    let obj = { overshootClamping: false, energyThreshold: 0.000000006, velocity: 0, reduceMotion: undefined, clamp: undefined };
    const merged = Object.assign(closure_0);
    const merged1 = Object.assign(closure_1);
    let obj2 = { useDuration: !tmp7, skipAnimation: false };
    const merged2 = Object.assign(obj);
    let duration;
    const tmp3 = closure_2;
    if (closure_3 != null) {
      duration = tmp5.duration;
    }
    tmp7 = !duration;
    if (tmp7) {
      let dampingRatio;
      if (closure_3 != null) {
        dampingRatio = tmp5.dampingRatio;
      }
      tmp7 = !dampingRatio;
    }
    const tmp3Result = tmp3(obj2, closure_3);
    closure_0 = tmp3Result;
    tmp3Result.skipAnimation = !closure_4(tmp3Result);
    if (0 === tmp3Result.duration) {
      let flag = true;
      tmp3Result.skipAnimation = true;
    }
    const obj3 = {
      onFrame: function springOnFrame(toValue, lastTimestamp) {
        let omega0;
        let zeta;
        toValue = toValue.toValue;
        if (closure_0.skipAnimation) {
          toValue.current = toValue;
          toValue.lastTimestamp = 0;
          return true;
        } else {
          let tmp9;
          const velocity = toValue.velocity;
          const _Math = Math;
          const _Math2 = Math;
          toValue.lastTimestamp = lastTimestamp;
          const result = Math.min(Math.max(lastTimestamp - toValue.lastTimestamp, 0), 64) / 1000;
          const diff = tmp - toValue;
          ({ zeta, omega0 } = toValue);
          if (zeta < 1) {
            const obj2 = { zeta, v0: velocity, x0: diff, omega0, omega1: tmp7, t: result };
            tmp9 = closure_2_5(toValue, obj2);
          } else {
            const obj = { v0: velocity, x0: diff, omega0, t: result };
            tmp9 = closure_2_6(toValue, obj);
          }
          ({ position: toValue.current, velocity: toValue.velocity } = tmp9);
          let flag = closure_2_7(toValue, tmp2);
          if (flag) {
            toValue.velocity = 0;
            toValue.current = toValue;
            toValue.lastTimestamp = 0;
            flag = true;
          }
          return flag;
        }
      },
      onStart(toValue, current, arg2, lastTimestamp) {
        let diff;
        let tmp9;
        toValue.current = current;
        let stiffness = closure_0.stiffness;
        lastTimestamp = undefined;
        if (lastTimestamp != null) {
          lastTimestamp = lastTimestamp.lastTimestamp;
        }
        if (lastTimestamp) {
          let startTimestamp;
          if (lastTimestamp != null) {
            startTimestamp = lastTimestamp.startTimestamp;
          }
          lastTimestamp = startTimestamp;
        }
        if (lastTimestamp) {
          toValue = undefined;
          if (lastTimestamp != null) {
            toValue = lastTimestamp.toValue;
          }
          lastTimestamp = toValue === toValue.toValue;
        }
        if (lastTimestamp) {
          let duration1;
          if (lastTimestamp != null) {
            duration1 = lastTimestamp.duration;
          }
          lastTimestamp = duration1 === toValue.duration;
        }
        if (lastTimestamp) {
          let dampingRatio;
          if (lastTimestamp != null) {
            dampingRatio = lastTimestamp.dampingRatio;
          }
          lastTimestamp = dampingRatio === toValue.dampingRatio;
        }
        const duration = tmp.duration;
        if (lastTimestamp) {
          let startValue;
          if (lastTimestamp != null) {
            startValue = lastTimestamp.startValue;
          }
          diff = startValue;
        } else {
          diff = current - toValue.toValue;
        }
        toValue.startValue = diff;
        if (lastTimestamp) {
          let num;
          if (lastTimestamp) {
            let velocity;
            if (lastTimestamp != null) {
              velocity = lastTimestamp.velocity;
            }
            num = velocity;
          } else {
            let velocity1;
            if (lastTimestamp != null) {
              velocity1 = lastTimestamp.velocity;
            }
            num = velocity1 + tmp.velocity;
          }
          if (!num) {
            num = 0;
          }
          tmp9 = num;
        } else {
          tmp9 = tmp.velocity || 0;
        }
        toValue.velocity = tmp9;
        const NumberResult = Number(toValue.toValue);
        let tmp14 = NumberResult > current && toValue.velocity < 0;
        if (!tmp14) {
          tmp14 = NumberResult < current && toValue.velocity > 0;
          const tmp15 = NumberResult < current && toValue.velocity > 0;
        }
        if (tmp14) {
          toValue.velocity = 0;
        }
        if (lastTimestamp) {
          let num7;
          if (lastTimestamp != null) {
            num7 = lastTimestamp.zeta;
          }
          if (!num7) {
            num7 = 0;
          }
          toValue.zeta = num7;
          let num8;
          if (lastTimestamp != null) {
            num8 = lastTimestamp.omega0;
          }
          if (!num8) {
            num8 = 0;
          }
          toValue.omega0 = num8;
          let num9;
          if (lastTimestamp != null) {
            num9 = lastTimestamp.omega1;
          }
          if (!num9) {
            num9 = 0;
          }
          toValue.omega1 = num9;
        } else {
          if (closure_0.useDuration) {
            let diff1 = duration;
            if (lastTimestamp) {
              let num5;
              if (lastTimestamp != null) {
                num5 = lastTimestamp.lastTimestamp;
              }
              if (!num5) {
                num5 = 0;
              }
              let num6;
              if (lastTimestamp != null) {
                num6 = lastTimestamp.startTimestamp;
              }
              if (!num6) {
                num6 = 0;
              }
              diff1 = duration - (num5 - num6);
            }
            closure_0.duration = diff1;
            const tmp18 = closure_2_8(diff, closure_0, toValue.velocity);
            closure_0.stiffness = tmp18;
            stiffness = tmp18;
          }
          ({ zeta: toValue.zeta, omega0: toValue.omega0, omega1: toValue.omega1 } = closure_2_9(stiffness, closure_0));
          closure_2_9(stiffness, closure_0);
          if (undefined !== closure_0.clamp) {
            toValue.zeta = closure_2_10(toValue, closure_0.clamp);
          }
        }
        toValue.initialEnergy = closure_2_11(diff, closure_0.velocity, closure_0.stiffness, closure_0.mass);
        let lastTimestamp1;
        if (lastTimestamp != null) {
          lastTimestamp1 = lastTimestamp.lastTimestamp;
        }
        if (!lastTimestamp1) {
          lastTimestamp1 = arg2;
        }
        toValue.lastTimestamp = lastTimestamp1;
        if (lastTimestamp) {
          let startTimestamp1;
          if (lastTimestamp != null) {
            startTimestamp1 = lastTimestamp.startTimestamp;
          }
          lastTimestamp = startTimestamp1;
        }
        if (!lastTimestamp) {
          lastTimestamp = arg2;
        }
        toValue.startTimestamp = lastTimestamp;
      },
      toValue,
      velocity: num,
      current: tmp10,
      startValue: 0,
      callback,
      lastTimestamp: 0,
      startTimestamp: 0,
      zeta: 0,
      omega0: 0,
      omega1: 0,
      initialEnergy: 0,
      reduceMotion: closure_14(tmp3Result.reduceMotion)
    };
    num = tmp3Result.velocity;
    tmp10 = toValue;
    if (!num) {
      num = 0;
    }
    return obj3;
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  pnpm_springTs1.__closure = items1;
  pnpm_springTs1.__workletHash = 13381173591538;
  pnpm_springTs1.__initData = tmp;
  return _undefined(arg0, pnpm_springTs1);
}
let items1 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
pnpm_springTs2.__closure = items1;
pnpm_springTs2.__workletHash = 7858894309435;
pnpm_springTs2.__initData = tmp2;

export const withSpring = pnpm_springTs2;
