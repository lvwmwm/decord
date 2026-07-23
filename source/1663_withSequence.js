// Module ID: 1663
// Function ID: 18434
// Name: withSequence
// Dependencies: [1586, 1622]

// Module 1663 (withSequence)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function withSequence_Pnpm_sequenceTs1(_reduceMotionOrFirstAnimation,..._animations){const{logger,defineAnimation,getReduceMotionForAnimation}=this.__closure;let reduceMotion;if(_reduceMotionOrFirstAnimation){if(typeof _reduceMotionOrFirstAnimation==='string'){reduceMotion=_reduceMotionOrFirstAnimation;}else{_animations.unshift(_reduceMotionOrFirstAnimation);}}if(_animations.length===0){logger.warn('No animation was provided for the sequence');return defineAnimation(0,function(){'worklet';return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}return defineAnimation(_animations[0],function(){'worklet';const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};});}" };
let closure_3 = { code: "function pnpm_sequenceTs2(){const{getReduceMotionForAnimation,reduceMotion}=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
let closure_4 = { code: "function pnpm_sequenceTs3(){const{_animations,getReduceMotionForAnimation,reduceMotion}=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}" };
arg5.withSequence = (() => {
  function withSequence(withTimingResult, withTimingResult1, withTimingResult2, arg3) {
    const length = arguments.length;
    let num = 0;
    if (length > 1) {
      num = length - 1;
    }
    let arr = new Array(num);
    for (let num2 = 1; num2 < length; num2 = num2 + 1) {
      arr[num2 - 1] = arguments[num2];
    }
    if (!withTimingResult) {
      if (0 === arr.length) {
        const logger = outer1_0(outer1_1[0]).logger;
        logger.warn("No animation was provided for the sequence");
        /* worklet (recovered source) */ function pnpm_sequenceTs2(){const{getReduceMotionForAnimation,reduceMotion}=this.__closure;return{onStart:function(animation,value){return animation.current=value;},onFrame:function(){return true;},current:0,animationIndex:0,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}
        let obj = { getReduceMotionForAnimation: outer1_0(outer1_1[1]).getReduceMotionForAnimation, reduceMotion: undefined };
        pnpm_sequenceTs2.__closure = obj;
        pnpm_sequenceTs2.__workletHash = 3306563388298;
        pnpm_sequenceTs2.__initData = outer1_3;
        let defineAnimationResult = outer1_0(outer1_1[1]).defineAnimation(0, pnpm_sequenceTs2);
        const obj3 = outer1_0(outer1_1[1]);
      } else {
        obj = outer1_0(outer1_1[1]);
        /* worklet (recovered source) */ function pnpm_sequenceTs3(){const{_animations,getReduceMotionForAnimation,reduceMotion}=this.__closure;const animations=_animations.map(function(a){const result=typeof a==='function'?a():a;result.finished=false;return result;});function findNextNonReducedMotionAnimationIndex(index){while(index<animations.length-1&&animations[index].reduceMotion){index++;}return index;}const callback=function(finished){if(finished){return;}animations.forEach(function(animation){if(typeof animation.callback==='function'&&!animation.finished){animation.callback(finished);}});};function sequence(animation,now){const currentAnim=animations[animation.animationIndex];const finished=currentAnim.onFrame(currentAnim,now);animation.current=currentAnim.current;if(finished){if(currentAnim.callback){currentAnim.callback(true);}currentAnim.finished=true;animation.animationIndex=findNextNonReducedMotionAnimationIndex(animation.animationIndex+1);if(animation.animationIndex<animations.length){const nextAnim=animations[animation.animationIndex];nextAnim.onStart(nextAnim,currentAnim.current,now,currentAnim);return false;}return true;}return false;}function onStart(animation,value,now,previousAnimation){animations.forEach(function(anim){if(anim.reduceMotion===undefined){anim.reduceMotion=animation.reduceMotion;}});animation.animationIndex=findNextNonReducedMotionAnimationIndex(0);if(previousAnimation===undefined){previousAnimation=animations[animations.length-1];}const currentAnimation=animations[animation.animationIndex];currentAnimation.onStart(currentAnimation,value,now,previousAnimation);}return{isHigherOrder:true,onFrame:sequence,onStart:onStart,animationIndex:0,current:animations[0].current,callback:callback,reduceMotion:getReduceMotionForAnimation(reduceMotion)};}
        obj = { _animations: arr, getReduceMotionForAnimation: outer1_0(outer1_1[1]).getReduceMotionForAnimation, reduceMotion: undefined };
        pnpm_sequenceTs3.__closure = obj;
        pnpm_sequenceTs3.__workletHash = 13427604040510;
        pnpm_sequenceTs3.__initData = outer1_4;
        defineAnimationResult = obj.defineAnimation(arr[0], pnpm_sequenceTs3);
      }
      return defineAnimationResult;
    } else if ("string" === typeof withTimingResult) {
      let closure_1 = withTimingResult;
      const tmp2 = withTimingResult;
    } else {
      arr = arr.unshift(withTimingResult);
    }
  }
  withSequence.__closure = { logger: require(1586) /* noop */.logger, defineAnimation: require(1622) /* isValidLayoutAnimationProp */.defineAnimation, getReduceMotionForAnimation: require(1622) /* isValidLayoutAnimationProp */.getReduceMotionForAnimation };
  withSequence.__workletHash = 4184395270838;
  withSequence.__initData = closure_2;
  return withSequence;
})();
