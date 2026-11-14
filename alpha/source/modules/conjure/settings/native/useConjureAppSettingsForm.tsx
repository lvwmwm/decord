// Module ID: 13213
// Function ID: 13214
// Name: useConjureAppSettingsForm
// Dependencies: [5, 32, 19, 17, 5236, 5177, 5248, 1388, 7379, 21, 5306, 575, 504, 13214, 13216, 13217, 1113, 4131, 13218, 13221, 7746, 13222, 7733, 7745, 7747, 13233, 7859, 7619, 5929, 5936, 7260, 7443, 7458, 5954, 5552, 11964, 13215, 13238, 2]
// Exports: default

// Module 13213 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl9 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11964 */;
import conjureSettingValues from "conjureSettingValues" /* 13216 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 13238 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 5236 */;
import GuildStore from "GuildStore" /* 5177 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c5, channels, map;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const useConjureSettingPickerOptions = tmp(13214);
function ConjureChannelSettingRow(guildId) {
  let TableRowTrailingText;
  let disabled;
  let fallback;
  let hint;
  let obj5;
  let tmp5Result;
  let tmpResult3;
  guildId = guildId.guildId;
  const def = guildId.def;
  ({ hint, value: dependencyMap, onChange: _asyncToGenerator } = guildId);
  let c4;
  let found;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  ({ disabled, fallback } = guildId);
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
      const tmpResult = tmp(7260);
      const result = tmpResult.conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === dependencyMap);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(7746).TableRowGroup;
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
                noChannelOptionLabel: intl.string(_modDef4131["jtBVV+"]),
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
              intl = intl9.intl;
              showActionSheet(obj);
            }
      };
      tmp5Result = undefined;
      const TableRow = tmp(7443).TableRow;
      if (null != hint) {
        let obj3 = { variant: "body-xs/medium", color: "text-subtle", children: tmpResult3.conjureLinkedNodes(hint, "body-xs/medium") };
        const Text = tmp(5929).Text;
        let str = "body-xs/medium";
        tmpResult3 = tmp(13222);
        tmp5Result = tmp5(Text, obj3);
      }
      TableRowTrailingText = tmp(7458).TableRowTrailingText;
      if (null != found) {
        const tmpResult4 = tmp(5954);
        channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1113).intl;
        channelName = intl.string(def(4131).iZIF9m);
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
  ({ disabled, fallback } = guildId);
  let tmp3 = def(13214)(guildId, def);
  let tmp4 = guildId;
  let obj = guildId(13214);
  const result = obj.conjureSettingPickedIds(value);
  let c3 = result;
  let tmp5 = guildId(13215);
  let tmp6 = null;
  const useConjureMemberRequests = tmp5.useConjureMemberRequests;
  if ("user" === def.type) {
    tmp6 = guildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp6, result);
  if (null != guildId) {
    if (null != tmp3) {
      let formatToPlainStringResult;
      const tmp4Result = tmp4(13214);
      const withSavedPicksResult = tmp4Result.withSavedPicks(tmp3, value, (id) => ({ id, label: id }));
      c4 = withSavedPicksResult;
      closure_5 = tmp12;
      if (true === def.multiple) {
        const intl2 = tmp4(1113).intl;
        let obj2 = { count: result.length };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(4131)["LPs/Pv"], obj2);
      } else {
        const found = withSavedPicksResult.find((id) => id.id === c3[0]);
        formatToPlainStringResult = undefined;
        if (found != null) {
          formatToPlainStringResult = found.label;
        }
        if (formatToPlainStringResult == null) {
          const intl = tmp4(1113).intl;
          formatToPlainStringResult = intl.string(tmp(4131).rn7w7I);
        }
      }
      const TableRowGroup = tmp4(7746).TableRowGroup;
      const obj3 = {
        label: def.label,
        subLabel: tmp10Result,
        arrow: true,
        disabled,
        trailing: closure_12(tmp4(7458).TableRowTrailingText, obj6),
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
      const TableRow = tmp4(7443).TableRow;
      if (null != hint) {
        const obj4 = { variant: "body-xs/medium", color: "text-subtle", children: tmp4Result2.conjureLinkedNodes(hint, "body-xs/medium") };
        const Text = tmp4(5929).Text;
        let str = "body-xs/medium";
        tmp4Result2 = tmp4(13222);
        tmp10Result = tmp10(Text, obj4);
      }
      const obj5 = { hasIcons: false, children: closure_12(TableRow, obj3) };
      obj6 = { text: formatToPlainStringResult };
      return closure_12(TableRowGroup, obj5);
    }
  }
  return fallback;
}
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { linkedField: obj2, section: obj3, secretRow: obj4, secretRowInfo: obj5 };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureAppSettingsForm.tsx");

export default function useConjureAppSettingsForm(projectId) {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let _undefined4;
  let c10;
  let c13;
  let c14;
  let c15;
  let c16;
  let c17;
  let c9;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items5;
  let items6;
  let items7;
  let items8;
  let mapped;
  let note;
  let notifyAgent;
  let obj15;
  let scopeKeys;
  let serverId;
  let servers;
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
  let first;
  c9 = undefined;
  c10 = undefined;
  let first2;
  c13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  serverId = undefined;
  let found1;
  let closure_26;
  let closure_27;
  let closure_28;
  let memo2;
  let someResult1;
  let closure_31;
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
      const intl = projectId(onSaved[16]).intl;
      stringResult = intl.string(notifyAgent(onSaved[17])["4kCM6H"]);
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
          const intl2 = projectId(onSaved[16]).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj = { hosts: hosts.join(", ") };
          hosts = def.hosts;
          const Ww9HFO = notifyAgent(onSaved[17]).Ww9HFO;
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
    let result3;
    let result4;
    let result5;
    let result6;
    let tmp2Result20;
    let tmp35Result;
    const tmp = hintFor(found);
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
                    label = tmp2;
                    c13(false);
                    closure_6((arg0) => {
                      const obj = {};
                      const merged = Object.assign(arg0);
                      obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
                      closure_0(closure_1_2[14]);
                      return obj;
                    });
                  }
                };
                const TableCheckboxRow = projectId(onSaved[22]).TableCheckboxRow;
                return closure_12(TableCheckboxRow, obj, label.value);
              })
        };
        conjureLinkedNodesResult = undefined;
        const TableRowGroup2 = tmp2(tmp3[20]).TableRowGroup;
        const tmp53 = closure_12;
        if (null != tmp) {
          const tmp2Result16 = tmp2(onSaved[21]);
          conjureLinkedNodesResult = tmp2Result16.conjureLinkedNodes(tmp, "body-sm/normal");
        }
        options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        return tmp53(TableRowGroup2, obj2, result);
      }
    }
    if ("select" === found.type) {
      const tmp2Result17 = tmp2(onSaved[14]);
      let result2 = first[tmp2Result17.conjureSettingDraftKey(tmp2Result17, found, tmp4)];
      if (result2 == null) {
        const tmp2Result18 = tmp2(onSaved[14]);
        result2 = tmp2Result18.conjureSettingStoredValue(stateFromStores, found, tmp4);
      }
      let tmp47;
      const TableRadioGroup = tmp2(tmp3[23]).TableRadioGroup;
      const tmp46 = closure_12;
      if (typeof result2 === "string") {
        tmp47 = result2;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp47,
        onChange(arg0) {
            let closure_1 = arg0;
            c13(false);
            closure_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
              closure_0(closure_1_2[14]);
              return obj;
            });
          },
        title: found.label,
        description: conjureLinkedNodesResult1,
        accessibilityLabel: null,
        children: options.map((label) => {
            const obj = { label: label.label, value: label.value };
            return closure_1_12(found(onSaved[24]).TableRadioRow, obj, label.value);
          })
      };
      conjureLinkedNodesResult1 = undefined;
      if (null != tmp) {
        const tmp2Result19 = tmp2(onSaved[21]);
        conjureLinkedNodesResult1 = tmp2Result19.conjureLinkedNodes(tmp, "body-sm/normal");
      }
      ({ label: obj19.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return tmp46(TableRadioGroup, obj3, result);
    } else {
      let tmp35Result2;
      if ("checkbox" === found.type) {
        const TableRowGroup = tmp2(tmp3[20]).TableRowGroup;
        const obj4 = {
          label: found.label,
          subLabel: tmp35Result,
          checked: true === result3,
          disabled: first2,
          onPress(arg0) {
                let closure_1 = arg0;
                c13(false);
                closure_6((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
                  closure_0(closure_1_2[14]);
                  return obj;
                });
              }
        };
        tmp35Result = undefined;
        let TableCheckboxRow = tmp2(tmp3[22]).TableCheckboxRow;
        if (null != tmp) {
          const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: tmp2Result20.conjureLinkedNodes(tmp, "body-xs/medium") };
          const Text = tmp2(tmp3[28]).Text;
          tmp2Result20 = tmp2(onSaved[21]);
          tmp35Result = tmp35(Text, obj5);
        }
        const tmp2Result21 = tmp2(onSaved[14]);
        result3 = first[tmp2Result21.conjureSettingDraftKey(tmp2Result21, found, tmp4)];
        if (result3 == null) {
          const tmp2Result22 = tmp2(onSaved[14]);
          result3 = tmp2Result22.conjureSettingStoredValue(stateFromStores, found, tmp4);
        }
        const obj6 = { hasIcons: false, children: closure_12(TableCheckboxRow, obj4) };
        tmp35Result2 = tmp35(TableRowGroup, obj6, result);
      } else if ("game" === found.type) {
        const obj7 = {
          def: found,
          hint: tmp,
          value: result4,
          pickingEmpty: true === _undefined3[found.key],
          disabled: first2,
          onChange(arg0) {
                let closure_1 = arg0;
                c13(false);
                closure_6((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
                  closure_0(closure_1_2[14]);
                  return obj;
                });
              },
          onPickingEmptyChange(arg0) {
                return closure_18(found.key, arg0);
              }
        };
        const tmp28 = notifyAgent(onSaved[25]);
        const tmp2Result23 = tmp2(onSaved[14]);
        result4 = first[tmp2Result23.conjureSettingDraftKey(tmp2Result23, found, tmp4)];
        const tmp26 = closure_12;
        if (result4 == null) {
          const tmp2Result24 = tmp2(onSaved[14]);
          result4 = tmp2Result24.conjureSettingStoredValue(stateFromStores, found, tmp4);
        }
        tmp35Result2 = tmp26(tmp28, obj7, found.key);
      } else {
        if ("role" !== found.type) {
          if ("user" !== found.type) {
            if ("channel" === found.type) {
              let tmp10 = tmp4;
              const tmp8 = closure_12;
              const tmp9 = _undefined3;
              if (true !== found.per_server) {
                tmp10 = closure_20;
              }
              const obj8 = {
                guildId: tmp10,
                def: found,
                hint: tmp,
                value: result5,
                disabled: first2,
                onChange(arg0) {
                            let closure_1 = arg0;
                            c13(false);
                            closure_6((arg0) => {
                              const obj = {};
                              const merged = Object.assign(arg0);
                              obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
                              closure_0(closure_1_2[14]);
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
              tmp35Result2 = tmp8(tmp9, obj8, result);
            } else {
              tmp35Result2 = renderTextSetting(found, tmp);
            }
          }
        }
        let tmp19 = tmp4;
        const tmp17 = closure_12;
        const tmp18 = c17;
        if (true !== found.per_server) {
          tmp19 = closure_20;
        }
        const obj9 = {
          guildId: tmp19,
          def: found,
          hint: tmp,
          value: result6,
          disabled: first2,
          onChange(arg0) {
                let closure_1 = arg0;
                c13(false);
                closure_6((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
                  closure_0(closure_1_2[14]);
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
        tmp35Result2 = tmp17(tmp18, obj9, result);
      }
      return tmp35Result2;
    }
  }
  function renderTextSetting(multiline, description) {
    let items;
    let str4;
    let str6;
    let stringResult;
    let stringResult1;
    let tmp25Result;
    let tmp7;
    let closure_0 = multiline;
    const obj = projectId(onSaved[14]);
    const result = obj.conjureSettingDraftKey(multiline, serverId);
    const obj2 = projectId(onSaved[14]);
    let result1 = first[obj2.conjureSettingDraftKey(obj2, multiline, serverId)];
    const tmp3 = serverId;
    if (result1 == null) {
      const tmpResult = projectId(onSaved[14]);
      result1 = tmpResult.conjureSettingStoredValue(stateFromStores, multiline, tmp3);
    }
    if (true === multiline.multiline) {
      const obj3 = {
        label: multiline.label,
        description,
        errorMessage: stringResult,
        value: str6,
        onChange(arg0) {
            let closure_1 = arg0;
            c13(false);
            closure_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
              closure_0(closure_1_2[14]);
              return obj;
            });
          },
        disabled: first2
      };
      stringResult = undefined;
      const TextArea = tmp(tmp2[26]).TextArea;
      const tmp18 = closure_12;
      if (c14) {
        if (closure_27.includes(multiline.key)) {
          const intl2 = tmp(tmp2[16]).intl;
          stringResult = intl2.string(notifyAgent(tmp2[17])["PW1+MY"]);
        }
      }
      str6 = "";
      if (typeof result1 === "string") {
        str6 = result1;
      }
      tmp25Result = tmp18(TextArea, obj3, result);
    } else {
      const obj5 = {
        label: multiline.label,
        autoComplete: "off",
        autoCapitalize: "none",
        autoCorrect: false,
        keyboardType: tmp7,
        errorMessage: stringResult1,
        value: str4,
        onChange(arg0) {
            let closure_1 = arg0;
            c13(false);
            closure_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0(closure_1_2[14]).conjureSettingDraftKey(closure_0, closure_2_21)] = found;
              closure_0(closure_1_2[14]);
              return obj;
            });
          },
        disabled: first2
      };
      tmp7 = undefined;
      const obj4 = { style: closure_3.linkedField, children: items };
      const TextInput = tmp(tmp2[27]).TextInput;
      const tmp25 = c13;
      const tmp26 = closure_6;
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
        tmp7 = str2;
      }
      stringResult1 = undefined;
      if (c14) {
        if (closure_27.includes(multiline.key)) {
          const intl = tmp(tmp2[16]).intl;
          stringResult1 = intl.string(notifyAgent(tmp2[17])["PW1+MY"]);
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
      items = [closure_12(TextInput, obj5), ];
      let tmp28Result = null;
      if (null != description) {
        const obj6 = { text: description, variant: "body-xs/normal", color: "text-muted" };
        tmp28Result = tmp28(notifyAgent(tmp2[21]), obj6);
      }
      items[1] = tmp28Result;
      tmp25Result = tmp25(tmp26, obj4, result);
    }
    return tmp25Result;
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
        const obj2 = { style: closure_3.secretRow, children: items1 };
        const obj3 = { style: closure_3.secretRowInfo, children: items };
        const obj4 = { variant: "body-sm/medium", color: "text-default", children: label };
        items = [closure_12(projectId(onSaved[28]).Text, obj4), closure_12(projectId(onSaved[28]).Text, { variant: "body-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp19Result = null;
        if (null != tmp2) {
          const obj5 = { text: tmp2, variant: "body-xs/normal", color: "text-muted" };
          tmp19Result = tmp19(notifyAgent(tmp21[21]), obj5);
        }
        items[2] = tmp19Result;
        items1 = [_undefined(closure_6, obj3), ];
        const obj6 = {
          variant: "secondary",
          size: "sm",
          text: intl2.string(notifyAgent(onSaved[17]).RsvBGf),
          accessibilityLabel: intl3.formatToPlainString(notifyAgent(onSaved[17]).WjoM7z, obj7),
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
        const Button = tmp20(tmp21[29]).Button;
        intl2 = tmp20(tmp21[16]).intl;
        intl3 = tmp20(tmp21[16]).intl;
        obj7 = { label };
        items1[1] = closure_12(Button, obj6);
        tmp4Result = tmp16(tmp17, obj2, value.name);
      }
      return tmp4Result;
    }
    let obj = { style: closure_3.linkedField, children: items2 };
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
    const TextInput = projectId(onSaved[27]).TextInput;
    const tmp4 = _undefined;
    const tmp5 = closure_6;
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
    if (c14) {
      if (closure_27.includes(name)) {
        const intl = tmp7(tmp8[16]).intl;
        stringResult = intl.string(notifyAgent(tmp8[17])["PW1+MY"]);
      }
    }
    items2 = [closure_12(TextInput, obj8), ];
    let tmp6Result = null;
    if (null != tmp2) {
      const obj9 = { text: tmp2, variant: "body-xs/normal", color: "text-muted" };
      tmp6Result = tmp6(notifyAgent(tmp8[21]), obj9);
    }
    items2[1] = tmp6Result;
    tmp4Result = tmp4(tmp5, obj, value.name);
  }
  let tmp = c15();
  _asyncToGenerator = tmp;
  let tmp2 = projectId;
  let tmp3 = onSaved;
  let obj = projectId(onSaved[12]);
  let items = [first2];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  let obj2 = first;
  let tmp5 = stateFromStores(first.useState({}), 2);
  first = tmp5[0];
  let closure_6 = tmp5[1];
  let tmp7 = stateFromStores(first.useState({}), 2);
  const first1 = tmp7[0];
  let closure_8 = tmp7[1];
  let tmp9 = stateFromStores(first.useState({}), 2);
  [c9, c10] = tmp9;
  let tmp10 = stateFromStores(first.useState(false), 2);
  first2 = tmp10[0];
  let closure_12 = tmp10[1];
  [tmp13, c13] = stateFromStores(first.useState(false), 2);
  const tmp12 = stateFromStores(first.useState(false), 2);
  [c14, c15] = stateFromStores(first.useState(false), 2);
  const tmp14 = stateFromStores(first.useState(false), 2);
  [c16, c17] = stateFromStores(first.useState({}), 2);
  const tmp15 = stateFromStores(first.useState({}), 2);
  let closure_18 = first.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp = _undefined4((arg0) => {
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
  let items1 = [stateFromStores];
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
  let obj3 = projectId(onSaved[13]);
  let closure_20 = obj3.useConjureSettingsGuildId(projectId, flag);
  let obj4 = projectId(onSaved[13]);
  const conjureSettingsServers = obj4.useConjureSettingsServers(projectId, flag);
  ({ servers, serverId } = conjureSettingsServers);
  const setServerId = conjureSettingsServers.setServerId;
  let items2 = [memo, stateFromStores];
  const memo1 = first.useMemo(() => {
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
  }, items2);
  let found = memo.filter((type) => "secret" !== type.type);
  map = new Map(memo1.map((name) => {
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
  let tmp18 = found1.length > 0;
  closure_26 = tmp18;
  let found2 = found;
  let someResult = found1.some((item) => map.has(item));
  if (tmp18) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  let tmp2Result = tmp2(tmp3[15]);
  const conjureMissingRequiredSettings = tmp2Result.conjureMissingRequiredSettings;
  const found3 = found2.filter((per_server) => true !== per_server.per_server || null != serverId);
  closure_27 = conjureMissingRequiredSettings(found3.map((def) => {
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
  const conjureMissingRequiredSettings2 = tmp2(tmp3[15]).conjureMissingRequiredSettings;
  tmp2(tmp3[15]);
  if (tmp18) {
    found4 = memo1.filter((name) => found1.includes(name.name));
  }
  closure_28 = conjureMissingRequiredSettings2(found4.flatMap((def) => {
    let items;
    if (null == def.def) {
      items = [];
    } else {
      items = [{ def: def.def, value: first1[def.name], secretStored: def.set }];
      const obj = { def: def.def, value: first1[def.name], secretStored: def.set };
    }
    return items;
  }));
  const items3 = [memo, first1, stateFromStores, first];
  memo2 = obj2.useMemo(() => {
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
  }, items3);
  someResult1 = memo.some((type) => "game" === type.type && true === c16[type.key]);
  let tmp24 = (null != memo2.values || null != memo2.server_values || null != memo2.secrets) && !someResult1;
  closure_31 = tmp24;
  const items4 = [tmp24, someResult1, notifyAgent, onSaved, projectId, first2, memo2];
  const callback = obj2.useCallback(_asyncToGenerator(async (arg0, value) => {
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
        return { value: "HermesInternal", done: null };
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
            const tmp56 = someResult1;
            if (tmp56) {
              c5 = 3;
              return { value: false, done: true };
            } else {
              const tmp23 = closure_31;
              if (tmp23) {
                const tmp24 = first2;
                if (!tmp24) {
                  closure_12(true);
                  _undefined(false);
                  c3 = 2;
                  c4 = 3;
                  c5 = 1;
                  const obj5 = { value: obj2.submitProjectSettings(projectId, memo2), done: false };
                  obj2 = projectId(onSaved[18]);
                  return obj5;
                }
              }
              c5 = 3;
              return { value: true, done: true };
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_12(false);
          throw onSaved;
        } else if (2 === c4) {
          closure_129_13(true);
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          rebuildRequired = value.rebuildRequired;
          const obj7 = { rebuildRequired, notifyAgent: closure_129_1 };
          const obj6 = projectId(onSaved[19]);
          const result = obj6.settleProjectSettingsSave(closure_129_0, obj7);
          closure_129_6({});
          closure_129_8({});
          closure_129_10({});
          closure_129_15(false);
          if (closure_129_2 != null) {
            closure_129_2();
          }
          c3 = 0;
          closure_129_12(false);
          c5 = 3;
          return { value: true, done: true };
        }
      } catch (tmp33) {
        onSaved = tmp33;
        if (0 === c3) {
          c5 = 3;
          throw tmp33;
        } else if (1 === tmp35) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items4);
  const found5 = found2.filter((per_server) => true === per_server.per_server);
  let tmp26 = null;
  if (0 !== found5.length) {
    let tmp49Result;
    if (null == serverId) {
      let obj5 = { variant: "body-sm/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[17]).IT21e4) };
      let Text = tmp2(tmp3[28]).Text;
      intl4 = tmp2(tmp3[16]).intl;
      tmp49Result = closure_12(Text, obj5);
    } else {
      let tmp29 = null;
      const tmp49 = c13;
      const tmp50 = c14;
      if (servers.length > 1) {
        let obj6 = {
          hasIcons: false,
          value: serverId,
          onChange(arg0) {
                  return setServerId(arg0);
                },
          title: intl.string(notifyAgent(tmp3[17])["6FmRyw"]),
          description: intl2.string(notifyAgent(tmp3[17])["NVQu+I"]),
          accessibilityLabel: intl3.string(notifyAgent(tmp3[17])["6FmRyw"]),
          children: servers.map((label) => {
                  const obj = { label: label.name, value: label.guildId };
                  return closure_12(projectId(onSaved[24]).TableRadioRow, obj, label.guildId);
                })
        };
        let TableRadioGroup = tmp2(tmp3[23]).TableRadioGroup;
        intl = tmp2(tmp3[16]).intl;
        let tmp28 = notifyAgent;
        intl2 = tmp2(tmp3[16]).intl;
        intl3 = tmp2(tmp3[16]).intl;
        tmp29 = closure_12(TableRadioGroup, obj6);
      }
      let obj7 = { children: items5 };
      items5 = [tmp29, found5.map(renderValueSetting)];
      tmp49Result = tmp49(tmp50, obj7);
    }
    tmp26 = tmp49Result;
  }
  let tmp33 = null;
  if (tmp13) {
    let obj8 = { variant: "body-xs/normal", color: "text-feedback-critical", children: intl5.string(notifyAgent(tmp3[17])["A5TC+K"]) };
    const Text2 = tmp2(tmp3[28]).Text;
    intl5 = tmp2(tmp3[16]).intl;
    const tmp35 = notifyAgent;
    tmp33 = closure_12(Text2, obj8);
  }
  let obj9 = { style: tmp.section, children: items6 };
  let tmp38 = null;
  if (null != note) {
    let str = "";
    tmp38 = null;
    if ("" !== note) {
      const obj10 = { text: note, variant: "body-sm/normal", color: "text-default" };
      tmp38 = closure_12(notifyAgent(tmp3[21]), obj10);
    }
  }
  items6 = [tmp38, , , , ];
  let tmp41 = null;
  if (null != stateFromStores) {
    tmp41 = null;
    if (0 === found.length) {
      tmp41 = null;
      if (0 === memo1.length) {
        const obj11 = { variant: "body-sm/normal", color: "text-muted", children: intl6.string(notifyAgent(tmp3[17]).lJJayk) };
        const Text3 = tmp2(tmp3[28]).Text;
        intl6 = tmp2(tmp3[16]).intl;
        tmp41 = closure_12(Text3, obj11);
      }
    }
  }
  items6[1] = tmp41;
  if (tmp18) {
    let tmp46 = null;
    const tmp45 = c14;
    if (someResult) {
      let tmp47 = closure_12;
      const obj12 = { variant: "body-xs/normal", color: "text-muted", children: intl7.string(notifyAgent(tmp3[17]).dsHRPK) };
      const Text4 = tmp2(tmp3[28]).Text;
      intl7 = tmp2(tmp3[16]).intl;
      tmp46 = closure_12(Text4, obj12);
    }
    const obj13 = { children: items7 };
    items7 = [tmp46, ];
    const found6 = found1.filter((item) => {
      let closure_0 = item;
      return !found.some((key) => key.key === closure_0 && true === key.per_server);
    });
    items7[1] = found6.map(function renderScoped(item) {
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
    });
    mapped = tmp36(tmp45, obj13);
  } else {
    const found7 = found.filter((per_server) => true !== per_server.per_server);
    mapped = found7.map(renderValueSetting);
  }
  items6[2] = mapped;
  items6[3] = tmp26;
  items6[4] = tmp33;
  const obj14 = {
    fields: c13(closure_6, obj9),
    secretFields: c13(closure_6, obj15),
    loaded: null != stateFromStores,
    valueCount: found.length,
    secretCount: memo1.length,
    isScoped: tmp18,
    canSave: tmp24,
    saving: first2,
    submit: callback,
    validate() {
      let tmp2;
      if (0 !== closure_27.length) {
        let str;
        _undefined2(true);
        const tmp5 = closure_26;
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
  obj15 = { style: tmp.section, children: items8 };
  const obj16 = { variant: "body-xs/normal", color: "text-muted", children: intl8.string(notifyAgent(tmp3[17]).dsHRPK) };
  const Text5 = tmp2(tmp3[28]).Text;
  intl8 = tmp2(tmp3[16]).intl;
  items8 = [closure_12(Text5, obj16), memo1.map(renderSecret), tmp33];
  return obj14;
};
