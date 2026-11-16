// Module ID: 12241
// Function ID: 12242
// Name: lt
// Dependencies: [12158]

// Module 12241 (lt)
const require = globalThis.__r;

(() => {
  let tmp = exports;
  const ownPropertyNames = Object.getOwnPropertyNames(exports);
  let num = 0;
  if (0 < ownPropertyNames.length) {
    const _Object = Object;
    const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
    if (ownPropertyDescriptor) {
      if (ownPropertyDescriptor.get) {
        if (ownPropertyDescriptor.configurable) {
          let value;
          try {
            value = ownPropertyDescriptor.get();
          } catch (err) {
          }
          if (undefined !== value) {
            const _Object2 = Object;
            const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
            Object.defineProperty(exports, ownPropertyNames[num], obj);
          }
        }
      }
    }
    num = num + 1;
    tmp = tmp2;
  }
  const frozen = Object.freeze(tmp);
})();

export const lt = require("util")._lt;
export const lte = require("util")._lte;
export const gt = require("util")._gt;
export const gte = require("util")._gte;
export const positive = require("util")._positive;
export const negative = require("util")._negative;
export const nonpositive = require("util")._nonpositive;
export const nonnegative = require("util")._nonnegative;
export const multipleOf = require("util")._multipleOf;
export const maxSize = require("util")._maxSize;
export const minSize = require("util")._minSize;
export const size = require("util")._size;
export const maxLength = require("util")._maxLength;
export const minLength = require("util")._minLength;
export const length = require("util")._length;
export const regex = require("util")._regex;
export const lowercase = require("util")._lowercase;
export const uppercase = require("util")._uppercase;
export const includes = require("util")._includes;
export const startsWith = require("util")._startsWith;
export const endsWith = require("util")._endsWith;
export const property = require("util")._property;
export const properties = require("util")._properties;
export const mime = require("util")._mime;
export const overwrite = require("util")._overwrite;
export const normalize = require("util")._normalize;
export const trim = require("util")._trim;
export const toLowerCase = require("util")._toLowerCase;
export const toUpperCase = require("util")._toUpperCase;
export const slugify = require("util")._slugify;
