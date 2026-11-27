// Module ID: 18526
// Function ID: 18527
// Name: useConjureAppSettingsForm
// Dependencies: [5, 32, 19, 17, 4973, 4914, 4985, 1387, 7710, 21, 5043, 575, 504, 18527, 14759, 18529, 18530, 1112, 4245, 18531, 14758, 18532, 5726, 6140, 18533, 7181, 7251, 7253, 18545, 18549, 7440, 7274, 18550, 5634, 5641, 18551, 7602, 6144, 6158, 5659, 5257, 11771, 18528, 18552, 2]
// Exports: default

// Module 18526 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl11 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11771 */;
import conjureSettingValues from "conjureSettingValues" /* 14759 */;
import conjureSetupForm from "conjureSetupForm" /* 18531 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 18552 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4973 */;
import GuildStore from "GuildStore" /* 4914 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c5, channels, map;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let tmp;
const useConjureSettingPickerOptions = tmp(18527);
function ConjureChannelSettingRow(guildId) {
  let TableRowTrailingText;
  let disabled;
  let fallback;
  let hint;
  let obj5;
  let shortLinks;
  let tmp5Result;
  let tmpResult3;
  guildId = guildId.guildId;
  const def = guildId.def;
  ({ hint, value: dependencyMap, onChange: _asyncToGenerator } = guildId);
  let c4;
  let found;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  ({ shortLinks, disabled, fallback } = guildId);
  let obj = guildId(504);
  const items = [GuildChannelStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    channels = null;
    if (null != guildId) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items1);
  if (null != guildId) {
    if (null != stateFromStores) {
      let channelName;
      const tmpResult = tmp(7602);
      const result = tmpResult.conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === dependencyMap);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(6140).TableRowGroup;
      let obj2 = {
        label: def.label,
        subLabel: tmp5Result,
        arrow: true,
        disabled,
        trailing: closure_12(TableRowTrailingText, obj5),
        onPress() {
              let intl;
              let obj2;
              let obj3;
              let tmp2;
              let tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = { content: authStore2(tmp2, obj2), key: "ConjureSettingsChannelSheet", stackingBehavior: "stack" };
              obj2 = {
                header: obj3,
                guild: GuildStore.getGuild(guildId),
                channels,
                selectedChannel: found,
                noChannelOptionLabel: intl.string(_modDef4245["jtBVV+"]),
                onSelect(id) {
                  let str;
                  const tmp = closure_1_3;
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
              intl = intl11.intl;
              showActionSheet(obj);
            }
      };
      tmp5Result = undefined;
      const TableRow = tmp(6144).TableRow;
      if (null != hint) {
        let obj3 = { variant: "body-xs/medium", color: "text-subtle", children: tmpResult3.conjureLinkedNodes(hint, "body-xs/medium", shortLinks) };
        const Text = tmp(5634).Text;
        let str = "body-xs/medium";
        tmpResult3 = tmp(18533);
        tmp5Result = tmp5(Text, obj3);
      }
      TableRowTrailingText = tmp(6158).TableRowTrailingText;
      if (null != found) {
        const tmpResult4 = tmp(5659);
        channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1112).intl;
        channelName = intl.string(def(4245).iZIF9m);
      }
      const obj4 = { hasIcons: false, children: closure_12(TableRow, obj2) };
      obj5 = { text: channelName };
      return closure_12(TableRowGroup, obj4);
    }
  }
  return fallback;
}
function ConjurePickerSettingRow(guildId) {
  let _undefined;
  let _undefined2;
  let disabled;
  let fallback;
  let hint;
  let obj6;
  let shortLinks;
  let tmp10Result;
  let tmp4Result2;
  let value;
  guildId = guildId.guildId;
  const def = guildId.def;
  ({ hint, value, onChange: dependencyMap } = guildId);
  let c4;
  let closure_5;
  let tmp = def;
  let tmp2 = dependencyMap;
  ({ shortLinks, disabled, fallback } = guildId);
  let tmp3 = def(18527)(guildId, def);
  let tmp4 = guildId;
  let obj = guildId(18527);
  const result = obj.conjureSettingPickedIds(value);
  let c3 = result;
  let tmp5 = guildId(18528);
  let tmp6 = null;
  const useConjureMemberRequests = tmp5.useConjureMemberRequests;
  if ("user" === def.type) {
    tmp6 = guildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp6, result);
  if (null != guildId) {
    if (null != tmp3) {
      let formatToPlainStringResult;
      const tmp4Result = tmp4(18527);
      const withSavedPicksResult = tmp4Result.withSavedPicks(tmp3, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp12;
      if (true === def.multiple) {
        const intl2 = tmp4(1112).intl;
        let obj2 = { count: result.length };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(4245)["LPs/Pv"], obj2);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === c3[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp4(1112).intl;
          formatToPlainStringResult = intl.string(tmp(4245).rn7w7I);
        }
      }
      const TableRowGroup = tmp4(6140).TableRowGroup;
      const obj3 = {
        label: def.label,
        subLabel: tmp10Result,
        arrow: true,
        disabled,
        trailing: closure_12(tmp4(6158).TableRowTrailingText, obj6),
        onPress() {
              let num;
              let tmp2 = dependencyMap;
              let tmp3 = ActionSheetActionCreators;
              const showActionSheet = tmp3.showActionSheet;
              const obj = {
                guildId,
                type: def.type,
                channelFilter: def.channel_filter,
                title: def.label,
                maxPicks: num,
                selected: _undefined2.filter((id) => _undefined.includes(id.id)),
                onSubmit(arr) {
                  const mapped = arr.map((id) => id.id);
                  let tmp3 = mapped;
                  const tmp2 = closure_1_2;
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
              const obj2 = { content: tmp4(tmp5, obj), key: "ConjureSettingsPickerSheet", stackingBehavior: "stack" };
              showActionSheet(obj2);
            }
      };
      tmp10Result = undefined;
      const TableRow = tmp4(6144).TableRow;
      if (null != hint) {
        const obj4 = { variant: "body-xs/medium", color: "text-subtle", children: tmp4Result2.conjureLinkedNodes(hint, "body-xs/medium", shortLinks) };
        const Text = tmp4(5634).Text;
        let str = "body-xs/medium";
        tmp4Result2 = tmp4(18533);
        tmp10Result = tmp10(Text, obj4);
      }
      const obj5 = { hasIcons: false, children: closure_12(TableRow, obj3) };
      obj6 = { text: formatToPlainStringResult };
      return closure_12(TableRowGroup, obj5);
    }
  }
  return fallback;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { linkedField: obj2, setupField: obj3, section: obj4, setupForm: obj5, sectionHeader: obj6, secretRow: obj7, secretRowInfo: obj8 };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { gap: nativeDefault.space.PX_16 };
obj5 = { gap: nativeDefault.space.PX_24 };
obj6 = { gap: nativeDefault.space.PX_4 };
obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj8 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined22;
  let _undefined3;
  let _undefined4;
  let _undefined42;
  let c12;
  let c13;
  let c16;
  let c17;
  let c18;
  let c19;
  let c20;
  let c21;
  let c22;
  let c23;
  let c24;
  let closure_11;
  let closure_4;
  let closure_9;
  let draftErrorOfResult;
  let first1;
  let first2;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items11;
  let items12;
  let items13;
  let items14;
  let items8;
  let note;
  let notifyAgent;
  let obj21;
  let onFocus;
  let secretKeys;
  let serverId;
  let servers;
  let tmp13;
  let tmp53;
  let tmp64;
  let values;
  const f115660 = (filled) => filled.filled;
  projectId = projectId.projectId;
  ({ note, notifyAgent } = projectId);
  const scopeKeys = projectId.scopeKeys;
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  let onSaved = projectId.onSaved;
  let flag = projectId.isPreview;
  if (flag === undefined) {
    flag = false;
  }
  const onInputFocusChange = projectId.onInputFocusChange;
  react = undefined;
  values = undefined;
  closure_9 = undefined;
  first1 = undefined;
  closure_11 = undefined;
  c12 = undefined;
  c13 = undefined;
  first2 = undefined;
  closure_15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  c24 = undefined;
  serverId = undefined;
  let closure_34;
  let closure_35;
  let memo2;
  let result2;
  let result3;
  let c40;
  let closure_41;
  function draftErrorOf(found7) {
    let result = null;
    if (shortLinks) {
      const conjureSettingDraftError = conjureSetupForm.conjureSettingDraftError;
      conjureSetupForm;
      const obj = conjureSettingValues;
      result = conjureSettingDraftError(found7, first[obj.conjureSettingDraftKey(obj, found7, serverId)]);
    }
    if (null != result) {
      let formatToPlainStringResult;
      if ("min" === result.kind) {
        const intl3 = intl11.intl;
        const obj2 = { min: result.min };
        formatToPlainStringResult = intl3.formatToPlainString(_modDef4245.kDApFd, obj2);
      } else if ("max" === result.kind) {
        const intl2 = intl11.intl;
        const obj3 = { max: result.max };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef4245["5ft/Ii"], obj3);
      } else {
        const intl = intl11.intl;
        formatToPlainStringResult = intl.string(_modDef4245["0A2STI"]);
      }
      return formatToPlainStringResult;
    }
  }
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
      const intl = projectId(onSaved[17]).intl;
      stringResult = intl.string(notifyAgent(onSaved[18])["4kCM6H"]);
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
          const intl2 = projectId(onSaved[17]).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj = { hosts: hosts.join(", ") };
          hosts = def.hosts;
          const Ww9HFO = notifyAgent(onSaved[18]).Ww9HFO;
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
    let result4;
    let result5;
    let result6;
    let tmp2Result20;
    let tmp37Result;
    let tmp = hintFor(found);
    let tmp2 = projectId;
    let obj = projectId(onSaved[14]);
    const result = obj.conjureSettingDraftKey(found, serverId);
    if ("select" === found.type) {
      if (true === found.multiple) {
        const tmp2Result = tmp2(onSaved[14]);
        let result1 = first[tmp2Result.conjureSettingDraftKey(tmp2Result, found, tmp4)];
        if (result1 == null) {
          const tmp2Result15 = tmp2(onSaved[14]);
          result1 = tmp2Result15.conjureSettingStoredValue(stateFromStores, found, tmp4);
        }
        const _Array = Array;
        if (!Array.isArray(result1)) {
          result1 = [];
        }
        const obj2 = {
          title: found.label,
          description: conjureLinkedNodesResult,
          hasIcons: false,
          children: options1.map((label) => {
                let obj = {
                  label: label.label,
                  checked: result1.includes(label.value),
                  disabled,
                  onPress(arg0) {
                    let value;
                    const tmp2 = label;
                    if (arg0) {
                      const items = [];
                      items[HermesBuiltin.arraySpread(items, result1, 0)] = label.value;
                      found = items;
                    } else {
                      found = arr.filter((item) => item !== value.value);
                    }
                    c16(false);
                    let obj = label(closure_1_2[14]);
                    let closure_1 = obj.conjureSettingDraftKey(tmp2, serverId);
                    c22((arg0) => {
                      let tmp = null;
                      if (arg0 !== closure_1) {
                        tmp = arg0;
                      }
                      return tmp;
                    });
                    closure_9((arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj[closure_1] = found;
                      return obj;
                    });
                  }
                };
                const TableCheckboxRow = projectId(onSaved[25]).TableCheckboxRow;
                return c12(TableCheckboxRow, obj, label.value);
              })
        };
        conjureLinkedNodesResult = undefined;
        const TableRowGroup2 = tmp2(tmp3[23]).TableRowGroup;
        const tmp57 = c12;
        if (null != tmp) {
          const tmp2Result16 = tmp2(onSaved[24]);
          conjureLinkedNodesResult = tmp2Result16.conjureLinkedNodes(tmp, "body-sm/normal", shortLinks);
        }
        options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        return tmp57(TableRowGroup2, obj2, result);
      }
    }
    if ("select" === found.type) {
      const tmp2Result17 = tmp2(onSaved[14]);
      result2 = first[tmp2Result17.conjureSettingDraftKey(tmp2Result17, found, tmp4)];
      if (result2 == null) {
        const tmp2Result18 = tmp2(onSaved[14]);
        result2 = tmp2Result18.conjureSettingStoredValue(stateFromStores, found, tmp4);
      }
      let tmp50;
      const TableRadioGroup = tmp2(tmp3[26]).TableRadioGroup;
      const tmp49 = c12;
      if (typeof result2 === "string") {
        tmp50 = result2;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp50,
        onChange(def2) {
            found = def2;
            c16(false);
            const obj = found(onSaved[14]);
            let closure_1 = obj.conjureSettingDraftKey(found, serverId);
            c22((arg0) => {
              let tmp = null;
              if (arg0 !== closure_1) {
                tmp = arg0;
              }
              return tmp;
            });
            closure_9((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_1] = found;
              return obj;
            });
          },
        title: found.label,
        description: conjureLinkedNodesResult1,
        accessibilityLabel: null,
        children: options.map((label) => {
            const obj = { label: label.label, value: label.value };
            return _undefined(found(onSaved[27]).TableRadioRow, obj, label.value);
          })
      };
      conjureLinkedNodesResult1 = undefined;
      if (null != tmp) {
        const tmp2Result19 = tmp2(onSaved[24]);
        conjureLinkedNodesResult1 = tmp2Result19.conjureLinkedNodes(tmp, "body-sm/normal", shortLinks);
      }
      ({ label: obj19.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return tmp49(TableRadioGroup, obj3, result);
    } else {
      let tmp37Result2;
      if ("checkbox" === found.type) {
        const TableRowGroup = tmp2(tmp3[23]).TableRowGroup;
        const obj4 = {
          label: found.label,
          subLabel: tmp37Result,
          checked: true === result3,
          disabled: first2,
          onPress(def2) {
                found = def2;
                c16(false);
                const obj = found(onSaved[14]);
                let closure_1 = obj.conjureSettingDraftKey(found, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
              }
        };
        tmp37Result = undefined;
        let TableCheckboxRow = tmp2(tmp3[25]).TableCheckboxRow;
        if (null != tmp) {
          const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: tmp2Result20.conjureLinkedNodes(tmp, "body-xs/medium", tmp38) };
          const Text = tmp2(tmp3[33]).Text;
          tmp2Result20 = tmp2(onSaved[24]);
          tmp37Result = tmp37(Text, obj5);
        }
        const tmp2Result21 = tmp2(onSaved[14]);
        result3 = first[tmp2Result21.conjureSettingDraftKey(tmp2Result21, found, tmp4)];
        if (result3 == null) {
          const tmp2Result22 = tmp2(onSaved[14]);
          result3 = tmp2Result22.conjureSettingStoredValue(stateFromStores, found, tmp4);
        }
        const obj6 = { hasIcons: false, children: c12(TableCheckboxRow, obj4) };
        tmp37Result2 = tmp37(TableRowGroup, obj6, result);
      } else if ("game" === found.type) {
        const obj7 = {
          def: found,
          hint: tmp,
          value: result4,
          pickingEmpty: true === _undefined3[found.key],
          disabled: first2,
          onChange(def2) {
                found = def2;
                c16(false);
                const obj = found(onSaved[14]);
                let closure_1 = obj.conjureSettingDraftKey(found, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
              },
          onPickingEmptyChange(arg0) {
                return closure_25(found.key, arg0);
              }
        };
        const tmp30 = notifyAgent(onSaved[28]);
        const tmp2Result23 = tmp2(onSaved[14]);
        result4 = first[tmp2Result23.conjureSettingDraftKey(tmp2Result23, found, tmp4)];
        const tmp28 = c12;
        if (result4 == null) {
          const tmp2Result24 = tmp2(onSaved[14]);
          result4 = tmp2Result24.conjureSettingStoredValue(stateFromStores, found, tmp4);
        }
        tmp37Result2 = tmp28(tmp30, obj7, found.key);
      } else {
        if ("role" !== found.type) {
          if ("user" !== found.type) {
            if ("channel" === found.type) {
              let tmp10 = tmp4;
              const tmp8 = c12;
              const tmp9 = c16;
              if (true !== found.per_server) {
                tmp10 = closure_27;
              }
              const obj8 = {
                guildId: tmp10,
                def: found,
                hint: tmp,
                shortLinks,
                value: result5,
                disabled: first2,
                onChange(def2) {
                            found = def2;
                            c16(false);
                            const obj = found(onSaved[14]);
                            let closure_1 = obj.conjureSettingDraftKey(found, serverId);
                            c22((arg0) => {
                              let tmp = null;
                              if (arg0 !== closure_1) {
                                tmp = arg0;
                              }
                              return tmp;
                            });
                            closure_9((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj[closure_1] = found;
                              return obj;
                            });
                          },
                fallback: renderTextSetting(found, tmp)
              };
              const tmp2Result25 = tmp2(onSaved[14]);
              result5 = first[tmp2Result25.conjureSettingDraftKey(tmp2Result25, found, tmp4)];
              if (result5 == null) {
                const tmp2Result26 = tmp2(onSaved[14]);
                result5 = tmp2Result26.conjureSettingStoredValue(stateFromStores, found, tmp4);
              }
              tmp37Result2 = tmp8(tmp9, obj8, result);
            } else {
              tmp37Result2 = renderTextSetting(found, tmp);
            }
          }
        }
        let tmp20 = tmp4;
        const tmp18 = c12;
        const tmp19 = c17;
        if (true !== found.per_server) {
          tmp20 = closure_27;
        }
        const obj9 = {
          guildId: tmp20,
          def: found,
          hint: tmp,
          shortLinks,
          value: result6,
          disabled: first2,
          onChange(def2) {
                found = def2;
                c16(false);
                const obj = found(onSaved[14]);
                let closure_1 = obj.conjureSettingDraftKey(found, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
              },
          fallback: renderTextSetting(found, tmp)
        };
        const tmp2Result27 = tmp2(onSaved[14]);
        result6 = first[tmp2Result27.conjureSettingDraftKey(tmp2Result27, found, tmp4)];
        if (result6 == null) {
          const tmp2Result28 = tmp2(onSaved[14]);
          result6 = tmp2Result28.conjureSettingStoredValue(stateFromStores, found, tmp4);
        }
        tmp37Result2 = tmp18(tmp19, obj9, result);
      }
      return tmp37Result2;
    }
  }
  function renderTextSetting(required, description) {
    let items;
    let items1;
    let str10;
    let str12;
    let str4;
    let str6;
    let stringResult;
    let stringResult1;
    let stringResult2;
    let tmp44;
    let tmp46;
    let tmp9;
    let tmpResult2;
    let obj = projectId(onSaved[14]);
    const result = obj.conjureSettingDraftKey(required, serverId);
    const obj2 = projectId(onSaved[14]);
    let result1 = first[obj2.conjureSettingDraftKey(obj2, required, serverId)];
    const tmp3 = serverId;
    if (result1 == null) {
      const tmpResult = projectId(onSaved[14]);
      result1 = tmpResult.conjureSettingStoredValue(stateFromStores, required, tmp3);
    }
    const tmp6 = closure_33;
    if (tmp6) {
      let tmp41Result;
      const obj3 = {
        accessibilityLabel: tmpResult2.conjureFieldAccessibilityLabel(required.label, true !== required.required),
        accessibilityHint: required.hint,
        required: true === required.required,
        description: stringResult,
        onChange(def2) {
            required = def2;
            c16(false);
            const obj = required(onSaved[14]);
            let closure_1 = obj.conjureSettingDraftKey(required, serverId);
            c22((arg0) => {
              let tmp = null;
              if (arg0 !== closure_1) {
                tmp = arg0;
              }
              return tmp;
            });
            closure_9((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_1] = found;
              return obj;
            });
          },
        onFocus,
        onBlur,
        disabled: first2
      };
      stringResult = undefined;
      tmpResult2 = projectId(onSaved[29]);
      if (true === required.requires_rebuild) {
        const intl3 = tmp(tmp2[17]).intl;
        stringResult = intl3.string(notifyAgent(tmp2[18])["4kCM6H"]);
      }
      const obj4 = { style: closure_4.setupField, children: items };
      const obj5 = { label: null, help: null, optional: true !== required.required };
      ({ label: obj10.label, hint: obj10.help } = required);
      items = [c12(notifyAgent(tmp2[29]), obj5), ];
      const tmp38 = c13;
      const tmp39 = onBlur;
      if (true === required.multiline) {
        const obj6 = { value: str12 };
        const TextArea2 = tmp(tmp2[30]).TextArea;
        const merged = Object.assign(obj3);
        str12 = "";
        if (typeof result1 === "string") {
          str12 = result1;
        }
        tmp41Result = tmp41(TextArea2, obj6);
      } else {
        const obj7 = { autoComplete: "off", autoCapitalize: "none", autoCorrect: false, keyboardType: tmp44, errorMessage: tmp46, value: str10 };
        const TextInput2 = tmp(tmp2[31]).TextInput;
        const merged1 = Object.assign(obj3);
        tmp44 = undefined;
        if ("number" === required.type) {
          let str8 = "numbers-and-punctuation";
          if (null != required.min) {
            str8 = "numbers-and-punctuation";
            if (required.min >= 0) {
              let str9;
              if (null == required.step) {
                str9 = "number-pad";
              } else {
                const _Number2 = Number;
                str9 = "decimal-pad";
              }
              str8 = str9;
            }
          }
          tmp44 = str8;
        }
        tmp46 = undefined;
        if (c19) {
          tmp46 = draftErrorOf(required);
        }
        const _Array2 = Array;
        if (Array.isArray(result1)) {
          str10 = result1.join(", ");
        } else {
          str10 = "";
          if (null != result1) {
            const _String2 = String;
            str10 = String(result1);
          }
        }
        tmp41Result = tmp41(TextInput2, obj7);
      }
      items[1] = tmp41Result;
      return tmp38(tmp39, obj4, result);
    } else {
      let tmp53Result;
      if (true === required.multiline) {
        const obj8 = {
          label: required.label,
          description,
          errorMessage: stringResult1,
          value: str6,
          onChange(def2) {
                required = def2;
                c16(false);
                const obj = required(onSaved[14]);
                let closure_1 = obj.conjureSettingDraftKey(required, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
              },
          onFocus,
          onBlur,
          disabled: first2
        };
        stringResult1 = undefined;
        const TextArea = tmp(tmp2[30]).TextArea;
        const tmp22 = c12;
        if (c17) {
          if (closure_34.includes(required.key)) {
            const intl2 = tmp(tmp2[17]).intl;
            stringResult1 = intl2.string(notifyAgent(tmp2[18])["PW1+MY"]);
          }
        }
        str6 = "";
        if (typeof result1 === "string") {
          str6 = result1;
        }
        tmp53Result = tmp22(TextArea, obj8, result);
      } else {
        const obj11 = {
          label: required.label,
          autoComplete: "off",
          autoCapitalize: "none",
          autoCorrect: false,
          keyboardType: tmp9,
          errorMessage: stringResult2,
          value: str4,
          onChange(def2) {
                required = def2;
                c16(false);
                const obj = required(onSaved[14]);
                let closure_1 = obj.conjureSettingDraftKey(required, serverId);
                c22((arg0) => {
                  let tmp = null;
                  if (arg0 !== closure_1) {
                    tmp = arg0;
                  }
                  return tmp;
                });
                closure_9((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = found;
                  return obj;
                });
              },
          onFocus,
          onBlur,
          disabled: first2
        };
        tmp9 = undefined;
        const obj9 = { style: closure_4.linkedField, children: items1 };
        const TextInput = tmp(tmp2[31]).TextInput;
        const tmp53 = c13;
        const tmp54 = onBlur;
        if ("number" === required.type) {
          let str2 = "numbers-and-punctuation";
          if (null != required.min) {
            str2 = "numbers-and-punctuation";
            if (required.min >= 0) {
              let str3;
              if (null == required.step) {
                str3 = "number-pad";
              } else {
                const _Number = Number;
                str3 = "decimal-pad";
              }
              str2 = str3;
            }
          }
          tmp9 = str2;
        }
        stringResult2 = undefined;
        if (c17) {
          if (closure_34.includes(required.key)) {
            const intl = tmp(tmp2[17]).intl;
            stringResult2 = intl.string(notifyAgent(tmp2[18])["PW1+MY"]);
          }
        }
        const _Array = Array;
        if (Array.isArray(result1)) {
          str4 = result1.join(", ");
        } else {
          str4 = "";
          if (null != result1) {
            const _String = String;
            str4 = String(result1);
          }
        }
        items1 = [c12(TextInput, obj11), ];
        let tmp56Result = null;
        if (null != description) {
          const obj12 = { text: description, variant: "body-xs/normal", color: "text-muted" };
          tmp56Result = tmp56(notifyAgent(tmp2[24]), obj12);
        }
        items1[1] = tmp56Result;
        tmp53Result = tmp53(tmp54, obj9, result);
      }
      return tmp53Result;
    }
  }
  function renderSecret(value) {
    let hint;
    let hosts;
    let intl2;
    let intl3;
    let items;
    let items1;
    let items2;
    let obj8;
    let required;
    let str;
    let str2;
    let str3;
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
    const tmp2 = closure_33;
    if (tmp2) {
      const def2 = value.def;
      const obj2 = {
        label,
        help: hint,
        hosts,
        stored: value.set,
        replacing: true === c12[value.name],
        onReplace() {
            let name;
            return c13((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[name.name] = true;
              return obj;
            });
          },
        required: true === required,
        value: str3,
        onChange(arg0) {
            const name = arg0;
            _undefined2(false);
            closure_1_11((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[name.name] = name;
              return obj;
            });
          },
        onFocus,
        onBlur,
        disabled: first2
      };
      hint = undefined;
      const tmp49 = c12;
      const tmp52 = notifyAgent(onSaved[32]);
      if (def2 != null) {
        hint = def2.hint;
      }
      const def3 = value.def;
      hosts = undefined;
      if (def3 != null) {
        hosts = def3.hosts;
      }
      const def4 = value.def;
      required = undefined;
      if (def4 != null) {
        required = def4.required;
      }
      str3 = first1[value.name];
      if (str3 == null) {
        str3 = "";
      }
      return tmp49(tmp52, obj2, value.name);
    } else {
      const tmp4 = hintFor(value.def);
      if (value.set) {
        let tmp6Result;
        if (true !== c12[value.name]) {
          const obj3 = { style: closure_4.secretRow, children: items1 };
          const obj4 = { style: closure_4.secretRowInfo, children: items };
          const obj5 = { variant: "body-sm/medium", color: "text-default", children: label };
          items = [c12(projectId(onSaved[33]).Text, obj5), c12(projectId(onSaved[33]).Text, { variant: "body-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
          let tmp36 = null;
          if (null != tmp4) {
            const obj6 = { text: tmp4, variant: "body-xs/normal", color: "text-muted" };
            tmp36 = c12(notifyAgent(onSaved[24]), obj6);
          }
          items[2] = tmp36;
          items1 = [_undefined(onBlur, obj4), ];
          const obj7 = {
            variant: "secondary",
            size: "sm",
            text: intl2.string(notifyAgent(onSaved[18]).RsvBGf),
            accessibilityLabel: intl3.formatToPlainString(notifyAgent(onSaved[18]).WjoM7z, obj8),
            disabled: first2,
            onPress() {
                    let name;
                    return c13((arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj[name.name] = true;
                      return obj;
                    });
                  }
          };
          const Button = tmp32(onSaved[34]).Button;
          intl2 = tmp32(onSaved[17]).intl;
          intl3 = tmp32(onSaved[17]).intl;
          obj8 = { label };
          items1[1] = c12(Button, obj7);
          tmp6Result = tmp28(tmp29, obj3, value.name);
        }
        return tmp6Result;
      }
      let obj = { style: closure_4.linkedField, children: items2 };
      const obj9 = {
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
            _undefined2(false);
            closure_1_11((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[name.name] = name;
              return obj;
            });
          },
        onFocus,
        onBlur,
        disabled: first2
      };
      str = undefined;
      const TextInput = projectId(onSaved[31]).TextInput;
      const tmp10 = projectId;
      const tmp6 = _undefined;
      const tmp7 = onBlur;
      const tmp9 = c12;
      if (value.set) {
        str = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
      }
      str2 = first1[value.name];
      if (str2 == null) {
        str2 = "";
      }
      let name = value.name;
      stringResult = undefined;
      if (c17) {
        if (closure_34.includes(name)) {
          const intl = tmp10(onSaved[17]).intl;
          stringResult = intl.string(notifyAgent(onSaved[18])["PW1+MY"]);
        }
      }
      items2 = [tmp9(TextInput, obj9), ];
      let tmp23 = null;
      if (null != tmp4) {
        const obj10 = { text: tmp4, variant: "body-xs/normal", color: "text-muted" };
        tmp23 = c12(notifyAgent(onSaved[24]), obj10);
      }
      items2[1] = tmp23;
      tmp6Result = tmp6(tmp7, obj, value.name);
    }
  }
  let tmp = closure_15();
  _slicedToArray = tmp;
  let obj = react;
  let items = [onInputFocusChange];
  react = react.useCallback(() => {
    let tmpResult;
    if (onInputFocusChange != null) {
      tmpResult = tmp(true);
    }
    return tmpResult;
  }, items);
  let items1 = [onInputFocusChange];
  const onBlur = react.useCallback(() => {
    let tmpResult;
    if (onInputFocusChange != null) {
      tmpResult = tmp(false);
    }
    return tmpResult;
  }, items1);
  let tmp2 = projectId;
  let tmp3 = onSaved;
  let obj2 = projectId(onSaved[12]);
  let items2 = [closure_11];
  const stateFromStores = obj2.useStateFromStores(items2, () => ConjureSettingsStore.getSettings(projectId));
  [values, closure_9] = react.useState({});
  [first1, closure_11] = react.useState({});
  let tmp9 = _slicedToArray(react.useState({}), 2);
  [c12, c13] = tmp9;
  [first2, closure_15] = react.useState(false);
  [tmp13, c16] = _slicedToArray(react.useState(false), 2);
  const tmp12 = _slicedToArray(react.useState(false), 2);
  [c17, c18] = _slicedToArray(react.useState(false), 2);
  const tmp14 = _slicedToArray(react.useState(false), 2);
  [c19, c20] = _slicedToArray(react.useState(false), 2);
  const tmp15 = _slicedToArray(react.useState(false), 2);
  [c21, c22] = _slicedToArray(react.useState(null), 2);
  const tmp16 = _slicedToArray(react.useState(null), 2);
  [c23, c24] = _slicedToArray(react.useState({}), 2);
  const tmp17 = _slicedToArray(react.useState({}), 2);
  let closure_25 = react.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp = _undefined42((arg0) => {
      let tmp3 = arg0;
      if (arg0[closure_0] !== closure_1) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[tmp] = tmp2;
        tmp3 = obj;
      }
      return tmp3;
    });
  }, []);
  const items3 = [stateFromStores];
  const memo = react.useMemo(() => {
    let schema;
    if (stateFromStores != null) {
      schema = stateFromStores.schema;
    }
    if (schema == null) {
      schema = [];
    }
    return schema;
  }, items3);
  let obj3 = projectId(onSaved[13]);
  let closure_27 = obj3.useConjureSettingsGuildId(projectId, flag);
  let obj4 = projectId(onSaved[13]);
  const conjureSettingsServers = obj4.useConjureSettingsServers(projectId, flag);
  ({ servers, serverId } = conjureSettingsServers);
  const setServerId = conjureSettingsServers.setServerId;
  const items4 = [memo, stateFromStores];
  const memo1 = react.useMemo(() => {
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
  }, items4);
  let found = memo.filter((type) => "secret" !== type.type);
  map = new Map(memo1.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  let obj5 = projectId(onSaved[15]);
  let result = obj5.conjureSettingsRequestNamedKeys(scopeKeys);
  const found1 = result.filter((item) => {
    let closure_0 = item;
    const someResult = found.some((key) => key.key === closure_0) || map.has(item);
    return someResult;
  });
  let tmp20 = found1.length > 0;
  const shortLinks = tmp20;
  let result1 = null;
  if (null != stateFromStores) {
    let tmp2Result = tmp2(tmp3[15]);
    result1 = tmp2Result.conjureSettingsRequestSections(found1, stateFromStores);
  }
  let found2 = found;
  if (tmp20) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  const conjureMissingRequiredSettings = tmp2(tmp3[16]).conjureMissingRequiredSettings;
  tmp2(tmp3[16]);
  const found3 = found2.filter((per_server) => true !== per_server.per_server || null != serverId);
  closure_34 = conjureMissingRequiredSettings(found3.map((def) => {
    let result;
    const obj = { def, value: result };
    const obj2 = conjureSettingValues;
    result = first[obj2.conjureSettingDraftKey(obj2, def, serverId)];
    const tmp3 = serverId;
    if (result == null) {
      const tmpResult = conjureSettingValues;
      result = tmpResult.conjureSettingStoredValue(stateFromStores, def, tmp3);
    }
    return obj;
  }));
  let found4 = memo1;
  const conjureMissingRequiredSettings2 = tmp2(tmp3[16]).conjureMissingRequiredSettings;
  tmp2(tmp3[16]);
  if (tmp20) {
    found4 = memo1.filter((name) => found1.includes(name.name));
  }
  closure_35 = conjureMissingRequiredSettings2(found4.flatMap((def) => {
    let items;
    if (null == def.def) {
      items = [];
    } else {
      items = [{ def: def.def, value: first1[def.name], secretStored: def.set }];
      const obj = { def: def.def, value: first1[def.name], secretStored: def.set };
    }
    return items;
  }));
  const items5 = [memo, first1, stateFromStores, values];
  memo2 = obj.useMemo(() => {
    let str;
    let tmp6;
    const obj = {};
    const entries = Object.entries(first1);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, str] = tmp5;
      let str2 = str;
      if ("" !== str.trim()) {
        obj[tmp6] = str2.trim();
      }
      continue;
    }
    const obj2 = {};
    const obj3 = conjureSettingValues;
    const merged = Object.assign(obj3.conjureSettingValuesSubmission(stateFromStores, first));
    const obj4 = conjureSettingValues;
    const merged1 = Object.assign(obj4.conjureSecretsSubmission(memo, obj));
    return obj2;
  }, items5);
  let conjureSetupItemsResult = null;
  if (tmp20) {
    conjureSetupItemsResult = null;
    if (null != stateFromStores) {
      let obj6 = { values, secrets: first1, serverId };
      const tmp2Result10 = tmp2(tmp3[19]);
      conjureSetupItemsResult = tmp2Result10.conjureSetupItems(found1, stateFromStores, obj6);
    }
  }
  let items6 = conjureSetupItemsResult;
  const conjureSetupNeededText = tmp2(tmp3[19]).conjureSetupNeededText;
  tmp2(tmp3[19]);
  if (conjureSetupItemsResult == null) {
    items6 = [];
  }
  const found5 = items6.filter((needed) => needed.needed);
  result2 = conjureSetupNeededText(found5.map((label) => label.label));
  let items15;
  if (result1 != null) {
    items15 = result1.valueKeys;
  }
  if (items15 == null) {
    items15 = [];
  }
  const mapped = items15.map((item) => {
    let closure_0 = item;
    return found.find((key) => key.key === closure_0);
  });
  const found6 = mapped.find((item) => {
    const tmp = null != item && null != draftErrorOf(item);
    return tmp;
  });
  result3 = null;
  if (null != found6) {
    const tmp2Result12 = tmp2(tmp3[14]);
    result3 = tmp2Result12.conjureSettingDraftKey(found6, serverId);
  }
  const found7 = found.find((item) => {
    const obj = conjureSettingValues;
    return obj.conjureSettingDraftKey(item, serverId) === c21;
  });
  if (null != found7) {
    draftErrorOfResult = draftErrorOf(found7);
  }
  let someResult = memo.some((type) => "game" === type.type && true === c23[type.key]);
  c40 = someResult;
  const tmp33 = (null != memo2.values || null != memo2.server_values || null != memo2.secrets || null != result3) && !someResult;
  closure_41 = tmp33;
  const items7 = [tmp33, result3, someResult, notifyAgent, onSaved, projectId, first2, result2, memo2];
  const callback = obj.useCallback(onInputFocusChange(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let intl;
    let obj4;
    let obj9;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let rebuildRequired;
        let incomplete;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            projectId = tmp4;
            rebuildRequired = undefined;
            incomplete = undefined;
            const tmp75 = c40;
            if (tmp75) {
              c5 = 3;
              return { value: false, done: true };
            } else if (null != result3) {
              _undefined3(true);
              _undefined4(tmp31);
              c5 = 3;
              return { value: false, done: true };
            } else {
              const tmp76 = closure_41;
              if (tmp76) {
                const tmp32 = first2;
                if (!tmp32) {
                  closure_15(true);
                  _undefined2(false);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: obj4.submitProjectSettings(projectId, memo2), done: false };
                  obj4 = projectId(onSaved[20]);
                  return obj5;
                }
              }
              c5 = 3;
              return { value: true, done: true };
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_15(false);
          throw onSaved;
        } else if (2 === c4) {
          closure_129_16(true);
          c3 = 0;
          closure_129_15(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_15(false);
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          rebuildRequired = value.rebuildRequired;
          incomplete = "" !== closure_129_37;
          const obj7 = { rebuildRequired, notifyAgent: closure_129_1, incomplete };
          const obj8 = projectId(onSaved[21]);
          const result = obj8.settleProjectSettingsSave(closure_129_0, obj7);
          closure_129_9({});
          closure_129_11({});
          closure_129_13({});
          closure_129_18(false);
          closure_129_20(false);
          if (incomplete) {
            const obj = { text: intl.formatToPlainString(incomplete(onSaved[18])["xfz7+k"], obj9), variant: "success" };
            const showToast = projectId(onSaved[22]).showToast;
            const tmp7 = projectId(onSaved[22]);
            intl = projectId(onSaved[17]).intl;
            obj9 = { items: closure_129_37 };
            showToast(obj);
          } else if (closure_129_2 != null) {
            closure_129_2();
          }
          c3 = 0;
          closure_129_15(false);
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp45) {
        onSaved = tmp45;
        if (0 === c3) {
          c5 = 3;
          throw tmp45;
        } else if (1 === tmp47) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items7);
  const found8 = found2.filter((per_server) => true === per_server.per_server);
  let tmp35 = null;
  if (0 !== found8.length) {
    let tmp66Result;
    if (null == serverId) {
      let obj7 = { variant: "body-sm/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[18]).IT21e4) };
      let Text = tmp2(tmp3[33]).Text;
      intl4 = tmp2(tmp3[17]).intl;
      const tmp41 = notifyAgent;
      tmp66Result = c12(Text, obj7);
    } else {
      let tmp38 = null;
      const tmp66 = c13;
      const tmp67 = first2;
      if (servers.length > 1) {
        let tmp36 = c12;
        let obj8 = {
          hasIcons: false,
          value: serverId,
          onChange(arg0) {
                  return setServerId(arg0);
                },
          title: intl.string(notifyAgent(tmp3[18])["6FmRyw"]),
          description: intl2.string(notifyAgent(tmp3[18])["NVQu+I"]),
          accessibilityLabel: intl3.string(notifyAgent(tmp3[18])["6FmRyw"]),
          children: servers.map((label) => {
                  const obj = { label: label.name, value: label.guildId };
                  return c12(projectId(onSaved[27]).TableRadioRow, obj, label.guildId);
                })
        };
        let TableRadioGroup = tmp2(tmp3[26]).TableRadioGroup;
        intl = tmp2(tmp3[17]).intl;
        const tmp37 = notifyAgent;
        intl2 = tmp2(tmp3[17]).intl;
        intl3 = tmp2(tmp3[17]).intl;
        tmp38 = c12(TableRadioGroup, obj8);
      }
      let obj9 = { children: items8 };
      items8 = [tmp38, found8.map(renderValueSetting)];
      tmp66Result = tmp66(tmp67, obj9);
    }
    tmp35 = tmp66Result;
  }
  let tmp42 = null;
  if (tmp13) {
    let obj10 = { variant: "body-xs/normal", color: "text-feedback-critical", children: intl5.string(notifyAgent(tmp3[18])["A5TC+K"]) };
    const Text2 = tmp2(tmp3[33]).Text;
    intl5 = tmp2(tmp3[17]).intl;
    let tmp44 = notifyAgent;
    tmp42 = c12(Text2, obj10);
  }
  let valueKeys2;
  if (result1 != null) {
    valueKeys2 = result1.valueKeys;
  }
  if (valueKeys2 == null) {
    valueKeys2 = [];
  }
  const found9 = valueKeys2.filter((item) => {
    let closure_0 = item;
    return !found.some((key) => key.key === closure_0 && true === key.per_server);
  });
  const tmp45 = c13;
  let tmp46 = onBlur;
  let obj11 = { style: tmp20 ? tmp.setupForm : tmp.section, children: null };
  let tmp47 = null;
  if (null != note) {
    let str = "";
    tmp47 = null;
    if ("" !== note) {
      let tmp49 = notifyAgent;
      let obj12 = { text: note, variant: "body-sm/normal", color: "text-default", shortLinks: tmp20 };
      tmp47 = c12(notifyAgent(tmp3[24]), obj12);
    }
  }
  const items9 = [tmp47, , , ];
  let tmp50 = null;
  if (null != stateFromStores) {
    tmp50 = null;
    if (0 === found.length) {
      tmp50 = null;
      if (0 === memo1.length) {
        const obj13 = { variant: "body-sm/normal", color: "text-muted", children: intl6.string(notifyAgent(tmp3[18]).lJJayk) };
        const Text3 = tmp2(tmp3[33]).Text;
        intl6 = tmp2(tmp3[17]).intl;
        let tmp52 = notifyAgent;
        tmp50 = c12(Text3, obj13);
      }
    }
  }
  items9[1] = tmp50;
  if (tmp20) {
    let obj24;
    let result4;
    if (null != result1) {
      function renderScoped(item) {
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
      }
      let tmp54 = null;
      if (result1.secretKeys.length > 0) {
        const tmp56 = notifyAgent;
        const obj14 = { title: intl7.string(notifyAgent(tmp3[18])["xEfQj/"]), children: secretKeys.map(renderScoped) };
        let tmp57 = notifyAgent(tmp3[35]);
        intl7 = tmp2(tmp3[17]).intl;
        secretKeys = result1.secretKeys;
        tmp54 = c12(tmp57, obj14);
      }
      const items10 = [tmp54, ];
      let tmp45Result2 = null;
      if (result1.valueKeys.length > 0) {
        let tmp45Result = null;
        const obj15 = { style: tmp.section, children: items12 };
        if (result1.sectioned) {
          const obj16 = { style: tmp.sectionHeader, children: items11 };
          const obj17 = { variant: "heading-sm/semibold", children: intl8.string(notifyAgent(tmp3[18])["I+6HlE"]) };
          const Heading = tmp2(tmp3[33]).Heading;
          intl8 = tmp2(tmp3[17]).intl;
          items11 = [c12(Heading, obj17), ];
          const obj18 = { variant: "body-xs/normal", color: "text-muted", children: intl9.string(notifyAgent(tmp3[18]).ZyFI3A) };
          const Text4 = tmp2(tmp3[33]).Text;
          intl9 = tmp2(tmp3[17]).intl;
          items11[1] = c12(Text4, obj18);
          tmp45Result = tmp45(tmp46, obj16);
        }
        items12 = [tmp45Result, found9.map(renderScoped), tmp35];
        tmp45Result2 = tmp45(tmp46, obj15);
      }
      const obj19 = { children: items10 };
      items10[1] = tmp45Result2;
      obj24 = obj19;
    }
    const obj20 = { fields: tmp45(tmp46, obj11), secretFields: tmp45(tmp46, obj21), loaded: null != stateFromStores, valueCount: found.length, secretCount: memo1.length, isScoped: tmp20, progress: tmp64, status: null, statusIsError: null, canSave: null, saving: null, submit: null, validate: null };
    items9[2] = tmp45(tmp53, obj24);
    items9[3] = tmp42;
    obj11.children = items9;
    obj21 = { style: tmp.section, children: items13 };
    const obj22 = { variant: "body-xs/normal", color: "text-muted", children: intl10.string(notifyAgent(tmp3[18]).jgDBJZ) };
    const Text5 = tmp2(tmp3[33]).Text;
    intl10 = tmp2(tmp3[17]).intl;
    items13 = [c12(Text5, obj22), memo1.map(renderSecret), tmp42];
    tmp64 = null;
    if (null != conjureSetupItemsResult) {
      tmp64 = { filled: conjureSetupItemsResult.filter(f115660).length, total: conjureSetupItemsResult.length };
      const obj23 = { filled: conjureSetupItemsResult.filter(f115660).length, total: conjureSetupItemsResult.length };
    }
    if (null != found7) {
      if (null != draftErrorOfResult) {
        const tmp2Result13 = tmp2(tmp3[19]);
        result4 = tmp2Result13.conjureSetupFieldErrorText(found7.label, draftErrorOfResult);
      }
      obj20.status = result4;
      obj20.statusIsError = null != draftErrorOfResult;
      obj20.canSave = tmp33;
      obj20.saving = first2;
      obj20.submit = callback;
      obj20.validate = function validate() {
        let tmp2;
        if (0 !== closure_34.length) {
          let str;
          _undefined22(true);
          const tmp5 = shortLinks;
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
      };
      return obj20;
    }
    result4 = null;
    if (null != conjureSetupItemsResult) {
      const tmp2Result14 = tmp2(tmp3[19]);
      result4 = tmp2Result14.conjureSetupStatusText(conjureSetupItemsResult);
    }
  }
  obj24 = { children: items14 };
  const found10 = found.filter((per_server) => true !== per_server.per_server);
  items14 = [found10.map(renderValueSetting), tmp35];
};
