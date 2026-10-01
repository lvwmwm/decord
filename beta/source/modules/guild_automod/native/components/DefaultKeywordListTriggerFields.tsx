// Module ID: 17325
// Function ID: 17326
// Name: DefaultKeywordListTriggerFields
// Dependencies: [19, 11341, 21, 5999, 1115, 17326, 5916, 17327, 2]
// Exports: default

// Module 17325 (DefaultKeywordListTriggerFields)
import Constants from "Constants" /* 11341 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const maxWordCount = Constants.MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/DefaultKeywordListTriggerFields.tsx");

export default function DefaultKeywordListTriggerFields(rule) {
  let KEYWORD_PRESETS;
  let intl;
  let intl2;
  let intl3;
  let items;
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  const presets = rule.triggerMetadata.presets;
  let obj = { children: items };
  let obj2 = {
    title: intl.string(rule(presets[4]).t.CX5Yfc),
    hasIcons: false,
    children: KEYWORD_PRESETS.map((item) => {
      let headerText;
      let subtitleText;
      let closure_0 = item;
      let obj = rule(presets[5]);
      const keywordPresetInfo = obj.getKeywordPresetInfo(item);
      ({ headerText, subtitleText } = keywordPresetInfo);
      let obj2 = {
        label: headerText,
        subLabel: subtitleText,
        checked: presets.includes(item),
        onPress(arg0) {
          let found;
          let obj2;
          const filter = presets.filter;
          const tmp4 = arg0;
          if (tmp4) {
            const items = [];
            items[HermesBuiltin.arraySpread(items, filter((arg0) => arg0 !== closure_0), 0)] = tmp2;
            found = items;
          } else {
            found = filter((arg0) => arg0 !== closure_0);
          }
          const obj = { triggerMetadata: obj2 };
          const merged = Object.assign(rule);
          obj2 = { presets: found };
          const merged1 = Object.assign(rule.triggerMetadata);
          onChangeRule(obj);
        }
      };
      const TableCheckboxRow = rule(presets[6]).TableCheckboxRow;
      return closure_1_4(TableCheckboxRow, obj2, item);
    })
  };
  const TableRowGroup = rule(presets[3]).TableRowGroup;
  intl = rule(presets[4]).intl;
  KEYWORD_PRESETS = rule(presets[5]).KEYWORD_PRESETS;
  items = [closure_4(TableRowGroup, obj2), ];
  const obj3 = {
    label: intl2.string(rule(presets[4]).t.lbE2Nm),
    description: intl3.string(rule(presets[4]).t.qm7UZ8),
    type: "keywords",
    keywords: rule.triggerMetadata.allowList,
    maxWordCount,
    onChangeKeywords(allowList) {
      let obj2;
      const obj = { triggerMetadata: obj2 };
      const merged = Object.assign(rule);
      obj2 = { allowList };
      const merged1 = Object.assign(rule.triggerMetadata);
      return onChangeRule(obj);
    },
    start: true,
    end: true
  };
  const tmp = onChangeRule(presets[7]);
  intl2 = rule(presets[4]).intl;
  intl3 = rule(presets[4]).intl;
  items[1] = closure_4(tmp, obj3);
  return closure_6(closure_5, obj);
};
