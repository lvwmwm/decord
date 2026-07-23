// Module ID: 11306
// Function ID: 87955
// Name: AppLauncherRoleOption
// Dependencies: [57, 31, 1910, 33, 624, 11299, 4098, 11304, 1934, 11304, 2]
// Exports: default

// Module 11306 (AppLauncherRoleOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  let autoFocus;
  let channel;
  let _slicedToArray;
  let hasError;
  let importDefault;
  let onRolePress;
  let style;
  option = option.option;
  ({ initialValue: importDefault, onRolePress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(channel.useState(() => {
    let roleId = null;
    if (null != closure_1) {
      roleId = null;
      if ("roleMention" === closure_1.type) {
        roleId = closure_1.roleId;
      }
    }
    return roleId;
  }), 2);
  const first = tmp[0];
  let closure_8 = tmp[1];
  let obj = option(onRolePress[4]);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != first) {
      let role;
      if (null != guild_id) {
        role = onPress.getRole(guild_id, first);
      }
      return role;
    }
  });
  const items1 = [onRolePress, option.name, stateFromStores, first];
  const effect = channel.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      const obj = { role: null };
      onRolePress(obj);
    }
  }, items1);
  obj = { style, option, hasError, selected: null != stateFromStores };
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj.selectedItemName = name;
  obj.onPress = function onPress() {
    if (null != onPress) {
      onPress();
    }
    let obj = outer1_1(onRolePress[6]);
    obj = {
      option,
      channel,
      onRolePress(role) {
        role = role.role;
        outer1_8(role.id);
        outer1_2({ role });
      },
      onActionSheetDismiss: _slicedToArray
    };
    obj.openLazy(option(onRolePress[8])(onRolePress[7], onRolePress.paths), option(onRolePress[9]).APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.leading = guild_id(option(onRolePress[9]).RoleIcon, { role: stateFromStores });
  obj.autoFocus = autoFocus;
  return guild_id(importDefault(onRolePress[5]), obj);
};
