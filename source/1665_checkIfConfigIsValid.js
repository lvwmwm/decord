// Module ID: 1665
// Function ID: 18452
// Name: checkIfConfigIsValid
// Dependencies: []

// Module 1665 (checkIfConfigIsValid)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = { code: "function checkIfConfigIsValid_Pnpm_springUtilsTs1(config){const{logger}=this.__closure;var _config$clamp,_config$clamp2;let errorMessage='';['stiffness','damping','dampingRatio','restDisplacementThreshold','restSpeedThreshold','mass'].forEach(function(prop){const value=config[prop];if(value<=0){errorMessage+=\", \"+prop+\" must be grater than zero but got \"+value;}});if(config.duration<0){errorMessage+=\", duration can't be negative, got \"+config.duration;}if((_config$clamp=config.clamp)!==null&&_config$clamp!==void 0&&_config$clamp.min&&(_config$clamp2=config.clamp)!==null&&_config$clamp2!==void 0&&_config$clamp2.max&&config.clamp.min>config.clamp.max){errorMessage+=\", clamp.min should be lower than clamp.max, got clamp: {min: \"+config.clamp.min+\", max: \"+config.clamp.max+\"} \";}if(errorMessage!==''){logger.warn('Invalid spring config'+errorMessage);}return errorMessage==='';}" };
let closure_5 = { code: "function bisectRoot_Pnpm_springUtilsTs2({min:min,max:max,func:func,maxIterations=20}){const ACCURACY=0.00005;let idx=maxIterations;let current=(max+min)/2;while(Math.abs(func(current))>ACCURACY&&idx>0){idx-=1;if(func(current)<0){min=current;}else{max=current;}current=(min+max)/2;}return current;}" };
const tmp3 = () => {
  function bisectRoot(arg0) {
    let func;
    let max;
    let maxIterations;
    let min;
    ({ min, max, func, maxIterations } = arg0);
    let num = 20;
    if (undefined !== maxIterations) {
      num = maxIterations;
    }
    const result = (max + min) / 2;
    let tmp2 = result;
    if (Math.abs(func(result)) > 0.00005) {
      let tmp3 = result;
      tmp2 = result;
      if (num > 0) {
        while (true) {
          num = num - 1;
          let tmp4 = tmp3;
          let tmp5 = tmp3;
          if (func(tmp3) < 0) {
            min = tmp3;
            tmp5 = max;
          }
          let result1 = (min + tmp5) / 2;
          let _Math = Math;
          tmp2 = result1;
          if (Math.abs(func(result1)) <= 0.00005) {
            break;
          } else {
            max = tmp5;
            tmp3 = result1;
            tmp2 = result1;
            if (num <= 0) {
              break;
            }
          }
        }
      }
    }
    return tmp2;
  }
  bisectRoot.__closure = {};
  bisectRoot.__workletHash = 3467677822604;
  bisectRoot.__initData = closure_5;
  return bisectRoot;
}();
let closure_7 = { code: "function initialCalculations_Pnpm_springUtilsTs3(mass=0,config){if(config.skipAnimation){return{zeta:0,omega0:0,omega1:0};}if(config.useDuration){const{stiffness:k,dampingRatio:zeta}=config;const omega0=Math.sqrt(k/mass);const omega1=zeta<1?omega0*Math.sqrt(1-zeta**2):0;return{zeta:zeta,omega0:omega0,omega1:omega1};}else{const{damping:c,mass:m,stiffness:k}=config;const zeta=c/(2*Math.sqrt(k*m));const omega0=Math.sqrt(k/m);const omega1=zeta<1?omega0*Math.sqrt(1-zeta**2):0;return{zeta:zeta,omega0:omega0,omega1:omega1};}}" };
let closure_8 = { code: "function scaleZetaToMatchClamps_Pnpm_springUtilsTs4(animation,clamp){const{zeta:zeta,toValue:toValue,startValue:startValue}=animation;const toValueNum=Number(toValue);if(toValueNum===startValue){return zeta;}const[firstBound,secondBound]=toValueNum-startValue>0?[clamp.min,clamp.max]:[clamp.max,clamp.min];const relativeExtremum1=secondBound!==undefined?Math.abs((secondBound-toValueNum)/(toValueNum-startValue)):undefined;const relativeExtremum2=firstBound!==undefined?Math.abs((firstBound-toValueNum)/(toValueNum-startValue)):undefined;const newZeta1=relativeExtremum1!==undefined?Math.abs(Math.log(relativeExtremum1)/Math.PI):undefined;const newZeta2=relativeExtremum2!==undefined?Math.abs(Math.log(relativeExtremum2)/(2*Math.PI)):undefined;const zetaSatisfyingClamp=[newZeta1,newZeta2].filter(function(x){return x!==undefined;});return Math.max(...zetaSatisfyingClamp,zeta);}" };
const tmp2 = () => {
  function checkIfConfigIsValid(merged) {
    let closure_1 = "";
    const items = ["style", "enabled", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
    const item = items.forEach((arg0) => {
      if (arg0[arg0] <= 0) {
        const _HermesInternal = HermesInternal;
        closure_1 = closure_1 + ", " + arg0 + " must be grater than zero but got " + tmp;
      }
    });
    if (merged.duration < 0) {
      const _HermesInternal = HermesInternal;
      closure_1 = closure_1 + ", duration can't be negative, got " + merged.duration;
    }
    const clamp = merged.clamp;
    let max = null != clamp && clamp.min;
    if (max) {
      const clamp2 = merged.clamp;
      max = null != clamp2;
      const tmp4 = clamp2;
    }
    if (max) {
      max = tmp4.max;
    }
    if (max) {
      max = merged.clamp.min > merged.clamp.max;
    }
    if (max) {
      const _HermesInternal2 = HermesInternal;
      closure_1 = closure_1 + ", clamp.min should be lower than clamp.max, got clamp: {min: " + merged.clamp.min + ", max: " + merged.clamp.max + "} ";
    }
    if ("" !== closure_1) {
      const logger = merged(closure_1[2]).logger;
      logger.warn(`Invalid spring config${closure_1}`);
    }
    return "" === closure_1;
  }
  checkIfConfigIsValid.__closure = { logger: arg1(dependencyMap[2]).logger };
  checkIfConfigIsValid.__workletHash = 16835320063819;
  checkIfConfigIsValid.__initData = closure_4;
  return checkIfConfigIsValid;
}();
let closure_9 = { code: "function calculateNewMassToMatchDuration_Pnpm_springUtilsTs5(x0,config,v0){const{bisectRoot}=this.__closure;if(config.skipAnimation){return 0;}const{stiffness:k,dampingRatio:zeta,restSpeedThreshold:threshold,duration:duration}=config;const durationForMass=function(mass){'worklet';const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;};return bisectRoot({min:0,max:100,func:durationForMass});}" };
let closure_10 = { code: "function pnpm_springUtilsTs6(mass){const{v0,k,x0,zeta,threshold,duration}=this.__closure;const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;}" };
const tmp4 = () => {
  function initialCalculations(mass, merged) {
    let stiffness;
    let num = 0;
    if (arguments.length > 0) {
      num = 0;
      if (undefined !== arguments[0]) {
        num = arguments[0];
      }
    }
    let tmp;
    if (arguments.length > 1) {
      tmp = arguments[1];
    }
    if (tmp.skipAnimation) {
      return { alignItems: "spring", width: 0.4, flexDirection: 1 };
    } else if (tmp.useDuration) {
      const dampingRatio = tmp.dampingRatio;
      const _Math4 = Math;
      const sqrtResult = Math.sqrt(tmp.stiffness / num);
      let obj = { zeta: dampingRatio, omega0: sqrtResult };
      let num5 = 0;
      if (dampingRatio < 1) {
        const _Math5 = Math;
        num5 = sqrtResult * Math.sqrt(1 - dampingRatio ** 2);
      }
      obj.omega1 = num5;
      return obj;
    } else {
      ({ mass, stiffness } = tmp);
      const _Math = Math;
      const result = tmp.damping / (2 * Math.sqrt(stiffness * mass));
      const _Math2 = Math;
      const sqrtResult1 = Math.sqrt(stiffness / mass);
      obj = { zeta: result, omega0: sqrtResult1 };
      let num3 = 0;
      if (result < 1) {
        const _Math3 = Math;
        num3 = sqrtResult1 * Math.sqrt(1 - result ** 2);
      }
      obj.omega1 = num3;
      return obj;
    }
  }
  initialCalculations.__closure = {};
  initialCalculations.__workletHash = 5986209785952;
  initialCalculations.__initData = closure_7;
  return initialCalculations;
}();
let closure_11 = { code: "function criticallyDampedSpringCalculations_Pnpm_springUtilsTs7(animation,precalculatedValues){const{toValue:toValue}=animation;const{v0:v0,x0:x0,omega0:omega0,t:t}=precalculatedValues;const criticallyDampedEnvelope=Math.exp(-omega0*t);const criticallyDampedPosition=toValue-criticallyDampedEnvelope*(x0+(v0+omega0*x0)*t);const criticallyDampedVelocity=criticallyDampedEnvelope*(v0*(t*omega0-1)+t*x0*omega0*omega0);return{position:criticallyDampedPosition,velocity:criticallyDampedVelocity};}" };
const tmp5 = () => {
  function scaleZetaToMatchClamps(toValue, clamp) {
    let startValue;
    let zeta;
    ({ zeta, startValue } = toValue);
    const NumberResult = Number(toValue.toValue);
    if (NumberResult === startValue) {
      return zeta;
    } else {
      if (NumberResult - startValue > 0) {
        const items = [, ];
        ({ min: arr2[0], max: arr2[1] } = clamp);
        let items1 = items;
      } else {
        items1 = [, ];
        ({ max: arr[0], min: arr[1] } = clamp);
      }
      const tmp3 = callback2(items1, 2);
      const first = tmp3[0];
      let absolute;
      if (undefined !== tmp3[1]) {
        const _Math = Math;
        absolute = Math.abs((tmp5 - NumberResult) / (NumberResult - startValue));
      }
      let absolute1;
      if (undefined !== first) {
        const _Math2 = Math;
        absolute1 = Math.abs((first - NumberResult) / (NumberResult - startValue));
      }
      let absolute2;
      if (undefined !== absolute) {
        const _Math3 = Math;
        const _Math4 = Math;
        const _Math5 = Math;
        absolute2 = Math.abs(Math.log(absolute) / Math.PI);
      }
      const items2 = [absolute2, ];
      let absolute3;
      if (undefined !== absolute1) {
        const _Math6 = Math;
        const _Math7 = Math;
        const _Math8 = Math;
        absolute3 = Math.abs(Math.log(absolute1) / (2 * Math.PI));
      }
      items2[1] = absolute3;
      const _Math9 = Math;
      const _Math10 = Math;
      const items3 = [zeta];
      return max.apply(Math, callback(items2.filter((arg0) => undefined !== arg0)).concat(items3));
    }
  }
  scaleZetaToMatchClamps.__closure = {};
  scaleZetaToMatchClamps.__workletHash = 5791837772627;
  scaleZetaToMatchClamps.__initData = closure_8;
  return scaleZetaToMatchClamps;
}();
let closure_12 = { code: "function underDampedSpringCalculations_Pnpm_springUtilsTs8(animation,precalculatedValues){const{toValue:toValue,current:current,velocity:velocity}=animation;const{zeta:zeta,t:t,omega0:omega0,omega1:omega1}=precalculatedValues;const v0=-velocity;const x0=toValue-current;const sin1=Math.sin(omega1*t);const cos1=Math.cos(omega1*t);const underDampedEnvelope=Math.exp(-zeta*omega0*t);const underDampedFrag1=underDampedEnvelope*(sin1*((v0+zeta*omega0*x0)/omega1)+x0*cos1);const underDampedPosition=toValue-underDampedFrag1;const underDampedVelocity=zeta*omega0*underDampedFrag1-underDampedEnvelope*(cos1*(v0+zeta*omega0*x0)-omega1*x0*sin1);return{position:underDampedPosition,velocity:underDampedVelocity};}" };
const tmp6 = () => {
  function calculateNewMassToMatchDuration(diff, merged, velocity) {
    if (merged.skipAnimation) {
      return 0;
    } else {
      const stiffness = merged.stiffness;
      const dampingRatio = merged.dampingRatio;
      const restSpeedThreshold = merged.restSpeedThreshold;
      const duration = merged.duration;
      /* worklet (recovered source) */ function pnpm_springUtilsTs6(mass){const{v0,k,x0,zeta,threshold,duration}=this.__closure;const amplitude=(mass*v0*v0+k*x0*x0)/(Math.exp(1-0.5*zeta)*k);const c=zeta*2*Math.sqrt(k*mass);return 1000*(-2*mass/c)*Math.log(threshold*0.01/amplitude)-duration;}
      let obj = { v0: velocity, k: stiffness, x0: diff, zeta: dampingRatio, threshold: restSpeedThreshold, duration };
      pnpm_springUtilsTs6.__closure = obj;
      pnpm_springUtilsTs6.__workletHash = 9188609427640;
      pnpm_springUtilsTs6.__initData = closure_10;
      obj = { func: pnpm_springUtilsTs6 };
      return callback(obj);
    }
  }
  calculateNewMassToMatchDuration.__closure = { bisectRoot: tmp3 };
  calculateNewMassToMatchDuration.__workletHash = 4742488441783;
  calculateNewMassToMatchDuration.__initData = closure_9;
  return calculateNewMassToMatchDuration;
}();
let closure_13 = { code: "function isAnimationTerminatingCalculation_Pnpm_springUtilsTs9(animation,config){const{toValue:toValue,velocity:velocity,startValue:startValue,current:current}=animation;const isOvershooting=config.overshootClamping?current>toValue&&startValue<toValue||current<toValue&&startValue>toValue:false;const isVelocity=Math.abs(velocity)<config.restSpeedThreshold;const isDisplacement=Math.abs(toValue-current)<config.restDisplacementThreshold;return{isOvershooting:isOvershooting,isVelocity:isVelocity,isDisplacement:isDisplacement};}" };
const tmp7 = () => {
  function criticallyDampedSpringCalculations(toValue, arg1) {
    let omega0;
    let t;
    let v0;
    let x0;
    ({ v0, x0, omega0, t } = arg1);
    const expResult = Math.exp(-omega0 * t);
    return { position: toValue.toValue - expResult * (x0 + (v0 + omega0 * x0) * t), velocity: expResult * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0) };
  }
  criticallyDampedSpringCalculations.__closure = {};
  criticallyDampedSpringCalculations.__workletHash = 57813752690;
  criticallyDampedSpringCalculations.__initData = closure_11;
  return criticallyDampedSpringCalculations;
}();

