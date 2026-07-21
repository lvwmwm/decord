// Module ID: 1622
// Function ID: 18036
// Name: isValidLayoutAnimationProp
// Dependencies: [1641, 1634, 1586, 1623, 1607, 1638, 1652, 1668]
// Exports: initialUpdaterRun

// Module 1622 (isValidLayoutAnimationProp)
import getEasingByName from "getEasingByName";
import linear from "linear";

let closure_3 = false;
linear = linear.shouldBeUseWeb();
let closure_5 = { 1302360882: null, -1105169615: null, -1193689565: true, 1597357605: true, "Null": true, "Null": true, "Null": true, "Null": true, "Null": null, "Null": null };
let closure_6 = { code: "function isValidLayoutAnimationProp_Pnpm_utilTs1(prop){const{LAYOUT_ANIMATION_SUPPORTED_PROPS}=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;}" };
let closure_7 = { code: "function assertEasingIsWorklet_Pnpm_utilTs2(easing){const{SHOULD_BE_USE_WEB,isWorkletFunction}=this.__closure;if(_WORKLET){return;}if(SHOULD_BE_USE_WEB){return;}if(easing!==null&&easing!==void 0&&easing.factory){return;}if(!isWorkletFunction(easing)){throw new ReanimatedError('The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.');}}" };
let closure_8 = { code: "function recognizePrefixSuffix_Pnpm_utilTs3(value){if(typeof value==='string'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new ReanimatedError(\"Couldn't parse animation value.\");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:'');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}}" };
const tmp3 = () => {
  function isValidLayoutAnimationProp(arg0) {
    return arg0 in closure_5;
  }
  isValidLayoutAnimationProp.__closure = { LAYOUT_ANIMATION_SUPPORTED_PROPS: closure_5 };
  isValidLayoutAnimationProp.__workletHash = 13235833688548;
  isValidLayoutAnimationProp.__initData = closure_6;
  return isValidLayoutAnimationProp;
}();
const tmp5 = () => {
  function recognizePrefixSuffix(current) {
    if ("string" === typeof current) {
      const match = current.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
      if (match) {
        let str2 = "";
        if (null != match[3]) {
          str2 = tmp8;
        }
        let obj = { prefix: match[1], suffix: match[4] };
        const _parseFloat = parseFloat;
        obj.strippedValue = parseFloat(match[2] + str2);
        return obj;
      } else {
        const ReanimatedError = callback(closure_1[3]).ReanimatedError;
        const prototype = ReanimatedError.prototype;
        const reanimatedError = new ReanimatedError("Couldn't parse animation value.");
        throw reanimatedError;
      }
    } else {
      obj = { strippedValue: current };
      return obj;
    }
  }
  recognizePrefixSuffix.__closure = {};
  recognizePrefixSuffix.__workletHash = 11076682371077;
  recognizePrefixSuffix.__initData = closure_8;
  return recognizePrefixSuffix;
}();
const uiValue = require("isWorkletFunction").ReducedMotionManager.uiValue;
let closure_11 = { code: "function getReduceMotionFromConfig_Pnpm_utilTs4(config){const{ReduceMotion,isReduceMotionOnUI}=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;}" };
const tmp6 = () => {
  function getReduceMotionFromConfig(reduceMotion) {
    if (reduceMotion) {
      if (reduceMotion !== callback(closure_1[2]).ReduceMotion.System) {
        let value = reduceMotion === callback(closure_1[2]).ReduceMotion.Always;
      }
      return value;
    }
    value = value.value;
  }
  getReduceMotionFromConfig.__closure = { ReduceMotion: arg1(dependencyMap[2]).ReduceMotion, isReduceMotionOnUI: uiValue };
  getReduceMotionFromConfig.__workletHash = 7977910521960;
  getReduceMotionFromConfig.__initData = closure_11;
  return getReduceMotionFromConfig;
}();
let closure_13 = { code: "function getReduceMotionForAnimation_Pnpm_utilTs5(config){const{getReduceMotionFromConfig}=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);}" };
let closure_14 = { code: "function applyProgressToMatrix_Pnpm_utilTs6(progress,a,b){const{addMatrices,scaleMatrix,subtractMatrices}=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));}" };
const tmp4 = () => {
  function assertEasingIsWorklet(factory) {
    if (!globalThis._WORKLET) {
      if (!closure_4) {
        if (null == factory) {
          if (!obj.isWorkletFunction(factory)) {
            const ReanimatedError = callback(closure_1[3]).ReanimatedError;
            const prototype = ReanimatedError.prototype;
            const reanimatedError = new ReanimatedError("The easing function is not a worklet. Please make sure you import `Easing` from react-native-reanimated.");
            throw reanimatedError;
          }
          const obj = callback(closure_1[2]);
        }
      }
    }
  }
  assertEasingIsWorklet.__closure = { SHOULD_BE_USE_WEB: linear, isWorkletFunction: arg1(dependencyMap[2]).isWorkletFunction };
  assertEasingIsWorklet.__workletHash = 8431488219943;
  assertEasingIsWorklet.__initData = closure_7;
  return assertEasingIsWorklet;
}();
let closure_15 = () => {
  function applyProgressToMatrix(arg0, arg1, arg2) {
    const obj = callback(closure_1[5]);
    const obj2 = callback(closure_1[5]);
    return obj.addMatrices(arg1, obj2.scaleMatrix(callback(closure_1[5]).subtractMatrices(arg2, arg1), arg0));
  }
  applyProgressToMatrix.__closure = { addMatrices: arg1(dependencyMap[5]).addMatrices, scaleMatrix: arg1(dependencyMap[5]).scaleMatrix, subtractMatrices: arg1(dependencyMap[5]).subtractMatrices };
  applyProgressToMatrix.__workletHash = 4822273347900;
  applyProgressToMatrix.__initData = closure_14;
  return applyProgressToMatrix;
}();
let closure_16 = { code: "function applyProgressToNumber_Pnpm_utilTs7(progress,a,b){return a+progress*(b-a);}" };
let closure_17 = () => {
  function applyProgressToNumber(arg0, arg1, arg2) {
    return arg1 + arg0 * (arg2 - arg1);
  }
  applyProgressToNumber.__closure = {};
  applyProgressToNumber.__workletHash = 954128472665;
  applyProgressToNumber.__initData = closure_16;
  return applyProgressToNumber;
}();
let closure_18 = { code: "function decorateAnimation_Pnpm_utilTs8(animation){const{getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat}=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};}" };
let closure_19 = () => {
  function decorateAnimation(isHigherOrder) {
    ({ onStart: closure_0, onFrame: closure_1 } = isHigherOrder);
    if (isHigherOrder.isHigherOrder) {
      isHigherOrder.onStart = (reduceMotion) => {
        if (undefined === reduceMotion.reduceMotion) {
          reduceMotion.reduceMotion = callback4();
        }
        return callback(reduceMotion, arg1, arg2, arg3);
      };
    } else {
      const _Object = Object;
      let getEasingByName = Object.assign({}, isHigherOrder);
      delete r2.callback;
      function prefNumberSuffOnFrame(strippedCurrent) {
        let __prefix;
        strippedCurrent.current = strippedCurrent.strippedCurrent;
        ({ current: strippedCurrent.strippedCurrent, __prefix } = strippedCurrent);
        let str = "";
        let str2 = "";
        if (null != __prefix) {
          str2 = __prefix;
        }
        const __suffix = strippedCurrent.__suffix;
        const sum = str2 + strippedCurrent.current;
        if (null != __suffix) {
          str = __suffix;
        }
        strippedCurrent.current = sum + str;
        return callback2(strippedCurrent, arg1);
      }
      let closure_4 = [];
      function colorOnFrame(nonscaledCurrent) {
        const items = [];
        let getEasingByName = items;
        let closure_3 = true;
        nonscaledCurrent.current = nonscaledCurrent.nonscaledCurrent;
        const item = closure_4.forEach((arg0) => {
          let onFrameResult = closure_3;
          if (closure_3) {
            onFrameResult = obj.onFrame(arg0[arg0], arg1);
          }
          closure_3 = onFrameResult;
          items.push(arg0[arg0].current);
        });
        nonscaledCurrent(arg1[6]).clampRGBA(items);
        nonscaledCurrent.nonscaledCurrent = items;
        const obj = nonscaledCurrent(arg1[6]);
        const obj2 = nonscaledCurrent(arg1[6]);
        nonscaledCurrent.current = obj2.rgbaArrayToRGBAColor(nonscaledCurrent(arg1[6]).toGammaSpace(items));
        return closure_3;
      }
      function transformationMatrixOnFrame(arg0, arg1) {
        let tmp3;
        let tmp4;
        let tmp5;
        let tmp7;
        let tmp8;
        let tmp9;
        const first = arg0[0];
        let closure_1 = arg0[0].current / 100;
        const items = [];
        let getEasingByName = items;
        const items1 = [false, false, false];
        const item = items1.forEach((arg0, arg1) => items.push(callback(closure_1, arg0.startMatrices[arg0], arg0.stopMatrices[arg0])));
        const items2 = [];
        const prefNumberSuffOnFrame = items2;
        const items3 = [false, false, false];
        [tmp3, tmp4, tmp5] = items;
        const item1 = items3.forEach((arg0, arg1) => {
          const tmp = callback2(closure_1, arg0.startMatrices["r" + arg0], arg0.stopMatrices["r" + arg0]);
          items2.push(arg0(closure_1[5]).getRotationMatrix(tmp, arg0));
        });
        [tmp7, tmp8, tmp9] = items2;
        const onFrameResult = first.onFrame(arg0[0], arg1);
        const obj2 = arg0(closure_1[5]);
        const obj3 = arg0(closure_1[5]);
        const multiplyMatricesResult = obj2.multiplyMatrices(tmp7, arg0(closure_1[5]).multiplyMatrices(tmp8, tmp9));
        const obj4 = arg0(closure_1[5]);
        const obj5 = arg0(closure_1[5]);
        const obj6 = arg0(closure_1[5]);
        arg0.current = obj4.flatten(obj5.multiplyMatrices(obj6.multiplyMatrices(tmp4, arg0(closure_1[5]).multiplyMatrices(tmp5, multiplyMatricesResult)), tmp3));
        return onFrameResult;
      }
      function arrayOnFrame(current) {
        let getEasingByName = true;
        current = current.current;
        const item = current.forEach((arg0, arg1) => {
          let onFrameResult = getEasingByName;
          if (getEasingByName) {
            onFrameResult = obj.onFrame(arg0[arg1], arg1);
          }
          getEasingByName = onFrameResult;
          arg0.current[arg1] = arg0[arg1].current;
        });
        return getEasingByName;
      }
      function objectOnFrame(current) {
        const obj = {};
        let flag = true;
        let flag2 = true;
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = flag;
          while (keys[tmp] !== undefined) {
            let tmp5 = tmp3;
            let obj2 = current[tmp3];
            let onFrameResult = flag;
            if (flag) {
              onFrameResult = obj2.onFrame(current[tmp3], arg1);
            }
            obj[tmp3] = current[tmp3].current;
            flag = onFrameResult;
            // continue
          }
        }
        current.current = obj;
        return flag2;
      }
      isHigherOrder.onStart = (reduceMotion, current, arg2, current2) => {
        let strippedValue;
        if (undefined === reduceMotion.reduceMotion) {
          reduceMotion.reduceMotion = callback4();
        }
        if (reduceMotion.reduceMotion) {
          if (undefined !== reduceMotion.toValue) {
            reduceMotion.current = reduceMotion.toValue;
          } else {
            callback(reduceMotion, current, arg2, current2);
          }
          reduceMotion.startTime = 0;
          reduceMotion.onFrame = () => true;
        } else {
          if (obj.isColor(current)) {
            function colorOnStart(current, current, arg2, current2) {
              const items = [];
              if (obj.isColor(current)) {
                const obj2 = current(arg2[6]);
                let closure_4 = obj2.toLinearSpace(current(arg2[6]).convertToRGBA(current.current));
                const obj3 = current(arg2[6]);
                const obj4 = current(arg2[6]);
                let closure_3 = obj4.toLinearSpace(current(arg2[6]).convertToRGBA(current));
                if (current.toValue) {
                  const obj6 = current(arg2[6]);
                  let closure_5 = obj6.toLinearSpace(current(arg2[6]).convertToRGBA(current.toValue));
                  const obj7 = current(arg2[6]);
                }
                const obj5 = current(arg2[6]);
              }
              const item = closure_4.forEach((arg0, arg1) => {
                arg0[arg0] = Object.assign({}, arg3);
                arg0[arg0].current = closure_4[arg1];
                let tmp;
                if (closure_5) {
                  tmp = closure_5[arg1];
                }
                arg0[arg0].toValue = tmp;
                let tmp4;
                if (arg3) {
                  tmp4 = arg3[arg0];
                }
                arg0[arg0].onStart(arg0[arg0], closure_3[arg1], arg2, tmp4);
                items.push(arg0[arg0].current);
              });
              current.unroundedCurrent = items;
              const obj = current(arg2[6]);
              current(arg2[6]).clampRGBA(items);
              const obj8 = current(arg2[6]);
              const obj9 = current(arg2[6]);
              current.current = obj9.rgbaArrayToRGBAColor(current(arg2[6]).toGammaSpace(items));
            }(reduceMotion, current, arg2, current2);
            reduceMotion.onFrame = colorOnFrame;
          } else {
            if (obj2.isAffineMatrixFlat(current)) {
              reduceMotion.startMatrices = callback(closure_1[5]).decomposeMatrixIntoMatricesAndAngles(current);
              const obj3 = callback(closure_1[5]);
              reduceMotion.stopMatrices = callback(closure_1[5]).decomposeMatrixIntoMatricesAndAngles(reduceMotion.toValue);
              const _Object = Object;
              reduceMotion[0] = Object.assign({}, getEasingByName);
              reduceMotion[0].current = 0;
              reduceMotion[0].toValue = 100;
              const first = reduceMotion[0];
              const first1 = reduceMotion[0];
              let first2;
              if (current2) {
                first2 = current2[0];
              }
              first.onStart(first1, 0, arg2, first2);
              reduceMotion.current = current;
              reduceMotion.onFrame = transformationMatrixOnFrame;
              const obj4 = callback(closure_1[5]);
            } else {
              const _Array = Array;
              if (Array.isArray(current)) {
                function arrayOnStart(reduceMotion, arr, arg2, current2) {
                  const item = arr.forEach((current) => {
                    current[arg1] = Object.assign({}, arg3);
                    current[arg1].current = current;
                    current[arg1].toValue = current.toValue[arg1];
                    let tmp2;
                    if (arg3) {
                      tmp2 = arg3[arg1];
                    }
                    current[arg1].onStart(current[arg1], current, arg2, tmp2);
                  });
                  reduceMotion.current = current2(arr);
                }(reduceMotion, current, arg2, current2);
                reduceMotion.onFrame = arrayOnFrame;
              } else if ("string" === typeof current) {
                ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = callback3(current));
                reduceMotion.strippedCurrent = strippedValue;
                reduceMotion.current = strippedValue;
                reduceMotion.startValue = strippedValue;
                reduceMotion.toValue = callback3(reduceMotion.toValue).strippedValue;
                if (current2) {
                  if (current2 !== reduceMotion) {
                    ({ strippedValue: current2.current, prefix: current2.__prefix, suffix: current2.__suffix } = callback3(current2.current));
                    const tmp28 = callback3(current2.current);
                  }
                }
                callback(reduceMotion, strippedValue, arg2, current2);
                const __prefix = reduceMotion.__prefix;
                let str2 = "";
                let str3 = "";
                if (null != __prefix) {
                  str3 = __prefix;
                }
                const __suffix = reduceMotion.__suffix;
                let tmp37 = str2;
                const sum = str3 + reduceMotion.current;
                if (null != __suffix) {
                  tmp37 = __suffix;
                }
                reduceMotion.current = sum + tmp37;
                let tmp38 = current2;
                if (current2) {
                  tmp38 = current2 !== reduceMotion;
                }
                if (tmp38) {
                  const __prefix2 = current2.__prefix;
                  let tmp39 = str2;
                  if (null != __prefix2) {
                    tmp39 = __prefix2;
                  }
                  const __suffix2 = current2.__suffix;
                  const sum1 = tmp39 + current2.current;
                  if (null != __suffix2) {
                    str2 = __suffix2;
                  }
                  current2.current = sum1 + str2;
                }
                reduceMotion.onFrame = prefNumberSuffOnFrame;
                const tmp26 = callback3(current);
              } else {
                if ("object" === tmp7) {
                  if (null !== current) {
                    for (const key10040 in arg1) {
                      let tmp72 = key10040;
                      let _Object2 = Object;
                      let tmp73 = getEasingByName;
                      arg0[key10040] = Object.assign({}, getEasingByName);
                      arg0[key10040].onStart = arg0.onStart;
                      arg0[key10040].current = arg1[key10040];
                      arg0[key10040].toValue = arg0.toValue[key10040];
                      let obj6 = arg0[key10040];
                      let tmp74 = arg0[key10040];
                      let tmp75 = arg1[key10040];
                      let tmp17;
                      if (arg3) {
                        tmp17 = arg3[key10040];
                      }
                      let tmp18 = obj6;
                      let tmp19 = tmp74;
                      let tmp20 = tmp75;
                      let tmp21 = arg2;
                      let tmp22 = tmp17;
                      let onStartResult1 = obj6.onStart(tmp74, tmp75, arg2, tmp17);
                    }
                    reduceMotion.current = current;
                    reduceMotion.onFrame = objectOnFrame;
                  }
                }
                callback(reduceMotion, current, arg2, current2);
              }
            }
            const obj2 = callback(closure_1[5]);
          }
          return tmp15;
        }
      };
    }
  }
  decorateAnimation.__closure = { getReduceMotionFromConfig: tmp6, recognizePrefixSuffix: tmp5, isColor: arg1(dependencyMap[6]).isColor, toLinearSpace: arg1(dependencyMap[6]).toLinearSpace, convertToRGBA: arg1(dependencyMap[6]).convertToRGBA, clampRGBA: arg1(dependencyMap[6]).clampRGBA, rgbaArrayToRGBAColor: arg1(dependencyMap[6]).rgbaArrayToRGBAColor, toGammaSpace: arg1(dependencyMap[6]).toGammaSpace, decomposeMatrixIntoMatricesAndAngles: arg1(dependencyMap[5]).decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix: closure_15, applyProgressToNumber: closure_17, getRotationMatrix: arg1(dependencyMap[5]).getRotationMatrix, multiplyMatrices: arg1(dependencyMap[5]).multiplyMatrices, flatten: arg1(dependencyMap[5]).flatten, isAffineMatrixFlat: arg1(dependencyMap[5]).isAffineMatrixFlat };
  decorateAnimation.__workletHash = 6240615473022;
  decorateAnimation.__initData = closure_18;
  return decorateAnimation;
}();
let closure_20 = { code: "function defineAnimation_Pnpm_utilTs9(starting,factory){const{IN_STYLE_UPDATER,decorateAnimation,SHOULD_BE_USE_WEB}=this.__closure;if(IN_STYLE_UPDATER){return starting;}const create=function(){'worklet';const animation=factory();decorateAnimation(animation);return animation;};if(_WORKLET||SHOULD_BE_USE_WEB){return create();}create.__isAnimationDefinition=true;return create;}" };
let closure_21 = { code: "function pnpm_utilTs10(){const{factory,decorateAnimation}=this.__closure;const animation=factory();decorateAnimation(animation);return animation;}" };
let closure_22 = { code: "function cancelAnimationNative_Pnpm_utilTs11(sharedValue){const{runOnUI}=this.__closure;if(_WORKLET){sharedValue.value=sharedValue.value;}else{runOnUI(function(){'worklet';sharedValue.value=sharedValue.value;})();}}" };
let closure_23 = { code: "function pnpm_utilTs12(){const{sharedValue}=this.__closure;sharedValue.value=sharedValue.value;}" };
const tmp7 = () => {
  function getReduceMotionForAnimation(reduceMotion) {
    if (reduceMotion) {
      return callback(reduceMotion);
    }
  }
  getReduceMotionForAnimation.__closure = { getReduceMotionFromConfig: tmp6 };
  getReduceMotionForAnimation.__workletHash = 10866808344662;
  getReduceMotionForAnimation.__initData = closure_13;
  return getReduceMotionForAnimation;
}();
let cancelAnimationWeb = () => {
  function cancelAnimationNative(value) {
    if (globalThis._WORKLET) {
      value.value = value.value;
    } else {
      let obj = value(closure_1[7]);
      /* worklet (recovered source) */ function pnpm_utilTs12(){const{sharedValue}=this.__closure;sharedValue.value=sharedValue.value;}
      obj = { sharedValue: value };
      pnpm_utilTs12.__closure = obj;
      pnpm_utilTs12.__workletHash = 14261344384038;
      pnpm_utilTs12.__initData = closure_23;
      obj.runOnUI(pnpm_utilTs12)();
    }
  }
  cancelAnimationNative.__closure = { runOnUI: arg1(dependencyMap[7]).runOnUI };
  cancelAnimationNative.__workletHash = 796831326214;
  cancelAnimationNative.__initData = closure_22;
  return cancelAnimationNative;
}();
if (linear) {
  cancelAnimationWeb = function cancelAnimationWeb(value) {
    value.value = value.value;
  };
}

