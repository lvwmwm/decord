// Module ID: 17547
// Function ID: 17548
// Name: TriggerFields
// Dependencies: [19, 21, 17533, 4862, 1115, 17548, 17549, 17553, 17557, 2]
// Exports: default

// Module 17547 (TriggerFields)
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17548 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17549 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17553 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17557 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(onValidityChange) {
  ({ rule, onChangeRule } = onValidityChange);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = tmp(1115).intl;
    obj2.children = intl.string(tmp(1115).t["1YgPj/"]);
    let tmp3 = jsx(tmp(4862).Text, { variant: "text-md/normal", color: "text-default", children: null });
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      const obj3 = { rule, onChangeRule, onValidityChange: onValidityChange.onValidityChange };
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule, onValidityChange: onValidityChange.onValidityChange });
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
            const tmpResult8 = tmp(17533);
          }
          tmpResult7 = tmp(17533);
        }
        tmpResult6 = tmp(17533);
      }
      tmpResult5 = tmp(17533);
    }
    tmpResult = tmp(17533);
  }
  return tmp3;
};
