// Module ID: 12469
// Function ID: 12470
// Name: useConjureProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 4920, 1072, 21, 5014, 575, 504, 6845, 5258, 1113, 3868, 7366, 5624, 7321, 9010, 7218, 7060, 6974, 12470, 12458, 6975, 12476, 2]
// Exports: default

// Module 12469 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6845 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  const g5I05P = require("module_3868").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_3868").un99lK), footer: closure_9(closure_6, obj4), header: closure_9(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[14]).ActionSheet;
  intl2 = guildId(onSave[12]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "text-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_3868")["pO3+p5"]), trailing: closure_9(ActionSheetHeaderPressableText, obj6) };
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
    obj10 = { variant: "text-md/normal", color: "text-muted", children: intl7.string(guildId(tmp3[12]).t.V6nAfF) };
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
          const obj3 = { variant: "text-md/medium", children: children.name };
          items[1] = closure_1_9(guildId(onSave[15]).Text, obj3);
          formatToPlainStringResult = undefined;
          if (tmp3) {
            const intl = guildId(onSave[12]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj4 = { max: guildId(onSave[10]).MAX_PROJECT_COLLABORATOR_ROLES };
            const prop = require("module_3868")["dH7+/Z"];
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
  let _undefined;
  let c2;
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
  let hostApproval;
  let iconURL;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isGuildCollaboration;
  let isPublic;
  let items1;
  let items2;
  let items3;
  let liveReload;
  let name;
  let nameChanged;
  let nameError;
  let obj10;
  let obj14;
  let obj16;
  let obj41;
  let obj5;
  let obj7;
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
  const tmp4 = selectedRoleIds(12470)(projectId, arg1);
  ({ liveReload, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c2, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  let tmp5 = saving;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, isPublic, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  if (!saving) {
    tmp5 = flag;
  }
  let items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj2 = { style: tmp.content, children: items1 };
  let tmp9 = null;
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
    let obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(tmp2(3868).s7VnVF) };
    const Text = require("Text/Text").Text;
    intl = require("intl").intl;
    tmp9 = closure_9(Text, obj3);
  }
  items1 = [tmp9, , , , , , ];
  items1[1] = closure_9(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp5 });
  let tmp12Result = null;
  if (supportsVisibility) {
    let obj4 = { hasIcons: false, children: tmp12(TableCheckboxRow, obj5) };
    const TableRowGroup = tmp13(7060).TableRowGroup;
    obj5 = {
      label: intl2.string(tmp2(3868).ujIxRm),
      subLabel: intl3.string(tmp2(3868).gT8zk1),
      checked: isPublic,
      disabled: tmp5,
      onPress(arg0) {
          return c2(ConjureProjectTypes.ConjureProjectFlags.PUBLIC, arg0);
        }
    };
    TableCheckboxRow = tmp13(6974).TableCheckboxRow;
    intl2 = tmp13(1113).intl;
    intl3 = tmp13(1113).intl;
    tmp12Result = tmp12(TableRowGroup, obj4);
  }
  items1[2] = tmp12Result;
  let tmp12Result6 = null;
  if (supportsVisibility) {
    tmp12Result6 = null;
    if (supportsCollaboration) {
      let obj6 = { hasIcons: false, children: tmp12(TableCheckboxRow2, obj7) };
      const TableRowGroup2 = tmp13(7060).TableRowGroup;
      obj7 = {
        label: intl4.string(selectedRoleIds(3868).lVvR4E),
        subLabel: intl5.string(selectedRoleIds(3868).SQZGoV),
        checked: isGuildCollaboration,
        disabled: tmp5,
        onPress(arg0) {
              return c2(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      TableCheckboxRow2 = tmp13(6974).TableCheckboxRow;
      intl4 = tmp13(1113).intl;
      intl5 = tmp13(1113).intl;
      tmp12Result6 = tmp12(TableRowGroup2, obj6);
    }
  }
  items1[3] = tmp12Result6;
  let tmp12Result7 = null;
  if (liveReload.available) {
    const obj8 = { hasIcons: false, children: closure_9(TableCheckboxRow3, obj10) };
    const TableRowGroup3 = tmp13(7060).TableRowGroup;
    obj10 = { label: intl6.string(selectedRoleIds(3868).eEo0ye), subLabel: null, checked: null, disabled: tmp5, onPress: handleLiveReloadChange };
    TableCheckboxRow3 = tmp13(6974).TableCheckboxRow;
    intl6 = tmp13(1113).intl;
    ({ description: obj9.subLabel, checked: obj9.checked } = liveReload);
    tmp12Result7 = tmp12(TableRowGroup3, obj8);
  }
  items1[4] = tmp12Result7;
  let tmp12Result8 = null;
  if (supportsCollaboratorRoles) {
    const TableRowGroup4 = tmp13(7060).TableRowGroup;
    const obj11 = { label: intl7.string(selectedRoleIds(3868)["pO3+p5"]), subLabel: intl8.string(selectedRoleIds(3868)["9MdtK9"]), arrow: true, disabled: tmp5, accessibilityHint: stringResult, onPress: callback };
    const TableRow = tmp13(6975).TableRow;
    intl7 = tmp13(1113).intl;
    intl8 = tmp13(1113).intl;
    if (!tmp5) {
      tmp5 = !isGuildCollaboration;
    }
    if (!tmp5) {
      tmp5 = checkingAppInGuild;
    }
    stringResult = undefined;
    if (!isGuildCollaboration) {
      const intl9 = tmp13(1113).intl;
      stringResult = intl9.string(tmp2(3868).nZw5r9);
    }
    const obj12 = { hasIcons: false, children: closure_9(TableRow, obj11) };
    tmp12Result8 = tmp12(TableRowGroup4, obj12);
  }
  items1[5] = tmp12Result8;
  let tmp12Result9 = null;
  if (null != saveError) {
    const obj13 = { accessibilityRole: "alert", children: closure_9(require("Text/Text").Text, obj14) };
    obj14 = { variant: "text-xs/normal", color: "text-feedback-critical", children: saveError };
    tmp12Result9 = tmp12(tmp8, obj13);
  }
  items1[6] = tmp12Result9;
  const obj15 = { fields: closure_10(View, obj2), experimentalFields: closure_10(View, obj16), canSave, saving, nameChanged, submit };
  obj16 = { style: tmp.content, children: items3 };
  const obj17 = { hasIcons: false, children: items2 };
  const TableRowGroup5 = tmp13(7060).TableRowGroup;
  const obj18 = { label: intl10.string(selectedRoleIds(3868)["4liZ45"]), subLabel: intl11.string(selectedRoleIds(3868).I5cl7p), checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
  const TableCheckboxRow4 = tmp13(6974).TableCheckboxRow;
  intl10 = tmp13(1113).intl;
  intl11 = tmp13(1113).intl;
  items2 = [tmp12(TableCheckboxRow4, obj18), ];
  const obj19 = { label: intl12.string(selectedRoleIds(3868).mpjaVm), subLabel: intl13.string(selectedRoleIds(3868)["2PxChh"]), checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
  const TableCheckboxRow5 = tmp13(6974).TableCheckboxRow;
  intl12 = tmp13(1113).intl;
  intl13 = tmp13(1113).intl;
  items2[1] = closure_9(TableCheckboxRow5, obj19);
  items3 = [tmp7(TableRowGroup5, obj17), , ];
  const obj20 = { projectId };
  items3[1] = closure_9(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, obj20);
  let tmp12Result10 = null;
  if (null != experimentalError) {
    const obj21 = { accessibilityRole: "alert", children: closure_9(require("Text/Text").Text, obj41) };
    obj41 = { variant: "text-xs/normal", color: "text-feedback-critical", children: experimentalError };
    tmp12Result10 = tmp12(tmp8, obj21);
  }
  items3[2] = tmp12Result10;
  return obj15;
};
