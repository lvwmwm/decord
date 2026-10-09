// Module ID: 18197
// Function ID: 18198
// Name: KeywordFilterTriggerFields
// Dependencies: [19, 11403, 1085, 21, 558, 576, 1126, 18191, 2127, 6269, 2]

// Module 18197 (KeywordFilterTriggerFields)
import react2 from "react" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import TableRowGroup2 from "TableRowGroup" /* 6269 */;
import KeywordsRowDefault from "KeywordsRow" /* 18191 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11403 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: c3, MAX_KEYWORDS_PER_KEYWORD_FILTER: closure_4 } = Constants);
const HelpdeskArticles = Constants2.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function KeywordFilterTriggerFields(rule) {
  let allowList;
  let items;
  let keywordFilter;
  let obj4;
  let regexPatterns;
  let obj = react2;
  const cResult = obj.c(28);
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  ({ keywordFilter, regexPatterns, allowList } = rule.triggerMetadata);
  if (cResult[0] === onChangeRule) {
    let tmp4;
    let tmp7;
    let tmp6;
    let tmp10;
    if (cResult[1] === rule) {
      tmp4 = cResult[2];
    }
    dependencyMap = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(intl7.t["ue+tnb"]);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(intl7.t.Gm6G5x);
      cResult[3] = stringResult;
      cResult[4] = stringResult1;
      tmp7 = stringResult1;
      tmp6 = stringResult;
    } else {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp4) {
      const fn = function k(keywordFilter) {
        const obj = { keywordFilter };
        return closure_2(obj);
      };
      cResult[5] = tmp4;
      cResult[6] = fn;
      tmp10 = fn;
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] === keywordFilter) {
      let tmp11;
      let tmp17;
      let tmp16;
      if (cResult[8] === tmp10) {
        tmp11 = cResult[9];
      }
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(intl7.t["dnunm+"]);
        const intl4 = tmp(1126).intl;
        const format = intl4.format;
        let obj2 = { helpArticle: obj4.getArticleURL(HelpdeskArticles.GUILD_AUTOMOD_REGEX) };
        const prop = tmp(1126).t["PGC/AJ"];
        obj4 = HelpdeskUtilsDefault;
        const formatResult = format(prop, obj2);
        cResult[10] = stringResult2;
        cResult[11] = formatResult;
        tmp17 = formatResult;
        tmp16 = stringResult2;
      } else {
        tmp16 = cResult[10];
        tmp17 = cResult[11];
      }
      if (cResult[12] !== tmp4) {
        class L {
          constructor(regexPatterns) {
            const obj = { regexPatterns };
            return closure_2(obj);
          }
        }
        cResult[12] = tmp4;
        cResult[13] = L;
      } else {
        class L {
          constructor(regexPatterns) {
            const obj = { regexPatterns };
            return closure_2(obj);
          }
        }
      }
      if (cResult[14] === regexPatterns) {
        let tmp29;
        let tmp28;
        class L {
          constructor(regexPatterns) {
            const obj = { regexPatterns };
            return closure_2(obj);
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor(regexPatterns) {
              const obj = { regexPatterns };
              return closure_2(obj);
            }
          }
          const stringResult3 = obj6.string(intl7.t.lbE2Nm);
          const intl5 = tmp(1126).intl;
          const stringResult4 = intl5.string(intl7.t.qm7UZ8);
          cResult[17] = stringResult3;
          cResult[18] = stringResult4;
          tmp29 = stringResult4;
          tmp28 = stringResult3;
        } else {
          class L {
            constructor(regexPatterns) {
              const obj = { regexPatterns };
              return closure_2(obj);
            }
          }
          tmp29 = cResult[18];
        }
        if (cResult[19] !== tmp4) {
          class A {
            constructor(allowList) {
              const obj = { allowList };
              return closure_2(obj);
            }
          }
          cResult[19] = tmp4;
          cResult[20] = A;
        } else {
          class A {
            constructor(allowList) {
              const obj = { allowList };
              return closure_2(obj);
            }
          }
        }
        if (cResult[21] === allowList) {
          class A {
            constructor(allowList) {
              const obj = { allowList };
              return closure_2(obj);
            }
          }
          if (cResult[24] === tmp33) {
            class A {
              constructor(allowList) {
                const obj = { allowList };
                return closure_2(obj);
              }
            }
          }
          const obj3 = { hasIcons: false, children: items };
          items = [tmp11, tmp24, tmp33];
          cResult[24] = tmp33;
          cResult[25] = tmp11;
          cResult[26] = tmp24;
          cResult[27] = metroImportDefault(TableRowGroup2.TableRowGroup, obj3);
          const tmp40 = metroImportDefault(TableRowGroup2.TableRowGroup, obj3);
        }
        const obj5 = { label: tmp28, description: tmp29, type: "keywords", keywords: allowList, maxWordCount, onChangeKeywords: tmp32 };
        cResult[21] = allowList;
        cResult[22] = tmp32;
        cResult[23] = metroRequire(KeywordsRowDefault, obj5);
        const tmp37 = metroRequire(KeywordsRowDefault, obj5);
      }
      const obj7 = { label: tmp16, description: tmp17, type: "regex", keywords: regexPatterns, onChangeKeywords: tmp23 };
      cResult[14] = regexPatterns;
      cResult[15] = tmp23;
      cResult[16] = metroRequire(KeywordsRowDefault, obj7);
      const tmp27 = metroRequire(KeywordsRowDefault, obj7);
    }
    const obj8 = { label: tmp6, description: tmp7, type: "keywords", keywords: keywordFilter, maxWordCount: maxWordCount2, onChangeKeywords: tmp10 };
    const tmp15 = metroRequire(KeywordsRowDefault, obj8);
    cResult[7] = keywordFilter;
    cResult[8] = tmp10;
    cResult[9] = tmp15;
    tmp11 = tmp15;
  }
  function changeTriggerMetadata(arg0) {
    let obj2;
    const obj = { triggerMetadata: obj2 };
    const merged = Object.assign(rule);
    obj2 = {};
    const merged1 = Object.assign(rule.triggerMetadata);
    const merged2 = Object.assign(arg0);
    onChangeRule(obj);
  }
  cResult[0] = onChangeRule;
  cResult[1] = rule;
  cResult[2] = changeTriggerMetadata;
  tmp4 = changeTriggerMetadata;
}) : (function KeywordFilterTriggerFields(rule) {
  let allowList;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let items;
  let keywordFilter;
  let obj4;
  let obj5;
  let prop;
  let regexPatterns;
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  ({ keywordFilter, regexPatterns, allowList } = rule.triggerMetadata);
  let obj = { hasIcons: false, children: items };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  let obj2 = {
    label: intl.string(intl7.t["ue+tnb"]),
    description: intl2.string(intl7.t.Gm6G5x),
    type: "keywords",
    keywords: keywordFilter,
    maxWordCount: maxWordCount2,
    onChangeKeywords(keywordFilter) {
      let obj3;
      const obj = { keywordFilter };
      const obj2 = { triggerMetadata: obj3 };
      const merged = Object.assign(rule);
      obj3 = {};
      const merged1 = Object.assign(rule.triggerMetadata);
      const merged2 = Object.assign(obj);
      onChangeRule(obj2);
    }
  };
  const tmp = KeywordsRowDefault;
  intl = intl7.intl;
  intl2 = intl7.intl;
  items = [metroRequire(tmp, obj2), , ];
  let obj3 = {
    label: intl3.string(intl7.t["dnunm+"]),
    description: format(prop, obj4),
    type: "regex",
    keywords: regexPatterns,
    onChangeKeywords(regexPatterns) {
      let obj3;
      const obj = { regexPatterns };
      const obj2 = { triggerMetadata: obj3 };
      const merged = Object.assign(rule);
      obj3 = {};
      const merged1 = Object.assign(rule.triggerMetadata);
      const merged2 = Object.assign(obj);
      onChangeRule(obj2);
    }
  };
  const tmp2 = KeywordsRowDefault;
  intl3 = intl7.intl;
  const intl4 = intl7.intl;
  format = intl4.format;
  obj4 = { helpArticle: obj5.getArticleURL(HelpdeskArticles.GUILD_AUTOMOD_REGEX) };
  prop = intl7.t["PGC/AJ"];
  obj5 = HelpdeskUtilsDefault;
  items[1] = metroRequire(tmp2, obj3);
  const obj6 = {
    label: intl5.string(intl7.t.lbE2Nm),
    description: intl6.string(intl7.t.qm7UZ8),
    type: "keywords",
    keywords: allowList,
    maxWordCount,
    onChangeKeywords(allowList) {
      let obj3;
      const obj = { allowList };
      const obj2 = { triggerMetadata: obj3 };
      const merged = Object.assign(rule);
      obj3 = {};
      const merged1 = Object.assign(rule.triggerMetadata);
      const merged2 = Object.assign(obj);
      onChangeRule(obj2);
    }
  };
  const tmp4 = KeywordsRowDefault;
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = metroRequire(tmp4, obj6);
  return metroImportDefault(TableRowGroup, obj);
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordFilterTriggerFields.tsx");

export default tmp5;
