// Module ID: 1612
// Function ID: 17886
// Name: isPlainJSObject
// Dependencies: [57, 1585, 1613, 1593, 1607, 1598, 1586]

// Module 1612 (isPlainJSObject)
import _slicedToArray from "_slicedToArray";
import isJest from "isJest";

const require = arg1;
function isPlainJSObject(__workletContextObjectFactory) {
  return Object.getPrototypeOf(__workletContextObjectFactory) === Object.prototype;
}
function freezeObjectInDev(arg0) {

}
isJest = isJest.shouldBeUseWeb();
let closure_5 = { code: "function isHostObject_Pnpm_shareablesTs1(value){const{MAGIC_KEY}=this.__closure;return MAGIC_KEY in value;}" };
let closure_6 = (() => {
  function isHostObject(arg0) {
    return "REANIMATED_MAGIC_KEY" in arg0;
  }
  isHostObject.__closure = { MAGIC_KEY: "REANIMATED_MAGIC_KEY" };
  isHostObject.__workletHash = 10372729533958;
  isHostObject.__initData = closure_5;
  return isHostObject;
})();
/* worklet (recovered source) */ function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError("Trying to access property `"+String(prop)+"` of an object which cannot be sent to the UI runtime.");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}
pnpm_shareablesTs2.__closure = {};
pnpm_shareablesTs2.__workletHash = 15880119471501;
pnpm_shareablesTs2.__initData = { code: "function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError(\"Trying to access property `\"+String(prop)+\"` of an object which cannot be sent to the UI runtime.\");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}" };
let closure_8 = { __init: pnpm_shareablesTs2 };
let closure_9 = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", "DataView"];
let tmp3 = isJest ? (function makeShareableCloneRecursiveWeb(arg0) {
  return arg0;
}) : (function makeShareableCloneRecursiveNative(__workletContextObjectFactory) {
  let tmp49;
  let tmp51;
  let tmp80;
  let tmp82;
  const tmp2 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  let num = 0;
  if (arguments.length > 2) {
    num = 0;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if (num >= 30) {
    if (30 === num) {
      let c7 = __workletContextObjectFactory;
    } else if (__workletContextObjectFactory === c7) {
      let ReanimatedError = require(1593) /* processStack */.ReanimatedError;
      let prototype = ReanimatedError.prototype;
      let reanimatedError = new ReanimatedError("Trying to convert a cyclic object to a shareable. This is not supported.");
      throw reanimatedError;
    }
  } else {
    c7 = undefined;
  }
  if ("object" === typeof __workletContextObjectFactory) {
    if (null !== __workletContextObjectFactory) {
      let shareableClone1 = require;
      shareableClone1 = dependencyMap;
      const shareableMappingCache12 = require(1613) /* weakMap */.shareableMappingCache;
      let value = shareableMappingCache12.get(__workletContextObjectFactory);
      if (value === require(1613) /* weakMap */.shareableMappingFlag) {
        value = __workletContextObjectFactory;
      }
      if (undefined !== value) {
        return value;
      } else {
        shareableClone1 = globalThis;
        const _Array = Array;
        if (Array.isArray(__workletContextObjectFactory)) {
          let shareableClone = (function cloneArray(arr, arg1, arg2) {
            let closure_0 = arg1;
            let closure_1 = arg2;
            const mapped = arr.map((arg0) => outer2_10(arg0, closure_0, closure_1 + 1));
            const WorkletsModule = outer1_1(outer1_2[5]).WorkletsModule;
            const shareableClone = WorkletsModule.makeShareableClone(mapped, arg1, arr);
            const shareableMappingCache = outer1_1(outer1_2[2]).shareableMappingCache;
            const result = shareableMappingCache.set(arr, shareableClone);
            const shareableMappingCache2 = outer1_1(outer1_2[2]).shareableMappingCache;
            const result1 = shareableMappingCache2.set(shareableClone);
            outer1_20(undefined);
            return shareableClone;
          })(__workletContextObjectFactory, tmp2, num);
        } else {
          if (tmp11) {
            let obj = require(1607) /* isWorkletFunction */;
            if (!obj.isWorkletFunction(__workletContextObjectFactory)) {
              let WorkletsModule = require(1598) /* WorkletsModule */.WorkletsModule;
              shareableClone = WorkletsModule.makeShareableClone(__workletContextObjectFactory, tmp2, __workletContextObjectFactory);
              let shareableMappingCache = require(1613) /* weakMap */.shareableMappingCache;
              let result = shareableMappingCache.set(__workletContextObjectFactory, shareableClone);
              let shareableMappingCache2 = require(1613) /* weakMap */.shareableMappingCache;
              let result1 = shareableMappingCache2.set(shareableClone);
              freezeObjectInDev(undefined);
            }
          }
          if (callback2(__workletContextObjectFactory)) {
            shareableClone1 = dependencyMap;
            const WorkletsModule5 = require(1598) /* WorkletsModule */.WorkletsModule;
            shareableClone1 = WorkletsModule5.makeShareableClone(__workletContextObjectFactory, tmp2, __workletContextObjectFactory);
            const shareableMappingCache10 = require(1613) /* weakMap */.shareableMappingCache;
            shareableClone1 = shareableMappingCache10.set(__workletContextObjectFactory, shareableClone1);
            const shareableMappingCache11 = require(1613) /* weakMap */.shareableMappingCache;
            shareableClone1 = shareableMappingCache11.set(shareableClone1);
            let tmp31 = shareableClone1;
          } else {
            if (isPlainJSObject(__workletContextObjectFactory)) {
              if (__workletContextObjectFactory.__workletContextObjectFactory) {
                tmp31 = (function cloneContextObject(__workletContextObjectFactory) {
                  __workletContextObjectFactory = __workletContextObjectFactory.__workletContextObjectFactory;
                  /* worklet (recovered source) */ function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}
                  pnpm_shareablesTs3.__closure = { workletContextObjectFactory: __workletContextObjectFactory };
                  pnpm_shareablesTs3.__workletHash = 16264240301234;
                  pnpm_shareablesTs3.__initData = outer1_11;
                  const tmp = outer1_10({ __init: pnpm_shareablesTs3 });
                  const shareableMappingCache = outer1_1(outer1_2[2]).shareableMappingCache;
                  const result = shareableMappingCache.set(__workletContextObjectFactory, tmp);
                  return tmp;
                })(__workletContextObjectFactory);
              }
            }
            if (isPlainJSObject(__workletContextObjectFactory)) {
              if (obj2.isWorkletFunction(__workletContextObjectFactory)) {
                if (__workletContextObjectFactory.__stackDetails) {
                  delete tmp.__stackDetails;
                }
                obj = { __initData: tmp3(__workletContextObjectFactory.__initData, true, num + 1) };
                const _Object2 = Object;
                const entries = Object.entries(__workletContextObjectFactory);
                const tmp75 = entries[Symbol.iterator]();
                while (tmp75 !== undefined) {
                  let tmp78 = callback;
                  let tmp79 = callback(tmp76, 2);
                  [tmp80, tmp82] = tmp79;
                  let tmp83 = "__initData" === tmp80;
                  let tmp84 = tmp83;
                  let tmp81 = tmp80;
                  if (tmp83) {
                    let tmp85 = obj;
                    tmp84 = undefined !== tmp70.__initData;
                  }
                  if (!tmp84) {
                    let tmp86 = obj;
                    let tmp87 = tmp80;
                    let tmp88 = tmp3;
                    let tmp89 = tmp82;
                    let tmp90 = tmp2;
                    let tmp91 = num;
                    tmp70[tmp81] = tmp3(tmp82, tmp68, tmp69 + 1);
                  }
                  continue;
                }
                const WorkletsModule4 = require(1598) /* WorkletsModule */.WorkletsModule;
                const shareableClone2 = WorkletsModule4.makeShareableClone(obj, true, __workletContextObjectFactory);
                const shareableMappingCache8 = require(1613) /* weakMap */.shareableMappingCache;
                const result2 = shareableMappingCache8.set(__workletContextObjectFactory, shareableClone2);
                const shareableMappingCache9 = require(1613) /* weakMap */.shareableMappingCache;
                const result3 = shareableMappingCache9.set(shareableClone2);
                freezeObjectInDev(undefined);
                tmp31 = shareableClone2;
                tmp68 = tmp2;
              }
              obj2 = require(1607) /* isWorkletFunction */;
            }
            if (!isPlainJSObject(__workletContextObjectFactory)) {
              if (!tmp11) {
                const _RegExp = RegExp;
                if (__workletContextObjectFactory instanceof RegExp) {
                  tmp31 = (function cloneRegExp(source) {
                    source = source.source;
                    const flags = source.flags;
                    /* worklet (recovered source) */ function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}
                    pnpm_shareablesTs4.__closure = { pattern: source, flags };
                    pnpm_shareablesTs4.__workletHash = 17343605339188;
                    pnpm_shareablesTs4.__initData = outer1_12;
                    const tmp = outer1_10({ __init: pnpm_shareablesTs4 });
                    const shareableMappingCache = outer1_1(outer1_2[2]).shareableMappingCache;
                    const result = shareableMappingCache.set(source, tmp);
                    return tmp;
                  })(__workletContextObjectFactory);
                } else {
                  const _Error = Error;
                  if (__workletContextObjectFactory instanceof Error) {
                    tmp31 = (function cloneError(name) {
                      name = name.name;
                      const message = name.message;
                      const stack = name.stack;
                      /* worklet (recovered source) */ function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}
                      pnpm_shareablesTs5.__closure = { name, message, stack };
                      pnpm_shareablesTs5.__workletHash = 1273124072033;
                      pnpm_shareablesTs5.__initData = outer1_13;
                      const tmp = outer1_10({ __init: pnpm_shareablesTs5 });
                      const shareableMappingCache = outer1_1(outer1_2[2]).shareableMappingCache;
                      const result = shareableMappingCache.set(name, tmp);
                      return tmp;
                    })(__workletContextObjectFactory);
                  } else {
                    const _ArrayBuffer = ArrayBuffer;
                    if (__workletContextObjectFactory instanceof ArrayBuffer) {
                      const WorkletsModule2 = require(1598) /* WorkletsModule */.WorkletsModule;
                      const shareableClone3 = WorkletsModule2.makeShareableClone(__workletContextObjectFactory, tmp2, __workletContextObjectFactory);
                      const shareableMappingCache4 = require(1613) /* weakMap */.shareableMappingCache;
                      const result4 = shareableMappingCache4.set(__workletContextObjectFactory, shareableClone3);
                      const shareableMappingCache5 = require(1613) /* weakMap */.shareableMappingCache;
                      const result5 = shareableMappingCache5.set(shareableClone3);
                      tmp31 = shareableClone3;
                    } else {
                      const _ArrayBuffer2 = ArrayBuffer;
                      if (ArrayBuffer.isView(__workletContextObjectFactory)) {
                        tmp31 = (function cloneArrayBufferView(buffer) {
                          buffer = buffer.buffer;
                          const name = buffer.constructor.name;
                          /* worklet (recovered source) */ function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError("[Reanimated] Invalid array view name `"+typeName+"`.");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError("[Reanimated] Constructor for `"+typeName+"` not found.");}return new constructor(buffer);}
                          pnpm_shareablesTs6.__closure = { VALID_ARRAY_VIEWS_NAMES: outer1_9, typeName: name, buffer };
                          pnpm_shareablesTs6.__workletHash = 2440560686150;
                          pnpm_shareablesTs6.__initData = outer1_14;
                          const tmp = outer1_10({ __init: pnpm_shareablesTs6 });
                          const shareableMappingCache = outer1_1(outer1_2[2]).shareableMappingCache;
                          const result = shareableMappingCache.set(buffer, tmp);
                          return tmp;
                        })(__workletContextObjectFactory);
                      } else {
                        tmp31 = tmp3(closure_8);
                        const shareableMappingCache3 = require(1613) /* weakMap */.shareableMappingCache;
                        const result6 = shareableMappingCache3.set(__workletContextObjectFactory, tmp31);
                      }
                    }
                  }
                }
              }
            }
            obj = {};
            const _Object = Object;
            const entries1 = Object.entries(__workletContextObjectFactory);
            const tmp44 = entries1[Symbol.iterator]();
            while (tmp44 !== undefined) {
              let tmp47 = callback;
              let tmp48 = callback(tmp45, 2);
              [tmp49, tmp51] = tmp48;
              let tmp52 = "__initData" === tmp49;
              let tmp53 = tmp52;
              let tmp50 = tmp49;
              if (tmp52) {
                let tmp54 = obj;
                tmp53 = undefined !== obj.__initData;
              }
              if (!tmp53) {
                let tmp55 = obj;
                let tmp56 = tmp49;
                let tmp57 = tmp3;
                let tmp58 = tmp51;
                let tmp59 = tmp2;
                let tmp60 = num;
                obj[tmp50] = tmp3(tmp51, tmp40, tmp41 + 1);
              }
              continue;
            }
            const WorkletsModule3 = require(1598) /* WorkletsModule */.WorkletsModule;
            const shareableClone4 = WorkletsModule3.makeShareableClone(obj, tmp2, __workletContextObjectFactory);
            const shareableMappingCache6 = require(1613) /* weakMap */.shareableMappingCache;
            const result7 = shareableMappingCache6.set(__workletContextObjectFactory, shareableClone4);
            const shareableMappingCache7 = require(1613) /* weakMap */.shareableMappingCache;
            const result8 = shareableMappingCache7.set(shareableClone4);
            freezeObjectInDev(undefined);
            tmp31 = shareableClone4;
            tmp40 = tmp2;
            tmp41 = num;
          }
          shareableClone1 = tmp31;
        }
        shareableClone1 = shareableClone;
      }
    }
  }
  const WorkletsModule6 = require(1598) /* WorkletsModule */.WorkletsModule;
  return WorkletsModule6.makeShareableClone(__workletContextObjectFactory, tmp2);
});
let closure_10 = tmp3;
let closure_11 = { code: "function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}" };
let closure_12 = { code: "function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}" };
let closure_13 = { code: "function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}" };
let closure_14 = { code: "function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError(\"[Reanimated] Invalid array view name `\"+typeName+\"`.\");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError(\"[Reanimated] Constructor for `\"+typeName+\"` not found.\");}return new constructor(buffer);}" };
let closure_15 = { code: "function isRemoteFunction_Pnpm_shareablesTs7(value){return!!value.__remoteFunction;}" };
let closure_16 = (() => {
  function isRemoteFunction(__remoteFunction) {
    return __remoteFunction.__remoteFunction;
  }
  isRemoteFunction.__closure = {};
  isRemoteFunction.__workletHash = 12817663616448;
  isRemoteFunction.__initData = closure_15;
  return isRemoteFunction;
})();
let closure_17 = { code: "function makeShareableCloneOnUIRecursive_Pnpm_shareablesTs8(value){const{SHOULD_BE_USE_WEB,isHostObject,isRemoteFunction}=this.__closure;if(SHOULD_BE_USE_WEB){return value;}function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return global._makeShareableClone(value,undefined);}if(isRemoteFunction(value)){return value.__remoteFunction;}if(Array.isArray(value)){return global._makeShareableClone(value.map(cloneRecursive),undefined);}const toAdapt={};for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return global._makeShareableClone(toAdapt,value);}return global._makeShareableClone(value,undefined);}return cloneRecursive(value);}" };
let closure_18 = { code: "function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}" };

