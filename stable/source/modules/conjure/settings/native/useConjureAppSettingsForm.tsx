// Module ID: 11663
// Function ID: 11664
// Name: useConjureAppSettingsForm
// Dependencies: [5, 32, 19, 17, 4843, 2090, 4855, 1392, 10979, 10978, 6293, 10995, 21, 5191, 587, 504, 11664, 11069, 1128, 3883, 11040, 6294, 6542, 6454, 6540, 6539, 6563, 5187, 5479, 558, 576, 11665, 7222, 6457, 6468, 5521, 5155, 11667, 11666, 11669, 2]
// Exports: default

// Module 11663 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5155 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10978 */;
import conjureSettingValues from "conjureSettingValues" /* 11664 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11667 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 11669 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4843 */;
import GuildStore from "GuildStore" /* 2090 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureChatStore from "ConjureChatStore" /* 10979 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6293 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10995 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, channels, closure_4, importDefault, map, obj1, showActionSheetResult;

let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
let obj4;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const sendUserMessage = ConjureConnectionStore.sendUserMessage;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
const ConjureSettingsChannelSheet = "ConjureSettingsChannelSheet";
const ConjureSettingsPickerSheet = "ConjureSettingsPickerSheet";
let createStyles = createStyles_mod;
let obj = { section: obj2, secretRow: obj3, secretRowInfo: obj4 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_20 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelSettingRow(def) {
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
  let obj = def(onChange[30]);
  const cResult = obj.c(42);
  def = def.def;
  ({ hint, value } = def);
  importDefault = value;
  ({ disabled, onChange } = def);
  ({ fallback, projectId, isPreview } = def);
  let obj2 = def(onChange[31]);
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
  const tmpResult = tmp(tmp2[15]);
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
                                      class O {
                                        constructor() {
                                          tmp = closure_0(closure_2[36]);
                                          obj = { content: null, key: null, stackingBehavior: "stack" };
                                          showActionSheet = tmp.showActionSheet;
                                          obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                                          obj4 = { title: def.label };
                                          obj1.header = obj4;
                                          tmp2 = closure_1(closure_2[37]);
                                          obj1.guild = closure_8.getGuild(closure_3);
                                          obj1.channels = closure_4;
                                          obj1.selectedChannel = c5;
                                          intl = closure_0(closure_2[18]).intl;
                                          obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[19])["jtBVV+"]);
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
                                      const tmp34 = closure_15(tmp13, obj3);
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
                          class O {
                            constructor() {
                              tmp = closure_0(closure_2[36]);
                              obj = { content: null, key: null, stackingBehavior: "stack" };
                              showActionSheet = tmp.showActionSheet;
                              obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                              obj4 = { title: def.label };
                              obj1.header = obj4;
                              tmp2 = closure_1(closure_2[37]);
                              obj1.guild = closure_8.getGuild(closure_3);
                              obj1.channels = closure_4;
                              obj1.selectedChannel = c5;
                              intl = closure_0(closure_2[18]).intl;
                              obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[19])["jtBVV+"]);
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
                          const tmp32 = closure_15(tmp12, obj4);
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
                  class O {
                    constructor() {
                      tmp = closure_0(closure_2[36]);
                      obj = { content: null, key: null, stackingBehavior: "stack" };
                      showActionSheet = tmp.showActionSheet;
                      obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
                      obj4 = { title: def.label };
                      obj1.header = obj4;
                      tmp2 = closure_1(closure_2[37]);
                      obj1.guild = closure_8.getGuild(closure_3);
                      obj1.channels = closure_4;
                      obj1.selectedChannel = c5;
                      intl = closure_0(closure_2[18]).intl;
                      obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[19])["jtBVV+"]);
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
                  cResult[29] = O;
                  tmp30 = O;
                }
                const obj5 = { text: tmp16 };
                const tmp29 = closure_15(tmp11, obj5);
                cResult[21] = tmp11;
                cResult[22] = tmp16;
                cResult[23] = tmp29;
                tmp28 = tmp29;
              }
            }
          }
        }
      }
      tmp(tmp2[32]);
      found = arr3.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(tmp2[22]).TableRowGroup;
      const TableRow = tmp(tmp2[33]).TableRow;
      const label = def.label;
      const TableRowTrailingText = tmp(tmp2[34]).TableRowTrailingText;
      if (null != found) {
        const tmpResult4 = tmp(tmp2[35]);
        class O {
          constructor() {
            tmp = closure_0(closure_2[36]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[37]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[18]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[19])["jtBVV+"]);
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
        let intl = tmp(tmp2[18]).intl;
        class O {
          constructor() {
            tmp = closure_0(closure_2[36]);
            obj = { content: null, key: null, stackingBehavior: "stack" };
            showActionSheet = tmp.showActionSheet;
            obj1 = { header: null, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
            obj4 = { title: def.label };
            obj1.header = obj4;
            tmp2 = closure_1(closure_2[37]);
            obj1.guild = closure_8.getGuild(closure_3);
            obj1.channels = closure_4;
            obj1.selectedChannel = c5;
            intl = closure_0(closure_2[18]).intl;
            obj1.noChannelOptionLabel = intl.string(closure_1(closure_2[19])["jtBVV+"]);
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
        channelName = tmp22(require("module_3883").iZIF9m);
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
  let obj = def(11665);
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
      const tmpResult = tmp(7222);
      const result = tmpResult.conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(6542).TableRowGroup;
      let obj3 = {
        label: def.label,
        subLabel: hint,
        arrow: true,
        disabled,
        trailing: closure_15(TableRowTrailingText, obj5),
        onPress() {
              let intl;
              let obj2;
              let obj3;
              let tmp2;
              let tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = { content: authStore3(tmp2, obj2), key: ConjureSettingsChannelSheet, stackingBehavior: "stack" };
              obj2 = {
                header: obj3,
                guild: GuildStore.getGuild(conjureSettingsGuildId),
                channels,
                selectedChannel: found,
                noChannelOptionLabel: intl.string(_modDef3883["jtBVV+"]),
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
      const TableRow = tmp(6457).TableRow;
      TableRowTrailingText = tmp(6468).TableRowTrailingText;
      if (null != found) {
        const tmpResult2 = tmp(5521);
        channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1128).intl;
        channelName = intl.string(_modDef3883.iZIF9m);
      }
      const obj4 = { hasIcons: false, children: closure_15(TableRow, obj3) };
      obj5 = { text: channelName };
      return closure_15(TableRowGroup, obj4);
    }
  }
  return fallback;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePickerSettingRow(def) {
  let conjureSettingsGuildId;
  let disabled;
  let fallback;
  let hint;
  let isPreview;
  let onChange;
  let projectId;
  let tmp7;
  let value;
  const tmp = def;
  let tmp2 = conjureSettingsGuildId;
  let obj = def(conjureSettingsGuildId[30]);
  const cResult = obj.c(27);
  def = def.def;
  ({ hint, value, disabled, onChange } = def);
  ({ projectId, isPreview, fallback } = def);
  let obj2 = def(conjureSettingsGuildId[31]);
  conjureSettingsGuildId = obj2.useConjureSettingsGuildId(projectId, isPreview);
  const tmp6 = onChange(conjureSettingsGuildId[31])(conjureSettingsGuildId, def);
  const tmp5 = onChange;
  if (cResult[0] !== value) {
    const tmpResult = tmp(tmp2[31]);
    const result = tmpResult.conjureSettingPickedIds(value);
    let num = 0;
    cResult[0] = value;
    cResult[1] = result;
    tmp7 = result;
  } else {
    tmp7 = cResult[1];
  }
  let closure_5 = tmp7;
  let tmp10 = null;
  const useConjureMemberRequests = tmp(tmp2[38]).useConjureMemberRequests;
  tmp(tmp2[38]);
  if ("user" === def.type) {
    tmp10 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp10, tmp7);
  if (null != conjureSettingsGuildId) {
    if (null != tmp6) {
      let formatToPlainStringResult;
      if (cResult[2] === def.multiple) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === tmp7) {
            let tmp13;
            let tmp14;
            let tmp22;
            if (cResult[5] === value) {
              let closure_3 = cResult[6];
              tmp13 = cResult[7];
              class R {
                constructor() {
                  tmp = closure_0(closure_2[36]);
                  showActionSheet = tmp.showActionSheet;
                  tmp2 = jsx;
                  obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                  num = 1;
                  tmp3 = closure_1(closure_2[39]);
                  if (closure_3) {
                    num = 25;
                  }
                  obj1 = { content: null, key: null, stackingBehavior: "stack" };
                  obj.maxPicks = num;
                  obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
                  obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
                  obj1.content = tmp2(tmp3, obj);
                  obj1.key = ConjureSettingsPickerSheet;
                  showActionSheetResult = showActionSheet(obj1);
                  return;
                }
              }
              tmp14 = cResult[8];
            }
            if (cResult[10] !== tmp14) {
              class R {
                constructor() {
                  tmp = closure_0(closure_2[36]);
                  showActionSheet = tmp.showActionSheet;
                  tmp2 = jsx;
                  obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                  num = 1;
                  tmp3 = closure_1(closure_2[39]);
                  if (closure_3) {
                    num = 25;
                  }
                  obj1 = { content: null, key: null, stackingBehavior: "stack" };
                  obj.maxPicks = num;
                  obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
                  obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
                  obj1.content = tmp2(tmp3, obj);
                  obj1.key = ConjureSettingsPickerSheet;
                  showActionSheetResult = showActionSheet(obj1);
                  return;
                }
              }
              cResult[10] = tmp14;
              cResult[11] = tmp24;
              tmp22 = tmp24;
            } else {
              tmp22 = cResult[11];
            }
            if (cResult[12] === def.channel_filter) {
              if (cResult[13] === def.label) {
                if (cResult[14] === def.type) {
                  if (cResult[15] === conjureSettingsGuildId) {
                    if (cResult[16] === tmp12) {
                      if (cResult[17] === onChange) {
                        if (cResult[18] === tmp13) {
                          let tmp25;
                          if (cResult[19] === tmp7) {
                            tmp25 = cResult[20];
                          }
                          if (cResult[21] === def.label) {
                            if (cResult[22] === disabled) {
                              if (cResult[23] === hint) {
                                if (cResult[24] === tmp22) {
                                  let tmp26;
                                  if (cResult[25] === tmp25) {
                                    tmp26 = cResult[26];
                                  }
                                  return tmp26;
                                }
                              }
                            }
                          }
                          class R {
                            constructor() {
                              tmp = closure_0(closure_2[36]);
                              showActionSheet = tmp.showActionSheet;
                              tmp2 = jsx;
                              obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                              num = 1;
                              tmp3 = closure_1(closure_2[39]);
                              if (closure_3) {
                                num = 25;
                              }
                              obj1 = { content: null, key: null, stackingBehavior: "stack" };
                              obj.maxPicks = num;
                              obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
                              obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
                              obj1.content = tmp2(tmp3, obj);
                              obj1.key = ConjureSettingsPickerSheet;
                              showActionSheetResult = showActionSheet(obj1);
                              return;
                            }
                          }
                          const TableRowGroup = tmp(tmp2[22]).TableRowGroup;
                          const obj4 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: tmp22, onPress: tmp25 };
                          tmp28[1] = closure_15(tmp(tmp2[33]).TableRow, obj4);
                          const tmp29 = closure_15(TableRowGroup, tmp28);
                          cResult[21] = def.label;
                          cResult[22] = disabled;
                          cResult[23] = hint;
                          cResult[24] = tmp22;
                          cResult[25] = tmp25;
                          cResult[26] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                    }
                  }
                }
              }
            }
            class R {
              constructor() {
                tmp = closure_0(closure_2[36]);
                showActionSheet = tmp.showActionSheet;
                tmp2 = jsx;
                obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
                num = 1;
                tmp3 = closure_1(closure_2[39]);
                if (closure_3) {
                  num = 25;
                }
                obj1 = { content: null, key: null, stackingBehavior: "stack" };
                obj.maxPicks = num;
                obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
                obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
                obj1.content = tmp2(tmp3, obj);
                obj1.key = ConjureSettingsPickerSheet;
                showActionSheetResult = showActionSheet(obj1);
                return;
              }
            }
            cResult[12] = def.channel_filter;
            cResult[13] = def.label;
            cResult[14] = def.type;
            cResult[15] = conjureSettingsGuildId;
            cResult[16] = tmp12;
            cResult[17] = onChange;
            cResult[18] = tmp13;
            cResult[19] = tmp7;
            cResult[20] = R;
            tmp25 = R;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            obj = { id: def, label: def };
            return obj;
          }
        }
        cResult[9] = T;
        class R {
          constructor() {
            tmp = closure_0(closure_2[36]);
            showActionSheet = tmp.showActionSheet;
            tmp2 = jsx;
            obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
            num = 1;
            tmp3 = closure_1(closure_2[39]);
            if (closure_3) {
              num = 25;
            }
            obj1 = { content: null, key: null, stackingBehavior: "stack" };
            obj.maxPicks = num;
            obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
            obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
            obj1.content = tmp2(tmp3, obj);
            obj1.key = ConjureSettingsPickerSheet;
            showActionSheetResult = showActionSheet(obj1);
            return;
          }
        }
      } else {
        class T {
          constructor(arg0) {
            obj = { id: def, label: def };
            return obj;
          }
        }
      }
      const tmpResult4 = tmp(tmp2[31]);
      const withSavedPicksResult = tmpResult4.withSavedPicks(tmp6, value, tmp16);
      const _slicedToArray = withSavedPicksResult;
      closure_3 = tmp18;
      if (true === def.multiple) {
        class T {
          constructor(arg0) {
            obj = { id: def, label: def };
            return obj;
          }
        }
        const formatToPlainString = tmp21.formatToPlainString;
        const obj5 = { count: null };
        class R {
          constructor() {
            tmp = closure_0(closure_2[36]);
            showActionSheet = tmp.showActionSheet;
            tmp2 = jsx;
            obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
            num = 1;
            tmp3 = closure_1(closure_2[39]);
            if (closure_3) {
              num = 25;
            }
            obj1 = { content: null, key: null, stackingBehavior: "stack" };
            obj.maxPicks = num;
            obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
            obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
            obj1.content = tmp2(tmp3, obj);
            obj1.key = ConjureSettingsPickerSheet;
            showActionSheetResult = showActionSheet(obj1);
            return;
          }
        }
        formatToPlainStringResult = formatToPlainString(tmp5(tmp2[19])["LPs/Pv"], obj5);
      } else {
        class T {
          constructor(arg0) {
            obj = { id: def, label: def };
            return obj;
          }
        }
        if (tmp19 != null) {
          class T {
            constructor(arg0) {
              obj = { id: def, label: def };
              return obj;
            }
          }
        }
        class R {
          constructor() {
            tmp = closure_0(closure_2[36]);
            showActionSheet = tmp.showActionSheet;
            tmp2 = jsx;
            obj = { guildId: closure_2, type: def.type, channelFilter: def.channel_filter, title: def.label, maxPicks: null, selected: null, onSubmit: null };
            num = 1;
            tmp3 = closure_1(closure_2[39]);
            if (closure_3) {
              num = 25;
            }
            obj1 = { content: null, key: null, stackingBehavior: "stack" };
            obj.maxPicks = num;
            obj.selected = closure_4.filter(() => { /* body not rendered: F145579 */ });
            obj.onSubmit = function onSubmit() { /* body not rendered: F145580 */ };
            obj1.content = tmp2(tmp3, obj);
            obj1.key = ConjureSettingsPickerSheet;
            showActionSheetResult = showActionSheet(obj1);
            return;
          }
        }
      }
      cResult[2] = def.multiple;
      cResult[3] = tmp6;
      cResult[4] = tmp7;
      cResult[5] = value;
      cResult[6] = true === def.multiple;
      cResult[7] = withSavedPicksResult;
      cResult[8] = formatToPlainStringResult;
      tmp14 = formatToPlainStringResult;
      tmp13 = withSavedPicksResult;
    }
  }
  return fallback;
}) : (function ConjurePickerSettingRow(def) {
  let TableRow;
  let _undefined;
  let _undefined2;
  let disabled;
  let fallback;
  let hint;
  let isPreview;
  let obj5;
  let obj6;
  let projectId;
  let value;
  def = def.def;
  ({ value, onChange: importDefault } = def);
  let conjureSettingsGuildId;
  let c4;
  let closure_5;
  const tmp = def;
  let tmp2 = conjureSettingsGuildId;
  ({ projectId, isPreview, hint, disabled, fallback } = def);
  let obj = def(conjureSettingsGuildId[31]);
  conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, isPreview);
  const tmp5 = require("useConjureSettingPickerOptions")(conjureSettingsGuildId, def);
  let obj2 = def(conjureSettingsGuildId[31]);
  const result = obj2.conjureSettingPickedIds(value);
  let c3 = result;
  let tmp7 = null;
  const useConjureMemberRequests = def(conjureSettingsGuildId[38]).useConjureMemberRequests;
  def(conjureSettingsGuildId[38]);
  if ("user" === def.type) {
    tmp7 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp7, result);
  if (null != conjureSettingsGuildId) {
    if (null != tmp5) {
      let formatToPlainStringResult;
      const tmpResult = tmp(tmp2[31]);
      const withSavedPicksResult = tmpResult.withSavedPicks(tmp5, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp12;
      if (true === def.multiple) {
        const intl2 = tmp(tmp2[18]).intl;
        const obj3 = { count: result.length };
        formatToPlainStringResult = intl2.formatToPlainString(tmp4(tmp2[19])["LPs/Pv"], obj3);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === c3[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp(tmp2[18]).intl;
          formatToPlainStringResult = intl.string(tmp4(tmp2[19]).rn7w7I);
        }
      }
      const obj4 = { hasIcons: false, children: closure_15(TableRow, obj5) };
      const TableRowGroup = tmp(tmp2[22]).TableRowGroup;
      obj5 = {
        label: def.label,
        subLabel: hint,
        arrow: true,
        disabled,
        trailing: closure_15(tmp(tmp2[34]).TableRowTrailingText, obj6),
        onPress() {
              let num;
              const showActionSheet = ActionSheetActionCreators.showActionSheet;
              let tmp2 = authStore3;
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
              ActionSheetActionCreators;
              let tmp3 = ConjureGuildPickerSheetDefault;
              if (closure_5) {
                num = 25;
              }
              const obj2 = { content: tmp2(tmp3, obj), key: ConjureSettingsPickerSheet, stackingBehavior: "stack" };
              showActionSheet(obj2);
            }
      };
      TableRow = tmp(tmp2[33]).TableRow;
      obj6 = { text: formatToPlainStringResult };
      return closure_15(TableRowGroup, obj4);
    }
  }
  return fallback;
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
  let memo;
  let memo3;
  let closure_19;
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
      const intl = projectId(flag[18]).intl;
      stringResult = intl.string(notifyAgent(flag[19])["4kCM6H"]);
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
          const intl2 = projectId(flag[18]).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj = { hosts: hosts.join(", ") };
          hosts = def.hosts;
          const Ww9HFO = notifyAgent(flag[19]).Ww9HFO;
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
    let disabled;
    let obj11;
    let options;
    let options2;
    let tmp14Result;
    let tmp19;
    let tmp9;
    projectId = found;
    const tmp = hintFor(found);
    if ("select" === found.type) {
      flag = true;
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
          title: null,
          hasIcons: false,
          children: options2.map((label) => {
                let closure_0 = label;
                let obj = {
                  label: label.label,
                  checked: items.includes(label.value),
                  disabled,
                  onPress(arg0) {
                    let closure_0 = arg0;
                    closure_2_13(false);
                    closure_2_6((arg0) => {
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
                const TableCheckboxRow = projectId(flag[23]).TableCheckboxRow;
                return memo1(TableCheckboxRow, obj, label.value);
              })
        };
        ({ label: obj6.title, options: options2 } = found);
        const TableRowGroup2 = projectId(flag[22]).TableRowGroup;
        const tmp44 = memo1;
        if (options2 == null) {
          options2 = [];
        }
        return tmp44(TableRowGroup2, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp33 = first[found.key];
      if (tmp33 == null) {
        tmp33 = memo1[found.key];
      }
      let tmp39;
      const TableRadioGroup = projectId(flag[24]).TableRadioGroup;
      const tmp36 = memo1;
      if (typeof tmp33 === "string") {
        tmp39 = tmp33;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp39,
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
            return memo1(found(flag[25]).TableRadioRow, obj, label.value);
          })
      };
      ({ label: obj5.title, label: obj5.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return tmp36(TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp25 = first[found.key];
      if (tmp25 == null) {
        tmp25 = memo1[found.key];
      }
      const obj4 = { hasIcons: false, children: memo1(projectId(flag[23]).TableCheckboxRow, obj11) };
      const TableRowGroup = projectId(flag[22]).TableRowGroup;
      obj11 = {
        label: found.label,
        subLabel: tmp,
        checked: true === tmp25,
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
      return memo1(TableRowGroup, obj4, found.key);
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
                        closure_1_13(false);
                        closure_1_6((arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj[key.key] = key;
                          return obj;
                        });
                      },
              fallback: renderTextSetting(found, tmp)
            };
            tmp9 = first[found.key];
            const tmp4 = memo1;
            const tmp5 = renderValueSetting;
            if (tmp9 == null) {
              tmp9 = memo1[found.key];
            }
            tmp14Result = tmp4(tmp5, obj, found.key);
          } else {
            tmp14Result = renderTextSetting(found, tmp);
          }
        }
      }
      const obj12 = {
        projectId,
        isPreview: flag,
        def: found,
        hint: tmp,
        value: tmp19,
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
        fallback: renderTextSetting(found, tmp)
      };
      tmp19 = first[found.key];
      const tmp14 = memo1;
      const tmp15 = renderTextSetting;
      if (tmp19 == null) {
        tmp19 = memo1[found.key];
      }
      tmp14Result = tmp14(tmp15, obj12, found.key);
    }
  }
  function renderTextSetting(label, description) {
    let str4;
    let tmp3;
    let closure_0 = label;
    let obj = first[label.key];
    if (obj == null) {
      obj = memo1[label.key];
    }
    const obj2 = {
      label: label.label,
      description,
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
    const TextInput = projectId(flag[26]).TextInput;
    const tmp2 = memo1;
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
    let intl;
    let intl2;
    let items;
    let items1;
    let obj7;
    let str;
    let str2;
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
        const obj2 = { style: closure_3.secretRow, children: items1 };
        const obj3 = { style: closure_3.secretRowInfo, children: items };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        items = [memo1(projectId(true[27]).Text, obj4), memo1(projectId(true[27]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp9Result = null;
        if (null != tmp2) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: tmp2 };
          tmp9Result = tmp9(tmp10(tmp11[27]).Text, obj5);
        }
        items[2] = tmp9Result;
        items1 = [found(closure_6, obj3), ];
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(notifyAgent(true[19]).RsvBGf),
          accessibilityLabel: intl2.formatToPlainString(notifyAgent(true[19]).WjoM7z, obj7),
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
        const Button = tmp10(tmp11[28]).Button;
        intl = tmp10(tmp11[18]).intl;
        intl2 = tmp10(tmp11[18]).intl;
        obj7 = { label };
        items1[1] = memo1(Button, obj6);
        tmp4Result = tmp6(tmp7, obj2, value.name);
      }
      return tmp4Result;
    }
    let obj = {
      label,
      description: tmp2,
      placeholder: str,
      secureTextEntry: true,
      autoComplete: "off",
      autoCapitalize: "none",
      autoCorrect: false,
      value: str2,
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
    str = undefined;
    const TextInput = projectId(flag[26]).TextInput;
    const tmp4 = memo1;
    if (value.set) {
      str = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    str2 = first1[value.name];
    if (str2 == null) {
      str2 = "";
    }
    tmp4Result = tmp4(TextInput, obj, value.name);
  }
  let tmp = hintFor();
  _asyncToGenerator = tmp;
  let tmp2 = projectId;
  let tmp3 = flag;
  let obj = projectId(flag[15]);
  let items = [memo];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  let obj2 = first;
  let tmp5 = stateFromStores(first.useState({}), 2);
  first = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = stateFromStores(first.useState({}), 2);
  const first1 = tmp7[0];
  let closure_8 = tmp7[1];
  let tmp9 = stateFromStores(first.useState({}), 2);
  [c9, c10] = tmp9;
  let tmp10 = stateFromStores(first.useState(false), 2);
  const first2 = tmp10[0];
  let closure_12 = tmp10[1];
  const tmp12 = stateFromStores(first.useState(false), 2);
  let closure_13 = tmp12[1];
  let items1 = [stateFromStores];
  const first3 = tmp12[0];
  memo = first.useMemo(() => {
    let schema;
    if (stateFromStores != null) {
      schema = stateFromStores.schema;
    }
    if (schema == null) {
      schema = [];
    }
    return schema;
  }, items1);
  const items2 = [stateFromStores];
  const memo1 = first.useMemo(() => {
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
    const obj6 = projectId(flag[16]);
    const merged1 = Object.assign(obj6.conjureSecretsSubmission(memo, obj2));
    return obj5;
  }, items4);
  let tmp19 = null != memo3.values || null != memo3.secrets;
  closure_19 = tmp19;
  const items5 = [tmp19, notifyAgent, projectId, first2, memo3];
  let tmp21 = null;
  const callback = obj2.useCallback(_asyncToGenerator(async (arg0, value) => {
    let _null;
    let obj4;
    if (c7 === 2) {
      c7 = 3;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp;
            closure_2 = tmp4;
            rebuildRequired = undefined;
            _null2 = undefined;
            const tmp83 = closure_19;
            if (tmp83) {
              const tmp64 = first2;
              if (!tmp64) {
                closure_12(true);
                project(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj6 = { value: obj4.submitProjectSettings(projectId, memo3), done: false };
                obj4 = _null(closure_2[17]);
                return obj6;
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          rebuildRequired = value.rebuildRequired;
          const tmp82 = closure_131_1;
          if (!tmp82) {
            if (!first2.hasPendingSettingsRequest(closure_131_0)) {
              if (rebuildRequired) {
                const obj2 = _null(closure_2[17]);
                const projectRebuild = obj2.requestProjectRebuild(closure_131_0);
              } else {
                _null2 = project.getProject(closure_131_0);
                let application_id;
                const restartAppFrames = _null(closure_2[20]).restartAppFrames;
                const tmp15 = _null(closure_2[20]);
                if (_null2 != null) {
                  application_id = _null2.application_id;
                }
                _null = application_id;
                if (application_id == null) {
                  _null = null;
                }
                restartAppFrames(_null);
                let isPreviewlessProjectResult = null != _null2;
                if (isPreviewlessProjectResult) {
                  const obj = _null(closure_2[21]);
                  isPreviewlessProjectResult = obj.isPreviewlessProject(_null2);
                }
                if (!isPreviewlessProjectResult) {
                  let prop;
                  const restartAppFrames2 = _null(closure_2[20]).restartAppFrames;
                  const tmp31 = _null(closure_2[20]);
                  if (_null2 != null) {
                    prop = _null2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  restartAppFrames2(_null2);
                }
              }
            }
            c5 = 0;
            closure_131_12(false);
            c7 = 3;
            return { value: true, done: true };
          }
          const intl = _null(closure_2[18]).intl;
          closure_1_12(closure_131_0, intl.string(_null2(closure_2[19])["08bsJL"]));
        }
      } catch (tmp73) {
        closure_4 = tmp73;
        if (0 === c5) {
          c7 = 3;
          throw tmp73;
        } else if (1 === tmp75) {
          c6 = 1;
        } else {
          c6 = 2;
        }
      }
    }
  }), items5);
  if (first3) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl.string(notifyAgent(tmp3[19])["A5TC+K"]) };
    const Text = tmp2(tmp3[27]).Text;
    intl = tmp2(tmp3[18]).intl;
    tmp21 = memo1(Text, obj3);
  }
  let tmp25 = closure_6;
  let obj4 = { style: tmp.section, children: items6 };
  let tmp26 = null;
  if (null != note) {
    let str = "";
    tmp26 = null;
    if ("" !== note) {
      let obj5 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp26 = memo1(tmp2(tmp3[27]).Text, obj5);
    }
  }
  items6 = [tmp26, , , ];
  let tmp28 = null;
  if (null != stateFromStores) {
    tmp28 = null;
    if (0 === found.length) {
      tmp28 = null;
      if (0 === memo2.length) {
        let obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(notifyAgent(tmp3[19]).lJJayk) };
        const Text2 = tmp2(tmp3[27]).Text;
        intl2 = tmp2(tmp3[18]).intl;
        tmp28 = memo1(Text2, obj6);
      }
    }
  }
  items6[1] = tmp28;
  if (found1.length > 0) {
    let tmp33 = null;
    const tmp32 = map;
    if (someResult) {
      let obj7 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(notifyAgent(tmp3[19]).dsHRPK) };
      const Text3 = tmp2(tmp3[27]).Text;
      intl3 = tmp2(tmp3[18]).intl;
      tmp33 = memo1(Text3, obj7);
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
  const obj9 = { fields: found(tmp25, obj4), secretFields: found(tmp25, obj10), loaded: null != stateFromStores, valueCount: found.length, secretCount: memo2.length, isScoped: found1.length > 0, canSave: tmp19, saving: first2, submit: callback };
  obj10 = { style: tmp.section, children: items8 };
  let obj11 = { variant: "text-xs/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[19]).dsHRPK) };
  const Text4 = tmp2(tmp3[27]).Text;
  intl4 = tmp2(tmp3[18]).intl;
  items8 = [memo1(Text4, obj11), memo2.map(renderSecret), tmp21];
  return obj9;
};
