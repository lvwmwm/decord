// Module ID: 19877
// Function ID: 19878
// Name: TriggerFields
// Dependencies: [19, 21, 19861, 5603, 1112, 19878, 19879, 19883, 19887, 2]
// Exports: default

// Module 19877 (TriggerFields)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 19861 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 19878 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 19879 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 19883 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 19887 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default function TriggerFields(onValidityChange) {
  let onChangeRule;
  let rule;
  let tmp3;
  ({ rule, onChangeRule } = onValidityChange);
  onValidityChange = onValidityChange.onValidityChange;
  const obj = AutomodRuleUtils;
  if (obj.isRuleMLSpamFilter(rule)) {
    const Text = tmp(5603).Text;
    const intl = tmp(1112).intl;
    tmp3 = <Text variant="body-md/normal" color="text-default">{intl.string(intl2.t["1YgPj/"])}</Text>;
  } else {
    const tmpResult = AutomodRuleUtils;
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      tmp3 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule, onValidityChange });
    } else {
      const tmpResult5 = AutomodRuleUtils;
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        tmp3 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
      } else {
        const tmpResult6 = AutomodRuleUtils;
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          tmp3 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
        } else {
          const tmpResult7 = AutomodRuleUtils;
          if (tmpResult7.isRuleUserProfileFilter(rule)) {
            tmp3 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
          } else {
            tmp3 = null;
            AutomodRuleUtils;
          }
        }
      }
    }
  }
  return tmp3;
};