export const checkIfConfigIsValid = tmp2;
export const bisectRoot = tmp3;
export const initialCalculations = tmp4;
export const scaleZetaToMatchClamps = tmp5;
export const calculateNewMassToMatchDuration = tmp6;
export const criticallyDampedSpringCalculations = tmp7;
export const underDampedSpringCalculations = () => {
  function underDampedSpringCalculations(toValue, arg1) {
    let omega0;
    let omega1;
    let t;
    let zeta;
    toValue = toValue.toValue;
    ({ zeta, t, omega0, omega1 } = arg1);
    const diff = toValue - toValue.current;
    const sinResult = Math.sin(omega1 * t);
    const cosResult = Math.cos(omega1 * t);
    const expResult = Math.exp(-zeta * omega0 * t);
    const result = expResult * (sinResult * ((tmp + zeta * omega0 * diff) / omega1) + diff * cosResult);
    return { position: toValue - result, velocity: zeta * omega0 * result - expResult * (cosResult * (-toValue.velocity + zeta * omega0 * diff) - omega1 * diff * sinResult) };
  }
  underDampedSpringCalculations.__closure = {};
  underDampedSpringCalculations.__workletHash = 16542539931641;
  underDampedSpringCalculations.__initData = closure_12;
  return underDampedSpringCalculations;
}();
export const isAnimationTerminatingCalculation = () => {
  function isAnimationTerminatingCalculation(velocity, merged) {
    let current;
    let startValue;
    let toValue;
    ({ toValue, startValue, current } = velocity);
    const obj = {};
    let tmp2 = !tmp;
    if (!!merged.overshootClamping) {
      let tmp3 = current > toValue && startValue < toValue;
      if (!tmp3) {
        tmp3 = current < toValue && startValue > toValue;
        const tmp4 = current < toValue && startValue > toValue;
      }
      tmp2 = tmp3;
    }
    obj.isOvershooting = tmp2;
    obj.isVelocity = Math.abs(velocity.velocity) < merged.restSpeedThreshold;
    obj.isDisplacement = Math.abs(toValue - current) < merged.restDisplacementThreshold;
    return obj;
  }
  isAnimationTerminatingCalculation.__closure = {};
  isAnimationTerminatingCalculation.__workletHash = 3775628746247;
  isAnimationTerminatingCalculation.__initData = closure_13;
  return isAnimationTerminatingCalculation;
}();