export const isValidLayoutAnimationProp = tmp3;
export const assertEasingIsWorklet = tmp4;
export const initialUpdaterRun = function initialUpdaterRun(updater) {
  let closure_3 = true;
  closure_3 = false;
  return updater();
};
export const recognizePrefixSuffix = tmp5;
export const getReduceMotionFromConfig = tmp6;
export const getReduceMotionForAnimation = tmp7;
export const defineAnimation = () => {
  function defineAnimation(toValue, pnpm_clampTs2) {
    if (closure_3) {
      return toValue;
    } else {
      /* worklet (recovered source) */ function pnpm_utilTs10(){const{factory,decorateAnimation}=this.__closure;const animation=factory();decorateAnimation(animation);return animation;}
      const obj = { factory: pnpm_clampTs2, decorateAnimation: closure_19 };
      pnpm_utilTs10.__closure = obj;
      pnpm_utilTs10.__workletHash = 9825023081203;
      pnpm_utilTs10.__initData = closure_21;
      if (!globalThis._WORKLET) {
        if (!closure_4) {
          pnpm_utilTs10.__isAnimationDefinition = true;
          let pnpm_utilTs10Result = pnpm_utilTs10;
        }
        return pnpm_utilTs10Result;
      }
      pnpm_utilTs10Result = pnpm_utilTs10();
    }
  }
  defineAnimation.__closure = { IN_STYLE_UPDATER: closure_3, decorateAnimation: closure_19, SHOULD_BE_USE_WEB: linear };
  defineAnimation.__workletHash = 8998026617746;
  defineAnimation.__initData = closure_20;
  return defineAnimation;
}();
export const cancelAnimation = cancelAnimationWeb;
