// Module ID: 17972
// Function ID: 17973
// Name: MentionSpamTriggerFields
// Dependencies: [32, 19, 17, 12029, 21, 4790, 558, 568, 13000, 1119, 4786, 6880, 5854, 5851, 5935, 2]

// Module 17972 (MentionSpamTriggerFields)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(12029);
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4790);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((rule) => {
  const cResult = rule(onChangeRule[7]).c(24);
  rule = rule.rule;
  onChangeRule = rule.onChangeRule;
  let tmp4 = closure_9();
  ({ mentionRaidProtectionEnabled, mentionTotalLimit } = rule.triggerMetadata);
  let obj = rule(onChangeRule[7]);
  const isMentionRaidExperimentEnabled = rule(onChangeRule[8]).useIsMentionRaidExperimentEnabled(rule.guildId, false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[9]).intl;
    const stringResult = intl.string(tmp(tmp2[9]).t["s/26oQ"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  let obj2 = rule(onChangeRule[8]);
  [tmp9, _slicedToArray] = noop.useState(true);
  if (cResult[1] === onChangeRule) {
    if (cResult[2] === rule) {
      let tmp10 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(tmp2[9]).intl;
      const stringResult1 = intl2.string(tmp(tmp2[9]).t.IGfuTa);
      cResult[4] = stringResult1;
      let tmp11 = stringResult1;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== tmp9) {
      let tmp14;
      if (!tmp9) {
        const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
        const intl3 = tmp(tmp2[9]).intl;
        const obj4 = { minimum, maximum };
        obj3.children = intl3.formatToPlainString(tmp(tmp2[9]).t["8Y5zsp"], obj4);
        tmp14 = closure_7(tmp(tmp2[10]).Text, obj3);
      }
      cResult[5] = tmp9;
      cResult[6] = tmp14;
      let tmp13 = tmp14;
    } else {
      tmp13 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(tmp2[9]).intl;
      const stringResult2 = intl4.string(tmp(tmp2[9]).t["8uW4/N"]);
      cResult[7] = stringResult2;
      let tmp18 = stringResult2;
    } else {
      tmp18 = cResult[7];
    }
    const _String = String;
    const _String2 = String;
    const StringResult = String(mentionTotalLimit);
    if (cResult[8] === tmp10) {
      if (cResult[9] === StringResult) {
        if (cResult[10] === str) {
          let tmp22 = cResult[11];
        }
        if (cResult[12] === tmp4.limitField) {
          if (cResult[13] === tmp22) {
            let tmp25 = cResult[14];
          }
          if (cResult[15] === mentionRaidProtectionEnabled) {
            if (cResult[16] === onChangeRule) {
              if (cResult[17] === isMentionRaidExperimentEnabled) {
                if (cResult[18] === rule) {
                  let tmp29 = cResult[19];
                }
                if (cResult[20] === tmp25) {
                  if (cResult[21] === tmp29) {
                    if (cResult[22] === tmp13) {
                      let tmp32 = cResult[23];
                    }
                    return tmp32;
                  }
                }
                const obj5 = { title: tmp11, hasIcons: false, helperText: tmp13, children: null };
                const items = [tmp25, tmp29];
                obj5.children = items;
                const tmp34 = closure_8(tmp(tmp2[14]).TableRowGroup, obj5);
                cResult[20] = tmp25;
                cResult[21] = tmp29;
                cResult[22] = tmp13;
                cResult[23] = tmp34;
                tmp32 = tmp34;
              }
            }
          }
          let tmp30 = isMentionRaidExperimentEnabled;
          if (isMentionRaidExperimentEnabled) {
            const obj6 = { label: null, subLabel: null, checked: null, onPress: null };
            const intl5 = tmp(tmp2[9]).intl;
            obj6.label = intl5.string(tmp(tmp2[9]).t.XnuC9g);
            const intl6 = tmp(tmp2[9]).intl;
            obj6.subLabel = intl6.string(tmp(tmp2[9]).t.EDBe5m);
            obj6.checked = mentionRaidProtectionEnabled;
            obj6.onPress = function onPress(mentionRaidProtectionEnabled) {
              const obj = {};
              const merged = Object.assign(rule);
              const obj2 = {};
              const merged1 = Object.assign(rule.triggerMetadata);
              obj2.mentionRaidProtectionEnabled = mentionRaidProtectionEnabled;
              obj.triggerMetadata = obj2;
              return onChangeRule(obj);
            };
            tmp30 = closure_7(tmp(tmp2[13]).TableCheckboxRow, obj6);
          }
          cResult[15] = mentionRaidProtectionEnabled;
          cResult[16] = onChangeRule;
          cResult[17] = isMentionRaidExperimentEnabled;
          cResult[18] = rule;
          cResult[19] = tmp30;
          tmp29 = tmp30;
        }
        const obj7 = { label: first, subLabel: tmp18, trailing: null };
        const obj8 = { style: tmp4.limitField, children: tmp22 };
        obj7.trailing = closure_7(View, obj8);
        const tmp28 = closure_7(tmp(tmp2[12]).TableRow, obj7);
        cResult[12] = tmp4.limitField;
        cResult[13] = tmp22;
        cResult[14] = tmp28;
        tmp25 = tmp28;
      }
    }
    const obj9 = { keyboardType: "number-pad", maxLength: String(maximum).length, textAlign: "center", defaultValue: StringResult, onChange: tmp10, status: "error", accessibilityLabel: first };
    cResult[8] = tmp10;
    cResult[9] = StringResult;
    cResult[10] = "error";
    class R {
      constructor(arg0) {
        NumberResult = Number(rule);
        isFiniteResult = "" !== rule;
        tmp4 = isFiniteResult;
        tmp2 = closure_2;
        if (isFiniteResult) {
          _Number = Number;
          isIntegerResult = Number.isInteger(NumberResult);
          if (isIntegerResult) {
            tmp6 = MIN_MENTION_SPAM_LIMIT;
            isIntegerResult = NumberResult >= MIN_MENTION_SPAM_LIMIT;
          }
          if (isIntegerResult) {
            tmp7 = MAX_MENTION_SPAM_LIMIT;
            isIntegerResult = NumberResult <= MAX_MENTION_SPAM_LIMIT;
          }
          tmp4 = isIntegerResult;
        }
        tmp2Result = tmp2(tmp4);
        if (isFiniteResult) {
          _Number2 = Number;
          isFiniteResult = Number.isFinite(NumberResult);
        }
        if (isFiniteResult) {
          tmp9 = onChangeRule;
          obj = {};
          tmp10 = rule;
          tmp11 = obj;
          tmp12 = rule;
          merged = Object.assign(rule);
          obj1 = {};
          tmp14 = obj1;
          merged1 = Object.assign(rule.triggerMetadata);
          obj1.mentionTotalLimit = NumberResult;
          obj.triggerMetadata = obj1;
          tmp16 = onChangeRule(obj);
        }
        return;
      }
    }
    tmp22 = closure_7(tmp(tmp2[11]).TextField, obj9);
    const tmp24 = closure_7(tmp(tmp2[11]).TextField, obj9);
  }
  class R {
    constructor(arg0) {
      NumberResult = Number(rule);
      isFiniteResult = "" !== rule;
      tmp4 = isFiniteResult;
      tmp2 = closure_2;
      if (isFiniteResult) {
        _Number = Number;
        isIntegerResult = Number.isInteger(NumberResult);
        if (isIntegerResult) {
          tmp6 = MIN_MENTION_SPAM_LIMIT;
          isIntegerResult = NumberResult >= MIN_MENTION_SPAM_LIMIT;
        }
        if (isIntegerResult) {
          tmp7 = MAX_MENTION_SPAM_LIMIT;
          isIntegerResult = NumberResult <= MAX_MENTION_SPAM_LIMIT;
        }
        tmp4 = isIntegerResult;
      }
      tmp2Result = tmp2(tmp4);
      if (isFiniteResult) {
        _Number2 = Number;
        isFiniteResult = Number.isFinite(NumberResult);
      }
      if (isFiniteResult) {
        tmp9 = onChangeRule;
        obj = {};
        tmp10 = rule;
        tmp11 = obj;
        tmp12 = rule;
        merged = Object.assign(rule);
        obj1 = {};
        tmp14 = obj1;
        merged1 = Object.assign(rule.triggerMetadata);
        obj1.mentionTotalLimit = NumberResult;
        obj.triggerMetadata = obj1;
        tmp16 = onChangeRule(obj);
      }
      return;
    }
  }
  cResult[1] = onChangeRule;
  cResult[2] = rule;
  cResult[3] = R;
  tmp10 = R;
}) : ((rule) => {
  rule = rule.rule;
  const onChangeRule = rule.onChangeRule;
  _slicedToArray = undefined;
  ({ mentionTotalLimit, mentionRaidProtectionEnabled } = rule.triggerMetadata);
  const tmp = closure_9();
  let isMentionRaidExperimentEnabled = rule(onChangeRule[8]).useIsMentionRaidExperimentEnabled(rule.guildId, false);
  const intl = rule(onChangeRule[9]).intl;
  const stringResult = intl.string(rule(onChangeRule[9]).t["s/26oQ"]);
  let obj = rule(onChangeRule[8]);
  [tmp7, c2] = noop.useState(true);
  let obj2 = { title: null, hasIcons: false, helperText: null, children: null };
  const intl2 = rule(onChangeRule[9]).intl;
  obj2.title = intl2.string(rule(onChangeRule[9]).t.IGfuTa);
  let tmp9;
  if (!tmp7) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(tmp3[9]).intl;
    const obj4 = { minimum, maximum };
    obj3.children = intl3.formatToPlainString(tmp2(tmp3[9]).t["8Y5zsp"], obj4);
    tmp9 = closure_7(tmp2(tmp3[10]).Text, obj3);
  }
  obj2.helperText = tmp9;
  const obj5 = { label: stringResult, subLabel: null, trailing: null };
  const intl4 = tmp2(tmp3[9]).intl;
  obj5.subLabel = intl4.string(rule(onChangeRule[9]).t["8uW4/N"]);
  const obj6 = { style: tmp.limitField, children: null };
  const obj7 = {
    keyboardType: "number-pad",
    maxLength: String(maximum).length,
    textAlign: "center",
    defaultValue: String(mentionTotalLimit),
    onChange(arg0) {
      const NumberResult = Number(arg0);
      let isFiniteResult = "" !== arg0;
      let tmp4 = isFiniteResult;
      if (isFiniteResult) {
        const _Number = Number;
        let isIntegerResult = Number.isInteger(NumberResult);
        if (isIntegerResult) {
          isIntegerResult = NumberResult >= minimum;
        }
        if (isIntegerResult) {
          isIntegerResult = NumberResult <= maximum;
        }
        tmp4 = isIntegerResult;
      }
      _undefined(tmp4);
      if (isFiniteResult) {
        const _Number2 = Number;
        isFiniteResult = Number.isFinite(NumberResult);
      }
      if (isFiniteResult) {
        const obj = {};
        const merged = Object.assign(rule);
        const obj2 = {};
        const merged1 = Object.assign(rule.triggerMetadata);
        obj2.mentionTotalLimit = NumberResult;
        obj.triggerMetadata = obj2;
        onChangeRule(obj);
      }
    },
    status: "error",
    accessibilityLabel: stringResult
  };
  obj6.children = closure_7(rule(onChangeRule[11]).TextField, obj7);
  obj5.trailing = closure_7(View, obj6);
  const items = [closure_7(rule(onChangeRule[12]).TableRow, obj5), ];
  if (isMentionRaidExperimentEnabled) {
    const obj8 = { label: null, subLabel: null, checked: null, onPress: null };
    const intl5 = tmp2(tmp3[9]).intl;
    obj8.label = intl5.string(tmp2(tmp3[9]).t.XnuC9g);
    const intl6 = tmp2(tmp3[9]).intl;
    obj8.subLabel = intl6.string(tmp2(tmp3[9]).t.EDBe5m);
    obj8.checked = mentionRaidProtectionEnabled;
    obj8.onPress = function onPress(mentionRaidProtectionEnabled) {
      const obj = {};
      const merged = Object.assign(rule);
      const obj2 = {};
      const merged1 = Object.assign(rule.triggerMetadata);
      obj2.mentionRaidProtectionEnabled = mentionRaidProtectionEnabled;
      obj.triggerMetadata = obj2;
      return onChangeRule(obj);
    };
    isMentionRaidExperimentEnabled = tmp13(tmp2(tmp3[13]).TableCheckboxRow, obj8);
  }
  items[1] = isMentionRaidExperimentEnabled;
  obj2.children = items;
  return closure_8(rule(onChangeRule[14]).TableRowGroup, obj2);
});
