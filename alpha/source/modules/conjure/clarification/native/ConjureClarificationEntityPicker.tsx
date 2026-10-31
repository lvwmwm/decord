// Module ID: 12751
// Function ID: 12752
// Name: ConjureClarificationEntityPicker
// Dependencies: [19, 4944, 4885, 21, 12596, 7060, 6975, 12584, 6957, 5258, 12752, 12595, 12753, 12493, 12754, 504, 7419, 11200, 1113, 3868, 12495, 2]
// Exports: default

// Module 12751 (ConjureClarificationEntityPicker)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import TableRow2 from "TableRow" /* 6975 */;
import TableRowGroup2 from "TableRowGroup" /* 7060 */;
import ConjureUtils from "ConjureUtils" /* 7419 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11200 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 12495 */;
import ConjureClarification from "ConjureClarification" /* 12584 */;
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12595 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let id, importDefault;

function ServerPicker(onChange) {
  let disabled;
  let fallback;
  let value;
  ({ question: require, value } = onChange);
  importDefault = value;
  onChange = onChange.onChange;
  const tmp = require;
  ({ disabled, fallback } = onChange);
  let obj = require("useConjureProjects");
  const conjureEligibleGuilds = obj.useConjureEligibleGuilds("ConjureClarificationEntityPicker");
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
    const TableRowGroup = tmp(tmp2[5]).TableRowGroup;
    let first = value[0];
    let name;
    const TableRow = tmp(tmp2[6]).TableRow;
    if (first != null) {
      name = first.name;
    }
    if (name == null) {
      const tmpResult = tmp(onChange[7]);
      name = tmpResult.clarificationPickerPlaceholder("server", false);
    }
    let tmp8Result;
    if (null != found) {
      const obj4 = { guild: found, size: tmp(onChange[8]).GuildIconSizes.SMALL_32 };
      const tmp6 = require("GuildIcon");
      tmp8Result = tmp8(tmp6, obj4);
    }
    return <TableRowGroup hasIcons={null != found}>{null}</TableRowGroup>;
  }
}
function ProjectPicker(arg0) {
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
      const tmp4Result = tmp4(12584);
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
}
function GuildEntityPicker(value) {
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
  let obj = question(onChange[13]);
  const conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, true);
  const tmp4 = require("useConjureSafetyAlertsChannelPick")({ projectId, guildId: conjureSettingsGuildId, question, value, disabled, onChange });
  const input = question.input;
  const obj2 = question(onChange[15]);
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
          const TableRowGroup = tmp(tmp2[5]).TableRowGroup;
          let num = 0;
          const TableRow = tmp(tmp2[6]).TableRow;
          if (value.length > 0) {
            const mapped = value.map((name) => name.name);
            joined = mapped.join(", ");
          } else {
            const tmpResult = tmp(tmp2[7]);
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
                                      noChannelOptionLabel: intl.string(_modDef3868["jtBVV+"]),
                                      onSelect(stateFromStores1) {
                                                      let items;
                                                      const tmp = closure_1_2;
                                                      if (null == stateFromStores1) {
                                                        items = [];
                                                      } else {
                                                        const obj = question(onChange[7]);
                                                        items = obj.clarificationChannelEntities(stateFromStores1, closure_1_1);
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
                                          const obj = question(onChange[7]);
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
}
const jsx = Fragment.jsx;
const ConjureClarificationPickerSheet = "ConjureClarificationPickerSheet";
let result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationEntityPicker.tsx");

export default function ConjureClarificationEntityPicker(question) {
  const input = question.question.input;
  if ("project" === input) {
    const merged = Object.assign(question);
    return <ProjectPicker />;
  } else if ("server" === input) {
    const merged1 = Object.assign(question);
    return <ServerPicker />;
  } else {
    const merged2 = Object.assign(question);
    return <GuildEntityPicker key={arg0.question.id} />;
  }
};
