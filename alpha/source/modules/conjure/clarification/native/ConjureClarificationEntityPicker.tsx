// Module ID: 17248
// Function ID: 17249
// Name: ConjureClarificationEntityPicker
// Dependencies: [19, 4748, 2087, 4760, 1390, 21, 558, 576, 17070, 504, 6945, 5056, 12179, 1126, 3849, 17241, 5421, 17072, 6264, 6179, 2]

// Module 17248 (ConjureClarificationEntityPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12179 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 17072 */;
import ConjureClarification from "ConjureClarification" /* 17241 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

const jsx = Fragment.jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationEntityPicker(question) {
  let disabled;
  let fallback;
  let first;
  let onChange;
  let projectId;
  let tmp = question;
  const tmp2 = onChange;
  let obj = question(onChange[7]);
  const cResult = obj.c(22);
  question = question.question;
  const value = question.value;
  importDefault = value;
  ({ disabled, onChange } = question);
  ({ projectId, fallback } = question);
  const obj2 = question(onChange[8]);
  const conjureSettingsGuildId = obj2.useConjureSettingsGuildId(projectId, true);
  const input = question.input;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [conjureSettingsGuildId];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === conjureSettingsGuildId) {
    let tmp7;
    let tmp8;
    if (cResult[2] === input) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(tmp2[9]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (null != conjureSettingsGuildId) {
      if (null != input) {
        let closure_6 = tmp11;
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === conjureSettingsGuildId) {
            if (cResult[7] === input) {
              if (cResult[8] === true === question.multi_select) {
                if (cResult[9] === onChange) {
                  if (cResult[10] === question.channel_filter) {
                    if (cResult[11] === question.question) {
                      let tmp12;
                      let joined;
                      if (cResult[12] === value) {
                        tmp12 = cResult[13];
                      }
                      if (cResult[14] === input) {
                        if (cResult[15] === true === question.multi_select) {
                          let tmp13;
                          if (cResult[16] === value) {
                            tmp13 = cResult[17];
                          }
                          if (cResult[18] === disabled) {
                            if (cResult[19] === tmp12) {
                              let tmp15;
                              if (cResult[20] === tmp13) {
                                tmp15 = cResult[21];
                              }
                              return tmp15;
                            }
                          }
                          let tmp16 = jsx;
                          const TableRowGroup = tmp(tmp2[18]).TableRowGroup;
                          let obj4 = { label: tmp13, arrow: true, disabled, onPress: tmp12 };
                          const tmp17 = <TableRowGroup hasIcons={false}>{null}</TableRowGroup>;
                          cResult[18] = disabled;
                          cResult[19] = tmp12;
                          cResult[20] = tmp13;
                          cResult[21] = tmp17;
                          tmp15 = tmp17;
                        }
                      }
                      if (value.length > 0) {
                        const mapped = value.map((name) => name.name);
                        joined = mapped.join(", ");
                      } else {
                        const tmpResult2 = tmp(tmp2[15]);
                        joined = tmpResult2.clarificationPickerPlaceholder(input, tmp11);
                      }
                      cResult[14] = input;
                      cResult[15] = true === question.multi_select;
                      cResult[16] = value;
                      cResult[17] = joined;
                      tmp13 = joined;
                    }
                  }
                }
              }
            }
          }
        }
        function openSheet() {
          let found;
          let intl;
          let num;
          let obj5;
          let tmp = conjureSettingsGuildId;
          if (null != conjureSettingsGuildId) {
            if (null != input) {
              if ("channel" === input) {
                const tmp25 = closure_6;
                if (!tmp25) {
                  if (null != stateFromStores) {
                    const obj4 = ConjureUtils;
                    const result = obj4.conjureSettingChannels(tmp2, question.channel_filter);
                    const showActionSheet2 = ActionSheetActionCreators.showActionSheet;
                    const obj3 = {
                      header: obj5,
                      guild: GuildStore.getGuild(tmp),
                      channels: result,
                      selectedChannel: found,
                      noChannelOptionLabel: intl.string(_modDef3849["jtBVV+"]),
                      onSelect(id) {
                                  let items;
                                  let closure_0 = id;
                                  const tmp = closure_1_2;
                                  if (null == id) {
                                    items = [];
                                  } else {
                                    let obj = question(onChange[15]);
                                    const items1 = [id.id];
                                    items = obj.clarificationEntities(input, items1, () => {
                                      const obj = closure_2_0(closure_2_2[16]);
                                      return obj.computeChannelName(closure_0, closure_2_6, closure_2_5);
                                    }, closure_1_1);
                                  }
                                  return tmp(items, conjureSettingsGuildId);
                                }
                    };
                    obj5 = { title: question.question };
                    ActionSheetActionCreators;
                    const tmp35 = ChannelPickerActionSheetDefault;
                    found = result.find((id) => {
                      const first = closure_1_1[0];
                      let id1;
                      id = id.id;
                      if (first != null) {
                        id1 = first.id;
                      }
                      return id === id1;
                    });
                    const tmp32 = jsx;
                    if (found == null) {
                      found = null;
                    }
                    let obj = { content: tmp32(tmp35, obj3), key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
                    intl = intl2.intl;
                    showActionSheet2(obj);
                  }
                }
              }
              const showActionSheet = ActionSheetActionCreators.showActionSheet;
              ({ channel_filter: obj2.channelFilter, question: obj2.title } = question);
              const obj6 = {
                guildId: tmp,
                type: input,
                channelFilter: null,
                title: null,
                maxPicks: num,
                selected: importDefault.map((id) => ({ id: id.id, label: id.name })),
                onSubmit(arr) {
                      let closure_0 = arr;
                      const obj = question(onChange[15]);
                      return closure_1_2(obj.clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
                        closure_0 = arg0;
                        const found = closure_0.find((id) => id.id === closure_0);
                        let label;
                        if (found != null) {
                          label = found.label;
                        }
                        return label;
                      }, closure_1_1), conjureSettingsGuildId);
                    }
              };
              num = 1;
              ActionSheetActionCreators;
              const tmp13 = jsx;
              const tmp16 = ConjureGuildPickerSheetDefault;
              if (closure_6) {
                num = ConjureClarification.MAX_CLARIFICATION_ENTITY_PICKS;
              }
              const obj10 = { content: tmp13(tmp16, obj6), key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
              showActionSheet(obj10);
            }
          }
        }
        cResult[5] = stateFromStores;
        cResult[6] = conjureSettingsGuildId;
        cResult[7] = input;
        cResult[8] = true === question.multi_select;
        cResult[9] = onChange;
        cResult[10] = question.channel_filter;
        cResult[11] = question.question;
        cResult[12] = value;
        cResult[13] = openSheet;
        tmp12 = openSheet;
      }
    }
    return fallback;
  }
  const fn = function f() {
    let channels = null;
    if (null != conjureSettingsGuildId) {
      channels = null;
      if ("channel" === input) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  };
  let items1 = [conjureSettingsGuildId, input];
  cResult[1] = conjureSettingsGuildId;
  cResult[2] = input;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : (function ConjureClarificationEntityPicker(question) {
  let disabled;
  let fallback;
  let obj4;
  let projectId;
  question = question.question;
  const value = question.value;
  importDefault = value;
  const onChange = question.onChange;
  let closure_6;
  let tmp = question;
  const tmp2 = onChange;
  ({ projectId, disabled, fallback } = question);
  let obj = question(onChange[8]);
  const conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, true);
  const input = question.input;
  const obj2 = question(onChange[9]);
  let items = [conjureSettingsGuildId];
  let items1 = [conjureSettingsGuildId, input];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let channels = null;
    if (null != conjureSettingsGuildId) {
      channels = null;
      if ("channel" === input) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  }, items1);
  if (null != conjureSettingsGuildId) {
    if (null != input) {
      let joined;
      const tmp5 = true === question.multi_select;
      closure_6 = tmp5;
      const tmp6 = jsx;
      const TableRowGroup = tmp(tmp2[18]).TableRowGroup;
      let num = 0;
      const TableRow = tmp(tmp2[19]).TableRow;
      if (value.length > 0) {
        const mapped = value.map((name) => name.name);
        joined = mapped.join(", ");
      } else {
        const tmpResult = tmp(tmp2[15]);
        joined = tmpResult.clarificationPickerPlaceholder(input, tmp5);
      }
      let obj3 = { hasIcons: false, children: tmp6(TableRow, obj4) };
      obj4 = {
        label: joined,
        arrow: true,
        disabled,
        onPress: function openSheet() {
              let found;
              let intl;
              let num;
              let obj5;
              let tmp = conjureSettingsGuildId;
              if (null != conjureSettingsGuildId) {
                if (null != input) {
                  if ("channel" === input) {
                    const tmp25 = closure_6;
                    if (!tmp25) {
                      if (null != stateFromStores) {
                        const obj4 = ConjureUtils;
                        const result = obj4.conjureSettingChannels(tmp2, question.channel_filter);
                        const showActionSheet2 = ActionSheetActionCreators.showActionSheet;
                        const obj3 = {
                          header: obj5,
                          guild: GuildStore.getGuild(tmp),
                          channels: result,
                          selectedChannel: found,
                          noChannelOptionLabel: intl.string(_modDef3849["jtBVV+"]),
                          onSelect(id) {
                                      let items;
                                      let closure_0 = id;
                                      const tmp = closure_1_2;
                                      if (null == id) {
                                        items = [];
                                      } else {
                                        let obj = question(onChange[15]);
                                        const items1 = [id.id];
                                        items = obj.clarificationEntities(input, items1, () => {
                                          const obj = closure_2_0(closure_2_2[16]);
                                          return obj.computeChannelName(closure_0, closure_2_6, closure_2_5);
                                        }, closure_1_1);
                                      }
                                      return tmp(items, conjureSettingsGuildId);
                                    }
                        };
                        obj5 = { title: question.question };
                        ActionSheetActionCreators;
                        const tmp35 = ChannelPickerActionSheetDefault;
                        found = result.find((id) => {
                          const first = closure_1_1[0];
                          let id1;
                          id = id.id;
                          if (first != null) {
                            id1 = first.id;
                          }
                          return id === id1;
                        });
                        const tmp32 = jsx;
                        if (found == null) {
                          found = null;
                        }
                        let obj = { content: tmp32(tmp35, obj3), key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
                        intl = intl2.intl;
                        showActionSheet2(obj);
                      }
                    }
                  }
                  const showActionSheet = ActionSheetActionCreators.showActionSheet;
                  ({ channel_filter: obj2.channelFilter, question: obj2.title } = question);
                  const obj6 = {
                    guildId: tmp,
                    type: input,
                    channelFilter: null,
                    title: null,
                    maxPicks: num,
                    selected: importDefault.map((id) => ({ id: id.id, label: id.name })),
                    onSubmit(arr) {
                          let closure_0 = arr;
                          const obj = question(onChange[15]);
                          return closure_1_2(obj.clarificationEntities(input, arr.map((id) => id.id), (arg0) => {
                            closure_0 = arg0;
                            const found = closure_0.find((id) => id.id === closure_0);
                            let label;
                            if (found != null) {
                              label = found.label;
                            }
                            return label;
                          }, closure_1_1), conjureSettingsGuildId);
                        }
                  };
                  num = 1;
                  ActionSheetActionCreators;
                  const tmp13 = jsx;
                  const tmp16 = ConjureGuildPickerSheetDefault;
                  if (closure_6) {
                    num = ConjureClarification.MAX_CLARIFICATION_ENTITY_PICKS;
                  }
                  const obj10 = { content: tmp13(tmp16, obj6), key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
                  showActionSheet(obj10);
                }
              }
            }
      };
      return tmp6(TableRowGroup, obj3);
    }
  }
  return fallback;
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default tmp3;
