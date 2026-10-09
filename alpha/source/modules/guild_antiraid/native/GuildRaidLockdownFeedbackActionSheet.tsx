// Module ID: 11346
// Function ID: 11347
// Name: GuildRaidLockdownFeedbackActionSheet
// Dependencies: [32, 19, 1085, 21, 5091, 558, 576, 1126, 7233, 5055, 5106, 6892, 6835, 6727, 6269, 6183, 6770, 5376, 2]

// Module 11346 (GuildRaidLockdownFeedbackActionSheet)
import Constants from "Constants" /* 1085 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, value;

let metroImportDefault;
let metroRequire;
let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { display: "flex", gap: 24 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRaidLockdownFeedbackActionSheet(guildId) {
  let closure_2;
  let closure_4;
  let first;
  let first2;
  let flag;
  let flag2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items1;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp9;
  let obj = guildId(576);
  const cResult = obj.c(44);
  guildId = guildId.guildId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  const tmp6 = first2(react.useState(first), 2);
  const first1 = tmp6[0];
  dependencyMap = tmp6[1];
  const tmp7 = first2(react.useState(), 2);
  first2 = tmp7[0];
  react = tmp7[1];
  if (cResult[1] === guildId) {
    if (cResult[2] === first1) {
      if (cResult[3] === first2) {
        if (cResult[4] === tmp4.container) {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
          tmp11 = cResult[7];
          tmp12 = cResult[8];
          tmp13 = cResult[9];
          flag = cResult[10];
          tmp14 = cResult[11];
          tmp15 = cResult[12];
          flag2 = cResult[13];
          tmp16 = cResult[14];
        }
        if (cResult[22] === tmp9) {
          if (cResult[23] === flag) {
            let tmp26;
            if (cResult[24] === tmp14) {
              tmp26 = cResult[25];
            }
            if (cResult[26] === tmp13) {
              if (cResult[27] === first1) {
                let tmp29;
                let tmp32;
                let tmp34;
                if (cResult[28] === first2) {
                  tmp29 = cResult[29];
                }
                const _Symbol2 = Symbol;
                if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl9 = tmp(1126).intl;
                  const stringResult = intl9.string(guildId(1126).t.nAt0rE);
                  cResult[30] = stringResult;
                  tmp32 = stringResult;
                } else {
                  tmp32 = cResult[30];
                }
                if (cResult[31] !== tmp12) {
                  let obj2 = { onPress: tmp12, text: tmp32 };
                  const tmp36 = closure_6(guildId(5376).Button, obj2);
                  cResult[31] = tmp12;
                  cResult[32] = tmp36;
                  tmp34 = tmp36;
                } else {
                  tmp34 = cResult[32];
                }
                if (cResult[33] === tmp10) {
                  if (cResult[34] === tmp34) {
                    if (cResult[35] === tmp15) {
                      if (cResult[36] === tmp26) {
                        let tmp37;
                        if (cResult[37] === tmp29) {
                          tmp37 = cResult[38];
                        }
                        if (cResult[39] === tmp11) {
                          if (cResult[40] === tmp37) {
                            if (cResult[41] === flag2) {
                              let tmp40;
                              if (cResult[42] === tmp16) {
                                tmp40 = cResult[43];
                              }
                              return tmp40;
                            }
                          }
                        }
                        const obj3 = { startExpanded: flag2, header: tmp16, children: tmp37 };
                        const tmp42 = closure_6(tmp11, obj3);
                        cResult[39] = tmp11;
                        cResult[40] = tmp37;
                        cResult[41] = flag2;
                        cResult[42] = tmp16;
                        cResult[43] = tmp42;
                        tmp40 = tmp42;
                      }
                    }
                  }
                }
                const obj4 = { style: tmp15, children: items1 };
                items1 = [tmp26, tmp29, tmp34];
                const tmp39 = closure_7(tmp10, obj4);
                cResult[33] = tmp10;
                cResult[34] = tmp34;
                cResult[35] = tmp15;
                cResult[36] = tmp26;
                cResult[37] = tmp29;
                cResult[38] = tmp39;
                tmp37 = tmp39;
              }
            }
            let hasItem = first1.includes(tmp(7233).RaidLockdownFeedbackType.OTHER);
            if (hasItem) {
              const obj5 = { autoComplete: "off", value: first2, placeholder: intl8.string(guildId(1126).t["PAM+JR"]), onChange: tmp13 };
              const TextArea = tmp(6770).TextArea;
              intl8 = tmp(1126).intl;
              hasItem = closure_6(TextArea, obj5);
            }
            cResult[26] = tmp13;
            cResult[27] = first1;
            cResult[28] = first2;
            cResult[29] = hasItem;
            tmp29 = hasItem;
          }
        }
        const obj6 = { hasIcons: flag, children: tmp14 };
        const tmp28 = closure_6(tmp9, obj6);
        cResult[22] = tmp9;
        cResult[23] = flag;
        cResult[24] = tmp14;
        cResult[25] = tmp28;
        tmp26 = tmp28;
      }
    }
  }
  const obj7 = { text: intl.string(guildId(1126).t["//3pvi"]), value: guildId(7233).RaidLockdownFeedbackType.DM_SPAM };
  intl = tmp(1126).intl;
  const items2 = [obj7, , , , , ];
  const obj8 = { text: intl2.string(guildId(1126).t.SdVsip), value: guildId(7233).RaidLockdownFeedbackType.MENTION_SPAM };
  intl2 = tmp(1126).intl;
  items2[1] = obj8;
  const obj9 = { text: intl3.string(guildId(1126).t.uTiSVL), value: guildId(7233).RaidLockdownFeedbackType.CHANNEL_SPAM };
  intl3 = tmp(1126).intl;
  items2[2] = obj9;
  const obj10 = { text: intl4.string(guildId(1126).t.GQczU8), value: guildId(7233).RaidLockdownFeedbackType.SUS_NEW_MEMBERS };
  intl4 = tmp(1126).intl;
  items2[3] = obj10;
  const obj11 = { text: intl5.string(guildId(1126).t.AAgqy3), value: guildId(7233).RaidLockdownFeedbackType.CHANGING_SETTINGS };
  intl5 = tmp(1126).intl;
  items2[4] = obj11;
  const obj12 = { text: intl6.string(guildId(1126).t.ryPKb7), value: guildId(7233).RaidLockdownFeedbackType.OTHER };
  intl6 = tmp(1126).intl;
  items2[5] = obj12;
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    function handleTextInputChange(arg0) {
      closure_4(arg0);
    }
    cResult[15] = handleTextInputChange;
    tmp17 = handleTextInputChange;
  } else {
    tmp17 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    function handleClose() {
      const obj = first1(closure_2[9]);
      obj.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    }
    cResult[16] = handleClose;
    tmp18 = handleClose;
  } else {
    tmp18 = cResult[16];
  }
  let closure_5 = tmp18;
  if (cResult[17] === guildId) {
    if (cResult[18] === first1) {
      let tmp19;
      let tmp20;
      if (cResult[19] === first2) {
        tmp19 = cResult[20];
      }
      const ActionSheet = tmp(6892).ActionSheet;
      const _Symbol = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = { title: intl7.string(guildId(1126).t.f5hd9P) };
        const BottomSheetTitleHeader = tmp(6835).BottomSheetTitleHeader;
        intl7 = tmp(1126).intl;
        const tmp22 = closure_6(BottomSheetTitleHeader, obj13);
        cResult[21] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[21];
      }
      const tmp24 = first1(6727);
      const container = tmp4.container;
      const TableRowGroup = tmp(6269).TableRowGroup;
      const mapped = items2.map((value) => {
        value = value.value;
        guildId = value;
        const text = value.text;
        const obj = {
          onPress() {
            let closure_0 = guildId;
            closure_2(first1.includes(guildId) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
              return items;
            }));
          },
          checked: first1.includes(value),
          label: text
        };
        const TableCheckboxRow = guildId(closure_2[15]).TableCheckboxRow;
        return closure_1_6(TableCheckboxRow, obj, value);
      });
      cResult[1] = guildId;
      cResult[2] = first1;
      cResult[3] = first2;
      cResult[4] = tmp4.container;
      cResult[5] = TableRowGroup;
      cResult[6] = tmp24;
      cResult[7] = ActionSheet;
      cResult[8] = tmp19;
      cResult[9] = tmp17;
      cResult[10] = false;
      cResult[11] = mapped;
      cResult[12] = container;
      cResult[13] = true;
      cResult[14] = tmp20;
      tmp16 = tmp20;
      flag2 = true;
      tmp15 = container;
      tmp14 = mapped;
      flag = false;
      tmp13 = tmp17;
      tmp12 = tmp19;
      tmp11 = ActionSheet;
      tmp10 = tmp24;
      tmp9 = TableRowGroup;
    }
  }
  function handleSubmit() {
    const obj = AppAnalyticsUtils;
    const obj2 = { raid_lockdown_feedback_type: first1, raid_lockdown_feedback_other_reason: first2, guild_id: guildId };
    obj.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, obj2);
    closure_5();
  }
  cResult[17] = guildId;
  cResult[18] = first1;
  cResult[19] = first2;
  cResult[20] = handleSubmit;
  tmp19 = handleSubmit;
}) : (function GuildRaidLockdownFeedbackActionSheet(guildId) {
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
  let obj = { text: intl.string(guildId(1126).t["//3pvi"]), value: guildId(7233).RaidLockdownFeedbackType.DM_SPAM };
  intl = guildId(1126).intl;
  let items = [obj, , , , , ];
  let obj2 = { text: intl2.string(guildId(1126).t.SdVsip), value: guildId(7233).RaidLockdownFeedbackType.MENTION_SPAM };
  intl2 = guildId(1126).intl;
  items[1] = obj2;
  let obj3 = { text: intl3.string(guildId(1126).t.uTiSVL), value: guildId(7233).RaidLockdownFeedbackType.CHANNEL_SPAM };
  intl3 = guildId(1126).intl;
  items[2] = obj3;
  const obj4 = { text: intl4.string(guildId(1126).t.GQczU8), value: guildId(7233).RaidLockdownFeedbackType.SUS_NEW_MEMBERS };
  intl4 = guildId(1126).intl;
  items[3] = obj4;
  const obj5 = { text: intl5.string(guildId(1126).t.AAgqy3), value: guildId(7233).RaidLockdownFeedbackType.CHANGING_SETTINGS };
  intl5 = guildId(1126).intl;
  items[4] = obj5;
  const obj6 = { text: intl6.string(guildId(1126).t.ryPKb7), value: guildId(7233).RaidLockdownFeedbackType.OTHER };
  intl6 = guildId(1126).intl;
  items[5] = obj6;
  const obj7 = { startExpanded: true, header: closure_6(BottomSheetTitleHeader, obj8), children: tmp8(tmp9, obj9) };
  const ActionSheet = guildId(6892).ActionSheet;
  obj8 = { title: intl7.string(guildId(1126).t.f5hd9P) };
  BottomSheetTitleHeader = guildId(6835).BottomSheetTitleHeader;
  intl7 = guildId(1126).intl;
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
      const TableCheckboxRow = guildId(closure_2[15]).TableCheckboxRow;
      return closure_1_6(TableCheckboxRow, obj, value);
    })
  };
  tmp9 = raid_lockdown_feedback_type(6727);
  const TableRowGroup = guildId(6269).TableRowGroup;
  items1 = [closure_6(TableRowGroup, obj10), , ];
  let hasItem = raid_lockdown_feedback_type.includes(guildId(7233).RaidLockdownFeedbackType.OTHER);
  tmp8 = closure_7;
  if (hasItem) {
    const obj11 = {
      autoComplete: "off",
      value: first1,
      placeholder: intl8.string(guildId(1126).t["PAM+JR"]),
      onChange: function handleTextInputChange(arg0) {
          closure_4(arg0);
        }
    };
    const TextArea = tmp5(6770).TextArea;
    intl8 = tmp5(1126).intl;
    hasItem = tmp7(TextArea, obj11);
  }
  items1[1] = hasItem;
  const obj12 = {
    onPress: function handleSubmit() {
      const obj = AppAnalyticsUtils;
      const obj2 = { raid_lockdown_feedback_type, raid_lockdown_feedback_other_reason: first1, guild_id: guildId };
      obj.trackWithMetadata(AnalyticEvents.GUILD_RAID_LOCKDOWN_FEEDBACK, obj2);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet("GuildRaidLockdownFeedbackActionSheet");
    },
    text: intl9.string(guildId(1126).t.nAt0rE)
  };
  const Button = tmp5(5376).Button;
  intl9 = tmp5(1126).intl;
  items1[2] = closure_6(Button, obj12);
  return closure_6(ActionSheet, obj7);
});
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx");

export default tmp3;
