// Module ID: 11471
// Function ID: 11472
// Name: GuildRaidResolveActionSheet
// Dependencies: [32, 19, 17, 1085, 7015, 21, 5090, 587, 558, 576, 1126, 7228, 5054, 5105, 11437, 7014, 6885, 6720, 5086, 8555, 1200, 5375, 2]

// Module 11471 (GuildRaidResolveActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl9 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6720 */;
import ActionSheet2 from "ActionSheet" /* 6885 */;
import SafetyToastsActionCreatorsDefault from "SafetyToastsActionCreators" /* 7014 */;
import Constants2 from "Constants" /* 7015 */;
import AutomodFeedback from "AutomodFeedback" /* 7228 */;
import GuildAntiRaidActionCreators from "GuildAntiRaidActionCreators" /* 11437 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRaidResolveActionSheet(guildId) {
  let closure_2;
  let closure_3;
  let closure_5;
  let closure_7;
  let first;
  let first1;
  let first2;
  let handleTextInputChange;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp = guildId;
  const tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(49);
  guildId = guildId.guildId;
  const messageId = guildId.messageId;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  [first1, closure_5] = first1.useState(first);
  [first2, closure_7] = first1.useState();
  if (cResult[1] === first2) {
    if (cResult[2] === first1) {
      if (cResult[3] === guildId) {
        if (cResult[4] === messageId) {
          if (cResult[5] === tmp4.container) {
            if (cResult[6] === tmp4.option) {
              if (cResult[7] === tmp4.optionContainer) {
                if (cResult[8] === tmp4.subtitle) {
                  if (cResult[9] === tmp4.textInput) {
                    if (cResult[10] === tmp4.textInputContainer) {
                      let tmp33;
                      let tmp35;
                      let tmp38;
                      let tmp40;
                      if (cResult[11] === tmp4.title) {
                        tmp10 = cResult[12];
                        tmp11 = cResult[13];
                        _slicedToArray = cResult[14];
                        tmp13 = cResult[15];
                        tmp14 = cResult[16];
                        tmp15 = cResult[17];
                        tmp16 = cResult[18];
                        tmp17 = cResult[19];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl7 = tmp(1126).intl;
                        const stringResult = intl7.string(tmp(1126).t.Gh3A0O);
                        cResult[32] = stringResult;
                        tmp33 = stringResult;
                      } else {
                        tmp33 = cResult[32];
                      }
                      if (cResult[33] !== tmp13) {
                        let obj2 = { onPress: tmp13, text: tmp33, size: "md" };
                        const tmp37 = handleTextInputChange(tmp(5375).Button, obj2);
                        cResult[33] = tmp13;
                        cResult[34] = tmp37;
                        tmp35 = tmp37;
                      } else {
                        tmp35 = cResult[34];
                      }
                      const _Symbol4 = Symbol;
                      if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl8 = tmp(1126).intl;
                        const stringResult1 = intl8.string(tmp(1126).t["ETE/oC"]);
                        cResult[35] = stringResult1;
                        tmp38 = stringResult1;
                      } else {
                        tmp38 = cResult[35];
                      }
                      if (cResult[36] !== tmp12) {
                        let obj3 = { onPress: tmp12, text: tmp38, variant: "secondary", size: "md" };
                        const tmp42 = handleTextInputChange(tmp(5375).Button, obj3);
                        cResult[36] = tmp12;
                        cResult[37] = tmp42;
                        tmp40 = tmp42;
                      } else {
                        tmp40 = cResult[37];
                      }
                      if (cResult[38] === tmp10) {
                        if (cResult[39] === tmp14) {
                          if (cResult[40] === tmp15) {
                            if (cResult[41] === tmp16) {
                              if (cResult[42] === tmp17) {
                                if (cResult[43] === tmp35) {
                                  let tmp43;
                                  if (cResult[44] === tmp40) {
                                    tmp43 = cResult[45];
                                  }
                                  if (cResult[46] === tmp11) {
                                    let tmp46;
                                    if (cResult[47] === tmp43) {
                                      tmp46 = cResult[48];
                                    }
                                    return tmp46;
                                  }
                                  let obj4 = { children: tmp43 };
                                  const tmp48 = handleTextInputChange(tmp11, obj4);
                                  cResult[46] = tmp11;
                                  cResult[47] = tmp43;
                                  cResult[48] = tmp48;
                                  tmp46 = tmp48;
                                }
                              }
                            }
                          }
                        }
                      }
                      let obj5 = { style: tmp14, children: items1 };
                      items1 = [tmp15, tmp16, tmp17, tmp35, tmp40];
                      const tmp45 = closure_9(tmp10, obj5);
                      cResult[38] = tmp10;
                      cResult[39] = tmp14;
                      cResult[40] = tmp15;
                      cResult[41] = tmp16;
                      cResult[42] = tmp17;
                      cResult[43] = tmp35;
                      cResult[44] = tmp40;
                      cResult[45] = tmp45;
                      tmp43 = tmp45;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let obj6 = { text: intl.string(tmp(1126).t.yeaXw5), value: tmp(7228).RaidResolutionType.LEGITIMATE_ACTIVITY };
  intl = tmp(1126).intl;
  const items2 = [obj6, , , ];
  const obj7 = { text: intl2.string(tmp(1126).t["o++3B8"]), value: tmp(7228).RaidResolutionType.DM_SPAM };
  intl2 = tmp(1126).intl;
  items2[1] = obj7;
  const obj8 = { text: intl3.string(tmp(1126).t.UfHAwZ), value: tmp(7228).RaidResolutionType.JOIN_RAID };
  intl3 = tmp(1126).intl;
  items2[2] = obj8;
  const obj9 = { text: intl4.string(tmp(1126).t.K3UWeR), value: tmp(7228).RaidResolutionType.OTHER };
  intl4 = tmp(1126).intl;
  items2[3] = obj9;
  handleTextInputChange = function handleTextInputChange(Button) {
    closure_7(Button);
  };
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    function handleClose() {
      const obj = messageId(closure_2[12]);
      obj.hideActionSheet("GuildRaidResolveActionSheet");
    }
    cResult[20] = handleClose;
    tmp18 = handleClose;
  } else {
    tmp18 = cResult[20];
  }
  _slicedToArray = tmp18;
  if (cResult[21] === first2) {
    if (cResult[22] === first1) {
      if (cResult[23] === guildId) {
        let tmp19;
        let tmp22;
        let tmp24;
        let tmp27;
        let tmp29;
        if (cResult[24] === messageId) {
          tmp19 = cResult[25];
        }
        const ActionSheet = tmp(6885).ActionSheet;
        const tmp21 = messageId(6720);
        const container = tmp4.container;
        const _Symbol = Symbol;
        const title = tmp4.title;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = tmp(1126).intl;
          const stringResult2 = intl5.string(tmp(1126).t["1zmw/H"]);
          cResult[26] = stringResult2;
          tmp22 = stringResult2;
        } else {
          tmp22 = cResult[26];
        }
        if (cResult[27] !== tmp4.title) {
          const obj10 = { style: title, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp22 };
          const tmp26 = handleTextInputChange(tmp(5086).Text, obj10);
          cResult[27] = tmp4.title;
          cResult[28] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[28];
        }
        const _Symbol2 = Symbol;
        const subtitle = tmp4.subtitle;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = tmp(1126).intl;
          const stringResult3 = intl6.string(tmp(1126).t.nF79oO);
          cResult[29] = stringResult3;
          tmp27 = stringResult3;
        } else {
          tmp27 = cResult[29];
        }
        if (cResult[30] !== tmp4.subtitle) {
          const obj11 = { style: subtitle, variant: "text-sm/normal", color: "text-default", children: tmp27 };
          const tmp31 = handleTextInputChange(tmp(5086).Text, obj11);
          cResult[30] = tmp4.subtitle;
          cResult[31] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[31];
        }
        const mapped = items2.map((value) => {
          let Checkbox;
          let TextInput;
          let intl;
          let items;
          let obj3;
          let obj6;
          value = value.value;
          guildId = value;
          const text = value.text;
          const obj = { style: closure_2.optionContainer, children: items };
          const obj2 = {
            style: closure_2.option,
            onPress() {
              let closure_0 = guildId;
              closure_5(first1.includes(guildId) ? ((arr) => arr.filter((item) => item !== closure_1_0)) : ((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
                return items;
              }));
            },
            leading: handleTextInputChange(Checkbox, obj3),
            label: text
          };
          const FormRow = guildId(closure_2[19]).FormRow;
          obj3 = { selected: first1.includes(value) };
          Checkbox = guildId(closure_2[20]).Checkbox;
          items = [handleTextInputChange(FormRow, obj2), ];
          let hasItem = value === guildId(closure_2[11]).RaidResolutionType.OTHER;
          const obj4 = first1;
          const tmp = closure_1_9;
          if (hasItem) {
            hasItem = obj4.includes(tmp5(tmp6[11]).RaidResolutionType.OTHER);
          }
          if (hasItem) {
            const obj5 = { style: closure_2.textInputContainer, children: handleTextInputChange(TextInput, obj6) };
            obj6 = { style: closure_2.textInput, autoComplete: "off", value: first2, placeholder: intl.string(guildId(closure_2[10]).t["PAM+JR"]), onChangeText: handleTextInputChange };
            TextInput = tmp5(tmp6[20]).TextInput;
            intl = tmp5(tmp6[10]).intl;
            hasItem = tmp4(tmp2, obj5);
          }
          items[1] = hasItem;
          return tmp(closure_5, obj, value);
        });
        cResult[1] = first2;
        cResult[2] = first1;
        cResult[3] = guildId;
        cResult[4] = messageId;
        cResult[5] = tmp4.container;
        cResult[6] = tmp4.option;
        cResult[7] = tmp4.optionContainer;
        cResult[8] = tmp4.subtitle;
        cResult[9] = tmp4.textInput;
        cResult[10] = tmp4.textInputContainer;
        cResult[11] = tmp4.title;
        cResult[12] = tmp21;
        cResult[13] = ActionSheet;
        cResult[14] = tmp18;
        cResult[15] = tmp19;
        cResult[16] = container;
        cResult[17] = tmp24;
        cResult[18] = tmp29;
        cResult[19] = mapped;
        tmp16 = tmp29;
        tmp17 = mapped;
        tmp15 = tmp24;
        tmp14 = container;
        tmp13 = tmp19;
        tmp11 = ActionSheet;
        tmp10 = tmp21;
      }
    }
  }
  function handleSubmit() {
    const obj = { raid_alert_type: AutomodFeedback.RaidAlertType.JOIN_RAID, raid_alert_id: messageId, false_alarm_type: first1.map((item) => item.toString()), false_alarm_other_reason: first2, guild_id: guildId };
    const obj2 = AppAnalyticsUtils;
    obj2.trackWithMetadata(AnalyticEvents.GUILD_RAID_FEEDBACK, obj);
    const handleResolveRaid = GuildAntiRaidActionCreators.handleResolveRaid;
    GuildAntiRaidActionCreators;
    const obj3 = AutomodFeedback;
    handleResolveRaid(guildId, messageId, obj3.getMostImportantRaidResolutionType(first1));
    closure_3();
    const obj4 = SafetyToastsActionCreatorsDefault;
    obj4.showSuccessToast(SafetyToastType.SAFETY_FEEDBACK_SUCCESS);
  }
  cResult[21] = first2;
  cResult[22] = first1;
  cResult[23] = guildId;
  cResult[24] = messageId;
  cResult[25] = handleSubmit;
  tmp19 = handleSubmit;
}) : (function GuildRaidResolveActionSheet(arg0) {
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
      hasItem = obj4.includes(tmp5(tmp6[11]).RaidResolutionType.OTHER);
    }
    if (hasItem) {
      const obj5 = { style: closure_2.textInputContainer, children: closure_1_8(TextInput, obj6) };
      obj6 = { style: closure_2.textInput, autoComplete: "off", value: _undefined2, placeholder: intl.string(require("intl").t["PAM+JR"]), onChangeText: handleTextInputChange };
      TextInput = tmp5(tmp6[20]).TextInput;
      intl = tmp5(tmp6[10]).intl;
      hasItem = tmp4(tmp2, obj5);
    }
    items[1] = hasItem;
    return tmp(_undefined2, obj, value);
  });
  const obj9 = {
    onPress: function handleSubmit() {
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
});
const result = size.fileFinishedImporting("modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx");

export default tmp4;
