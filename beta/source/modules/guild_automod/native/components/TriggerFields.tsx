// Module ID: 17325
// Function ID: 17326
// Name: TriggerFields
// Dependencies: [19, 21, 558, 576, 17311, 4833, 1127, 17326, 17327, 17331, 17335, 2]

// Module 17325 (TriggerFields)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17311 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17326 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17327 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17331 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17335 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onChangeRule;
  let onValidityChange;
  let rule;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(14);
  ({ rule, onChangeRule, onValidityChange } = arg0);
  const obj2 = AutomodRuleUtils;
  if (obj2.isRuleMLSpamFilter(rule)) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const Text = tmp(4833).Text;
      const intl = tmp(1127).intl;
      const tmp24 = <Text variant="text-md/normal" color="text-default">{intl.string(intl2.t["1YgPj/"])}</Text>;
      cResult[0] = tmp24;
      first = tmp24;
    } else {
      first = cResult[0];
    }
    tmp4 = first;
  } else {
    const tmpResult = AutomodRuleUtils;
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      if (cResult[1] === onChangeRule) {
        if (cResult[2] === onValidityChange) {
          let tmp17;
          if (cResult[3] === rule) {
            tmp17 = cResult[4];
          }
          tmp4 = tmp17;
        }
      }
      const tmp20 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule, onValidityChange });
      cResult[1] = onChangeRule;
      cResult[2] = onValidityChange;
      cResult[3] = rule;
      cResult[4] = tmp20;
      tmp17 = tmp20;
    } else {
      const tmpResult5 = AutomodRuleUtils;
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        if (cResult[5] === onChangeRule) {
          let tmp13;
          if (cResult[6] === rule) {
            tmp13 = cResult[7];
          }
          tmp4 = tmp13;
        }
        const tmp16 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
        cResult[5] = onChangeRule;
        cResult[6] = rule;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      } else {
        const tmpResult6 = AutomodRuleUtils;
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          if (cResult[8] === onChangeRule) {
            let tmp9;
            if (cResult[9] === rule) {
              tmp9 = cResult[10];
            }
            tmp4 = tmp9;
          }
          const tmp12 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
          cResult[8] = onChangeRule;
          cResult[9] = rule;
          cResult[10] = tmp12;
          tmp9 = tmp12;
        } else {
          const tmpResult7 = AutomodRuleUtils;
          if (tmpResult7.isRuleUserProfileFilter(rule)) {
            if (cResult[11] === onChangeRule) {
              let tmp5;
              if (cResult[12] === rule) {
                tmp5 = cResult[13];
              }
              tmp4 = tmp5;
            }
            const tmp8 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
            cResult[11] = onChangeRule;
            cResult[12] = rule;
            cResult[13] = tmp8;
            tmp5 = tmp8;
          } else {
            tmp4 = null;
            AutomodRuleUtils;
          }
        }
      }
    }
  }
  return tmp4;
}) : ((onValidityChange) => {
  let onChangeRule;
  let rule;
  let tmp3;
  ({ rule, onChangeRule } = onValidityChange);
  onValidityChange = onValidityChange.onValidityChange;
  const obj = AutomodRuleUtils;
  if (obj.isRuleMLSpamFilter(rule)) {
    const Text = tmp(4833).Text;
    const intl = tmp(1127).intl;
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
});
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default tmp3;
