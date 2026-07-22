// Module ID: 5484
// Function ID: 46810
// Name: RoleDot
// Dependencies: []
// Exports: default

// Module 5484 (RoleDot)
function RoleDot(color) {
  color = color.color;
  let obj = {};
  const items = [callback2().roleDot, ];
  obj = {};
  if (null == color) {
    color = closure_7;
  }
  obj.backgroundColor = color;
  items[1] = obj;
  obj.style = items;
  return closure_9(View, obj);
}
class RoleItem {
  constructor(arg0) {
    role = global.role;
    arg1 = role;
    guildId = global.guildId;
    importDefault = guildId;
    colorString = global.color;
    dependencyMap = undefined;
    importAll = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    renderContent = function renderContent() {
      let obj = {};
      if (closure_5) {
        obj = { roleId: role.id, guildId };
        let colorString;
        if (null != role) {
          colorString = role.colorString;
        }
        let tmp17;
        if (null != colorString) {
          tmp17 = colorString;
        }
        obj.roleColor = tmp17;
        obj.size = 12;
        obj.displayRoleIcon = false;
        let tmp3Result = tmp3(guildId(name[16]), obj);
        const tmp11 = guildId(name[16]);
      } else {
        obj = {};
        let tmp7;
        if (null != colorString) {
          tmp7 = colorString;
        }
        obj.color = tmp7;
        tmp3Result = tmp3(closure_13, obj);
        const tmp4 = closure_13;
      }
      const items = [tmp3Result, roleIcon, callback(role(name[17]).Text, { variant: "text-xs/medium", children: name })];
      obj.children = items;
      return closure_11(closure_10, obj);
    };
    tmp = closure_12();
    if (role.name.length <= MAX_VISUAL_ROLE_LENGTH) {
      name = role.name;
    } else {
      name = role.name;
      tmp2 = MAX_VISUAL_ROLE_LENGTH;
      num = 0;
      tmp3 = globalThis;
      _HermesInternal = HermesInternal;
      str = "";
      str2 = "...";
      name = "" + require("module_0") + "...";
    }
    dependencyMap = name;
    if (null == colorString) {
      colorString = role.colorString;
    }
    importAll = colorString;
    obj = arg1(dependencyMap[8]);
    obj = { guildId, roleId: role.id, size: 12 };
    roleIcon = obj.useRoleIcon(obj);
    closure_4 = roleIcon;
    tags = role.tags;
    guild_connections = undefined;
    if (null != tags) {
      guild_connections = tags.guild_connections;
    }
    closure_5 = undefined !== guild_connections;
    DeveloperMode = arg1(dependencyMap[9]).DeveloperMode;
    setting = DeveloperMode.useSetting();
    obj3 = importDefault(dependencyMap[10]);
    items = [, ];
    items[0] = role.id;
    items[1] = name;
    items1 = [, , ];
    items1[0] = role;
    items1[1] = name;
    items1[2] = roleIcon;
    callback = importAll.useCallback(() => {
      role(name[11]).copy(role.id);
      const obj = role(name[11]);
      role(name[12]).roleIdCopied(name);
    }, items);
    tmp9 = jsx;
    if (setting) {
      tmp12 = arg1;
      tmp13 = dependencyMap;
      num2 = 18;
      obj1 = {};
      obj1.onPress = callback;
      tmp14 = undefined;
      if (setting) {
        if (obj3.useExperiment({ location: "RoleItem" }, { autoTrackExposure: false }).tidaWebformEnabled) {
          tmp14 = tmp8;
        }
      }
      obj1.onLongPress = tmp14;
      str3 = "button";
      obj1.accessibilityRole = "button";
      obj1.accessibilityLabel = name;
      tmp15 = arg1;
      tmp16 = dependencyMap;
      num3 = 13;
      intl = arg1(dependencyMap[13]).intl;
      obj1.accessibilityHint = intl.string(arg1(dependencyMap[13]).t.sMsaLg);
      obj1.style = tmp.role;
      obj1.children = renderContent();
      tmp9Result = tmp9(arg1(dependencyMap[18]).PressableHighlight, obj1);
    } else {
      tmp10 = closure_4;
      obj2 = {};
      obj2.style = tmp.role;
      obj2.children = renderContent();
      tmp9Result = tmp9(closure_4, obj2);
    }
    return tmp9Result;
  }
}
function RolesList(guildMemberRoleIds) {
  guildMemberRoleIds = guildMemberRoleIds.guildMemberRoleIds;
  const arg1 = guildMemberRoleIds;
  const guildId = guildMemberRoleIds.guildId;
  const importDefault = guildId;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_6];
  const items1 = [guildMemberRoleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const manyRoles = manyRoles.getManyRoles(guildId, guildMemberRoleIds);
    return manyRoles.sort(guildMemberRoleIds(closure_2[20]).sortRolesByVerification);
  }, items1);
  let tmp2 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: tmp.roleContainer, children: stateFromStoresArray.map((id) => callback(closure_14, { role: id, guildId }, id.id)) };
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ DEFAULT_ROLE_COLOR_HEX: closure_7, MAX_VISUAL_ROLE_LENGTH: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { roleContainer: {} };
obj = { -871710126: 65535, -1878764875: 1912668160, -1956545097: 1, 76486723: 1, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.role = obj;
const obj1 = { "Bool(false)": "headerChannelContainer", "Bool(false)": "targetFrames", "Bool(false)": "jest", borderRadius: importDefault(dependencyMap[7]).radii.round };
obj.roleDot = obj1;
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/user_profile/native/UserProfileRolesCard.tsx");

export default function UserProfileRolesCard(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const guildId = userId.guildId;
  const importDefault = guildId;
  let obj = arg1(dependencyMap[19]);
  const items = [closure_5];
  const items1 = [userId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => member.getMember(guildId, userId), items1);
  let roles;
  if (null != stateFromStores) {
    roles = stateFromStores.roles;
  }
  if (null == roles) {
    roles = [];
  }
  let tmp2 = null;
  if (0 !== roles.length) {
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj.title = intl.string(arg1(dependencyMap[13]).t.LPJmL/);
    obj.style = userId.style;
    obj = { guildId, guildMemberRoleIds: roles };
    obj.children = callback(RolesList, obj);
    tmp2 = callback(importDefault(dependencyMap[21]), obj);
    const tmp6 = importDefault(dependencyMap[21]);
  }
  return tmp2;
};
export { RoleItem };
