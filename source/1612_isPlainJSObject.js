// Module ID: 1612
// Function ID: 17880
// Name: isPlainJSObject
// Dependencies: []

// Module 1612 (isPlainJSObject)
function isPlainJSObject(__workletContextObjectFactory) {
  return Object.getPrototypeOf(__workletContextObjectFactory) === Object.prototype;
}
function freezeObjectInDev(arg0) {

}
let closure_3 = importDefault(dependencyMap[0]);
const shouldBeUseWebResult = arg1(dependencyMap[1]).shouldBeUseWeb();
let closure_5 = { code: "function isHostObject_Pnpm_shareablesTs1(value){const{MAGIC_KEY}=this.__closure;return MAGIC_KEY in value;}" };
let closure_6 = () => {
  function isHostObject(arg0) {
    return "REANIMATED_MAGIC_KEY" in arg0;
  }
  isHostObject.__closure = { MAGIC_KEY: "REANIMATED_MAGIC_KEY" };
  isHostObject.__workletHash = 10372729533958;
  isHostObject.__initData = closure_5;
  return isHostObject;
}();
/* worklet (recovered source) */ function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError("Trying to access property `"+String(prop)+"` of an object which cannot be sent to the UI runtime.");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}
pnpm_shareablesTs2.__closure = {};
pnpm_shareablesTs2.__workletHash = 15880119471501;
pnpm_shareablesTs2.__initData = { code: "function pnpm_shareablesTs2(){return new Proxy({},{get:function(_,prop){if(prop==='_isReanimatedSharedValue'||prop==='__remoteFunction'){return false;}throw new ReanimatedError(\"Trying to access property `\"+String(prop)+\"` of an object which cannot be sent to the UI runtime.\");},set:function(){throw new ReanimatedError('Trying to write to an object which cannot be sent to the UI runtime.');}});}" };
let closure_8 = { __init: pnpm_shareablesTs2 };
let closure_9 = [0.5, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000183, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000139067116171372, 0, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001586575, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003127038578, 0, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021219957915, 0, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002121995791, -26815615859885500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -26815615859885570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
const tmp3 = shouldBeUseWebResult ? function makeShareableCloneRecursiveWeb(arg0) {
  return arg0;
} : function makeShareableCloneRecursiveNative(__workletContextObjectFactory) {
  let tmp48;
  let tmp50;
  let tmp79;
  let tmp81;
  let shareableClone1 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  let num = 0;
  if (arguments.length > 2) {
    num = 0;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if (num >= 30) {
    if (30 === num) {
      let closure_7 = __workletContextObjectFactory;
    } else if (__workletContextObjectFactory === closure_7) {
      const ReanimatedError = arg1(dependencyMap[3]).ReanimatedError;
      const prototype = ReanimatedError.prototype;
      const reanimatedError = new ReanimatedError("Trying to convert a cyclic object to a shareable. This is not supported.");
      throw reanimatedError;
    }
  } else {
    closure_7 = undefined;
  }
  if ("object" === typeof __workletContextObjectFactory) {
    if (null !== __workletContextObjectFactory) {
      shareableClone1 = arg1;
      shareableClone1 = dependencyMap;
      const shareableMappingCache12 = arg1(dependencyMap[2]).shareableMappingCache;
      let value = shareableMappingCache12.get(__workletContextObjectFactory);
      if (value === arg1(dependencyMap[2]).shareableMappingFlag) {
        value = __workletContextObjectFactory;
      }
      if (undefined !== value) {
        return value;
      } else {
        shareableClone1 = globalThis;
        const _Array = Array;
        if (Array.isArray(__workletContextObjectFactory)) {
          let shareableClone = function cloneArray(arr, shareableClone1, arg2) {
            const mapped = arr.map((arg0) => callback(arg0, arg1, arg2 + 1));
            const WorkletsModule = arg2(closure_2[5]).WorkletsModule;
            const shareableClone = WorkletsModule.makeShareableClone(mapped, shareableClone1, arr);
            const shareableMappingCache = arg2(closure_2[2]).shareableMappingCache;
            const result = shareableMappingCache.set(arr, shareableClone);
            const shareableMappingCache2 = arg2(closure_2[2]).shareableMappingCache;
            const result1 = shareableMappingCache2.set(shareableClone);
            callback3(undefined);
            return shareableClone;
          }(__workletContextObjectFactory, shareableClone1, num);
        } else {
          if (tmp10) {
            let obj = arg1(dependencyMap[4]);
            if (!obj.isWorkletFunction(__workletContextObjectFactory)) {
              const WorkletsModule = arg1(dependencyMap[5]).WorkletsModule;
              shareableClone = WorkletsModule.makeShareableClone(__workletContextObjectFactory, shareableClone1, __workletContextObjectFactory);
              const shareableMappingCache = arg1(dependencyMap[2]).shareableMappingCache;
              const result = shareableMappingCache.set(__workletContextObjectFactory, shareableClone);
              const shareableMappingCache2 = arg1(dependencyMap[2]).shareableMappingCache;
              const result1 = shareableMappingCache2.set(shareableClone);
              freezeObjectInDev(undefined);
            }
          }
          if (callback2(__workletContextObjectFactory)) {
            const WorkletsModule5 = arg1(dependencyMap[5]).WorkletsModule;
            shareableClone1 = WorkletsModule5.makeShareableClone(__workletContextObjectFactory, shareableClone1, __workletContextObjectFactory);
            const shareableMappingCache10 = arg1(dependencyMap[2]).shareableMappingCache;
            shareableClone1 = shareableMappingCache10.set(__workletContextObjectFactory, shareableClone1);
            const shareableMappingCache11 = arg1(dependencyMap[2]).shareableMappingCache;
            shareableClone1 = shareableMappingCache11.set(shareableClone1);
            let tmp30 = shareableClone1;
          } else {
            if (isPlainJSObject(__workletContextObjectFactory)) {
              if (__workletContextObjectFactory.__workletContextObjectFactory) {
                tmp30 = function cloneContextObject(__workletContextObjectFactory) {
                  __workletContextObjectFactory = __workletContextObjectFactory.__workletContextObjectFactory;
                  /* worklet (recovered source) */ function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}
                  pnpm_shareablesTs3.__closure = { workletContextObjectFactory: __workletContextObjectFactory };
                  pnpm_shareablesTs3.__workletHash = 16264240301234;
                  pnpm_shareablesTs3.__initData = closure_11;
                  const tmp = callback2({ __init: pnpm_shareablesTs3 });
                  const shareableMappingCache = callback(closure_2[2]).shareableMappingCache;
                  const result = shareableMappingCache.set(__workletContextObjectFactory, tmp);
                  return tmp;
                }(__workletContextObjectFactory);
              }
            }
            if (isPlainJSObject(__workletContextObjectFactory)) {
              if (obj2.isWorkletFunction(__workletContextObjectFactory)) {
                if (__workletContextObjectFactory.__stackDetails) {
                  delete r3.__stackDetails;
                }
                obj = { __initData: tmp3(__workletContextObjectFactory.__initData, true, num + 1) };
                const _Object2 = Object;
                const entries = Object.entries(__workletContextObjectFactory);
                const tmp74 = entries[Symbol.iterator]();
                while (tmp74 !== undefined) {
                  let tmp77 = callback;
                  let tmp78 = callback(tmp75, 2);
                  [tmp79, tmp81] = tmp78;
                  let tmp82 = "__initData" === tmp79;
                  let tmp83 = tmp82;
                  let tmp80 = tmp79;
                  if (tmp82) {
                    let tmp84 = obj;
                    tmp83 = undefined !== tmp69.__initData;
                  }
                  if (!tmp83) {
                    let tmp85 = obj;
                    let tmp86 = tmp79;
                    let tmp87 = tmp3;
                    let tmp88 = tmp81;
                    let tmp89 = shareableClone1;
                    let tmp90 = num;
                    tmp69[tmp80] = tmp3(tmp81, tmp67, tmp68 + 1);
                  }
                  // continue
                }
                const WorkletsModule4 = arg1(dependencyMap[5]).WorkletsModule;
                const shareableClone2 = WorkletsModule4.makeShareableClone(obj, true, __workletContextObjectFactory);
                const shareableMappingCache8 = arg1(dependencyMap[2]).shareableMappingCache;
                const result2 = shareableMappingCache8.set(__workletContextObjectFactory, shareableClone2);
                const shareableMappingCache9 = arg1(dependencyMap[2]).shareableMappingCache;
                const result3 = shareableMappingCache9.set(shareableClone2);
                freezeObjectInDev(undefined);
                tmp30 = shareableClone2;
                const tmp67 = shareableClone1;
              }
              const obj2 = arg1(dependencyMap[4]);
            }
            if (!isPlainJSObject(__workletContextObjectFactory)) {
              if (!tmp10) {
                const _RegExp = RegExp;
                if (__workletContextObjectFactory instanceof RegExp) {
                  tmp30 = function cloneRegExp(source) {
                    source = source.source;
                    const flags = source.flags;
                    /* worklet (recovered source) */ function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}
                    pnpm_shareablesTs4.__closure = { pattern: source, flags };
                    pnpm_shareablesTs4.__workletHash = 17343605339188;
                    pnpm_shareablesTs4.__initData = closure_12;
                    const tmp = callback2({ __init: pnpm_shareablesTs4 });
                    const shareableMappingCache = flags(closure_2[2]).shareableMappingCache;
                    const result = shareableMappingCache.set(source, tmp);
                    return tmp;
                  }(__workletContextObjectFactory);
                } else {
                  const _Error = Error;
                  if (__workletContextObjectFactory instanceof Error) {
                    tmp30 = function cloneError(name) {
                      name = name.name;
                      const message = name.message;
                      const stack = name.stack;
                      /* worklet (recovered source) */ function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}
                      pnpm_shareablesTs5.__closure = { name, message, stack };
                      pnpm_shareablesTs5.__workletHash = 1273124072033;
                      pnpm_shareablesTs5.__initData = closure_13;
                      const tmp = callback2({ __init: pnpm_shareablesTs5 });
                      const shareableMappingCache = message(stack[2]).shareableMappingCache;
                      const result = shareableMappingCache.set(name, tmp);
                      return tmp;
                    }(__workletContextObjectFactory);
                  } else {
                    const _ArrayBuffer = ArrayBuffer;
                    if (__workletContextObjectFactory instanceof ArrayBuffer) {
                      const WorkletsModule2 = arg1(dependencyMap[5]).WorkletsModule;
                      const shareableClone3 = WorkletsModule2.makeShareableClone(__workletContextObjectFactory, shareableClone1, __workletContextObjectFactory);
                      const shareableMappingCache4 = arg1(dependencyMap[2]).shareableMappingCache;
                      const result4 = shareableMappingCache4.set(__workletContextObjectFactory, shareableClone3);
                      const shareableMappingCache5 = arg1(dependencyMap[2]).shareableMappingCache;
                      const result5 = shareableMappingCache5.set(shareableClone3);
                      tmp30 = shareableClone3;
                    } else {
                      const _ArrayBuffer2 = ArrayBuffer;
                      if (ArrayBuffer.isView(__workletContextObjectFactory)) {
                        tmp30 = function cloneArrayBufferView(buffer) {
                          buffer = buffer.buffer;
                          const name = buffer.constructor.name;
                          /* worklet (recovered source) */ function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError("[Reanimated] Invalid array view name `"+typeName+"`.");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError("[Reanimated] Constructor for `"+typeName+"` not found.");}return new constructor(buffer);}
                          pnpm_shareablesTs6.__closure = { VALID_ARRAY_VIEWS_NAMES: closure_9, typeName: name, buffer };
                          pnpm_shareablesTs6.__workletHash = 2440560686150;
                          pnpm_shareablesTs6.__initData = closure_14;
                          const tmp = callback2({ __init: pnpm_shareablesTs6 });
                          const shareableMappingCache = name(closure_2[2]).shareableMappingCache;
                          const result = shareableMappingCache.set(buffer, tmp);
                          return tmp;
                        }(__workletContextObjectFactory);
                      } else {
                        tmp30 = tmp3(closure_8);
                        const shareableMappingCache3 = arg1(dependencyMap[2]).shareableMappingCache;
                        const result6 = shareableMappingCache3.set(__workletContextObjectFactory, tmp30);
                      }
                    }
                  }
                }
              }
            }
            obj = {};
            const _Object = Object;
            const entries1 = Object.entries(__workletContextObjectFactory);
            const tmp43 = entries1[Symbol.iterator]();
            while (tmp43 !== undefined) {
              let tmp46 = callback;
              let tmp47 = callback(tmp44, 2);
              [tmp48, tmp50] = tmp47;
              let tmp51 = "__initData" === tmp48;
              let tmp52 = tmp51;
              let tmp49 = tmp48;
              if (tmp51) {
                let tmp53 = obj;
                tmp52 = undefined !== obj.__initData;
              }
              if (!tmp52) {
                let tmp54 = obj;
                let tmp55 = tmp48;
                let tmp56 = tmp3;
                let tmp57 = tmp50;
                let tmp58 = shareableClone1;
                let tmp59 = num;
                obj[tmp49] = tmp3(tmp50, tmp39, tmp40 + 1);
              }
              // continue
            }
            const WorkletsModule3 = arg1(dependencyMap[5]).WorkletsModule;
            const shareableClone4 = WorkletsModule3.makeShareableClone(obj, shareableClone1, __workletContextObjectFactory);
            const shareableMappingCache6 = arg1(dependencyMap[2]).shareableMappingCache;
            const result7 = shareableMappingCache6.set(__workletContextObjectFactory, shareableClone4);
            const shareableMappingCache7 = arg1(dependencyMap[2]).shareableMappingCache;
            const result8 = shareableMappingCache7.set(shareableClone4);
            freezeObjectInDev(undefined);
            tmp30 = shareableClone4;
            const tmp39 = shareableClone1;
            const tmp40 = num;
          }
          shareableClone1 = tmp30;
        }
        shareableClone1 = shareableClone;
      }
    }
  }
  const WorkletsModule6 = arg1(dependencyMap[5]).WorkletsModule;
  return WorkletsModule6.makeShareableClone(__workletContextObjectFactory, shareableClone1);
};
let closure_11 = { code: "function pnpm_shareablesTs3(){const{workletContextObjectFactory}=this.__closure;return workletContextObjectFactory();}" };
let closure_12 = { code: "function pnpm_shareablesTs4(){const{pattern,flags}=this.__closure;return new RegExp(pattern,flags);}" };
let closure_13 = { code: "function pnpm_shareablesTs5(){const{name,message,stack}=this.__closure;const error=new Error();error.name=name;error.message=message;error.stack=stack;return error;}" };
let closure_14 = { code: "function pnpm_shareablesTs6(){const{VALID_ARRAY_VIEWS_NAMES,typeName,buffer}=this.__closure;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new ReanimatedError(\"[Reanimated] Invalid array view name `\"+typeName+\"`.\");}const constructor=global[typeName];if(constructor===undefined){throw new ReanimatedError(\"[Reanimated] Constructor for `\"+typeName+\"` not found.\");}return new constructor(buffer);}" };
let closure_15 = { code: "function isRemoteFunction_Pnpm_shareablesTs7(value){return!!value.__remoteFunction;}" };
let closure_16 = () => {
  function isRemoteFunction(__remoteFunction) {
    return __remoteFunction.__remoteFunction;
  }
  isRemoteFunction.__closure = {};
  isRemoteFunction.__workletHash = 12817663616448;
  isRemoteFunction.__initData = closure_15;
  return isRemoteFunction;
}();
let closure_17 = { code: "function makeShareableCloneOnUIRecursive_Pnpm_shareablesTs8(value){const{SHOULD_BE_USE_WEB,isHostObject,isRemoteFunction}=this.__closure;if(SHOULD_BE_USE_WEB){return value;}function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return global._makeShareableClone(value,undefined);}if(isRemoteFunction(value)){return value.__remoteFunction;}if(Array.isArray(value)){return global._makeShareableClone(value.map(cloneRecursive),undefined);}const toAdapt={};for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return global._makeShareableClone(toAdapt,value);}return global._makeShareableClone(value,undefined);}return cloneRecursive(value);}" };
let closure_18 = { code: "function pnpm_shareablesTs9(){const{value}=this.__closure;return value;}" };

