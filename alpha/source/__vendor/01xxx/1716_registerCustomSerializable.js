// Module ID: 1716
// Function ID: 1717
// Name: registerCustomSerializable
// Dependencies: [32, 1717, 1718, 1719, 1710, 1705, 1709, 1720]
// Exports: createSerializableArray, createSerializableArrayBuffer, createSerializableArrayBufferView, createSerializableBigInt, createSerializableBoolean, createSerializableError, createSerializableHostObject, createSerializableMap, createSerializableNull, createSerializableNumber, createSerializableObject, createSerializableRegExp, createSerializableRemoteFunction, createSerializableSet, createSerializableString, createSerializableUndefined, createSerializableWorklet, isSerializableRef, makeShareable, makeShareableCloneOnUIRecursive, registerCustomSerializable

// Module 1716 (registerCustomSerializable)
import WorkletsModule21 from "WorkletsModule" /* 1709 */;
import serializableMappingFlag from "serializableMappingFlag" /* 1717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import bundleModeNative_mod from "bundleModeNative" /* 1710 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const f84245 = (item, index) => createSerializable(item, c0, c1 + 1);
function createSerializable(__initData, c0, arg2) {
  let c5;
  let imported;
  let message;
  let name2;
  let source;
  let stack;
  let flag = c0;
  if (c0 === undefined) {
    flag = false;
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  const tmp = __initData;
  if (num >= 30) {
    if (30 === num) {
      c5 = __initData;
    } else if (__initData === c5) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("[Worklets] Trying to convert a cyclic object to a serializable. This is not supported.");
      throw error;
    }
  } else {
    c5 = undefined;
  }
  if (typeof __initData === "string") {
    const WorkletsModule20 = flag(num[6]).WorkletsModule;
    return WorkletsModule20.createSerializableString(__initData);
  } else if (typeof __initData === "number") {
    const WorkletsModule19 = flag(num[6]).WorkletsModule;
    return WorkletsModule19.createSerializableNumber(__initData);
  } else if (typeof __initData === "boolean") {
    const WorkletsModule18 = flag(num[6]).WorkletsModule;
    return WorkletsModule18.createSerializableBoolean(__initData);
  } else if (typeof __initData === "bigint") {
    const WorkletsModule17 = flag(num[6]).WorkletsModule;
    return WorkletsModule17.createSerializableBigInt(__initData);
  } else if (typeof __initData === "symbol") {
    const _String = String;
    const StringResult = String(__initData);
    const WorkletsModule16 = flag(num[6]).WorkletsModule;
    return WorkletsModule16.createSerializableString(StringResult);
  } else if (undefined === __initData) {
    const WorkletsModule15 = flag(num[6]).WorkletsModule;
    return WorkletsModule15.createSerializableUndefined();
  } else if (null === __initData) {
    const WorkletsModule14 = flag(num[6]).WorkletsModule;
    return WorkletsModule14.createSerializableNull();
  } else {
    const serializableMappingCache22 = flag(num[1]).serializableMappingCache;
    let value = serializableMappingCache22.get(__initData);
    if (value === flag(num[1]).serializableMappingFlag) {
      value = __initData;
    }
    if (undefined !== value) {
      const _globalThis = globalThis;
      if (WeakRef) {
        const _WeakRef = WeakRef;
        if (value instanceof WeakRef) {
          const derefResult = value.deref();
          if (undefined !== derefResult) {
            return derefResult;
          }
        }
      }
      return value;
    }
    const _Array = Array;
    if (Array.isArray(__initData)) {
      const mapped = __initData.map(f84245);
      const WorkletsModule13 = tmp93(tmp94[6]).WorkletsModule;
      const serializableArray = WorkletsModule13.createSerializableArray(mapped, flag);
      const serializableMappingCache20 = tmp93(tmp94[1]).serializableMappingCache;
      const result = serializableMappingCache20.set(__initData, serializableArray);
      const serializableMappingCache21 = tmp93(tmp94[1]).serializableMappingCache;
      const result1 = serializableMappingCache21.set(serializableArray);
      return serializableArray;
    } else {
      if (typeof __initData === "function") {
        const _globalThis3 = globalThis;
        if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
          if (__initData.__bundleData) {
            ({ source, imported } = __initData.__bundleData);
            const WorkletsModule12 = tmp93(tmp94[6]).WorkletsModule;
            const serializableImport = WorkletsModule12.createSerializableImport(source, imported);
            const serializableMappingCache18 = tmp93(tmp94[1]).serializableMappingCache;
            const result2 = serializableMappingCache18.set(__initData, serializableImport);
            const serializableMappingCache19 = tmp93(tmp94[1]).serializableMappingCache;
            const result3 = serializableMappingCache19.set(serializableImport);
            return serializableImport;
          }
        }
        if (__initData.__remoteFunction) {
          return __initData;
        } else {
          const tmp93Result = flag(num[2]);
          if (!tmp93Result.isWorkletFunction(__initData)) {
            const WorkletsModule = tmp93(tmp94[6]).WorkletsModule;
            const serializableNonWorkletFunction = WorkletsModule.createSerializableNonWorkletFunction(__initData, undefined);
            const _globalThis2 = globalThis;
            if (WeakRef) {
              const serializableMappingCache = tmp93(tmp94[1]).serializableMappingCache;
              const _WeakRef2 = WeakRef;
              const self3 = this;
              const self4 = this;
              set = serializableMappingCache.set;
              const weakRef = new WeakRef(serializableNonWorkletFunction);
              const result4 = set(__initData, weakRef);
            }
            const serializableMappingCache2 = tmp93(tmp94[1]).serializableMappingCache;
            const result5 = serializableMappingCache2.set(serializableNonWorkletFunction);
            return serializableNonWorkletFunction;
          }
        }
      }
      const _Object = Object;
      const prototypeOf = Object.getPrototypeOf(__initData);
      let tmp16 = null !== prototypeOf;
      if (tmp16) {
        if (typeof isHostObject === "function") {
          tmp16 = closure_131_0 in prototypeOf;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (tmp16) {
        const _Object6 = Object;
        const prototypeOf1 = Object.getPrototypeOf(__initData);
        const tmp68 = cloneObjectProperties(__initData, flag, num);
        const WorkletsModule11 = tmp93(tmp94[6]).WorkletsModule;
        return WorkletsModule11.createSerializableTurboModuleLike(tmp68, prototypeOf1);
      } else if (typeof isHostObject === "function") {
        if (closure_131_0 in __initData) {
          const WorkletsModule10 = tmp93(tmp94[6]).WorkletsModule;
          const serializableHostObject = WorkletsModule10.createSerializableHostObject(__initData);
          const serializableMappingCache16 = tmp93(tmp94[1]).serializableMappingCache;
          const result6 = serializableMappingCache16.set(__initData, serializableHostObject);
          const serializableMappingCache17 = tmp93(tmp94[1]).serializableMappingCache;
          const result7 = serializableMappingCache17.set(serializableHostObject);
          return serializableHostObject;
        } else if (typeof isPlainJSObject === "function") {
          const _Object2 = Object;
          const _Object3 = Object;
          if (Object.getPrototypeOf(__initData) === Object.prototype) {
            const tmp93Result3 = flag(num[2]);
            if (tmp93Result3.isWorkletFunction(__initData)) {
              if (__initData.__stackDetails) {
                delete tmp["__stackDetails"];
              }
              const tmp58 = cloneObjectProperties(__initData, flag, num);
              tmp58.__initData = createSerializable(__initData.__initData, true, num + 1);
              const WorkletsModule9 = tmp93(tmp94[6]).WorkletsModule;
              const serializableWorklet = WorkletsModule9.createSerializableWorklet(tmp58, true);
              const serializableMappingCache14 = tmp93(tmp94[1]).serializableMappingCache;
              const result8 = serializableMappingCache14.set(__initData, serializableWorklet);
              const serializableMappingCache15 = tmp93(tmp94[1]).serializableMappingCache;
              const result9 = serializableMappingCache15.set(serializableWorklet);
              return serializableWorklet;
            }
          }
          const tmp93Result4 = flag(num[3]);
          if (tmp93Result4.isSynchronizable(__initData)) {
            const serializableMappingCache13 = tmp93(tmp94[1]).serializableMappingCache;
            const result10 = serializableMappingCache13.set(__initData);
            return __initData;
          } else if (typeof tmp21 === "function") {
            const _Object4 = Object;
            const _Object5 = Object;
            if (Object.getPrototypeOf(__initData) !== Object.prototype) {
              if (typeof __initData !== "function") {
                const _Set = Set;
                if (__initData instanceof Set) {
                  return cloneSet(__initData);
                } else {
                  const _Map = Map;
                  if (__initData instanceof Map) {
                    return cloneMap(__initData);
                  } else {
                    const _RegExp = RegExp;
                    if (__initData instanceof RegExp) {
                      const WorkletsModule7 = tmp93(tmp94[6]).WorkletsModule;
                      const serializableRegExp = WorkletsModule7.createSerializableRegExp(__initData.source, __initData.flags);
                      const serializableMappingCache9 = tmp93(tmp94[1]).serializableMappingCache;
                      const result11 = serializableMappingCache9.set(__initData, serializableRegExp);
                      const serializableMappingCache10 = tmp93(tmp94[1]).serializableMappingCache;
                      const result12 = serializableMappingCache10.set(serializableRegExp);
                      return serializableRegExp;
                    } else {
                      const _Error2 = Error;
                      if (__initData instanceof Error) {
                        ({ name: name2, message, stack } = __initData);
                        const WorkletsModule6 = tmp93(tmp94[6]).WorkletsModule;
                        const serializableError = WorkletsModule6.createSerializableError(name2, message, stack);
                        const serializableMappingCache7 = tmp93(tmp94[1]).serializableMappingCache;
                        const result13 = serializableMappingCache7.set(__initData, serializableError);
                        const serializableMappingCache8 = tmp93(tmp94[1]).serializableMappingCache;
                        const result14 = serializableMappingCache8.set(serializableError);
                        return serializableError;
                      } else {
                        const _ArrayBuffer = ArrayBuffer;
                        if (__initData instanceof ArrayBuffer) {
                          const WorkletsModule5 = tmp93(tmp94[6]).WorkletsModule;
                          const serializableArrayBuffer = WorkletsModule5.createSerializableArrayBuffer(__initData);
                          const serializableMappingCache5 = tmp93(tmp94[1]).serializableMappingCache;
                          const result15 = serializableMappingCache5.set(__initData, serializableArrayBuffer);
                          const serializableMappingCache6 = tmp93(tmp94[1]).serializableMappingCache;
                          const result16 = serializableMappingCache6.set(serializableArrayBuffer);
                          return serializableArrayBuffer;
                        } else {
                          const _ArrayBuffer2 = ArrayBuffer;
                          if (ArrayBuffer.isView(__initData)) {
                            const name = __initData.constructor.name;
                            if (items4.includes(name)) {
                              const tmp33 = "DataView" === name ? __initData.byteLength : __initData.length;
                              const WorkletsModule4 = tmp93(tmp94[6]).WorkletsModule;
                              const serializableArrayBufferView = WorkletsModule4.createSerializableArrayBufferView(name, __initData.buffer, __initData.byteOffset, tmp33);
                              const serializableMappingCache3 = tmp93(tmp94[1]).serializableMappingCache;
                              const result17 = serializableMappingCache3.set(__initData, serializableArrayBufferView);
                              const serializableMappingCache4 = tmp93(tmp94[1]).serializableMappingCache;
                              const result18 = serializableMappingCache4.set(serializableArrayBufferView);
                              return serializableArrayBufferView;
                            } else {
                              const _Error3 = Error;
                              const _HermesInternal = HermesInternal;
                              const self5 = this;
                              const self6 = this;
                              const error1 = new Error("[Worklets] Invalid array view name `" + name + "`.");
                              throw error1;
                            }
                          } else {
                            let num2 = 0;
                            if (0 < closure_8.length) {
                              const pack = obj5.pack;
                              while (!closure_8[num2].determine(__initData)) {
                                num2 = num2 + 1;
                              }
                              const tmp27 = createSerializable(pack(__initData));
                              const WorkletsModule3 = flag(num[6]).WorkletsModule;
                              return WorkletsModule3.createCustomSerializable(tmp27, num2);
                            }
                            const WorkletsModule2 = flag(num[6]).WorkletsModule;
                            return WorkletsModule2.createSerializableUndefined();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp52 = cloneObjectProperties(__initData, flag, num);
            const WorkletsModule8 = tmp93(tmp94[6]).WorkletsModule;
            const serializableObject = WorkletsModule8.createSerializableObject(tmp52, flag, __initData);
            const serializableMappingCache11 = tmp93(tmp94[1]).serializableMappingCache;
            const result19 = serializableMappingCache11.set(__initData, serializableObject);
            const serializableMappingCache12 = tmp93(tmp94[1]).serializableMappingCache;
            const result20 = serializableMappingCache12.set(serializableObject);
            return serializableObject;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
}
function cloneObjectProperties(__stackDetails, flag, arg2) {
  let closure_0 = flag;
  let closure_1 = arg2;
  const obj = Object.create(null);
  function _loop(__initData) {
    const tmp = closure_3;
    if ("__initData" === closure_3) {
      if (undefined !== obj.__initData) {
        return 1;
      }
    }
    obj[tmp] = createSerializable(__initData, flag, closure_1 + 1);
  }
  const entries = Object.entries(__stackDetails);
  const tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp6 = obj(tmp4, 2);
    let closure_3 = tmp6[0];
    let _loopResult = _loop(tmp6[1]);
    continue;
  }
  return obj;
}
function cloneMap(arr) {
  const items = [];
  const items1 = [];
  function _loop2(__initData, __initData2) {
    items.push(createSerializable(__initData));
    items1.push(createSerializable(__initData));
  }
  const entries = arr.entries();
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let _loop2Result = _loop2(tmp5[0], tmp5[1]);
    continue;
  }
  const WorkletsModule = items(items1[6]).WorkletsModule;
  const serializableMap = WorkletsModule.createSerializableMap(items, items1);
  const serializableMappingCache = items(items1[1]).serializableMappingCache;
  const result = serializableMappingCache.set(arr, serializableMap);
  const serializableMappingCache2 = items(items1[1]).serializableMappingCache;
  const result1 = serializableMappingCache2.set(serializableMap);
  freezeObjectInDev(0);
  return serializableMap;
}
function cloneSet(__initData) {
  const items = [];
  function _loop3(iter) {
    items.push(createSerializable(iter));
  }
  const iter = __initData[Symbol.iterator]();
  while (iter !== undefined) {
    let _loop3Result = _loop3(iter.next());
    continue;
  }
  const WorkletsModule = items(1709).WorkletsModule;
  const serializableSet = WorkletsModule.createSerializableSet(items);
  const serializableMappingCache = items(1717).serializableMappingCache;
  const result = serializableMappingCache.set(__initData, serializableSet);
  const serializableMappingCache2 = items(1717).serializableMappingCache;
  const result1 = serializableMappingCache2.set(serializableSet);
  freezeObjectInDev(0);
  return serializableSet;
}
function freezeObjectInDev(arg0) {

}
let items = [{ code: "(function isHostObject_Pnpm_serializableNativeTs1(value){let[MAGIC_KEY]=this.__closure;return MAGIC_KEY in value;})" }, "REANIMATED_MAGIC_KEY"];
let c0;
[tmp2, tmp3] = items;
function isHostObject(arg0) {
  return c0 in arg0;
}
let items1 = [tmp3];
isHostObject.__closure = items1;
isHostObject.__workletHash = 16769335311987;
isHostObject.__initData = tmp2;
let items2 = [{ code: "(function isSerializableRef_Pnpm_serializableNativeTs2(value){return typeof value==='object'&&value!==null&&'__serializableRef'in value&&value.__serializableRef===true;})" }];
[tmp4] = items2;
function isSerializableRef(__serializableRef) {
  let tmp = typeof __serializableRef === "object";
  if (typeof __serializableRef === "object") {
    tmp = null !== __serializableRef;
  }
  if (tmp) {
    tmp = "__serializableRef" in __serializableRef;
  }
  if (tmp) {
    tmp = true === __serializableRef.__serializableRef;
  }
  return tmp;
}
isSerializableRef.__workletHash = 3674680766244;
isSerializableRef.__initData = tmp4;
const items3 = [{ code: "(function isPlainJSObject_Pnpm_serializableNativeTs3(object){return Object.getPrototypeOf(object)===Object.prototype;})" }];
[tmp5] = items3;
function isPlainJSObject(arg0) {
  return Object.getPrototypeOf(arg0) === Object.prototype;
}
isPlainJSObject.__workletHash = 13283265035698;
isPlainJSObject.__initData = tmp5;
const items4 = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array", "DataView"];
let bundleModeNative = bundleModeNative_mod;
if (bundleModeNative.isBundleModeEnabled()) {
  let obj = { imported: "createSerializable", source: 1705 };
  createSerializable.__bundleData = obj;
}
if (!globalThis.__customSerializationRegistry) {
  let _globalThis = globalThis;
  globalThis.__customSerializationRegistry = [];
}
let closure_8 = globalThis.__customSerializationRegistry;
const items5 = [{ code: "(function makeShareableCloneOnUIRecursiveLEGACY_Pnpm_serializableNativeTs4(value){let[isHostObject,VALID_ARRAY_VIEWS_NAMES,__DEV__]=this.__closure;function cloneRecursive(value){if(typeof value==='object'&&value!==null||typeof value==='function'){if(isHostObject(value)){return globalThis._createSerializableHostObject(value);}if(value.__remoteFunction){return value;}if(Array.isArray(value)){return globalThis._createSerializableArray(value.map(cloneRecursive));}if(value.__synchronizableRef){return globalThis._createSerializableSynchronizable(value);}if(value.__serializableRef){return value;}if(value instanceof Set){const values=[];value.forEach(function(element){values.push(cloneRecursive(element));});return globalThis.__workletsModuleProxy.createSerializableSet(values);}if(value instanceof Error){const{name:name,message:message,stack:stack}=value;return globalThis.__workletsModuleProxy.createSerializableError(name,message,stack);}if(value instanceof RegExp){return globalThis.__workletsModuleProxy.createSerializableRegExp(value.source,value.flags);}if(value instanceof ArrayBuffer){return globalThis.__workletsModuleProxy.createSerializableArrayBuffer(value);}if(ArrayBuffer.isView(value)){const typeName=value.constructor.name;if(!VALID_ARRAY_VIEWS_NAMES.includes(typeName)){throw new Error(\"[Worklets] Invalid array view name `\"+typeName+\"`.\");}const length=typeName==='DataView'?value.byteLength:value.length;return globalThis.__workletsModuleProxy.createSerializableArrayBufferView(typeName,value.buffer,value.byteOffset,length);}if(value instanceof Map){const keys=[];const values=[];value.forEach(function(element,key){keys.push(cloneRecursive(key));values.push(cloneRecursive(element));});return globalThis.__workletsModuleProxy.createSerializableMap(keys,values);}if(Object.getPrototypeOf(value)!==Object.prototype){const length=globalThis.__customSerializationRegistry.length;for(let i=0;i<length;i++){const{determine:determine,pack:pack}=globalThis.__customSerializationRegistry[i];if(determine(value)){const packedData=pack(value);return globalThis.__workletsModuleProxy.createCustomSerializable(cloneRecursive(packedData),i);}}}if(__DEV__&&value instanceof Promise){throw new Error('[Worklets] Promises cannot be converted to serializable.');}const toAdapt=Object.create(null);for(const[key,element]of Object.entries(value)){toAdapt[key]=cloneRecursive(element);}return globalThis.__workletsModuleProxy.createSerializableLEGACY(toAdapt,value);}if(typeof value==='string'){return globalThis._createSerializableString(value);}if(typeof value==='number'){return globalThis._createSerializableNumber(value);}if(typeof value==='boolean'){return globalThis._createSerializableBoolean(value);}if(typeof value==='bigint'){return globalThis._createSerializableBigInt(value);}if(typeof value==='symbol'){return globalThis._createSerializableString(String(value));}if(value===undefined){return globalThis._createSerializableUndefined();}if(value===null){return globalThis._createSerializableNull();}return globalThis.__workletsModuleProxy.createSerializableLEGACY(value,undefined);}return cloneRecursive(value);})" }, isHostObject, items4, false];
c0 = undefined;
let c1;
let c2;
[tmp6, tmp7, tmp8, tmp9] = items5;
function makeShareableCloneOnUIRecursiveLEGACY(__remoteFunction) {
  function cloneRecursive(__remoteFunction) {
    let items;
    if (typeof __remoteFunction !== "object") {
      if (typeof __remoteFunction !== "function") {
        let result;
        if (typeof __remoteFunction === "string") {
          const _globalThis8 = globalThis;
          result = globalThis._createSerializableString(__remoteFunction);
        } else if (typeof __remoteFunction === "number") {
          const _globalThis7 = globalThis;
          result = globalThis._createSerializableNumber(__remoteFunction);
        } else if (typeof __remoteFunction === "boolean") {
          const _globalThis6 = globalThis;
          result = globalThis._createSerializableBoolean(__remoteFunction);
        } else if (typeof __remoteFunction === "bigint") {
          const _globalThis5 = globalThis;
          result = globalThis._createSerializableBigInt(__remoteFunction);
        } else if (typeof __remoteFunction === "symbol") {
          const _globalThis4 = globalThis;
          const _String = String;
          result = globalThis._createSerializableString(String(__remoteFunction));
        } else if (undefined === __remoteFunction) {
          const _globalThis3 = globalThis;
          result = globalThis._createSerializableUndefined();
        } else if (null === __remoteFunction) {
          const _globalThis2 = globalThis;
          result = globalThis._createSerializableNull();
        } else {
          const _globalThis = globalThis;
          result = __workletsModuleProxy.createSerializableLEGACY(__remoteFunction, undefined);
        }
        return result;
      }
    }
    if (cloneRecursive(__remoteFunction)) {
      const _globalThis21 = globalThis;
      return globalThis._createSerializableHostObject(__remoteFunction);
    } else if (__remoteFunction.__remoteFunction) {
      return __remoteFunction;
    } else {
      const _Array = Array;
      if (Array.isArray(__remoteFunction)) {
        const _globalThis20 = globalThis;
        return globalThis._createSerializableArray(__remoteFunction.map(items));
      } else if (__remoteFunction.__synchronizableRef) {
        const _globalThis19 = globalThis;
        return globalThis._createSerializableSynchronizable(__remoteFunction);
      } else if (__remoteFunction.__serializableRef) {
        return __remoteFunction;
      } else {
        const _Set = Set;
        if (__remoteFunction instanceof Set) {
          items = [];
          const item = __remoteFunction.forEach((item) => {
            items.push(cloneRecursive(item));
          });
          const _globalThis18 = globalThis;
          const __workletsModuleProxy9 = globalThis.__workletsModuleProxy;
          return __workletsModuleProxy9.createSerializableSet(items);
        } else {
          const _Error = Error;
          if (__remoteFunction instanceof Error) {
            const _globalThis17 = globalThis;
            const __workletsModuleProxy8 = globalThis.__workletsModuleProxy;
            return __workletsModuleProxy8.createSerializableError(__remoteFunction.name, __remoteFunction.message, __remoteFunction.stack);
          } else {
            const _RegExp = RegExp;
            if (__remoteFunction instanceof RegExp) {
              const _globalThis16 = globalThis;
              const __workletsModuleProxy7 = globalThis.__workletsModuleProxy;
              return __workletsModuleProxy7.createSerializableRegExp(__remoteFunction.source, __remoteFunction.flags);
            } else {
              const _ArrayBuffer = ArrayBuffer;
              if (__remoteFunction instanceof ArrayBuffer) {
                const _globalThis15 = globalThis;
                const __workletsModuleProxy6 = globalThis.__workletsModuleProxy;
                return __workletsModuleProxy6.createSerializableArrayBuffer(__remoteFunction);
              } else {
                const _ArrayBuffer2 = ArrayBuffer;
                if (ArrayBuffer.isView(__remoteFunction)) {
                  const name = __remoteFunction.constructor.name;
                  if (closure_1_1.includes(name)) {
                    const _globalThis14 = globalThis;
                    const __workletsModuleProxy5 = globalThis.__workletsModuleProxy;
                    const tmp32 = "DataView" === name ? __remoteFunction.byteLength : __remoteFunction.length;
                    return __workletsModuleProxy5.createSerializableArrayBufferView(name, __remoteFunction.buffer, __remoteFunction.byteOffset, tmp32);
                  } else {
                    const _Error3 = Error;
                    const _HermesInternal = HermesInternal;
                    const self3 = this;
                    const self4 = this;
                    const error = new Error("[Worklets] Invalid array view name `" + name + "`.");
                    throw error;
                  }
                } else {
                  const _Map = Map;
                  if (__remoteFunction instanceof Map) {
                    const items1 = [];
                    const items2 = [];
                    const item1 = __remoteFunction.forEach((item, index) => {
                      items1.push(cloneRecursive(index));
                      items2.push(cloneRecursive(item));
                    });
                    const _globalThis13 = globalThis;
                    const __workletsModuleProxy4 = globalThis.__workletsModuleProxy;
                    return __workletsModuleProxy4.createSerializableMap(items1, items2);
                  } else {
                    const _Object = Object;
                    const _Object2 = Object;
                    if (Object.getPrototypeOf(__remoteFunction) !== Object.prototype) {
                      const _globalThis9 = globalThis;
                      let num = 0;
                      if (0 < globalThis.__customSerializationRegistry.length) {
                        const _globalThis10 = globalThis;
                        const pack = obj.pack;
                        while (!globalThis.__customSerializationRegistry[num].determine(__remoteFunction)) {
                          num = num + 1;
                        }
                        const _globalThis12 = globalThis;
                        const __workletsModuleProxy3 = globalThis.__workletsModuleProxy;
                        return __workletsModuleProxy3.createCustomSerializable(items(pack(__remoteFunction)), num);
                      }
                    }
                    const tmp13 = closure_1_2;
                    if (tmp13) {
                      if (__remoteFunction instanceof Promise) {
                        const _Error2 = Error;
                        const self = this;
                        const self2 = this;
                        const error1 = new Error("[Worklets] Promises cannot be converted to serializable.");
                        throw error1;
                      }
                    }
                    const _Object3 = Object;
                    const obj2 = Object.create(null);
                    const _Object4 = Object;
                    const entries = Object.entries(__remoteFunction);
                    const tmp18 = entries[Symbol.iterator]();
                    while (tmp18 !== undefined) {
                      let tmp23 = c2(tmp20, 2);
                      obj2[tmp23[0]] = items(tmp23[1]);
                      continue;
                    }
                    const _globalThis11 = globalThis;
                    const __workletsModuleProxy2 = globalThis.__workletsModuleProxy;
                    return __workletsModuleProxy2.createSerializableLEGACY(obj2, __remoteFunction);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return cloneRecursive(__remoteFunction);
}
const items6 = [tmp7, tmp8, tmp9];
makeShareableCloneOnUIRecursiveLEGACY.__closure = items6;
makeShareableCloneOnUIRecursiveLEGACY.__workletHash = 7876646859788;
makeShareableCloneOnUIRecursiveLEGACY.__initData = tmp6;
bundleModeNative = bundleModeNative_mod;
if (bundleModeNative.isBundleModeEnabled()) {
  makeShareableCloneOnUIRecursiveLEGACY = createSerializable;
}

export { isSerializableRef };
export { createSerializable };
export function createSerializableArray(arr) {
  let c0;
  let c1;
  const serializableMappingCache = require("serializableMappingFlag").serializableMappingCache;
  let value = serializableMappingCache.get(arr);
  if (value === require("serializableMappingFlag").serializableMappingFlag) {
    value = arr;
  }
  if (value == null) {
    _require = false;
    dependencyMap = 0;
    const mapped = arr.map(f84245);
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableArray = WorkletsModule.createSerializableArray(mapped, false);
    const serializableMappingCache2 = tmp(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(arr, serializableArray);
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableArray);
    value = serializableArray;
  }
  return value;
}
export function createSerializableObject(__stackDetails) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(__stackDetails);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = __stackDetails;
  }
  if (value == null) {
    const tmp5 = cloneObjectProperties(__stackDetails, false, 0);
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableObject = WorkletsModule.createSerializableObject(tmp5, false, __stackDetails);
    const serializableMappingCache2 = tmp(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(__stackDetails, serializableObject);
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableObject);
    value = serializableObject;
  }
  return value;
}
export function createSerializableMap(arr) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(arr);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = arr;
  }
  if (value == null) {
    value = cloneMap(arr);
  }
  return value;
}
export function createSerializableSet(__initData) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(__initData);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = __initData;
  }
  if (value == null) {
    value = cloneSet(__initData);
  }
  return value;
}
export function createSerializableError(arg0) {
  let message;
  let name;
  let stack;
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(arg0);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = arg0;
  }
  if (value == null) {
    ({ name, message, stack } = arg0);
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableError = WorkletsModule.createSerializableError(name, message, stack);
    const serializableMappingCache2 = tmp(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(arg0, serializableError);
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableError);
    value = serializableError;
  }
  return value;
}
export function createSerializableRegExp(source) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(source);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = source;
  }
  if (value == null) {
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableRegExp = WorkletsModule.createSerializableRegExp(source.source, source.flags);
    const serializableMappingCache2 = tmp(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(source, serializableRegExp);
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableRegExp);
    value = serializableRegExp;
  }
  return value;
}
export function createSerializableArrayBuffer(arg0) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(arg0);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = arg0;
  }
  if (value == null) {
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableArrayBuffer = WorkletsModule.createSerializableArrayBuffer(arg0);
    const serializableMappingCache2 = tmp(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(arg0, serializableArrayBuffer);
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableArrayBuffer);
    value = serializableArrayBuffer;
  }
  return value;
}
export function createSerializableArrayBufferView(byteLength) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(byteLength);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = byteLength;
  }
  if (value == null) {
    const name = byteLength.constructor.name;
    if (items4.includes(name)) {
      const tmp7 = "DataView" === name ? byteLength.byteLength : byteLength.length;
      const WorkletsModule = tmp(1709).WorkletsModule;
      const serializableArrayBufferView = WorkletsModule.createSerializableArrayBufferView(name, byteLength.buffer, byteLength.byteOffset, tmp7);
      const serializableMappingCache2 = tmp(1717).serializableMappingCache;
      const result = serializableMappingCache2.set(byteLength, serializableArrayBufferView);
      const serializableMappingCache3 = tmp(1717).serializableMappingCache;
      const result1 = serializableMappingCache3.set(serializableArrayBufferView);
      value = serializableArrayBufferView;
    } else {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("[Worklets] Invalid array view name `" + name + "`.");
      throw error;
    }
  }
  return value;
}
export function createSerializableHostObject(arg0) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(arg0);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = arg0;
  }
  if (value == null) {
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableHostObject = WorkletsModule.createSerializableHostObject(arg0);
    const serializableMappingCache2 = tmp(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(arg0, serializableHostObject);
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableHostObject);
    value = serializableHostObject;
  }
  return value;
}
export function createSerializableString(arg0) {
  const WorkletsModule = WorkletsModule21.WorkletsModule;
  const serializableString = WorkletsModule.createSerializableString(arg0);
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const result = serializableMappingCache.set(serializableString);
  return serializableString;
}
export function createSerializableNumber(arg0) {
  const WorkletsModule = WorkletsModule21.WorkletsModule;
  const serializableNumber = WorkletsModule.createSerializableNumber(arg0);
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const result = serializableMappingCache.set(serializableNumber);
  return serializableNumber;
}
export function createSerializableBoolean(arg0) {
  const WorkletsModule = WorkletsModule21.WorkletsModule;
  const serializableBoolean = WorkletsModule.createSerializableBoolean(arg0);
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const result = serializableMappingCache.set(serializableBoolean);
  return serializableBoolean;
}
export function createSerializableBigInt(arg0) {
  const WorkletsModule = WorkletsModule21.WorkletsModule;
  const serializableBigInt = WorkletsModule.createSerializableBigInt(arg0);
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const result = serializableMappingCache.set(serializableBigInt);
  return serializableBigInt;
}
export function createSerializableNull(arg0) {
  const WorkletsModule = WorkletsModule21.WorkletsModule;
  const serializableNull = WorkletsModule.createSerializableNull();
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const result = serializableMappingCache.set(serializableNull);
  return serializableNull;
}
export function createSerializableUndefined(arg0) {
  const WorkletsModule = WorkletsModule21.WorkletsModule;
  const serializableUndefined = WorkletsModule.createSerializableUndefined();
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const result = serializableMappingCache.set(serializableUndefined);
  return serializableUndefined;
}
export function createSerializableWorklet(__stackDetails) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(__stackDetails);
  const tmp = __stackDetails;
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = __stackDetails;
  }
  if (value == null) {
    if (__stackDetails.__stackDetails) {
      delete tmp["__stackDetails"];
    }
    const tmp6 = cloneObjectProperties(__stackDetails, false, 0);
    tmp6.__initData = createSerializable(__stackDetails.__initData, true, 1);
    const WorkletsModule = tmp2(1709).WorkletsModule;
    const serializableWorklet = WorkletsModule.createSerializableWorklet(tmp6, true);
    const serializableMappingCache2 = tmp2(1717).serializableMappingCache;
    const result = serializableMappingCache2.set(__stackDetails, serializableWorklet);
    const serializableMappingCache3 = tmp2(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableWorklet);
    value = serializableWorklet;
  }
  return value;
}
export function createSerializableRemoteFunction(__initData) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  let value = serializableMappingCache.get(__initData);
  if (value === serializableMappingFlag.serializableMappingFlag) {
    value = __initData;
  }
  let derefResult = value;
  if (WeakRef) {
    const _WeakRef = WeakRef;
    derefResult = value;
    if (value instanceof WeakRef) {
      derefResult = value.deref();
    }
  }
  if (derefResult == null) {
    const WorkletsModule = tmp(1709).WorkletsModule;
    const serializableNonWorkletFunction = WorkletsModule.createSerializableNonWorkletFunction(__initData, undefined);
    const _globalThis = globalThis;
    if (WeakRef) {
      const serializableMappingCache2 = tmp(1717).serializableMappingCache;
      const _WeakRef2 = WeakRef;
      const self = this;
      const self2 = this;
      set = serializableMappingCache2.set;
      const weakRef = new WeakRef(serializableNonWorkletFunction);
      const result = set(__initData, weakRef);
    }
    const serializableMappingCache3 = tmp(1717).serializableMappingCache;
    const result1 = serializableMappingCache3.set(serializableNonWorkletFunction);
    derefResult = serializableNonWorkletFunction;
  }
  return derefResult;
}
export function registerCustomSerializable(name) {
  let determine;
  let pack;
  let unpack;
  name = name.name;
  ({ determine, pack, unpack } = name);
  if (!closure_8.some((name) => name.name === name)) {
    closure_8.push(name);
    const WorkletsModule = WorkletsModule21.WorkletsModule;
    const registerCustomSerializable = WorkletsModule.registerCustomSerializable;
    const tmp5 = createSerializable(determine);
    const tmp6 = createSerializable(pack);
    const result = registerCustomSerializable(tmp5, tmp6, createSerializable(unpack), arr.length - 1);
  }
}
export const makeShareableCloneOnUIRecursive = makeShareableCloneOnUIRecursiveLEGACY;
export function makeShareable(__initData) {
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  if (serializableMappingCache.get(__initData)) {
    return __initData;
  } else {
    const tmp4 = createSerializable(__initData, true);
    const serializableMappingCache2 = serializableMappingFlag.serializableMappingCache;
    const result = serializableMappingCache2.set(__initData, tmp4);
    return __initData;
  }
}
