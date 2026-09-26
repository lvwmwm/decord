// Module ID: 17962
// Function ID: 17963
// Name: TriggerFields
// Dependencies: [19, 21, 17948, 4784, 1115, 17963, 17964, 17968, 17972, 2]
// Exports: default

// Module 17962 (TriggerFields)
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17963 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17964 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17968 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17972 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(arg0) {
  ({ rule, onChangeRule } = arg0);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = tmp(1115).intl;
    obj2.children = intl.string(tmp(1115).t["1YgPj/"]);
    let tmp3 = jsx(tmp(4784).Text, { variant: "text-md/normal", color: "text-default", children: null });
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      const obj3 = { rule, onChangeRule };
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule });
    } else {
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        const obj4 = { rule, onChangeRule };
        tmp3 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
      } else {
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          const obj5 = { rule, onChangeRule };
          tmp3 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
        } else {
          if (tmpResult7.isRuleUserProfileFilter(rule)) {
            const obj6 = { rule, onChangeRule };
            tmp3 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
          } else {
            tmp3 = null;
            const tmpResult8 = tmp(17948);
          }
          tmpResult7 = tmp(17948);
        }
        tmpResult6 = tmp(17948);
      }
      tmpResult5 = tmp(17948);
    }
    tmpResult = tmp(17948);
  }
  return tmp3;
};
