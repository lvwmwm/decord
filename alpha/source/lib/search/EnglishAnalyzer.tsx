// Module ID: 17387
// Function ID: 17388
// Name: EnglishAnalyzer
// Dependencies: [12, 17388, 17390, 2]
// Exports: analyze, createASTHighlighter

// Module 17387 (EnglishAnalyzer)
import _modDef12 from "module_12" /* 12 */;
import snowballStemmer from "snowballStemmer" /* 17388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

function stripPossessive(item) {
  return item.replace(/('|\u2019|\uFF07)(s|S)$/, "");
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
function shouldHighlight(item, set, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = lowercase(stripPossessive(item));
  if (isBlank(tmp)) {
    return false;
  } else if (isStopWord(tmp)) {
    return false;
  } else {
    const obj = snowballStemmer;
    const snowballStemResult = obj.snowballStem(tmp);
    if (flag) {
      const values = set.values();
      for (const item10025 of values) {
        if (snowballStemResult.includes(item10025)) {
          obj3.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    } else {
      return set.has(snowballStemResult);
    }
  }
}
function highlightAST(content, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (Array.isArray(content)) {
    const item = content.forEach((item) => {
      highlightAST(item, closure_0, closure_1);
      return item;
    });
  } else if ("list" === content.type) {
    const items = content.items;
    const item1 = items.forEach((item) => {
      highlightAST(item, closure_0, closure_1);
      return item;
    });
  } else {
    if (typeof content.content === "string") {
      if ("codeBlock" !== content.type) {
        const items1 = [];
        content = "";
        const str3 = content.content;
        const parts = str3.split(/(\W+)/g);
        const item2 = parts.forEach((content) => {
          if (shouldHighlight(content, closure_0, closure_1)) {
            if (content.length > 0) {
              const obj = { type: "text", content };
              items1.push(obj);
            }
            const obj2 = { type: "highlight", content };
            items1.push(obj2);
            content = "";
          } else {
            content = arr + content;
          }
        });
        if (items1.length > 0) {
          if (content.length > 0) {
            let obj = { type: "text", content };
            const arr = items1.push(obj);
          }
          if ("text" === content.type) {
            content.content = items1;
          } else {
            let obj2 = { type: "text", content: items1 };
            const items2 = [obj2];
            content.content = items2;
          }
        }
      }
    }
    if (null != content.content) {
      highlightAST(content.content, arg1, arg2);
    }
  }
  return content;
}
let set = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);
const result = size.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export const analyze = function analyze(str) {
  const tmp = _modDef12;
  const tmpResult = tmp(str.split(/\W+/));
  const mapped = tmpResult.map(stripPossessive);
  const rejectResult = mapped.reject(isBlank);
  const mapped1 = rejectResult.map(lowercase);
  const rejectResult1 = mapped1.reject(isStopWord);
  const iter = rejectResult1.map(snowballStemmer.snowballStem);
  return iter.value();
};
export { shouldHighlight };
export { highlightAST };
export const createASTHighlighter = function createASTHighlighter(str) {
  let closure_1;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  set = undefined;
  let tmp = flag;
  let tmp2 = set;
  let tmp3 = str.length >= flag(set[2]).SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH && str.length <= tmp(tmp2[2]).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  importDefault = tmp3;
  const tmp4 = require("module_12");
  const tmp4Result = tmp4(str.split(/\W+/));
  const mapped = tmp4Result.map(stripPossessive);
  const rejectResult = mapped.reject(isBlank);
  const mapped1 = rejectResult.map(lowercase);
  const rejectResult1 = mapped1.reject(isStopWord);
  const iter = rejectResult1.map(tmp(tmp2[1]).snowballStem);
  set = new Set(iter.value());
  return (arg0) => {
    let tmp3 = closure_1;
    const tmp = highlightAST;
    const tmp2 = set;
    if (closure_1) {
      tmp3 = flag;
    }
    tmp(arg0, tmp2, tmp3);
    return arg0;
  };
};
