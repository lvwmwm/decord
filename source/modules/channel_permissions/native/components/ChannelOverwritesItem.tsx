// Module ID: 8421
// Function ID: 67106
// Name: RemoveIcon
// Dependencies: [31, 27, 1849, 7485, 33, 4130, 4475, 1212, 4140, 3830, 4660, 5776, 5165, 8422, 8413, 4126, 1273, 8423, 8424, 3848, 7497, 2]
// Exports: ChannelOverwritesCheckboxItem

// Module 8421 (RemoveIcon)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RowType } from "RowType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function RemoveIcon(item) {
  item = item.item;
  const channelId = item.channelId;
  const onRemove = item.onRemove;
  let tmp3Result = null;
  if (null != channelId) {
    let obj = { disabled: item.disabled, accessibilityRole: "button" };
    let intl = item(1212).intl;
    obj.accessibilityLabel = intl.string(item(1212).t.N86XcP);
    obj.onPress = function onPress() {
      if (null != onRemove) {
        return onRemove(item);
      } else {
        (function removeMemberOrRole(id, name, channelId) {
          let closure_0 = id;
          let closure_1 = name;
          let closure_2 = channelId;
          let obj = item(outer2_3[6]);
          obj = { key: "remove-channel-overwrite-" + id };
          const intl = item(outer2_3[7]).intl;
          obj.title = intl.string(item(outer2_3[7]).t.GuPYQB);
          const intl2 = item(outer2_3[7]).intl;
          obj = { name };
          obj.content = intl2.format(item(outer2_3[7]).t.xERCnZ, obj);
          const intl3 = item(outer2_3[7]).intl;
          obj.confirmText = intl3.string(item(outer2_3[7]).t.fKxYb0);
          obj.onConfirm = function onConfirm() {
            let result = channelId(outer3_3[8]).clearPermissionOverwrite(closure_2, closure_0);
            result.then(() => {
              const result = item(outer4_3[9]).memberOrRoleRemovedToast(outer1_1);
            });
          };
          obj.showConfirmModal(obj);
        })(item.id, item.name, channelId);
      }
    };
    obj = {};
    let prop;
    if (item.disabled) {
      prop = tmp.rowRemoveIconDisabled;
    }
    obj.style = prop;
    obj.children = closure_7(item(5776).CircleXIcon, obj);
    tmp3Result = closure_7(item(4660).PressableOpacity, obj);
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
  obj.icon = callback(require(8422) /* ShieldUserIcon */.ShieldUserIcon, obj);
  obj.label = item.name;
  if (showType) {
    subLabel = importAll(8413).getRowTypeLabel(item.rowType);
    const obj3 = importAll(8413);
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
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
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
  obj = { style: null, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active" };
  const items = [, ];
  ({ name: arr[0], memberName: arr[1] } = tmp);
  obj.style = items;
  obj.children = item.name;
  const items1 = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp4 = null;
  if (item.rowType === RowType.OWNER) {
    obj = { size: require(1273) /* Button */.Icon.Sizes.REFRESH_SMALL_16, source: importDefault(8423), disableColor: true, style: tmp.ownerIcon };
    tmp4 = callback(require(1273) /* Button */.Icon, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  const obj1 = {};
  const obj2 = {};
  user = user.getUser(item.id);
  let avatarSource;
  if (null != user) {
    avatarSource = user.getAvatarSource(guildId);
  }
  obj2.source = avatarSource;
  obj2.size = require(1273) /* Button */.AvatarSizes.SMALL;
  obj1.icon = callback(require(1273) /* Button */.Avatar, obj2);
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
  return callback(require(5165) /* TableRowInner */.TableRow, obj1);
}
function EmptyRoleItem(item) {
  item = item.item;
  let obj = {};
  obj = { source: importDefault(8424), color: item.colorString, size: require(1273) /* Button */.IconSizes.MEDIUM, style: callback2().roleIcon };
  obj.icon = callback(require(1273) /* Button */.Icon, obj);
  obj.label = item.name;
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
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
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ nameWrapper: { flexDirection: "row", alignItems: "flex-end", marginRight: 16 }, name: { paddingRight: 4 }, memberName: { flexShrink: 1 }, ownerIcon: { alignSelf: "center" }, roleIcon: { height: 30, width: 30 }, rowRemoveIconDisabled: { opacity: 0.3 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_permissions/native/components/ChannelOverwritesItem.tsx");

export default ChannelOverwritesItem;
export const ChannelOverwritesCheckboxItem = function ChannelOverwritesCheckboxItem(checked) {
  let accessibilityRole;
  let accessibilityState;
  checked = checked.checked;
  let obj = Object.create(null);
  obj.checked = 0;
  const merged = Object.assign(checked, obj);
  obj = require(3848) /* useCheckboxA11yNative */;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = {};
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const merged1 = Object.assign(merged);
  obj["accessible"] = true;
  obj["accessibilityRole"] = accessibilityRole;
  obj["accessibilityState"] = accessibilityState;
  obj["trailing"] = callback(require(7497) /* FormCheckbox */.FormCheckbox, { checked });
  return callback(ChannelOverwritesItem, obj);
};
