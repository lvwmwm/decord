// Module ID: 11295
// Function ID: 87880
// Name: AppLauncherRoleOption
// Dependencies: []
// Exports: default

// Module 11295 (AppLauncherRoleOption)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleOption.tsx");

export default function AppLauncherRoleOption(option) {
  let autoFocus;
  let channel;
  let hasError;
  let onRolePress;
  let style;
  option = option.option;
  const arg1 = option;
  ({ initialValue: closure_1, onRolePress } = option);
  const dependencyMap = onRolePress;
  ({ onActionSheetDismiss: closure_3, channel } = option);
  const React = channel;
  const onPress = option.onPress;
  const jsx = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  const tmp = callback(React.useState(() => {
    let roleId = null;
    if (null != lib) {
      roleId = null;
      if ("roleMention" === lib.type) {
        roleId = lib.roleId;
      }
    }
    return roleId;
  }), 2);
  const first = tmp[0];
  let closure_8 = tmp[1];
  let obj = arg1(dependencyMap[4]);
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
  const effect = React.useEffect(() => {
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
    let obj = lib(onRolePress[6]);
    obj = {
      option,
      channel,
      onRolePress(role) {
        role = role.role;
        callback2(role.id);
        callback({ role });
      },
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onRolePress[8])(onRolePress[7], onRolePress.paths), option(onRolePress[9]).APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.leading = jsx(arg1(dependencyMap[9]).RoleIcon, { role: stateFromStores });
  obj.autoFocus = autoFocus;
  return jsx(importDefault(dependencyMap[5]), obj);
};
