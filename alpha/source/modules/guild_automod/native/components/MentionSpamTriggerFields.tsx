// Module ID: 19685
// Function ID: 19686
// Name: MentionSpamTriggerFields
// Dependencies: [32, 19, 17, 13277, 21, 5014, 18914, 1113, 7060, 5624, 6975, 7089, 19668, 6974, 2]
// Exports: default

// Module 19685 (MentionSpamTriggerFields)
import react_native from "react-native" /* 17 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 19668 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 13277 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ MAX_MENTION_SPAM_LIMIT: hasOwnProperty, MIN_MENTION_SPAM_LIMIT: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ limitField: { width: 52 } });
let result = size.fileFinishedImporting("modules/guild_automod/native/components/MentionSpamTriggerFields.tsx");

export default function MentionSpamTriggerFields(rule) {
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
  let obj = rule(18914);
  let hasMentionRaidLimitAccess = obj.useHasMentionRaidLimitAccess(rule.guildId);
  const intl = rule(1113).intl;
  const stringResult = intl.string(rule(1113).t["s/26oQ"]);
  [tmp7, c3] = _slicedToArray(react.useState(true), 2);
  const tmp6 = _slicedToArray(react.useState(true), 2);
  let obj2 = { title: intl2.string(rule(1113).t.IGfuTa), hasIcons: false, helperText: tmp9, children: items };
  const TableRowGroup = rule(7060).TableRowGroup;
  intl2 = rule(1113).intl;
  tmp9 = undefined;
  const tmp8 = closure_8;
  if (!tmp7) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl3.formatToPlainString(rule(1113).t["8Y5zsp"], obj4) };
    const Text = tmp2(5624).Text;
    intl3 = tmp2(1113).intl;
    obj4 = { minimum, maximum };
    tmp9 = closure_7(Text, obj3);
  }
  const obj5 = { label: stringResult, subLabel: intl4.string(rule(1113).t["8uW4/N"]), trailing: closure_7(tmp14, obj6) };
  const TableRow = tmp2(6975).TableRow;
  intl4 = tmp2(1113).intl;
  obj6 = { style: tmp.limitField, children: closure_7(TextField, obj7) };
  obj7 = {
    keyboardType: "number-pad",
    maxLength: String(maximum).length,
    textAlign: "center",
    defaultValue: String(mentionTotalLimit),
    onChange: function handleChangeLimit(arg0) {
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
  TextField = tmp2(7089).TextField;
  items = [tmp13(TableRow, obj5), ];
  tmp14 = View;
  if (hasMentionRaidLimitAccess) {
    const obj8 = {
      label: intl5.string(rule(1113).t.XnuC9g),
      subLabel: intl6.string(rule(1113).t.EDBe5m),
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
    const TableCheckboxRow = tmp2(6974).TableCheckboxRow;
    intl5 = tmp2(1113).intl;
    intl6 = tmp2(1113).intl;
    hasMentionRaidLimitAccess = tmp13(TableCheckboxRow, obj8);
  }
  items[1] = hasMentionRaidLimitAccess;
  return tmp8(TableRowGroup, obj2);
};
