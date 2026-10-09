// Module ID: 17000
// Function ID: 17001
// Name: useConjureAppSettingsForm
// Dependencies: [5, 32, 19, 17, 4707, 2086, 4719, 1390, 12948, 13164, 10617, 21, 5091, 587, 504, 17001, 1126, 3827, 11381, 6940, 6269, 6183, 6267, 6266, 6290, 5087, 5376, 558, 576, 17002, 6939, 6186, 6197, 5418, 5055, 12135, 17004, 2]
// Exports: default

// Module 17000 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12135 */;
import conjureSettingValues from "conjureSettingValues" /* 17001 */;
import useConjureSettingPickerOptionsDefault from "useConjureSettingPickerOptions" /* 17002 */;
import ConjureSettingOptionsSheetDefault from "ConjureSettingOptionsSheet" /* 17004 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4707 */;
import GuildStore from "GuildStore" /* 2086 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureChatStore from "ConjureChatStore" /* 12948 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 13164 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, closure_3, closure_4, dependencyMap, importDefault, map, obj1, selected, showActionSheetResult;

let closure_12;
let closure_14;
let closure_17;
let closure_18;
let closure_19;
let map1;
let obj2;
let obj3;
let obj4;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ requestProjectRebuild: closure_12, sendUserMessage: map1, submitProjectSettings: closure_14 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
const ConjureSettingsPickerSheet = "ConjureSettingsPickerSheet";
let createStyles = createStyles_mod;
let obj = { section: obj2, secretRow: obj3, secretRowInfo: obj4 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_22 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelSettingRow(def) {
  let disabled;
  let fallback;
  let first;
  let hint;
  let isPreview;
  let onChange;
  let projectId;
  let tmp7;
  let tmp8;
  let value;
  let tmp = def;
  let tmp2 = onChange;
  let obj = def(onChange[28]);
  const cResult = obj.c(42);
  def = def.def;
  ({ hint, value } = def);
  importDefault = value;
  ({ disabled, onChange } = def);
  ({ fallback, projectId, isPreview } = def);
  let obj2 = def(onChange[29]);
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
      let channels = null;
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
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let tmp10 = fallback;
  if (null != conjureSettingsGuildId) {
    tmp10 = fallback;
    if (null != stateFromStores) {
      let arr3;
      let found;
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
                if (cResult[21] === tmp11) {
                  let tmp28;
                  if (cResult[22] === tmp16) {
                    tmp28 = cResult[23];
                  }
                  if (cResult[24] === tmp14) {
                    if (cResult[25] === def.label) {
                      if (cResult[26] === conjureSettingsGuildId) {
                        if (cResult[27] === onChange) {
                          let tmp30;
                          if (cResult[28] === tmp15) {
                            tmp30 = cResult[29];
                          }
                          if (cResult[30] === tmp12) {
                            if (cResult[31] === tmp28) {
                              if (cResult[32] === tmp30) {
                                if (cResult[33] === tmp17) {
                                  if (cResult[34] === tmp18) {
                                    if (cResult[35] === flag) {
                                      let tmp31;
                                      if (cResult[36] === tmp19) {
                                        tmp31 = cResult[37];
                                      }
                                      if (cResult[38] === tmp13) {
                                        if (cResult[39] === tmp31) {
                                          let tmp33;
                                          if (cResult[40] === flag2) {
                                            tmp33 = cResult[41];
                                          }
                                          tmp10 = tmp33;
                                        }
                                      }
                                      class K {
                                        constructor() {
                                          tmp = closure_0(closure_2[34]);
                                          obj = { content: null, key: null, stackingBehavior: "stack" };
                                          showActionSheet = tmp.showActionSheet;
                                          obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                                          obj4 = { title: def.label };
                                          obj1.header = obj4;
                                          tmp2 = closure_1(closure_2[35]);
                                          obj1.guild = closure_8.getGuild(closure_3);
                                          obj1.channels = closure_4;
                                          obj1.selectedChannel = c5;
                                          intl = closure_0(closure_2[16]).intl;
                                          obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
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
                                      let obj3 = { hasIcons: flag2, children: tmp31 };
                                      const tmp34 = closure_17(tmp13, obj3);
                                      cResult[38] = tmp13;
                                      cResult[39] = tmp31;
                                      cResult[40] = flag2;
                                      cResult[41] = tmp34;
                                      tmp33 = tmp34;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          class K {
                            constructor() {
                              tmp = closure_0(closure_2[34]);
                              obj = { content: null, key: null, stackingBehavior: "stack" };
                              showActionSheet = tmp.showActionSheet;
                              obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                              obj4 = { title: def.label };
                              obj1.header = obj4;
                              tmp2 = closure_1(closure_2[35]);
                              obj1.guild = closure_8.getGuild(closure_3);
                              obj1.channels = closure_4;
                              obj1.selectedChannel = c5;
                              intl = closure_0(closure_2[16]).intl;
                              obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
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
                          const obj4 = { label: tmp17, subLabel: tmp18, arrow: flag, disabled: tmp19, trailing: tmp28, onPress: tmp30 };
                          const tmp32 = closure_17(tmp12, obj4);
                          cResult[30] = tmp12;
                          cResult[31] = tmp28;
                          cResult[32] = tmp30;
                          cResult[33] = tmp17;
                          cResult[34] = tmp18;
                          cResult[35] = flag;
                          cResult[36] = tmp19;
                          cResult[37] = tmp32;
                          tmp31 = tmp32;
                        }
                      }
                    }
                  }
                  class K {
                    constructor() {
                      tmp = closure_0(closure_2[34]);
                      obj = { content: null, key: null, stackingBehavior: "stack" };
                      showActionSheet = tmp.showActionSheet;
                      obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                      obj4 = { title: def.label };
                      obj1.header = obj4;
                      tmp2 = closure_1(closure_2[35]);
                      obj1.guild = closure_8.getGuild(closure_3);
                      obj1.channels = closure_4;
                      obj1.selectedChannel = c5;
                      intl = closure_0(closure_2[16]).intl;
                      obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
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
                  cResult[24] = tmp14;
                  cResult[25] = def.label;
                  cResult[26] = conjureSettingsGuildId;
                  cResult[27] = onChange;
                  cResult[28] = tmp15;
                  cResult[29] = K;
                  tmp30 = K;
                }
                const obj5 = { text: tmp16 };
                const tmp29 = closure_17(tmp11, obj5);
                cResult[21] = tmp11;
                cResult[22] = tmp16;
                cResult[23] = tmp29;
                tmp28 = tmp29;
              }
            }
          }
        }
      }
      tmp(tmp2[30]);
      found = arr3.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(tmp2[20]).TableRowGroup;
      const TableRow = tmp(tmp2[31]).TableRow;
      const label = def.label;
      const TableRowTrailingText = tmp(tmp2[32]).TableRowTrailingText;
      if (null != found) {
        const tmpResult4 = tmp(tmp2[33]);
        class K {
          constructor() {
            tmp = closure_0(closure_2[34]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[35]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[16]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
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
        channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(tmp2[16]).intl;
        class K {
          constructor() {
            tmp = closure_0(closure_2[34]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[35]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[16]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[17])["jtBVV+"]);
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
        channelName = tmp22(require("module_3827").iZIF9m);
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
      cResult[17] = hint;
      cResult[18] = true;
      cResult[19] = disabled;
      cResult[20] = false;
      tmp16 = channelName;
      flag2 = false;
      tmp19 = disabled;
      flag = true;
      tmp18 = hint;
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
  let obj5;
  let projectId;
  def = def.def;
  ({ value: importDefault, onChange: dependencyMap } = def);
  let c4;
  let found;
  let tmp = def;
  let tmp2 = dependencyMap;
  ({ projectId, isPreview, hint, disabled, fallback } = def);
  let obj = def(17002);
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
      const tmpResult = tmp(6939);
      const result = tmpResult.conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(6269).TableRowGroup;
      let obj3 = {
        label: def.label,
        subLabel: hint,
        arrow: true,
        disabled,
        trailing: closure_17(TableRowTrailingText, obj5),
        onPress() {
              let intl;
              let obj2;
              let obj3;
              let tmp2;
              let tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = { content: closure_17(tmp2, obj2), key: ConjureSettingsChannelSheet, stackingBehavior: "stack" };
              obj2 = {
                header: obj3,
                guild: GuildStore.getGuild(conjureSettingsGuildId),
                channels,
                selectedChannel: found,
                noChannelOptionLabel: intl.string(_modDef3827["jtBVV+"]),
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
      const TableRow = tmp(6186).TableRow;
      TableRowTrailingText = tmp(6197).TableRowTrailingText;
      if (null != found) {
        const tmpResult2 = tmp(5418);
        channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1126).intl;
        channelName = intl.string(_modDef3827.iZIF9m);
      }
      const obj4 = { hasIcons: false, children: closure_17(TableRow, obj3) };
      obj5 = { text: channelName };
      return closure_17(TableRowGroup, obj4);
    }
  }
  return fallback;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePickerSettingRow(def) {
  let disabled;
  let fallback;
  let first;
  let hint;
  let isPreview;
  let multiple;
  let obj6;
  let onChange;
  let projectId;
  let value;
  let tmp = def;
  let tmp2 = dependencyMap;
  let obj = def(576);
  const cResult = obj.c(15);
  def = def.def;
  ({ hint, value, disabled, onChange } = def);
  ({ projectId, isPreview, fallback } = def);
  let obj2 = def(17002);
  const conjureSettingsGuildId = obj2.useConjureSettingsGuildId(projectId, isPreview);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(id) {
      return { id, label: id };
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(17002);
  const withSavedPicksResult = tmpResult.withSavedPicks(onChange(17002)(conjureSettingsGuildId, def), value, first);
  dependencyMap = withSavedPicksResult;
  if (null == conjureSettingsGuildId) {
    return fallback;
  } else {
    let formatToPlainStringResult;
    let tmp9;
    const tmpResult2 = tmp(17002);
    const result = tmpResult2.conjureSettingPickedIds(value);
    const _asyncToGenerator = result;
    _slicedToArray = tmp16;
    if (true === def.multiple) {
      const intl2 = tmp(1126).intl;
      const obj3 = { count: result.length };
      formatToPlainStringResult = intl2.formatToPlainString(tmp6(3827)["LPs/Pv"], obj3);
    } else {
      const found = withSavedPicksResult.find((id) => id.id === _asyncToGenerator[0]);
      formatToPlainStringResult = undefined;
      if (found != null) {
        formatToPlainStringResult = found.label;
      }
      if (formatToPlainStringResult == null) {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp6(3827).rn7w7I);
      }
    }
    if (cResult[1] !== formatToPlainStringResult) {
      const obj4 = { text: formatToPlainStringResult };
      const tmp11 = closure_17(tmp(6197).TableRowTrailingText, obj4);
      cResult[1] = formatToPlainStringResult;
      cResult[2] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[2];
    }
    if (cResult[3] === def.label) {
      if (cResult[4] === true === def.multiple) {
        if (cResult[5] === onChange) {
          if (cResult[6] === withSavedPicksResult) {
            let tmp12;
            if (cResult[7] === result) {
              tmp12 = cResult[8];
            }
            if (cResult[9] === def.label) {
              if (cResult[10] === disabled) {
                if (cResult[11] === hint) {
                  if (cResult[12] === tmp9) {
                    let tmp13;
                    if (cResult[13] === tmp12) {
                      tmp13 = cResult[14];
                    }
                    return tmp13;
                  }
                }
              }
            }
            const obj5 = { hasIcons: false, children: closure_17(tmp(6186).TableRow, obj6) };
            const TableRowGroup = tmp(6269).TableRowGroup;
            obj6 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: tmp12 };
            class S {
              constructor() {
                tmp = closure_0(closure_2[34]);
                obj = { content: null, key: ConjureSettingsPickerSheet, stackingBehavior: "stack" };
                showActionSheet = tmp.showActionSheet;
                obj1 = {
                  title: def.label,
                  options: closure_2,
                  multiple: closure_4,
                  selected: closure_3,
                  onChange(arg0) {
                                  let tmp2 = arg0;
                                  const tmp = onChange;
                                  if (!multiple) {
                                    let str = arg0[0];
                                    if (str == null) {
                                      str = "";
                                    }
                                    tmp2 = str;
                                  }
                                  return tmp(tmp2);
                                }
                };
                obj.content = jsx(closure_1(closure_2[36]), obj1);
                showActionSheetResult = showActionSheet(obj);
                return;
              }
            }
            const tmp15 = closure_17(TableRowGroup, obj5);
            cResult[9] = def.label;
            cResult[10] = disabled;
            cResult[11] = hint;
            cResult[12] = tmp9;
            cResult[13] = tmp12;
            cResult[14] = tmp15;
            tmp13 = tmp15;
          }
        }
      }
    }
    class S {
      constructor() {
        tmp = closure_0(closure_2[34]);
        obj = { content: null, key: ConjureSettingsPickerSheet, stackingBehavior: "stack" };
        showActionSheet = tmp.showActionSheet;
        obj1 = {
          title: def.label,
          options: closure_2,
          multiple: closure_4,
          selected: closure_3,
          onChange(arg0) {
                  let tmp2 = arg0;
                  const tmp = onChange;
                  if (!multiple) {
                    let str = arg0[0];
                    if (str == null) {
                      str = "";
                    }
                    tmp2 = str;
                  }
                  return tmp(tmp2);
                }
        };
        obj.content = jsx(closure_1(closure_2[36]), obj1);
        showActionSheetResult = showActionSheet(obj);
        return;
      }
    }
    cResult[3] = def.label;
    cResult[4] = true === def.multiple;
    cResult[5] = onChange;
    cResult[6] = withSavedPicksResult;
    cResult[7] = result;
    cResult[8] = S;
    tmp12 = S;
  }
}) : (function ConjurePickerSettingRow(def) {
  let TableRow;
  let disabled;
  let fallback;
  let hint;
  let isPreview;
  let obj5;
  let obj6;
  let options;
  let projectId;
  let value;
  def = def.def;
  ({ value, onChange: importDefault } = def);
  dependencyMap = undefined;
  let c3;
  let multiple;
  let tmp = def;
  let tmp2 = dependencyMap;
  ({ projectId, isPreview, hint, disabled, fallback } = def);
  let obj = def(17002);
  const conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, isPreview);
  let obj2 = def(17002);
  const withSavedPicksResult = obj2.withSavedPicks(useConjureSettingPickerOptionsDefault(conjureSettingsGuildId, def), value, (id) => ({ id, label: id }));
  dependencyMap = withSavedPicksResult;
  if (null == conjureSettingsGuildId) {
    return fallback;
  } else {
    let formatToPlainStringResult;
    const tmpResult = tmp(17002);
    const result = tmpResult.conjureSettingPickedIds(value);
    c3 = result;
    multiple = tmp8;
    if (true === def.multiple) {
      const intl2 = tmp(1126).intl;
      const obj3 = { count: result.length };
      formatToPlainStringResult = intl2.formatToPlainString(tmp4(3827)["LPs/Pv"], obj3);
    } else {
      const found = withSavedPicksResult.find((id) => id.id === selected[0]);
      formatToPlainStringResult = undefined;
      if (found != null) {
        formatToPlainStringResult = found.label;
      }
      if (formatToPlainStringResult == null) {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp4(3827).rn7w7I);
      }
    }
    const obj4 = { hasIcons: false, children: closure_17(TableRow, obj5) };
    const TableRowGroup = tmp(6269).TableRowGroup;
    obj5 = {
      label: def.label,
      subLabel: hint,
      arrow: true,
      disabled,
      trailing: closure_17(tmp(6197).TableRowTrailingText, obj6),
      onPress() {
          let obj2;
          let tmp = ActionSheetActionCreators;
          const showActionSheet = tmp.showActionSheet;
          const obj = { content: closure_17(ConjureSettingOptionsSheetDefault, obj2), key: ConjureSettingsPickerSheet, stackingBehavior: "stack" };
          obj2 = {
            title: def.label,
            options,
            multiple,
            selected,
            onChange(arg0) {
              let tmp2 = arg0;
              const tmp = closure_1_1;
              if (!multiple) {
                let str = arg0[0];
                if (str == null) {
                  str = "";
                }
                tmp2 = str;
              }
              return tmp(tmp2);
            }
          };
          showActionSheet(obj);
        }
    };
    TableRow = tmp(6186).TableRow;
    obj6 = { text: formatToPlainStringResult };
    return closure_17(TableRowGroup, obj4);
  }
});
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  let _undefined;
  let c10;
  let c9;
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
  const f148267 = (item) => null != item;
  projectId = projectId.projectId;
  ({ scopeKeys, note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  let flag = projectId.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  let first;
  c9 = undefined;
  c10 = undefined;
  let memo1;
  let memo3;
  let closure_19;
  function renderValueSetting(found) {
    let disabled;
    let joined;
    let obj11;
    let options;
    let options2;
    let tmp17;
    let tmp21Result;
    let tmp26;
    projectId = found;
    let hint;
    if (found != null) {
      hint = found.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== found.hint) {
        hint1 = found.hint;
      }
    }
    let items = [hint1, ];
    let requires_rebuild;
    if (found != null) {
      requires_rebuild = found.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17])["4kCM6H"]);
    }
    items[1] = stringResult;
    found = items.filter(f148267);
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if ("select" === found.type) {
      if (true === found.multiple) {
        let items1 = first[found.key];
        if (items1 == null) {
          items1 = memo1[found.key];
        }
        const _Array = Array;
        if (!Array.isArray(items1)) {
          items1 = [];
        }
        const obj2 = {
          title: null,
          hasIcons: false,
          children: options2.map((label) => {
                let closure_0 = label;
                let obj = {
                  label: label.label,
                  checked: items1.includes(label.value),
                  disabled,
                  onPress(arg0) {
                    let closure_0 = arg0;
                    closure_2_13(false);
                    closure_2_6((arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      const key = value.key;
                      if (value) {
                        const items = [];
                        items[HermesBuiltin.arraySpread(items, items1, 0)] = value.value;
                        found = items;
                      } else {
                        found = arr.filter((item) => item !== value.value);
                      }
                      obj[key] = found;
                      return obj;
                    });
                  }
                };
                const TableCheckboxRow = projectId(flag[21]).TableCheckboxRow;
                return map(TableCheckboxRow, obj, label.value);
              })
        };
        ({ label: obj6.title, options: options2 } = found);
        const TableRowGroup2 = projectId(flag[20]).TableRowGroup;
        const tmp50 = map;
        if (options2 == null) {
          options2 = [];
        }
        return tmp50(TableRowGroup2, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp41 = first[found.key];
      if (tmp41 == null) {
        tmp41 = memo1[found.key];
      }
      let tmp46;
      const TableRadioGroup = projectId(flag[22]).TableRadioGroup;
      const tmp43 = map;
      if (typeof tmp41 === "string") {
        tmp46 = tmp41;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp46,
        onChange(arg0) {
            const key = arg0;
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        title: null,
        accessibilityLabel: null,
        children: options.map((label) => {
            const obj = { label: label.label, value: label.value };
            return map(found(flag[23]).TableRadioRow, obj, label.value);
          })
      };
      ({ label: obj5.title, label: obj5.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return tmp43(TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp31 = first[found.key];
      if (tmp31 == null) {
        tmp31 = memo1[found.key];
      }
      const obj4 = { hasIcons: false, children: map(projectId(flag[21]).TableCheckboxRow, obj11) };
      const TableRowGroup = projectId(flag[20]).TableRowGroup;
      obj11 = {
        label: found.label,
        subLabel: joined,
        checked: true === tmp31,
        disabled: first2,
        onPress(arg0) {
            const key = arg0;
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      return map(TableRowGroup, obj4, found.key);
    } else {
      if ("role" !== found.type) {
        if ("user" !== found.type) {
          if ("channel" === found.type) {
            return tmp21Result;
          }
          if ("channel" === found.type) {
            let obj = {
              projectId,
              isPreview: flag,
              def: found,
              hint: joined,
              value: tmp17,
              disabled: first2,
              onChange(arg0) {
                        const key = arg0;
                        closure_1_13(false);
                        closure_1_6((arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj[key.key] = key;
                          return obj;
                        });
                      },
              fallback: renderTextSetting(found, joined)
            };
            tmp17 = first[found.key];
            const tmp12 = map;
            const tmp13 = closure_1_23;
            if (tmp17 == null) {
              tmp17 = memo1[found.key];
            }
            tmp21Result = tmp12(tmp13, obj, found.key);
          } else {
            tmp21Result = renderTextSetting(found, joined);
          }
        }
      }
      const obj12 = {
        projectId,
        isPreview: flag,
        def: found,
        hint: joined,
        value: tmp26,
        disabled: first2,
        onChange(arg0) {
            const key = arg0;
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        fallback: renderTextSetting(found, joined)
      };
      tmp26 = first[found.key];
      const tmp21 = map;
      const tmp22 = closure_1_24;
      if (tmp26 == null) {
        tmp26 = memo1[found.key];
      }
      tmp21Result = tmp21(tmp22, obj12, found.key);
    }
  }
  function renderTextSetting(label, joined) {
    let str4;
    let tmp3;
    let closure_0 = label;
    let obj = first[label.key];
    if (obj == null) {
      obj = memo1[label.key];
    }
    const obj2 = {
      label: label.label,
      description: joined,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      keyboardType: tmp3,
      value: str4,
      onChange(arg0) {
        const key = arg0;
        closure_1_13(false);
        closure_1_6((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      },
      disabled: first2
    };
    tmp3 = undefined;
    const TextInput = projectId(flag[24]).TextInput;
    const tmp2 = map;
    if ("number" === label.type) {
      let str2 = "numbers-and-punctuation";
      if (null != label.min) {
        str2 = "numbers-and-punctuation";
        if (label.min >= 0) {
          let str3;
          if (null == label.step) {
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
    if (Array.isArray(obj)) {
      str4 = obj.join(", ");
    } else {
      str4 = "";
      if (null != obj) {
        const _String = String;
        str4 = String(obj);
      }
    }
    return tmp2(TextInput, obj2, label.key);
  }
  function renderSecret(value) {
    let intl2;
    let intl3;
    let items1;
    let items2;
    let obj7;
    let str3;
    let str4;
    let closure_0 = value;
    const def = value.def;
    let label;
    if (def != null) {
      label = def.label;
    }
    if (label == null) {
      label = value.name;
    }
    const def2 = value.def;
    let hint;
    if (def2 != null) {
      hint = def2.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== def2.hint) {
        hint1 = def2.hint;
      }
    }
    const items = [hint1, ];
    let requires_rebuild;
    if (def2 != null) {
      requires_rebuild = def2.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17])["4kCM6H"]);
    }
    items[1] = stringResult;
    found = items.filter(f148267);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      let tmp12Result;
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_3.secretRow, children: items2 };
        const obj3 = { style: closure_3.secretRowInfo, children: items1 };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        items1 = [map(projectId(flag[25]).Text, obj4), map(projectId(flag[25]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = map(projectId(flag[25]).Text, obj5);
        }
        items1[2] = tmp23;
        items2 = [memo3(closure_6, obj3), ];
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(notifyAgent(flag[17]).RsvBGf),
          accessibilityLabel: intl3.formatToPlainString(notifyAgent(flag[17]).WjoM7z, obj7),
          disabled: first2,
          onPress() {
                let name;
                return c10((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[name.name] = true;
                  return obj;
                });
              }
        };
        const Button = projectId(flag[26]).Button;
        intl2 = projectId(flag[16]).intl;
        intl3 = projectId(flag[16]).intl;
        obj7 = { label };
        items2[1] = map(Button, obj6);
        tmp12Result = tmp14(tmp15, obj2, value.name);
      }
      return tmp12Result;
    }
    let obj = {
      label,
      description: joined,
      placeholder: str3,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: str4,
      onChange(arg0) {
        const name = arg0;
        closure_1_13(false);
        closure_1_8((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[name.name] = name;
          return obj;
        });
      },
      disabled: first2
    };
    str3 = undefined;
    const TextInput = projectId(flag[24]).TextInput;
    const tmp12 = map;
    if (value.set) {
      str3 = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    str4 = first1[value.name];
    if (str4 == null) {
      str4 = "";
    }
    tmp12Result = tmp12(TextInput, obj, value.name);
  }
  const tmp = renderSecret();
  selected = tmp;
  let tmp2 = projectId;
  let tmp3 = flag;
  let obj = projectId(flag[14]);
  let items = [memo1];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureConnectionStore.getSettings(projectId));
  let obj2 = first;
  let tmp5 = stateFromStores(first.useState({}), 2);
  first = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = stateFromStores(first.useState({}), 2);
  const first1 = tmp7[0];
  let closure_8 = tmp7[1];
  const tmp9 = stateFromStores(first.useState({}), 2);
  [c9, c10] = tmp9;
  let tmp10 = stateFromStores(first.useState(false), 2);
  const first2 = tmp10[0];
  let closure_12 = tmp10[1];
  let tmp12 = stateFromStores(first.useState(false), 2);
  let closure_13 = tmp12[1];
  let items1 = [stateFromStores];
  const first3 = tmp12[0];
  const memo = first.useMemo(() => {
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
  memo1 = first.useMemo(() => {
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
  const memo2 = first.useMemo(() => {
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
  const found1 = scopeKeys.filter((item) => {
    let closure_0 = item;
    const someResult = found.some((key) => key.key === closure_0) || map.has(item);
    return someResult;
  });
  const items4 = [memo, first1, memo1, first];
  let someResult = found1.some((item) => map.has(item));
  memo3 = obj2.useMemo(() => {
    let obj4;
    let obj7;
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
      let tmp5 = stateFromStores(tmp3, 2);
      let closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    const tmp8 = entries1[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = stateFromStores(tmp9, 2);
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
    if (Object.keys(obj2).length > 0) {
      obj7 = { secrets: obj2 };
      const obj6 = { secrets: obj2 };
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return obj5;
  }, items4);
  closure_19 = tmp19;
  const items5 = [tmp19, notifyAgent, projectId, first2, memo3];
  let tmp21 = null;
  const callback = obj2.useCallback(selected(function*(arg0, value) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let closure_2;
        let rebuildRequired;
        let _null2;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            closure_2 = tmp4;
            rebuildRequired = undefined;
            _null2 = undefined;
            const tmp81 = closure_19;
            if (tmp81) {
              const tmp63 = first2;
              if (!tmp63) {
                closure_12(true);
                closure_13(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj4 = { value: memo(projectId, memo3), done: false };
                return obj4;
              }
            }
            c7 = 3;
            return { value: true, done: true };
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_131_12(false);
          throw closure_4;
        } else if (2 === c6) {
          closure_131_13(true);
          c5 = 0;
          closure_131_12(false);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_12(false);
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let _null;
          rebuildRequired = value.rebuildRequired;
          const tmp80 = closure_131_1;
          if (!tmp80) {
            if (!first2.hasPendingSettingsRequest(closure_131_0)) {
              if (rebuildRequired) {
                closure_1_12(closure_131_0);
              } else {
                _null2 = project.getProject(closure_131_0);
                let application_id;
                const tmp15 = _null2(closure_2[18]);
                if (_null2 != null) {
                  application_id = _null2.application_id;
                }
                _null = application_id;
                if (application_id == null) {
                  _null = null;
                }
                tmp15(_null);
                let isPreviewlessProjectResult = null != _null2;
                if (isPreviewlessProjectResult) {
                  const obj = _null(closure_2[19]);
                  isPreviewlessProjectResult = obj.isPreviewlessProject(_null2);
                }
                if (!isPreviewlessProjectResult) {
                  let prop;
                  const tmp31 = _null2(closure_2[18]);
                  if (_null2 != null) {
                    prop = _null2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  tmp31(_null2);
                }
              }
            }
            c5 = 0;
            closure_131_12(false);
            c7 = 3;
            return { value: true, done: true };
          }
          const intl = _null(closure_2[16]).intl;
          closure_1_13(closure_131_0, intl.string(_null2(closure_2[17])["08bsJL"]));
        }
      } catch (tmp71) {
        closure_4 = tmp71;
        if (0 === c5) {
          c7 = 3;
          throw tmp71;
        } else if (1 === tmp73) {
          c6 = 1;
        } else {
          c6 = 2;
        }
      }
    }
  }), items5);
  if (first3) {
    let tmp22 = map;
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl.string(notifyAgent(tmp3[17])["A5TC+K"]) };
    const Text = tmp2(tmp3[25]).Text;
    intl = tmp2(tmp3[16]).intl;
    let tmp23 = notifyAgent;
    tmp21 = map(Text, obj3);
  }
  let obj4 = { style: tmp.section, children: items6 };
  let tmp26 = null;
  if (null != note) {
    const str = "";
    tmp26 = null;
    if ("" !== note) {
      let obj5 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp26 = map(tmp2(tmp3[25]).Text, obj5);
    }
  }
  items6 = [tmp26, , , ];
  let tmp28 = null;
  if (null != stateFromStores) {
    tmp28 = null;
    if (0 === found.length) {
      tmp28 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(notifyAgent(tmp3[17]).lJJayk) };
        const Text2 = tmp2(tmp3[25]).Text;
        intl2 = tmp2(tmp3[16]).intl;
        tmp28 = map(Text2, obj6);
      }
    }
  }
  items6[1] = tmp28;
  if (found1.length > 0) {
    let tmp33 = null;
    const tmp32 = closure_19;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(notifyAgent(tmp3[17]).dsHRPK) };
      const Text3 = tmp2(tmp3[25]).Text;
      intl3 = tmp2(tmp3[16]).intl;
      tmp33 = map(Text3, obj7);
    }
    const obj8 = { children: items7 };
    items7 = [
      tmp33,
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
    mapped = tmp24(tmp32, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  items6[2] = mapped;
  items6[3] = tmp21;
  const obj9 = { fields: memo3(closure_6, obj4), secretFields: memo3(closure_6, obj10), loaded: null != stateFromStores, valueCount: found.length, secretCount: memo2.length, isScoped: found1.length > 0, canSave: null != memo3.values || null != memo3.secrets, saving: first2, submit: callback };
  obj10 = { style: tmp.section, children: items8 };
  let obj11 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[17]).dsHRPK) };
  const Text4 = tmp2(tmp3[25]).Text;
  intl4 = tmp2(tmp3[16]).intl;
  items8 = [map(Text4, obj11), memo2.map(renderSecret), tmp21];
  return obj9;
};
