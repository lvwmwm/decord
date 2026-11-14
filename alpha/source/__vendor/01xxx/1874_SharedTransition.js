// Module ID: 1874
// Function ID: 1875
// Name: SharedTransition
// Dependencies: [32, 41, 42, 93, 95, 98, 1668, 1875]

// Module 1874 (SharedTransition)
import _mod1875 from "module_1875" /* 1875 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_7 = { code: "(function pnpm_SharedTransitionTs1(valuesUntyped){let[delayFunction,delay,animation,config,logger,callback]=this.__closure;const values=valuesUntyped;const animationFactory=function(value){return delayFunction(delay,animation(value,config));};const initialValues={};const animations={};for(let key in values.source){initialValues[key]=values.source[key];const target=values.target[key];if(Array.isArray(target)){if(key==='transform'){animations[key]=target.map(function(item){key=Object.keys(item)[0];return{[key]:animationFactory(item[key])};});}else if(key==='boxShadow'){animations[key]=target.map(function(item){const boxShadow={};for(const shadowKey of Object.keys(item)){boxShadow[shadowKey]=animationFactory(item[shadowKey]);}return boxShadow;});}else if(key==='transformOrigin'){animations[key]=target.map(animationFactory);}else{logger.error(\"Unexpected array in SharedTransition: \"+key);}}else{animations[key]=animationFactory(values.target[key]);}}return{initialValues:initialValues,animations:animations,callback:callback};})" };
class SharedTransition {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    let tmp = _classCallCheck(this, SharedTransition);
    let items1 = [...items];
    let tmp2 = _getPrototypeOf;
    let obj = _getPrototypeOf(SharedTransition);
    let tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      let tmp5 = globalThis;
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.build = () => {
      let tmp10;
      let tmp11;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let obj = delayFunction;
      delayFunction = delayFunction.getDelayFunction();
      if (!delayFunction.durationV) {
        obj.durationV = 500;
      }
      let tmp2 = closure_2_2(obj.getAnimationAndConfig(), 2);
      [tmp3, tmp4] = tmp2;
      const callbackV = obj.callbackV;
      const items = [closure_2_7, delayFunction, obj.getDelay(), tmp3, tmp4, SharedTransition(closure_2_1[6]).logger, callbackV];
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
      function pnpm_SharedTransitionTs1(source) {
        function animationFactory(c1) {
          return animationFactory(closure_1_1, _undefined(c1, closure_1_3));
        }
        let obj = {};
        const obj2 = {};
        for (const key10012 in source.source) {
          let first = key10012;
          obj[key10012] = source.source[first];
          let arr = source.target[first];
          let _Array = Array;
          let tmp12 = first;
          if (Array.isArray(arr)) {
            if ("transform" === tmp12) {
              obj2[tmp12] = arr.map((item) => {
                first = Object.keys(item)[0];
                const obj = { [first]: first(closure_1_1, closure_1_2(item[first], closure_1_3)) };
                return obj;
              });
              continue;
            } else {
              if ("boxShadow" === tmp12) {
                obj2[tmp12] = arr.map((item) => {
                  const obj = {};
                  const keys = Object.keys(item);
                  for (const item10010 of keys) {
                    obj[item10010] = animationFactory(item[item10010]);
                    continue;
                  }
                  return obj;
                });
                continue;
              } else {
                if ("transformOrigin" === tmp12) {
                  obj2[tmp12] = arr.map(animationFactory);
                  continue;
                } else {
                  let _HermesInternal = HermesInternal;
                  let errorResult = _undefined2.error("Unexpected array in SharedTransition: " + first);
                  continue;
                }
                continue;
              }
              continue;
            }
            continue;
          } else {
            let tmp2 = animationFactory;
            obj2[tmp12] = animationFactory(c1, _undefined(source.target[first], c3));
            continue;
          }
          continue;
        }
        return { initialValues: obj, animations: obj2, callback };
      }
      const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
      pnpm_SharedTransitionTs1.__closure = items1;
      pnpm_SharedTransitionTs1.__workletHash = 2064494406202;
      pnpm_SharedTransitionTs1.__initData = tmp5;
      return pnpm_SharedTransitionTs1;
    };
    return tmp3Result;
  }
}
_inherits(SharedTransition, _mod1875.ComplexAnimationBuilder);
const entry = {
  key: "createInstance",
  value: function createInstance() {
    const tmp = SharedTransition();
    return tmp;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(SharedTransition, null, items);
importDefaultResultResult.presetName = "SharedTransition";
const SharedTransition_export = importDefaultResultResult;

export { SharedTransition_export as SharedTransition };
