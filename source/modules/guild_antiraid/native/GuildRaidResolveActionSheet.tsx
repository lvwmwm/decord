// Module ID: 10994
// Function ID: 85535
// Name: GuildRaidResolveActionSheet
// Dependencies: []
// Exports: default

// Module 10994 (GuildRaidResolveActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const SafetyToastType = arg1(dependencyMap[4]).SafetyToastType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: { flex: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013166812511108805, display: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001855744934315794, flexDirection: 131072.00048828125, flexShrink: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000241907606205, alignItems: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023797674665240552 }, title: { "Null": null, "Null": null }, subtitle: { "Null": "center", "Null": "center" } };
obj = { handledHereMention: null, sending: null, editId: null, focused: null, selectionStart: null, selectionEnd: null, text: null, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[7]).radii.xs };
obj.optionContainer = obj;
obj.option = { width: "100%" };
obj.textInputContainer = {};
const tmp2 = arg1(dependencyMap[5]);
obj.textInput = { backgroundColor: importDefault(dependencyMap[7]).colors.INPUT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.xs };
let closure_10 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.INPUT_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[7]).radii.xs };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
  ({ guildId: closure_0, messageId: closure_1 } = arg0);
  let closure_6;
  function handleTextInputChange(arg0) {
    _undefined(arg0);
  }
  function handleClose(Button, arg1) {
    callback2(tmp[10]).hideActionSheet("GuildRaidResolveActionSheet");
  }
  const tmp = callback3();
  const dependencyMap = tmp;
  const tmp2 = callback(React.useState([]), 2);
  const callback = tmp2[0];
  const React = tmp2[1];
  [closure_5, closure_6] = callback(React.useState(), 2);
  let obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.text = intl.string(arg1(dependencyMap[8]).t.yeaXw5);
  obj.value = arg1(dependencyMap[9]).RaidResolutionType.LEGITIMATE_ACTIVITY;
  const items = [obj, , , ];
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.text = intl2.string(arg1(dependencyMap[8]).t.o++3B8);
  obj.value = arg1(dependencyMap[9]).RaidResolutionType.DM_SPAM;
  items[1] = obj;
  obj = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.text = intl3.string(arg1(dependencyMap[8]).t.UfHAwZ);
  obj.value = arg1(dependencyMap[9]).RaidResolutionType.JOIN_RAID;
  items[2] = obj;
  const obj1 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[8]).t.K3UWeR);
  obj1.value = arg1(dependencyMap[9]).RaidResolutionType.OTHER;
  items[3] = obj1;
  const obj2 = {};
  const obj3 = { style: tmp.container };
  const tmp3 = callback(React.useState(), 2);
  const obj4 = { style: tmp.title };
  const intl5 = arg1(dependencyMap[8]).intl;
  obj4.children = intl5.string(arg1(dependencyMap[8]).t.1zmw/H);
  const items1 = [handleClose(arg1(dependencyMap[13]).Text, obj4), , , , ];
  const obj5 = { "Null": "xs", "Null": "interactive-text-default", "Null": "md", style: tmp.subtitle };
  const intl6 = arg1(dependencyMap[8]).intl;
  obj5.children = intl6.string(arg1(dependencyMap[8]).t.nF79oO);
  items1[1] = handleClose(arg1(dependencyMap[13]).Text, obj5);
  items1[2] = items.map((value) => {
    value = value.value;
    let obj = { style: tmp.optionContainer };
    obj = {
      style: tmp.option,
      onPress() {
        function onCheckboxChange(value) {
          callback(closure_3.includes(value) ? (arr) => arr.filter(/* F85543 */ function() { ... }) : (arg0) => {
            const items = [...arg0, arg0];
            return items;
          });
        }(value);
      }
    };
    obj = { selected: closure_3.includes(value) };
    obj.leading = handleClose(value(closure_9[15]).Checkbox, obj);
    obj.label = value.text;
    const items = [handleClose(value(closure_9[14]).FormRow, obj), ];
    let hasItem = value === value(tmp[9]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = closure_3.includes(value(tmp[9]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj1 = { style: tmp.textInputContainer };
      const obj2 = { style: tmp.textInput, autoComplete: "off", value: closure_5 };
      const intl = value(tmp[8]).intl;
      obj2.placeholder = intl.string(value(tmp[8]).t.PAM+JR);
      obj2.onChangeText = handleTextInputChange;
      obj1.children = handleClose(value(tmp[15]).TextInput, obj2);
      hasItem = handleClose(closure_5, obj1);
    }
    items[1] = hasItem;
    obj.children = items;
    return closure_9(closure_5, obj, value);
  });
  const obj6 = {
    onPress() {
      const obj = { raid_alert_type: callback(tmp[9]).RaidAlertType.JOIN_RAID, raid_alert_id: callback2, false_alarm_type: closure_3.map((arg0) => arg0.toString()), false_alarm_other_reason: closure_5, guild_id: callback };
      callback(tmp[17]).trackWithMetadata(_undefined.GUILD_RAID_FEEDBACK, obj);
      const obj2 = callback(tmp[17]);
      const obj3 = callback(tmp[18]);
      obj3.handleResolveRaid(callback, callback2, callback(tmp[9]).getMostImportantRaidResolutionType(closure_3));
      handleClose();
      const obj4 = callback(tmp[9]);
      callback2(tmp[19]).showSuccessToast(handleTextInputChange.SAFETY_FEEDBACK_SUCCESS);
    }
  };
  const intl7 = arg1(dependencyMap[8]).intl;
  obj6.text = intl7.string(arg1(dependencyMap[8]).t.Gh3A0O);
  obj6.size = "md";
  items1[3] = handleClose(arg1(dependencyMap[16]).Button, obj6);
  const obj7 = { onPress: handleClose };
  const intl8 = arg1(dependencyMap[8]).intl;
  obj7.text = intl8.string(arg1(dependencyMap[8]).t.ETE/oC);
  obj7.variant = "secondary";
  obj7.size = "md";
  items1[4] = handleClose(arg1(dependencyMap[16]).Button, obj7);
  obj3.children = items1;
  obj2.children = callback2(importDefault(dependencyMap[12]), obj3);
  return handleClose(arg1(dependencyMap[11]).ActionSheet, obj2);
};
