// Module ID: 1717
// Function ID: 1718
// Dependencies: [1678]
// Exports: withDelay

// Module 1717
const require = globalThis.__r;
let _require, dependencyMap;

let __initData = { code: "function pnpm_delayTs2(){const{_nextAnimation,delayMs,getReduceMotionForAnimation,reduceMotion}=this.__closure;const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
let fn = function n(delayMs, _nextAnimation, reduceMotion) {
  _require = delayMs;
  dependencyMap = _nextAnimation;
  __initData = reduceMotion;
  let obj = require("module_1678");
  const fn = function s() {
    let closure_0;
    let obj2;
    let tmp;
    let tmpResult = closure_1;
    if (typeof closure_1 === "function") {
      tmpResult = tmp();
    }
    delayMs = tmpResult;
    let obj = {
      isHigherOrder: true,
      onFrame: function delay(started, arg1) {
        let current;
        let previousAnimation;
        ({ previousAnimation, current } = started);
        started = started.started;
        if (arg1 - started.startTime < delayMs) {
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
          delayMs.onStart(delayMs, current, arg1, previousAnimation);
          started.previousAnimation = null;
          started.started = true;
        }
        started.current = delayMs.current;
        return delayMs.onFrame(delayMs, arg1);
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
      reduceMotion: obj2.getReduceMotionForAnimation(closure_2)
    };
    obj2 = delayMs(closure_1[0]);
    return obj;
  };
  let obj2 = { _nextAnimation, delayMs, getReduceMotionForAnimation: require("module_1678").getReduceMotionForAnimation, reduceMotion };
  fn.__closure = obj2;
  fn.__workletHash = 7904568249320;
  fn.__initData = __initData;
  return obj.defineAnimation(_nextAnimation, fn);
};
let obj = { defineAnimation: require("module_1678").defineAnimation, getReduceMotionForAnimation: require("module_1678").getReduceMotionForAnimation };
fn.__closure = obj;
fn.__workletHash = 10965419997083;
fn.__initData = { code: "function pnpm_delayTs1(delayMs,_nextAnimation,reduceMotion){const{defineAnimation,getReduceMotionForAnimation}=this.__closure;return defineAnimation(_nextAnimation,function(){'worklet';const nextAnimation=typeof _nextAnimation==='function'?_nextAnimation():_nextAnimation;function delay(animation,now){const{startTime:startTime,started:started,previousAnimation:previousAnimation}=animation;const current=animation.current;if(now-startTime>=delayMs||animation.reduceMotion){if(!started){nextAnimation.onStart(nextAnimation,current,now,previousAnimation);animation.previousAnimation=null;animation.started=true;}const finished=nextAnimation.onFrame(nextAnimation,now);animation.current=nextAnimation.current;return finished;}else if(previousAnimation){const finished=previousAnimation.finished||previousAnimation.onFrame(previousAnimation,now);animation.current=previousAnimation.current;if(finished){animation.previousAnimation=null;}}return false;}function onStart(animation,value,now,previousAnimation){animation.startTime=now;animation.started=false;animation.current=value;if(previousAnimation===animation){animation.previousAnimation=previousAnimation.previousAnimation;}else{animation.previousAnimation=previousAnimation;}if(nextAnimation.reduceMotion===undefined){nextAnimation.reduceMotion=animation.reduceMotion;}}const callback=function(finished){if(nextAnimation.callback){nextAnimation.callback(finished);}};return{isHigherOrder:true,onFrame:delay,onStart:onStart,current:nextAnimation.current,callback:callback,previousAnimation:null,startTime:0,started:false,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}" };

export const withDelay = fn;
