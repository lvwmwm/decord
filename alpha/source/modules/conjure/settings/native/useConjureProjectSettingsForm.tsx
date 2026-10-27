// Module ID: 12151
// Function ID: 12152
// Name: useConjureProjectSettingsForm
// Dependencies: [32, 19, 17, 4877, 1087, 21, 4971, 587, 558, 576, 504, 6774, 5210, 1128, 3830, 5234, 7248, 8934, 7145, 6987, 6900, 7298, 12152, 12161, 6903, 12166, 2]

// Module 12151 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5210 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore_mod from "GuildRoleStore" /* 4877 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let _require, hideActionSheetResult, set;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let GuildRoleStore = GuildRoleStore_mod;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const ConjureCollaboratorRolesSheet_str = "ConjureCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, roleListFooter: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles(obj);
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: size };
  size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleColorCircle(color) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_12(color.color);
  if (cResult[0] !== tmp2.circle) {
    const obj2 = { style: tmp2.circle };
    const tmp6 = metroImportAll(View, obj2);
    cResult[0] = tmp2.circle;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function RoleColorCircle(color) {
  const obj = { style: closure_12(color.color).circle };
  return metroImportAll(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureCollaboratorRolesSheet(guildId) {
  let closure_5;
  let first;
  let first1;
  let obj3;
  let onSave;
  let roleLabel;
  let tmp10;
  let tmp15;
  let tmp7;
  let tmp8;
  let tmp = guildId;
  let obj = guildId(onSave[9]);
  const cResult = obj.c(40);
  guildId = guildId.guildId;
  const initialSelectedRoleIds = guildId.initialSelectedRoleIds;
  onSave = guildId.onSave;
  const tmp4 = closure_11();
  _slicedToArray = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = S;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = S;
  } else {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(onSave[10]);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] !== initialSelectedRoleIds) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    cResult[4] = initialSelectedRoleIds;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
  }
  [first1, View] = first1.useState(tmp10);
  [tmp15, r10054] = _slicedToArray(first1.useState(""), 2);
  const tmp14 = _slicedToArray(first1.useState(""), 2);
  if (cResult[6] !== tmp15) {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    cResult[6] = tmp15;
    cResult[7] = obj3.toLocaleLowerCase();
    const toLocaleLowerCaseResult = obj3.toLocaleLowerCase();
  } else {
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
  }
  GuildRoleStore = tmp16;
  if (cResult[8] === tmp16) {
    let tmp19;
    class S {
      constructor() {
        return closure_6.getSortedRoles(guildId);
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5(() => { /* body not rendered: F148915 */ });
          return;
        }
      }
      cResult[11] = X;
      tmp19 = X;
    } else {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5(() => { /* body not rendered: F148915 */ });
          return;
        }
      }
    }
    X = tmp19;
    if (cResult[12] === onSave) {
      class X {
        constructor(arg0, arg1) {
          closure_0 = guildId;
          closure_1 = arg1;
          tmp = closure_5(() => { /* body not rendered: F148915 */ });
          return;
        }
      }
      if (cResult[15] !== first1.size) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { /* body not rendered: F148915 */ });
            return;
          }
        }
        let formatToPlainString = tmp22.formatToPlainString;
        let obj2 = { count: first1.size, max: null };
        const g5I05P = initialSelectedRoleIds(tmp2[14]).g5I05P;
        class M {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
        let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
        cResult[15] = first1.size;
        cResult[16] = formatToPlainStringResult;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { /* body not rendered: F148915 */ });
            return;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { /* body not rendered: F148915 */ });
            return;
          }
        }
        cResult[17] = obj5.string(initialSelectedRoleIds(onSave[14]).un99lK);
        obj5.string(initialSelectedRoleIds(onSave[14]).un99lK);
        class M {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { /* body not rendered: F148915 */ });
            return;
          }
        }
      }
      if (cResult[18] !== tmp21) {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { /* body not rendered: F148915 */ });
            return;
          }
        }
        let obj4 = { variant: "text-xs/normal", color: "text-muted", children: tmp21 };
        cResult[18] = tmp21;
        const tmp28 = closure_8(tmp(onSave[15]).Text, obj4);
        class M {
          constructor() {
            set = new Set(closure_4);
            tmp2 = onSave(set);
            obj = closure_1(closure_2[12]);
            hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
            return;
          }
        }
        cResult[19] = tmp28;
      } else {
        class X {
          constructor(arg0, arg1) {
            closure_0 = guildId;
            closure_1 = arg1;
            tmp = closure_5(() => { /* body not rendered: F148915 */ });
            return;
          }
        }
      }
      class M {
        constructor() {
          set = new Set(closure_4);
          tmp2 = onSave(set);
          obj = closure_1(closure_2[12]);
          hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
          return;
        }
      }
      const obj6 = { style: tmp4.roleListFooter, children: tmp27 };
      cResult[20] = tmp4.roleListFooter;
      cResult[21] = tmp27;
      cResult[22] = closure_8(View, obj6);
      const tmp32 = closure_8(View, obj6);
    }
    class M {
      constructor() {
        set = new Set(closure_4);
        tmp2 = onSave(set);
        obj = closure_1(closure_2[12]);
        hideActionSheetResult = obj.hideActionSheet(ConjureCollaboratorRolesSheet);
        return;
      }
    }
    cResult[12] = onSave;
    cResult[13] = first1;
    cResult[14] = M;
  }
  const tmp18 = stateFromStoresArray;
  if ("" !== tmp16) {
    class X {
      constructor(arg0, arg1) {
        closure_0 = guildId;
        closure_1 = arg1;
        tmp = closure_5(() => { /* body not rendered: F148915 */ });
        return;
      }
    }
  }
  cResult[8] = tmp16;
  cResult[9] = stateFromStoresArray;
  cResult[10] = tmp18;
}) : (function ConjureCollaboratorRolesSheet(guildId) {
  let ActionSheetHeaderPressableText;
  let BottomSheetTitleHeader;
  let Text;
  let closure_6;
  let first;
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
  let roleLabel;
  let str;
  let tmp13Result;
  let tmp8;
  guildId = guildId.guildId;
  ({ initialSelectedRoleIds: importDefault, onSave } = guildId);
  first = undefined;
  closure_6 = undefined;
  let tmp = closure_11();
  _slicedToArray = tmp;
  let tmp3 = onSave;
  let obj = guildId(onSave[10]);
  let items = [closure_6];
  const items1 = [guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => GuildRoleStore.getSortedRoles(guildId), items1);
  [first, closure_6] = stateFromStoresArray.useState(() => {
    set = new Set(importDefault);
    return set;
  });
  let tmp7 = _slicedToArray(stateFromStoresArray.useState(""), 2);
  [str, tmp8] = tmp7;
  const trimmed = str.trim();
  let toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  let c7 = toLocaleLowerCaseResult;
  const items2 = [toLocaleLowerCaseResult, stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
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
  let closure_8 = stateFromStoresArray.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    closure_6((size) => {
      if (closure_1) {
        if (size.size >= guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
  const callback = stateFromStoresArray.useCallback(() => {
    set = new Set(first);
    onSave(set);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(ConjureCollaboratorRolesSheet_str);
  }, items3);
  let intl = guildId(onSave[13]).intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj2 = { count: first.size, max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
  const g5I05P = require("module_3830").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_3830").un99lK), footer: closure_8(first, obj4), header: closure_8(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[21]).ActionSheet;
  intl2 = guildId(onSave[13]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_8(guildId(onSave[15]).Text, { variant: "text-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_3830")["pO3+p5"]), trailing: closure_8(ActionSheetHeaderPressableText, obj6) };
  BottomSheetTitleHeader = guildId(onSave[16]).BottomSheetTitleHeader;
  intl3 = guildId(onSave[13]).intl;
  obj6 = { label: intl4.string(guildId(onSave[13]).t.i4jeWR), onPress: callback };
  ActionSheetHeaderPressableText = guildId(onSave[17]).ActionSheetHeaderPressableText;
  intl4 = guildId(onSave[13]).intl;
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: intl5.string(guildId(onSave[13]).t.Sojqsr), placeholder: intl6.string(guildId(onSave[13]).t.Sojqsr), onChange: tmp8 };
  const SearchBar = guildId(onSave[18]).SearchBar;
  intl5 = guildId(onSave[13]).intl;
  intl6 = guildId(onSave[13]).intl;
  items4 = [closure_8(SearchBar, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: tmp13Result };
  const tmp12 = closure_9;
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: closure_8(Text, obj10) };
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(guildId(tmp3[13]).t.V6nAfF) };
    Text = tmp2(tmp3[15]).Text;
    intl7 = tmp2(tmp3[13]).intl;
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
            tmp3 = tmp.size >= guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          const colorStrings = children.colorStrings;
          let primaryColor;
          const obj = { style: roleLabel.roleLabel, children: items };
          const TableCheckboxRow = guildId(onSave[20]).TableCheckboxRow;
          const tmp7 = closure_1_9;
          const tmp8 = first;
          const tmp9 = closure_1_13;
          if (colorStrings != null) {
            primaryColor = colorStrings.primaryColor;
          }
          if (primaryColor == null) {
            primaryColor = children.colorString;
          }
          if (primaryColor == null) {
            primaryColor = c7;
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
          items = [closure_8(tmp9, { color: primaryColor }), ];
          const obj3 = { variant: "text-md/medium", children: children.name };
          items[1] = closure_8(guildId(onSave[15]).Text, obj3);
          formatToPlainStringResult = undefined;
          if (tmp3) {
            const intl = guildId(onSave[13]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj4 = { max: guildId(onSave[11]).MAX_PROJECT_COLLABORATOR_ROLES };
            const prop = require("module_3830")["dH7+/Z"];
            formatToPlainStringResult = formatToPlainString(prop, obj4);
          }
          return closure_8(TableCheckboxRow, obj2, children.id);
        })
    };
    const TableRowGroup = tmp2(tmp3[19]).TableRowGroup;
    tmp13Result = tmp13(TableRowGroup, obj11);
  }
  items4[1] = closure_8(first, obj8);
  return tmp12(ActionSheet, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectSettingsForm(projectId, arg1) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let canSave;
  let closure_0;
  let description;
  let experimentalError;
  let handleDescriptionChange;
  let handleFlagChange;
  let handleIconChange;
  let handleLiveReloadChange;
  let handleNameChange;
  let handleRequireHostApprovalChange;
  let handleRoleSelectionChange;
  let handleSmartContextChange;
  let hostApproval;
  let iconURL;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let isGuildCollaboration;
  let isPublic;
  let items;
  let items1;
  let items2;
  let liveReload;
  let name;
  let nameChanged;
  let nameError;
  let obj17;
  let obj19;
  let obj21;
  let obj3;
  let obj6;
  let saveError;
  let saving;
  let selectedRoleIds;
  let smartContext;
  let stringResult4;
  let submit;
  let supportsCollaboration;
  let supportsCollaboratorRoles;
  let supportsVisibility;
  _require = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(76);
  const tmp4 = closure_11();
  const tmp6 = selectedRoleIds(handleFlagChange[22])(projectId, arg1);
  ({ iconURL, description, liveReload, smartContext, hostApproval, name, nameError, nameChanged, isPublic, isGuildCollaboration, selectedRoleIds } = tmp6);
  ({ supportsVisibility, supportsCollaboration, supportsCollaboratorRoles, saving, saveError, experimentalError, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleFlagChange } = tmp6);
  ({ handleLiveReloadChange, handleRoleSelectionChange } = tmp6);
  ({ handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp6);
  if (cResult[0] === arg1) {
    if (cResult[1] === handleRoleSelectionChange) {
      let tmp7;
      if (cResult[2] === selectedRoleIds) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === description) {
        if (cResult[5] === handleDescriptionChange) {
          if (cResult[6] === handleIconChange) {
            if (cResult[7] === handleNameChange) {
              if (cResult[8] === iconURL) {
                if (cResult[9] === name) {
                  if (cResult[10] === nameError) {
                    let tmp8;
                    if (cResult[11] === saving) {
                      tmp8 = cResult[12];
                    }
                    if (cResult[13] === handleFlagChange) {
                      if (cResult[14] === isPublic) {
                        if (cResult[15] === saving) {
                          let tmp11;
                          if (cResult[16] === supportsVisibility) {
                            tmp11 = cResult[17];
                          }
                          if (cResult[18] === handleFlagChange) {
                            if (cResult[19] === isGuildCollaboration) {
                              if (cResult[20] === saving) {
                                if (cResult[21] === supportsCollaboration) {
                                  let tmp14;
                                  if (cResult[22] === supportsVisibility) {
                                    tmp14 = cResult[23];
                                  }
                                  if (cResult[24] === handleLiveReloadChange) {
                                    if (cResult[25] === liveReload.available) {
                                      if (cResult[26] === liveReload.checked) {
                                        if (cResult[27] === liveReload.description) {
                                          let tmp17;
                                          if (cResult[28] === saving) {
                                            tmp17 = cResult[29];
                                          }
                                          if (cResult[30] === tmp7) {
                                            if (cResult[31] === isGuildCollaboration) {
                                              if (cResult[32] === saving) {
                                                let tmp20;
                                                let tmp24;
                                                if (cResult[33] === supportsCollaboratorRoles) {
                                                  tmp20 = cResult[34];
                                                }
                                                if (cResult[35] !== saveError) {
                                                  let tmp25 = null;
                                                  if (null != saveError) {
                                                    let obj2 = { accessibilityRole: "alert", children: closure_8(tmp(tmp2[15]).Text, obj3) };
                                                    obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
                                                    tmp25 = closure_8(View, obj2);
                                                  }
                                                  cResult[35] = saveError;
                                                  cResult[36] = tmp25;
                                                  tmp24 = tmp25;
                                                } else {
                                                  tmp24 = cResult[36];
                                                }
                                                if (cResult[37] === tmp4.content) {
                                                  if (cResult[38] === tmp8) {
                                                    if (cResult[39] === tmp11) {
                                                      if (cResult[40] === tmp14) {
                                                        if (cResult[41] === tmp17) {
                                                          if (cResult[42] === tmp20) {
                                                            let tmp28;
                                                            let tmp34;
                                                            let tmp33;
                                                            if (cResult[43] === tmp24) {
                                                              tmp28 = cResult[44];
                                                            }
                                                            const _Symbol = Symbol;
                                                            const content = tmp4.content;
                                                            if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                                              const intl9 = tmp(tmp2[13]).intl;
                                                              const stringResult = intl9.string(selectedRoleIds(handleFlagChange[14])["4liZ45"]);
                                                              const intl10 = tmp(tmp2[13]).intl;
                                                              const stringResult1 = intl10.string(selectedRoleIds(handleFlagChange[14]).I5cl7p);
                                                              cResult[45] = stringResult1;
                                                              cResult[46] = stringResult;
                                                              tmp34 = stringResult;
                                                              tmp33 = stringResult1;
                                                            } else {
                                                              tmp33 = cResult[45];
                                                              tmp34 = cResult[46];
                                                            }
                                                            if (cResult[47] === handleSmartContextChange) {
                                                              if (cResult[48] === saving) {
                                                                let tmp37;
                                                                let tmp41;
                                                                let tmp40;
                                                                if (cResult[49] === smartContext.checked) {
                                                                  tmp37 = cResult[50];
                                                                }
                                                                const _Symbol2 = Symbol;
                                                                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                                                  const intl11 = tmp(tmp2[13]).intl;
                                                                  const stringResult2 = intl11.string(selectedRoleIds(handleFlagChange[14]).mpjaVm);
                                                                  const intl12 = tmp(tmp2[13]).intl;
                                                                  const stringResult3 = intl12.string(selectedRoleIds(handleFlagChange[14])["2PxChh"]);
                                                                  cResult[51] = stringResult2;
                                                                  cResult[52] = stringResult3;
                                                                  tmp41 = stringResult3;
                                                                  tmp40 = stringResult2;
                                                                } else {
                                                                  tmp40 = cResult[51];
                                                                  tmp41 = cResult[52];
                                                                }
                                                                if (cResult[53] === handleRequireHostApprovalChange) {
                                                                  if (cResult[54] === hostApproval.checked) {
                                                                    let tmp44;
                                                                    if (cResult[55] === saving) {
                                                                      tmp44 = cResult[56];
                                                                    }
                                                                    if (cResult[57] === tmp37) {
                                                                      let tmp47;
                                                                      let tmp50;
                                                                      let tmp53;
                                                                      if (cResult[58] === tmp44) {
                                                                        tmp47 = cResult[59];
                                                                      }
                                                                      if (cResult[60] !== projectId) {
                                                                        const obj4 = { projectId };
                                                                        const tmp52 = closure_8(tmp(handleFlagChange[25]).ConjureAllowedHostsSetting, obj4);
                                                                        cResult[60] = projectId;
                                                                        cResult[61] = tmp52;
                                                                        tmp50 = tmp52;
                                                                      } else {
                                                                        tmp50 = cResult[61];
                                                                      }
                                                                      if (cResult[62] !== experimentalError) {
                                                                        let tmp54 = null;
                                                                        if (null != experimentalError) {
                                                                          const obj5 = { accessibilityRole: "alert", children: closure_8(tmp(handleFlagChange[15]).Text, obj6) };
                                                                          obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
                                                                          tmp54 = closure_8(View, obj5);
                                                                        }
                                                                        cResult[62] = experimentalError;
                                                                        cResult[63] = tmp54;
                                                                        tmp53 = tmp54;
                                                                      } else {
                                                                        tmp53 = cResult[63];
                                                                      }
                                                                      if (cResult[64] === tmp4.content) {
                                                                        if (cResult[65] === tmp47) {
                                                                          if (cResult[66] === tmp50) {
                                                                            let tmp57;
                                                                            if (cResult[67] === tmp53) {
                                                                              tmp57 = cResult[68];
                                                                            }
                                                                            if (cResult[69] === canSave) {
                                                                              if (cResult[70] === tmp57) {
                                                                                if (cResult[71] === tmp28) {
                                                                                  if (cResult[72] === nameChanged) {
                                                                                    if (cResult[73] === saving) {
                                                                                      let tmp61;
                                                                                      if (cResult[74] === submit) {
                                                                                        tmp61 = cResult[75];
                                                                                      }
                                                                                      return tmp61;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            const obj7 = { fields: tmp28, experimentalFields: tmp57, canSave, saving, nameChanged, submit };
                                                                            cResult[69] = canSave;
                                                                            cResult[70] = tmp57;
                                                                            cResult[71] = tmp28;
                                                                            cResult[72] = nameChanged;
                                                                            cResult[73] = saving;
                                                                            cResult[74] = submit;
                                                                            cResult[75] = obj7;
                                                                            tmp61 = obj7;
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj9 = { style: content, children: items };
                                                                      items = [tmp47, tmp50, tmp53];
                                                                      const tmp60 = closure_9(View, obj9);
                                                                      cResult[64] = tmp4.content;
                                                                      cResult[65] = tmp47;
                                                                      cResult[66] = tmp50;
                                                                      cResult[67] = tmp53;
                                                                      cResult[68] = tmp60;
                                                                      tmp57 = tmp60;
                                                                    }
                                                                    const obj10 = { hasIcons: false, children: items1 };
                                                                    items1 = [tmp37, tmp44];
                                                                    const tmp49 = closure_9(tmp(handleFlagChange[19]).TableRowGroup, obj10);
                                                                    cResult[57] = tmp37;
                                                                    cResult[58] = tmp44;
                                                                    cResult[59] = tmp49;
                                                                    tmp47 = tmp49;
                                                                  }
                                                                }
                                                                const obj11 = { label: tmp40, subLabel: tmp41, checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
                                                                const tmp46 = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj11);
                                                                cResult[53] = handleRequireHostApprovalChange;
                                                                cResult[54] = hostApproval.checked;
                                                                cResult[55] = saving;
                                                                cResult[56] = tmp46;
                                                                tmp44 = tmp46;
                                                              }
                                                            }
                                                            const obj12 = { label: tmp34, subLabel: tmp33, checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
                                                            const tmp39 = closure_8(tmp(handleFlagChange[20]).TableCheckboxRow, obj12);
                                                            cResult[47] = handleSmartContextChange;
                                                            cResult[48] = saving;
                                                            cResult[49] = smartContext.checked;
                                                            cResult[50] = tmp39;
                                                            tmp37 = tmp39;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                                const obj13 = { style: tmp4.content, children: items2 };
                                                items2 = [tmp8, tmp11, tmp14, tmp17, tmp20, tmp24];
                                                const tmp31 = closure_9(View, obj13);
                                                cResult[37] = tmp4.content;
                                                cResult[38] = tmp8;
                                                cResult[39] = tmp11;
                                                cResult[40] = tmp14;
                                                cResult[41] = tmp17;
                                                cResult[42] = tmp20;
                                                cResult[43] = tmp24;
                                                cResult[44] = tmp31;
                                                tmp28 = tmp31;
                                              }
                                            }
                                          }
                                          let tmp22Result = null;
                                          if (supportsCollaboratorRoles) {
                                            const TableRowGroup4 = tmp(tmp2[19]).TableRowGroup;
                                            const obj14 = { label: intl6.string(selectedRoleIds(handleFlagChange[14])["pO3+p5"]), subLabel: intl7.string(selectedRoleIds(handleFlagChange[14])["9MdtK9"]), arrow: true, disabled: saving || !isGuildCollaboration, accessibilityHint: stringResult4, onPress: tmp7 };
                                            const TableRow = tmp(tmp2[24]).TableRow;
                                            intl6 = tmp(tmp2[13]).intl;
                                            intl7 = tmp(tmp2[13]).intl;
                                            stringResult4 = undefined;
                                            if (!isGuildCollaboration) {
                                              const intl8 = tmp(tmp2[13]).intl;
                                              stringResult4 = intl8.string(tmp5(tmp2[14]).nZw5r9);
                                            }
                                            const obj15 = { hasIcons: false, children: closure_8(TableRow, obj14) };
                                            tmp22Result = tmp22(TableRowGroup4, obj15);
                                          }
                                          cResult[30] = tmp7;
                                          cResult[31] = isGuildCollaboration;
                                          cResult[32] = saving;
                                          cResult[33] = supportsCollaboratorRoles;
                                          cResult[34] = tmp22Result;
                                          tmp20 = tmp22Result;
                                        }
                                      }
                                    }
                                  }
                                  let tmp18 = null;
                                  if (liveReload.available) {
                                    const obj16 = { hasIcons: false, children: closure_8(TableCheckboxRow3, obj17) };
                                    const TableRowGroup3 = tmp(tmp2[19]).TableRowGroup;
                                    obj17 = { label: intl5.string(selectedRoleIds(handleFlagChange[14]).eEo0ye), subLabel: null, checked: null, disabled: saving, onPress: handleLiveReloadChange };
                                    TableCheckboxRow3 = tmp(tmp2[20]).TableCheckboxRow;
                                    intl5 = tmp(tmp2[13]).intl;
                                    ({ description: obj8.subLabel, checked: obj8.checked } = liveReload);
                                    tmp18 = closure_8(TableRowGroup3, obj16);
                                  }
                                  cResult[24] = handleLiveReloadChange;
                                  cResult[25] = liveReload.available;
                                  cResult[26] = liveReload.checked;
                                  cResult[27] = liveReload.description;
                                  cResult[28] = saving;
                                  cResult[29] = tmp18;
                                  tmp17 = tmp18;
                                }
                              }
                            }
                          }
                          let tmp15 = null;
                          if (supportsVisibility) {
                            tmp15 = null;
                            if (supportsCollaboration) {
                              const obj18 = { hasIcons: false, children: closure_8(TableCheckboxRow2, obj19) };
                              const TableRowGroup2 = tmp(tmp2[19]).TableRowGroup;
                              obj19 = {
                                label: intl3.string(selectedRoleIds(handleFlagChange[14]).lVvR4E),
                                subLabel: intl4.string(selectedRoleIds(handleFlagChange[14]).SQZGoV),
                                checked: isGuildCollaboration,
                                disabled: saving,
                                onPress(arg0) {
                                                              return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
                                                            }
                              };
                              TableCheckboxRow2 = tmp(tmp2[20]).TableCheckboxRow;
                              intl3 = tmp(tmp2[13]).intl;
                              intl4 = tmp(tmp2[13]).intl;
                              tmp15 = closure_8(TableRowGroup2, obj18);
                            }
                          }
                          cResult[18] = handleFlagChange;
                          cResult[19] = isGuildCollaboration;
                          cResult[20] = saving;
                          cResult[21] = supportsCollaboration;
                          cResult[22] = supportsVisibility;
                          cResult[23] = tmp15;
                          tmp14 = tmp15;
                        }
                      }
                    }
                    let tmp12 = null;
                    if (supportsVisibility) {
                      const obj20 = { hasIcons: false, children: closure_8(TableCheckboxRow, obj21) };
                      const TableRowGroup = tmp(tmp2[19]).TableRowGroup;
                      obj21 = {
                        label: intl.string(selectedRoleIds(handleFlagChange[14]).ujIxRm),
                        subLabel: intl2.string(selectedRoleIds(handleFlagChange[14]).gT8zk1),
                        checked: isPublic,
                        disabled: saving,
                        onPress(arg0) {
                                              return handleFlagChange(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
                                            }
                      };
                      TableCheckboxRow = tmp(tmp2[20]).TableCheckboxRow;
                      intl = tmp(tmp2[13]).intl;
                      intl2 = tmp(tmp2[13]).intl;
                      tmp12 = closure_8(TableRowGroup, obj20);
                    }
                    cResult[13] = handleFlagChange;
                    cResult[14] = isPublic;
                    cResult[15] = saving;
                    cResult[16] = supportsVisibility;
                    cResult[17] = tmp12;
                    tmp11 = tmp12;
                  }
                }
              }
            }
          }
        }
      }
      const obj41 = { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: saving };
      const tmp10 = closure_8(tmp(handleFlagChange[23]).ConjureAppIdentitySection, obj41);
      cResult[4] = description;
      cResult[5] = handleDescriptionChange;
      cResult[6] = handleIconChange;
      cResult[7] = handleNameChange;
      cResult[8] = iconURL;
      cResult[9] = name;
      cResult[10] = nameError;
      cResult[11] = saving;
      cResult[12] = tmp10;
      tmp8 = tmp10;
    }
  }
  const fn = function o() {
    let obj2;
    if (null != closure_0) {
      const obj = { content: metroImportAll(closure_14, obj2), key: ConjureCollaboratorRolesSheet_str, stackingBehavior: "stack" };
      const _Set = Set;
      const self = this;
      const self2 = this;
      obj2 = {
        guildId: tmp,
        initialSelectedRoleIds: set,
        onSave(arg0) {
            const items = [...arg0];
            return handleRoleSelectionChange(items);
          }
      };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      set = new Set(selectedRoleIds);
      showActionSheet(obj);
    }
  };
  cResult[0] = arg1;
  cResult[1] = handleRoleSelectionChange;
  cResult[2] = selectedRoleIds;
  cResult[3] = fn;
  tmp7 = fn;
}) : (function useConjureProjectSettingsForm(projectId, arg1) {
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let canSave;
  let closure_0;
  let description;
  let experimentalError;
  let handleDescriptionChange;
  let handleIconChange;
  let handleLiveReloadChange;
  let handleNameChange;
  let handleRequireHostApprovalChange;
  let handleRoleSelectionChange;
  let handleSmartContextChange;
  let hostApproval;
  let iconURL;
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
  let isGuildCollaboration;
  let isPublic;
  let items1;
  let items2;
  let items3;
  let liveReload;
  let name;
  let nameChanged;
  let nameError;
  let obj12;
  let obj14;
  let obj3;
  let obj37;
  let obj5;
  let obj8;
  let saveError;
  let saving;
  let selectedRoleIds;
  let smartContext;
  let stringResult;
  let submit;
  let supportsCollaboration;
  let supportsCollaboratorRoles;
  let supportsVisibility;
  _require = arg1;
  const tmp = closure_11();
  const tmp4 = selectedRoleIds(12152)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: dependencyMap, handleRoleSelectionChange } = tmp4);
  let items = [arg1, handleRoleSelectionChange, selectedRoleIds];
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, isPublic, supportsCollaboration, supportsCollaboratorRoles, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  let obj = { style: tmp.content, children: items1 };
  const callback = react.useCallback(function() {
    let obj2;
    if (null != closure_0) {
      const obj = { content: metroImportAll(closure_14, obj2), key: ConjureCollaboratorRolesSheet_str, stackingBehavior: "stack" };
      const _Set = Set;
      const self = this;
      const self2 = this;
      obj2 = {
        guildId: tmp,
        initialSelectedRoleIds: set,
        onSave(arg0) {
            const items = [...arg0];
            return handleRoleSelectionChange(items);
          }
      };
      const showActionSheet = ActionSheetActionCreators.showActionSheet;
      ActionSheetActionCreators;
      set = new Set(selectedRoleIds);
      showActionSheet(obj);
    }
  }, items);
  items1 = [closure_8(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: saving }), , , , , ];
  let tmp8Result = null;
  if (supportsVisibility) {
    let obj2 = { hasIcons: false, children: tmp8(TableCheckboxRow, obj3) };
    const TableRowGroup = tmp9(6987).TableRowGroup;
    obj3 = {
      label: intl.string(selectedRoleIds(3830).ujIxRm),
      subLabel: intl2.string(selectedRoleIds(3830).gT8zk1),
      checked: isPublic,
      disabled: saving,
      onPress(arg0) {
          return dependencyMap(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
        }
    };
    TableCheckboxRow = tmp9(6900).TableCheckboxRow;
    intl = tmp9(1128).intl;
    intl2 = tmp9(1128).intl;
    tmp8Result = tmp8(TableRowGroup, obj2);
  }
  items1[1] = tmp8Result;
  let tmp8Result6 = null;
  if (supportsVisibility) {
    tmp8Result6 = null;
    if (supportsCollaboration) {
      const obj4 = { hasIcons: false, children: closure_8(TableCheckboxRow2, obj5) };
      const TableRowGroup2 = tmp9(6987).TableRowGroup;
      obj5 = {
        label: intl3.string(selectedRoleIds(3830).lVvR4E),
        subLabel: intl4.string(selectedRoleIds(3830).SQZGoV),
        checked: isGuildCollaboration,
        disabled: saving,
        onPress(arg0) {
              return dependencyMap(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      TableCheckboxRow2 = tmp9(6900).TableCheckboxRow;
      intl3 = tmp9(1128).intl;
      intl4 = tmp9(1128).intl;
      tmp8Result6 = tmp8(TableRowGroup2, obj4);
    }
  }
  items1[2] = tmp8Result6;
  let tmp8Result7 = null;
  if (liveReload.available) {
    const obj6 = { hasIcons: false, children: closure_8(TableCheckboxRow3, obj8) };
    const TableRowGroup3 = tmp9(6987).TableRowGroup;
    obj8 = { label: intl5.string(selectedRoleIds(3830).eEo0ye), subLabel: null, checked: null, disabled: saving, onPress: handleLiveReloadChange };
    TableCheckboxRow3 = tmp9(6900).TableCheckboxRow;
    intl5 = tmp9(1128).intl;
    ({ description: obj7.subLabel, checked: obj7.checked } = liveReload);
    tmp8Result7 = tmp8(TableRowGroup3, obj6);
  }
  items1[3] = tmp8Result7;
  let tmp8Result8 = null;
  if (supportsCollaboratorRoles) {
    const TableRowGroup4 = tmp9(6987).TableRowGroup;
    const obj9 = { label: intl6.string(selectedRoleIds(3830)["pO3+p5"]), subLabel: intl7.string(selectedRoleIds(3830)["9MdtK9"]), arrow: true, disabled: saving || !isGuildCollaboration, accessibilityHint: stringResult, onPress: callback };
    const TableRow = tmp9(6903).TableRow;
    intl6 = tmp9(1128).intl;
    intl7 = tmp9(1128).intl;
    stringResult = undefined;
    if (!isGuildCollaboration) {
      const intl8 = tmp9(1128).intl;
      stringResult = intl8.string(tmp2(3830).nZw5r9);
    }
    const obj10 = { hasIcons: false, children: closure_8(TableRow, obj9) };
    tmp8Result8 = tmp8(TableRowGroup4, obj10);
  }
  items1[4] = tmp8Result8;
  let tmp8Result9 = null;
  if (null != saveError) {
    const obj11 = { accessibilityRole: "alert", children: closure_8(require("Text/Text").Text, obj12) };
    obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
    tmp8Result9 = tmp8(tmp7, obj11);
  }
  items1[5] = tmp8Result9;
  const obj13 = { fields: closure_9(View, obj), experimentalFields: closure_9(View, obj14), canSave, saving, nameChanged, submit };
  obj14 = { style: tmp.content, children: items3 };
  const obj15 = { hasIcons: false, children: items2 };
  const TableRowGroup5 = tmp9(6987).TableRowGroup;
  const obj16 = { label: intl9.string(selectedRoleIds(3830)["4liZ45"]), subLabel: intl10.string(selectedRoleIds(3830).I5cl7p), checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
  const TableCheckboxRow4 = tmp9(6900).TableCheckboxRow;
  intl9 = tmp9(1128).intl;
  intl10 = tmp9(1128).intl;
  items2 = [tmp8(TableCheckboxRow4, obj16), ];
  const obj17 = { label: intl11.string(selectedRoleIds(3830).mpjaVm), subLabel: intl12.string(selectedRoleIds(3830)["2PxChh"]), checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
  const TableCheckboxRow5 = tmp9(6900).TableCheckboxRow;
  intl11 = tmp9(1128).intl;
  intl12 = tmp9(1128).intl;
  items2[1] = closure_8(TableCheckboxRow5, obj17);
  items3 = [tmp6(TableRowGroup5, obj15), , ];
  const obj18 = { projectId };
  items3[1] = closure_8(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, obj18);
  let tmp8Result10 = null;
  if (null != experimentalError) {
    const obj19 = { accessibilityRole: "alert", children: closure_8(require("Text/Text").Text, obj37) };
    obj37 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
    tmp8Result10 = tmp8(tmp7, obj19);
  }
  items3[2] = tmp8Result10;
  return obj13;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default tmp4;
