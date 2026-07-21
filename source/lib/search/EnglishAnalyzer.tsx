// Module ID: 15278
// Function ID: 115348
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: createASTHighlighter

// Module 15278 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function stripPossessive(str) {
  return str.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function lowercase(str) {
  return str.toLowerCase();
}
function isStopWord(arg0) {
  return set.has(arg0);
}
function isBlank(arg0) {
  return 0 === arg0.length;
}
function analyze(str) {
  const tmp = importDefault(dependencyMap[0]);
  const mapped = importDefault(dependencyMap[0])(str.split(/\W+/)).map(stripPossessive);
  const tmpResult = importDefault(dependencyMap[0])(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  return mapped1.reject(isStopWord).map(require(dependencyMap[1]).snowballStem).value();
}
function shouldHighlight(arg0, set) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = lowercase(stripPossessive(arg0));
  if (isBlank(tmp)) {
    return false;
  } else if (isStopWord(tmp)) {
    return false;
  } else {
    const snowballStemResult = require(dependencyMap[1]).snowballStem(tmp);
    if (flag) {
      const tmp6 = _createForOfIteratorHelperLoose(set.values());
      let iter = tmp6();
      if (!iter.done) {
        while (!snowballStemResult.includes(iter.value)) {
          let iter2 = tmp6();
          iter = iter2;
        }
        return true;
      }
      return false;
    } else {
      return set.has(snowballStemResult);
    }
    const obj = require(dependencyMap[1]);
  }
}
function highlightAST(content, arg1, arg2) {
  const require = arg1;
  const importDefault = arg2;
  if (Array.isArray(content)) {
    const item = content.forEach((arg0) => {
      callback2(arg0, arg1, arg2);
      return arg0;
    });
  } else if ("list" === content.type) {
    const items = content.items;
    const item1 = items.forEach((arg0) => {
      callback2(arg0, arg1, arg2);
      return arg0;
    });
  } else {
    if ("string" === typeof content.content) {
      if ("codeBlock" !== content.type) {
        const items1 = [];
        const dependencyMap = items1;
        const parts = content.content.split(/(\W+)/g);
        const item2 = parts.forEach((content) => {
          let arr = closure_3;
          if (callback(content, arg1, arg2)) {
            if (arr.length > 0) {
              let obj = { type: "text", content: closure_3 };
              arr = items1.push(obj);
            }
            obj = { type: "highlight", content };
            arr = items1.push(obj);
            closure_3 = "";
          } else {
            closure_3 = arr + content;
          }
        });
        if (items1.length > 0) {
          if (length.length > 0) {
            let obj = { type: "text", content: length };
            items1.push(obj);
          }
          if ("text" === content.type) {
            content.content = items1;
          } else {
            obj = { type: "text", content: items1 };
            const items2 = [obj];
            content.content = items2;
          }
        }
        const str4 = content.content;
      }
    }
    if (null != content.content) {
      highlightAST(content.content, arg1, arg2);
    }
  }
  return content;
}
const set = new Set([]);
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export { analyze };
export { shouldHighlight };
export { highlightAST };
export const createASTHighlighter = function createASTHighlighter(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const require = flag;
  let importDefault;
  let dependencyMap;
  let tmp = arg0.length >= require(dependencyMap[2]).SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
  if (tmp) {
    tmp = arg0.length <= require(dependencyMap[2]).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  }
  importDefault = tmp;
  dependencyMap = new Set(analyze(arg0));
  return (arg0) => {
    let tmp3 = tmp;
    if (closure_12) {
      tmp3 = flag;
    }
    closure_12(arg0, set, tmp3);
    return arg0;
  };
};
