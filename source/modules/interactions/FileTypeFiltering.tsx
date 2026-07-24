// Module ID: 11310
// Function ID: 88000
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1921, 477, 1212, 566, 4470, 2]
// Exports: getFileTypeFiltering, useFileTypeFiltering

// Module 11310 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let require = arg1;
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
function getExtensionsForFileTypes(arr) {
  if (null != arr) {
    if (0 !== arr.length) {
      const found = arr.filter((str) => str.startsWith("."));
      const mapped = found.map((arr) => arr.slice(1));
      if (arr.includes("image")) {
        const push = mapped.push;
        const items = [];
        HermesBuiltin.arraySpread(closure_6, 0);
        HermesBuiltin.apply(items, mapped);
      }
      if (arr.includes("video")) {
        const push2 = mapped.push;
        const items1 = [];
        HermesBuiltin.arraySpread(closure_7, 0);
        HermesBuiltin.apply(items1, mapped);
      }
      if (arr.includes("audio")) {
        const push3 = mapped.push;
        const items2 = [];
        HermesBuiltin.arraySpread(closure_8, 0);
        HermesBuiltin.apply(items2, mapped);
      }
      const _Set = Set;
      const obj = require(477) /* set */;
      const set = new Set(mapped);
      const _Object = Object;
      const entries = Object.entries(require(477) /* set */.isIOS() ? closure_9 : closure_10);
      let num7 = 0;
      if (0 < entries.length) {
        do {
          let tmp34 = callback;
          let tmp35 = callback(entries[num7], 2);
          let tmp37 = _createForOfIteratorHelperLoose;
          let hasItem = set.has(tmp35[0]);
          let tmp38 = _createForOfIteratorHelperLoose(tmp35[1]);
          let iter = tmp38();
          let done = iter.done;
          if (hasItem) {
            let iter4 = iter;
            let tmp39 = iter;
            let tmp40 = tmp38;
            let tmp41 = tmp32;
            let tmp42 = tmp33;
            if (!done) {
              do {
                let addResult = set.add(iter4.value);
                let iter5 = tmp38();
                iter4 = iter5;
                tmp39 = iter5;
                tmp40 = tmp38;
                tmp41 = tmp32;
                tmp42 = tmp33;
                done2 = iter5.done;
              } while (!done2);
            }
          } else {
            let iter2 = iter;
            tmp39 = tmp30;
            tmp40 = tmp31;
            tmp41 = iter;
            tmp42 = tmp38;
            if (!done) {
              let deleteResult = set.delete(iter2.value);
              let iter3 = tmp38();
              iter2 = iter3;
              tmp39 = tmp30;
              tmp40 = tmp31;
              tmp41 = iter3;
              tmp42 = tmp38;
            }
          }
          num7 = num7 + 1;
          tmp30 = tmp39;
          tmp31 = tmp40;
          tmp32 = tmp41;
          tmp33 = tmp42;
        } while (num7 < entries.length);
      }
      const _Array = Array;
      return Array.from(set);
    }
  }
  return [];
}
function fileTypesFormattedStringHelper(arr, locale) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const obj = { type: "disjunction" };
      const prototype = ListFormat.prototype;
      const listFormat = new ListFormat(locale, obj);
      const items = [];
      if (arr.includes("image")) {
        const intl = require(1212) /* getSystemLocale */.intl;
        items.push(intl.string(require(1212) /* getSystemLocale */.t["0r2WwT"]));
      }
      if (arr.includes("video")) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        items.push(intl2.string(require(1212) /* getSystemLocale */.t["al+5qH"]));
      }
      if (arr.includes("audio")) {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        items.push(intl3.string(require(1212) /* getSystemLocale */.t.Kzll3E));
      }
      const push = items.push;
      const found = arr.filter((str) => str.startsWith("."));
      const items1 = [];
      HermesBuiltin.arraySpread(found.sort(), 0);
      HermesBuiltin.apply(items1, items);
      let formatResult = null;
      if (0 !== items.length) {
        formatResult = listFormat.format(items);
      }
      return formatResult;
    }
  }
  return null;
}
function useFileTypesFormattedString(fileTypes) {
  const _require = fileTypes;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.locale);
  const items1 = [fileTypes, stateFromStores];
  return React.useMemo(() => outer1_14(closure_0, stateFromStores), items1);
}
function validateFilenamesForExtensions(arr) {
  let closure_0 = arg1;
  return 0 === arg1.length || arr.every((arg0) => {
    let closure_0 = arg0;
    return closure_0.some((arg0) => {
      const formatted = closure_0.toLowerCase();
      return formatted.endsWith("." + arg0);
    });
  });
}
function showInvalidFileTypeAlertForTypes(types) {
  let obj = importDefault(4470);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.azO1Pe);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { types };
  obj.body = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["5U9LSo"], obj);
  obj.show(obj);
}
function areMediaFilesAllowed(arr) {
  return 0 === arr.length || arr.some((arg0) => {
    let hasItem = outer1_6.includes(arg0);
    if (!hasItem) {
      hasItem = outer1_7.includes(arg0);
    }
    return hasItem;
  });
}
let closure_6 = ["png", "gif", "jpg", "jpeg", "jfif", "webp", "avif"];
let closure_7 = ["mp4", "mov", "qt", "webm"];
let closure_8 = ["mp3", "m4a", "wav", "ogg", "opus", "flac"];
let closure_9 = { jpg: ["jpeg", "jfif", "heic", "heif"], mov: ["mp4", "qt"] };
let closure_10 = { jpg: ["jpeg", "jfif"], mp4: ["mov", "qt"] };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export { useFileTypesFormattedString };
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  const tmp = getExtensionsForFileTypes(fileTypes);
  const require = tmp;
  const tmp2 = fileTypesFormattedStringHelper(fileTypes, locale.locale);
  const importDefault = tmp2;
  return {
    allowedExtensions: tmp,
    typesFormattedString: tmp2,
    validateFilenames(arg0) {
      return outer1_16(arg0, closure_0);
    },
    showInvalidFileTypeAlert() {
      outer1_17(closure_1);
    },
    mediaFilesAllowed: areMediaFilesAllowed(tmp)
  };
};
export const useFileTypeFiltering = function useFileTypeFiltering(fileTypes) {
  let closure_0 = fileTypes;
  const items = [fileTypes];
  const memo = React.useMemo(() => outer1_13(closure_0), items);
  const tmp2 = useFileTypesFormattedString(fileTypes);
  const dependencyMap = tmp2;
  const items1 = [memo];
  const items2 = [tmp2];
  const callback = React.useCallback((arg0) => outer1_16(arg0, memo), items1);
  const items3 = [memo];
  const callback1 = React.useCallback(() => {
    outer1_17(closure_2);
  }, items2);
  return { allowedExtensions: memo, typesFormattedString: tmp2, validateFilenames: callback, showInvalidFileTypeAlert: callback1, mediaFilesAllowed: React.useMemo(() => outer1_18(memo), items3) };
};
