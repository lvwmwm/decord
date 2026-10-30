// Module ID: 18711
// Function ID: 18712
// Name: EnglishAnalyzer
// Dependencies: [12, 18712, 18714, 2]
// Exports: analyze, createASTHighlighter

// Module 18711 (EnglishAnalyzer)
import _modDef12 from "module_12" /* 12 */;
import snowballStemmer from "snowballStemmer" /* 18712 */;
import Search from "Search" /* 18714 */;
import size from "module_2" /* 2 */;

function stripPossessive(item10009) {
  return item10009.replace(/('|\u2019|\uFF07)(s|S)$/, "");
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
function shouldHighlight(item10009, set, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = lowercase(stripPossessive(item10009));
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
function highlightAST(content, c0, c1) {
  let closure_0 = c0;
  let closure_1 = c1;
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
        const obj = { words: c0, supportPartialMatches: c1 };
        const arr = splitHighlights(content.content, obj);
        if (null != arr) {
          const mapped = arr.map((text) => {
            let type = "text";
            const content = text.text;
            if (text.highlight) {
              type = "highlight";
            }
            return { type, content };
          });
          if ("text" === content.type) {
            content.content = mapped;
          } else {
            const items1 = [{ type: "text", content: mapped }];
            const obj2 = { type: "text", content: mapped };
            content.content = items1;
          }
        }
      }
    }
    if (null != content.content) {
      highlightAST(content.content, c0, c1);
    }
  }
  return content;
}
function createHighlightMatcher(str, flag) {
  let iter;
  if (flag === undefined) {
    flag = false;
  }
  let tmp3 = str.length >= Search.SEARCH_PARTIAL_NAME_MATCH_MIN_QUERY_LENGTH && str.length <= tmp(18714).SEARCH_PARTIAL_NAME_MATCH_MAX_QUERY_LENGTH;
  const obj = { words: new Set(iter.value()), supportPartialMatches: tmp3 };
  const tmp4 = _modDef12;
  const tmp4Result = tmp4(str.split(/\W+/));
  const mapped = tmp4Result.map(stripPossessive);
  const rejectResult = mapped.reject(isBlank);
  const mapped1 = rejectResult.map(lowercase);
  const rejectResult1 = mapped1.reject(isStopWord);
  iter = rejectResult1.map(snowballStemmer.snowballStem);
  new Set(iter.value());
  if (tmp3) {
    tmp3 = flag;
  }
  return obj;
}
function splitHighlights(content, words) {
  words = words.words;
  if (0 === words.size) {
    return null;
  } else {
    const items = [];
    let str = "";
    const parts = content.split(/(\W+)/g);
    for (const item10009 of parts) {
      let tmp3 = item10009;
      if (shouldHighlight(item10009, words, tmp)) {
        if (``.length > 0) {
          let obj = { text: str, highlight: false };
          let arr = items.push(obj);
        }
        let obj2 = { text: tmp3, highlight: true };
        let arr4 = items.push(obj2);
        str = "";
      } else {
        str = `${tmp3}`;
      }
      continue;
    }
    let tmp11 = null;
    if (0 !== items.length) {
      tmp11 = items;
      if (str.length > 0) {
        const obj3 = { text: str, highlight: false };
        items.push(obj3);
        tmp11 = items;
      }
    }
    return tmp11;
  }
}
const set = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);
const result = size.fileFinishedImporting("lib/search/EnglishAnalyzer.tsx");

export function analyze(str) {
  const tmp = _modDef12;
  const tmpResult = tmp(str.split(/\W+/));
  const mapped = tmpResult.map(stripPossessive);
  const rejectResult = mapped.reject(isBlank);
  const mapped1 = rejectResult.map(lowercase);
  const rejectResult1 = mapped1.reject(isStopWord);
  const iter = rejectResult1.map(snowballStemmer.snowballStem);
  return iter.value();
}
export { shouldHighlight };
export { highlightAST };
export { createHighlightMatcher };
export { splitHighlights };
export function createASTHighlighter(arg0, flag) {
  let c0;
  let c1;
  if (flag === undefined) {
    flag = false;
  }
  c0 = undefined;
  c1 = undefined;
  ({ words: c0, supportPartialMatches: c1 } = createHighlightMatcher(arg0, flag));
  const tmp = createHighlightMatcher(arg0, flag);
  return (content) => {
    highlightAST(content, c0, c1);
    return content;
  };
}
