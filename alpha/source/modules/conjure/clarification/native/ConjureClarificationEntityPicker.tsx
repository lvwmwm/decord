// Module ID: 12472
// Function ID: 12473
// Name: ConjureClarificationEntityPicker
// Dependencies: [19, 4902, 4846, 4914, 1389, 21, 558, 576, 12310, 5211, 12473, 12466, 6885, 6905, 6989, 12309, 12474, 12202, 504, 7347, 12204, 1125, 3831, 5605, 12206, 2]

// Module 12472 (ConjureClarificationEntityPicker)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5211 */;
import TableRow2 from "TableRow" /* 6905 */;
import TableRowGroup2 from "TableRowGroup" /* 6989 */;
import ConjureUtils from "ConjureUtils" /* 7347 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12204 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 12206 */;
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12309 */;
import ConjureClarification from "ConjureClarification" /* 12466 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4902 */;
import GuildStore from "GuildStore" /* 4846 */;
import RelationshipStore from "RelationshipStore" /* 4914 */;
import UserStore from "UserStore" /* 1389 */;
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
      const tmp22 = <closure_11 />;
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
      const tmp15 = <closure_10 />;
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
      const tmp8 = <closure_12 />;
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
    return <closure_11 />;
  } else if ("server" === input) {
    const merged1 = Object.assign(question);
    return <closure_10 />;
  } else {
    const merged2 = Object.assign(question);
    return <closure_12 />;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ServerPicker(question) {
  let disabled;
  let onChange;
  const tmp = question;
  let obj = question(onChange[7]);
  const cResult = obj.c(22);
  question = question.question;
  const value = question.value;
  importDefault = value;
  ({ disabled, onChange } = question);
  const fallback = question.fallback;
  const obj2 = question(onChange[8]);
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
                const tmpResult = tmp(onChange[11]);
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
                tmp31 = <tmp34 guild={tmp8} size={tmp(onChange[12]).GuildIconSizes.SMALL_32} />;
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
                  const tmp40 = jsx(tmp(onChange[14]).TableRowGroup, { hasIcons: null != tmp8, children: tmp35 });
                  cResult[19] = null != tmp8;
                  cResult[20] = tmp35;
                  cResult[21] = tmp40;
                  tmp38 = tmp40;
                }
              }
            }
            const tmp37 = jsx(tmp(onChange[13]).TableRow, { label: tmp25, icon: tmp30, arrow: true, disabled, onPress: tmp19 });
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
      const fn = function l(id) {
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
    const TableRowGroup = tmp(tmp2[14]).TableRowGroup;
    let first = value[0];
    let name;
    const TableRow = tmp(tmp2[13]).TableRow;
    if (first != null) {
      name = first.name;
    }
    if (name == null) {
      const tmpResult = tmp(onChange[11]);
      name = tmpResult.clarificationPickerPlaceholder("server", false);
    }
    let tmp8Result;
    if (null != found) {
      const obj4 = { guild: found, size: tmp(onChange[12]).GuildIconSizes.SMALL_32 };
      const tmp6 = require("GuildIcon");
      tmp8Result = tmp8(tmp6, obj4);
    }
    return <TableRowGroup hasIcons={null != found}>{null}</TableRowGroup>;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectPicker(question) {
  let disabled;
  let fallback;
  let onChange;
  let projectId;
  const tmp = question;
  let obj = question(onChange[7]);
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
              const tmpResult = tmp(onChange[11]);
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
          const TableRowGroup = tmp(tmp2[14]).TableRowGroup;
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
      const tmp4Result = tmp4(12466);
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
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEntityPicker(question) {
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
  const obj2 = question(onChange[17]);
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
    const tmpResult = tmp(tmp2[18]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (null != conjureSettingsGuildId) {
      if (null != input) {
        if ("project" !== input) {
          if ("server" !== input) {
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
                              const TableRowGroup = tmp(tmp2[14]).TableRowGroup;
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
                            const tmpResult2 = tmp(tmp2[11]);
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
                              noChannelOptionLabel: intl.string(_modDef3831["jtBVV+"]),
                              onSelect(id) {
                                              let items;
                                              let closure_0 = id;
                                              const tmp = closure_1_2;
                                              if (null == id) {
                                                items = [];
                                              } else {
                                                let obj = question(onChange[11]);
                                                const items1 = [id.id];
                                                items = obj.clarificationEntities(input, items1, () => {
                                                  const obj = closure_2_0(closure_2_2[23]);
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
                                  const obj = question(onChange[11]);
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
}) : (function GuildEntityPicker(question) {
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
  let obj = question(onChange[17]);
  const conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, true);
  const input = question.input;
  const obj2 = question(onChange[18]);
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
      if ("project" !== input) {
        if ("server" !== input) {
          let joined;
          const tmp5 = true === question.multi_select;
          closure_6 = tmp5;
          const tmp6 = jsx;
          const TableRowGroup = tmp(tmp2[14]).TableRowGroup;
          let num = 0;
          const TableRow = tmp(tmp2[13]).TableRow;
          if (value.length > 0) {
            const mapped = value.map((name) => name.name);
            joined = mapped.join(", ");
          } else {
            const tmpResult = tmp(tmp2[11]);
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
                                      noChannelOptionLabel: intl.string(_modDef3831["jtBVV+"]),
                                      onSelect(id) {
                                                      let items;
                                                      let closure_0 = id;
                                                      const tmp = closure_1_2;
                                                      if (null == id) {
                                                        items = [];
                                                      } else {
                                                        let obj = question(onChange[11]);
                                                        const items1 = [id.id];
                                                        items = obj.clarificationEntities(input, items1, () => {
                                                          const obj = closure_2_0(closure_2_2[23]);
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
                                          const obj = question(onChange[11]);
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
          return tmp6(TableRowGroup, obj3);
        }
      }
    }
  }
  return fallback;
});
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default tmp3;
