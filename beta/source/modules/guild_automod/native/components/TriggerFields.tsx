// Module ID: 17323
// Function ID: 17324
// Name: TriggerFields
// Dependencies: [19, 21, 17309, 4832, 1115, 17324, 17325, 17329, 17333, 2]
// Exports: default

// Module 17323 (TriggerFields)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17309 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17324 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17325 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17329 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17333 */;
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
    const Text = tmp(4832).Text;
    const intl = tmp(1115).intl;
    tmp3 = <Text variant="text-md/normal" color="text-default">{intl.string(intl2.t["1YgPj/"])}</Text>;
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
