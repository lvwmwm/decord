// Module ID: 15403
// Function ID: 117565
// Name: _createForOfIteratorHelperLoose
// Dependencies: [22, 15404, 15406, 2]
// Exports: createASTHighlighter

// Module 15403 (_createForOfIteratorHelperLoose)
import set from "MAX_MESSAGE_SEARCH_RESULTS_OFFSET";

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
  const tmp = importDefault(22);
  const mapped = importDefault(22)(str.split(/\W+/)).map(stripPossessive);
  const tmpResult = importDefault(22)(str.split(/\W+/));
  const mapped1 = mapped.reject(isBlank).map(lowercase);
  const rejectResult = mapped.reject(isBlank);
  const rejectResult1 = mapped1.reject(isStopWord);
  return mapped1.reject(isStopWord).map(require(15404) /* snowballStem */.snowballStem).value();
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
    const snowballStemResult = require(15404) /* snowballStem */.snowballStem(tmp);
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
    const obj = require(15404) /* snowballStem */;
  }
}
function highlightAST(content, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (Array.isArray(content)) {
    const item = content.forEach((arg0) => {
      outer1_12(arg0, closure_0, closure_1);
      return arg0;
    });
  } else if ("list" === content.type) {
    const items = content.items;
    const item1 = items.forEach((arg0) => {
      outer1_12(arg0, closure_0, closure_1);
      return arg0;
    });
  } else {
    if ("string" === typeof content.content) {
      if ("codeBlock" !== content.type) {
        const items1 = [];
        const parts = content.content.split(/(\W+)/g);
        const item2 = parts.forEach((content) => {
          let arr = closure_3;
          if (outer1_11(content, closure_0, closure_1)) {
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
          if (set.length > 0) {
            let obj = { type: "text", content: set };
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
let set = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);
const result = set.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export { analyze };
export { shouldHighlight };
export { highlightAST };
export const createASTHighlighter = function createASTHighlighter(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let c1;
  let set;
  let tmp = arg0.length >= flag(set[2]).SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH;
  if (tmp) {
    tmp = arg0.length <= flag(set[2]).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  }
  c1 = tmp;
  set = new Set(analyze(arg0));
  return (arg0) => {
    let tmp3 = c1;
    if (c1) {
      tmp3 = flag;
    }
    outer1_12(arg0, set, tmp3);
    return arg0;
  };
};
