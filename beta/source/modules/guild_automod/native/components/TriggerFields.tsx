// Module ID: 17960
// Function ID: 17961
// Name: TriggerFields
// Dependencies: [19, 21, 558, 568, 17946, 4754, 1119, 17961, 17962, 17966, 17970, 2]

// Module 17960 (TriggerFields)
import c from "c" /* 568 */;
import MentionSpamTriggerFieldsDefault from "MentionSpamTriggerFields" /* 17961 */;
import DefaultKeywordListTriggerFieldsDefault from "DefaultKeywordListTriggerFields" /* 17962 */;
import ApplicationTriggerFieldsDefault from "ApplicationTriggerFields" /* 17966 */;
import KeywordFilterTriggerFieldsDefault from "KeywordFilterTriggerFields" /* 17970 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/TriggerFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let stringResult = dependencyMap;
  const cResult = c.c(13);
  ({ rule, onChangeRule } = arg0);
  if (obj2.isRuleMLSpamFilter(rule)) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-md/normal", color: "text-default", children: null };
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t["1YgPj/"]);
      obj3.children = stringResult;
      const tmp28 = jsx(tmp(4754).Text, { variant: "text-md/normal", color: "text-default", children: null });
      cResult[0] = tmp28;
      let first = tmp28;
    } else {
      first = cResult[0];
    }
  } else {
    if (tmpResult.isRuleMentionSpamFilter(rule)) {
      if (cResult[1] === onChangeRule) {
      }
      const obj4 = { rule, onChangeRule };
      const tmp23 = jsx(MentionSpamTriggerFieldsDefault, { rule, onChangeRule });
      cResult[1] = onChangeRule;
      cResult[2] = rule;
      cResult[3] = tmp23;
    } else {
      if (tmpResult5.isRuleDefaultKeywordListFilter(rule)) {
        if (cResult[4] === onChangeRule) {
        }
        const obj5 = { rule, onChangeRule };
        const tmp18 = jsx(DefaultKeywordListTriggerFieldsDefault, { rule, onChangeRule });
        cResult[4] = onChangeRule;
        cResult[5] = rule;
        cResult[6] = tmp18;
      } else {
        if (tmpResult6.isRuleApplicationFilter(rule)) {
          if (cResult[7] === onChangeRule) {
          }
          const obj6 = { rule, onChangeRule };
          const tmp13 = jsx(ApplicationTriggerFieldsDefault, { rule, onChangeRule });
          cResult[7] = onChangeRule;
          cResult[8] = rule;
          cResult[9] = tmp13;
        } else {
          if (!tmpResult7.isRuleUserProfileFilter(rule)) {
            if (!tmpResult8.isRuleKeywordFilter(rule)) {
              return null;
            }
            tmpResult8 = tmp(17946);
          }
          if (cResult[10] === onChangeRule) {
          }
          const obj7 = { rule, onChangeRule };
          const tmp8 = jsx(KeywordFilterTriggerFieldsDefault, { rule, onChangeRule });
          cResult[10] = onChangeRule;
          cResult[11] = rule;
          cResult[12] = tmp8;
          tmpResult7 = tmp(17946);
        }
        tmpResult6 = tmp(17946);
      }
      tmpResult5 = tmp(17946);
    }
    tmpResult = tmp(17946);
  }
}) : ((arg0) => {
  ({ rule, onChangeRule } = arg0);
  if (obj.isRuleMLSpamFilter(rule)) {
    const obj2 = { variant: "text-md/normal", color: "text-default", children: null };
    const intl = tmp(1119).intl;
    obj2.children = intl.string(tmp(1119).t["1YgPj/"]);
    let tmp3 = jsx(tmp(4754).Text, { variant: "text-md/normal", color: "text-default", children: null });
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
            const tmpResult8 = tmp(17946);
          }
          tmpResult7 = tmp(17946);
        }
        tmpResult6 = tmp(17946);
      }
      tmpResult5 = tmp(17946);
    }
    tmpResult = tmp(17946);
  }
  return tmp3;
});
