// Module ID: 11032
// Function ID: 85798
// Name: GuildRaidResolveActionSheet
// Dependencies: [57, 31, 27, 653, 7563, 33, 4130, 689, 1212, 6750, 4098, 5498, 5585, 4126, 7636, 1273, 4543, 4324, 11003, 7568, 2]
// Exports: default

// Module 11032 (GuildRaidResolveActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import { SafetyToastType } from "SafetyToastType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingVertical: 24, paddingHorizontal: 16, display: "flex", flexDirection: "column", alignItems: "center" }, title: { marginBottom: 8, textAlign: "center" }, subtitle: { marginBottom: 16, textAlign: "center" } };
_createForOfIteratorHelperLoose = { borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, display: "flex", flexDirection: "column", marginBottom: 14, width: "100%" };
_createForOfIteratorHelperLoose.optionContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.option = { width: "100%" };
_createForOfIteratorHelperLoose.textInputContainer = { paddingLeft: 54, paddingRight: 16, paddingBottom: 16 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.INPUT_BACKGROUND_DEFAULT, width: "100%", padding: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.textInput = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default function GuildRaidResolveActionSheet(arg0) {
  let View;
  let c6;
  let importDefault;
  let require;
  ({ guildId: require, messageId: importDefault } = arg0);
  c6 = undefined;
  function handleTextInputChange(arg0) {
    _undefined(arg0);
  }
  function handleClose(Button, arg1) {
    outer1_1(tmp[10]).hideActionSheet("GuildRaidResolveActionSheet");
  }
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  const tmp2 = callback(React.useState([]), 2);
  callback = tmp2[0];
  React = tmp2[1];
  [View, c6] = callback(React.useState(), 2);
  let obj = {};
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.yeaXw5);
  obj.value = require(6750) /* Feedback */.RaidResolutionType.LEGITIMATE_ACTIVITY;
  let items = [obj, , , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl2.string(require(1212) /* getSystemLocale */.t["o++3B8"]);
  obj.value = require(6750) /* Feedback */.RaidResolutionType.DM_SPAM;
  items[1] = obj;
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.UfHAwZ);
  obj.value = require(6750) /* Feedback */.RaidResolutionType.JOIN_RAID;
  items[2] = obj;
  let obj1 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t.K3UWeR);
  obj1.value = require(6750) /* Feedback */.RaidResolutionType.OTHER;
  items[3] = obj1;
  let obj2 = {};
  let obj3 = { style: tmp.container };
  const tmp3 = callback(React.useState(), 2);
  let obj4 = { style: tmp.title, variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl5.string(require(1212) /* getSystemLocale */.t["1zmw/H"]);
  const items1 = [handleClose(require(4126) /* Text */.Text, obj4), , , , ];
  const obj5 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default" };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj5.children = intl6.string(require(1212) /* getSystemLocale */.t.nF79oO);
  items1[1] = handleClose(require(4126) /* Text */.Text, obj5);
  items1[2] = items.map((value) => {
    value = value.value;
    let closure_0 = value;
    let obj = { style: tmp.optionContainer };
    obj = {
      style: tmp.option,
      onPress() {
        (function onCheckboxChange(closure_0) {
          outer2_4(outer2_3.includes(closure_0) ? ((arr) => arr.filter(/* F85806 */ function() { ... })) : ((arg0) => {
            const items = [...arg0, closure_0];
            return items;
          }));
        })(closure_0);
      }
    };
    obj = { selected: _slicedToArray.includes(value) };
    obj.leading = handleClose(outer1_0(outer1_9[15]).Checkbox, obj);
    obj.label = value.text;
    let items = [handleClose(outer1_0(outer1_9[14]).FormRow, obj), ];
    let hasItem = value === outer1_0(tmp[9]).RaidResolutionType.OTHER;
    if (hasItem) {
      hasItem = _slicedToArray.includes(outer1_0(tmp[9]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj1 = { style: tmp.textInputContainer };
      const obj2 = { style: tmp.textInput, autoComplete: "off", value: closure_5 };
      const intl = outer1_0(tmp[8]).intl;
      obj2.placeholder = intl.string(outer1_0(tmp[8]).t["PAM+JR"]);
      obj2.onChangeText = handleTextInputChange;
      obj1.children = handleClose(outer1_0(tmp[15]).TextInput, obj2);
      hasItem = handleClose(outer1_5, obj1);
    }
    items[1] = hasItem;
    obj.children = items;
    return outer1_9(outer1_5, obj, value);
  });
  const obj6 = {
    onPress() {
      const obj = { raid_alert_type: outer1_0(tmp[9]).RaidAlertType.JOIN_RAID, raid_alert_id: closure_1, false_alarm_type: _slicedToArray.map((arg0) => arg0.toString()), false_alarm_other_reason: closure_5, guild_id: closure_0 };
      outer1_0(tmp[17]).trackWithMetadata(_undefined.GUILD_RAID_FEEDBACK, obj);
      const obj2 = outer1_0(tmp[17]);
      const obj3 = outer1_0(tmp[18]);
      obj3.handleResolveRaid(closure_0, closure_1, outer1_0(tmp[9]).getMostImportantRaidResolutionType(_slicedToArray));
      handleClose();
      const obj4 = outer1_0(tmp[9]);
      outer1_1(tmp[19]).showSuccessToast(handleTextInputChange.SAFETY_FEEDBACK_SUCCESS);
    }
  };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj6.text = intl7.string(require(1212) /* getSystemLocale */.t.Gh3A0O);
  obj6.size = "md";
  items1[3] = handleClose(require(4543) /* Button */.Button, obj6);
  const obj7 = { onPress: handleClose };
  const intl8 = require(1212) /* getSystemLocale */.intl;
  obj7.text = intl8.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj7.variant = "secondary";
  obj7.size = "md";
  items1[4] = handleClose(require(4543) /* Button */.Button, obj7);
  obj3.children = items1;
  obj2.children = callback2(importDefault(5585), obj3);
  return handleClose(require(5498) /* ActionSheet */.ActionSheet, obj2);
};
