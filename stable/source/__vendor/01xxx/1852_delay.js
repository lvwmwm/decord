// Module ID: 1852
// Function ID: 1853
// Name: delay
// Dependencies: [1841]
// Exports: withDelay

// Module 1852 (delay)
import utilNative from "utilNative" /* 1841 */;

let closure_0;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let items = [{ code: "(function pnpm_delayTs2(delayMs,_nextAnimation,reduceMotion){let[defineAnimation,_worklet_15588234640402_init_data,getReduceMotionForAnimation]=this.__closure;return defineAnimation(_nextAnimation,function pnpm_delayTs1Factory([_worklet_15588234640402_init_data,_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion]){const pnpm_delayTs1=function(){const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};};pnpm_delayTs1.__closure=[_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion];pnpm_delayTs1.__workletHash=15588234640402;pnpm_delayTs1.__initData=_worklet_15588234640402_init_data;return pnpm_delayTs1;}([_worklet_15588234640402_init_data,_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion]));})" }, utilNative.defineAnimation, { code: "(function pnpm_delayTs1(){let[_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion]=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};})" }, utilNative.getReduceMotionForAnimation];
let c0;
let c1;
let c2;
[tmp2, tmp3, tmp4, tmp5] = items;
function pnpm_delayTs2(arg0, arg1, arg2) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  const items = [c1, arg1, arg0, c2, arg2];
  [tmp, tmp2, tmp3, tmp4, tmp5] = items;
  function pnpm_delayTs1() {
    let tmp;
    let tmpResult = closure_0;
    if (typeof closure_0 === "function") {
      tmpResult = tmp();
    }
    closure_0 = tmpResult;
    let obj = {
      isHigherOrder: true,
      onFrame: function delay(started, arg1) {
        let current;
        let previousAnimation;
        ({ previousAnimation, current } = started);
        started = started.started;
        if (arg1 - started.startTime < closure_2_1) {
          if (!started.reduceMotion) {
            if (previousAnimation) {
              started.current = previousAnimation.current;
              const tmp = previousAnimation.finished || previousAnimation.onFrame(previousAnimation, arg1);
              if (tmp) {
                started.previousAnimation = null;
              }
            }
            return false;
          }
        }
        if (!started) {
          closure_0.onStart(closure_0, current, arg1, previousAnimation);
          started.previousAnimation = null;
          started.started = true;
        }
        started.current = closure_0.current;
        return closure_0.onFrame(closure_0, arg1);
      },
      onStart(reduceMotion, current, startTime, previousAnimation) {
        reduceMotion.startTime = startTime;
        reduceMotion.started = false;
        reduceMotion.current = current;
        if (previousAnimation === reduceMotion) {
          previousAnimation = previousAnimation.previousAnimation;
        }
        reduceMotion.previousAnimation = previousAnimation;
        if (undefined === closure_0.reduceMotion) {
          tmp.reduceMotion = reduceMotion.reduceMotion;
        }
      },
      current: tmpResult.current,
      callback(arg0) {
        const obj = closure_0;
        if (closure_0.callback) {
          obj.callback(arg0);
        }
      },
      previousAnimation: null,
      startTime: 0,
      started: false,
      reduceMotion: closure_2(closure_3)
    };
    return obj;
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5];
  pnpm_delayTs1.__closure = items1;
  pnpm_delayTs1.__workletHash = 15588234640402;
  pnpm_delayTs1.__initData = tmp;
  return _undefined(arg1, pnpm_delayTs1);
}
let items1 = [tmp3, tmp4, tmp5];
pnpm_delayTs2.__closure = items1;
pnpm_delayTs2.__workletHash = 5309238334465;
pnpm_delayTs2.__initData = tmp2;

export const withDelay = pnpm_delayTs2;
