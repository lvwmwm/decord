// Module ID: 8410
// Function ID: 67034
// Name: RemoveIcon
// Dependencies: []
// Exports: ChannelOverwritesCheckboxItem

// Module 8410 (RemoveIcon)
function RemoveIcon(item) {
  item = item.item;
  const arg1 = item;
  const channelId = item.channelId;
  const importDefault = channelId;
  const importAll = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = { disabled: item.disabled, accessibilityRole: "button" };
    const intl = arg1(dependencyMap[7]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.N86XcP);
    obj.onPress = function onPress() {
      if (null != onRemove) {
        return onRemove(item);
      } else {
        function removeMemberOrRole(id, name, channelId) {
          let obj = id(closure_3[6]);
          obj = { key: "remove-channel-overwrite-" + id };
          const intl = id(closure_3[7]).intl;
          obj.title = intl.string(id(closure_3[7]).t.GuPYQB);
          const intl2 = id(closure_3[7]).intl;
          obj = { name };
          obj.content = intl2.format(id(closure_3[7]).t.xERCnZ, obj);
          const intl3 = id(closure_3[7]).intl;
          obj.confirmText = intl3.string(id(closure_3[7]).t.fKxYb0);
          obj.onConfirm = function onConfirm() {
            const result = arg1(closure_3[8]).clearPermissionOverwrite(arg2, arg0);
            result.then(() => {
              const result = callback(closure_3[9]).memberOrRoleRemovedToast(closure_1);
            });
          };
          obj.showConfirmModal(obj);
        }(item.id, item.name, channelId);
      }
    };
    obj = {};
    let prop;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    obj.style = prop;
    obj.children = closure_7(arg1(dependencyMap[11]).CircleXIcon, obj);
    tmp3Result = closure_7(arg1(dependencyMap[10]).PressableOpacity, obj);
    const tmp3 = closure_7;
    const tmp6 = closure_7;
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
  let onPress;
  let showRemove;
  let showType;
  let start;
  let subLabel;
  let trailing;
  ({ item, subLabel, trailing } = arg0);
  ({ disabled, channelId, showType, showRemove, start, end, onPress, accessibilityRole, accessibilityState, accessible } = arg0);
  let obj = {};
  obj = { size: "lg", color: item.colorString };
  obj.icon = callback(arg1(dependencyMap[13]).ShieldUserIcon, obj);
  obj.label = item.name;
  if (showType) {
    subLabel = importAll(dependencyMap[14]).getRowTypeLabel(item.rowType);
    const obj3 = importAll(dependencyMap[14]);
  }
  obj.subLabel = subLabel;
  obj.start = start;
  obj.end = end;
  if (showRemove) {
    obj = { item, channelId };
    trailing = callback(RemoveIcon, obj);
  }
  obj.trailing = trailing;
  obj.onPress = onPress;
  obj.disabled = disabled;
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.accessible = accessible;
  return callback(arg1(dependencyMap[12]).TableRow, obj);
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
  let onPress;
  let onRemove;
  let showRemove;
  let start;
  let trailing;
  ({ item, trailing } = arg0);
  ({ channelId, showRemove, onRemove, guildId, start, end, onPress, disabled, accessibilityRole, accessibilityState, accessible } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.nameWrapper };
  obj = { backgroundColor: null, alignItems: null, flexDirection: null, borderRadius: null };
  const items = [, ];
  ({ name: arr[0], memberName: arr[1] } = tmp);
  obj.style = items;
  obj.children = item.name;
  const items1 = [callback(arg1(dependencyMap[15]).Text, obj), ];
  let tmp4 = null;
  if (item.rowType === RowType.OWNER) {
    obj = { size: arg1(dependencyMap[16]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[17]), disableColor: true, style: tmp.ownerIcon };
    tmp4 = callback(arg1(dependencyMap[16]).Icon, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  const obj1 = {};
  const obj2 = {};
  const user = user.getUser(item.id);
  let avatarSource;
  if (null != user) {
    avatarSource = user.getAvatarSource(guildId);
  }
  obj2.source = avatarSource;
  obj2.size = arg1(dependencyMap[16]).AvatarSizes.SMALL;
  obj1.icon = callback(arg1(dependencyMap[16]).Avatar, obj2);
  obj1.label = closure_8(View, obj);
  obj1.subLabel = item.username;
  obj1.start = start;
  obj1.end = end;
  if (showRemove) {
    const obj3 = { item, channelId, onRemove };
    trailing = callback(RemoveIcon, obj3);
  }
  obj1.trailing = trailing;
  obj1.onPress = onPress;
  obj1.disabled = disabled;
  obj1.accessibilityRole = accessibilityRole;
  obj1.accessibilityState = accessibilityState;
  obj1.accessible = accessible;
  return callback(arg1(dependencyMap[12]).TableRow, obj1);
}
function EmptyRoleItem(item) {
  item = item.item;
  let obj = {};
  obj = { source: importDefault(dependencyMap[18]), color: item.colorString, size: arg1(dependencyMap[16]).IconSizes.MEDIUM, style: callback2().roleIcon };
  obj.icon = callback(arg1(dependencyMap[16]).Icon, obj);
  obj.label = item.name;
  return callback(arg1(dependencyMap[12]).TableRow, obj);
}
class ChannelOverwritesItem {
  constructor(arg0) {
    item = global.item;
    obj = Object.create(null);
    obj.item = 0;
    merged = Object.assign(global, obj);
    rowType = item.rowType;
    if (RowType.ADMINISTRATOR !== rowType) {
      tmp17 = RowType;
      if (RowType.ROLE !== rowType) {
        tmp3 = RowType;
        if (RowType.OWNER !== rowType) {
          tmp4 = RowType;
          if (RowType.MEMBER !== rowType) {
            tmp5 = RowType;
            if (RowType.EMPTY_STATE === rowType) {
              tmp6 = jsx;
              tmp7 = EmptyRoleItem;
              obj = {};
              obj.item = item;
              tmp8 = obj;
              tmp9 = merged;
              merged1 = Object.assign(merged);
              return jsx(EmptyRoleItem, obj);
            } else {
              return null;
            }
          }
        }
        tmp11 = jsx;
        tmp12 = MemberItem;
        obj1 = {};
        obj1.item = item;
        tmp13 = obj1;
        tmp14 = merged;
        merged2 = Object.assign(merged);
        return jsx(MemberItem, obj1);
      }
    }
    obj2 = { item };
    merged3 = Object.assign(merged);
    return jsx(RoleItem, obj2);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const RowType = arg1(dependencyMap[3]).RowType;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[5]).createStyles({ nameWrapper: { lineHeight: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200455554034322, paddingTop: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000340456021138, flex: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020773567272207415 }, name: { paddingRight: 4 }, memberName: { flexShrink: 1 }, ownerIcon: { alignSelf: "center" }, roleIcon: {}, rowRemoveIconDisabled: { opacity: 0.3 } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default ChannelOverwritesItem;
export const ChannelOverwritesCheckboxItem = function ChannelOverwritesCheckboxItem(checked) {
  let accessibilityRole;
  let accessibilityState;
  checked = checked.checked;
  let obj = Object.create(null);
  obj.checked = 0;
  const merged = Object.assign(checked, obj);
  obj = arg1(dependencyMap[19]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = {};
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  obj["accessible"] = true;
  obj["accessibilityRole"] = accessibilityRole;
  obj["accessibilityState"] = accessibilityState;
  obj["trailing"] = callback(arg1(dependencyMap[20]).FormCheckbox, { checked });
  return callback(ChannelOverwritesItem, obj);
};
