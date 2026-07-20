// Module ID: 11264
// Function ID: 87662
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getFileTypeFiltering, useFileTypeFiltering

// Module 11264 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
      const obj = arg1(dependencyMap[3]);
      const set = new Set(mapped);
      const _Object = Object;
      const entries = Object.entries(arg1(dependencyMap[3]).isIOS() ? closure_9 : closure_10);
      let num7 = 0;
      if (0 < entries.length) {
        do {
          let tmp34 = closure_3;
          let tmp35 = closure_3(entries[num7], 2);
          let tmp37 = closure_11;
          let hasItem = set.has(tmp35[0]);
          let tmp38 = closure_11(tmp35[1]);
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
                let done2 = iter5.done;
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
          let tmp30 = tmp39;
          let tmp31 = tmp40;
          let tmp32 = tmp41;
          let tmp33 = tmp42;
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
        const intl = locale(dependencyMap[4]).intl;
        items.push(intl.string(locale(dependencyMap[4]).t.0r2WwT));
      }
      if (arr.includes("video")) {
        const intl2 = locale(dependencyMap[4]).intl;
        items.push(intl2.string(locale(dependencyMap[4]).t.al+5qH));
      }
      if (arr.includes("audio")) {
        const intl3 = locale(dependencyMap[4]).intl;
        items.push(intl3.string(locale(dependencyMap[4]).t.Kzll3E));
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
  const arg1 = fileTypes;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => locale.locale);
  const importDefault = stateFromStores;
  const items1 = [fileTypes, stateFromStores];
  return React.useMemo(() => callback(arg0, stateFromStores), items1);
}
function validateFilenamesForExtensions(arr) {
  return 0 === arg1.length || arr.every((arg0) => {
    const arg1 = arg0;
    return arg1.some((arg0) => {
      const formatted = arg0.toLowerCase();
      return formatted.endsWith("." + arg0);
    });
  });
}
function showInvalidFileTypeAlertForTypes(types) {
  let obj = importDefault(dependencyMap[6]);
  obj = {};
  const intl = arg1(dependencyMap[4]).intl;
  obj.title = intl.string(arg1(dependencyMap[4]).t.azO1Pe);
  const intl2 = arg1(dependencyMap[4]).intl;
  obj = { types };
  obj.body = intl2.formatToPlainString(arg1(dependencyMap[4]).t.5U9LSo, obj);
  obj.show(obj);
}
function areMediaFilesAllowed(arr) {
  return 0 === arr.length || arr.some((arg0) => {
    let hasItem = closure_6.includes(arg0);
    if (!hasItem) {
      hasItem = closure_7.includes(arg0);
    }
    return hasItem;
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = [];
let closure_7 = [90, 87, 83, "mkv"];
let closure_8 = [481036352, 712729690, 2095984960, 979252543, -919453646, 446676598];
let closure_9 = { jpg: [true, true, true, true], mov: [true, true] };
let closure_10 = { jpg: [null, null], mp4: ["Object", "String"] };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export { useFileTypesFormattedString };
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  const tmp = getExtensionsForFileTypes(fileTypes);
  const arg1 = tmp;
  const tmp2 = fileTypesFormattedStringHelper(fileTypes, locale.locale);
  const importDefault = tmp2;
  return {
    allowedExtensions: tmp,
    typesFormattedString: tmp2,
    validateFilenames(arg0) {
      return callback(arg0, tmp);
    },
    showInvalidFileTypeAlert() {
      callback2(tmp2);
    },
    mediaFilesAllowed: areMediaFilesAllowed(tmp)
  };
};
export const useFileTypeFiltering = function useFileTypeFiltering(fileTypes) {
  const arg1 = fileTypes;
  const items = [fileTypes];
  const memo = React.useMemo(() => callback(arg0), items);
  const importDefault = memo;
  const tmp2 = useFileTypesFormattedString(fileTypes);
  const dependencyMap = tmp2;
  const items1 = [memo];
  const items2 = [tmp2];
  const callback = React.useCallback((arg0) => callback2(arg0, memo), items1);
  const items3 = [memo];
  const callback1 = React.useCallback(() => {
    callback3(tmp2);
  }, items2);
  return { allowedExtensions: memo, typesFormattedString: tmp2, validateFilenames: callback, showInvalidFileTypeAlert: callback1, mediaFilesAllowed: React.useMemo(() => callback4(memo), items3) };
};
