// Module ID: 18324
// Function ID: 18325
// Name: useConjureProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 4823, 1071, 21, 4917, 575, 504, 6809, 5131, 1112, 4192, 7420, 5508, 7381, 8366, 7280, 6014, 7055, 18325, 18300, 18314, 18316, 6018, 18330, 2119, 18330, 18331, 15285, 18332, 18343, 2]
// Exports: default

// Module 18324 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl15 from "intl" /* 1112 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 18330 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4823 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, importDefault, set;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function RoleColorCircle(color) {
  const obj = { style: closure_13(color.color).circle };
  return React4(View, obj);
}
function ConjureCollaboratorRolesSheet(guildId) {
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
  let tmp = closure_12();
  const roleLabel = tmp;
  let tmp3 = onSave;
  let obj = guildId(onSave[9]);
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
        if (size.size >= guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES) {
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
  let intl = guildId(onSave[12]).intl;
  let formatToPlainString = intl.formatToPlainString;
  let obj2 = { count: first.size, max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
  const g5I05P = require("module_4192").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_4192").un99lK), footer: closure_9(closure_6, obj4), header: closure_9(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[14]).ActionSheet;
  intl2 = guildId(onSave[12]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "body-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_4192")["pO3+p5"]), trailing: closure_9(ActionSheetHeaderPressableText, obj6) };
  BottomSheetTitleHeader = guildId(onSave[16]).BottomSheetTitleHeader;
  intl3 = guildId(onSave[12]).intl;
  obj6 = { label: intl4.string(guildId(onSave[12]).t.i4jeWR), onPress: callback };
  ActionSheetHeaderPressableText = guildId(onSave[17]).ActionSheetHeaderPressableText;
  intl4 = guildId(onSave[12]).intl;
  const obj7 = { size: "md", round: true, grow: false, accessibilityLabel: intl5.string(guildId(onSave[12]).t.Sojqsr), placeholder: intl6.string(guildId(onSave[12]).t.Sojqsr), onChange: tmp8 };
  const SearchBar = guildId(onSave[18]).SearchBar;
  intl5 = guildId(onSave[12]).intl;
  intl6 = guildId(onSave[12]).intl;
  items4 = [closure_9(SearchBar, obj7), ];
  const obj8 = { style: tmp.roleListContent, children: tmp13Result };
  const tmp12 = closure_10;
  if (0 === memo.length) {
    const obj9 = { style: tmp.roleListEmpty, children: closure_9(Text, obj10) };
    obj10 = { variant: "body-md/normal", color: "text-muted", children: intl7.string(guildId(tmp3[12]).t.V6nAfF) };
    Text = tmp2(tmp3[15]).Text;
    intl7 = tmp2(tmp3[12]).intl;
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
            tmp3 = tmp.size >= guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES;
          }
          const colorStrings = children.colorStrings;
          let primaryColor;
          const obj = { style: roleLabel.roleLabel, children: items };
          const TableCheckboxRow = guildId(onSave[20]).TableCheckboxRow;
          const tmp7 = closure_1_10;
          const tmp8 = closure_6;
          const tmp9 = RoleColorCircle;
          if (colorStrings != null) {
            primaryColor = colorStrings.primaryColor;
          }
          if (primaryColor == null) {
            primaryColor = children.colorString;
          }
          if (primaryColor == null) {
            primaryColor = closure_8;
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
          items = [closure_1_9(tmp9, { color: primaryColor }), ];
          const obj3 = { variant: "body-md/medium", children: children.name };
          items[1] = closure_1_9(guildId(onSave[15]).Text, obj3);
          formatToPlainStringResult = undefined;
          if (tmp3) {
            const intl = guildId(onSave[12]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj4 = { max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
            const prop = require("module_4192")["dH7+/Z"];
            formatToPlainStringResult = formatToPlainString(prop, obj4);
          }
          return closure_1_9(TableCheckboxRow, obj2, children.id);
        })
    };
    const TableRowGroup = tmp2(tmp3[19]).TableRowGroup;
    tmp13Result = tmp13(TableRowGroup, obj11);
  }
  items4[1] = closure_9(closure_6, obj8);
  return tmp12(ActionSheet, obj3);
}
let react = react_mod;
const View = react_native.View;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureCollaboratorRolesSheet_str = "ConjureCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, collaboratorRolesSubLabel: obj6, roleListFooter: obj7 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_12 = createStyles(obj);
createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((backgroundColor) => {
  const obj = { circle: size };
  size = { width: 12, height: 12, borderRadius: nativeDefault.radii.round, backgroundColor, flexShrink: 0 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/settings/native/useConjureProjectSettingsForm.tsx");

export default function useConjureProjectSettingsForm(projectId, arg1) {
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let _undefined;
  let c1;
  let c5;
  let c6;
  let canChangePreviewApp;
  let canChangeSharing;
  let canSave;
  let checkingAppInGuild;
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
  let handleUsesPreviewAppChange;
  let hostApproval;
  let iconURL;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isGuildCollaboration;
  let items4;
  let items6;
  let items7;
  let items8;
  let liveReload;
  let name;
  let nameChanged;
  let nameError;
  let obj13;
  let obj18;
  let obj21;
  let obj24;
  let obj26;
  let obj59;
  let onChange;
  let saveError;
  let saving;
  let selectedRoleIds;
  let sharingOptions;
  let smartContext;
  let submit;
  let supportsCollaboration;
  let supportsCollaboratorRoles;
  let supportsVisibility;
  let tmp17Result;
  let tmp20;
  let usesPreviewApp;
  let value;
  _require = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  sharingOptions = undefined;
  selectedRoleIds = undefined;
  react = undefined;
  c6 = undefined;
  handleRoleSelectionChange = undefined;
  let tmp = closure_12();
  let tmp2 = importDefault;
  const tmp3 = sharingOptions;
  const tmp4 = require("useConjureProjectSettingsDraft")(projectId, arg1);
  ({ liveReload, sharingMode: c1, sharingOptions } = tmp4);
  ({ canChangeSharing, isGuildCollaboration, selectedRoleIds } = tmp4);
  const showsManageServerDefault = tmp4.showsManageServerDefault;
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c5, handleSharingModeChange: c6, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, usesPreviewApp, canChangePreviewApp, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleUsesPreviewAppChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  const found = sharingOptions.find((value) => value.value === c1);
  let obj2 = require("useConjureManagedCopy");
  const isConjureManagedCopy = obj2.useIsConjureManagedCopy(projectId);
  let obj3 = require("get initialized");
  let items = [handleRoleSelectionChange];
  const items1 = [arg1, selectedRoleIds];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items, () => {
    let items;
    if (null == closure_0) {
      items = [];
    } else {
      items = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    }
    return items;
  }, items1);
  const items2 = [stateFromStoresArray, showsManageServerDefault];
  const memo = react.useMemo(() => {
    let intl;
    let mapped;
    const tmp = showsManageServerDefault;
    if (tmp) {
      let obj = { id: "anyone_with_manage_server", label: intl.string(_modDef4192.Ukbq9W) };
      intl = intl15.intl;
      const items = [obj];
      mapped = items;
    } else {
      mapped = stateFromStoresArray.map((id) => {
        let primaryColor;
        const colorStrings = id.colorStrings;
        const obj = { id: id.id, label: id.name, icon: { type: "role", color: primaryColor } };
        primaryColor = undefined;
        if (colorStrings != null) {
          primaryColor = colorStrings.primaryColor;
        }
        if (primaryColor == null) {
          primaryColor = id.colorString;
        }
        if (primaryColor == null) {
          primaryColor = ensureAppInGuild;
        }
        return obj;
      });
    }
    return mapped;
  }, items2);
  const items3 = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj4 = { style: tmp.content, children: items4 };
  let tmp13 = null;
  const callback = react.useCallback(selectedRoleIds(function*(arg0, value) {
    let c2;
    let obj6;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            if (null != tmp) {
              sharingOptions = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: ensureAppInGuild(), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          sharingOptions = 0;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          sharingOptions = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          sharingOptions = 0;
          if (value) {
            const obj = { content: stateFromStoresArray(ConjureCollaboratorRolesSheet, obj6), key, stackingBehavior: "stack" };
            obj6 = {
              guildId: closure_129_0,
              initialSelectedRoleIds: set,
              onSave(arg0) {
                        const items = [...arg0];
                        return closure_1_7(items);
                      }
            };
            const _Set = Set;
            const self = this;
            const self2 = this;
            const showActionSheet = tmp(sharingOptions[11]).showActionSheet;
            const tmp9 = tmp(sharingOptions[11]);
            set = new Set(closure_129_3);
            showActionSheet(obj);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp20) {
        if (0 === sharingOptions) {
          c4 = 3;
          throw tmp20;
        } else {
          c3 = 1;
        }
      }
    }
  }), items3);
  if (flag) {
    let obj5 = { variant: "body-sm/normal", color: "text-muted", children: intl.string(tmp2(tmp3[13]).s7VnVF) };
    const Text = tmp7(tmp3[15]).Text;
    intl = tmp7(tmp3[12]).intl;
    tmp13 = stateFromStoresArray(Text, obj5);
  }
  items4 = [tmp13, , , , , , , , , ];
  let tmp15 = null;
  if (isConjureManagedCopy) {
    let obj6 = { projectId };
    tmp15 = stateFromStoresArray(tmp2(tmp3[23]), obj6);
  }
  items4[1] = tmp15;
  items4[2] = stateFromStoresArray(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: saving || flag });
  let tmp17Result10 = null;
  if (supportsVisibility) {
    tmp17Result10 = null;
    if (!isConjureManagedCopy) {
      const TableRowGroup = tmp7(tmp3[19]).TableRowGroup;
      const obj7 = {
        label: intl2.string(tmp2(tmp3[13]).jDBYrs),
        trailing: tmp17Result,
        arrow: !(saving || flag) && canChangeSharing,
        disabled: tmp20,
        onPress() {
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const obj = { options: sharingOptions, value, onChange };
              const tmp2 = asyncRequire(18330, dependencyMap.paths);
              return openLazy(tmp2, ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, obj, "stack");
            }
      };
      const TableRow = tmp7(tmp3[25]).TableRow;
      intl2 = tmp7(tmp3[12]).intl;
      tmp17Result = undefined;
      if (null != found) {
        const obj8 = { text: found.label };
        tmp17Result = tmp17(tmp7(tmp3[25]).TableRow.TrailingText, obj8);
      }
      tmp20 = tmp6 || !canChangeSharing;
      const obj9 = { hasIcons: false, children: stateFromStoresArray(TableRow, obj7) };
      tmp17Result10 = tmp17(TableRowGroup, obj9);
    }
  }
  items4[3] = tmp17Result10;
  let tmp17Result11 = null;
  if (!flag) {
    const obj10 = { projectId };
    tmp17Result11 = tmp17(tmp2(tmp3[29]), obj10);
  }
  items4[4] = tmp17Result11;
  let tmp11Result = null;
  if (supportsVisibility) {
    tmp11Result = null;
    if (supportsCollaboration) {
      const TableRowGroup2 = tmp7(tmp3[19]).TableRowGroup;
      const obj11 = {
        label: intl3.string(tmp2(tmp3[13]).lVvR4E),
        subLabel: intl4.string(tmp2(tmp3[13]).SQZGoV),
        checked: isGuildCollaboration,
        disabled: saving || flag,
        onPress(arg0) {
              return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      const TableCheckboxRow = tmp7(tmp3[20]).TableCheckboxRow;
      intl3 = tmp7(tmp3[12]).intl;
      intl4 = tmp7(tmp3[12]).intl;
      const items5 = [stateFromStoresArray(TableCheckboxRow, obj11), ];
      let tmp17Result13 = null;
      if (supportsCollaboratorRoles) {
        tmp17Result13 = null;
        if (isGuildCollaboration) {
          const obj12 = { label: intl5.string(tmp2(tmp3[13])["pO3+p5"]), subLabel: closure_10(c6, obj13), arrow: true, disabled: saving || flag || checkingAppInGuild, onPress: callback };
          const TableRow2 = tmp7(tmp3[25]).TableRow;
          intl5 = tmp7(tmp3[12]).intl;
          obj13 = { style: tmp.collaboratorRolesSubLabel, children: items6 };
          const obj14 = { variant: "body-xs/medium", color: "text-subtle", children: intl6.string(tmp2(tmp3[13]).AXPSq7) };
          const Text2 = tmp7(tmp3[15]).Text;
          intl6 = tmp7(tmp3[12]).intl;
          items6 = [stateFromStoresArray(Text2, obj14), ];
          let tmp17Result12 = null;
          if (memo.length > 0) {
            const obj15 = { label: intl7.string(tmp2(tmp3[13])["pO3+p5"]), items: memo, size: "xs" };
            const TagGroup = tmp7(tmp3[30]).TagGroup;
            intl7 = tmp7(tmp3[12]).intl;
            tmp17Result12 = tmp17(TagGroup, obj15);
          }
          items6[1] = tmp17Result12;
          tmp17Result13 = tmp17(TableRow2, obj12);
        }
      }
      const obj16 = { hasIcons: false, children: items5 };
      items5[1] = tmp17Result13;
      tmp11Result = tmp11(TableRowGroup2, obj16);
    }
  }
  items4[5] = tmp11Result;
  let tmp17Result14 = null;
  if (canChangePreviewApp) {
    const obj17 = { hasIcons: false, children: stateFromStoresArray(TableCheckboxRow2, obj18) };
    const TableRowGroup3 = tmp7(tmp3[19]).TableRowGroup;
    obj18 = { label: intl8.string(tmp2(tmp3[13]).DV2hcV), subLabel: intl9.string(tmp2(tmp3[13]).yjWIzb), checked: usesPreviewApp, disabled: saving || flag, onPress: handleUsesPreviewAppChange };
    TableCheckboxRow2 = tmp7(tmp3[20]).TableCheckboxRow;
    intl8 = tmp7(tmp3[12]).intl;
    intl9 = tmp7(tmp3[12]).intl;
    tmp17Result14 = tmp17(TableRowGroup3, obj17);
  }
  items4[6] = tmp17Result14;
  let tmp17Result15 = null;
  if (liveReload.available) {
    const obj19 = { hasIcons: false, children: stateFromStoresArray(TableCheckboxRow3, obj21) };
    const TableRowGroup4 = tmp7(tmp3[19]).TableRowGroup;
    obj21 = { label: intl10.string(tmp2(tmp3[13]).eEo0ye), subLabel: null, checked: null, disabled: saving || flag, onPress: handleLiveReloadChange };
    TableCheckboxRow3 = tmp7(tmp3[20]).TableCheckboxRow;
    intl10 = tmp7(tmp3[12]).intl;
    ({ description: obj20.subLabel, checked: obj20.checked } = liveReload);
    tmp17Result15 = tmp17(TableRowGroup4, obj19);
  }
  items4[7] = tmp17Result15;
  let tmp17Result16 = null;
  if (!flag) {
    const obj22 = { projectId };
    tmp17Result16 = tmp17(tmp2(tmp3[31]), obj22);
  }
  items4[8] = tmp17Result16;
  let tmp17Result17 = null;
  if (null != saveError) {
    const obj23 = { accessibilityRole: "alert", children: stateFromStoresArray(require("Text/Text").Text, obj24) };
    obj24 = { variant: "body-xs/normal", color: "text-feedback-critical", children: saveError };
    tmp17Result17 = tmp17(tmp12, obj23);
  }
  items4[9] = tmp17Result17;
  const obj25 = { fields: closure_10(c6, obj4), experimentalFields: closure_10(c6, obj26), canSave, saving, nameChanged, submit };
  obj26 = { style: tmp.content, children: items8 };
  const obj27 = { hasIcons: false, children: items7 };
  const TableRowGroup5 = tmp7(tmp3[19]).TableRowGroup;
  const obj28 = { label: intl11.string(tmp2(tmp3[13])["4liZ45"]), subLabel: intl12.string(tmp2(tmp3[13]).I5cl7p), checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
  const TableCheckboxRow4 = tmp7(tmp3[20]).TableCheckboxRow;
  intl11 = tmp7(tmp3[12]).intl;
  intl12 = tmp7(tmp3[12]).intl;
  items7 = [stateFromStoresArray(TableCheckboxRow4, obj28), ];
  const obj29 = { label: intl13.string(tmp2(tmp3[13]).mpjaVm), subLabel: intl14.string(tmp2(tmp3[13])["2PxChh"]), checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
  const TableCheckboxRow5 = tmp7(tmp3[20]).TableCheckboxRow;
  intl13 = tmp7(tmp3[12]).intl;
  intl14 = tmp7(tmp3[12]).intl;
  items7[1] = stateFromStoresArray(TableCheckboxRow5, obj29);
  items8 = [tmp11(TableRowGroup5, obj27), , ];
  const obj30 = { projectId };
  items8[1] = stateFromStoresArray(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, obj30);
  let tmp17Result18 = null;
  if (null != experimentalError) {
    const obj31 = { accessibilityRole: "alert", children: stateFromStoresArray(require("Text/Text").Text, obj59) };
    obj59 = { variant: "body-xs/normal", color: "text-feedback-critical", children: experimentalError };
    tmp17Result18 = tmp17(tmp12, obj31);
  }
  items8[2] = tmp17Result18;
  return obj25;
};
