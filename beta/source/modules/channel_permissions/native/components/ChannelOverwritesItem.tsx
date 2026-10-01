// Module ID: 9032
// Function ID: 9033
// Name: ChannelOverwritesItem
// Dependencies: [19, 17, 1372, 7849, 21, 4836, 5209, 1115, 4849, 4527, 5435, 6034, 5917, 9033, 9016, 4832, 1177, 9034, 9035, 4548, 5929, 2]
// Exports: ChannelOverwritesCheckboxItem

// Module 9032 (ChannelOverwritesItem)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import react_native2 from "react-native" /* 4548 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertModal from "AlertModal" /* 5209 */;
import TableRow2 from "TableRow" /* 5917 */;
import FormCheckbox from "FormCheckbox" /* 5929 */;
import ChannelPermissionsConstants from "ChannelPermissionsConstants" /* 7849 */;
import ChannelPermissionsUtilsAll from "ChannelPermissionsUtils" /* 9016 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9033 */;
import AssetRegistryDefault from "AssetRegistry" /* 9034 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9035 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
function RemoveIcon(item) {
  let CircleXIcon;
  let intl;
  let obj2;
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = {
      disabled: item.disabled,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(item(1115).t.N86XcP),
      onPress() {
          let id;
          let intl;
          let intl2;
          let intl3;
          let name;
          let obj2;
          if (null != onRemove) {
            return tmp(item);
          } else {
            ({ id, name } = item);
            let closure_2 = channelId;
            let obj = {
              key: "remove-channel-overwrite-" + id,
              title: intl.string(intl4.t.GuPYQB),
              content: intl2.format(intl4.t.xERCnZ, obj2),
              confirmText: intl3.string(intl4.t.fKxYb0),
              onConfirm() {
                  let obj = channelId(closure_2_3[8]);
                  let result = obj.clearPermissionOverwrite(closure_2, id);
                  result.then(() => {
                    const obj = id(closure_2_3[9]);
                    const result = obj.memberOrRoleRemovedToast(name);
                  });
                }
            };
            const _HermesInternal = HermesInternal;
            const showConfirmModal = AlertModal.showConfirmModal;
            AlertModal;
            intl = intl4.intl;
            intl2 = intl4.intl;
            obj2 = { name };
            intl3 = intl4.intl;
            showConfirmModal(obj);
          }
        },
      children: tmp3(CircleXIcon, obj2)
    };
    const PressableOpacity = item(5435).PressableOpacity;
    intl = item(1115).intl;
    let prop;
    CircleXIcon = item(6034).CircleXIcon;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    obj2 = { style: prop };
    tmp3Result = tmp3(PressableOpacity, obj);
  }
  return tmp3Result;
}
function RoleItem(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let item;
  let obj2;
  let onPress;
  let showRemove;
  let showType;
  let start;
  let subLabel;
  let trailing;
  ({ item, subLabel, trailing } = arg0);
  ({ disabled, channelId, showType, showRemove, start, end, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  const obj = { icon: metroImportDefault(ShieldUserIcon.ShieldUserIcon, obj2), label: item.name, subLabel, start, end, trailing, onPress, disabled, accessibilityRole, accessibilityState, accessible };
  const TableRow = TableRow2.TableRow;
  obj2 = { size: "lg", color: item.colorString };
  if (showType) {
    const obj3 = ChannelPermissionsUtilsAll;
    subLabel = obj3.getRowTypeLabel(item.rowType);
  }
  if (showRemove) {
    const obj4 = { item, channelId };
    trailing = tmp(RemoveIcon, obj4);
  }
  return metroImportDefault(TableRow, obj);
}
function MemberItem(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let accessible;
  let channelId;
  let disabled;
  let end;
  let guildId;
  let item;
  let items;
  let items1;
  let obj5;
  let onPress;
  let onRemove;
  let showRemove;
  let start;
  let trailing;
  ({ item, trailing } = arg0);
  ({ channelId, showRemove, onRemove, guildId, start, end, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp = closure_9();
  const obj2 = { style: items, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
  items = [, ];
  const obj = { style: tmp.nameWrapper, children: items1 };
  ({ name: arr[0], memberName: arr[1] } = tmp);
  items1 = [metroImportDefault(Text_Text.Text, obj2), ];
  let tmp4Result = null;
  const tmp2 = metroImportAll;
  const tmp3 = View;
  if (item.rowType === RowType.OWNER) {
    const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, disableColor: true, style: tmp.ownerIcon };
    const Icon = tmp5(1177).Icon;
    tmp4Result = tmp4(Icon, obj3);
  }
  items1[1] = tmp4Result;
  const tmp2Result = tmp2(tmp3, obj);
  const TableRow = tmp5(5917).TableRow;
  const Avatar = tmp5(1177).Avatar;
  const user = UserStore.getUser(item.id);
  let avatarSource;
  if (user != null) {
    avatarSource = user.getAvatarSource(guildId);
  }
  const obj4 = { icon: metroImportDefault(Avatar, obj5), label: tmp2Result, subLabel: item.username, start, end, trailing, onPress, disabled, accessibilityRole, accessibilityState, accessible };
  obj5 = { source: avatarSource, size: native.AvatarSizes.SMALL };
  if (showRemove) {
    const obj6 = { item, channelId, onRemove };
    trailing = tmp4(RemoveIcon, obj6);
  }
  return metroImportDefault(TableRow, obj4);
}
function EmptyRoleItem(item) {
  let Icon;
  let obj2;
  item = item.item;
  const obj = { icon: metroImportDefault(Icon, obj2), label: item.name };
  const tmp = closure_9();
  const TableRow = TableRow2.TableRow;
  obj2 = { source: AssetRegistryDefault2, color: item.colorString, size: native.IconSizes.MEDIUM, style: tmp.roleIcon };
  Icon = native.Icon;
  return metroImportDefault(TableRow, obj);
}
class ChannelOverwritesItem {
  constructor(item) {
    item = item.item;
    const merged = Object.assign(item, Object.assign({ item: 0 }));
    const rowType = item.rowType;
    if (RowType.ADMINISTRATOR !== rowType) {
      if (RowType.ROLE !== rowType) {
        if (RowType.OWNER !== rowType) {
          if (RowType.MEMBER !== rowType) {
            if (RowType.APP_CHANNEL_APP !== rowType) {
              if (RowType.EMPTY_STATE === rowType) {
                const obj = { item };
                const merged1 = Object.assign(merged);
                return metroImportDefault(EmptyRoleItem, obj);
              } else {
                return null;
              }
            }
          }
        }
        const obj2 = { item };
        const merged2 = Object.assign(merged);
        return metroImportDefault(MemberItem, obj2);
      }
    }
    const obj3 = { item };
    const merged3 = Object.assign(merged);
    return metroImportDefault(RoleItem, obj3);
  }
}
const View = react_native.View;
const RowType = ChannelPermissionsConstants.RowType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ nameWrapper: { flexDirection: "row", alignItems: "flex-end", marginRight: 16 }, name: { paddingRight: 4 }, memberName: { flexShrink: 1 }, ownerIcon: { alignSelf: "center" }, roleIcon: { height: 30, width: 30 }, rowRemoveIconDisabled: { opacity: 0.3 } });
let result = size.fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default ChannelOverwritesItem;
export const ChannelOverwritesCheckboxItem = function ChannelOverwritesCheckboxItem(checked) {
  let accessibilityRole;
  let accessibilityState;
  checked = checked.checked;
  const merged = Object.assign(checked, Object.assign({ checked: 0 }));
  const obj = react_native2;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  const obj2 = { accessible: true, accessibilityRole, accessibilityState, trailing: metroImportDefault(FormCheckbox.FormCheckbox, { checked }) };
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  return metroImportDefault(ChannelOverwritesItem, obj2);
};
