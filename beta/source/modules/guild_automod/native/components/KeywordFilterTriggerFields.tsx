// Module ID: 17333
// Function ID: 17334
// Name: KeywordFilterTriggerFields
// Dependencies: [19, 11341, 1074, 21, 5999, 17327, 1115, 2111, 2]
// Exports: default

// Module 17333 (KeywordFilterTriggerFields)
import Constants2 from "Constants" /* 1074 */;
import intl7 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import KeywordsRowDefault from "KeywordsRow" /* 17327 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11341 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE: c3, MAX_KEYWORDS_PER_KEYWORD_FILTER: closure_4 } = Constants);
const HelpdeskArticles = Constants2.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/KeywordFilterTriggerFields.tsx");

export default function KeywordFilterTriggerFields(rule) {
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
};
