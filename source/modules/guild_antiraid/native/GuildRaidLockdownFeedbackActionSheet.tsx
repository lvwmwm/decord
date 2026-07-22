// Module ID: 10967
// Function ID: 85318
// Name: GuildRaidLockdownFeedbackActionSheet
// Dependencies: []
// Exports: default

// Module 10967 (GuildRaidLockdownFeedbackActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ container: { overflow: true, position: true } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default function GuildRaidLockdownFeedbackActionSheet(guildId) {
  const arg1 = guildId.guildId;
  const tmp2 = callback(React.useState([]), 2);
  const first = tmp2[0];
  const importDefault = first;
  let closure_2 = tmp2[1];
  const tmp3 = callback(React.useState(), 2);
  const first1 = tmp3[0];
  const callback = first1;
  const React = tmp3[1];
  let obj = {};
  const intl = arg1(closure_2[5]).intl;
  obj.text = intl.string(arg1(closure_2[5]).t.//3pvi);
  obj.value = arg1(closure_2[6]).RaidLockdownFeedbackType.DM_SPAM;
  const items = [obj, , , , , ];
  obj = {};
  const intl2 = arg1(closure_2[5]).intl;
  obj.text = intl2.string(arg1(closure_2[5]).t.SdVsip);
  obj.value = arg1(closure_2[6]).RaidLockdownFeedbackType.MENTION_SPAM;
  items[1] = obj;
  const obj1 = {};
  const intl3 = arg1(closure_2[5]).intl;
  obj1.text = intl3.string(arg1(closure_2[5]).t.uTiSVL);
  obj1.value = arg1(closure_2[6]).RaidLockdownFeedbackType.CHANNEL_SPAM;
  items[2] = obj1;
  const obj2 = {};
  const intl4 = arg1(closure_2[5]).intl;
  obj2.text = intl4.string(arg1(closure_2[5]).t.GQczU8);
  obj2.value = arg1(closure_2[6]).RaidLockdownFeedbackType.SUS_NEW_MEMBERS;
  items[3] = obj2;
  const obj3 = {};
  const intl5 = arg1(closure_2[5]).intl;
  obj3.text = intl5.string(arg1(closure_2[5]).t.AAgqy3);
  obj3.value = arg1(closure_2[6]).RaidLockdownFeedbackType.CHANGING_SETTINGS;
  items[4] = obj3;
  const obj4 = {};
  const intl6 = arg1(closure_2[5]).intl;
  obj4.text = intl6.string(arg1(closure_2[5]).t.ryPKb7);
  obj4.value = arg1(closure_2[6]).RaidLockdownFeedbackType.OTHER;
  items[5] = obj4;
  const obj5 = { startExpanded: true };
  const obj6 = {};
  const intl7 = arg1(closure_2[5]).intl;
  obj6.title = intl7.string(arg1(closure_2[5]).t.f5hd9P);
  obj5.header = callback2(arg1(closure_2[9]).BottomSheetTitleHeader, obj6);
  const obj7 = { style: callback3().container };
  const tmp = callback3();
  const tmp5 = callback2;
  const tmp6 = closure_7;
  const obj8 = {
    hasIcons: false,
    children: items.map((value) => {
      value = value.value;
      const guildId = value;
      const obj = {
        onPress() {
          function onCheckboxChange(value) {
            callback(closure_1.includes(value) ? (arr) => arr.filter(/* F85324 */ function() { ... }) : (arg0) => {
              const items = [...arg0, arg0];
              return items;
            });
          }(value);
        },
        checked: first.includes(value),
        label: value.text
      };
      return callback2(guildId(closure_2[12]).TableCheckboxRow, obj, value);
    })
  };
  const items1 = [callback2(arg1(closure_2[11]).TableRowGroup, obj8), , ];
  let hasItem = first.includes(arg1(closure_2[6]).RaidLockdownFeedbackType.OTHER);
  if (hasItem) {
    const obj9 = { autoComplete: "off", value: first1 };
    const intl8 = arg1(closure_2[5]).intl;
    obj9.placeholder = intl8.string(arg1(closure_2[5]).t.PAM+JR);
    obj9.onChange = function onChange(arg0) {
      callback(arg0);
    };
    hasItem = callback2(arg1(closure_2[13]).TextArea, obj9);
  }
  items1[1] = hasItem;
  const obj10 = {
    onPress() {
      let obj = guildId(closure_2[15]);
      obj = { raid_lockdown_feedback_type: first, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(constants.GUILD_RAID_LOCKDOWN_FEEDBACK, obj);
      first(closure_2[7]).hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    }
  };
  const intl9 = arg1(closure_2[5]).intl;
  obj10.text = intl9.string(arg1(closure_2[5]).t.nAt0rE);
  items1[2] = callback2(arg1(closure_2[14]).Button, obj10);
  obj7.children = items1;
  obj5.children = tmp6(importDefault(closure_2[10]), obj7);
  return tmp5(arg1(closure_2[8]).ActionSheet, obj5);
};
