// Module ID: 18294
// Function ID: 18295
// Name: useConjureProjectSettingsForm
// Dependencies: [5, 32, 19, 17, 4819, 1071, 21, 4913, 575, 504, 6622, 5127, 1112, 4190, 7553, 5504, 7515, 7623, 7427, 7348, 7335, 18295, 18270, 18284, 18286, 7045, 18300, 2119, 18300, 18301, 18302, 18313, 2]
// Exports: default

// Module 18294 (useConjureProjectSettingsForm)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6622 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 18300 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 4819 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, importDefault, set;

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
  const g5I05P = require("module_4190").g5I05P;
  let formatToPlainStringResult = formatToPlainString(g5I05P, obj2);
  let obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: intl2.string(require("module_4190").un99lK), footer: closure_9(closure_6, obj4), header: closure_9(BottomSheetTitleHeader, obj5), children: items4 };
  const ActionSheet = guildId(onSave[14]).ActionSheet;
  intl2 = guildId(onSave[12]).intl;
  obj4 = { style: tmp.roleListFooter, children: closure_9(guildId(onSave[15]).Text, { variant: "body-xs/normal", color: "text-muted", children: formatToPlainStringResult }) };
  obj5 = { title: intl3.string(require("module_4190")["pO3+p5"]), trailing: closure_9(ActionSheetHeaderPressableText, obj6) };
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
            const prop = require("module_4190")["dH7+/Z"];
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
  let c1;
  let c4;
  let c5;
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
  let obj21;
  let obj23;
  let obj54;
  let onChange;
  let saveError;
  let saving;
  let selectedRoleIds;
  let sharingOptions;
  let smartContext;
  let stringResult;
  let submit;
  let supportsCollaboration;
  let supportsCollaboratorRoles;
  let supportsVisibility;
  let tmp16Result;
  let tmp19;
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
  c4 = undefined;
  react = undefined;
  handleRoleSelectionChange = undefined;
  const tmp = closure_12();
  let tmp2 = importDefault;
  const tmp3 = sharingOptions;
  const tmp4 = require("useConjureProjectSettingsDraft")(projectId, arg1);
  ({ liveReload, sharingMode: c1, sharingOptions } = tmp4);
  ({ canChangeSharing, isGuildCollaboration, selectedRoleIds } = tmp4);
  ({ supportsVisibility, saving, saveError, experimentalError, handleFlagChange: c4, handleSharingModeChange: c5, handleRoleSelectionChange } = tmp4);
  const ensureAppInGuild = tmp4.ensureAppInGuild;
  ({ iconURL, description, smartContext, hostApproval, name, nameError, nameChanged, usesPreviewApp, canChangePreviewApp, supportsCollaboration, supportsCollaboratorRoles, checkingAppInGuild, canSave, handleIconChange, handleNameChange, handleDescriptionChange, handleUsesPreviewAppChange, handleLiveReloadChange, handleSmartContextChange, handleRequireHostApprovalChange, submit } = tmp4);
  const found = sharingOptions.find((value) => value.value === c1);
  let tmp6 = saving || flag;
  let obj2 = require("useConjureManagedCopy");
  const isConjureManagedCopy = obj2.useIsConjureManagedCopy(projectId);
  let items = [ensureAppInGuild, arg1, handleRoleSelectionChange, selectedRoleIds];
  let obj3 = { style: tmp.content, children: items1 };
  let tmp12 = null;
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
            const obj = { content: closure_1_9(ConjureCollaboratorRolesSheet, obj6), key, stackingBehavior: "stack" };
            obj6 = {
              guildId: closure_129_0,
              initialSelectedRoleIds: set,
              onSave(arg0) {
                        const items = [...arg0];
                        return closure_1_6(items);
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
  }), items);
  if (flag) {
    let obj4 = { variant: "body-sm/normal", color: "text-muted", children: intl.string(tmp2(tmp3[13]).s7VnVF) };
    const Text = tmp7(tmp3[15]).Text;
    intl = tmp7(tmp3[12]).intl;
    tmp12 = closure_9(Text, obj4);
  }
  items1 = [tmp12, , , , , , , , , , ];
  let tmp14 = null;
  if (isConjureManagedCopy) {
    let obj5 = { projectId };
    tmp14 = closure_9(tmp2(tmp3[23]), obj5);
  }
  items1[1] = tmp14;
  items1[2] = closure_9(require("ConjureAppIdentity").ConjureAppIdentitySection, { iconURL, onIconChange: handleIconChange, name, nameError, onNameChange: handleNameChange, description, onDescriptionChange: handleDescriptionChange, disabled: tmp6 });
  let tmp16Result10 = null;
  if (supportsVisibility) {
    tmp16Result10 = null;
    if (!isConjureManagedCopy) {
      const TableRowGroup = tmp7(tmp3[19]).TableRowGroup;
      let obj6 = {
        label: intl2.string(tmp2(tmp3[13]).jDBYrs),
        trailing: tmp16Result,
        arrow: !tmp6 && canChangeSharing,
        disabled: tmp19,
        onPress() {
              const openLazy = ActionSheetActionCreatorsDefault.openLazy;
              ActionSheetActionCreatorsDefault;
              const obj = { options: sharingOptions, value, onChange };
              const tmp2 = asyncRequire(18300, dependencyMap.paths);
              return openLazy(tmp2, ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, obj, "stack");
            }
      };
      const TableRow = tmp7(tmp3[25]).TableRow;
      intl2 = tmp7(tmp3[12]).intl;
      tmp16Result = undefined;
      if (null != found) {
        const obj7 = { text: found.label };
        tmp16Result = tmp16(tmp7(tmp3[25]).TableRow.TrailingText, obj7);
      }
      tmp19 = tmp6 || !canChangeSharing;
      const obj8 = { hasIcons: false, children: closure_9(TableRow, obj6) };
      tmp16Result10 = tmp16(TableRowGroup, obj8);
    }
  }
  items1[3] = tmp16Result10;
  let tmp16Result11 = null;
  if (!flag) {
    const obj9 = { projectId };
    tmp16Result11 = tmp16(tmp2(tmp3[29]), obj9);
  }
  items1[4] = tmp16Result11;
  let tmp16Result12 = null;
  if (supportsVisibility) {
    tmp16Result12 = null;
    if (supportsCollaboration) {
      const obj10 = { hasIcons: false, children: closure_9(TableCheckboxRow, obj11) };
      const TableRowGroup2 = tmp7(tmp3[19]).TableRowGroup;
      obj11 = {
        label: intl3.string(tmp2(tmp3[13]).lVvR4E),
        subLabel: intl4.string(tmp2(tmp3[13]).SQZGoV),
        checked: isGuildCollaboration,
        disabled: tmp6,
        onPress(arg0) {
              return _undefined(ConjureProjectTypes.ConjureProjectFlags.GUILD_COLLABORATION, arg0);
            }
      };
      TableCheckboxRow = tmp7(tmp3[20]).TableCheckboxRow;
      intl3 = tmp7(tmp3[12]).intl;
      intl4 = tmp7(tmp3[12]).intl;
      tmp16Result12 = tmp16(TableRowGroup2, obj10);
    }
  }
  items1[5] = tmp16Result12;
  let tmp16Result13 = null;
  if (canChangePreviewApp) {
    const obj12 = { hasIcons: false, children: closure_9(TableCheckboxRow2, obj13) };
    const TableRowGroup3 = tmp7(tmp3[19]).TableRowGroup;
    obj13 = { label: intl5.string(tmp2(tmp3[13]).DV2hcV), subLabel: intl6.string(tmp2(tmp3[13]).yjWIzb), checked: usesPreviewApp, disabled: tmp6, onPress: handleUsesPreviewAppChange };
    TableCheckboxRow2 = tmp7(tmp3[20]).TableCheckboxRow;
    intl5 = tmp7(tmp3[12]).intl;
    intl6 = tmp7(tmp3[12]).intl;
    tmp16Result13 = tmp16(TableRowGroup3, obj12);
  }
  items1[6] = tmp16Result13;
  let tmp16Result14 = null;
  if (liveReload.available) {
    const obj14 = { hasIcons: false, children: closure_9(TableCheckboxRow3, obj16) };
    const TableRowGroup4 = tmp7(tmp3[19]).TableRowGroup;
    obj16 = { label: intl7.string(tmp2(tmp3[13]).eEo0ye), subLabel: null, checked: null, disabled: tmp6, onPress: handleLiveReloadChange };
    TableCheckboxRow3 = tmp7(tmp3[20]).TableCheckboxRow;
    intl7 = tmp7(tmp3[12]).intl;
    ({ description: obj15.subLabel, checked: obj15.checked } = liveReload);
    tmp16Result14 = tmp16(TableRowGroup4, obj14);
  }
  items1[7] = tmp16Result14;
  let tmp16Result15 = null;
  if (supportsCollaboratorRoles) {
    const TableRowGroup5 = tmp7(tmp3[19]).TableRowGroup;
    const obj17 = { label: intl8.string(tmp2(tmp3[13])["pO3+p5"]), subLabel: intl9.string(tmp2(tmp3[13])["9MdtK9"]), arrow: true, disabled: tmp6, accessibilityHint: stringResult, onPress: callback };
    const TableRow2 = tmp7(tmp3[25]).TableRow;
    intl8 = tmp7(tmp3[12]).intl;
    intl9 = tmp7(tmp3[12]).intl;
    if (!tmp6) {
      tmp6 = !isGuildCollaboration;
    }
    if (!tmp6) {
      tmp6 = checkingAppInGuild;
    }
    stringResult = undefined;
    if (!isGuildCollaboration) {
      const intl10 = tmp7(tmp3[12]).intl;
      stringResult = intl10.string(tmp2(tmp3[13]).nZw5r9);
    }
    const obj18 = { hasIcons: false, children: closure_9(TableRow2, obj17) };
    tmp16Result15 = tmp16(TableRowGroup5, obj18);
  }
  items1[8] = tmp16Result15;
  let tmp16Result16 = null;
  if (!flag) {
    const obj19 = { projectId };
    tmp16Result16 = tmp16(tmp2(tmp3[30]), obj19);
  }
  items1[9] = tmp16Result16;
  let tmp16Result17 = null;
  if (null != saveError) {
    const obj20 = { accessibilityRole: "alert", children: closure_9(require("Text/Text").Text, obj21) };
    obj21 = { variant: "body-xs/normal", color: "text-feedback-critical", children: saveError };
    tmp16Result17 = tmp16(tmp11, obj20);
  }
  items1[10] = tmp16Result17;
  const obj22 = { fields: closure_10(handleRoleSelectionChange, obj3), experimentalFields: closure_10(handleRoleSelectionChange, obj23), canSave, saving, nameChanged, submit };
  obj23 = { style: tmp.content, children: items3 };
  const obj24 = { hasIcons: false, children: items2 };
  const TableRowGroup6 = tmp7(tmp3[19]).TableRowGroup;
  const obj25 = { label: intl11.string(tmp2(tmp3[13])["4liZ45"]), subLabel: intl12.string(tmp2(tmp3[13]).I5cl7p), checked: smartContext.checked, disabled: saving, onPress: handleSmartContextChange };
  const TableCheckboxRow4 = tmp7(tmp3[20]).TableCheckboxRow;
  intl11 = tmp7(tmp3[12]).intl;
  intl12 = tmp7(tmp3[12]).intl;
  items2 = [tmp16(TableCheckboxRow4, obj25), ];
  const obj26 = { label: intl13.string(tmp2(tmp3[13]).mpjaVm), subLabel: intl14.string(tmp2(tmp3[13])["2PxChh"]), checked: hostApproval.checked, disabled: saving, onPress: handleRequireHostApprovalChange };
  const TableCheckboxRow5 = tmp7(tmp3[20]).TableCheckboxRow;
  intl13 = tmp7(tmp3[12]).intl;
  intl14 = tmp7(tmp3[12]).intl;
  items2[1] = closure_9(TableCheckboxRow5, obj26);
  items3 = [tmp10(TableRowGroup6, obj24), , ];
  const obj27 = { projectId };
  items3[1] = closure_9(require("host_approval/ConjureHostApproval").ConjureAllowedHostsSetting, obj27);
  let tmp16Result18 = null;
  if (null != experimentalError) {
    const obj28 = { accessibilityRole: "alert", children: closure_9(require("Text/Text").Text, obj54) };
    obj54 = { variant: "body-xs/normal", color: "text-feedback-critical", children: experimentalError };
    tmp16Result18 = tmp16(tmp11, obj28);
  }
  items3[2] = tmp16Result18;
  return obj22;
};
