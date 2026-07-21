// Module ID: 10947
// Function ID: 85123
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getBestMatches, getEntries, sortEntries

// Module 10947 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function getExperimentDateFromId(arg0) {
  const match = regex.exec(arg0);
  let tmp2 = null;
  if (null != match) {
    tmp2 = match[1];
  }
  return tmp2;
}
function matchesDeep(value, str) {
  if (Array.isArray(value)) {
    const tmp5 = _createForOfIteratorHelperLoose(value);
    let iter = tmp5();
    if (!iter.done) {
      while (!matchesDeep(iter.value, str)) {
        let iter2 = tmp5();
        iter = iter2;
      }
      return true;
    }
  } else {
    if ("object" === typeof value) {
      if (null !== value) {
        const _Object = Object;
        const values = Object.values(value);
        let num = 0;
        if (0 < values.length) {
          while (!matchesDeep(values[num], str)) {
            num = num + 1;
          }
          return true;
        }
      }
    }
    if ("string" === typeof value) {
      const formatted = value.toLowerCase();
      if (formatted.includes(str.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
}
let closure_2 = /^(\d{4}-\d{1,2})/;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsExperimentsUtils.tsx");

export { getExperimentDateFromId };
export const getEntries = function getEntries(arg0) {
  return Array.from(Object.entries(arg0)).map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    return { id, experiment };
  });
};
export { matchesDeep };
export const sortEntries = function sortEntries(entries, memo1) {
  const importDefault = memo1;
  const substr = entries.slice();
  return substr.sort((id, id2) => {
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    if (null != id2[id]) {
      let id1;
      if (null != id2) {
        id1 = id2.id;
      }
      if (null == tmp3[id1]) {
        return -1;
      }
      const tmp3 = id2;
    }
    id2 = undefined;
    if (null != id) {
      id2 = id.id;
    }
    if (null == id2[id2]) {
      let id3;
      if (null != id2) {
        id3 = id2.id;
      }
      if (null != tmp7[id3]) {
        return 1;
      }
      const tmp7 = id2;
    }
    const tmp9 = callback(id.id);
    const obj = callback(id2.id);
    if (null != tmp9) {
      if (null != obj) {
        const localeCompareResult = obj.localeCompare(tmp9);
        if (0 !== localeCompareResult) {
          return localeCompareResult;
        }
      }
    }
    const title = id.experiment.title;
    return title.localeCompare(id2.experiment.title);
  });
};
export const getBestMatches = function getBestMatches(arg0, str) {
  let iter4;
  const parts = str.split(/\s+/g);
  const found = parts.filter((arg0) => "" !== arg0);
  if (0 === found.length) {
    return arg0;
  } else {
    const items = [];
    const tmp10 = _createForOfIteratorHelperLoose(arg0);
    let iter5 = tmp10();
    if (!iter5.done) {
      do {
        let value = iter5.value;
        let tmp = closure_3;
        let tmp2 = closure_3(found);
        let iter = tmp2();
        let iter2 = iter;
        let num = 0;
        let num2 = 0;
        if (!iter.done) {
          do {
            let tmp3 = closure_6;
            let sum = num;
            if (closure_6(value, iter2.value)) {
              sum = num + 1;
            }
            let iter3 = tmp2();
            num = sum;
            iter2 = iter3;
            num2 = sum;
          } while (!iter3.done);
        }
        if (0 !== num2) {
          if (null == items[num2]) {
            items[num2] = [];
          }
          let arr3 = items[num2];
          let arr = arr3.push(value);
        }
        iter4 = tmp10();
        iter5 = iter4;
      } while (!iter4.done);
    }
    const found1 = items.filter((arg0) => undefined !== arg0);
    return importDefault(dependencyMap[0])(found1.reverse());
  }
};
