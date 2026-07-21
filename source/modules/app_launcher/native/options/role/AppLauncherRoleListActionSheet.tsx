// Module ID: 11293
// Function ID: 87876
// Name: getRoleColor
// Dependencies: []
// Exports: default

// Module 11293 (getRoleColor)
function getRoleColor(role) {
  return null != role.colorString ? role.colorString : DEFAULT_ROLE_COLOR_HEX;
}
class RoleIcon {
  constructor(arg0) {
    role = global.role;
    if (null != role) {
      obj = {};
      tmp2 = getRoleColor;
      obj.backgroundColor = getRoleColor(role);
      tmp = obj;
    }
    tmp3 = jsx;
    obj = {};
    tmp4 = importDefault(dependencyMap[7]);
    tmp5 = jsx;
    obj1 = { size: "sm" };
    str = "interactive-text-default";
    if (null != role) {
      str = "white";
    }
    obj1.color = str;
    obj.icon = tmp5(arg1(dependencyMap[8]).ShieldUserIcon, obj1);
    obj.wrapperStyle = {};
    return tmp3(tmp4, obj);
  }
}
class RoleRow {
  constructor(arg0) {
    guildRole = global.guildRole;
    arg1 = guildRole;
    guildId = global.guildId;
    importDefault = guildId;
    obj = Object.create(null);
    obj.guildRole = 0;
    obj.guildId = 0;
    merged = Object.assign(global, obj);
    obj = arg1(dependencyMap[9]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => {
      const roleMemberCount = roleMemberCount.getRoleMemberCount(guildId);
      let tmp2;
      if (null != roleMemberCount) {
        tmp2 = roleMemberCount[closure_0.id];
      }
      return tmp2;
    });
    items1 = [];
    items1[0] = guildId;
    tmp4 = isEveryoneRole(guildRole);
    effect = closure_5.useEffect(() => {
      const memberCounts = callback(closure_3[10]).fetchMemberCounts(guildId);
    }, items1);
    tmp6 = jsx;
    obj1 = {};
    obj2 = { "Null": true, "Null": 15.1, "Null": 253 };
    obj2.children = guildRole.name;
    obj1.label = jsx(arg1(dependencyMap[12]).Text, obj2);
    obj1.icon = jsx(RoleIcon, { role: guildRole });
    tmp7 = null;
    if (!tmp4) {
      tmp7 = null;
      if (null != stateFromStores) {
        tmp8 = jsxs;
        tmp9 = arg1;
        tmp10 = dependencyMap;
        obj3 = {};
        tmp11 = jsx;
        num = 13;
        items2 = [, , ];
        items2[0] = jsx(arg1(dependencyMap[13]).GroupIcon, {});
        str = " ";
        items2[1] = " ";
        items2[2] = stateFromStores;
        obj3.children = items2;
        tmp7 = jsxs(arg1(dependencyMap[12]).Text, obj3);
      }
    }
    obj1.trailing = tmp7;
    merged1 = Object.assign(merged);
    return tmp6(arg1(dependencyMap[11]).TableRow, obj1, guildRole.id);
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
const isEveryoneRole = arg1(dependencyMap[3]).isEveryoneRole;
let closure_8 = importDefault(dependencyMap[4]);
const DEFAULT_ROLE_COLOR_HEX = arg1(dependencyMap[5]).DEFAULT_ROLE_COLOR_HEX;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx");

export default function AppLauncherRoleListActionSheet(channel) {
  let onActionSheetDismiss;
  ({ onRolePress: closure_0, onActionSheetDismiss } = channel);
  const importDefault = onActionSheetDismiss;
  function handleRolePress(role) {
    callback({ role: role.role });
    onActionSheetDismiss(first[15]).hideActionSheet("AppLauncherRoleListActionSheet");
    onActionSheetDismiss();
  }
  const importAll = channel.channel.guild_id;
  const tmp = callback(React.useState(""), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp[1];
  const ref = React.useRef(null);
  const React = ref;
  let obj = arg1(dependencyMap[9]);
  const items = [handleRolePress];
  const stateFromStores = obj.useStateFromStores(items, () => handleRolePress.getSortedRoles(guild_id));
  let closure_6 = stateFromStores;
  const items1 = [stateFromStores, first];
  const memo = React.useMemo(() => stateFromStores.filter((id) => {
    let tmp = closure_3 === id.id;
    if (!tmp) {
      const trimmed = closure_3.trim();
      tmp = callback(closure_3[14])(trimmed, id.name.toLowerCase());
      const str = id.name;
      const tmp4 = callback(closure_3[14]);
    }
    return tmp;
  }), items1);
  const isEveryoneRole = memo;
  obj = { option: channel.option, onDismiss: onActionSheetDismiss };
  obj = {
    onChange(str) {
      callback2(str.toLowerCase());
      const current = ref.current;
      if (null != current) {
        current.scrollToOffset({ "Null": 1715544575, "Null": 1409286699 });
      }
    }
  };
  const items2 = [callback2(arg1(dependencyMap[17]).AppLauncherListSearchBar, obj), ];
  if (0 === memo.length) {
    let tmp9 = callback2(arg1(dependencyMap[17]).AppLauncherListEmptyState, {});
  } else {
    const obj1 = {
      ref,
      data: memo,
      renderItem(item) {
          item = item.item;
          const index = item.index;
          return callback3(closure_14, {
            guildId: guild_id,
            guildRole: item,
            onPress() {
              callback({ role: item });
            },
            start: 0 === index,
            end: index === memo.length - 1
          });
        }
    };
    tmp9 = callback2(arg1(dependencyMap[17]).AppLauncherList, obj1);
  }
  items2[1] = tmp9;
  obj.children = items2;
  return closure_11(arg1(dependencyMap[16]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY = "AppLauncherRoleListActionSheet";
export { RoleIcon };
export { RoleRow };
