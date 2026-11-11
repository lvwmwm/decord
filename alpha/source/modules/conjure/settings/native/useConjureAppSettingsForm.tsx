// Module ID: 13115
// Function ID: 13116
// Name: useConjureAppSettingsForm
// Dependencies: [5, 32, 19, 17, 5173, 5114, 5185, 1385, 7315, 21, 5243, 575, 504, 13116, 1113, 4079, 13117, 13118, 13121, 7680, 13122, 7667, 7679, 7681, 13133, 7793, 7553, 5866, 5873, 13135, 7197, 7379, 7390, 5891, 5489, 11904, 13136, 13140, 2]
// Exports: default

// Module 13115 (useConjureAppSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5489 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 11904 */;
import conjureSettingValues from "conjureSettingValues" /* 13117 */;
import ConjureGuildPickerSheetDefault from "ConjureGuildPickerSheet" /* 13140 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 5173 */;
import GuildStore from "GuildStore" /* 5114 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UserStore from "UserStore" /* 1385 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 7315 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, channels, map;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const useConjureSettingPickerOptions = tmp(13135);
function ConjureChannelSettingRow(def) {
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
  let obj = def(13135);
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
      const tmpResult = tmp(7197);
      const result = tmpResult.conjureSettingChannels(stateFromStores, def.channel_filter);
      c4 = result;
      found = result.find((id) => id.id === importDefault);
      if (found == null) {
        found = null;
      }
      const TableRowGroup = tmp(7680).TableRowGroup;
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
              const obj = { content: authStore2(tmp2, obj2), key: "ConjureSettingsChannelSheet", stackingBehavior: "stack" };
              obj2 = {
                header: obj3,
                guild: GuildStore.getGuild(conjureSettingsGuildId),
                channels,
                selectedChannel: found,
                noChannelOptionLabel: intl.string(_modDef4079["jtBVV+"]),
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
      const TableRow = tmp(7379).TableRow;
      if (null != hint) {
        const obj4 = { variant: "body-xs/medium", color: "text-subtle", children: tmpResult3.conjureLinkedNodes(hint, "body-xs/medium") };
        const Text = tmp(5866).Text;
        let str = "body-xs/medium";
        tmpResult3 = tmp(13122);
        tmp6Result = tmp6(Text, obj4);
      }
      TableRowTrailingText = tmp(7390).TableRowTrailingText;
      if (null != found) {
        const tmpResult4 = tmp(5891);
        channelName = tmpResult4.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(1113).intl;
        channelName = intl.string(_modDef4079.iZIF9m);
      }
      const obj5 = { hasIcons: false, children: closure_12(TableRow, obj3) };
      obj6 = { text: channelName };
      return closure_12(TableRowGroup, obj5);
    }
  }
  return fallback;
}
function ConjurePickerSettingRow(def) {
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
  let obj = def(conjureSettingsGuildId[29]);
  conjureSettingsGuildId = obj.useConjureSettingsGuildId(projectId, isPreview);
  let tmp4 = importDefault;
  let tmp5 = require("useConjureSettingPickerOptions")(conjureSettingsGuildId, def);
  let obj2 = def(conjureSettingsGuildId[29]);
  const result = obj2.conjureSettingPickedIds(value);
  let c3 = result;
  let tmp7 = null;
  const useConjureMemberRequests = def(conjureSettingsGuildId[36]).useConjureMemberRequests;
  def(conjureSettingsGuildId[36]);
  if ("user" === def.type) {
    tmp7 = conjureSettingsGuildId;
  }
  const conjureMemberRequests = useConjureMemberRequests(tmp7, result);
  if (null != conjureSettingsGuildId) {
    if (null != tmp5) {
      let formatToPlainStringResult;
      const tmpResult = tmp(tmp2[29]);
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
        trailing: closure_12(tmp(tmp2[32]).TableRowTrailingText, obj7),
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
              const obj2 = { content: tmp4(tmp5, obj), key: "ConjureSettingsPickerSheet", stackingBehavior: "stack" };
              showActionSheet(obj2);
            }
      };
      tmp11Result = undefined;
      const TableRow = tmp(tmp2[31]).TableRow;
      if (null != hint) {
        const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: tmpResult2.conjureLinkedNodes(hint, "body-xs/medium") };
        const Text = tmp(tmp2[27]).Text;
        let str = "body-xs/medium";
        tmpResult2 = tmp(tmp2[20]);
        tmp11Result = tmp11(Text, obj5);
      }
      const obj6 = { hasIcons: false, children: closure_12(TableRow, obj4) };
      obj7 = { text: formatToPlainStringResult };
      return closure_12(TableRowGroup, obj6);
    }
  }
  return fallback;
}
let _slicedToArray = _slicedToArray_mod;
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
  let c11;
  let c14;
  let c15;
  let c16;
  let c17;
  let c18;
  let closure_13;
  let closure_4;
  let closure_7;
  let closure_9;
  let first;
  let first1;
  let first2;
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
  first = undefined;
  closure_7 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  c10 = undefined;
  c11 = undefined;
  first2 = undefined;
  closure_13 = undefined;
  c14 = undefined;
  c15 = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  let found1;
  let closure_25;
  let closure_26;
  let closure_27;
  let memo3;
  let someResult1;
  let closure_30;
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
    let tmp19;
    let tmp29;
    let tmp38Result;
    let tmp39Result;
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
        const tmp56 = first2;
        const tmp57 = projectId;
        const tmp58 = onSaved;
        if (null != tmp) {
          const tmp57Result = tmp57(tmp58[20]);
          conjureLinkedNodesResult = tmp57Result.conjureLinkedNodes(tmp, "body-sm/normal");
        }
        options1 = found.options;
        if (options1 == null) {
          options1 = [];
        }
        return tmp56(TableRowGroup2, obj2, found.key);
      }
    }
    if ("select" === found.type) {
      let tmp44 = first[found.key];
      if (tmp44 == null) {
        tmp44 = memo1[found.key];
      }
      let tmp50;
      const TableRadioGroup = projectId(onSaved[22]).TableRadioGroup;
      const tmp47 = first2;
      const tmp48 = projectId;
      const tmp49 = onSaved;
      if (typeof tmp44 === "string") {
        tmp50 = tmp44;
      }
      const obj3 = {
        hasIcons: false,
        defaultValue: tmp50,
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
        const tmp48Result = tmp48(tmp49[20]);
        conjureLinkedNodesResult1 = tmp48Result.conjureLinkedNodes(tmp, "body-sm/normal");
      }
      ({ label: obj8.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      return tmp47(TableRadioGroup, obj3, found.key);
    } else if ("checkbox" === found.type) {
      let tmp35 = first[found.key];
      if (tmp35 == null) {
        tmp35 = memo1[found.key];
      }
      const TableRowGroup = projectId(onSaved[19]).TableRowGroup;
      const obj4 = {
        label: found.label,
        subLabel: tmp38Result,
        checked: true === tmp35,
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
      tmp38Result = undefined;
      let TableCheckboxRow = projectId(onSaved[21]).TableCheckboxRow;
      if (null != tmp) {
        const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: tmp39Result.conjureLinkedNodes(tmp, "body-xs/medium") };
        const Text = tmp39(tmp40[27]).Text;
        tmp39Result = projectId(onSaved[20]);
        tmp38Result = tmp38(Text, obj5);
      }
      const obj6 = { hasIcons: false, children: first2(TableCheckboxRow, obj4) };
      return first2(TableRowGroup, obj6, found.key);
    } else {
      let tmp4Result;
      if ("game" === found.type) {
        const obj7 = {
          def: found,
          hint: tmp,
          value: tmp29,
          pickingEmpty: true === _undefined3[found.key],
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
          onPickingEmptyChange(arg0) {
                return closure_19(found.key, arg0);
              }
        };
        tmp29 = first[found.key];
        const tmp24 = first2;
        const tmp27 = notifyAgent(onSaved[24]);
        if (tmp29 == null) {
          tmp29 = memo1[found.key];
        }
        tmp4Result = tmp24(tmp27, obj7, found.key);
      } else {
        if ("role" !== found.type) {
          if ("user" !== found.type) {
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
              const tmp5 = c16;
              if (tmp9 == null) {
                tmp9 = memo1[found.key];
              }
              tmp4Result = tmp4(tmp5, obj, found.key);
            } else {
              tmp4Result = renderTextSetting(found, tmp);
            }
          }
        }
        const obj9 = {
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
        const tmp15 = _undefined3;
        if (tmp19 == null) {
          tmp19 = memo1[found.key];
        }
        tmp4Result = tmp14(tmp15, obj9, found.key);
      }
      return tmp4Result;
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
      const TextArea = projectId(onSaved[25]).TextArea;
      const tmp19 = first2;
      if (c15) {
        if (closure_26.includes(multiline.key)) {
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
      const TextInput = projectId(onSaved[26]).TextInput;
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
        if (closure_26.includes(key)) {
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
        const obj5 = { text: description, variant: "body-xs/normal", color: "text-muted" };
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
        const obj4 = { variant: "body-sm/medium", color: "text-default", children: label };
        items = [first2(projectId(onSaved[27]).Text, obj4), first2(projectId(onSaved[27]).Text, { variant: "body-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp19Result = null;
        if (null != tmp2) {
          const obj5 = { text: tmp2, variant: "body-xs/normal", color: "text-muted" };
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
        const Button = tmp20(tmp21[28]).Button;
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
    const TextInput = projectId(onSaved[26]).TextInput;
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
      if (closure_26.includes(name)) {
        const intl = tmp7(tmp8[14]).intl;
        stringResult = intl.string(notifyAgent(tmp8[15])["PW1+MY"]);
      }
    }
    items2 = [first2(TextInput, obj8), ];
    let tmp6Result = null;
    if (null != tmp2) {
      const obj9 = { text: tmp2, variant: "body-xs/normal", color: "text-muted" };
      tmp6Result = tmp6(notifyAgent(tmp8[20]), obj9);
    }
    items2[1] = tmp6Result;
    tmp4Result = tmp4(tmp5, obj, value.name);
  }
  let tmp = c15();
  _slicedToArray = tmp;
  let tmp2 = projectId;
  let tmp3 = onSaved;
  let obj = projectId(onSaved[12]);
  let items = [c11];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureSettingsStore.getSettings(projectId));
  let obj2 = stateFromStores;
  [first, closure_7] = stateFromStores.useState({});
  [first1, closure_9] = stateFromStores.useState({});
  let tmp9 = _slicedToArray(stateFromStores.useState({}), 2);
  [c10, c11] = tmp9;
  [first2, closure_13] = stateFromStores.useState(false);
  const tmp12 = _slicedToArray(stateFromStores.useState(false), 2);
  [tmp13, c14] = tmp12;
  let tmp14 = _slicedToArray(stateFromStores.useState(false), 2);
  [c15, c16] = tmp14;
  let tmp15 = _slicedToArray(stateFromStores.useState({}), 2);
  [c17, c18] = tmp15;
  let closure_19 = stateFromStores.useCallback((arg0, arg1) => {
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
  const memo = stateFromStores.useMemo(() => {
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
  closure_25 = tmp18;
  let someResult = found1.some((item) => map.has(item));
  const tmp2Result = tmp2(tmp3[13]);
  let found2 = found;
  const conjureMissingRequiredSettings = tmp2Result.conjureMissingRequiredSettings;
  if (found1.length > 0) {
    found2 = found.filter((key) => found1.includes(key.key));
  }
  closure_26 = conjureMissingRequiredSettings(found2.map((def) => {
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
  if (found1.length > 0) {
    found3 = memo2.filter((name) => found1.includes(name.name));
  }
  closure_27 = conjureMissingRequiredSettings2(found3.flatMap((def) => {
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
  someResult1 = memo.some((type) => "game" === type.type && true === c17[type.key]);
  let tmp24 = (null != memo3.values || null != memo3.secrets) && !someResult1;
  closure_30 = tmp24;
  const items5 = [tmp24, someResult1, notifyAgent, onSaved, projectId, first2, memo3];
  let tmp26 = null;
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
              const tmp23 = closure_30;
              if (tmp23) {
                const tmp24 = first2;
                if (!tmp24) {
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
  }), items5);
  if (tmp13) {
    let tmp27 = first2;
    let obj3 = { variant: "body-xs/normal", color: "text-feedback-critical", children: intl.string(notifyAgent(tmp3[15])["A5TC+K"]) };
    let Text = tmp2(tmp3[27]).Text;
    intl = tmp2(tmp3[14]).intl;
    tmp26 = first2(Text, obj3);
  }
  let tmp29 = closure_13;
  let obj4 = { style: tmp.section, children: items6 };
  let tmp31 = null;
  if (null != note) {
    let str = "";
    tmp31 = null;
    if ("" !== note) {
      let tmp32 = first2;
      const tmp33 = notifyAgent;
      let obj5 = { text: note, variant: "body-sm/normal", color: "text-default" };
      tmp31 = first2(notifyAgent(tmp3[20]), obj5);
    }
  }
  items6 = [tmp31, , , ];
  let tmp34 = null;
  if (null != stateFromStores) {
    tmp34 = null;
    if (0 === found.length) {
      tmp34 = null;
      if (0 === memo2.length) {
        let tmp35 = first2;
        let obj6 = { variant: "body-sm/normal", color: "text-muted", children: intl2.string(notifyAgent(tmp3[15]).lJJayk) };
        const Text2 = tmp2(tmp3[27]).Text;
        intl2 = tmp2(tmp3[14]).intl;
        tmp34 = first2(Text2, obj6);
      }
    }
  }
  items6[1] = tmp34;
  if (found1.length > 0) {
    let tmp39 = null;
    const tmp38 = c14;
    if (someResult) {
      const tmp40 = first2;
      let obj7 = { variant: "body-xs/normal", color: "text-muted", children: intl3.string(notifyAgent(tmp3[15]).dsHRPK) };
      const Text3 = tmp2(tmp3[27]).Text;
      intl3 = tmp2(tmp3[14]).intl;
      tmp39 = first2(Text3, obj7);
    }
    let obj8 = { children: items7 };
    items7 = [
      tmp39,
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
    mapped = tmp29(tmp38, obj8);
  } else {
    mapped = found.map(renderValueSetting);
  }
  let obj9 = {
    fields: tmp29(tmp30, obj4),
    secretFields: tmp29(tmp30, obj10),
    loaded: null != stateFromStores,
    valueCount: found.length,
    secretCount: memo2.length,
    isScoped: tmp18,
    canSave: tmp24,
    saving: first2,
    submit: callback,
    validate() {
      let tmp2;
      if (0 !== closure_26.length) {
        let str;
        _undefined2(true);
        const tmp5 = closure_25;
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
  items6[3] = tmp26;
  obj10 = { style: tmp.section, children: items8 };
  const obj11 = { variant: "body-xs/normal", color: "text-muted", children: intl4.string(notifyAgent(tmp3[15]).dsHRPK) };
  const Text4 = tmp2(tmp3[27]).Text;
  intl4 = tmp2(tmp3[14]).intl;
  items8 = [first2(Text4, obj11), memo2.map(renderSecret), tmp26];
  return obj9;
};
