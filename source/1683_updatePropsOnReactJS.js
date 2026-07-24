// Module ID: 1683
// Function ID: 18635
// Name: updatePropsOnReactJS
// Dependencies: [1585, 1592, 1625, 1684, 1685, 1589, 1593]
// Exports: updatePropsJestWrapper

// Module 1683 (updatePropsOnReactJS)
import isJest from "isJest";
import isJest from "isJest";
import isJest from "isJest";

function updatePropsOnReactJS(arg0, arg1) {
  const ComponentRegistry = require(1685) /* map */.ComponentRegistry;
  const component = ComponentRegistry.getComponent(arg0);
  if (component) {
    const result = component._updateReanimatedProps(arg1);
  }
}
if (isJest.shouldBeUseWeb()) {
  /* worklet (recovered source) */ function pnpm_updatePropsTs1(viewDescriptors,updates,isAnimatedProps){const{_updatePropsJS}=this.__closure;var _viewDescriptors$valu;(_viewDescriptors$valu=viewDescriptors.value)===null||_viewDescriptors$valu===void 0||_viewDescriptors$valu.forEach(function(viewDescriptor){const component=viewDescriptor.tag;_updatePropsJS(updates,component,isAnimatedProps);});}
  let obj = { _updatePropsJS: require("_makeShareableClone")._updatePropsJS };
  pnpm_updatePropsTs1.__closure = obj;
  pnpm_updatePropsTs1.__workletHash = 17381979125683;
  pnpm_updatePropsTs1.__initData = { code: "function pnpm_updatePropsTs1(viewDescriptors,updates,isAnimatedProps){const{_updatePropsJS}=this.__closure;var _viewDescriptors$valu;(_viewDescriptors$valu=viewDescriptors.value)===null||_viewDescriptors$valu===void 0||_viewDescriptors$valu.forEach(function(viewDescriptor){const component=viewDescriptor.tag;_updatePropsJS(updates,component,isAnimatedProps);});}" };
  let pnpm_updatePropsTs2 = pnpm_updatePropsTs1;
  pnpm_updatePropsTs2 = pnpm_updatePropsTs1;
} else {
  pnpm_updatePropsTs2 = /* worklet (recovered source) */ function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);};
  obj = { processColorsInProps: require("call").processColorsInProps, processTransformOrigin: require("validateTransformOrigin").processTransformOrigin };
  pnpm_updatePropsTs2.__closure = obj;
  pnpm_updatePropsTs2.__workletHash = 9641647469033;
  pnpm_updatePropsTs2.__initData = { code: "function pnpm_updatePropsTs2(viewDescriptors,updates){const{processColorsInProps,processTransformOrigin}=this.__closure;viewDescriptors.value.forEach(function(viewDescriptor){var _global$lastUpdateByT;const prevState=(_global$lastUpdateByT=global.lastUpdateByTag[viewDescriptor.tag])!==null&&_global$lastUpdateByT!==void 0?_global$lastUpdateByT:{};global.lastUpdateByTag[viewDescriptor.tag]={...prevState,...updates};global.lastUpdateFrameTimeByTag[viewDescriptor.tag]=global.__frameTimestamp;});processColorsInProps(updates);if('transformOrigin'in updates){updates.transformOrigin=processTransformOrigin(updates.transformOrigin);}global.UpdatePropsManager.update(viewDescriptors,updates);}" };
}
let closure_4 = { code: "function checkUpdate_Pnpm_updatePropsTs4(tag){const checkUpdate_Pnpm_updatePropsTs4=this._recur;const{runOnJS,updatePropsOnReactJS,scheduledFrameIds}=this.__closure;const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate_Pnpm_updatePropsTs4(tag);});}" };
let closure_5 = { code: "function pnpm_updatePropsTs5(){const{scheduledFrameIds,tag,checkUpdate}=this.__closure;scheduledFrameIds[tag]=undefined;checkUpdate(tag);}" };
if (isJest.isFabric()) {
  /* worklet (recovered source) */ function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}
  const obj1 = { runOnJS: require("runWorkletOnJS").runOnJS, updatePropsOnReactJS };
  pnpm_updatePropsTs3.__closure = obj1;
  pnpm_updatePropsTs3.__workletHash = 7650186665575;
  pnpm_updatePropsTs3.__initData = { code: "function pnpm_updatePropsTs3(){const{runOnJS,updatePropsOnReactJS}=this.__closure;const operations=[];const scheduledFrameIds={};function checkUpdate(tag){'worklet';const currentFrameTime=global.__frameTimestamp;const lastUpdateFrameTime=global.lastUpdateFrameTimeByTag[tag];if(!currentFrameTime||!lastUpdateFrameTime){return;}if(currentFrameTime-lastUpdateFrameTime>=20){runOnJS(updatePropsOnReactJS)(tag,global.lastUpdateByTag[tag]);global.lastUpdateByTag[tag]=undefined;return;}if(scheduledFrameIds[tag]){return;}scheduledFrameIds[tag]=requestAnimationFrame(function(){'worklet';scheduledFrameIds[tag]=undefined;checkUpdate(tag);});}return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){const tag=viewDescriptor.tag;operations.push({shadowNodeWrapper:viewDescriptor.shadowNodeWrapper,updates:updates,tag:tag});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsFabric(operations);operations.forEach(function({tag:tag}){checkUpdate(tag);});operations.length=0;}};}" };
  let pnpm_updatePropsTs6 = pnpm_updatePropsTs3;
} else {
  pnpm_updatePropsTs6 = /* worklet (recovered source) */ function pnpm_updatePropsTs6(){const operations=[];return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){operations.push({tag:viewDescriptor.tag,name:viewDescriptor.name||'RCTView',updates:updates});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsPaper(operations);operations.length=0;}};};
  pnpm_updatePropsTs6.__closure = {};
  pnpm_updatePropsTs6.__workletHash = 8150032191515;
  pnpm_updatePropsTs6.__initData = { code: "function pnpm_updatePropsTs6(){const operations=[];return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function(viewDescriptor){operations.push({tag:viewDescriptor.tag,name:viewDescriptor.name||'RCTView',updates:updates});if(operations.length===1){queueMicrotask(_this.flush);}});},flush:function(){global._updatePropsPaper(operations);operations.length=0;}};}" };
}
if (isJest.shouldBeUseWeb()) {
  function maybeThrowError() {
    if (!obj.isJest()) {
      const ReanimatedError = require(1593) /* processStack */.ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError("`UpdatePropsManager` is not available on non-native platform.");
      throw reanimatedError;
    }
    obj = require(1585) /* isJest */;
  }
  const _Proxy = Proxy;
  let obj2 = {
    get: maybeThrowError,
    set() {
        maybeThrowError();
        return false;
      }
  };
  const proxy = new Proxy({}, obj2);
  global.UpdatePropsManager = proxy;
} else {
  const _module3 = require("runWorkletOnJS");
  /* worklet (recovered source) */ function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}
  const obj3 = { createUpdatePropsManager: pnpm_updatePropsTs6 };
  pnpm_updatePropsTs7.__closure = obj3;
  pnpm_updatePropsTs7.__workletHash = 4015188324291;
  pnpm_updatePropsTs7.__initData = { code: "function pnpm_updatePropsTs7(){const{createUpdatePropsManager}=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();}" };
  _module3.runOnUIImmediately(pnpm_updatePropsTs7)();
}

export default pnpm_updatePropsTs2;
export const updatePropsJestWrapper = function updatePropsJestWrapper(closure_0, transformOrigin, current, c4) {
  closure_0 = transformOrigin;
  const item = c4.forEach((arg0) => {
    arg0(closure_0);
  });
  current.current.value = Object.assign({}, current.current.value, transformOrigin);
  pnpm_updatePropsTs2(closure_0, transformOrigin);
};
