// Module ID: 11744
// Function ID: 11745
// Name: useConjureProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 4875, 6759, 1087, 21, 4969, 587, 558, 576, 504, 6760, 5196, 1128, 3830, 5220, 7232, 8902, 7131, 6973, 6886, 7282, 11745, 11748, 11750, 10705, 7329, 11751, 11752, 10690, 11753, 6889, 11757, 2]
// Exports: default

// Module 11744 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5196 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6760 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore_mod from "GuildRoleStore" /* 4875 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6759 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, c4, importDefault, set;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let react = react_mod;
let View = react_native.View;
let GuildRoleStore = GuildRoleStore_mod;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const ConjureCollaboratorRolesSheet_str = "ConjureCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, roleListFooter: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles(obj);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: size };
  size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleColorCircle(color) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_14(color.color);
  if (cResult[0] !== tmp2.circle) {
    const obj2 = { style: tmp2.circle };
    const tmp6 = authStore(View, obj2);
    cResult[0] = tmp2.circle;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function RoleColorCircle(color) {
  const obj = { style: closure_14(color.color).circle };
  return authStore(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCollaboratorRolesSheet(guildId) {
  let closure_5;
  let closure_7;
  let first;
  let first1;
  let obj3;
  let onSave;
  let tmp10;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(onSave[11]);
  const cResult = obj.c(40);
  guildId = guildId.guildId;
  const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
  onSave = guildId.onSave;
  const tmp4 = closure_13();
  const roleLabel = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function h() {
      return GuildRoleStore.getSortedRoles(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(onSave[12]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] !== initialSelectedRoleIds) {
    class P {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    cResult[4] = initialSelectedRoleIds;
    cResult[5] = P;
    tmp10 = P;
  } else {
    class P {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  const tmp11 = first1(react.useState(tmp10), 2);
  first1 = tmp11[0];
  react = tmp11[1];
  [tmp14, r10054] = first1(react.useState(""), 2);
  const tmp13 = first1(react.useState(""), 2);
  if (cResult[6] !== tmp14) {
    class P {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    const toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
    cResult[6] = tmp14;
    cResult[7] = toLocaleLowerCaseResult;
  } else {
    class P {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  View = tmp15;
  if (cResult[8] === tmp15) {
    let tmp18;
    class P {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          set = new Set(initialSelectedRoleIds);
          return set;
        }
      }
      cResult[11] = tmp19;
      tmp18 = tmp19;
    } else {
      class P {
        constructor() {
          set = new Set(initialSelectedRoleIds);
          return set;
        }
      }
    }
    GuildRoleStore = tmp18;
    if (cResult[12] === onSave) {
      class P {
        constructor() {
          set = new Set(initialSelectedRoleIds);
          return set;
        }
      }
      if (cResult[15] !== first1.size) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        let formatToPlainString = tmp22.formatToPlainString;
        let obj2 = { count: first1.size, max: null };
        const g5I05P = initialSelectedRoleIds(tmp2[16]).g5I05P;
        class G {
          constructor() {
            set = new Set(first1);
            onSave(set);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
          }
        }
        let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
        cResult[15] = first1.size;
        cResult[16] = formatToPlainStringResult;
      } else {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        cResult[17] = obj5.string(initialSelectedRoleIds(onSave[16]).un99lK);
        obj5.string(initialSelectedRoleIds(onSave[16]).un99lK);
        class G {
          constructor() {
            set = new Set(first1);
            onSave(set);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
          }
        }
      } else {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
      }
      if (cResult[18] !== tmp21) {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
        let obj4 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
        cResult[18] = tmp21;
        const tmp28 = closure_10(tmp(onSave[17]).Text, obj4);
        class G {
          constructor() {
            set = new Set(first1);
            onSave(set);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
          }
        }
        cResult[19] = tmp28;
      } else {
        class P {
          constructor() {
            set = new Set(initialSelectedRoleIds);
            return set;
          }
        }
      }
      class G {
        constructor() {
          set = new Set(first1);
          onSave(set);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
        }
      }
      const obj6 = { style: tmp4.roleListFooter, children: tmp27 };
      cResult[20] = tmp4.roleListFooter;
      cResult[21] = tmp27;
      cResult[22] = closure_10(View, obj6);
      const tmp32 = closure_10(View, obj6);
    }
    class G {
      constructor() {
        set = new Set(first1);
        onSave(set);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
      }
    }
    cResult[12] = onSave;
    cResult[13] = first1;
    cResult[14] = G;
  }
  const tmp17 = stateFromStoresArray;
  if ("" !== tmp15) {
    class P {
      constructor() {
        set = new Set(initialSelectedRoleIds);
        return set;
      }
    }
  }
  cResult[8] = tmp15;
  cResult[9] = stateFromStoresArray;
  cResult[10] = tmp17;
}) : (function ConjureCollaboratorRolesSheet(guildId) {
  let ActionSheetHeaderPressableText;
  let BottomSheetTitleHeader;
  let Text;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items4;
  let obj10;
  let obj4;
  let obj5;
  let obj6;
  let onSave;
  let str;
  let tmp13Result;
  let tmp8;
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  let first;
  let c7;
  let tmp = closure_13();
  const roleLabel = tmp;
  let tmp3 = onSave;
  let obj = guildId(onSave[12]);
  let items = [c7];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  const tmp5 = stateFromStoresArray(first.useState(() => {
    set = new Set(importDefault);
    return set;
  }), 2);
  first = tmp5[0];
  let closure_6 = tmp5[1];
  let tmp7 = stateFromStoresArray(first.useState(""), 2);
  [str, tmp8] = tmp7;
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  c7 = toLocaleLowerCaseResult;
  const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
  const memo = first.useMemo(() => {
    let found;
    if ("" === c7) {
      found = stateFromStoresArray;
    } else {
      const tmp = stateFromStoresArray;
      found = stateFromStoresArray.filter((id) => {
        let hasItem = id.id === closure_1_7;
        if (!hasItem) {
          const name = id.name;
          const toLocaleLowerCaseResult = name.toLocaleLowerCase();
          hasItem = toLocaleLowerCaseResult.includes(tmp);
        }
        return hasItem;
      });
    }
    return found;
  }, items2);
  let closure_8 = first.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_6((size) => {
      if (closure_1) {
        if (size.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES) {
          return size;
        }
      }
      set = new Set(size);
      if (closure_1) {
        set.add(closure_0);
      } else {
        set.delete(closure_0);
      }
      return set;
    });
  }, []);
  const items3 = [onSave, first];
  const callback = first.useCallback(() => {
    set = new Set(first);
    onSave(set);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
  }, items3);
  let intl = guildId(onSave[15]).intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj2 = { count: first.size, max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
  const g5I05P = require("module_3830").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_3830").un99lK), footer: closure_10(closure_6, obj4), header: closure_10(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[23]).ActionSheet;
  intl2 = guildId(onSave[15]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_10(guildId(onSave[17]).Text, { variant: "text-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_3830")["pO3+p5"]), trailing: closure_10(ActionSheetHeaderPressableText, obj6) };
  BottomSheetTitleHeader = guildId(onSave[18]).BottomSheetTitleHeader;
  intl3 = guildId(onSave[15]).intl;
  obj6 = { label: intl4.string(guildId(onSave[15]).t.i4jeWR), onPress: callback };
  ActionSheetHeaderPressableText = guildId(onSave[19]).ActionSheetHeaderPressableText;
  intl4 = guildId(onSave[15]).intl;
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: intl5.string(guildId(onSave[15]).t.Sojqsr), placeholder: intl6.string(guildId(onSave[15]).t.Sojqsr), onChange: tmp8 };
  const SearchField = guildId(onSave[20]).SearchField;
  intl5 = guildId(onSave[15]).intl;
  intl6 = guildId(onSave[15]).intl;
  items4 = [closure_10(SearchField, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: tmp13Result };
  const tmp12 = closure_11;
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: closure_10(Text, obj10) };
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(guildId(tmp3[15]).t.V6nAfF) };
    Text = tmp2(tmp3[17]).Text;
    intl7 = tmp2(tmp3[15]).intl;
    tmp13Result = tmp13(tmp14, obj9);
  } else {
    const obj11 = {
      hasIcons: false,
      children: memo.map((children) => {
          let formatToPlainStringResult;
          let items;
          const hasItem = first.has(children.id);
          let tmp3 = !hasItem;
          const tmp = first;
          if (tmp3) {
            tmp3 = tmp.size >= guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          const colorStrings = children.colorStrings;
          let primaryColor;
          const obj = { style: roleLabel.roleLabel, children: items };
          const TableCheckboxRow = guildId(onSave[22]).TableCheckboxRow;
          const tmp7 = closure_1_11;
          const tmp8 = closure_6;
          const tmp9 = closure_1_15;
          if (colorStrings != null) {
            primaryColor = colorStrings.primaryColor;
          }
          if (primaryColor == null) {
            primaryColor = children.colorString;
          }
          if (primaryColor == null) {
            primaryColor = DEFAULT_ROLE_COLOR_HEX;
          }
          const obj2 = {
            label: tmp7(tmp8, obj),
            checked: hasItem,
            disabled: tmp3,
            accessibilityHint: formatToPlainStringResult,
            onPress(arg0) {
              return closure_8(children.id, arg0);
            }
          };
          items = [closure_1_10(tmp9, { color: primaryColor }), ];
          const obj3 = { variant: "text-md/medium", children: children.name };
          items[1] = closure_1_10(guildId(onSave[17]).Text, obj3);
          formatToPlainStringResult = undefined;
          if (tmp3) {
            const intl = guildId(onSave[15]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj4 = { max: guildId(onSave[13]).MAX_PROJECT_COLLABORATOR_ROLES };
            const prop = require("module_3830")["dH7+/Z"];
            formatToPlainStringResult = formatToPlainString(prop, obj4);
          }
          return closure_1_10(TableCheckboxRow, obj2, children.id);
        })
    };
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    tmp13Result = tmp13(TableRowGroup, obj11);
  }
  items4[1] = closure_10(closure_6, obj8);
  return tmp12(ActionSheet, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default function useConjureProjectSettingsForm(projectId, guild_id) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let closure_22;
  let closure_23;
  let closure_24;
  let closure_5;
  let conjureSmartContextSetting;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj18;
  let obj20;
  let obj26;
  let obj9;
  let stateFromStores;
  let str2;
  let stringResult;
  let tmp12;
  let tmp14;
  let tmp23;
  let tmp25;
  let tmp27;
  _require = projectId;
  importDefault = guild_id;
  let tmp = closure_13();
  let tmp2 = _require;
  let obj = require("get initialized");
  let items = [conjureSmartContextSetting];
  const items1 = [projectId];
  stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj2 = require("useConjureLiveReloadSetting");
  const conjureLiveReloadSetting = obj2.useConjureLiveReloadSetting(projectId);
  const save = conjureLiveReloadSetting.save;
  const tmp7 = require("useConjureAppIdentityDraft")(projectId);
  react = tmp7;
  const changes = tmp7.changes;
  const commit = tmp7.commit;
  let obj3 = require("ConjureSmartContext");
  conjureSmartContextSetting = obj3.useConjureSmartContextSetting(projectId);
  const save2 = conjureSmartContextSetting.save;
  let obj4 = require("ConjureHostApproval");
  const conjureRequireHostApprovalSetting = obj4.useConjureRequireHostApprovalSetting(projectId);
  const save3 = conjureRequireHostApprovalSetting.save;
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.collaborator_role_ids;
  }
  if (prop == null) {
    prop = [];
  }
  let obj5 = react;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  [tmp12, closure_13] = save(useState(str), 2);
  const tmp11 = save(useState(str), 2);
  [tmp14, closure_14] = save(obj5.useState(null), 2);
  const tmp13 = save(obj5.useState(null), 2);
  [str2, closure_15] = save(obj5.useState(tmp12), 2);
  let num;
  const useState2 = obj5.useState;
  const tmp15 = save(obj5.useState(tmp12), 2);
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  const tmp10Result = save(useState2(num), 2);
  let flags = tmp10Result[0];
  let closure_17 = tmp10Result[1];
  const tmp10Result6 = save(obj5.useState(() => {
    set = new Set(prop);
    return set;
  }), 2);
  const first1 = tmp10Result6[0];
  let closure_19 = tmp10Result6[1];
  const tmp10Result7 = save(obj5.useState(false), 2);
  const first2 = tmp10Result7[0];
  let closure_21 = tmp10Result7[1];
  [tmp23, closure_22] = save(obj5.useState(null), 2);
  save(obj5.useState(null), 2);
  [tmp25, closure_23] = save(obj5.useState(null), 2);
  save(obj5.useState(null), 2);
  [tmp27, closure_24] = save(obj5.useState(null), 2);
  save(obj5.useState(null), 2);
  const trimmed = str2.trim();
  let result = null != stateFromStores;
  if (result) {
    const tmp2Result = tmp2(stateFromStores[13]);
    result = tmp2Result.projectSupportsVisibility(stateFromStores);
  }
  let tmp30 = null != stateFromStores;
  if (tmp30) {
    tmp30 = "user" !== stateFromStores.install_scope;
  }
  let result1 = tmp30 && null != guild_id;
  if (result1) {
    const tmp2Result4 = tmp2(stateFromStores[13]);
    result1 = tmp2Result4.projectSupportsCollaboratorRoles(stateFromStores);
  }
  const tmp2Result5 = tmp2(stateFromStores[28]);
  const conjureProjectAccessSettings = tmp2Result5.getConjureProjectAccessSettings(flags);
  const isGuildCollaboration = conjureProjectAccessSettings.isGuildCollaboration;
  let tmp33 = null != stateFromStores;
  const isPublic = conjureProjectAccessSettings.isPublic;
  if (tmp33) {
    tmp33 = trimmed !== tmp12;
  }
  let closure_27 = tmp33;
  let tmp34 = result;
  if (tmp34) {
    let num2;
    if (tmp14 != null) {
      num2 = tmp14.flags;
    }
    if (num2 == null) {
      flags = undefined;
      if (stateFromStores != null) {
        flags = stateFromStores.flags;
      }
      num2 = flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    tmp34 = flags !== num2;
  }
  let closure_28 = tmp34;
  let tmp36 = result1;
  if (tmp36) {
    let roleIds;
    const haveSameRoleIds = tmp2(tmp3[29]).haveSameRoleIds;
    tmp2(stateFromStores[29]);
    if (tmp14 != null) {
      roleIds = tmp14.roleIds;
    }
    if (roleIds == null) {
      roleIds = prop;
    }
    tmp36 = !haveSameRoleIds(first1, roleIds);
  }
  let closure_29 = tmp36;
  let closure_30 = tmp39;
  let tmp40 = tmp39 || conjureLiveReloadSetting.changed || conjureSmartContextSetting.changed || conjureRequireHostApprovalSetting.changed;
  let closure_31 = tmp40;
  const callback = obj5.useCallback((arg0) => {
    closure_15(arg0);
    closure_22(null);
    closure_23(null);
  }, []);
  let closure_32 = obj5.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp = closure_17((arg0) => {
      let tmp2;
      if (closure_1) {
        tmp2 = arg0 | tmp;
      } else {
        tmp2 = arg0 & ~tmp;
      }
      return tmp2;
    });
    let tmp2 = closure_23(null);
  }, []);
  const callback1 = obj5.useCallback((items) => {
    set = new Set(items);
    closure_19(set);
    closure_23(null);
  }, []);
  const items2 = [guild_id, callback1, first1];
  const callback2 = obj5.useCallback(() => {
    let obj2;
    if (null != guild_id) {
      const obj = { content: authStore(closure_16, obj2), key: ConjureCollaboratorRolesSheet_str, stackingBehavior: "stack" };
      obj2 = { guildId: tmp, initialSelectedRoleIds: first1, onSave: callback1 };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      showActionSheet(obj);
    }
  }, items2);
  const items3 = [flags, tmp34, guild_id, commit, changes, tmp40, save, save2, save3, tmp39, isGuildCollaboration, tmp33, stateFromStores, projectId, tmp36, first2, first1, trimmed];
  let tmp45 = save3;
  let obj6 = { style: tmp.content, children: items4 };
  let tmp47 = conjureRequireHostApprovalSetting;
  const callback3 = obj5.useCallback(conjureLiveReloadSetting(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let items;
    let obj6;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let str;
        c4 = 2;
        if (0 === guild_id) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (null != stateFromStores) {
              const tmp94 = closure_31;
              if (tmp94) {
                const tmp36 = first2;
                if (!tmp36) {
                  let result = null;
                  if (closure_27) {
                    const obj3 = tmp(stateFromStores[30]);
                    result = obj3.conjureProjectNameError(trimmed);
                  }
                  if (null != result) {
                    closure_22(result);
                    c4 = 3;
                    return { value: "project", done: true };
                  } else {
                    const obj5 = {};
                    const merged = Object.assign(changes);
                    if (closure_27) {
                      obj5.name = trimmed;
                    }
                    let tmp43 = closure_28;
                    if (tmp43) {
                      obj5.flags = flags;
                    }
                    let tmp45 = closure_29;
                    if (tmp45) {
                      const _Array = Array;
                      const arr = Array.from(first1);
                      obj5.collaborator_role_ids = arr.sort();
                    }
                    let tmp47 = null == tmp93.guild_id && null != guild_id;
                    if (tmp47) {
                      if (!tmp45) {
                        if (tmp43) {
                          tmp43 = isGuildCollaboration;
                        }
                        tmp45 = tmp43;
                      }
                      tmp47 = tmp45;
                    }
                    if (tmp47) {
                      obj5.guild_id = guild_id;
                    }
                    closure_21(true);
                    closure_23(null);
                    closure_24(null);
                    c3 = 2;
                    const tmp56 = closure_30;
                    if (tmp56) {
                      guild_id = 3;
                      c4 = 1;
                      const obj7 = { value: obj6.updateProjectSettings(tmp, obj5), done: false };
                      obj6 = tmp(stateFromStores[31]);
                      return obj7;
                    }
                  }
                }
              }
            }
            c4 = 3;
            return { value: null, done: true };
          }
        } else if (1 === guild_id) {
          c3 = 0;
          closure_128_21(false);
          throw stateFromStores;
        } else if (2 === guild_id) {
          const intl = tmp(stateFromStores[15]).intl;
          closure_128_23(intl.string(guild_id(stateFromStores[16])["9JPr8h"]));
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
          return { value: "project", done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_21(false);
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_128_13(closure_128_25);
          const obj = { flags: closure_128_16, roleIds: items };
          items = [];
          HermesBuiltin.arraySpread(items, closure_128_18, 0);
          closure_128_14(obj);
          closure_128_7();
        }
        if (closure_128_4()) {
          let tmp69;
          if (!closure_128_9()) {
            const intl3 = tmp(stateFromStores[15]).intl;
            closure_128_24(intl3.string(guild_id(stateFromStores[16])["9JPr8h"]));
            tmp69 = "experimental";
          } else {
            tmp69 = null;
          }
          str = tmp69;
        } else {
          const intl2 = tmp(stateFromStores[15]).intl;
          closure_128_23(intl2.string(guild_id(stateFromStores[16]).XzkNBw));
          str = "project";
        }
        c3 = 0;
        closure_128_21(false);
        c4 = 3;
        const obj9 = { value: str, done: true };
        return obj9;
      } catch (tmp85) {
        stateFromStores = tmp85;
        if (0 === c3) {
          c4 = 3;
          throw tmp85;
        } else if (1 === tmp87) {
          guild_id = 1;
        } else {
          guild_id = 2;
        }
      }
    }
  }), items3);
  let obj7 = {
    iconURL: tmp7.iconURL,
    onIconChange(arg0) {
      closure_5.setIcon(arg0);
      closure_23(null);
    },
    name: str2,
    nameError: tmp23,
    onNameChange: callback,
    description: tmp7.description,
    onDescriptionChange(description) {
      closure_5.setDescription(description);
      closure_23(null);
    },
    disabled: first2
  };
  items4 = [conjureRequireHostApprovalSetting(tmp2(tmp3[32]).ConjureAppIdentitySection, obj7), , , , , ];
  let tmp47Result = null;
  if (result) {
    let obj8 = { hasIcons: false, children: tmp47(TableCheckboxRow, obj9) };
    const TableRowGroup = tmp2(tmp3[21]).TableRowGroup;
    obj9 = {
      label: intl.string(tmp6(tmp3[16]).ujIxRm),
      subLabel: intl2.string(tmp6(tmp3[16]).gT8zk1),
      checked: isPublic,
      disabled: first2,
      onPress(arg0) {
          return closure_32(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
        }
    };
    TableCheckboxRow = tmp2(tmp3[22]).TableCheckboxRow;
    intl = tmp2(tmp3[15]).intl;
    intl2 = tmp2(tmp3[15]).intl;
    tmp47Result = tmp47(TableRowGroup, obj8);
  }
  items4[1] = tmp47Result;
  let tmp47Result6 = null;
  if (result) {
    tmp47Result6 = null;
    if (tmp30) {
      const obj10 = { hasIcons: false, children: tmp47(TableCheckboxRow2, obj11) };
      const TableRowGroup2 = tmp2(tmp3[21]).TableRowGroup;
      obj11 = {
        label: intl3.string(require("module_3830").lVvR4E),
        subLabel: intl4.string(require("module_3830").SQZGoV),
        checked: isGuildCollaboration,
        disabled: first2,
        onPress(arg0) {
              return closure_32(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      TableCheckboxRow2 = tmp2(tmp3[22]).TableCheckboxRow;
      intl3 = tmp2(tmp3[15]).intl;
      intl4 = tmp2(tmp3[15]).intl;
      tmp47Result6 = tmp47(TableRowGroup2, obj10);
    }
  }
  items4[2] = tmp47Result6;
  let tmp47Result7 = null;
  if (conjureLiveReloadSetting.available) {
    const obj12 = { hasIcons: false, children: tmp47(TableCheckboxRow3, obj13) };
    const TableRowGroup3 = tmp2(tmp3[21]).TableRowGroup;
    obj13 = {
      label: intl5.string(require("module_3830").eEo0ye),
      subLabel: null,
      checked: null,
      disabled: first2,
      onPress(arg0) {
          conjureLiveReloadSetting.setChecked(arg0);
          closure_23(null);
        }
    };
    TableCheckboxRow3 = tmp2(tmp3[22]).TableCheckboxRow;
    intl5 = tmp2(tmp3[15]).intl;
    ({ description: obj16.subLabel, checked: obj16.checked } = conjureLiveReloadSetting);
    tmp47Result7 = tmp47(TableRowGroup3, obj12);
  }
  items4[3] = tmp47Result7;
  let tmp47Result8 = null;
  if (result1) {
    const TableRowGroup4 = tmp2(tmp3[21]).TableRowGroup;
    const obj14 = { label: intl6.string(require("module_3830")["pO3+p5"]), subLabel: intl7.string(require("module_3830")["9MdtK9"]), arrow: true, disabled: first2 || !isGuildCollaboration, accessibilityHint: stringResult, onPress: callback2 };
    const TableRow = tmp2(tmp3[33]).TableRow;
    intl6 = tmp2(tmp3[15]).intl;
    intl7 = tmp2(tmp3[15]).intl;
    stringResult = undefined;
    if (!isGuildCollaboration) {
      const intl8 = tmp2(tmp3[15]).intl;
      stringResult = intl8.string(tmp6(tmp3[16]).nZw5r9);
    }
    const obj15 = { hasIcons: false, children: tmp47(TableRow, obj14) };
    tmp47Result8 = tmp47(TableRowGroup4, obj15);
  }
  items4[4] = tmp47Result8;
  let tmp47Result9 = null;
  if (null != tmp25) {
    const obj17 = { accessibilityRole: "alert", children: tmp47(tmp2(stateFromStores[17]).Text, obj18) };
    obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp25 };
    tmp47Result9 = tmp47(tmp46, obj17);
  }
  items4[5] = tmp47Result9;
  const obj19 = { fields: tmp45(changes, obj6), experimentalFields: tmp45(changes, obj20), canSave: tmp40, saving: first2, submit: callback3 };
  obj20 = { style: tmp.content, children: items6 };
  const obj21 = { hasIcons: false, children: items5 };
  const TableRowGroup5 = tmp2(tmp3[21]).TableRowGroup;
  const obj22 = {
    label: intl9.string(require("module_3830")["4liZ45"]),
    subLabel: intl10.string(require("module_3830").I5cl7p),
    checked: conjureSmartContextSetting.checked,
    disabled: first2,
    onPress(arg0) {
      conjureSmartContextSetting.setChecked(arg0);
      closure_24(null);
    }
  };
  const TableCheckboxRow4 = tmp2(tmp3[22]).TableCheckboxRow;
  intl9 = tmp2(tmp3[15]).intl;
  intl10 = tmp2(tmp3[15]).intl;
  items5 = [tmp47(TableCheckboxRow4, obj22), ];
  const obj23 = {
    label: intl11.string(require("module_3830").mpjaVm),
    subLabel: intl12.string(require("module_3830")["2PxChh"]),
    checked: conjureRequireHostApprovalSetting.checked,
    disabled: first2,
    onPress(arg0) {
      conjureRequireHostApprovalSetting.setChecked(arg0);
      closure_24(null);
    }
  };
  const TableCheckboxRow5 = tmp2(tmp3[22]).TableCheckboxRow;
  intl11 = tmp2(tmp3[15]).intl;
  intl12 = tmp2(tmp3[15]).intl;
  items5[1] = tmp47(TableCheckboxRow5, obj23);
  items6 = [tmp45(TableRowGroup5, obj21), , ];
  const obj24 = { projectId };
  items6[1] = tmp47(tmp2(stateFromStores[34]).ConjureAllowedHostsSetting, obj24);
  let tmp47Result10 = null;
  if (null != tmp27) {
    const obj25 = { accessibilityRole: "alert", children: tmp47(tmp2(stateFromStores[17]).Text, obj26) };
    obj26 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp27 };
    tmp47Result10 = tmp47(tmp46, obj25);
  }
  items6[2] = tmp47Result10;
  if (tmp40) {
    tmp40 = "" !== trimmed;
  }
  return obj19;
};
