// Module ID: 13184
// Function ID: 99659
// Name: wrapperForImpl
// Dependencies: []

// Module 13184 (wrapperForImpl)
function wrapperForImpl(getAll) {
  let tmp = null;
  if (getAll) {
    tmp = getAll[closure_0];
  }
  return tmp;
}
function implForWrapper(arg0) {
  let tmp = null;
  if (arg0) {
    tmp = arg0[closure_1];
  }
  return tmp;
}
const SymbolResult = Symbol("wrapper");
const SymbolResult1 = Symbol("impl");
let closure_2 = Symbol("SameObject caches");
const items = [];
const forResult = Symbol.for("[webidl2js]  constructor registry");
const prototypeOf = Object.getPrototypeOf(Object.getPrototypeOf(items[Symbol.iterator]()));
const get = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
const SymbolResult2 = Symbol("internal");
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

export default {
  isObject(arg0) {
    let tmp2 = "object" === tmp;
    if (tmp2) {
      tmp2 = null !== arg0;
    }
    if (!tmp2) {
      tmp2 = "function" === tmp;
    }
    return tmp2;
  },
  hasOwn(arg0, arg1) {
    return hasOwnProperty.call(arg0, arg1);
  },
  wrapperSymbol: SymbolResult,
  implSymbol: SymbolResult1,
  getSameObject(self, searchParams, arg2) {
    if (!self[closure_2]) {
      const _Object = Object;
      self[closure_2] = Object.create(null);
    }
    if (!(searchParams in self[closure_2])) {
      self[closure_2][searchParams] = arg2();
    }
    return self[closure_2][searchParams];
  },
  ctorRegistrySymbol: forResult,
  wrapperForImpl,
  implForWrapper,
  tryWrapperForImpl(getAll) {
    return wrapperForImpl(getAll) || getAll;
  },
  tryImplForWrapper(arg0) {
    return implForWrapper(arg0) || arg0;
  },
  iterInternalSymbol: SymbolResult2,
  IteratorPrototype: prototypeOf,
  isArrayBuffer(arg0) {
    get.call(arg0);
    return true;
  },
  isArrayIndexPropName(arg0) {
    if ("string" !== typeof arg0) {
      return false;
    } else {
      const _Math = Math;
      let tmp3 = tmp !== Math.pow(2, 32) - 1;
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        tmp3 = arg0 === "" + tmp;
      }
      return tmp3;
    }
  },
  supportsPropertyIndex: SymbolResult3,
  supportedPropertyIndices: SymbolResult4,
  supportsPropertyName: SymbolResult5,
  supportedPropertyNames: SymbolResult6,
  indexedGet: SymbolResult7,
  indexedSetNew: SymbolResult8,
  indexedSetExisting: SymbolResult9,
  namedGet: SymbolResult10,
  namedSetNew: SymbolResult11,
  namedSetExisting: Symbol("named property set existing"),
  namedDelete: Symbol("named property delete")
};
