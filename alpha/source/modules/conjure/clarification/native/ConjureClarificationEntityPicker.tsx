// Module ID: 12564
// Function ID: 12565
// Name: ConjureClarificationEntityPicker
// Dependencies: [19, 4935, 4879, 21, 558, 576, 12409, 5247, 12565, 12566, 6943, 6963, 7047, 12408, 12568, 12295, 12569, 504, 7405, 12297, 1125, 3864, 12299, 2]

// Module 12564 (ConjureClarificationEntityPicker)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5247 */;
import TableRow2 from "TableRow" /* 6963 */;
import TableRowGroup2 from "TableRowGroup" /* 7047 */;
import ConjureUtils from "ConjureUtils" /* 7405 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12297 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 12299 */;
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12408 */;
import ConjureClarification from "ConjureClarification" /* 12566 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4935 */;
import GuildStore from "GuildStore" /* 4879 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const jsx = Fragment.jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
const ConjureClarificationEntityPicker_str = "ConjureClarificationEntityPicker";
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationEntityPicker(question) {
  const obj = react2;
  const cResult = obj.c(6);
  const input = question.question.input;
  if ("project" === input) {
    let tmp16;
    if (cResult[0] !== question) {
      const merged = Object.assign(question);
      const tmp22 = <closure_9 />;
      cResult[0] = question;
      cResult[1] = tmp22;
      tmp16 = tmp22;
    } else {
      tmp16 = cResult[1];
    }
    return tmp16;
  } else if ("server" === input) {
    let tmp9;
    if (cResult[2] !== question) {
      const merged1 = Object.assign(question);
      const tmp15 = <closure_8 />;
      cResult[2] = question;
      cResult[3] = tmp15;
      tmp9 = tmp15;
    } else {
      tmp9 = cResult[3];
    }
    return tmp9;
  } else {
    let tmp2;
    if (cResult[4] !== question) {
      const merged2 = Object.assign(question);
      const tmp8 = <closure_10 key={arg0.question.id} />;
      cResult[4] = question;
      cResult[5] = tmp8;
      tmp2 = tmp8;
    } else {
      tmp2 = cResult[5];
    }
    return tmp2;
  }
}) : (function ConjureClarificationEntityPicker(question) {
  const input = question.question.input;
  if ("project" === input) {
    const merged = Object.assign(question);
    return <closure_9 />;
  } else if ("server" === input) {
    const merged1 = Object.assign(question);
    return <closure_8 />;
  } else {
    const merged2 = Object.assign(question);
    return <closure_10 key={arg0.question.id} />;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ServerPicker(question) {
  let disabled;
  let onChange;
  const tmp = question;
  let obj = question(onChange[5]);
  const cResult = obj.c(22);
  question = question.question;
  const value = question.value;
  importDefault = value;
  ({ disabled, onChange } = question);
  const fallback = question.fallback;
  const obj2 = question(onChange[6]);
  const conjureEligibleGuilds = obj2.useConjureEligibleGuilds(ConjureClarificationEntityPicker_str);
  if (0 === conjureEligibleGuilds.length) {
    return fallback;
  } else {
    let tmp13;
    if (cResult[0] === conjureEligibleGuilds) {
      let tmp8;
      let first = value[0];
      let id;
      const tmp4 = cResult[1];
      if (first != null) {
        id = first.id;
      }
      if (tmp4 === id) {
        tmp8 = cResult[2];
      }
      if (cResult[5] === conjureEligibleGuilds) {
        if (cResult[6] === onChange) {
          if (cResult[7] === question.question) {
            let tmp19;
            let tmp25;
            let tmp30;
            if (cResult[8] === value) {
              tmp19 = cResult[9];
            }
            const first1 = value[0];
            let name;
            const tmp22 = cResult[10];
            if (first1 != null) {
              name = first1.name;
            }
            if (tmp22 !== name) {
              const first2 = value[0];
              let name1;
              if (first2 != null) {
                name1 = first2.name;
              }
              if (name1 == null) {
                const tmpResult = tmp(onChange[9]);
                name1 = tmpResult.clarificationPickerPlaceholder("server", false);
              }
              const first3 = value[0];
              let name2;
              if (first3 != null) {
                name2 = first3.name;
              }
              cResult[10] = name2;
              cResult[11] = name1;
              tmp25 = name1;
            } else {
              tmp25 = cResult[11];
            }
            if (cResult[12] !== tmp8) {
              let tmp31;
              if (null != tmp8) {
                require("GuildIcon");
                tmp31 = <tmp34 guild={tmp8} size={tmp(onChange[10]).GuildIconSizes.SMALL_32} />;
              }
              cResult[12] = tmp8;
              cResult[13] = tmp31;
              tmp30 = tmp31;
            } else {
              tmp30 = cResult[13];
            }
            if (cResult[14] === disabled) {
              if (cResult[15] === tmp19) {
                if (cResult[16] === tmp25) {
                  let tmp35;
                  if (cResult[17] === tmp30) {
                    tmp35 = cResult[18];
                  }
                  if (cResult[19] === null != tmp8) {
                    let tmp38;
                    if (cResult[20] === tmp35) {
                      tmp38 = cResult[21];
                    }
                    return tmp38;
                  }
                  const tmp40 = jsx(tmp(onChange[12]).TableRowGroup, { hasIcons: null != tmp8, children: tmp35 });
                  cResult[19] = null != tmp8;
                  cResult[20] = tmp35;
                  cResult[21] = tmp40;
                  tmp38 = tmp40;
                }
              }
            }
            const tmp37 = jsx(tmp(onChange[11]).TableRow, { label: tmp25, icon: tmp30, arrow: true, disabled, onPress: tmp19 });
            cResult[14] = disabled;
            cResult[15] = tmp19;
            cResult[16] = tmp25;
            cResult[17] = tmp30;
            cResult[18] = tmp37;
            tmp35 = tmp37;
          }
        }
      }
      function openSheet() {
        let obj = { content: null, key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
        const showActionSheet = ActionSheetActionCreators.showActionSheet;
        ActionSheetActionCreators;
        showActionSheet(obj);
      }
      cResult[5] = conjureEligibleGuilds;
      cResult[6] = onChange;
      cResult[7] = question.question;
      cResult[8] = value;
      cResult[9] = openSheet;
      tmp19 = openSheet;
    }
    const first4 = value[0];
    let id1;
    const tmp9 = cResult[3];
    if (first4 != null) {
      id1 = first4.id;
    }
    if (tmp9 !== id1) {
      const first5 = value[0];
      let id2;
      if (first5 != null) {
        id2 = first5.id;
      }
      const fn = function s(id) {
        const first = importDefault[0];
        let id1;
        id = id.id;
        if (first != null) {
          id1 = first.id;
        }
        return id === id1;
      };
      cResult[3] = id2;
      cResult[4] = fn;
      tmp13 = fn;
    } else {
      tmp13 = cResult[4];
    }
    const found = conjureEligibleGuilds.find(tmp13);
    cResult[0] = conjureEligibleGuilds;
    const first6 = value[0];
    let id3;
    if (first6 != null) {
      id3 = first6.id;
    }
    cResult[1] = id3;
    cResult[2] = found;
    tmp8 = found;
  }
}) : (function ServerPicker(onChange) {
  let disabled;
  let fallback;
  let value;
  ({ question: require, value } = onChange);
  importDefault = value;
  onChange = onChange.onChange;
  const tmp = require;
  ({ disabled, fallback } = onChange);
  let obj = require("useConjureProjects");
  const conjureEligibleGuilds = obj.useConjureEligibleGuilds(ConjureClarificationEntityPicker_str);
  if (0 === conjureEligibleGuilds.length) {
    return fallback;
  } else {
    const found = conjureEligibleGuilds.find((id) => {
      const first = importDefault[0];
      let id1;
      id = id.id;
      if (first != null) {
        id1 = first.id;
      }
      return id === id1;
    });
    const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
    let first = value[0];
    let name;
    const TableRow = tmp(tmp2[11]).TableRow;
    if (first != null) {
      name = first.name;
    }
    if (name == null) {
      const tmpResult = tmp(onChange[9]);
      name = tmpResult.clarificationPickerPlaceholder("server", false);
    }
    let tmp8Result;
    if (null != found) {
      const obj4 = { guild: found, size: tmp(onChange[10]).GuildIconSizes.SMALL_32 };
      const tmp6 = require("GuildIcon");
      tmp8Result = tmp8(tmp6, obj4);
    }
    return <TableRowGroup hasIcons={null != found}>{null}</TableRowGroup>;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectPicker(question) {
  let disabled;
  let fallback;
  let onChange;
  let projectId;
  const tmp = question;
  let obj = question(onChange[5]);
  const cResult = obj.c(11);
  question = question.question;
  const value = question.value;
  importDefault = value;
  ({ disabled, onChange } = question);
  ({ projectId, fallback } = question);
  const projects = require("useConjureProjectPickerOptions")(projectId);
  if (0 === projects.length) {
    return fallback;
  } else {
    if (cResult[0] === onChange) {
      if (cResult[1] === projects) {
        if (cResult[2] === question.question) {
          let tmp4;
          let tmp9;
          if (cResult[3] === value) {
            tmp4 = cResult[4];
          }
          const first = value[0];
          let name;
          const tmp5 = cResult[5];
          if (first != null) {
            name = first.name;
          }
          if (tmp5 !== name) {
            const first1 = value[0];
            let name1;
            if (first1 != null) {
              name1 = first1.name;
            }
            if (name1 == null) {
              const tmpResult = tmp(onChange[9]);
              name1 = tmpResult.clarificationPickerPlaceholder("project", false);
            }
            const first2 = value[0];
            let name2;
            if (first2 != null) {
              name2 = first2.name;
            }
            cResult[5] = name2;
            cResult[6] = name1;
            tmp9 = name1;
          } else {
            tmp9 = cResult[6];
          }
          if (cResult[7] === disabled) {
            if (cResult[8] === tmp4) {
              let tmp14;
              if (cResult[9] === tmp9) {
                tmp14 = cResult[10];
              }
              return tmp14;
            }
          }
          const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
          const tmp16 = <TableRowGroup hasIcons={false}>{null}</TableRowGroup>;
          cResult[7] = disabled;
          cResult[8] = tmp4;
          cResult[9] = tmp9;
          cResult[10] = tmp16;
          tmp14 = tmp16;
        }
      }
    }
    function openSheet() {
      let obj = { content: null, key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
    cResult[0] = onChange;
    cResult[1] = projects;
    cResult[2] = question.question;
    cResult[3] = value;
    cResult[4] = openSheet;
    tmp4 = openSheet;
  }
}) : (function ProjectPicker(arg0) {
  let disabled;
  let fallback;
  let projectId;
  let value;
  ({ question: require, value } = arg0);
  importDefault = value;
  ({ onChange: dependencyMap, fallback } = arg0);
  ({ projectId, disabled } = arg0);
  const projects = useConjureProjectPickerOptionsDefault(projectId);
  if (0 !== projects.length) {
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const first = value[0];
    let name;
    const TableRow = TableRow2.TableRow;
    const tmp4 = require;
    if (first != null) {
      name = first.name;
    }
    if (name == null) {
      const tmp4Result = tmp4(12566);
      name = tmp4Result.clarificationPickerPlaceholder("project", false);
    }
    let obj = { hasIcons: false, children: null };
    const obj2 = {
      label: name,
      arrow: true,
      disabled,
      onPress: function openSheet() {
          let obj = { content: null, key: ConjureClarificationPickerSheet, stackingBehavior: "stack" };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          ActionSheetActionCreators;
          showActionSheet(obj);
        }
    };
    fallback = tmp3(TableRowGroup, obj);
  }
  return fallback;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEntityPicker(value) {
  let disabled;
  let obj4;
  let onChange;
  let projectId;
  let question;
  let tmp = question;
  const tmp2 = onChange;
  let obj = question(onChange[5]);
  const cResult = obj.c(29);
  ({ projectId, question } = value);
  value = value.value;
  importDefault = value;
  ({ disabled, onChange } = value);
  const fallback = value.fallback;
  const obj2 = question(onChange[15]);
  const conjureSettingsGuildId = obj2.useConjureSettingsGuildId(projectId, true);
  if (cResult[0] === disabled) {
    if (cResult[1] === conjureSettingsGuildId) {
      if (cResult[2] === onChange) {
        if (cResult[3] === projectId) {
          if (cResult[4] === question) {
            let tmp5;
            let tmp9;
            if (cResult[5] === value) {
              tmp5 = cResult[6];
            }
            require("useConjureSafetyAlertsChannelPick")(tmp5);
            const input = question.input;
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              let items = [conjureSettingsGuildId];
              let num = 7;
              cResult[7] = items;
              tmp9 = items;
            } else {
              tmp9 = cResult[7];
            }
            if (cResult[8] === conjureSettingsGuildId) {
              let tmp11;
              let tmp12;
              if (cResult[9] === input) {
                tmp11 = cResult[10];
                tmp12 = cResult[11];
              }
              const tmpResult = tmp(tmp2[17]);
              const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp11, tmp12);
              if (null != conjureSettingsGuildId) {
                if (null != input) {
                  if ("project" !== input) {
                    if ("server" !== input) {
                      let closure_6 = tmp15;
                      if (cResult[12] === stateFromStores) {
                        if (cResult[13] === conjureSettingsGuildId) {
                          if (cResult[14] === input) {
                            if (cResult[15] === true === question.multi_select) {
                              if (cResult[16] === onChange) {
                                if (cResult[17] === question.channel_filter) {
                                  if (cResult[18] === question.question) {
                                    let tmp16;
                                    let joined;
                                    if (cResult[19] === value) {
                                      tmp16 = cResult[20];
                                    }
                                    if (cResult[21] === input) {
                                      if (cResult[22] === true === question.multi_select) {
                                        let tmp17;
                                        if (cResult[23] === value) {
                                          tmp17 = cResult[24];
                                        }
                                        if (cResult[25] === disabled) {
                                          if (cResult[26] === tmp16) {
                                            let tmp19;
                                            if (cResult[27] === tmp17) {
                                              tmp19 = cResult[28];
                                            }
                                            return tmp19;
                                          }
                                        }
                                        let obj3 = { hasIcons: false, children: stateFromStores(tmp(tmp2[11]).TableRow, obj4) };
                                        const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
                                        obj4 = { label: tmp17, arrow: true, disabled, onPress: tmp16 };
                                        const tmp21 = stateFromStores(TableRowGroup, obj3);
                                        class P {
                                          constructor() {
                                            let channels = null;
                                            if (null != conjureSettingsGuildId) {
                                              channels = null;
                                              if ("channel" === input) {
                                                channels = GuildChannelStore.getChannels(tmp);
                                              }
                                            }
                                            return channels;
                                          }
                                        }
                                        cResult[25] = disabled;
                                        cResult[26] = tmp16;
                                        cResult[27] = tmp17;
                                        cResult[28] = tmp21;
                                        tmp19 = tmp21;
                                      }
                                    }
                                    if (value.length > 0) {
                                      const mapped = value.map((name) => name.name);
                                      joined = mapped.join(", ");
                                    } else {
                                      const tmpResult2 = tmp(tmp2[9]);
                                      joined = tmpResult2.clarificationPickerPlaceholder(input, tmp15);
                                    }
                                    cResult[21] = input;
                                    cResult[22] = true === question.multi_select;
                                    cResult[23] = value;
                                    class P {
                                      constructor() {
                                        let channels = null;
                                        if (null != conjureSettingsGuildId) {
                                          channels = null;
                                          if ("channel" === input) {
                                            channels = GuildChannelStore.getChannels(tmp);
                                          }
                                        }
                                        return channels;
                                      }
                                    }
                                    tmp17 = joined;
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
                            if ("project" !== input) {
                              if ("server" !== input) {
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
                                        noChannelOptionLabel: intl.string(_modDef3864["jtBVV+"]),
                                        onSelect(id) {
                                                        let items;
                                                        const tmp = closure_1_2;
                                                        if (null == id) {
                                                          items = [];
                                                        } else {
                                                          const obj = question(onChange[9]);
                                                          items = obj.clarificationChannelEntities(id, closure_1_1);
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
                                            const obj = question(onChange[9]);
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
                        }
                      }
                      cResult[12] = stateFromStores;
                      cResult[13] = conjureSettingsGuildId;
                      class P {
                        constructor() {
                          let channels = null;
                          if (null != conjureSettingsGuildId) {
                            channels = null;
                            if ("channel" === input) {
                              channels = GuildChannelStore.getChannels(tmp);
                            }
                          }
                          return channels;
                        }
                      }
                      cResult[15] = true === question.multi_select;
                      cResult[16] = onChange;
                      cResult[17] = question.channel_filter;
                      cResult[18] = question.question;
                      cResult[19] = value;
                      cResult[20] = openSheet;
                      tmp16 = openSheet;
                    }
                  }
                }
              }
              return fallback;
            }
            class P {
              constructor() {
                let channels = null;
                if (null != conjureSettingsGuildId) {
                  channels = null;
                  if ("channel" === input) {
                    channels = GuildChannelStore.getChannels(tmp);
                  }
                }
                return channels;
              }
            }
            const items1 = [conjureSettingsGuildId, input];
            cResult[8] = conjureSettingsGuildId;
            cResult[9] = input;
            cResult[10] = P;
            cResult[11] = items1;
            tmp12 = items1;
            tmp11 = P;
          }
        }
      }
    }
  }
  let obj5 = { projectId, guildId: conjureSettingsGuildId, question, value, disabled, onChange };
  cResult[0] = disabled;
  cResult[1] = conjureSettingsGuildId;
  cResult[2] = onChange;
  cResult[3] = projectId;
  cResult[4] = question;
  cResult[5] = value;
  cResult[6] = obj5;
  tmp5 = obj5;
}) : (function GuildEntityPicker(value) {
  let disabled;
  let obj4;
  let onChange;
  let projectId;
  let question;
  ({ projectId, question } = value);
  value = value.value;
  importDefault = value;
  ({ disabled, onChange } = value);
  let closure_6;
  let tmp = question;
  const tmp2 = onChange;
  const fallback = value.fallback;
  let obj = question(onChange[15]);
  const conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, true);
  const tmp4 = require("useConjureSafetyAlertsChannelPick")({ projectId, guildId: conjureSettingsGuildId, question, value, disabled, onChange });
  const input = question.input;
  const obj2 = question(onChange[17]);
  let items = [conjureSettingsGuildId];
  const items1 = [conjureSettingsGuildId, input];
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
      if ("project" !== input) {
        if ("server" !== input) {
          let joined;
          closure_6 = tmp6;
          const TableRowGroup = tmp(tmp2[12]).TableRowGroup;
          let num = 0;
          const TableRow = tmp(tmp2[11]).TableRow;
          if (value.length > 0) {
            const mapped = value.map((name) => name.name);
            joined = mapped.join(", ");
          } else {
            const tmpResult = tmp(tmp2[9]);
            joined = tmpResult.clarificationPickerPlaceholder(input, tmp6);
          }
          let obj3 = { hasIcons: false, children: tmp7(TableRow, obj4) };
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
                          if ("project" !== input) {
                            if ("server" !== input) {
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
                                      noChannelOptionLabel: intl.string(_modDef3864["jtBVV+"]),
                                      onSelect(id) {
                                                      let items;
                                                      const tmp = closure_1_2;
                                                      if (null == id) {
                                                        items = [];
                                                      } else {
                                                        const obj = question(onChange[9]);
                                                        items = obj.clarificationChannelEntities(id, closure_1_1);
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
                                          const obj = question(onChange[9]);
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
                      }
                    }
          };
          return stateFromStores(TableRowGroup, obj3);
        }
      }
    }
  }
  return fallback;
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default tmp3;
