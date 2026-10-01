// Module ID: 13863
// Function ID: 13864
// Dependencies: []

// Module 13863
let hasOwnProperty;

function wrapperForImpl(arg0) {
  let tmp = null;
  if (arg0) {
    tmp = arg0[_window];
  }
  return tmp;
}
function implForWrapper(arg0) {
  let tmp = null;
  if (arg0) {
    tmp = arg0[SymbolResult1];
  }
  return tmp;
}
function isObject(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  return tmp;
}
function hasOwn(arg0, arg1) {
  hasOwnProperty = Object.prototype.hasOwnProperty;
  return hasOwnProperty.call(arg0, arg1);
}
function getSameObject(self, searchParams, fn) {
  if (!self[closure_2]) {
    const _Object = Object;
    self[closure_2] = Object.create(null);
  }
  if (!(searchParams in self[closure_2])) {
    self[closure_2][searchParams] = fn();
  }
  return self[closure_2][searchParams];
}
function tryWrapperForImpl(searchParams) {
  let tmp = null;
  if (searchParams) {
    tmp = searchParams[_window];
  }
  if (!tmp) {
    tmp = searchParams;
  }
  return tmp;
}
function tryImplForWrapper(arg0) {
  let tmp = null;
  if (arg0) {
    tmp = arg0[SymbolResult1];
  }
  if (!tmp) {
    tmp = arg0;
  }
  return tmp;
}
function isArrayBuffer(arg0) {
  try {
    get.call(arg0);
    return true;
  } catch (err) {
    return false;
  }
}
function isArrayIndexPropName(str) {
  if (typeof str !== "string") {
    return false;
  } else {
    const _Math = Math;
    const diff = Math.pow(2, 32) - 1;
    let tmp = tmp2 !== diff;
    if (str >>> 0 !== diff) {
      const _HermesInternal = HermesInternal;
      tmp = str === "" + tmp2;
    }
    return tmp;
  }
}
const SymbolResult = Symbol("wrapper");
const _window = SymbolResult;
const SymbolResult1 = Symbol("impl");
let closure_2 = Symbol("SameObject caches");
const items = [];
const forResult = Symbol.for("[webidl2js]  constructor registry");
const SymbolResult2 = Symbol("internal");
const prototypeOf = Object.getPrototypeOf(Object.getPrototypeOf(items[Symbol.iterator]()));
const get = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const SymbolResult3 = Symbol("supports property index");
const SymbolResult4 = Symbol("supported property indices");
const SymbolResult5 = Symbol("supports property name");
const SymbolResult6 = Symbol("supported property names");
const SymbolResult7 = Symbol("indexed property get");
const SymbolResult8 = Symbol("indexed property set new");
const SymbolResult9 = Symbol("indexed property set existing");
const SymbolResult10 = Symbol("named property get");
const SymbolResult11 = Symbol("named property set new");
const SymbolResult12 = Symbol("named property set existing");
({ isObject, hasOwn, wrapperSymbol: SymbolResult, implSymbol: SymbolResult1, getSameObject, ctorRegistrySymbol: forResult, wrapperForImpl, implForWrapper, tryWrapperForImpl, tryImplForWrapper, iterInternalSymbol: SymbolResult2, IteratorPrototype: prototypeOf, isArrayBuffer, isArrayIndexPropName, supportsPropertyIndex: SymbolResult3, supportedPropertyIndices: SymbolResult4, supportsPropertyName: SymbolResult5, supportedPropertyNames: SymbolResult6, indexedGet: SymbolResult7, indexedSetNew: SymbolResult8, indexedSetExisting: SymbolResult9, namedGet: SymbolResult10, namedSetNew: SymbolResult11, namedSetExisting: SymbolResult12, namedDelete: Symbol("named property delete") });

export default { isObject, hasOwn, wrapperSymbol: SymbolResult, implSymbol: SymbolResult1, getSameObject, ctorRegistrySymbol: forResult, wrapperForImpl, implForWrapper, tryWrapperForImpl, tryImplForWrapper, iterInternalSymbol: SymbolResult2, IteratorPrototype: prototypeOf, isArrayBuffer, isArrayIndexPropName, supportsPropertyIndex: SymbolResult3, supportedPropertyIndices: SymbolResult4, supportsPropertyName: SymbolResult5, supportedPropertyNames: SymbolResult6, indexedGet: SymbolResult7, indexedSetNew: SymbolResult8, indexedSetExisting: SymbolResult9, namedGet: SymbolResult10, namedSetNew: SymbolResult11, namedSetExisting: SymbolResult12, namedDelete: Symbol("named property delete") };
