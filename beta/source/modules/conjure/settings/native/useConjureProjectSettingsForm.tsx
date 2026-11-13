// Module ID: 12325
// Function ID: 12326
// Name: useConjureProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 5076, 1072, 21, 5170, 575, 504, 6933, 5406, 1113, 4026, 7459, 5783, 7415, 9123, 7315, 7159, 7070, 12326, 12322, 12332, 12312, 12334, 7071, 12335, 2]
// Exports: default

// Module 12325 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6933 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 5076 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, dependencyMap, set;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
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
  const g5I05P = require("module_4026").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_4026").un99lK), footer: closure_9(closure_6, obj4), header: closure_9(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[14]).ActionSheet;
  intl2 = guildId(onSave[12]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "body-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_4026")["pO3+p5"]), trailing: closure_9(ActionSheetHeaderPressableText, obj6) };
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
            const prop = require("module_4026")["dH7+/Z"];
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
const View = react_native.View;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
({ jsx: c9, jsxs: c10 } = Fragment);
const ConjureCollaboratorRolesSheet_str = "ConjureCollaboratorRolesSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, roleLabel: obj3, roleListContent: obj4, roleListEmpty: obj5, roleListFooter: obj6 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { paddingBottom: nativeDefault.space.PX_64 };
obj5 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj6 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
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
  let TableCheckboxRow;
  let TableCheckboxRow2;
  let TableCheckboxRow3;
  let TableCheckboxRow4;
  let _undefined;
  let c2;
  let canChangePreviewApp;
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
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
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
  let obj11;
  let obj13;
  let obj16;
  let obj20;
  let obj22;
  let obj52;
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
  let tmp13Result;
  let tmp15;
  let usesPreviewApp;
  _require = arg1;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.readOnly;
  if (flag === undefined) {
    flag = false;
  }
  selectedRoleIds = undefined;
  dependencyMap = undefined;
  handleRoleSelectionChange = undefined;
  const tmp = closure_12();
  const tmp3 = dependencyMap;
  const tmp4 = selectedRoleIds(12326)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c2, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  let tmp5 = saving;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, isPublic, usesPreviewApp, canChangePreviewApp, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleUsesPreviewAppChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  if (!saving) {
    tmp5 = flag;
  }
  let obj2 = require("useConjureManagedCopy");
  const isConjureManagedCopy = obj2.useIsConjureManagedCopy(projectId);
  let items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let tmp9 = closure_10;
  let obj3 = { style: tmp.content, children: items1 };
  let tmp11 = null;
  const callback = react.useCallback(handleRoleSelectionChange(function*(arg0, value) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c2;
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
              c2 = 1;
              c3 = 2;
              c4 = 1;
              const obj4 = { value: ensureAppInGuild(), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c2 = 0;
          if (value) {
            const obj = { content: closure_1_9(ConjureCollaboratorRolesSheet, obj6), key, stackingBehavior: "stack" };
            obj6 = {
              guildId: closure_129_0,
              initialSelectedRoleIds: set,
              onSave(arg0) {
                        const items = [...arg0];
                        return closure_1_3(items);
                      }
            };
            const _Set = Set;
            const self = this;
            const self2 = this;
            const showActionSheet = tmp(c2[11]).showActionSheet;
            const tmp9 = tmp(c2[11]);
            set = new Set(closure_129_1);
            showActionSheet(obj);
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp20) {
        if (0 === c2) {
          c4 = 3;
          throw tmp20;
        } else {
          c3 = 1;
        }
      }
    }
  }), items);
  if (flag) {
    let obj4 = { variant: "body-sm/normal", color: "text-muted", children: intl.string(tmp2(4026).s7VnVF) };
    const Text = tmp6(5783).Text;
    intl = tmp6(1113).intl;
    tmp11 = closure_9(Text, obj4);
  }
  items1 = [tmp11, , , , , , , , ];
  if (isConjureManagedCopy) {
    let obj5 = { projectId };
    tmp13Result = tmp13(tmp2(12332), obj5);
    tmp15 = tmp13;
  } else {
    let obj6 = { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp5 };
    tmp13Result = tmp13(tmp6(12312).ConjureAppIdentitySection, obj6);
    tmp15 = tmp13;
  }
  items1[1] = tmp13Result;
  let tmp15Result = null;
  if (supportsVisibility) {
    tmp15Result = null;
    if (!isConjureManagedCopy) {
      const obj7 = { hasIcons: false, children: tmp15(TableCheckboxRow, obj8) };
      const TableRowGroup = tmp6(7159).TableRowGroup;
      obj8 = {
        label: intl2.string(selectedRoleIds(4026).ujIxRm),
        subLabel: intl3.string(selectedRoleIds(4026).gT8zk1),
        checked: isPublic,
        disabled: tmp5,
        onPress(arg0) {
              return c2(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
            }
      };
      TableCheckboxRow = tmp6(7070).TableCheckboxRow;
      intl2 = tmp6(1113).intl;
      intl3 = tmp6(1113).intl;
      tmp15Result = tmp15(TableRowGroup, obj7);
    }
  }
  items1[2] = tmp15Result;
  let tmp15Result8 = null;
  if (!flag) {
    const obj9 = { projectId };
    tmp15Result8 = tmp15(tmp2(12334), obj9);
  }
  items1[3] = tmp15Result8;
  let tmp15Result9 = null;
  if (supportsVisibility) {
    tmp15Result9 = null;
    if (supportsCollaboration) {
      const obj10 = { hasIcons: false, children: tmp15(TableCheckboxRow2, obj11) };
      const TableRowGroup2 = tmp6(7159).TableRowGroup;
      obj11 = {
        label: intl4.string(selectedRoleIds(4026).lVvR4E),
        subLabel: intl5.string(selectedRoleIds(4026).SQZGoV),
        checked: isGuildCollaboration,
        disabled: tmp5,
        onPress(arg0) {
              return c2(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      TableCheckboxRow2 = tmp6(7070).TableCheckboxRow;
      intl4 = tmp6(1113).intl;
      intl5 = tmp6(1113).intl;
      tmp15Result9 = tmp15(TableRowGroup2, obj10);
    }
  }
  items1[4] = tmp15Result9;
  let tmp15Result10 = null;
  if (canChangePreviewApp) {
    const obj12 = { hasIcons: false, children: tmp15(TableCheckboxRow3, obj13) };
    const TableRowGroup3 = tmp6(7159).TableRowGroup;
    obj13 = { label: intl6.string(selectedRoleIds(4026).DV2hcV), subLabel: intl7.string(selectedRoleIds(4026).yjWIzb), checked: usesPreviewApp, disabled: tmp5, onPress: handleUsesPreviewAppChange };
    TableCheckboxRow3 = tmp6(7070).TableCheckboxRow;
    intl6 = tmp6(1113).intl;
    intl7 = tmp6(1113).intl;
    tmp15Result10 = tmp15(TableRowGroup3, obj12);
  }
  items1[5] = tmp15Result10;
  let tmp15Result11 = null;
  if (liveReload.available) {
    const obj14 = { hasIcons: false, children: tmp15(TableCheckboxRow4, obj16) };
    const TableRowGroup4 = tmp6(7159).TableRowGroup;
    obj16 = { label: intl8.string(selectedRoleIds(4026).eEo0ye), subLabel: null, checked: null, disabled: tmp5, onPress: handleLiveReloadChange };
    TableCheckboxRow4 = tmp6(7070).TableCheckboxRow;
    intl8 = tmp6(1113).intl;
    ({ description: obj15.subLabel, checked: obj15.checked } = liveReload);
    tmp15Result11 = tmp15(TableRowGroup4, obj14);
  }
  items1[6] = tmp15Result11;
  let tmp15Result12 = null;
  if (supportsCollaboratorRoles) {
    const TableRowGroup5 = tmp6(7159).TableRowGroup;
    const obj17 = { label: intl9.string(selectedRoleIds(4026)["pO3+p5"]), subLabel: intl10.string(selectedRoleIds(4026)["9MdtK9"]), arrow: true, disabled: tmp5, accessibilityHint: stringResult, onPress: callback };
    const TableRow = tmp6(7071).TableRow;
    intl9 = tmp6(1113).intl;
    intl10 = tmp6(1113).intl;
    if (!tmp5) {
      tmp5 = !isGuildCollaboration;
    }
    if (!tmp5) {
      tmp5 = checkingAppInGuild;
    }
    stringResult = undefined;
    if (!isGuildCollaboration) {
      const intl11 = tmp6(1113).intl;
      stringResult = intl11.string(tmp2(4026).nZw5r9);
    }
    const obj18 = { hasIcons: false, children: tmp15(TableRow, obj17) };
    tmp15Result12 = tmp15(TableRowGroup5, obj18);
  }
  items1[7] = tmp15Result12;
  let tmp15Result13 = null;
  if (null != saveError) {
    const obj19 = { accessibilityRole: "alert", children: tmp15(require("Text/Text").Text, obj20) };
    obj20 = { variant: "body-xs/normal", color: "text-feedback-critical", children: saveError };
    tmp15Result13 = tmp15(tmp10, obj19);
  }
  items1[8] = tmp15Result13;
  const obj21 = { fields: tmp9(View, obj3), experimentalFields: tmp9(View, obj22), canSave, saving, nameChanged, submit };
  obj22 = { style: tmp.content, children: items3 };
  const obj23 = { hasIcons: false, children: items2 };
  const TableRowGroup6 = tmp6(7159).TableRowGroup;
  const obj24 = { label: intl12.string(selectedRoleIds(4026)["4liZ45"]), subLabel: intl13.string(selectedRoleIds(4026).I5cl7p), checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
  const TableCheckboxRow5 = tmp6(7070).TableCheckboxRow;
  intl12 = tmp6(1113).intl;
  intl13 = tmp6(1113).intl;
  items2 = [tmp15(TableCheckboxRow5, obj24), ];
  const obj25 = { label: intl14.string(selectedRoleIds(4026).mpjaVm), subLabel: intl15.string(selectedRoleIds(4026)["2PxChh"]), checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
  const TableCheckboxRow6 = tmp6(7070).TableCheckboxRow;
  intl14 = tmp6(1113).intl;
  intl15 = tmp6(1113).intl;
  items2[1] = tmp15(TableCheckboxRow6, obj25);
  items3 = [tmp9(TableRowGroup6, obj23), , ];
  const obj26 = { projectId };
  items3[1] = tmp15(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, obj26);
  let tmp15Result14 = null;
  if (null != experimentalError) {
    const obj27 = { accessibilityRole: "alert", children: tmp15(require("Text/Text").Text, obj52) };
    obj52 = { variant: "body-xs/normal", color: "text-feedback-critical", children: experimentalError };
    tmp15Result14 = tmp15(tmp10, obj27);
  }
  items3[2] = tmp15Result14;
  return obj21;
};
