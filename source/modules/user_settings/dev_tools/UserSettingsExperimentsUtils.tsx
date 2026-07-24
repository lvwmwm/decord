// Module ID: 10985
// Function ID: 85385
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4291, 2]
// Exports: getBestMatches, getEntries, sortEntries

// Module 10985 (_createForOfIteratorHelperLoose)
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
function getExperimentDateFromId(arg0) {
  const match = regex.exec(arg0);
  let tmp2 = null;
  if (null != match) {
    tmp2 = match[1];
  }
  return tmp2;
}
function matchesDeep(value, value2) {
  if (Array.isArray(value)) {
    const tmp5 = _createForOfIteratorHelperLoose(value);
    let iter = tmp5();
    if (!iter.done) {
      while (!matchesDeep(iter.value, value2)) {
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
          while (!matchesDeep(values[num], value2)) {
            num = num + 1;
          }
          return true;
        }
      }
    }
    if ("string" === typeof value) {
      const formatted = value.toLowerCase();
      if (formatted.includes(value2.toLowerCase())) {
        return true;
      }
    }
  }
  return false;
}
const re2 = /^(\d{4}-\d{1,2})/;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsExperimentsUtils.tsx");

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
  let closure_0 = memo1;
  const substr = entries.slice();
  return substr.sort((id, id2) => {
    id = undefined;
    if (null != id) {
      id = id.id;
    }
    if (null != closure_0[id]) {
      let id1;
      if (null != id2) {
        id1 = id2.id;
      }
      if (null == tmp3[id1]) {
        return -1;
      }
      tmp3 = closure_0;
    }
    id2 = undefined;
    if (null != id) {
      id2 = id.id;
    }
    if (null == closure_0[id2]) {
      let id3;
      if (null != id2) {
        id3 = id2.id;
      }
      if (null != tmp7[id3]) {
        return 1;
      }
      tmp7 = closure_0;
    }
    const tmp9 = outer1_5(id.id);
    const obj = outer1_5(id2.id);
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
        let tmp = _createForOfIteratorHelperLoose;
        let tmp2 = _createForOfIteratorHelperLoose(found);
        let iter = tmp2();
        let iter2 = iter;
        let num = 0;
        let num2 = 0;
        if (!iter.done) {
          do {
            let tmp3 = matchesDeep;
            let sum = num;
            if (matchesDeep(value, iter2.value)) {
              sum = num + 1;
            }
            iter3 = tmp2();
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
    return importDefault(4291)(found1.reverse());
  }
};
