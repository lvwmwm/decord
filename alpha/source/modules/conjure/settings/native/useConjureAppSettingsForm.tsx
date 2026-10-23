// Module ID: 11791
// Function ID: 11792
// Name: useConjureAppSettingsForm
// Dependencies: [5, 32, 19, 17, 4899, 4843, 4911, 1392, 10715, 21, 4969, 587, 504, 11792, 1128, 3830, 10808, 10807, 11793, 6985, 11794, 6898, 6983, 6982, 7178, 7006, 5232, 5242, 558, 576, 11805, 7343, 6901, 6912, 5602, 5208, 11807, 11806, 11809, 2]
// Exports: default

// Module 11791 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5208 */;
import conjureSettingValues from "conjureSettingValues" /* 10808 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11807 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 11809 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4899 */;
import GuildStore from "GuildStore" /* 4843 */;
import RelationshipStore from "RelationshipStore" /* 4911 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10715 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, channels, importDefault, map, obj1, showActionSheetResult;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const useConjureSettingPickerOptions = tmp(11805);
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
const ConjureSettingsPickerSheet = "ConjureSettingsPickerSheet";
let createStyles = createStyles_mod;
let obj = { linkedField: obj2, section: obj3, secretRow: obj4, secretRowInfo: obj5 };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelSettingRow(def) {
  let disabled;
  let fallback;
  let first;
  let hint;
  let isPreview;
  let onChange;
  let projectId;
  let tmp7;
  let tmp8;
  let tmpResult5;
  let value;
  let tmp = def;
  let tmp2 = onChange;
  let obj = def(onChange[29]);
  const cResult = obj.c(44);
  def = def.def;
  ({ hint, value } = def);
  importDefault = value;
  ({ disabled, onChange } = def);
  ({ fallback, projectId, isPreview } = def);
  let obj2 = def(onChange[30]);
  const conjureSettingsGuildId = obj2.useConjureSettingsGuildId(projectId, isPreview);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== conjureSettingsGuildId) {
    const fn = function l() {
      channels = null;
      if (null != conjureSettingsGuildId) {
        channels = GuildChannelStore.getChannels(tmp);
      }
      return channels;
    };
    const items1 = [conjureSettingsGuildId];
    cResult[1] = conjureSettingsGuildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let tmp10 = fallback;
  if (null != conjureSettingsGuildId) {
    tmp10 = fallback;
    if (null != stateFromStores) {
      let arr3;
      let found;
      let tmp22;
      let channelName;
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === def.channel_filter) {
          if (cResult[6] === def.label) {
            if (cResult[7] === disabled) {
              if (cResult[8] === hint) {
                let tmp11;
                let tmp12;
                let tmp13;
                let tmp16;
                let tmp17;
                let tmp18;
                let flag;
                let tmp19;
                let flag2;
                if (cResult[9] === value) {
                  tmp11 = cResult[10];
                  tmp12 = cResult[11];
                  tmp13 = cResult[12];
                  arr3 = cResult[13];
                  found = cResult[14];
                  tmp16 = cResult[15];
                  tmp17 = cResult[16];
                  tmp18 = cResult[17];
                  flag = cResult[18];
                  tmp19 = cResult[19];
                  flag2 = cResult[20];
                }
                if (cResult[23] === tmp11) {
                  let tmp32;
                  if (cResult[24] === tmp16) {
                    tmp32 = cResult[25];
                  }
                  if (cResult[26] === tmp14) {
                    if (cResult[27] === def.label) {
                      if (cResult[28] === conjureSettingsGuildId) {
                        if (cResult[29] === onChange) {
                          let tmp34;
                          if (cResult[30] === tmp15) {
                            tmp34 = cResult[31];
                          }
                          if (cResult[32] === tmp12) {
                            if (cResult[33] === tmp32) {
                              if (cResult[34] === tmp34) {
                                if (cResult[35] === tmp17) {
                                  if (cResult[36] === tmp18) {
                                    if (cResult[37] === flag) {
                                      let tmp35;
                                      if (cResult[38] === tmp19) {
                                        tmp35 = cResult[39];
                                      }
                                      if (cResult[40] === tmp13) {
                                        if (cResult[41] === tmp35) {
                                          let tmp37;
                                          if (cResult[42] === flag2) {
                                            tmp37 = cResult[43];
                                          }
                                          tmp10 = tmp37;
                                        }
                                      }
                                      class N {
                                        constructor() {
                                          tmp = closure_0(closure_2[35]);
                                          obj = { content: null, key: null, stackingBehavior: "stack" };
                                          showActionSheet = tmp.showActionSheet;
                                          obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                                          obj4 = { title: def.label };
                                          obj1.header = obj4;
                                          tmp2 = closure_1(closure_2[36]);
                                          obj1.guild = closure_8.getGuild(closure_3);
                                          obj1.channels = closure_4;
                                          obj1.selectedChannel = c5;
                                          intl = closure_0(closure_2[14]).intl;
                                          obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
                                          obj1.onSelect = function onSelect(id) {
                                            let str;
                                            const tmp = onChange;
                                            if (id != null) {
                                              str = id.id;
                                            }
                                            if (str == null) {
                                              str = "";
                                            }
                                            return tmp(str);
                                          };
                                          obj.content = jsx(tmp2, obj1);
                                          obj.key = ConjureSettingsChannelSheet;
                                          showActionSheetResult = showActionSheet(obj);
                                          return;
                                        }
                                      }
                                      let obj3 = { hasIcons: flag2, children: tmp35 };
                                      const tmp38 = closure_12(tmp13, obj3);
                                      cResult[40] = tmp13;
                                      cResult[41] = tmp35;
                                      cResult[42] = flag2;
                                      cResult[43] = tmp38;
                                      tmp37 = tmp38;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class N {
                            constructor() {
                              tmp = closure_0(closure_2[35]);
                              obj = { content: null, key: null, stackingBehavior: "stack" };
                              showActionSheet = tmp.showActionSheet;
                              obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                              obj4 = { title: def.label };
                              obj1.header = obj4;
                              tmp2 = closure_1(closure_2[36]);
                              obj1.guild = closure_8.getGuild(closure_3);
                              obj1.channels = closure_4;
                              obj1.selectedChannel = c5;
                              intl = closure_0(closure_2[14]).intl;
                              obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
                              obj1.onSelect = function onSelect(id) {
                                let str;
                                const tmp = onChange;
                                if (id != null) {
                                  str = id.id;
                                }
                                if (str == null) {
                                  str = "";
                                }
                                return tmp(str);
                              };
                              obj.content = jsx(tmp2, obj1);
                              obj.key = ConjureSettingsChannelSheet;
                              showActionSheetResult = showActionSheet(obj);
                              return;
                            }
                          }
                          const obj4 = { label: tmp17, subLabel: tmp18, arrow: flag, disabled: tmp19, trailing: tmp32, onPress: tmp34 };
                          const tmp36 = closure_12(tmp12, obj4);
                          cResult[32] = tmp12;
                          cResult[33] = tmp32;
                          cResult[34] = tmp34;
                          cResult[35] = tmp17;
                          cResult[36] = tmp18;
                          cResult[37] = flag;
                          cResult[38] = tmp19;
                          cResult[39] = tmp36;
                          tmp35 = tmp36;
                        }
                      }
                    }
                  }
                  class N {
                    constructor() {
                      tmp = closure_0(closure_2[35]);
                      obj = { content: null, key: null, stackingBehavior: "stack" };
                      showActionSheet = tmp.showActionSheet;
                      obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                      obj4 = { title: def.label };
                      obj1.header = obj4;
                      tmp2 = closure_1(closure_2[36]);
                      obj1.guild = closure_8.getGuild(closure_3);
                      obj1.channels = closure_4;
                      obj1.selectedChannel = c5;
                      intl = closure_0(closure_2[14]).intl;
                      obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
                      obj1.onSelect = function onSelect(id) {
                        let str;
                        const tmp = onChange;
                        if (id != null) {
                          str = id.id;
                        }
                        if (str == null) {
                          str = "";
                        }
                        return tmp(str);
                      };
                      obj.content = jsx(tmp2, obj1);
                      obj.key = ConjureSettingsChannelSheet;
                      showActionSheetResult = showActionSheet(obj);
                      return;
                    }
                  }
                  cResult[26] = tmp14;
                  cResult[27] = def.label;
                  cResult[28] = conjureSettingsGuildId;
                  cResult[29] = onChange;
                  cResult[30] = tmp15;
                  cResult[31] = N;
                  tmp34 = N;
                }
                const obj5 = { text: tmp16 };
                const tmp33 = closure_12(tmp11, obj5);
                cResult[23] = tmp11;
                cResult[24] = tmp16;
                cResult[25] = tmp33;
                tmp32 = tmp33;
              }
            }
          }
        }
      }
      tmp(tmp2[31]);
      found = arr3.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(tmp2[19]).TableRowGroup;
      const TableRow = tmp(tmp2[32]).TableRow;
      const label = def.label;
      if (cResult[21] !== hint) {
        let tmp23;
        if (null != hint) {
          const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: tmpResult5.conjureLinkedNodes(hint, "text-xs/medium") };
          class N {
            constructor() {
              tmp = closure_0(closure_2[35]);
              obj = { content: null, key: null, stackingBehavior: "stack" };
              showActionSheet = tmp.showActionSheet;
              obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
              obj4 = { title: def.label };
              obj1.header = obj4;
              tmp2 = closure_1(closure_2[36]);
              obj1.guild = closure_8.getGuild(closure_3);
              obj1.channels = closure_4;
              obj1.selectedChannel = c5;
              intl = closure_0(closure_2[14]).intl;
              obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
              obj1.onSelect = function onSelect(id) {
                let str;
                const tmp = onChange;
                if (id != null) {
                  str = id.id;
                }
                if (str == null) {
                  str = "";
                }
                return tmp(str);
              };
              obj.content = jsx(tmp2, obj1);
              obj.key = ConjureSettingsChannelSheet;
              showActionSheetResult = showActionSheet(obj);
              return;
            }
          }
          let str = "text-xs/medium";
          tmpResult5 = tmp(tmp2[20]);
          tmp23 = closure_12(tmp25, obj6);
        }
        class N {
          constructor() {
            tmp = closure_0(closure_2[35]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[36]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[14]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
            obj1.onSelect = function onSelect(id) {
              let str;
              const tmp = onChange;
              if (id != null) {
                str = id.id;
              }
              if (str == null) {
                str = "";
              }
              return tmp(str);
            };
            obj.content = jsx(tmp2, obj1);
            obj.key = ConjureSettingsChannelSheet;
            showActionSheetResult = showActionSheet(obj);
            return;
          }
        }
        cResult[21] = hint;
        cResult[22] = tmp23;
        tmp22 = tmp23;
      } else {
        tmp22 = cResult[22];
      }
      const TableRowTrailingText = tmp(tmp2[33]).TableRowTrailingText;
      if (null != found) {
        const tmpResult6 = tmp(tmp2[34]);
        class N {
          constructor() {
            tmp = closure_0(closure_2[35]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[36]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[14]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
            obj1.onSelect = function onSelect(id) {
              let str;
              const tmp = onChange;
              if (id != null) {
                str = id.id;
              }
              if (str == null) {
                str = "";
              }
              return tmp(str);
            };
            obj.content = jsx(tmp2, obj1);
            obj.key = ConjureSettingsChannelSheet;
            showActionSheetResult = showActionSheet(obj);
            return;
          }
        }
        channelName = tmpResult6.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(tmp2[14]).intl;
        class N {
          constructor() {
            tmp = closure_0(closure_2[35]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[36]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[14]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[15])["jtBVV+"]);
            obj1.onSelect = function onSelect(id) {
              let str;
              const tmp = onChange;
              if (id != null) {
                str = id.id;
              }
              if (str == null) {
                str = "";
              }
              return tmp(str);
            };
            obj.content = jsx(tmp2, obj1);
            obj.key = ConjureSettingsChannelSheet;
            showActionSheetResult = showActionSheet(obj);
            return;
          }
        }
        channelName = tmp26(require("module_3830").iZIF9m);
      }
      cResult[4] = stateFromStores;
      cResult[5] = def.channel_filter;
      cResult[6] = def.label;
      cResult[7] = disabled;
      cResult[8] = hint;
      cResult[9] = value;
      cResult[10] = TableRowTrailingText;
      cResult[11] = TableRow;
      cResult[12] = TableRowGroup;
      cResult[13] = arr3;
      cResult[14] = found;
      cResult[15] = channelName;
      cResult[16] = label;
      cResult[17] = tmp22;
      cResult[18] = true;
      cResult[19] = disabled;
      cResult[20] = false;
      tmp16 = channelName;
      flag2 = false;
      tmp19 = disabled;
      flag = true;
      tmp18 = tmp22;
      tmp17 = label;
      tmp13 = TableRowGroup;
      tmp12 = TableRow;
      tmp11 = TableRowTrailingText;
    }
  }
  return tmp10;
}) : (function ConjureChannelSettingRow(def) {
  let TableRowTrailingText;
  let disabled;
  let fallback;
  let hint;
  let isPreview;
  let obj6;
  let projectId;
  let tmp6Result;
  let tmpResult3;
  def = def.def;
  ({ hint, value: importDefault, onChange: dependencyMap } = def);
  let c4;
  let found;
  let tmp = def;
  let tmp2 = dependencyMap;
  ({ projectId, isPreview, disabled, fallback } = def);
  let obj = def(11805);
  const conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, isPreview);
  let obj2 = def(504);
  const items = [GuildChannelStore];
  const items1 = [conjureSettingsGuildId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    channels = null;
    if (null != conjureSettingsGuildId) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items1);
  if (null != conjureSettingsGuildId) {
    if (null != stateFromStores) {
      let channelName;
      const tmpResult = tmp(7343);
      const result = tmpResult.conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(6985).TableRowGroup;
      let obj3 = {
        label: def.label,
        subLabel: tmp6Result,
        arrow: true,
        disabled,
        trailing: closure_12(TableRowTrailingText, obj6),
        onPress() {
              let intl;
              let obj2;
              let obj3;
              let tmp2;
              let tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = { content: authStore2(tmp2, obj2), key: ConjureSettingsChannelSheet, stackingBehavior: "stack" };
              obj2 = {
                header: obj3,
                guild: GuildStore.getGuild(conjureSettingsGuildId),
                channels,
                selectedChannel: found,
                noChannelOptionLabel: intl.string(_modDef3830["jtBVV+"]),
                onSelect(id) {
                  let str;
                  const tmp = closure_1_2;
                  if (id != null) {
                    str = id.id;
                  }
                  if (str == null) {
                    str = "";
                  }
                  return tmp(str);
                }
              };
              obj3 = { title: def.label };
              tmp2 = ChannelPickerActionSheetDefault;
              intl = intl5.intl;
              showActionSheet(obj);
            }
      };
      tmp6Result = undefined;
      const TableRow = tmp(6901).TableRow;
      if (null != hint) {
        const obj4 = { variant: "text-xs/medium", color: "text-subtle", children: tmpResult3.conjureLinkedNodes(hint, "text-xs/medium") };
        const Text = tmp(5232).Text;
        let str = "text-xs/medium";
        tmpResult3 = tmp(11794);
        tmp6Result = tmp6(Text, obj4);
      }
      TableRowTrailingText = tmp(6912).TableRowTrailingText;
      if (null != found) {
        const tmpResult4 = tmp(5602);
        channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1128).intl;
        channelName = intl.string(_modDef3830.iZIF9m);
      }
      const obj5 = { hasIcons: false, children: closure_12(TableRow, obj3) };
      obj6 = { text: channelName };
      return closure_12(TableRowGroup, obj5);
    }
  }
  return fallback;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePickerSettingRow(def) {
  let arr;
  let conjureSettingsGuildId;
  let disabled;
  let fallback;
  let hint;
  let isPreview;
  let onChange;
  let projectId;
  let value;
  let tmp = def;
  let tmp2 = conjureSettingsGuildId;
  let obj = def(conjureSettingsGuildId[29]);
  const cResult = obj.c(29);
  def = def.def;
  ({ hint, value, disabled, onChange } = def);
  ({ projectId, isPreview, fallback } = def);
  let obj2 = def(conjureSettingsGuildId[30]);
  conjureSettingsGuildId = obj2.useConjureSettingsGuildId(projectId, isPreview);
  let tmp5 = onChange;
  const tmp6 = onChange(conjureSettingsGuildId[30])(conjureSettingsGuildId, def);
  if (cResult[0] !== value) {
    const tmpResult = tmp(tmp2[30]);
    const result = tmpResult.conjureSettingPickedIds(value);
    let num = 0;
    cResult[0] = value;
    cResult[1] = result;
    arr = result;
  } else {
    arr = cResult[1];
  }
  let tmp9 = null;
  const useConjureMemberRequests = tmp(tmp2[37]).useConjureMemberRequests;
  tmp(tmp2[37]);
  if ("user" === def.type) {
    tmp9 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp9, arr);
  if (null != conjureSettingsGuildId) {
    if (null != tmp6) {
      let formatToPlainStringResult;
      if (cResult[2] === def.multiple) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === arr) {
            let tmp13;
            let tmp20;
            let tmp24;
            if (cResult[5] === value) {
              let closure_3 = cResult[6];
              let _slicedToArray = cResult[7];
              tmp13 = cResult[8];
            }
            const label = def.label;
            if (cResult[10] !== hint) {
              let tmp21;
              if (null != hint) {
                const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                const Text = tmp(tmp2[26]).Text;
                tmp(tmp2[20]);
                class I {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = closure_0(closure_2[35]);
                    showActionSheet = tmp3.showActionSheet;
                    tmp4 = jsx;
                    obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                    num = 1;
                    tmp5 = closure_1(closure_2[38]);
                    if (closure_3) {
                      num = tmp(tmp2[30]).MAX_CONJURE_SETTING_PICKS;
                    }
                    obj1 = { content: null, key: null, stackingBehavior: "stack" };
                    obj.maxPicks = num;
                    obj.selected = closure_4.filter((id) => arr.includes(id.id));
                    obj.onSubmit = function onSubmit(arr) {
                      const mapped = arr.map(() => { /* body not rendered: F159695 */ });
                      let tmp3 = mapped;
                      const tmp2 = onChange;
                      if (!closure_1_3) {
                        let str = mapped[0];
                        if (str == null) {
                          str = "";
                        }
                        tmp3 = str;
                      }
                      tmp2(tmp3);
                    };
                    obj1.content = tmp4(tmp5, obj);
                    obj1.key = ConjureSettingsPickerSheet;
                    showActionSheetResult = showActionSheet(obj1);
                    return;
                  }
                }
                tmp21 = closure_12(Text, obj3);
              }
              cResult[10] = hint;
              class I {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  tmp3 = closure_0(closure_2[35]);
                  showActionSheet = tmp3.showActionSheet;
                  tmp4 = jsx;
                  obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                  num = 1;
                  tmp5 = closure_1(closure_2[38]);
                  if (closure_3) {
                    num = tmp(tmp2[30]).MAX_CONJURE_SETTING_PICKS;
                  }
                  obj1 = { content: null, key: null, stackingBehavior: "stack" };
                  obj.maxPicks = num;
                  obj.selected = closure_4.filter((id) => arr.includes(id.id));
                  obj.onSubmit = function onSubmit(arr) {
                    const mapped = arr.map(() => { /* body not rendered: F159695 */ });
                    let tmp3 = mapped;
                    const tmp2 = onChange;
                    if (!closure_1_3) {
                      let str = mapped[0];
                      if (str == null) {
                        str = "";
                      }
                      tmp3 = str;
                    }
                    tmp2(tmp3);
                  };
                  obj1.content = tmp4(tmp5, obj);
                  obj1.key = ConjureSettingsPickerSheet;
                  showActionSheetResult = showActionSheet(obj1);
                  return;
                }
              }
              tmp20 = tmp21;
            } else {
              tmp20 = cResult[11];
            }
            if (cResult[12] !== tmp13) {
              const obj4 = { text: tmp13 };
              const tmp26 = closure_12(tmp(tmp2[33]).TableRowTrailingText, obj4);
              class I {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  tmp3 = closure_0(closure_2[35]);
                  showActionSheet = tmp3.showActionSheet;
                  tmp4 = jsx;
                  obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                  num = 1;
                  tmp5 = closure_1(closure_2[38]);
                  if (closure_3) {
                    num = tmp(tmp2[30]).MAX_CONJURE_SETTING_PICKS;
                  }
                  obj1 = { content: null, key: null, stackingBehavior: "stack" };
                  obj.maxPicks = num;
                  obj.selected = closure_4.filter((id) => arr.includes(id.id));
                  obj.onSubmit = function onSubmit(arr) {
                    const mapped = arr.map(() => { /* body not rendered: F159695 */ });
                    let tmp3 = mapped;
                    const tmp2 = onChange;
                    if (!closure_1_3) {
                      let str = mapped[0];
                      if (str == null) {
                        str = "";
                      }
                      tmp3 = str;
                    }
                    tmp2(tmp3);
                  };
                  obj1.content = tmp4(tmp5, obj);
                  obj1.key = ConjureSettingsPickerSheet;
                  showActionSheetResult = showActionSheet(obj1);
                  return;
                }
              }
              cResult[13] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[13];
            }
            if (cResult[14] === def.channel_filter) {
              if (cResult[15] === def.label) {
                if (cResult[16] === def.type) {
                  if (cResult[17] === conjureSettingsGuildId) {
                    if (cResult[18] === tmp11) {
                      if (cResult[19] === onChange) {
                        if (cResult[20] === tmp12) {
                          let tmp27;
                          if (cResult[21] === arr) {
                            tmp27 = cResult[22];
                          }
                          if (cResult[23] === def.label) {
                            if (cResult[24] === disabled) {
                              if (cResult[25] === tmp20) {
                                if (cResult[26] === tmp24) {
                                  let tmp28;
                                  if (cResult[27] === tmp27) {
                                    tmp28 = cResult[28];
                                  }
                                  return tmp28;
                                }
                              }
                            }
                          }
                          const obj5 = { hasIcons: false, children: closure_12(tmp(tmp2[32]).TableRow, tmp30) };
                          const TableRowGroup = tmp(tmp2[19]).TableRowGroup;
                          class I {
                            constructor() {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              tmp3 = closure_0(closure_2[35]);
                              showActionSheet = tmp3.showActionSheet;
                              tmp4 = jsx;
                              obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                              num = 1;
                              tmp5 = closure_1(closure_2[38]);
                              if (closure_3) {
                                num = tmp(tmp2[30]).MAX_CONJURE_SETTING_PICKS;
                              }
                              obj1 = { content: null, key: null, stackingBehavior: "stack" };
                              obj.maxPicks = num;
                              obj.selected = closure_4.filter((id) => arr.includes(id.id));
                              obj.onSubmit = function onSubmit(arr) {
                                const mapped = arr.map(() => { /* body not rendered: F159695 */ });
                                let tmp3 = mapped;
                                const tmp2 = onChange;
                                if (!closure_1_3) {
                                  let str = mapped[0];
                                  if (str == null) {
                                    str = "";
                                  }
                                  tmp3 = str;
                                }
                                tmp2(tmp3);
                              };
                              obj1.content = tmp4(tmp5, obj);
                              obj1.key = ConjureSettingsPickerSheet;
                              showActionSheetResult = showActionSheet(obj1);
                              return;
                            }
                          }
                          tmp30[0] = label;
                          tmp30[1] = tmp20;
                          tmp30[3] = disabled;
                          tmp30[4] = tmp24;
                          tmp30[5] = tmp27;
                          const tmp31 = closure_12(TableRowGroup, obj5);
                          cResult[23] = def.label;
                          cResult[24] = disabled;
                          cResult[25] = tmp20;
                          cResult[26] = tmp24;
                          cResult[27] = tmp27;
                          cResult[28] = tmp31;
                          tmp28 = tmp31;
                        }
                      }
                    }
                  }
                }
              }
            }
            class I {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                tmp3 = closure_0(closure_2[35]);
                showActionSheet = tmp3.showActionSheet;
                tmp4 = jsx;
                obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                num = 1;
                tmp5 = closure_1(closure_2[38]);
                if (closure_3) {
                  num = tmp(tmp2[30]).MAX_CONJURE_SETTING_PICKS;
                }
                obj1 = { content: null, key: null, stackingBehavior: "stack" };
                obj.maxPicks = num;
                obj.selected = closure_4.filter((id) => arr.includes(id.id));
                obj.onSubmit = function onSubmit(arr) {
                  const mapped = arr.map(() => { /* body not rendered: F159695 */ });
                  let tmp3 = mapped;
                  const tmp2 = onChange;
                  if (!closure_1_3) {
                    let str = mapped[0];
                    if (str == null) {
                      str = "";
                    }
                    tmp3 = str;
                  }
                  tmp2(tmp3);
                };
                obj1.content = tmp4(tmp5, obj);
                obj1.key = ConjureSettingsPickerSheet;
                showActionSheetResult = showActionSheet(obj1);
                return;
              }
            }
            cResult[14] = def.channel_filter;
            cResult[15] = def.label;
            cResult[16] = def.type;
            cResult[17] = conjureSettingsGuildId;
            cResult[18] = tmp11;
            cResult[19] = onChange;
            cResult[20] = tmp12;
            cResult[21] = arr;
            cResult[22] = I;
            tmp27 = I;
          }
        }
      }
      const _Symbol = Symbol;
      let str = "react.memo_cache_sentinel";
      const tmpResult6 = tmp(tmp2[30]);
      const withSavedPicksResult = tmpResult6.withSavedPicks(tmp6, value, tmp16);
      _slicedToArray = withSavedPicksResult;
      closure_3 = tmp17;
      if (true === def.multiple) {
        const intl2 = tmp(tmp2[14]).intl;
        const obj6 = { count: arr.length };
        formatToPlainStringResult = intl2.formatToPlainString(tmp5(tmp2[15])["LPs/Pv"], obj6);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === arr[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[14]).intl;
          formatToPlainStringResult = intl.string(tmp5(tmp2[15]).rn7w7I);
        }
      }
      cResult[2] = def.multiple;
      cResult[3] = tmp6;
      cResult[4] = arr;
      cResult[5] = value;
      cResult[6] = true === def.multiple;
      cResult[7] = withSavedPicksResult;
      cResult[8] = formatToPlainStringResult;
      tmp13 = formatToPlainStringResult;
    }
  }
  return fallback;
}) : (function ConjurePickerSettingRow(def) {
  let _undefined;
  let _undefined2;
  let disabled;
  let fallback;
  let hint;
  let isPreview;
  let obj7;
  let projectId;
  let tmp11Result;
  let tmpResult2;
  let value;
  def = def.def;
  ({ hint, value, onChange: importDefault } = def);
  let conjureSettingsGuildId;
  let c4;
  let closure_5;
  let tmp = def;
  let tmp2 = conjureSettingsGuildId;
  ({ projectId, isPreview, disabled, fallback } = def);
  let obj = def(conjureSettingsGuildId[30]);
  conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, isPreview);
  let tmp4 = importDefault;
  let tmp5 = require("useConjureSettingPickerOptions")(conjureSettingsGuildId, def);
  let obj2 = def(conjureSettingsGuildId[30]);
  const result = obj2.conjureSettingPickedIds(value);
  let c3 = result;
  let tmp7 = null;
  const useConjureMemberRequests = def(conjureSettingsGuildId[37]).useConjureMemberRequests;
  def(conjureSettingsGuildId[37]);
  if ("user" === def.type) {
    tmp7 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp7, result);
  if (null != conjureSettingsGuildId) {
    if (null != tmp5) {
      let formatToPlainStringResult;
      const tmpResult = tmp(tmp2[30]);
      const withSavedPicksResult = tmpResult.withSavedPicks(tmp5, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp13;
      if (true === def.multiple) {
        const intl2 = tmp(tmp2[14]).intl;
        const obj3 = { count: result.length };
        formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[15])["LPs/Pv"], obj3);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === c3[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[14]).intl;
          formatToPlainStringResult = intl.string(tmp4(tmp2[15]).rn7w7I);
        }
      }
      const TableRowGroup = tmp(tmp2[19]).TableRowGroup;
      const obj4 = {
        label: def.label,
        subLabel: tmp11Result,
        arrow: true,
        disabled,
        trailing: closure_12(tmp(tmp2[33]).TableRowTrailingText, obj7),
        onPress() {
              let num;
              let tmp2 = dependencyMap;
              let tmp3 = ActionSheetActionCreators;
              const showActionSheet = tmp3.showActionSheet;
              const obj = {
                guildId: conjureSettingsGuildId,
                type: def.type,
                channelFilter: def.channel_filter,
                title: def.label,
                maxPicks: num,
                selected: _undefined2.filter((id) => _undefined.includes(id.id)),
                onSubmit(arr) {
                  const mapped = arr.map((id) => id.id);
                  let tmp3 = mapped;
                  const tmp2 = closure_1_1;
                  if (!closure_1_5) {
                    let str = mapped[0];
                    if (str == null) {
                      str = "";
                    }
                    tmp3 = str;
                  }
                  tmp2(tmp3);
                }
              };
              num = 1;
              const tmp4 = authStore2;
              const tmp5 = ConjureGuildPickerSheetDefault;
              if (closure_5) {
                num = useConjureSettingPickerOptions.MAX_CONJURE_SETTING_PICKS;
              }
              const obj2 = { content: tmp4(tmp5, obj), key: ConjureSettingsPickerSheet, stackingBehavior: "stack" };
              showActionSheet(obj2);
            }
      };
      tmp11Result = undefined;
      const TableRow = tmp(tmp2[32]).TableRow;
      if (null != hint) {
        const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: tmpResult2.conjureLinkedNodes(hint, "text-xs/medium") };
        const Text = tmp(tmp2[26]).Text;
        let str = "text-xs/medium";
        tmpResult2 = tmp(tmp2[20]);
        tmp11Result = tmp11(Text, obj5);
      }
      const obj6 = { hasIcons: false, children: closure_12(TableRow, obj4) };
      obj7 = { text: formatToPlainStringResult };
      return closure_12(TableRowGroup, obj6);
    }
  }
  return fallback;
});
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  let _undefined;
  let _undefined2;
  let c10;
  let c11;
  let c14;
  let c15;
  let c16;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items6;
  let items7;
  let items8;
  let mapped;
  let note;
  let notifyAgent;
  let obj10;
  let scopeKeys;
  let tmp13;
  projectId = projectId.projectId;
  ({ scopeKeys, note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  let onSaved = projectId.onSaved;
  let flag = projectId.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  c10 = undefined;
  c11 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  let memo;
  let found1;
  let closure_22;
  let closure_23;
  let closure_24;
  let memo3;
  let closure_26;
  function hintFor(def) {
    let hosts;
    let hint;
    if (def != null) {
      hint = def.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== def.hint) {
        hint1 = def.hint;
      }
    }
    const items = [hint1, , ];
    let requires_rebuild;
    if (def != null) {
      requires_rebuild = def.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(onSaved[14]).intl;
      stringResult = intl.string(notifyAgent(onSaved[15])["4kCM6H"]);
    }
    items[1] = stringResult;
    let type;
    if (def != null) {
      type = def.type;
    }
    let formatToPlainStringResult;
    if ("secret" === type) {
      if (null != def.hosts) {
        if (def.hosts.length > 0) {
          const intl2 = projectId(onSaved[14]).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj = { hosts: hosts.join(", ") };
          hosts = def.hosts;
          const Ww9HFO = notifyAgent(onSaved[15]).Ww9HFO;
          formatToPlainStringResult = formatToPlainString(Ww9HFO, obj);
        }
      }
    }
    items[2] = formatToPlainStringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    return joined;
  }
  function renderValueSetting(found) {
    let conjureLinkedNodesResult;
    let conjureLinkedNodesResult1;
    let disabled;
    let options;
    let options1;
    let tmp14Result;
    let tmp19;
    let tmp28Result;
    let tmp29Result;
    let tmp9;
    projectId = found;
    const tmp = hintFor(found);
    if ("select" === found.type) {
      if (true === found.multiple) {
        let items = first[found.key];
        if (items == null) {
          items = memo1[found.key];
        }
        const _Array = Array;
        if (!Array.isArray(items)) {
          items = [];
        }
        const obj2 = {
          title: found.label,
          description: conjureLinkedNodesResult,
          hasIcons: false,
          children: options1.map((label) => {
                let closure_0 = label;
                let obj = {
                  label: label.label,
                  checked: items.includes(label.value),
                  disabled,
                  onPress(arg0) {
                    let closure_0 = arg0;
                    _undefined(false);
                    closure_2_7((arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      const key = value.key;
                      if (value) {
                        items = [];
                        items[HermesBuiltin.arraySpread(items, items, 0)] = value.value;
                        found = items;
                      } else {
                        found = arr.filter((item) => item !== value.value);
                      }
                      obj[key] = found;
                      return obj;
                    });
                  }
                };
                const TableCheckboxRow = projectId(onSaved[21]).TableCheckboxRow;
                return first2(TableCheckboxRow, obj, label.value);
              })
        };
        conjureLinkedNodesResult = undefined;
        const TableRowGroup2 = projectId(onSaved[19]).TableRowGroup;
        const tmp46 = first2;
        const tmp47 = projectId;
        const tmp48 = onSaved;
        if (null != tmp) {
          const tmp47Result = tmp47(tmp48[20]);
          conjureLinkedNodesResult = tmp47Result.conjureLinkedNodes(tmp, "text-sm/normal");
        }
        options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        return tmp46(TableRowGroup2, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp34 = first[found.key];
      if (tmp34 == null) {
        tmp34 = memo1[found.key];
      }
      let tmp40;
      const TableRadioGroup = projectId(onSaved[22]).TableRadioGroup;
      const tmp37 = first2;
      const tmp38 = projectId;
      const tmp39 = onSaved;
      if (typeof tmp34 === "string") {
        tmp40 = tmp34;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp40,
        onChange(arg0) {
            const key = arg0;
            _undefined(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        title: found.label,
        description: conjureLinkedNodesResult1,
        accessibilityLabel: null,
        children: options.map((label) => {
            const obj = { label: label.label, value: label.value };
            return disabled(found(onSaved[23]).TableRadioRow, obj, label.value);
          })
      };
      conjureLinkedNodesResult1 = undefined;
      if (null != tmp) {
        const tmp38Result = tmp38(tmp39[20]);
        conjureLinkedNodesResult1 = tmp38Result.conjureLinkedNodes(tmp, "text-sm/normal");
      }
      ({ label: obj7.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return tmp37(TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp25 = first[found.key];
      if (tmp25 == null) {
        tmp25 = memo1[found.key];
      }
      const TableRowGroup = projectId(onSaved[19]).TableRowGroup;
      const obj4 = {
        label: found.label,
        subLabel: tmp28Result,
        checked: true === tmp25,
        disabled: first2,
        onPress(arg0) {
            const key = arg0;
            _undefined(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      tmp28Result = undefined;
      let TableCheckboxRow = projectId(onSaved[21]).TableCheckboxRow;
      if (null != tmp) {
        const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: tmp29Result.conjureLinkedNodes(tmp, "text-xs/medium") };
        const Text = tmp29(tmp30[26]).Text;
        tmp29Result = projectId(onSaved[20]);
        tmp28Result = tmp28(Text, obj5);
      }
      const obj6 = { hasIcons: false, children: first2(TableCheckboxRow, obj4) };
      return first2(TableRowGroup, obj6, found.key);
    } else {
      if ("role" !== found.type) {
        if ("user" !== found.type) {
          if ("channel" === found.type) {
            return tmp14Result;
          }
          if ("channel" === found.type) {
            let obj = {
              projectId,
              isPreview: flag,
              def: found,
              hint: tmp,
              value: tmp9,
              disabled: first2,
              onChange(arg0) {
                        const key = arg0;
                        _undefined(false);
                        closure_1_7((arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj[key.key] = key;
                          return obj;
                        });
                      },
              fallback: renderTextSetting(found, tmp)
            };
            tmp9 = first[found.key];
            const tmp4 = first2;
            const tmp5 = memo1;
            if (tmp9 == null) {
              tmp9 = memo1[found.key];
            }
            tmp14Result = tmp4(tmp5, obj, found.key);
          } else {
            tmp14Result = renderTextSetting(found, tmp);
          }
        }
      }
      const obj8 = {
        projectId,
        isPreview: flag,
        def: found,
        hint: tmp,
        value: tmp19,
        disabled: first2,
        onChange(arg0) {
            const key = arg0;
            _undefined(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        fallback: renderTextSetting(found, tmp)
      };
      tmp19 = first[found.key];
      const tmp14 = first2;
      const tmp15 = found;
      if (tmp19 == null) {
        tmp19 = memo1[found.key];
      }
      tmp14Result = tmp14(tmp15, obj8, found.key);
    }
  }
  function renderTextSetting(multiline, description) {
    let items;
    let str4;
    let str6;
    let stringResult;
    let stringResult1;
    let tmp3;
    let tmp31Result;
    let closure_0 = multiline;
    let obj = first[multiline.key];
    if (obj == null) {
      obj = memo1[multiline.key];
    }
    if (true === multiline.multiline) {
      const obj2 = {
        label: multiline.label,
        description,
        errorMessage: stringResult,
        value: str6,
        onChange(arg0) {
            const key = arg0;
            _undefined(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        disabled: first2
      };
      stringResult = undefined;
      const TextArea = projectId(onSaved[24]).TextArea;
      const tmp19 = first2;
      if (c15) {
        if (closure_23.includes(multiline.key)) {
          const intl2 = projectId(onSaved[14]).intl;
          stringResult = intl2.string(notifyAgent(onSaved[15])["PW1+MY"]);
        }
      }
      str6 = "";
      if (typeof obj === "string") {
        str6 = obj;
      }
      tmp31Result = tmp19(TextArea, obj2, multiline.key);
    } else {
      const obj4 = {
        label: multiline.label,
        autoComplete: "off",
        autoCapitalize: "none",
        autoCorrect: false,
        keyboardType: tmp3,
        errorMessage: stringResult1,
        value: str4,
        onChange(arg0) {
            const key = arg0;
            _undefined(false);
            closure_1_7((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        disabled: first2
      };
      tmp3 = undefined;
      const obj3 = { style: closure_4.linkedField, children: items };
      const TextInput = projectId(onSaved[25]).TextInput;
      const tmp31 = closure_13;
      const tmp32 = first;
      const tmp34 = first2;
      if ("number" === multiline.type) {
        let str2 = "numbers-and-punctuation";
        if (null != multiline.min) {
          str2 = "numbers-and-punctuation";
          if (multiline.min >= 0) {
            let str3;
            if (null == multiline.step) {
              str3 = "number-pad";
            } else {
              const _Number = Number;
              str3 = "decimal-pad";
            }
            str2 = str3;
          }
        }
        tmp3 = str2;
      }
      let key = multiline.key;
      stringResult1 = undefined;
      if (c15) {
        if (closure_23.includes(key)) {
          const intl = projectId(onSaved[14]).intl;
          stringResult1 = intl.string(notifyAgent(onSaved[15])["PW1+MY"]);
        }
      }
      const _Array = Array;
      if (Array.isArray(obj)) {
        str4 = obj.join(", ");
      } else {
        str4 = "";
        if (null != obj) {
          const _String = String;
          str4 = String(obj);
        }
      }
      items = [tmp34(TextInput, obj4), ];
      let tmp14 = null;
      if (null != description) {
        const obj5 = { text: description, variant: "text-xs/normal", color: "text-muted" };
        tmp14 = first2(notifyAgent(onSaved[20]), obj5);
      }
      items[1] = tmp14;
      tmp31Result = tmp31(tmp32, obj3, multiline.key);
    }
    return tmp31Result;
  }
  function renderSecret(value) {
    let intl2;
    let intl3;
    let items;
    let items1;
    let items2;
    let obj7;
    let str;
    let str2;
    let stringResult;
    let closure_0 = value;
    const def = value.def;
    let label;
    if (def != null) {
      label = def.label;
    }
    if (label == null) {
      label = value.name;
    }
    const tmp2 = hintFor(value.def);
    if (value.set) {
      let tmp4Result;
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_4.secretRow, children: items1 };
        const obj3 = { style: closure_4.secretRowInfo, children: items };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        items = [first2(projectId(onSaved[26]).Text, obj4), first2(projectId(onSaved[26]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp19Result = null;
        if (null != tmp2) {
          const obj5 = { text: tmp2, variant: "text-xs/normal", color: "text-muted" };
          tmp19Result = tmp19(notifyAgent(tmp21[20]), obj5);
        }
        items[2] = tmp19Result;
        items1 = [closure_13(first, obj3), ];
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(notifyAgent(onSaved[15]).RsvBGf),
          accessibilityLabel: intl3.formatToPlainString(notifyAgent(onSaved[15]).WjoM7z, obj7),
          disabled: first2,
          onPress() {
                let name;
                return c11((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[name.name] = true;
                  return obj;
                });
              }
        };
        const Button = tmp20(tmp21[27]).Button;
        intl2 = tmp20(tmp21[14]).intl;
        intl3 = tmp20(tmp21[14]).intl;
        obj7 = { label };
        items1[1] = first2(Button, obj6);
        tmp4Result = tmp16(tmp17, obj2, value.name);
      }
      return tmp4Result;
    }
    let obj = { style: closure_4.linkedField, children: items2 };
    const obj8 = {
      label,
      placeholder: str,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: str2,
      errorMessage: stringResult,
      onChange(arg0) {
        const name = arg0;
        _undefined(false);
        closure_1_9((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = name;
          return obj;
        });
      },
      disabled: first2
    };
    str = undefined;
    const TextInput = projectId(onSaved[25]).TextInput;
    const tmp4 = closure_13;
    const tmp5 = first;
    const tmp7 = projectId;
    if (value.set) {
      str = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    str2 = first1[value.name];
    if (str2 == null) {
      str2 = "";
    }
    let name = value.name;
    stringResult = undefined;
    if (c15) {
      if (closure_23.includes(name)) {
        const intl = tmp7(tmp8[14]).intl;
        stringResult = intl.string(notifyAgent(tmp8[15])["PW1+MY"]);
      }
    }
    items2 = [first2(TextInput, obj8), ];
    let tmp6Result = null;
    if (null != tmp2) {
      const obj9 = { text: tmp2, variant: "text-xs/normal", color: "text-muted" };
      tmp6Result = tmp6(notifyAgent(tmp8[20]), obj9);
    }
    items2[1] = tmp6Result;
    tmp4Result = tmp4(tmp5, obj, value.name);
  }
  let tmp = memo();
  channels = tmp;
  let tmp2 = projectId;
  let tmp3 = onSaved;
  let obj = projectId(onSaved[12]);
  let items = [c11];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  let obj2 = stateFromStores;
  let tmp5 = channels(stateFromStores.useState({}), 2);
  const first = tmp5[0];
  let closure_7 = tmp5[1];
  let tmp7 = channels(stateFromStores.useState({}), 2);
  const first1 = tmp7[0];
  let closure_9 = tmp7[1];
  let tmp9 = channels(stateFromStores.useState({}), 2);
  [c10, c11] = tmp9;
  let tmp10 = channels(stateFromStores.useState(false), 2);
  const first2 = tmp10[0];
  let closure_13 = tmp10[1];
  const tmp12 = channels(stateFromStores.useState(false), 2);
  [tmp13, c14] = tmp12;
  let tmp14 = channels(stateFromStores.useState(false), 2);
  [c15, c16] = tmp14;
  let items1 = [stateFromStores];
  memo = stateFromStores.useMemo(() => {
    let schema;
    if (stateFromStores != null) {
      schema = stateFromStores.schema;
    }
    if (schema == null) {
      schema = [];
    }
    return schema;
  }, items1);
  let items2 = [stateFromStores];
  const memo1 = stateFromStores.useMemo(() => {
    let obj;
    if (stateFromStores != null) {
      obj = stateFromStores.values;
    }
    if (obj == null) {
      obj = {};
    }
    return obj;
  }, items2);
  const items3 = [memo, stateFromStores];
  const memo2 = stateFromStores.useMemo(() => {
    let secrets;
    if (stateFromStores != null) {
      secrets = stateFromStores.secrets;
    }
    if (secrets == null) {
      secrets = [];
    }
    return secrets.map((item) => {
      let closure_0 = item;
      const obj = { def: memo.find((key) => key.key === name.name && "secret" === key.type) };
      const merged = Object.assign(item);
      return obj;
    });
  }, items3);
  let found = memo.filter((type) => "secret" !== type.type);
  map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  found1 = scopeKeys.filter((item) => {
    let closure_0 = item;
    const someResult = found.some((key) => key.key === closure_0) || map.has(item);
    return someResult;
  });
  const tmp17 = found1.length > 0;
  closure_22 = tmp17;
  let someResult = found1.some((item) => map.has(item));
  const tmp2Result = tmp2(tmp3[13]);
  let found2 = found;
  const conjureMissingRequiredSettings = tmp2Result.conjureMissingRequiredSettings;
  if (tmp17) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  closure_23 = conjureMissingRequiredSettings(found2.map((def) => {
    let tmp;
    const obj = { def, value: tmp };
    tmp = first[def.key];
    if (tmp == null) {
      tmp = memo1[def.key];
    }
    return obj;
  }));
  let tmp2Result2 = tmp2(tmp3[13]);
  let found3 = memo2;
  const conjureMissingRequiredSettings2 = tmp2Result2.conjureMissingRequiredSettings;
  if (tmp17) {
    found3 = memo2.filter((name) => found1.includes(name.name));
  }
  closure_24 = conjureMissingRequiredSettings2(found3.flatMap((def) => {
    let items;
    if (null == def.def) {
      items = [];
    } else {
      items = [{ def: def.def, value: first1[def.name], secretStored: def.set }];
      const obj = { def: def.def, value: first1[def.name], secretStored: def.set };
    }
    return items;
  }));
  const items4 = [memo, first1, memo1, first];
  memo3 = obj2.useMemo(() => {
    let obj4;
    let str;
    let tmp12;
    const values = {};
    function _loop(arg0) {
      let closure_0 = arg0;
      found = memo.find((key) => key.key === closure_0);
      if (null == found) {
        return 0;
      } else {
        const obj = conjureSettingValues;
        const result = obj.conjureSettingSubmitValue(found, closure_1);
        if (undefined !== result) {
          const conjureSettingValuesEqual = conjureSettingValues.conjureSettingValuesEqual;
          conjureSettingValues;
          const tmp2Result2 = conjureSettingValues;
          if (!conjureSettingValuesEqual(result, tmp2Result2.conjureSettingBaseline(found, memo1[arg0]))) {
            obj[arg0] = result;
          }
        }
        return 0;
      }
    }
    const entries = Object.entries(first);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = closure_4(tmp3, 2);
      let closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    const tmp8 = entries1[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = closure_4(tmp9, 2);
      [tmp12, str] = tmp11;
      let str2 = str;
      if ("" !== str.trim()) {
        obj2[tmp12] = str2.trim();
      }
      continue;
    }
    if (Object.keys(values).length > 0) {
      obj4 = { values };
      const obj3 = { values };
    } else {
      obj4 = {};
    }
    const obj5 = {};
    const merged = Object.assign(obj4);
    const obj6 = projectId(onSaved[16]);
    const merged1 = Object.assign(obj6.conjureSecretsSubmission(memo, obj2));
    return obj5;
  }, items4);
  closure_26 = tmp22;
  const items5 = [tmp22, notifyAgent, onSaved, projectId, first2, memo3];
  let tmp24 = null;
  const callback = obj2.useCallback(flag(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let obj2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let rebuildRequired;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            projectId = tmp4;
            rebuildRequired = undefined;
            const tmp55 = closure_26;
            if (tmp55) {
              const tmp23 = first2;
              if (!tmp23) {
                closure_13(true);
                _undefined(false);
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: obj2.submitProjectSettings(projectId, memo3), done: false };
                obj2 = projectId(onSaved[17]);
                return obj5;
              }
            }
            c5 = 3;
            return { value: true, done: true };
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_13(false);
          throw onSaved;
        } else if (2 === c4) {
          closure_129_14(true);
          c3 = 0;
          closure_129_13(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_13(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          rebuildRequired = value.rebuildRequired;
          const obj7 = { rebuildRequired, notifyAgent: closure_129_1 };
          const obj6 = projectId(onSaved[18]);
          const result = obj6.settleProjectSettingsSave(closure_129_0, obj7);
          closure_129_7({});
          closure_129_9({});
          closure_129_11({});
          closure_129_16(false);
          if (closure_129_2 != null) {
            closure_129_2();
          }
          c3 = 0;
          closure_129_13(false);
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp32) {
        onSaved = tmp32;
        if (0 === c3) {
          c5 = 3;
          throw tmp32;
        } else if (1 === tmp34) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items5);
  if (tmp13) {
    let tmp25 = first2;
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl.string(notifyAgent(tmp3[15])["A5TC+K"]) };
    let Text = tmp2(tmp3[26]).Text;
    intl = tmp2(tmp3[14]).intl;
    tmp24 = first2(Text, obj3);
  }
  const tmp28 = first;
  let obj4 = { style: tmp.section, children: items6 };
  let tmp29 = null;
  if (null != note) {
    let str = "";
    tmp29 = null;
    if ("" !== note) {
      const tmp30 = first2;
      let tmp31 = notifyAgent;
      let obj5 = { text: note, variant: "text-sm/normal", color: "text-default" };
      tmp29 = first2(notifyAgent(tmp3[20]), obj5);
    }
  }
  items6 = [tmp29, , , ];
  let tmp32 = null;
  if (null != stateFromStores) {
    tmp32 = null;
    if (0 === found.length) {
      tmp32 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(notifyAgent(tmp3[15]).lJJayk) };
        const Text2 = tmp2(tmp3[26]).Text;
        intl2 = tmp2(tmp3[14]).intl;
        let tmp34 = notifyAgent;
        tmp32 = first2(Text2, obj6);
      }
    }
  }
  items6[1] = tmp32;
  if (tmp17) {
    let tmp37 = null;
    const tmp36 = c14;
    if (someResult) {
      let tmp38 = first2;
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(notifyAgent(tmp3[15]).dsHRPK) };
      const Text3 = tmp2(tmp3[26]).Text;
      intl3 = tmp2(tmp3[14]).intl;
      let tmp39 = notifyAgent;
      tmp37 = first2(Text3, obj7);
    }
    let obj8 = { children: items7 };
    items7 = [
      tmp37,
      found1.map(function renderScoped(item) {
          let closure_0 = item;
          const value = map.get(item);
          if (null != value) {
            return renderSecret(value);
          } else {
            found = found.find((key) => key.key === closure_0);
            let tmp4 = null;
            if (null != found) {
              tmp4 = renderValueSetting(found);
            }
            return tmp4;
          }
        })
    ];
    mapped = tmp27(tmp36, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  let obj9 = {
    fields: tmp27(tmp28, obj4),
    secretFields: tmp27(tmp28, obj10),
    loaded: null != stateFromStores,
    valueCount: found.length,
    secretCount: memo2.length,
    isScoped: tmp17,
    canSave: tmp22,
    saving: first2,
    submit: callback,
    validate() {
      let tmp2;
      if (0 !== closure_23.length) {
        let str;
        _undefined2(true);
        const tmp5 = closure_22;
        if (tmp5) {
          str = "fields";
        } else {
          str = "secretFields";
        }
        tmp2 = str;
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
  };
  items6[2] = mapped;
  items6[3] = tmp24;
  obj10 = { style: tmp.section, children: items8 };
  const obj11 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[15]).dsHRPK) };
  const Text4 = tmp2(tmp3[26]).Text;
  intl4 = tmp2(tmp3[14]).intl;
  items8 = [first2(Text4, obj11), memo2.map(renderSecret), tmp24];
  return obj9;
};
