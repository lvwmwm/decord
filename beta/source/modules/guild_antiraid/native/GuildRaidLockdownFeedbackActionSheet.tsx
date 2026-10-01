// Module ID: 11310
// Function ID: 11311
// Name: GuildRaidLockdownFeedbackActionSheet
// Dependencies: [32, 19, 1074, 21, 4836, 1115, 6938, 4800, 6618, 6570, 5890, 5999, 5916, 6506, 5281, 5016, 2]
// Exports: default

// Module 11310 (GuildRaidLockdownFeedbackActionSheet)
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, value;

let metroImportDefault;
let metroRequire;
let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { display: "flex", gap: 24 } });
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default function GuildRaidLockdownFeedbackActionSheet(guildId) {
  let BottomSheetTitleHeader;
  let closure_2;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items1;
  let obj8;
  let obj9;
  let tmp8;
  let tmp9;
  guildId = guildId.guildId;
  let first1;
  react = undefined;
  const tmp = closure_8();
  const tmp2 = first1(react.useState([]), 2);
  const raid_lockdown_feedback_type = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = first1(react.useState(), 2);
  first1 = tmp3[0];
  react = tmp3[1];
  let obj = { text: intl.string(guildId(1115).t["//3pvi"]), value: guildId(6938).RaidLockdownFeedbackType.DM_SPAM };
  intl = guildId(1115).intl;
  let items = [obj, , , , , ];
  let obj2 = { text: intl2.string(guildId(1115).t.SdVsip), value: guildId(6938).RaidLockdownFeedbackType.MENTION_SPAM };
  intl2 = guildId(1115).intl;
  items[1] = obj2;
  let obj3 = { text: intl3.string(guildId(1115).t.uTiSVL), value: guildId(6938).RaidLockdownFeedbackType.CHANNEL_SPAM };
  intl3 = guildId(1115).intl;
  items[2] = obj3;
  const obj4 = { text: intl4.string(guildId(1115).t.GQczU8), value: guildId(6938).RaidLockdownFeedbackType.SUS_NEW_MEMBERS };
  intl4 = guildId(1115).intl;
  items[3] = obj4;
  const obj5 = { text: intl5.string(guildId(1115).t.AAgqy3), value: guildId(6938).RaidLockdownFeedbackType.CHANGING_SETTINGS };
  intl5 = guildId(1115).intl;
  items[4] = obj5;
  const obj6 = { text: intl6.string(guildId(1115).t.ryPKb7), value: guildId(6938).RaidLockdownFeedbackType.OTHER };
  intl6 = guildId(1115).intl;
  items[5] = obj6;
  const obj7 = { startExpanded: true, header: closure_6(BottomSheetTitleHeader, obj8), children: tmp8(tmp9, obj9) };
  const ActionSheet = guildId(6618).ActionSheet;
  obj8 = { title: intl7.string(guildId(1115).t.f5hd9P) };
  BottomSheetTitleHeader = guildId(6570).BottomSheetTitleHeader;
  intl7 = guildId(1115).intl;
  obj9 = { style: tmp.container, children: items1 };
  const obj10 = {
    hasIcons: false,
    children: items.map((value) => {
      value = value.value;
      guildId = value;
      const text = value.text;
      const obj = {
        onPress() {
          let closure_0 = guildId;
          closure_2(first.includes(guildId) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
            return items;
          }));
        },
        checked: first.includes(value),
        label: text
      };
      const TableCheckboxRow = guildId(closure_2[12]).TableCheckboxRow;
      return closure_1_6(TableCheckboxRow, obj, value);
    })
  };
  tmp9 = raid_lockdown_feedback_type(5890);
  const TableRowGroup = guildId(5999).TableRowGroup;
  items1 = [closure_6(TableRowGroup, obj10), , ];
  let hasItem = raid_lockdown_feedback_type.includes(guildId(6938).RaidLockdownFeedbackType.OTHER);
  tmp8 = closure_7;
  if (hasItem) {
    const obj11 = {
      autoComplete: "off",
      value: first1,
      placeholder: intl8.string(guildId(1115).t["PAM+JR"]),
      onChange(arg0) {
          closure_4(arg0);
        }
    };
    const TextArea = tmp5(6506).TextArea;
    intl8 = tmp5(1115).intl;
    hasItem = tmp7(TextArea, obj11);
  }
  items1[1] = hasItem;
  const obj12 = {
    onPress() {
      const obj = AppAnalyticsUtils;
      const obj2 = { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: intl9.string(guildId(1115).t.nAt0rE)
  };
  const Button = tmp5(5281).Button;
  intl9 = tmp5(1115).intl;
  items1[2] = closure_6(Button, obj12);
  return closure_6(ActionSheet, obj7);
};
