// Module ID: 10977
// Function ID: 85367
// Name: GuildRaidLockdownFeedbackActionSheet
// Dependencies: [57, 31, 653, 33, 4130, 1212, 6750, 4098, 5500, 5186, 5587, 5503, 9094, 7504, 4543, 4324, 2]
// Exports: default

// Module 10977 (GuildRaidLockdownFeedbackActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { display: "flex", gap: 24 } });
const result = require("ME").fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default function GuildRaidLockdownFeedbackActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp2 = first1(React.useState([]), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  const tmp3 = first1(React.useState(), 2);
  first1 = tmp3[0];
  React = tmp3[1];
  let obj = {};
  const intl = guildId(1212).intl;
  obj.text = intl.string(guildId(1212).t["//3pvi"]);
  obj.value = guildId(6750).RaidLockdownFeedbackType.DM_SPAM;
  let items = [obj, , , , , ];
  obj = {};
  const intl2 = guildId(1212).intl;
  obj.text = intl2.string(guildId(1212).t.SdVsip);
  obj.value = guildId(6750).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj;
  const obj1 = {};
  const intl3 = guildId(1212).intl;
  obj1.text = intl3.string(guildId(1212).t.uTiSVL);
  obj1.value = guildId(6750).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj1;
  const obj2 = {};
  const intl4 = guildId(1212).intl;
  obj2.text = intl4.string(guildId(1212).t.GQczU8);
  obj2.value = guildId(6750).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj2;
  const obj3 = {};
  const intl5 = guildId(1212).intl;
  obj3.text = intl5.string(guildId(1212).t.AAgqy3);
  obj3.value = guildId(6750).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj3;
  const obj4 = {};
  const intl6 = guildId(1212).intl;
  obj4.text = intl6.string(guildId(1212).t.ryPKb7);
  obj4.value = guildId(6750).RaidLockdownFeedbackType.OTHER;
  items[5] = obj4;
  const obj5 = { startExpanded: true };
  const obj6 = {};
  const intl7 = guildId(1212).intl;
  obj6.title = intl7.string(guildId(1212).t.f5hd9P);
  obj5.header = callback(guildId(5186).BottomSheetTitleHeader, obj6);
  const obj7 = { style: callback2().container };
  const tmp = callback2();
  const tmp5 = callback;
  const tmp6 = closure_7;
  const obj8 = {
    hasIcons: false,
    children: items.map((value) => {
      value = value.value;
      const guildId = value;
      const obj = {
        onPress() {
          (function onCheckboxChange(closure_0) {
            outer2_2(outer2_1.includes(closure_0) ? ((arr) => arr.filter(/* F85373 */ function() { ... })) : ((arg0) => {
              const items = [...arg0, closure_0];
              return items;
            }));
          })(closure_0);
        },
        checked: first.includes(value),
        label: value.text
      };
      return outer1_6(guildId(9094).TableCheckboxRow, obj, value);
    })
  };
  const items1 = [callback(guildId(5503).TableRowGroup, obj8), , ];
  let hasItem = first.includes(guildId(6750).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj9 = { autoComplete: "off", value: first1 };
    const intl8 = guildId(1212).intl;
    obj9.placeholder = intl8.string(guildId(1212).t["PAM+JR"]);
    obj9.onChange = function onChange(arg0) {
      callback(arg0);
    };
    hasItem = callback(guildId(7504).TextArea, obj9);
  }
  items1[1] = hasItem;
  const obj10 = {
    onPress() {
      let obj = guildId(4324);
      obj = { raid_lockdown_feedback_type: first, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(outer1_5.GUILD_RAID_LOCKDOWN_FEEDBACK, obj);
      first(4098).hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    }
  };
  const intl9 = guildId(1212).intl;
  obj10.text = intl9.string(guildId(1212).t.nAt0rE);
  items1[2] = callback(guildId(4543).Button, obj10);
  obj7.children = items1;
  obj5.children = tmp6(first(5587), obj7);
  return tmp5(guildId(5500).ActionSheet, obj5);
};
