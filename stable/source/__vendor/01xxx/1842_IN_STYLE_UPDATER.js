// Module ID: 1842
// Function ID: 1843
// Name: IN_STYLE_UPDATER
// Dependencies: [1705, 1843, 1697, 1845, 1680]
// Exports: decorateAnimation, getReduceMotionForAnimation, getReduceMotionFromConfig, initialUpdaterRun, isValidLayoutAnimationProp, recognizePrefixSuffix

// Module 1842 (IN_STYLE_UPDATER)
import Colors from "Colors" /* 1680 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1697 */;
import _mod1843 from "module_1843" /* 1843 */;
import _mod1845 from "module_1845" /* 1845 */;
import bundleModeNative from "module_1705" /* 1705 */;

let obj;

let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp18;
let tmp19;
let tmp20;
let tmp21;
let tmp22;
let tmp23;
let tmp24;
let tmp25;
let tmp26;
let tmp27;
let tmp28;
let tmp29;
let tmp30;
let tmp31;
let tmp32;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const IN_STYLE_UPDATER = { current: false };
const serializable = bundleModeNative.createSerializable({ current: false });
const serializableMappingCache = bundleModeNative.serializableMappingCache;
const result = serializableMappingCache.set(IN_STYLE_UPDATER, serializable);
let items = [{ code: "(function isValidLayoutAnimationProp_Pnpm_utilCommonTs1(prop){let[LAYOUT_ANIMATION_SUPPORTED_PROPS]=this.__closure;return prop in LAYOUT_ANIMATION_SUPPORTED_PROPS;})" }, { originX: true, originY: true, width: true, height: true, borderRadius: true, globalOriginX: true, globalOriginY: true, opacity: true, transform: true, backgroundColor: true }];
[tmp4, tmp5] = items;
function isValidLayoutAnimationProp(arg0) {
  return arg0 in c0;
}
let items1 = [tmp5];
isValidLayoutAnimationProp.__closure = items1;
isValidLayoutAnimationProp.__workletHash = 3692039011472;
isValidLayoutAnimationProp.__initData = tmp4;
let items2 = [{ code: "(function recognizePrefixSuffix_Pnpm_utilCommonTs2(value){if(typeof value==='string'){var _match$;const match=value.match(/([A-Za-z]*)(-?\\d*\\.?\\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);if(!match){throw new Error(\"[Reanimated] Couldn't parse animation value.\");}const prefix=match[1];const suffix=match[4];const number=match[2]+((_match$=match[3])!==null&&_match$!==void 0?_match$:'');return{prefix:prefix,suffix:suffix,strippedValue:parseFloat(number)};}else{return{strippedValue:value};}})" }];
[tmp6] = items2;
function recognizePrefixSuffix(strippedValue) {
  if (typeof strippedValue === "string") {
    const match = strippedValue.match(/([A-Za-z]*)(-?\d*\.?\d*)([eE][-+]?[0-9]+)?([A-Za-z%]*)/);
    if (match) {
      let str2 = match[3];
      const tmp5 = match[1];
      const tmp6 = match[4];
      const tmp7 = match[2];
      if (str2 == null) {
        str2 = "";
      }
      const _parseFloat = parseFloat;
      obj = { prefix: tmp5, suffix: tmp6, strippedValue: parseFloat(tmp7 + str2) };
      return obj;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("[Reanimated] Couldn't parse animation value.");
      throw error;
    }
  } else {
    return { strippedValue };
  }
}
recognizePrefixSuffix.__workletHash = 15666383332526;
recognizePrefixSuffix.__initData = tmp6;
let items3 = [{ code: "(function getReduceMotionFromConfig_Pnpm_utilCommonTs3(config){let[ReduceMotion,isReduceMotionOnUI]=this.__closure;return!config||config===ReduceMotion.System?isReduceMotionOnUI.value:config===ReduceMotion.Always;})" }, , ];
const uiValue = _mod1843.ReducedMotionManager.uiValue;
items3[1] = LayoutAnimationType.ReduceMotion;
items3[2] = uiValue;
[tmp7, tmp8, tmp9] = items3;
function getReduceMotionFromConfig(arg0) {
  const tmp = arg0;
  if (tmp) {
    let value;
    if (arg0 !== _undefined.System) {
      value = arg0 === _undefined.Always;
    }
    return value;
  }
  value = _undefined2.value;
}
const items4 = [tmp8, tmp9];
getReduceMotionFromConfig.__closure = items4;
getReduceMotionFromConfig.__workletHash = 240605741019;
getReduceMotionFromConfig.__initData = tmp7;
const items5 = [{ code: "(function getReduceMotionForAnimation_Pnpm_utilCommonTs4(config){let[getReduceMotionFromConfig]=this.__closure;if(!config){return undefined;}return getReduceMotionFromConfig(config);})" }, getReduceMotionFromConfig];
[tmp10, tmp11] = items5;
function getReduceMotionForAnimation(arg0) {
  if (arg0) {
    return _undefined(arg0);
  }
}
const items6 = [tmp11];
getReduceMotionForAnimation.__closure = items6;
getReduceMotionForAnimation.__workletHash = 17394846570243;
getReduceMotionForAnimation.__initData = tmp10;
const items7 = [{ code: "(function applyProgressToMatrix_Pnpm_utilCommonTs5(progress,a,b){let[addMatrices,scaleMatrix,subtractMatrices]=this.__closure;return addMatrices(a,scaleMatrix(subtractMatrices(b,a),progress));})" }, _mod1845.addMatrices, _mod1845.scaleMatrix, _mod1845.subtractMatrices];
[tmp12, tmp13, tmp14, tmp15] = items7;
function applyProgressToMatrix(arg0, arg1, arg2) {
  return _undefined(arg1, _undefined2(_undefined3(arg2, arg1), arg0));
}
const items8 = [tmp13, tmp14, tmp15];
applyProgressToMatrix.__closure = items8;
applyProgressToMatrix.__workletHash = 15807166362027;
applyProgressToMatrix.__initData = tmp12;
const items9 = [{ code: "(function applyProgressToNumber_Pnpm_utilCommonTs6(progress,a,b){return a+progress*(b-a);})" }];
[tmp16] = items9;
function applyProgressToNumber(arg0, arg1, arg2) {
  return arg1 + arg0 * (arg2 - arg1);
}
applyProgressToNumber.__workletHash = 13377856094452;
applyProgressToNumber.__initData = tmp16;
const items10 = [{ code: "(function decorateAnimation_Pnpm_utilCommonTs7(animation){let[getReduceMotionFromConfig,recognizePrefixSuffix,isColor,toLinearSpace,convertToRGBA,clampRGBA,rgbaArrayToRGBAColor,toGammaSpace,decomposeMatrixIntoMatricesAndAngles,applyProgressToMatrix,applyProgressToNumber,getRotationMatrix,multiplyMatrices,flatten,isAffineMatrixFlat]=this.__closure;const baseOnStart=animation.onStart;const baseOnFrame=animation.onFrame;if(animation.isHigherOrder){animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}return baseOnStart(animation,value,timestamp,previousAnimation);};return;}const animationCopy=Object.assign({},animation);delete animationCopy.callback;const prefNumberSuffOnStart=function(animation,value,timestamp,previousAnimation){var _animation$__prefix,_animation$__suffix;const{prefix:prefix,suffix:suffix,strippedValue:strippedValue}=recognizePrefixSuffix(value);animation.__prefix=prefix;animation.__suffix=suffix;animation.strippedCurrent=strippedValue;const{strippedValue:strippedToValue}=recognizePrefixSuffix(animation.toValue);animation.current=strippedValue;animation.startValue=strippedValue;animation.toValue=strippedToValue;if(previousAnimation&&previousAnimation!==animation){const{prefix:paPrefix,suffix:paSuffix,strippedValue:paStrippedValue}=recognizePrefixSuffix(previousAnimation.current);previousAnimation.current=paStrippedValue;previousAnimation.__prefix=paPrefix;previousAnimation.__suffix=paSuffix;}baseOnStart(animation,strippedValue,timestamp,previousAnimation);animation.current=((_animation$__prefix=animation.__prefix)!==null&&_animation$__prefix!==void 0?_animation$__prefix:'')+animation.current+((_animation$__suffix=animation.__suffix)!==null&&_animation$__suffix!==void 0?_animation$__suffix:'');if(previousAnimation&&previousAnimation!==animation){var _previousAnimation$__,_previousAnimation$__2;previousAnimation.current=((_previousAnimation$__=previousAnimation.__prefix)!==null&&_previousAnimation$__!==void 0?_previousAnimation$__:'')+previousAnimation.current+((_previousAnimation$__2=previousAnimation.__suffix)!==null&&_previousAnimation$__2!==void 0?_previousAnimation$__2:'');}};const prefNumberSuffOnFrame=function(animation,timestamp){var _animation$__prefix2,_animation$__suffix2;animation.current=animation.strippedCurrent;const res=baseOnFrame(animation,timestamp);animation.strippedCurrent=animation.current;animation.current=((_animation$__prefix2=animation.__prefix)!==null&&_animation$__prefix2!==void 0?_animation$__prefix2:'')+animation.current+((_animation$__suffix2=animation.__suffix)!==null&&_animation$__suffix2!==void 0?_animation$__suffix2:'');return res;};const tab=['R','G','B','A'];const colorOnStart=function(animation,value,timestamp,previousAnimation){let RGBAValue;let RGBACurrent;let RGBAToValue;const res=[];if(isColor(value)){RGBACurrent=toLinearSpace(convertToRGBA(animation.current));RGBAValue=toLinearSpace(convertToRGBA(value));if(animation.toValue){RGBAToValue=toLinearSpace(convertToRGBA(animation.toValue));}}tab.forEach(function(i,index){animation[i]=Object.assign({},animationCopy);animation[i].current=RGBACurrent[index];animation[i].toValue=RGBAToValue?RGBAToValue[index]:undefined;animation[i].onStart(animation[i],RGBAValue[index],timestamp,previousAnimation?previousAnimation[i]:undefined);res.push(animation[i].current);});animation.unroundedCurrent=res;clampRGBA(res);animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));};const colorOnFrame=function(animation,timestamp){const res=[];let finished=true;animation.current=animation.nonscaledCurrent;tab.forEach(function(i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;res.push(animation[i].current);});clampRGBA(res);animation.nonscaledCurrent=res;animation.current=rgbaArrayToRGBAColor(toGammaSpace(res));return finished;};const transformationMatrixOnStart=function(animation,value,timestamp,previousAnimation){const toValue=animation.toValue;animation.startMatrices=decomposeMatrixIntoMatricesAndAngles(value);animation.stopMatrices=decomposeMatrixIntoMatricesAndAngles(toValue);animation[0]=Object.assign({},animationCopy);animation[0].current=0;animation[0].toValue=100;animation[0].onStart(animation[0],0,timestamp,previousAnimation?previousAnimation[0]:undefined);animation.current=value;};const transformationMatrixOnFrame=function(animation,timestamp){let finished=true;const result=animation[0].onFrame(animation[0],timestamp);finished=finished&&result;const progress=animation[0].current/100;const transforms=['translationMatrix','scaleMatrix','skewMatrix'];const mappedTransforms=[];transforms.forEach(function(key,_){return mappedTransforms.push(applyProgressToMatrix(progress,animation.startMatrices[key],animation.stopMatrices[key]));});const[currentTranslation,currentScale,skewMatrix]=mappedTransforms;const rotations=['x','y','z'];const mappedRotations=[];rotations.forEach(function(key,_){const angle=applyProgressToNumber(progress,animation.startMatrices['r'+key],animation.stopMatrices['r'+key]);mappedRotations.push(getRotationMatrix(angle,key));});const[rotationMatrixX,rotationMatrixY,rotationMatrixZ]=mappedRotations;const rotationMatrix=multiplyMatrices(rotationMatrixX,multiplyMatrices(rotationMatrixY,rotationMatrixZ));const updated=flatten(multiplyMatrices(multiplyMatrices(currentScale,multiplyMatrices(skewMatrix,rotationMatrix)),currentTranslation));animation.current=updated;return finished;};const arrayOnStart=function(animation,value,timestamp,previousAnimation){value.forEach(function(v,i){animation[i]=Object.assign({},animationCopy);animation[i].current=v;animation[i].toValue=animation.toValue[i];animation[i].onStart(animation[i],v,timestamp,previousAnimation?previousAnimation[i]:undefined);});animation.current=[...value];};const arrayOnFrame=function(animation,timestamp){let finished=true;animation.current.forEach(function(_,i){const result=animation[i].onFrame(animation[i],timestamp);finished=finished&&result;animation.current[i]=animation[i].current;});return finished;};const objectOnStart=function(animation,value,timestamp,previousAnimation){for(const key in value){animation[key]=Object.assign({},animationCopy);animation[key].onStart=animation.onStart;animation[key].current=value[key];animation[key].toValue=animation.toValue[key];animation[key].onStart(animation[key],value[key],timestamp,previousAnimation?previousAnimation[key]:undefined);}animation.current=value;};const objectOnFrame=function(animation,timestamp){let finished=true;const newObject={};for(const key in animation.current){const result=animation[key].onFrame(animation[key],timestamp);finished=finished&&result;newObject[key]=animation[key].current;}animation.current=newObject;return finished;};animation.onStart=function(animation,value,timestamp,previousAnimation){if(animation.reduceMotion===undefined){animation.reduceMotion=getReduceMotionFromConfig();}if(animation.reduceMotion){if(animation.toValue!==undefined){animation.current=animation.toValue;}else{baseOnStart(animation,value,timestamp,previousAnimation);}animation.startTime=0;animation.onFrame=function(){return true;};return;}if(isColor(value)){colorOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=colorOnFrame;return;}else if(isAffineMatrixFlat(value)){transformationMatrixOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=transformationMatrixOnFrame;return;}else if(Array.isArray(value)){arrayOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=arrayOnFrame;return;}else if(typeof value==='string'){prefNumberSuffOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=prefNumberSuffOnFrame;return;}else if(typeof value==='object'&&value!==null){objectOnStart(animation,value,timestamp,previousAnimation);animation.onFrame=objectOnFrame;return;}baseOnStart(animation,value,timestamp,previousAnimation);};})" }, getReduceMotionFromConfig, recognizePrefixSuffix, Colors.isColor, Colors.toLinearSpace, Colors.convertToRGBA, Colors.clampRGBA, Colors.rgbaArrayToRGBAColor, Colors.toGammaSpace, _mod1845.decomposeMatrixIntoMatricesAndAngles, applyProgressToMatrix, applyProgressToNumber, _mod1845.getRotationMatrix, _mod1845.multiplyMatrices, _mod1845.flatten, _mod1845.isAffineMatrixFlat];
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
let c14;
[tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32] = items10;
function decorateAnimation(isHigherOrder) {
  ({ onStart: c0, onFrame: c1 } = isHigherOrder);
  if (isHigherOrder.isHigherOrder) {
    isHigherOrder.onStart = (reduceMotion, arg1, arg2, arg3) => {
      if (undefined === reduceMotion.reduceMotion) {
        reduceMotion.reduceMotion = c0();
      }
      return c0(reduceMotion, arg1, arg2, arg3);
    };
  } else {
    let tmp = globalThis;
    let _Object = Object;
    const merged = Object.assign({}, isHigherOrder);
    delete tmp2["callback"];
    function prefNumberSuffOnFrame(strippedCurrent, arg1) {
      let __prefix;
      strippedCurrent.current = strippedCurrent.strippedCurrent;
      ({ current: strippedCurrent.strippedCurrent, __prefix } = strippedCurrent);
      const tmp = c1(strippedCurrent, arg1);
      if (__prefix == null) {
        __prefix = "";
      }
      let str = strippedCurrent.__suffix;
      const sum = __prefix + strippedCurrent.current;
      if (str == null) {
        str = "";
      }
      strippedCurrent.current = sum + str;
      return tmp;
    }
    let closure_4 = ["R", "G", "B", "A"];
    function colorOnFrame(items, arg1) {
      let closure_0 = items;
      let closure_1 = arg1;
      items = [];
      let closure_3 = true;
      items.current = items.nonscaledCurrent;
      const item = closure_4.forEach((item) => {
        obj = closure_0[item];
        const tmp2 = closure_3 && obj.onFrame(closure_0[item], closure_1);
        closure_3 = tmp2;
        items.push(closure_0[item].current);
      });
      let tmp2 = colorOnFrame(items);
      items.nonscaledCurrent = items;
      items.current = transformationMatrixOnFrame(arrayOnFrame(items));
      return closure_3;
    }
    function transformationMatrixOnFrame(arg0, arg1) {
      let tmp3;
      let tmp4;
      let tmp5;
      let closure_0 = arg0;
      const first = arg0[0];
      let closure_1 = arg0[0].current / 100;
      const items = [];
      const items1 = ["translationMatrix", "scaleMatrix", "skewMatrix"];
      const onFrameResult = first.onFrame(arg0[0], arg1);
      const item = items1.forEach((item, index) => items.push(closure_2_9(closure_1, closure_0.startMatrices[item], closure_0.stopMatrices[item])));
      const items2 = [];
      const items3 = ["x", "y", "z"];
      [tmp3, tmp4, tmp5] = items;
      const item1 = items3.forEach((item, index) => {
        items2.push(closure_2_11(closure_2_10(closure_1, closure_0.startMatrices["r" + item], closure_0.stopMatrices["r" + item]), item));
      });
      arg0.current = closure_13(closure_12(closure_12(tmp4, closure_12(tmp5, closure_12(items2[0], closure_12(items2[1], items2[2])))), tmp3));
      return onFrameResult;
    }
    function arrayOnFrame(items, arg1) {
      let closure_1 = arg1;
      let closure_2 = true;
      const current = items.current;
      const item = current.forEach((item, index) => {
        obj = items[index];
        const tmp2 = closure_2 && obj.onFrame(items[index], closure_1);
        closure_2 = tmp2;
        items.current[index] = items[index].current;
      });
      return closure_2;
    }
    function objectOnFrame(toValue, arg1) {
      const current = {};
      let flag = true;
      let flag2 = true;
      const keys = Object.keys();
      if (keys !== undefined) {
        flag2 = flag;
        while (keys[tmp] !== undefined) {
          let obj2 = toValue[tmp4];
          let tmp5 = flag && obj2.onFrame(toValue[tmp4], arg1);
          current[tmp4] = toValue[tmp4].current;
          flag = tmp5;
          continue;
        }
      }
      toValue.current = current;
      return flag2;
    }
    isHigherOrder.onStart = (reduceMotion, current, arg2, current2) => {
      let strippedValue;
      if (undefined === reduceMotion.reduceMotion) {
        let tmp2 = c0;
        reduceMotion.reduceMotion = c0();
      }
      if (reduceMotion.reduceMotion) {
        if (undefined !== reduceMotion.toValue) {
          reduceMotion.current = reduceMotion.toValue;
        } else {
          reduceMotion(reduceMotion, current, arg2, current2);
        }
        reduceMotion.startTime = 0;
        reduceMotion.onFrame = () => true;
      } else {
        let tmp3 = merged;
        if (merged(current)) {
          let closure_1 = arg2;
          const items = [];
          if (tmp3(current)) {
            const tmp54 = closure_4;
            closure_4 = prefNumberSuffOnFrame(closure_4(reduceMotion.current));
            let closure_3 = prefNumberSuffOnFrame(closure_4(current));
            const tmp53 = prefNumberSuffOnFrame;
            if (reduceMotion.toValue) {
              let closure_5 = tmp53(tmp54(reduceMotion.toValue));
            }
          }
          const item = closure_4.forEach((item, index) => {
            closure_0[item] = Object.assign({}, current2);
            closure_0[item].current = closure_4[index];
            let tmp3;
            const tmp2 = closure_0[item];
            if (closure_5) {
              tmp3 = closure_5[index];
            }
            tmp2.toValue = tmp3;
            let tmp8;
            const onStart = closure_0[item].onStart;
            const tmp5 = closure_0[item];
            const tmp6 = closure_3[index];
            const tmp7 = closure_1;
            if (current2) {
              tmp8 = current2[item];
            }
            onStart(tmp5, tmp6, tmp7, tmp8);
            items.push(closure_0[item].current);
          });
          reduceMotion.unroundedCurrent = items;
          colorOnFrame(items);
          reduceMotion.current = transformationMatrixOnFrame(arrayOnFrame(items));
          reduceMotion.onFrame = colorOnFrame;
        } else {
          let tmp4 = closure_1_14;
          if (closure_1_14(current)) {
            const toValue = reduceMotion.toValue;
            reduceMotion.startMatrices = objectOnFrame(current);
            reduceMotion.stopMatrices = objectOnFrame(toValue);
            const _Object = Object;
            reduceMotion[0] = Object.assign({}, current2);
            reduceMotion[0].current = 0;
            reduceMotion[0].toValue = 100;
            const first = reduceMotion[0];
            const first1 = reduceMotion[0];
            let first2;
            let onStart = first.onStart;
            if (current2) {
              first2 = current2[0];
            }
            onStart(first1, 0, arg2, first2);
            reduceMotion.current = current;
            reduceMotion.onFrame = transformationMatrixOnFrame;
          } else {
            let tmp5 = globalThis;
            const _Array = Array;
            if (Array.isArray(current)) {
              closure_1 = arg2;
              const item1 = current.forEach((current, index) => {
                reduceMotion[index] = Object.assign({}, merged);
                reduceMotion[index].current = current;
                reduceMotion[index].toValue = reduceMotion.toValue[index];
                let tmp4;
                const onStart = reduceMotion[index].onStart;
                const tmp2 = reduceMotion[index];
                const tmp3 = closure_1;
                if (current2) {
                  tmp4 = current2[index];
                }
                onStart(tmp2, current, tmp3, tmp4);
              });
              const items1 = [];
              HermesBuiltin.arraySpread(items1, current, 0);
              reduceMotion.current = items1;
              reduceMotion.onFrame = arrayOnFrame;
            } else if (typeof current === "string") {
              ({ strippedValue, prefix: reduceMotion.__prefix, suffix: reduceMotion.__suffix } = c1(current));
              reduceMotion.strippedCurrent = strippedValue;
              reduceMotion.current = strippedValue;
              reduceMotion.startValue = strippedValue;
              c1(current);
              reduceMotion.toValue = c1(reduceMotion.toValue).strippedValue;
              if (current2) {
                if (current2 !== reduceMotion) {
                  ({ strippedValue: current2.current, prefix: current2.__prefix, suffix: current2.__suffix } = c1(current2.current));
                  c1(current2.current);
                }
              }
              reduceMotion(reduceMotion, strippedValue, arg2, current2);
              let str = reduceMotion.__prefix;
              if (str == null) {
                str = "";
              }
              let str2 = reduceMotion.__suffix;
              const sum = str + reduceMotion.current;
              if (str2 == null) {
                str2 = "";
              }
              reduceMotion.current = sum + str2;
              const tmp33 = current2 && current2 !== reduceMotion;
              if (tmp33) {
                let str3 = current2.__prefix;
                if (str3 == null) {
                  str3 = "";
                }
                let str4 = current2.__suffix;
                const sum1 = str3 + current2.current;
                if (str4 == null) {
                  str4 = "";
                }
                current2.current = sum1 + str4;
              }
              reduceMotion.onFrame = prefNumberSuffOnFrame;
            } else {
              if (typeof current === "object") {
                if (null !== current) {
                  for (const key10027 in current) {
                    let _Object2 = Object;
                    reduceMotion[key10027] = Object.assign({}, current2);
                    reduceMotion[key10027].onStart = reduceMotion.onStart;
                    reduceMotion[key10027].current = current[key10027];
                    reduceMotion[key10027].toValue = reduceMotion.toValue[key10027];
                    let tmp71 = reduceMotion[key10027];
                    let tmp72 = reduceMotion[key10027];
                    let tmp73 = current[key10027];
                    let tmp14;
                    let onStart2 = tmp71.onStart;
                    if (current2) {
                      tmp14 = current2[key10027];
                    }
                    let onStart2Result = onStart2(tmp72, tmp73, arg2, tmp14);
                    continue;
                  }
                  reduceMotion.current = current;
                  reduceMotion.onFrame = objectOnFrame;
                }
              }
              let tmp6 = reduceMotion;
              let tmp7 = reduceMotion;
              let tmp8 = current;
              reduceMotion(reduceMotion, current, arg2, current2);
            }
          }
        }
      }
      return tmp12;
    };
  }
}
const items11 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32];
decorateAnimation.__closure = items11;
decorateAnimation.__workletHash = 12529430525701;
decorateAnimation.__initData = tmp17;

export { IN_STYLE_UPDATER };
export { isValidLayoutAnimationProp };
export function initialUpdaterRun(updater) {
  obj.current = true;
  try {
    obj.current = false;
    return updater();
  } catch (tmp3) {
    obj.current = false;
    throw tmp3;
  }
}
export { recognizePrefixSuffix };
export { getReduceMotionFromConfig };
export { getReduceMotionForAnimation };
export { decorateAnimation };
