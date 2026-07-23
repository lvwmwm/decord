// Module ID: 4136
// Function ID: 34386
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4137, 2]
// Exports: remapTypographyVariant

// Module 4136 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Text/typographyVariantRemap.tsx");

export const remapTypographyVariant = function remapTypographyVariant(enabledExperiments, variant, arg2) {
  let value;
  const tmp = _createForOfIteratorHelperLoose(require(4137) /* map */.TYPOGRAPHY_EXPERIMENT_REMAPS);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      let tmp2 = callback;
      let tmp3 = callback(iter2.value, 2);
      let tmp4 = tmp3[1];
      if (enabledExperiments.includes(tmp3[0])) {
        value = undefined;
        if (arg2) {
          let heading = tmp4.heading;
          value = heading.get(variant);
        }
        if (null == value) {
          let text = tmp4.text;
          value = text.get(variant);
        }
        let tmp7 = value;
        let tmp8 = value;
        if (null != value) {
          break;
        }
      }
      let iter3 = tmp();
      iter2 = iter3;
    }
    return value;
  }
  return variant;
};
