// Module ID: 15897
// Function ID: 15898
// Dependencies: []
// Exports: getParsedType

// Module 15897
let hasOwnProperty;

let obj = {
  assertEqual: (arg0) => arg0,
  assertIs(arg0) {

  },
  assertNever(arg0) {
    const error = new Error();
    throw error;
  },
  arrayToEnum: (arg0) => {
    const obj = {};
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      obj[nextResult] = nextResult;
      continue;
    }
    return obj;
  },
  getValidEnumValues: (arg0) => {
    let closure_0 = arg0;
    const objectKeysResult = obj.objectKeys(arg0);
    const found = objectKeysResult.filter((item) => typeof closure_0[closure_0[item]] !== "number");
    obj = {};
    for (const item10012 of found) {
      obj[item10012] = arg0[item10012];
      continue;
    }
    return obj.objectValues(obj);
  },
  objectValues: (arg0) => {
    let closure_0 = arg0;
    const objectKeysResult = obj.objectKeys(arg0);
    return objectKeysResult.map((item) => closure_0[item]);
  },
  objectKeys: typeof Object.keys === "function" ? ((arg0) => Object.keys(arg0)) : ((obj) => {
    const items = [];
    for (const key10005 in obj) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(obj, key10005)) {
        continue;
      } else {
        let arr = items.push(key10005);
        continue;
      }
      continue;
    }
    return items;
  }),
  find: (arg0, fn) => {
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (fn(nextResult)) {
        iter.return();
        return nextResult;
      }
    }
  },
  isInteger: typeof Number.isInteger === "function" ? ((arg0) => Number.isInteger(arg0)) : ((result1) => {
    let isFiniteResult = typeof result1 === "number";
    if (typeof result1 === "number") {
      const _isFinite = isFinite;
      isFiniteResult = isFinite(result1);
    }
    if (isFiniteResult) {
      const _Math = Math;
      isFiniteResult = Math.floor(result1) === result1;
    }
    return isFiniteResult;
  }),
  joinValues(arr) {
    let str = arg1;
    if (arg1 === undefined) {
      str = " | ";
    }
    const mapped = arr.map((item) => {
      let combined = item;
      if (typeof item === "string") {
        const _HermesInternal = HermesInternal;
        combined = "'" + item + "'";
      }
      return combined;
    });
    return mapped.join(str);
  },
  jsonStringifyReplacer: (arg0, arg1) => {
    let str = arg1;
    if (typeof arg1 === "bigint") {
      str = arg1.toString();
    }
    return str;
  }
};
const obj2 = {
  mergeShapes: (arg0, arg1) => {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(arg1);
    return obj;
  }
};

export const util = obj;
export const objectUtil = obj2;
export const ZodParsedType = obj.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
export const getParsedType = (self) => {
  if ("undefined" === typeof self) {
    return exports.ZodParsedType.undefined;
  } else if ("string" === typeof self) {
    return exports.ZodParsedType.string;
  } else if ("number" === typeof self) {
    const _isNaN = isNaN;
    const ZodParsedType = exports.ZodParsedType;
    return isNaN(self) ? ZodParsedType.nan : ZodParsedType.number;
  } else if ("boolean" === typeof self) {
    return exports.ZodParsedType.boolean;
  } else if ("function" === typeof self) {
    return exports.ZodParsedType.function;
  } else if ("bigint" === typeof self) {
    return exports.ZodParsedType.bigint;
  } else if ("symbol" === typeof self) {
    return exports.ZodParsedType.symbol;
  } else if ("object" === typeof self) {
    let _null;
    const _Array = Array;
    if (Array.isArray(self)) {
      _null = exports.ZodParsedType.array;
    } else if (null === self) {
      _null = exports.ZodParsedType.null;
    } else {
      if (self.then) {
        if (typeof self.then === "function") {
          if (self.catch) {
            if (typeof self.catch === "function") {
              _null = exports.ZodParsedType.promise;
            }
          }
        }
      }
      const _Map = Map;
      if (typeof Map !== "undefined") {
        const _Map2 = Map;
        if (self instanceof Map) {
          _null = exports.ZodParsedType.map;
        }
      }
      const _Set = Set;
      if (typeof Set !== "undefined") {
        const _Set2 = Set;
        if (self instanceof Set) {
          _null = exports.ZodParsedType.set;
        }
      }
      const _Date = Date;
      if (typeof Date !== "undefined") {
        const _Date2 = Date;
        if (self instanceof Date) {
          _null = exports.ZodParsedType.date;
        }
      }
      _null = exports.ZodParsedType.object;
    }
    return _null;
  } else {
    return exports.ZodParsedType.unknown;
  }
};
