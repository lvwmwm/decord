// Module ID: 1712
// Function ID: 19241
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: combineTransition

// Module 1712 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = { code: "function pnpm_EntryExitTransitionTs1(values){const{enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback}=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop==='transform'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop==='transform'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error(\"${value} is not a valid Transform object\");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current==='string'){if(current.includes('deg')){return{[transformProp]:'0deg'};}else{return{[transformProp]:'0'};}}else if(transformProp.includes('translate')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};}" };
const tmp2 = (BaseAnimationBuilder) => {
  class EntryExitTransition {
    constructor() {
      self = this;
      tmp = closure_3(this, EntryExitTransition);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(EntryExitTransition);
      tmp4 = closure_5;
      if (closure_10()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      EntryExitTransition = tmp4Result;
      tmp4Result.enteringV = EntryExitTransition(closure_1[6]).FadeIn;
      tmp4Result.exitingV = EntryExitTransition(closure_1[6]).FadeOut;
      tmp4Result.build = () => {
        const delayFunction = tmp4Result.getDelayFunction();
        const callbackV = tmp4Result.callbackV;
        const delay = tmp4Result.getDelay();
        const enteringV = tmp4Result.enteringV;
        const buildResult = enteringV.build();
        const exitingV = tmp4Result.exitingV;
        const buildResult1 = exitingV.build();
        const exitingV2 = tmp4Result.exitingV;
        const duration = exitingV2.getDuration();
        /* worklet (recovered source) */ function pnpm_EntryExitTransitionTs1(values){const{enteringAnimation,exitingAnimation,delayFunction,delay,withSequence,withTiming,exitingDuration,logger,callback}=this.__closure;const enteringValues=enteringAnimation(values);const exitingValues=exitingAnimation(values);const animations={transform:[]};for(const prop of Object.keys(exitingValues.animations)){if(prop==='transform'){if(!Array.isArray(exitingValues.animations.transform)){continue;}exitingValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay,withSequence(value[transformProp],withTiming(exitingValues.initialValues.transform?exitingValues.initialValues.transform[index][transformProp]:0,{duration:0})))});}});}else{const sequence=enteringValues.animations[prop]!==undefined?[exitingValues.animations[prop],withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]]:[exitingValues.animations[prop],withTiming(Object.keys(values).includes(prop)?values[prop]:exitingValues.initialValues[prop],{duration:0})];animations[prop]=delayFunction(delay,withSequence(...sequence));}}for(const prop of Object.keys(enteringValues.animations)){if(prop==='transform'){if(!Array.isArray(enteringValues.animations.transform)){continue;}enteringValues.animations.transform.forEach(function(value,index){for(const transformProp of Object.keys(value)){animations.transform.push({[transformProp]:delayFunction(delay+exitingDuration,withSequence(withTiming(enteringValues.initialValues.transform?enteringValues.initialValues.transform[index][transformProp]:0,{duration:exitingDuration}),value[transformProp]))});}});}else if(animations[prop]!==undefined){continue;}else{animations[prop]=delayFunction(delay,withSequence(withTiming(enteringValues.initialValues[prop],{duration:0}),enteringValues.animations[prop]));}}const mergedTransform=(Array.isArray(exitingValues.initialValues.transform)?exitingValues.initialValues.transform:[]).concat((Array.isArray(enteringValues.animations.transform)?enteringValues.animations.transform:[]).map(function(value){const objectKeys=Object.keys(value);if((objectKeys===null||objectKeys===void 0?void 0:objectKeys.length)<1){logger.error("${value} is not a valid Transform object");return value;}const transformProp=objectKeys[0];const current=value[transformProp].current;if(typeof current==='string'){if(current.includes('deg')){return{[transformProp]:'0deg'};}else{return{[transformProp]:'0'};}}else if(transformProp.includes('translate')){return{[transformProp]:0};}else{return{[transformProp]:1};}}));return{initialValues:{...exitingValues.initialValues,originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight,transform:mergedTransform},animations:{originX:delayFunction(delay+exitingDuration,withTiming(values.targetOriginX,{duration:exitingDuration})),originY:delayFunction(delay+exitingDuration,withTiming(values.targetOriginY,{duration:exitingDuration})),width:delayFunction(delay+exitingDuration,withTiming(values.targetWidth,{duration:exitingDuration})),height:delayFunction(delay+exitingDuration,withTiming(values.targetHeight,{duration:exitingDuration})),...animations},callback:callback};}
        pnpm_EntryExitTransitionTs1.__closure = { enteringAnimation: buildResult, exitingAnimation: buildResult1, delayFunction, delay, withSequence: delayFunction(callbackV[7]).withSequence, withTiming: delayFunction(callbackV[7]).withTiming, exitingDuration: duration, logger: delayFunction(callbackV[8]).logger, callback: callbackV };
        pnpm_EntryExitTransitionTs1.__workletHash = 15677837188414;
        pnpm_EntryExitTransitionTs1.__initData = closure_8;
        return pnpm_EntryExitTransitionTs1;
      };
      return tmp4Result;
    }
  }
  const arg1 = EntryExitTransition;
  callback2(EntryExitTransition, BaseAnimationBuilder);
  let obj = {
    key: "entering",
    value: function entering(enteringV) {
      this.enteringV = enteringV;
      return this;
    }
  };
  const items = [obj, ];
  obj = {
    key: "exiting",
    value: function exiting(exitingV) {
      this.exitingV = exitingV;
      return this;
    }
  };
  items[1] = obj;
  obj = {
    key: "createInstance",
    value: function createInstance() {
      return new EntryExitTransition();
    }
  };
  const items1 = [
    obj,
    {
      key: "entering",
      value: function entering(arg0) {
        const instance = this.createInstance();
        return instance.entering(arg0);
      }
    },
    {
      key: "exiting",
      value: function exiting(arg0) {
        const instance = this.createInstance();
        return instance.exiting(arg0);
      }
    }
  ];
  return callback(EntryExitTransition, items, items1);
}(arg1(dependencyMap[9]).BaseAnimationBuilder);
tmp2.presetName = "EntryExitTransition";

export const EntryExitTransition = tmp2;
export const combineTransition = function combineTransition(arg0, arg1) {
  return tmp2.entering(arg1).exiting(arg0);
};
