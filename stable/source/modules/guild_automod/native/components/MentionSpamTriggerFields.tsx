// Module ID: 17326
// Function ID: 17327
// Name: MentionSpamTriggerFields
// Dependencies: [32, 19, 17, 11216, 21, 4837, 558, 576, 12226, 1127, 17311, 4833, 6023, 5916, 5913, 5997, 2]

// Module 17326 (MentionSpamTriggerFields)
import react_native from "react-native" /* 17 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17311 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 11216 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let rule;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((rule) => {
  let first;
  let intl3;
  let intl5;
  let intl6;
  let items;
  let mentionRaidProtectionEnabled;
  let mentionTotalLimit;
  let obj4;
  let obj8;
  let onChangeRule;
  let tmp9;
  let obj = rule(onChangeRule[7]);
  const cResult = obj.c(25);
  rule = rule.rule;
  onChangeRule = rule.onChangeRule;
  const onValidityChange = rule.onValidityChange;
  const tmp4 = closure_9();
  ({ mentionRaidProtectionEnabled, mentionTotalLimit } = rule.triggerMetadata);
  let obj2 = rule(onChangeRule[8]);
  const isMentionRaidExperimentEnabled = obj2.useIsMentionRaidExperimentEnabled(rule.guildId, false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[9]).intl;
    const stringResult = intl.string(rule(onChangeRule[9]).t["s/26oQ"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp8 = onValidityChange(react.useState(true), 2);
  [tmp9, react] = tmp8;
  if (cResult[1] === onChangeRule) {
    if (cResult[2] === onValidityChange) {
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp18;
      if (cResult[3] === rule) {
        tmp10 = cResult[4];
      }
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[9]).intl;
        const stringResult1 = intl2.string(rule(onChangeRule[9]).t.IGfuTa);
        cResult[5] = stringResult1;
        tmp11 = stringResult1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp9) {
        let tmp14;
        if (!tmp9) {
          let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl3.formatToPlainString(rule(onChangeRule[9]).t["8Y5zsp"], obj4) };
          const Text = tmp(tmp2[11]).Text;
          intl3 = tmp(tmp2[9]).intl;
          obj4 = { minimum, maximum };
          tmp14 = closure_7(Text, obj3);
        }
        cResult[6] = tmp9;
        cResult[7] = tmp14;
        tmp13 = tmp14;
      } else {
        tmp13 = cResult[7];
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(tmp2[9]).intl;
        const stringResult2 = intl4.string(rule(onChangeRule[9]).t["8uW4/N"]);
        cResult[8] = stringResult2;
        tmp18 = stringResult2;
      } else {
        tmp18 = cResult[8];
      }
      const _String = String;
      const limitField = tmp4.limitField;
      const _String2 = String;
      const length = String(maximum).length;
      const StringResult = String(mentionTotalLimit);
      if (cResult[9] === tmp10) {
        if (cResult[10] === StringResult) {
          let tmp22;
          if (cResult[11] === "error") {
            tmp22 = cResult[12];
          }
          if (cResult[13] === tmp4.limitField) {
            let tmp25;
            if (cResult[14] === tmp22) {
              tmp25 = cResult[15];
            }
            if (cResult[16] === mentionRaidProtectionEnabled) {
              if (cResult[17] === onChangeRule) {
                if (cResult[18] === isMentionRaidExperimentEnabled) {
                  let tmp29;
                  if (cResult[19] === rule) {
                    tmp29 = cResult[20];
                  }
                  if (cResult[21] === tmp25) {
                    if (cResult[22] === tmp29) {
                      let tmp32;
                      if (cResult[23] === tmp13) {
                        tmp32 = cResult[24];
                      }
                      return tmp32;
                    }
                  }
                  const obj5 = { title: tmp11, hasIcons: false, helperText: tmp13, children: items };
                  items = [tmp25, tmp29];
                  const tmp34 = closure_8(rule(onChangeRule[15]).TableRowGroup, obj5);
                  cResult[21] = tmp25;
                  cResult[22] = tmp29;
                  cResult[23] = tmp13;
                  cResult[24] = tmp34;
                  tmp32 = tmp34;
                }
              }
            }
            let tmp30 = isMentionRaidExperimentEnabled;
            if (tmp30) {
              const obj6 = {
                label: intl5.string(rule(onChangeRule[9]).t.XnuC9g),
                subLabel: intl6.string(rule(onChangeRule[9]).t.EDBe5m),
                checked: mentionRaidProtectionEnabled,
                onPress(mentionRaidProtectionEnabled) {
                              let obj2;
                              const obj = { triggerMetadata: obj2 };
                              const merged = Object.assign(rule);
                              obj2 = { mentionRaidProtectionEnabled };
                              const merged1 = Object.assign(rule.triggerMetadata);
                              return onChangeRule(obj);
                            }
              };
              const TableCheckboxRow = tmp(tmp2[14]).TableCheckboxRow;
              intl5 = tmp(tmp2[9]).intl;
              intl6 = tmp(tmp2[9]).intl;
              tmp30 = closure_7(TableCheckboxRow, obj6);
            }
            cResult[16] = mentionRaidProtectionEnabled;
            cResult[17] = onChangeRule;
            cResult[18] = isMentionRaidExperimentEnabled;
            cResult[19] = rule;
            cResult[20] = tmp30;
            tmp29 = tmp30;
          }
          const obj7 = { label: first, subLabel: tmp18, trailing: closure_7(View, obj8) };
          obj8 = { style: limitField, children: tmp22 };
          const TableRow = tmp(tmp2[13]).TableRow;
          const tmp28 = closure_7(TableRow, obj7);
          cResult[13] = tmp4.limitField;
          cResult[14] = tmp22;
          cResult[15] = tmp28;
          tmp25 = tmp28;
        }
      }
      const obj9 = { keyboardType: "number-pad", maxLength: length, textAlign: "center", defaultValue: StringResult, onChange: tmp10, status: "error", accessibilityLabel: first };
      const tmp24 = closure_7(rule(onChangeRule[12]).TextField, obj9);
      cResult[9] = tmp10;
      cResult[10] = StringResult;
      cResult[11] = "error";
      cResult[12] = tmp24;
      tmp22 = tmp24;
    }
  }
  const fn = function y(arg0) {
    let obj3;
    const NumberResult = Number(arg0);
    let isFiniteResult = "" !== arg0;
    let result = isFiniteResult;
    if (result) {
      const obj = AutomodRuleUtils;
      result = obj.isValidMentionSpamLimit(NumberResult);
    }
    react(result);
    if (onValidityChange != null) {
      onValidityChange(result);
    }
    if (isFiniteResult) {
      const _Number = Number;
      isFiniteResult = Number.isFinite(NumberResult);
    }
    if (isFiniteResult) {
      const obj2 = { triggerMetadata: obj3 };
      const merged = Object.assign(rule);
      obj3 = { mentionTotalLimit: NumberResult };
      const merged1 = Object.assign(rule.triggerMetadata);
      onChangeRule(obj2);
    }
  };
  cResult[1] = onChangeRule;
  cResult[2] = onValidityChange;
  cResult[3] = rule;
  cResult[4] = fn;
  tmp10 = fn;
}) : ((rule) => {
  let TextField;
  let _undefined;
  let c3;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let mentionRaidProtectionEnabled;
  let mentionTotalLimit;
  let obj4;
  let obj6;
  let obj7;
  let tmp14;
  let tmp7;
  let tmp9;
  rule = rule.rule;
  ({ onChangeRule: dependencyMap, onValidityChange: _slicedToArray } = rule);
  react = undefined;
  const triggerMetadata = rule.triggerMetadata;
  ({ mentionTotalLimit, mentionRaidProtectionEnabled } = triggerMetadata);
  const tmp = closure_9();
  let obj = rule(12226);
  let isMentionRaidExperimentEnabled = obj.useIsMentionRaidExperimentEnabled(rule.guildId, false);
  const intl = rule(1127).intl;
  const stringResult = intl.string(rule(1127).t["s/26oQ"]);
  [tmp7, c3] = _slicedToArray(react.useState(true), 2);
  const tmp6 = _slicedToArray(react.useState(true), 2);
  let obj2 = { title: intl2.string(rule(1127).t.IGfuTa), hasIcons: false, helperText: tmp9, children: items };
  const TableRowGroup = rule(5997).TableRowGroup;
  intl2 = rule(1127).intl;
  tmp9 = undefined;
  const tmp8 = closure_8;
  if (!tmp7) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl3.formatToPlainString(rule(1127).t["8Y5zsp"], obj4) };
    const Text = tmp2(4833).Text;
    intl3 = tmp2(1127).intl;
    obj4 = { minimum, maximum };
    tmp9 = closure_7(Text, obj3);
  }
  const obj5 = { label: stringResult, subLabel: intl4.string(rule(1127).t["8uW4/N"]), trailing: closure_7(tmp14, obj6) };
  const TableRow = tmp2(5916).TableRow;
  intl4 = tmp2(1127).intl;
  obj6 = { style: tmp.limitField, children: closure_7(TextField, obj7) };
  obj7 = {
    keyboardType: "number-pad",
    maxLength: String(maximum).length,
    textAlign: "center",
    defaultValue: String(mentionTotalLimit),
    onChange(arg0) {
      let obj3;
      const NumberResult = Number(arg0);
      let isFiniteResult = "" !== arg0;
      let result = isFiniteResult;
      if (result) {
        const obj = AutomodRuleUtils;
        result = obj.isValidMentionSpamLimit(NumberResult);
      }
      _undefined(result);
      if (_slicedToArray != null) {
        _slicedToArray(result);
      }
      if (isFiniteResult) {
        const _Number = Number;
        isFiniteResult = Number.isFinite(NumberResult);
      }
      if (isFiniteResult) {
        const obj2 = { triggerMetadata: obj3 };
        const merged = Object.assign(rule);
        obj3 = { mentionTotalLimit: NumberResult };
        const merged1 = Object.assign(rule.triggerMetadata);
        dependencyMap(obj2);
      }
    },
    status: "error",
    accessibilityLabel: stringResult
  };
  TextField = tmp2(6023).TextField;
  items = [tmp13(TableRow, obj5), ];
  tmp14 = View;
  if (isMentionRaidExperimentEnabled) {
    const obj8 = {
      label: intl5.string(rule(1127).t.XnuC9g),
      subLabel: intl6.string(rule(1127).t.EDBe5m),
      checked: mentionRaidProtectionEnabled,
      onPress(mentionRaidProtectionEnabled) {
          let obj2;
          const obj = { triggerMetadata: obj2 };
          const merged = Object.assign(rule);
          obj2 = { mentionRaidProtectionEnabled };
          const merged1 = Object.assign(rule.triggerMetadata);
          return dependencyMap(obj);
        }
    };
    const TableCheckboxRow = tmp2(5913).TableCheckboxRow;
    intl5 = tmp2(1127).intl;
    intl6 = tmp2(1127).intl;
    isMentionRaidExperimentEnabled = tmp13(TableCheckboxRow, obj8);
  }
  items[1] = isMentionRaidExperimentEnabled;
  return tmp8(TableRowGroup, obj2);
});
let result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default tmp4;