export const makeShareableCloneRecursive = tmp3;
export const makeShareableCloneOnUIRecursive = (() => {
  function makeShareableCloneOnUIRecursive(applyResult) {
    if (outer1_4) {
      return applyResult;
    } else {
      function cloneRecursive(__remoteFunction) {
        if ("object" !== typeof __remoteFunction) {
          if ("function" !== tmp) {
            return outer2_0._makeShareableClone(__remoteFunction, undefined);
          }
        }
        if (outer2_6(__remoteFunction)) {
          return outer2_0._makeShareableClone(__remoteFunction, undefined);
        } else if (outer2_16(__remoteFunction)) {
          return __remoteFunction.__remoteFunction;
        } else {
          const _Array = Array;
          if (Array.isArray(__remoteFunction)) {
            return outer2_0._makeShareableClone(__remoteFunction.map(cloneRecursive), undefined);
          } else {
            const obj = {};
            const _Object = Object;
            const entries = Object.entries(__remoteFunction);
            const tmp8 = entries[Symbol.iterator]();
            while (tmp8 !== undefined) {
              let tmp11 = outer2_3;
              let tmp12 = outer2_3(tmp9, 2);
              let tmp13 = obj;
              let tmp14 = cloneRecursive;
              obj[tmp12[0]] = cloneRecursive(tmp12[1]);
              continue;
            }
            return outer2_0._makeShareableClone(obj, __remoteFunction);
          }
        }
      }
      return cloneRecursive(applyResult);
    }
  }
  makeShareableCloneOnUIRecursive.__closure = { SHOULD_BE_USE_WEB: isJest, isHostObject: closure_6, isRemoteFunction: closure_16 };
  makeShareableCloneOnUIRecursive.__workletHash = 10912061747670;
  makeShareableCloneOnUIRecursive.__initData = closure_17;
  return makeShareableCloneOnUIRecursive;
})();
export const makeShareable = isJest ? (function makeShareableJS(arg0) {
  return arg0;
}) : (function makeShareableNative(value) {
  let closure_0 = value;
  const shareableMappingCache = require(1613) /* weakMap */.shareableMappingCache;
  if (shareableMappingCache.get(value)) {
    return value;
  } else {
    let obj = {};
    /* worklet (recovered source) */ function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}
    obj = { value };
    pnpm_shareablesTs9.__closure = obj;
    pnpm_shareablesTs9.__workletHash = 5731865988281;
    pnpm_shareablesTs9.__initData = closure_18;
    obj.__init = pnpm_shareablesTs9;
    tmp3 = tmp3(obj);
    const shareableMappingCache2 = require(1613) /* weakMap */.shareableMappingCache;
    const result = shareableMappingCache2.set(value, tmp3);
    return value;
  }
});