export const makeShareableCloneRecursive = tmp3;
export const makeShareableCloneOnUIRecursive = () => {
  function makeShareableCloneOnUIRecursive(applyResult) {
    if (closure_4) {
      return applyResult;
    } else {
      function cloneRecursive(__remoteFunction) {
        if ("object" !== typeof __remoteFunction) {
          if ("function" !== tmp) {
            return cloneRecursive._makeShareableClone(__remoteFunction, undefined);
          }
        }
        if (callback2(__remoteFunction)) {
          return cloneRecursive._makeShareableClone(__remoteFunction, undefined);
        } else if (callback3(__remoteFunction)) {
          return __remoteFunction.__remoteFunction;
        } else {
          const _Array = Array;
          if (Array.isArray(__remoteFunction)) {
            return cloneRecursive._makeShareableClone(__remoteFunction.map(cloneRecursive), undefined);
          } else {
            const obj = {};
            const _Object = Object;
            const entries = Object.entries(__remoteFunction);
            const tmp8 = entries[Symbol.iterator]();
            while (tmp8 !== undefined) {
              let tmp11 = callback;
              let tmp12 = callback(tmp9, 2);
              let tmp13 = obj;
              let tmp14 = cloneRecursive;
              obj[tmp12[0]] = cloneRecursive(tmp12[1]);
              // continue
            }
            return cloneRecursive._makeShareableClone(obj, __remoteFunction);
          }
        }
      }
      return cloneRecursive(applyResult);
    }
  }
  makeShareableCloneOnUIRecursive.__closure = { SHOULD_BE_USE_WEB: shouldBeUseWebResult, isHostObject: closure_6, isRemoteFunction: closure_16 };
  makeShareableCloneOnUIRecursive.__workletHash = 10912061747670;
  makeShareableCloneOnUIRecursive.__initData = closure_17;
  return makeShareableCloneOnUIRecursive;
}();
export const makeShareable = shouldBeUseWebResult ? function makeShareableJS(arg0) {
  return arg0;
} : function makeShareableNative(value) {
  const global = value;
  const shareableMappingCache = arg1(dependencyMap[2]).shareableMappingCache;
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
    const tmp3 = tmp3(obj);
    const shareableMappingCache2 = arg1(dependencyMap[2]).shareableMappingCache;
    const result = shareableMappingCache2.set(value, tmp3);
    return value;
  }
};
