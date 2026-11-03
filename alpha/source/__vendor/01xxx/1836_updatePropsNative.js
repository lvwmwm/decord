// Module ID: 1836
// Function ID: 1837
// Name: updatePropsNative
// Dependencies: [1793, 1665, 1837, 1705]
// Exports: default

// Module 1836 (updatePropsNative)
import _mod1665 from "module_1665" /* 1665 */;
import JSPropsUpdaterNativeDefault from "JSPropsUpdaterNative" /* 1837 */;
import DynamicFlags from "module_1793" /* 1793 */;
import bundleModeNative_mod from "module_1705" /* 1705 */;

let bundleModeNative;
let tmp10;
let tmp11;
let tmp12;
let tmp13;
let tmp14;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const items = [{ code: "(function pnpm_updatePropsNativeTs1(viewDescriptors,updates,isAnimatedProps){let[processColorsInProps,processStylePropInPlace,processTransformOrigin,processTransform,stylePropsBuilder]=this.__closure;if(isAnimatedProps){processColorsInProps(updates);if('transformOrigin'in updates){processStylePropInPlace(updates,'transformOrigin',processTransformOrigin);}if('transform'in updates){processStylePropInPlace(updates,'transform',processTransform);}}global.UpdatePropsManager.update(viewDescriptors,isAnimatedProps?updates:stylePropsBuilder.build(updates));})" }, , , , , ];
const staticFeatureFlag = DynamicFlags.getStaticFeatureFlag("USE_ANIMATION_BACKEND");
items[1] = _mod1665.processColorsInProps;
items[2] = _mod1665.processStylePropInPlace;
items[3] = _mod1665.processTransformOrigin;
items[4] = _mod1665.processTransform;
items[5] = _mod1665.stylePropsBuilder;
let c3;
let c4;
[tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
function pnpm_updatePropsNativeTs1(arg0, arg1, arg2) {
  const tmp = arg2;
  if (tmp) {
    _undefined(arg1);
    if ("transformOrigin" in arg1) {
      _undefined2(arg1, "transformOrigin", c2);
    }
    if ("transform" in arg1) {
      _undefined2(arg1, "transform", c3);
    }
  }
  const UpdatePropsManager = global.UpdatePropsManager;
  let buildResult = arg1;
  const update = UpdatePropsManager.update;
  if (!arg2) {
    buildResult = _undefined3.build(arg1);
  }
  update(arg0, buildResult);
}
const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8];
pnpm_updatePropsNativeTs1.__closure = items1;
pnpm_updatePropsNativeTs1.__workletHash = 8523014696619;
pnpm_updatePropsNativeTs1.__initData = tmp3;
const items2 = [
  { code: "(function createUpdatePropsManager_Pnpm_updatePropsNativeTs2(){let[scheduleOnRN,updateJSProps,USE_ANIMATION_BACKEND]=this.__closure;const nativeOperations=[];let jsOperations=[];let flushPending=false;const processViewUpdates=function(tag,updates){return Object.entries(updates).reduce(function(acc,[propName,value]){var _global$_tagToJSPropN;if((_global$_tagToJSPropN=global._tagToJSPropNamesMapping[tag])!==null&&_global$_tagToJSPropN!==void 0&&_global$_tagToJSPropN[propName]){acc.jsPropUpdates??={};acc.jsPropUpdates[propName]=value;}else{acc.nativePropUpdates??={};acc.nativePropUpdates[propName]=value;}return acc;},{});};return{update:function(viewDescriptors,updates){var _this=this;viewDescriptors.value.forEach(function({tag:tag,shadowNodeWrapper:shadowNodeWrapper}){const viewTag=tag;const{nativePropUpdates:nativePropUpdates,jsPropUpdates:jsPropUpdates}=processViewUpdates(viewTag,updates);if(nativePropUpdates){nativeOperations.push({shadowNodeWrapper:shadowNodeWrapper,updates:nativePropUpdates});}if(jsPropUpdates){jsOperations.push({tag:viewTag,updates:jsPropUpdates});}if(!flushPending&&(nativePropUpdates||jsPropUpdates)){global.__requestMapperRunFinalizer(_this.flush);flushPending=true;}});},flush:function(){if(nativeOperations.length){global._updateProps(nativeOperations);nativeOperations.length=0;}if(jsOperations.length){scheduleOnRN(updateJSProps,jsOperations);jsOperations=[];}flushPending=false;if(!USE_ANIMATION_BACKEND){global._maybeFlushUIUpdatesQueue();}}};})" },
  bundleModeNative.scheduleOnRN,
  function updateJSProps(arg0) {
    const obj = JSPropsUpdaterNativeDefault;
    obj.updateProps(arg0);
  },
  staticFeatureFlag
];
let c1;
let c2;
[tmp9, tmp10, tmp11, tmp12] = items2;
function createUpdatePropsManager() {
  let closure_0 = [];
  let length = [];
  c2 = false;
  let obj = {
    update(value, arg1) {
      const self = this;
      closure_0 = arg1;
      value = value.value;
      const item = value.forEach((tag) => {
        let jsPropUpdates;
        let nativePropUpdates;
        tag = tag.tag;
        const shadowNodeWrapper = tag.shadowNodeWrapper;
        const entries = Object.entries(closure_0);
        const reduced = entries.reduce((jsPropUpdates, item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          let tmp4;
          if (closure_2_0._tagToJSPropNamesMapping[tag] != null) {
            tmp4 = tmp3[tmp];
          }
          if (tmp4) {
            if (jsPropUpdates.jsPropUpdates == null) {
              jsPropUpdates.jsPropUpdates = {};
            }
            jsPropUpdates.jsPropUpdates[tmp] = tmp2;
          } else {
            if (jsPropUpdates.nativePropUpdates == null) {
              jsPropUpdates.nativePropUpdates = {};
            }
            jsPropUpdates.nativePropUpdates[tmp] = tmp2;
          }
          return jsPropUpdates;
        }, {});
        ({ nativePropUpdates, jsPropUpdates } = reduced);
        if (nativePropUpdates) {
          const tmp2 = closure_0;
          const obj = { shadowNodeWrapper, updates: nativePropUpdates };
          closure_0.push(obj);
        }
        if (jsPropUpdates) {
          let tmp4 = length;
          const obj2 = { tag, updates: jsPropUpdates };
          length.push(obj2);
        }
        let tmp6 = c2;
        if (!tmp6) {
          tmp6 = !nativePropUpdates && !jsPropUpdates;
        }
        if (!tmp6) {
          const result = global.__requestMapperRunFinalizer(self.flush);
          c2 = true;
        }
      });
    },
    flush() {
      if (closure_0.length) {
        global._updateProps(closure_0);
        closure_0.length = 0;
      }
      if (length.length) {
        c0(c1, length);
        length = [];
      }
      c2 = false;
      const tmp8 = c2;
      if (!tmp8) {
        const result = global._maybeFlushUIUpdatesQueue();
      }
    }
  };
  return obj;
}
const items3 = [tmp10, tmp11, tmp12];
createUpdatePropsManager.__closure = items3;
createUpdatePropsManager.__workletHash = 15274879117504;
createUpdatePropsManager.__initData = tmp9;
bundleModeNative = bundleModeNative_mod;
const items4 = [{ code: "(function pnpm_updatePropsNativeTs3(){let[createUpdatePropsManager]=this.__closure;global.UpdatePropsManager=createUpdatePropsManager();})" }, createUpdatePropsManager];
let c0;
[tmp13, tmp14] = items4;
function pnpm_updatePropsNativeTs3() {
  global.UpdatePropsManager = _undefined();
}
const items5 = [tmp14];
pnpm_updatePropsNativeTs3.__closure = items5;
pnpm_updatePropsNativeTs3.__workletHash = 13175310151327;
pnpm_updatePropsNativeTs3.__initData = tmp13;
bundleModeNative.scheduleOnUI(pnpm_updatePropsNativeTs3);

export default pnpm_updatePropsNativeTs1;
