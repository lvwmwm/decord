// Module ID: 11339
// Function ID: 11340
// Name: GuildRaidResolveActionSheet
// Dependencies: [32, 19, 17, 1074, 7847, 21, 4836, 576, 1115, 6938, 4800, 6618, 5890, 4832, 8053, 1177, 5281, 5016, 11309, 7852, 2]
// Exports: default

// Module 11339 (GuildRaidResolveActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl9 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5890 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import AutomodFeedback from "AutomodFeedback" /* 6938 */;
import Constants2 from "Constants" /* 7847 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7852 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11309 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, value;

let c9;
let metroImportAll;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
const SafetyToastType = Constants2.SafetyToastType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" }, optionContainer: obj2, option: { width: "100%" }, textInputContainer: { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 }, textInput: obj3 };
obj2 = { borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: nativeDefault.radii.xs };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c3;
  let c4;
  let c5;
  let c6;
  let closure_2;
  let guild_id;
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
  let raid_alert_id;
  let tmp4;
  ({ guildId: require, messageId: importDefault } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  function handleTextInputChange(arg0) {
    _undefined3(arg0);
  }
  let tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = _slicedToArray(react.useState([]), 2);
  [c3, c4] = tmp2;
  [c5, c6] = _slicedToArray(react.useState(), 2);
  const tmp3 = _slicedToArray(react.useState(), 2);
  let obj = { text: intl.string(intl9.t.yeaXw5), value: AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY };
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
  let obj5 = { children: closure_9(tmp4, obj6) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj6 = { style: tmp.container, children: items1 };
  tmp4 = KeyboardAwareViewDefault;
  const obj7 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl5.string(intl9.t["1zmw/H"]) };
  const Text = Text_Text.Text;
  intl5 = intl9.intl;
  items1 = [closure_8(Text, obj7), , , , ];
  const obj8 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl6.string(intl9.t.nF79oO) };
  const Text2 = Text_Text.Text;
  intl6 = intl9.intl;
  items1[1] = closure_8(Text2, obj8);
  items1[2] = items.map((value) => {
    let Checkbox;
    let TextInput;
    let intl;
    let items;
    let obj3;
    let obj6;
    value = value.value;
    let closure_0 = value;
    const text = value.text;
    const obj = { style: closure_2.optionContainer, children: items };
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
      leading: closure_1_8(Checkbox, obj3),
      label: text
    };
    const FormRow = require("Form").FormRow;
    obj3 = { selected: _undefined.includes(value) };
    Checkbox = require("native").Checkbox;
    items = [closure_1_8(FormRow, obj2), ];
    let hasItem = value === require("AutomodFeedback").RaidResolutionType.OTHER;
    const obj4 = _undefined;
    const tmp = closure_1_9;
    if (hasItem) {
      hasItem = obj4.includes(tmp5(tmp6[9]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj5 = { style: closure_2.textInputContainer, children: closure_1_8(TextInput, obj6) };
      obj6 = { style: closure_2.textInput, autoComplete: "off", value: _undefined2, placeholder: intl.string(require("intl").t["PAM+JR"]), onChangeText: handleTextInputChange };
      TextInput = tmp5(tmp6[15]).TextInput;
      intl = tmp5(tmp6[8]).intl;
      hasItem = tmp4(tmp2, obj5);
    }
    items[1] = hasItem;
    return tmp(_undefined2, obj, value);
  });
  const obj9 = {
    onPress() {
      const obj = { raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID, raid_alert_id: importDefault, false_alarm_type: _undefined.map((item) => item.toString()), false_alarm_other_reason: _undefined2, guild_id: require };
      const obj2 = AppAnalyticsUtils;
      obj2.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
      const handleResolveRaid = GuildAntiRaidActionCreators.handleResolveRaid;
      GuildAntiRaidActionCreators;
      const obj3 = AutomodFeedback;
      handleResolveRaid(require, importDefault, obj3.getMostImportantRaidResolutionType(_undefined));
      const obj4 = ActionSheetActionCreatorsDefault;
      obj4.hideActionSheet("GuildRaidResolveActionSheet");
      const obj5 = SafetyToastsActionCreatorsDefault;
      obj5.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
    },
    text: intl7.string(intl9.t.Gh3A0O),
    size: "md"
  };
  const Button = components_Button_Button.Button;
  intl7 = intl9.intl;
  items1[3] = closure_8(Button, obj9);
  const obj10 = {
    onPress: function handleClose() {
      const obj = require("ActionSheetActionCreators");
      obj.hideActionSheet("GuildRaidResolveActionSheet");
    },
    text: intl8.string(intl9.t["ETE/oC"]),
    variant: "secondary",
    size: "md"
  };
  const Button2 = components_Button_Button.Button;
  intl8 = intl9.intl;
  items1[4] = closure_8(Button2, obj10);
  return closure_8(ActionSheet, obj5);
};
