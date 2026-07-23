// Module ID: 1621
// Function ID: 18025
// Name: resolvePath
// Dependencies: [1622, 1625, 1633, 1586]

// Module 1621 (resolvePath)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function resolvePath_Pnpm_styleAnimationTs1(obj,path){const keys=Array.isArray(path)?path:[path];return keys.reduce(function(acc,current){if(Array.isArray(acc)&&typeof current==='number'){return acc[current];}else if(acc!==null&&typeof acc==='object'&&current in acc){return acc[current];}return undefined;},obj);}" };
let closure_3 = (() => {
  function resolvePath(arg0, arg1) {
    let arr = arg1;
    if (!Array.isArray(arg1)) {
      const items = [arg1];
      arr = items;
    }
    return arr.reduce((arg0, arg1) => {
      if (!Array.isArray(arg0)) {
        let tmp2;
        return tmp2;
      }
      tmp2 = arg0[arg1];
    }, arg0);
  }
  resolvePath.__closure = {};
  resolvePath.__workletHash = 6511886988303;
  resolvePath.__initData = closure_2;
  return resolvePath;
})();
let closure_4 = { code: "function setPath_Pnpm_styleAnimationTs2(obj,path,value){const keys=Array.isArray(path)?path:[path];let currObj=obj;for(let i=0;i<keys.length-1;i++){currObj=currObj;if(!(keys[i]in currObj)){if(typeof keys[i+1]==='number'){currObj[keys[i]]=[];}else{currObj[keys[i]]={};}}currObj=currObj[keys[i]];}currObj[keys[keys.length-1]]=value;}" };
let closure_5 = (() => {
  function setPath(arg0, arg1, arg2) {
    let arr = arg1;
    if (!Array.isArray(arg1)) {
      const items = [arg1];
      arr = items;
    }
    let tmp = arg0;
    let tmp2 = arg0;
    let num = 0;
    if (0 < arr.length - 1) {
      do {
        if (!(arr[num] in tmp)) {
          if ("number" === typeof arr[num + 1]) {
            tmp[arr[num]] = [];
          } else {
            tmp[arr[num]] = {};
          }
        }
        tmp = tmp[arr[num]];
        num = num + 1;
        tmp2 = tmp;
      } while (num < arr.length - 1);
    }
    tmp2[arr[arr.length - 1]] = arg2;
  }
  setPath.__closure = {};
  setPath.__workletHash = 1936400546748;
  setPath.__initData = closure_4;
  return setPath;
})();
let closure_6 = { code: "function withStyleAnimation_Pnpm_styleAnimationTs3(styleAnimations){const{defineAnimation,ColorProperties,setPath,processColor,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;return defineAnimation({},function(){'worklet';const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};});}" };
let closure_7 = { code: "function pnpm_styleAnimationTs4(){const{ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn(\"Initial values for animation are missing for property \"+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn(\"'\"+propName+\"' property is not officially supported for layout animations. It may not work as expected.\");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};}" };
arg5.withStyleAnimation = (() => {
  function withStyleAnimation(animations) {
    let closure_0 = animations;
    let obj = outer1_0(outer1_1[0]);
    /* worklet (recovered source) */ function pnpm_styleAnimationTs4(){const{ColorProperties,setPath,processColor,styleAnimations,resolvePath,__DEV__,logger,isValidLayoutAnimationProp,withTiming}=this.__closure;const onFrame=function(animation,now){let stillGoing=false;const entriesToCheck=[{value:animation.styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onFrame===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const currentStyleAnimation=currentEntry.value;if(currentStyleAnimation.finished){continue;}const finished=currentStyleAnimation.onFrame(currentStyleAnimation,now);if(finished){currentStyleAnimation.finished=true;if(currentStyleAnimation.callback){currentStyleAnimation.callback(true);}}else{stillGoing=true;}const isAnimatingColorProp=ColorProperties.includes(currentEntry.path[0]);setPath(animation.current,currentEntry.path,isAnimatingColorProp?processColor(currentStyleAnimation.current):currentStyleAnimation.current);}}return!stillGoing;};const onStart=function(animation,value,now,previousAnimation){const entriesToCheck=[{value:styleAnimations,path:[]}];while(entriesToCheck.length>0){const currentEntry=entriesToCheck.pop();if(Array.isArray(currentEntry.value)){for(let index=0;index<currentEntry.value.length;index++){entriesToCheck.push({value:currentEntry.value[index],path:currentEntry.path.concat(index)});}}else if(typeof currentEntry.value==='object'&&currentEntry.value.onStart===undefined){for(const key of Object.keys(currentEntry.value)){entriesToCheck.push({value:currentEntry.value[key],path:currentEntry.path.concat(key)});}}else{const prevAnimation=resolvePath(previousAnimation===null||previousAnimation===void 0?void 0:previousAnimation.styleAnimations,currentEntry.path);let prevVal=resolvePath(value,currentEntry.path);if(prevAnimation&&!prevVal){prevVal=prevAnimation.current;}if(__DEV__){if(prevVal===undefined){logger.warn("Initial values for animation are missing for property "+currentEntry.path.join('.'));}const propName=currentEntry.path[0];if(typeof propName==='string'&&!isValidLayoutAnimationProp(propName.trim())){logger.warn("'"+propName+"' property is not officially supported for layout animations. It may not work as expected.");}}setPath(animation.current,currentEntry.path,prevVal);let currentAnimation;if(typeof currentEntry.value!=='object'||!currentEntry.value.onStart){currentAnimation=withTiming(currentEntry.value,{duration:0});setPath(animation.styleAnimations,currentEntry.path,currentAnimation);}else{currentAnimation=currentEntry.value;}currentAnimation.onStart(currentAnimation,prevVal,now,prevAnimation);}}};const callback=function(finished){if(!finished){const animationsToCheck=[styleAnimations];while(animationsToCheck.length>0){const currentAnimation=animationsToCheck.pop();if(Array.isArray(currentAnimation)){for(const element of currentAnimation){animationsToCheck.push(element);}}else if(typeof currentAnimation==='object'&&currentAnimation.onStart===undefined){for(const value of Object.values(currentAnimation)){animationsToCheck.push(value);}}else{const currentStyleAnimation=currentAnimation;if(!currentStyleAnimation.finished&&currentStyleAnimation.callback){currentStyleAnimation.callback(false);}}}}};return{isHigherOrder:true,onFrame:onFrame,onStart:onStart,current:{},styleAnimations:styleAnimations,callback:callback};}
    obj = { ColorProperties: outer1_0(outer1_1[1]).ColorProperties, setPath: outer1_5, processColor: outer1_0(outer1_1[1]).processColor, styleAnimations: animations, resolvePath: outer1_3, __DEV__: false, logger: outer1_0(outer1_1[3]).logger, isValidLayoutAnimationProp: outer1_0(outer1_1[0]).isValidLayoutAnimationProp, withTiming: outer1_0(outer1_1[2]).withTiming };
    pnpm_styleAnimationTs4.__closure = obj;
    pnpm_styleAnimationTs4.__workletHash = 1293354823532;
    pnpm_styleAnimationTs4.__initData = outer1_7;
    return obj.defineAnimation({}, pnpm_styleAnimationTs4);
  }
  withStyleAnimation.__closure = { defineAnimation: require(1622) /* isValidLayoutAnimationProp */.defineAnimation, ColorProperties: require(1625) /* call */.ColorProperties, setPath: closure_5, processColor: require(1625) /* call */.processColor, resolvePath: closure_3, __DEV__: false, logger: require(1586) /* noop */.logger, isValidLayoutAnimationProp: require(1622) /* isValidLayoutAnimationProp */.isValidLayoutAnimationProp, withTiming: require(1633) /* pnpm_timingTs1 */.withTiming };
  withStyleAnimation.__workletHash = 3046356752495;
  withStyleAnimation.__initData = closure_6;
  return withStyleAnimation;
})();
