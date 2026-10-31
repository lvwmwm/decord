// Module ID: 13275
// Function ID: 13276
// Name: GuildRaidResolveActionSheet
// Dependencies: [5, 32, 19, 17, 1072, 7490, 21, 5014, 575, 1113, 7697, 5258, 5760, 13242, 7496, 7366, 6954, 5624, 8177, 1187, 5634, 2]
// Exports: default

// Module 13275 (GuildRaidResolveActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl9 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6954 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import Constants2 from "Constants" /* 7490 */;
import AutomodFeedback from "AutomodFeedback" /* 7697 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_2, dependencyMap, raid_alert_id;

let c10;
let c9;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const SafetyToastType = Constants2.SafetyToastType;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" }, optionContainer: obj2, option: { width: "100%" }, textInputContainer: { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 }, textInput: obj3 };
obj2 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: nativeDefault.radii.xs };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let c5;
  let c6;
  let closure_8;
  let disabled;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items1;
  let obj6;
  let tmp6;
  ({ guildId: require, messageId: importDefault } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  c6 = undefined;
  disabled = undefined;
  closure_8 = undefined;
  function handleTextInputChange(ActionSheet) {
    _undefined2(ActionSheet);
  }
  function handleClose() {
    obj = require("ActionSheetActionCreators");
    obj.hideActionSheet("GuildRaidResolveActionSheet");
  }
  let obj = function _handleSubmit() {
    let false_alarm_other_reason;
    let guild_id;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj6;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === raid_alert_id) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp47 = disabled;
              if (!tmp47) {
                closure_2_8(true);
                const obj7 = { raid_alert_type: tmp(closure_2[10]).RaidAlertType.JOIN_RAID, raid_alert_id, false_alarm_type: _undefined.map((item) => item.toString()), false_alarm_other_reason, guild_id };
                const obj5 = tmp(closure_2[12]);
                obj5.trackWithMetadata(constants.GUILD_RAID_FEEDBACK, obj7);
                c3 = 2;
                const handleResolveRaid = tmp(closure_2[13]).handleResolveRaid;
                const tmp39 = tmp(closure_2[13]);
                raid_alert_id = 3;
                c4 = 1;
                const obj8 = { value: handleResolveRaid(guild_id, raid_alert_id, obj6.getMostImportantRaidResolutionType(_undefined)), done: false };
                obj6 = tmp(closure_2[10]);
                return obj8;
              }
            }
          } else if (1 === raid_alert_id) {
            c3 = 0;
            closure_128_8(false);
            throw closure_2;
          } else {
            if (2 === raid_alert_id) {
              c3 = 1;
              const obj3 = raid_alert_id(closure_2[14]);
              obj3.showFailedToast();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_8(false);
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_128_10();
              obj = raid_alert_id(closure_2[14]);
              obj.showSuccessToast(constants2.SAFETY_FEEDBACK_SUCCESS);
              c3 = 1;
            }
            c3 = 0;
            closure_128_8(false);
          }
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp41) {
          closure_2 = tmp41;
          if (0 === c3) {
            c4 = 3;
            throw tmp41;
          } else if (1 === tmp43) {
            raid_alert_id = 1;
          } else {
            raid_alert_id = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = obj();
  dependencyMap = tmp;
  const tmp2 = _slicedToArray(react.useState([]), 2);
  [c3, c4] = tmp2;
  const tmp3 = _slicedToArray(react.useState(), 2);
  [c5, c6] = tmp3;
  [disabled, closure_8] = react.useState(false);
  obj = { text: intl.string(intl9.t.yeaXw5), value: AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY };
  intl = intl9.intl;
  let items = [obj, , , ];
  let obj2 = { text: intl2.string(intl9.t["o++3B8"]), value: AutomodFeedback.RaidResolutionType.DM_SPAM };
  intl2 = intl9.intl;
  items[1] = obj2;
  let obj3 = { text: intl3.string(intl9.t.UfHAwZ), value: AutomodFeedback.RaidResolutionType.JOIN_RAID };
  intl3 = intl9.intl;
  items[2] = obj3;
  let obj4 = { text: intl4.string(intl9.t.K3UWeR), value: AutomodFeedback.RaidResolutionType.OTHER };
  intl4 = intl9.intl;
  items[3] = obj4;
  let obj5 = { children: handleClose(tmp6, obj6) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj6 = { style: tmp.container, children: items1 };
  tmp6 = KeyboardAwareViewDefault;
  let obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl5.string(intl9.t["1zmw/H"]) };
  const Text = Text_Text.Text;
  intl5 = intl9.intl;
  items1 = [handleTextInputChange(Text, obj7), , , , ];
  let obj8 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl6.string(intl9.t.nF79oO) };
  const Text2 = Text_Text.Text;
  intl6 = intl9.intl;
  items1[1] = handleTextInputChange(Text2, obj8);
  items1[2] = items.map((value) => {
    let Checkbox;
    let TextInput;
    let intl;
    let items;
    let obj3;
    let obj6;
    value = value.value;
    require = value;
    const text = value.text;
    obj = { style: closure_2.optionContainer, children: items };
    const obj2 = {
      style: closure_2.option,
      onPress() {
        let closure_0 = value;
        c4(c3.includes(value) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
          return items;
        }));
      },
      leading: handleTextInputChange(Checkbox, obj3),
      label: text
    };
    const FormRow = require("module_8177").FormRow;
    obj3 = { selected: _undefined.includes(value) };
    Checkbox = require("native").Checkbox;
    items = [handleTextInputChange(FormRow, obj2), ];
    let hasItem = value === require("AutomodFeedback").RaidResolutionType.OTHER;
    const obj4 = _undefined;
    const tmp = handleClose;
    if (hasItem) {
      hasItem = obj4.includes(tmp5(tmp6[10]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj5 = { style: closure_2.textInputContainer, children: handleTextInputChange(TextInput, obj6) };
      obj6 = { style: closure_2.textInput, autoComplete: "off", value, placeholder: intl.string(require("intl").t["PAM+JR"]), onChangeText: handleTextInputChange };
      TextInput = tmp5(tmp6[19]).TextInput;
      intl = tmp5(tmp6[9]).intl;
      hasItem = tmp4(tmp2, obj5);
    }
    items[1] = hasItem;
    return tmp(c6, obj, value);
  });
  let obj9 = {
    onPress: function handleSubmit() {
      return obj(...arguments);
    },
    text: intl7.string(intl9.t.Gh3A0O),
    size: "md",
    disabled
  };
  const Button = components_Button_Button.Button;
  intl7 = intl9.intl;
  items1[3] = handleTextInputChange(Button, obj9);
  const obj10 = { onPress: handleClose, text: intl8.string(intl9.t["ETE/oC"]), variant: "secondary", size: "md" };
  const Button2 = components_Button_Button.Button;
  intl8 = intl9.intl;
  items1[4] = handleTextInputChange(Button2, obj10);
  return handleTextInputChange(ActionSheet, obj5);
};
