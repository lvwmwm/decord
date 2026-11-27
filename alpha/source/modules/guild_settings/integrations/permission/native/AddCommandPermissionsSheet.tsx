// Module ID: 20081
// Function ID: 20082
// Name: AddCommandPermissionsSheet
// Dependencies: [19, 17, 4914, 21, 5043, 575, 20076, 7181, 5695, 504, 5618, 20082, 5271, 7507, 5641, 1112, 5257, 7406, 5634, 7482, 8185, 2]
// Exports: default

// Module 20081 (AddCommandPermissionsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import useCommandPermissionEntryDisplay from "useCommandPermissionEntryDisplay" /* 20076 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp3;
const TableCheckboxRow2 = tmp3(7181);
function ChannelRow(arg0) {
  let guild;
  let id;
  let tmp = null;
  ({ guild, id } = arg0);
  const merged = Object.assign(arg0, Object.assign({ guild: 0, id: 0 }));
  const obj = useCommandPermissionEntryDisplay;
  const channelEntryDisplay = obj.useChannelEntryDisplay(guild, id);
  if (null != channelEntryDisplay) {
    const obj2 = {};
    const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
    const merged1 = Object.assign(channelEntryDisplay);
    const merged2 = Object.assign(merged);
    tmp = hasOwnProperty(TableCheckboxRow, obj2);
  }
  return tmp;
}
function RoleRow(arg0) {
  let guild;
  let id;
  let tmp = null;
  ({ guild, id } = arg0);
  const merged = Object.assign(arg0, Object.assign({ guild: 0, id: 0 }));
  const obj = useCommandPermissionEntryDisplay;
  const roleEntryDisplay = obj.useRoleEntryDisplay(guild, id);
  if (null != roleEntryDisplay) {
    const obj2 = {};
    const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
    const merged1 = Object.assign(roleEntryDisplay);
    const merged2 = Object.assign(merged);
    tmp = hasOwnProperty(TableCheckboxRow, obj2);
  }
  return tmp;
}
function UserRow(arg0) {
  let guild;
  let id;
  let tmp = null;
  ({ guild, id } = arg0);
  const merged = Object.assign(arg0, Object.assign({ guild: 0, id: 0 }));
  const obj = useCommandPermissionEntryDisplay;
  const userEntryDisplay = obj.useUserEntryDisplay(guild, id);
  if (null != userEntryDisplay) {
    const obj2 = {};
    const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
    const merged1 = Object.assign(userEntryDisplay);
    const merged2 = Object.assign(merged);
    tmp = hasOwnProperty(TableCheckboxRow, obj2);
  }
  return tmp;
}
function EntryRow(entry) {
  entry = entry.entry;
  const merged = Object.assign(entry, Object.assign({ entry: 0 }));
  const type = entry.type;
  if (ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL === type) {
    const obj2 = { id: entry.id };
    const merged1 = Object.assign(merged);
    return hasOwnProperty(ChannelRow, obj2);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE === type) {
    const obj3 = { id: entry.id };
    const merged2 = Object.assign(merged);
    return hasOwnProperty(RoleRow, obj3);
  } else if (ApplicationCommandTypes.ApplicationCommandPermissionType.USER === type) {
    const obj = { id: entry.id };
    const merged3 = Object.assign(merged);
    return hasOwnProperty(UserRow, obj);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, search: obj2, list: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/native/AddCommandPermissionsSheet.tsx");

export default function AddCommandPermissionsSheet(guildId) {
  let Button;
  let _undefined;
  let _undefined2;
  let c2;
  let c4;
  let editPermissions;
  let filteredResults;
  let hasMemberSearch;
  let intl;
  let intl2;
  let isSelected;
  let items2;
  let items3;
  let items4;
  let maximumPermissionsSelected;
  let obj3;
  let obj5;
  let overwrittenKeys;
  let search;
  let selectedPermissionCount;
  let str;
  let title;
  guildId = guildId.guildId;
  const searchPlaceholder = guildId.searchPlaceholder;
  dependencyMap = undefined;
  isSelected = undefined;
  c4 = undefined;
  maximumPermissionsSelected = undefined;
  let closure_6;
  ({ editPermissions, hasMemberSearch, title, overwrittenKeys, search, selectedPermissionCount } = guildId);
  let tmp = closure_7();
  let tmp2 = guildId;
  let tmp3 = dependencyMap;
  let obj = guildId(504);
  const items = [c4];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const insets = stateFromStores(5618)({ isKeyboardAwareOnAndroid: false }).insets;
  const tmp6 = stateFromStores(20082)({ editPermissions, guildId, hasMemberSearch, overwrittenKeys, search, selectedPermissionCount });
  ({ filteredResults, onSelect: c2, isSelected } = tmp6);
  ({ submit: c4, maximumPermissionsSelected } = tmp6);
  const tmp5 = stateFromStores;
  if (null == stateFromStores) {
    return null;
  } else {
    closure_6 = filteredResults.length - 1;
    const BottomSheet = tmp2(5271).BottomSheet;
    const obj2 = { title, trailing: maximumPermissionsSelected(Button, obj3) };
    const BottomSheetTitleHeader = tmp2(7507).BottomSheetTitleHeader;
    obj3 = {
      size: "sm",
      text: intl2.string(tmp2(1112).t.OYkgVk),
      variant: str,
      disabled: 0 === tmp8,
      onPress: function handleAdd() {
          _undefined2();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
    };
    Button = tmp2(5641).Button;
    intl2 = tmp2(1112).intl;
    str = "primary";
    if (0 === tmp8) {
      str = "secondary";
    }
    const obj4 = { scrollable: true, startExpanded: true, header: maximumPermissionsSelected(BottomSheetTitleHeader, obj2), children: closure_6(isSelected, obj5) };
    obj5 = { style: tmp.container, children: items3 };
    const obj6 = { style: tmp.search, children: items2 };
    const obj7 = { size: "md", placeholder: searchPlaceholder, accessibilityLabel: searchPlaceholder, onChange: tmp7 };
    items2 = [maximumPermissionsSelected(tmp2(7406).SearchBar, obj7), ];
    let tmp12Result = null;
    if (maximumPermissionsSelected) {
      const obj8 = { variant: "body-sm/medium", color: "text-muted", children: intl.string(tmp2(1112).t["XTwtW/"]) };
      const Text = tmp2(5634).Text;
      intl = tmp2(1112).intl;
      tmp12Result = tmp12(Text, obj8);
    }
    items2[1] = tmp12Result;
    items3 = [closure_6(isSelected, obj6), ];
    const obj9 = {
      data: filteredResults,
      extraData: isSelected,
      keyExtractor(id) {
          const obj = guildId(c2[20]);
          return obj.toPermissionKey(id.id, id.type);
        },
      contentContainerStyle: items4,
      keyboardShouldPersistTaps: "handled",
      renderItem(item) {
          let tmp4;
          item = item.item;
          const index = item.index;
          const tmp = isSelected(item.id, item.type);
          const obj = {
            guild: stateFromStores,
            entry: item,
            checked: tmp,
            disabled: tmp4,
            start: 0 === index,
            end: index === closure_6,
            onPress() {
              return c2(item.id, item.type);
            }
          };
          tmp4 = maximumPermissionsSelected;
          const tmp2 = maximumPermissionsSelected;
          const tmp3 = EntryRow;
          if (maximumPermissionsSelected) {
            tmp4 = !tmp;
          }
          return tmp2(tmp3, obj);
        }
    };
    items4 = [tmp.list, ];
    const obj10 = { paddingBottom: tmp5(575).space.PX_16 + insets.bottom };
    const BottomSheetFlashList = tmp2(7482).BottomSheetFlashList;
    items4[1] = obj10;
    items3[1] = maximumPermissionsSelected(BottomSheetFlashList, obj9);
    return maximumPermissionsSelected(BottomSheet, obj4);
  }
};
