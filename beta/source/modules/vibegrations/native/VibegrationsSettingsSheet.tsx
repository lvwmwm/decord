// Module ID: 17003
// Function ID: 17004
// Name: VibegrationsSettingsSheet
// Dependencies: [5, 32, 19, 17, 2100, 2067, 4441, 1376, 13401, 13400, 9339, 21, 4790, 580, 7256, 504, 1119, 3714, 9900, 13222, 4757, 5933, 5932, 5935, 5851, 6878, 4786, 5220, 7481, 7428, 9901, 558, 568, 5308, 5854, 5863, 4943, 12646, 2]
// Exports: default

// Module 17003 (VibegrationsSettingsSheet)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import _modDef3714 from "module_3714" /* 3714 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4757 */;
import VibegrationsUtils from "VibegrationsUtils" /* 5308 */;
import ChannelPickerActionSheetDefault from "ChannelPickerActionSheet" /* 12646 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2100 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserStore from "UserStore" /* 1376 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 13401 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 13400 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9339 */;

require = fn;
let View = fn(17).View;
let VibegrationsConnectionStore = fn(13400);
({ requestProjectRebuild: closure_12, sendUserMessage: map1, submitProjectSettings: closure_14 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = jsxProd);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
const VibegrationsSettingsChannelSheet = "VibegrationsSettingsChannelSheet";
const createStyles = fn(4790);
let closure_22 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom }, section: null, secretRow: null, secretRowInfo: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingBottom };
  obj.section = { gap: nativeDefault.space.PX_16 };
  const obj3 = { gap: nativeDefault.space.PX_16 };
  obj.secretRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
  const obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
  obj.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  return obj;
});
const ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function VibegrationsChannelSettingRow(projectId) {
  const cResult = projectId(def[32]).c(47);
  projectId = projectId.projectId;
  const isPreview = projectId.isPreview;
  def = projectId.def;
  ({ hint, value } = projectId);
  asyncGeneratorStep = value;
  ({ disabled, onChange } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === isPreview) {
    if (cResult[2] === projectId) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[15]).useStateFromStores(first, tmp6, tmp7);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [found];
      cResult[5] = items1;
      let tmp9 = items1;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] !== stateFromStores) {
      class P {
        constructor() {
          channels = null;
          if (null != closure_5) {
            tmp3 = closure_7;
            channels = closure_7.getChannels(tmp);
          }
          return channels;
        }
      }
      const items2 = [stateFromStores];
      cResult[6] = stateFromStores;
      cResult[7] = P;
      cResult[8] = items2;
      let tmp12 = items2;
      const tmp11 = P;
    } else {
      class P {
        constructor() {
          channels = null;
          if (null != closure_5) {
            tmp3 = closure_7;
            channels = closure_7.getChannels(tmp);
          }
          return channels;
        }
      }
      tmp12 = cResult[8];
    }
    const tmpResult = tmp(tmp2[15]);
    label = tmp(tmp2[15]).useStateFromStores(tmp9, tmp11, tmp12);
    if (null != stateFromStores) {
      class P {
        constructor() {
          channels = null;
          if (null != closure_5) {
            tmp3 = closure_7;
            channels = closure_7.getChannels(tmp);
          }
          return channels;
        }
      }
      if (null != label) {
        class P {
          constructor() {
            channels = null;
            if (null != closure_5) {
              tmp3 = closure_7;
              channels = closure_7.getChannels(tmp);
            }
            return channels;
          }
        }
        const result = tmp(tmp2[33]).vibegrationsSettingChannels(label, def.channel_filter);
        View = result;
        found = result.find((id) => id.id === value);
        if (found == null) {
          class P {
            constructor() {
              channels = null;
              if (null != closure_5) {
                tmp3 = closure_7;
                channels = closure_7.getChannels(tmp);
              }
              return channels;
            }
          }
        }
        const TableRowGroup = tmp(tmp2[23]).TableRowGroup;
        const TableRow = tmp(tmp2[34]).TableRow;
        const label2 = def.label;
        const TableRowTrailingText = tmp(tmp2[35]).TableRowTrailingText;
        if (null != found) {
          class P {
            constructor() {
              channels = null;
              if (null != closure_5) {
                tmp3 = closure_7;
                channels = closure_7.getChannels(tmp);
              }
              return channels;
            }
          }
          const tmpResult6 = tmp(tmp2);
          let channelName = tmpResult6.computeChannelName(found, UserStore, RelationshipStore, true);
        } else {
          class P {
            constructor() {
              channels = null;
              if (null != closure_5) {
                tmp3 = closure_7;
                channels = closure_7.getChannels(tmp);
              }
              return channels;
            }
          }
          channelName = obj5.string(isPreview(tmp2[17]).grukkJ);
        }
        cResult[9] = label;
        ({ channel_filter: tmp3[10], label } = def);
        cResult[11] = label;
        cResult[12] = disabled;
        cResult[13] = hint;
        cResult[14] = value;
        cResult[15] = TableRowTrailingText;
        cResult[16] = TableRow;
        cResult[17] = TableRowGroup;
        cResult[18] = result;
        cResult[19] = found;
        cResult[20] = true;
        cResult[21] = disabled;
        cResult[22] = false;
        cResult[23] = channelName;
        cResult[24] = label2;
        cResult[25] = hint;
        const tmpResult5 = tmp(tmp2[33]);
      }
    }
    return projectId.fallback;
  }
  const fn = function l() {
    return VibegrationsUtils.vibegrationsSettingsGuildId(VibegrationsProjectStore.getProject(projectId), isPreview);
  };
  const items3 = [isPreview, projectId];
  cResult[1] = isPreview;
  cResult[2] = projectId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp7 = items3;
  tmp6 = fn;
}) : (function VibegrationsChannelSettingRow(projectId) {
  projectId = projectId.projectId;
  const isPreview = projectId.isPreview;
  const def = projectId.def;
  ({ value: asyncGeneratorStep, onChange: _slicedToArray } = projectId);
  c6 = undefined;
  let found;
  ({ hint, disabled, fallback } = projectId);
  const items = [VibegrationsProjectStore];
  const items1 = [isPreview, projectId];
  const stateFromStores = projectId(def[15]).useStateFromStores(items, () => VibegrationsUtils.vibegrationsSettingsGuildId(VibegrationsProjectStore.getProject(projectId), isPreview), items1);
  let obj = projectId(def[15]);
  const items2 = [found];
  const items3 = [stateFromStores];
  const stateFromStores1 = projectId(def[15]).useStateFromStores(items2, () => {
    channels = null;
    if (null != stateFromStores) {
      channels = GuildChannelStore.getChannels(tmp);
    }
    return channels;
  }, items3);
  if (null != stateFromStores) {
    if (null != stateFromStores1) {
      const result = tmp(tmp2[33]).vibegrationsSettingChannels(stateFromStores1, def.channel_filter);
      c6 = result;
      found = result.find((id) => id.id === asyncGeneratorStep);
      if (found == null) {
        found = null;
      }
      let obj3 = { label: def.label, subLabel: hint, arrow: true, disabled, trailing: null, onPress: null };
      if (null != found) {
        const tmpResult2 = tmp(tmp2[36]);
        let channelName = tmpResult2.computeChannelName(found, UserStore, RelationshipStore, true);
      } else {
        let intl = tmp(tmp2[16]).intl;
        channelName = intl.string(isPreview(tmp2[17]).grukkJ);
      }
      let obj4 = { hasIcons: false, children: null };
      const obj5 = { text: channelName };
      obj3.trailing = closure_17(tmp(tmp2[35]).TableRowTrailingText, obj5);
      obj3.onPress = function onPress() {
        const obj2 = { content: null, key: null, stackingBehavior: "stack" };
        const obj3 = { header: { title: def.label }, guild: null, channels: null, selectedChannel: null, noChannelOptionLabel: null, onSelect: null };
        const obj = ActionSheetActionCreators;
        const obj4 = { title: def.label };
        obj3.guild = GuildStore.getGuild(stateFromStores);
        obj3.channels = channels;
        obj3.selectedChannel = found;
        const intl = util.intl;
        obj3.noChannelOptionLabel = intl.string(_modDef3714.aO4AM6);
        obj3.onSelect = function onSelect(id) {
          let str;
          if (id != null) {
            str = id.id;
          }
          if (str == null) {
            str = "";
          }
          return closure_1_4(str);
        };
        obj2.content = constants(ChannelPickerActionSheetDefault, obj3);
        obj2.key = VibegrationsSettingsChannelSheet;
        obj.showActionSheet(obj2);
      };
      obj4.children = closure_17(tmp(tmp2[34]).TableRow, obj3);
      return closure_17(tmp(tmp2[23]).TableRowGroup, obj4);
    }
  }
  return fallback;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
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
  c19 = undefined;
  let memo4;
  closure_21 = undefined;
  function renderValueSetting(bottom) {
    projectId = bottom;
    let hint;
    if (bottom != null) {
      hint = bottom.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== bottom.hint) {
        hint1 = bottom.hint;
      }
    }
    const items = [hint1, ];
    let requires_rebuild;
    if (bottom != null) {
      requires_rebuild = bottom.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(flag[16]).intl;
      stringResult = intl.string(notifyAgent(flag[17]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    if (0 !== found.length) {
      const joined = found.join(" ");
    }
    if ("select" === bottom.type) {
      let tmp41 = first[bottom.key];
      if (tmp41 == null) {
        tmp41 = memo1[bottom.key];
      }
      let tmp46;
      if (typeof tmp41 === "string") {
        tmp46 = tmp41;
      }
      const obj2 = {
        hasIcons: false,
        defaultValue: tmp46,
        onChange(arg0) {
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
        children: null
      };
      ({ label: obj6.title, label: obj6.accessibilityLabel, options } = bottom);
      if (options == null) {
        options = [];
      }
      obj2.children = options.map((label) => found(bottom(flag[22]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return found(projectId(flag[21]).TableRadioGroup, obj2, bottom.key);
    } else if ("checkbox" === bottom.type) {
      let tmp31 = first[bottom.key];
      if (tmp31 == null) {
        tmp31 = memo1[bottom.key];
      }
      const obj3 = { hasIcons: false, children: null };
      const obj4 = {
        label: bottom.label,
        subLabel: joined,
        checked: true === tmp31,
        disabled: first2,
        onPress(arg0) {
            closure_1_13(false);
            closure_1_6((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      obj3.children = found(projectId(flag[24]).TableCheckboxRow, obj4);
      return found(projectId(flag[23]).TableRowGroup, obj3, bottom.key);
    } else {
      if ("channel" === bottom.type) {
        const obj5 = { projectId, isPreview: flag, def: bottom, hint: joined, value: null, disabled: null, onChange: null, fallback: null };
        let tmp22 = first[bottom.key];
        if (tmp22 == null) {
          tmp22 = memo1[bottom.key];
        }
        obj5.value = tmp22;
        obj5.disabled = first2;
        obj5.onChange = function onChange(arg0) {
          closure_1_13(false);
          closure_1_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[key.key] = key;
            return obj;
          });
        };
        closure_130_0 = bottom;
        let tmp25 = first[bottom.key];
        if (tmp25 == null) {
          tmp25 = memo1[bottom.key];
        }
        const obj11 = { label: bottom.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, disabled: null };
        let str4 = "";
        if (typeof tmp25 === "string") {
          str4 = tmp25;
        }
        obj11.value = str4;
        obj11.onChange = function onChange(arg0) {
          closure_1_13(false);
          closure_1_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[key.key] = key;
            return obj;
          });
        };
        obj11.disabled = first2;
        obj5.fallback = found(projectId(flag[25]).TextInput, obj11, bottom.key);
        let tmp12Result = found(renderSecret, obj5, bottom.key);
      } else {
        closure_129_0 = bottom;
        let tmp11 = first[bottom.key];
        if (tmp11 == null) {
          tmp11 = memo1[bottom.key];
        }
        let obj = { label: bottom.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, disabled: null };
        let str3 = "";
        if (typeof tmp11 === "string") {
          str3 = tmp11;
        }
        obj.value = str3;
        obj.onChange = function onChange(arg0) {
          closure_1_13(false);
          closure_1_6((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[key.key] = key;
            return obj;
          });
        };
        obj.disabled = first2;
        tmp12Result = found(projectId(flag[25]).TextInput, obj, bottom.key);
      }
      return tmp12Result;
    }
  }
  function renderSecret(value) {
    closure_0 = value;
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
      stringResult = intl.string(notifyAgent(flag[17]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_3.secretRow, children: null };
        const obj3 = { style: closure_3.secretRowInfo, children: null };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        const items1 = [found(projectId(flag[26]).Text, obj4), found(projectId(flag[26]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = found(projectId(flag[26]).Text, obj5);
        }
        items1[2] = tmp23;
        obj3.children = items1;
        const items2 = [map(closure_6, obj3), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(flag[16]).intl;
        obj6.text = intl2.string(notifyAgent(flag[17]).j6itec);
        const intl3 = projectId(flag[16]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl3.formatToPlainString(notifyAgent(flag[17]).cTofe2, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c10((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = found(projectId(flag[27]).Button, obj6);
        obj2.children = items2;
        let tmp12Result = tmp14(tmp15, obj2, value.name);
      }
      return tmp12Result;
    }
    let obj = { label, description: joined, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, disabled: null };
    let str3;
    if (value.set) {
      str3 = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    obj.placeholder = str3;
    let str4 = first1[value.name];
    if (str4 == null) {
      str4 = "";
    }
    obj.value = str4;
    obj.onChange = function onChange(arg0) {
      const name = arg0;
      closure_1_13(false);
      closure_1_8((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj.disabled = first2;
    tmp12Result = found(projectId(flag[25]).TextInput, obj, value.name);
  }
  let tmp3 = renderValueSetting(notifyAgent(flag[14])({ includeKeyboardHeight: true }).insets.bottom);
  asyncGeneratorStep = tmp3;
  let items = [memo1];
  const stateFromStores = projectId(flag[15]).useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
  const tmp7 = stateFromStores(first.useState({}), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const tmp9 = stateFromStores(first.useState({}), 2);
  const first1 = tmp9[0];
  closure_8 = tmp9[1];
  let obj = projectId(flag[15]);
  [c9, c10] = stateFromStores(first.useState({}), 2);
  let tmp12 = stateFromStores(first.useState(false), 2);
  const first2 = tmp12[0];
  closure_12 = tmp12[1];
  let tmp14 = stateFromStores(first.useState(false), 2);
  closure_13 = tmp14[1];
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
      const obj = {};
      const merged = Object.assign(item);
      obj.def = memo.find((key) => {
        let tmp = key.key === item.name;
        if (tmp) {
          tmp = "secret" === key.type;
        }
        return tmp;
      });
      return obj;
    });
  }, items3);
  let found = memo.filter((type) => "secret" !== type.type);
  const map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  const found1 = scopeKeys.filter((item) => {
    closure_0 = item;
    let someResult = found.some((key) => key.key === closure_0);
    if (!someResult) {
      someResult = map.has(item);
    }
    return someResult;
  });
  let tmp19 = !tmp17;
  let tmp11 = stateFromStores(first.useState({}), 2);
  if (found1.length <= 0) {
    tmp19 = found.length > 0;
  }
  if (tmp19) {
    tmp19 = memo2.length > 0;
  }
  let num = 0;
  if (0 === found.length) {
    num = 1;
  }
  let someResult = found1.some((item) => map.has(item));
  [tmp21, tmp22] = stateFromStores(first.useState(num), 2);
  const tmp6Result = stateFromStores(first.useState(num), 2);
  [tmp24, c19] = stateFromStores(first.useState(0), 2);
  const items4 = [memo2.length, found.length];
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo3 = obj2.useMemo(() => {
    const obj = { id: "settings", label: null, count: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3714.jczqxT);
    obj.count = found.length;
    const items = [obj, ];
    const obj2 = { id: "secrets", label: null, count: null, page: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3714.iD7xfZ);
    obj2.count = memo2.length;
    items[1] = obj2;
    return items;
  }, items4);
  const tmp6Result2 = stateFromStores(first.useState(0), 2);
  const segmentedControlState = projectId(flag[18]).useSegmentedControlState({ items: memo3, pageWidth: tmp24, defaultIndex: num, onSetActiveIndex: tmp22 });
  if (tmp19) {
    let tmp28 = 1 === tmp21;
  } else {
    tmp28 = 0 === found.length;
  }
  const items5 = [memo, first1, memo1, first];
  memo4 = obj2.useMemo(() => {
    const values = {};
    function _loop(arg0) {
      closure_0 = arg0;
      found = memo.find((key) => key.key === closure_0);
      if (null != found) {
        let tmp3 = memo1[arg0];
        if (tmp3 == null) {
          tmp3 = "checkbox" !== found.type && "";
          const tmp4 = "checkbox" !== found.type && "";
        }
        if (closure_1 !== tmp3) {
          if (typeof str !== "string") {
            let tmp6 = str;
          } else {
            tmp6 = null;
          }
          obj[arg0] = tmp6;
        }
      }
      return 1;
    }
    const entries = Object.entries(first);
    while (tmp2 !== undefined) {
      let tmp5 = stateFromStores(tmp3, 2);
      closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
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
      const obj3 = { values };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    if (Object.keys(obj2).length > 0) {
      const obj6 = { secrets: obj2 };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return {};
  }, items5);
  closure_21 = tmp30;
  const items6 = [null != memo4.values || null != memo4.secrets, notifyAgent, projectId, first2, memo4];
  const callback1 = obj2.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
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
            closure_3 = tmp4;
            dependencyMap = tmp8;
            let rebuildRequired;
            let project2;
            if (closure_21) {
              if (!first2) {
                closure_12(true);
                closure_13(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj4 = { value: memo(projectId, memo4), done: false };
                return obj4;
              }
            }
            c7 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c5 = 1;
            closure_131_13(true);
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
            rebuildRequired = value.rebuildRequired;
            if (!closure_131_1) {
              if (!closure_1_11.hasPendingSettingsRequest(closure_131_0)) {
                if (rebuildRequired) {
                  closure_1_12(closure_131_0);
                } else {
                  project2 = project.getProject(closure_131_0);
                  let application_id;
                  if (project2 != null) {
                    application_id = project2.application_id;
                  }
                  let _null = application_id;
                  if (application_id == null) {
                    _null = null;
                  }
                  _null2(13222)(_null);
                  let prop;
                  const tmp19 = _null2(13222);
                  if (project2 != null) {
                    prop = project2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  _null2(13222)(_null2);
                  const tmp27 = _null2(13222);
                }
              }
              _null2(4757).hideActionSheet(closure_1_20);
              c5 = 1;
              const obj = _null2(4757);
            }
            const intl = _null(1119).intl;
            closure_1_13(closure_131_0, intl.string(_null2(3714).gqJFu0));
          }
          c5 = 0;
          closure_131_12(false);
        }
        c5 = 0;
        closure_131_12(false);
        throw closure_4;
      } catch (tmp69) {
        closure_4 = tmp69;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp69;
        } else if (tmp2 === tmp71) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  }), items6);
  let obj3 = { startExpanded: true, header: null, children: null };
  let obj4 = { title: null };
  let intl = tmp4(tmp2[16]).intl;
  obj4.title = intl.string(notifyAgent(flag[17]).gTMvzD);
  obj3.header = found(projectId(flag[29]).BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp3.container, children: null };
  let tmp32Result = null;
  if (null != note) {
    tmp32Result = null;
    if ("" !== note) {
      let obj6 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp32Result = tmp32(tmp4(tmp2[26]).Text, obj6);
    }
  }
  const items7 = [tmp32Result, , , , ];
  let tmp32Result5 = null;
  if (0 === found.length) {
    tmp32Result5 = null;
    if (0 === memo2.length) {
      let obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl2 = tmp4(tmp2[16]).intl;
      obj7.children = intl2.string(tmp(tmp2[17]).URnN4B);
      tmp32Result5 = tmp32(tmp4(tmp2[26]).Text, obj7);
    }
  }
  items7[1] = tmp32Result5;
  if (found1.length > 0) {
    const obj8 = { style: tmp3.section, children: null };
    let tmp32Result6 = null;
    if (someResult) {
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl4 = tmp4(tmp2[16]).intl;
      obj9.children = intl4.string(tmp(tmp2[17])["Hl+eu7"]);
      tmp32Result6 = tmp32(tmp4(tmp2[26]).Text, obj9);
    }
    const items8 = [
      tmp32Result6,
      found1.map(function renderScoped(item) {
          closure_0 = item;
          value = map.get(item);
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
    obj8.children = items8;
    let tmp33Result = tmp33(tmp34, obj8);
  } else {
    let tmp32Result7 = null;
    if (tmp19) {
      const obj10 = { onLayout: callback, children: null };
      let obj11 = { state: segmentedControlState };
      obj10.children = tmp32(tmp4(tmp2[30]).SegmentedControl, obj11);
      tmp32Result7 = tmp32(tmp34, obj10);
    }
    const items9 = [tmp32Result7, ];
    const obj12 = { style: tmp3.section, children: null };
    if (tmp28) {
      const obj13 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp4(tmp2[16]).intl;
      obj13.children = intl3.string(tmp(tmp2[17])["Hl+eu7"]);
      const items10 = [tmp32(tmp4(tmp2[26]).Text, obj13), memo2.map(renderSecret)];
      obj12.children = items10;
      let tmp33Result2 = tmp33(tmp34, obj12);
    } else {
      obj12.children = found.map(renderValueSetting);
      tmp33Result2 = tmp32(tmp34, obj12);
    }
    const obj14 = { children: null };
    items9[1] = tmp33Result2;
    obj14.children = items9;
    tmp33Result = tmp33(c19, obj14);
  }
  items7[2] = tmp33Result;
  let tmp32Result8 = null;
  if (tmp14[0]) {
    const obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl5 = tmp4(tmp2[16]).intl;
    obj15.children = intl5.string(tmp(tmp2[17]).n02OEo);
    tmp32Result8 = tmp32(tmp4(tmp2[26]).Text, obj15);
  }
  items7[3] = tmp32Result8;
  const obj16 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(tmp2[16]).intl;
  obj16.text = intl6.string(notifyAgent(flag[17]).Tuz9vw);
  obj16.loading = first2;
  obj16.disabled = !(null != memo4.values || null != memo4.secrets);
  obj16.onPress = callback1;
  items7[4] = found(projectId(flag[27]).Button, obj16);
  obj5.children = items7;
  obj3.children = map(closure_6, obj5);
  return found(projectId(flag[28]).ActionSheet, obj3);
};
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";
