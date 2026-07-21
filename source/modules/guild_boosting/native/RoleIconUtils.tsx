// Module ID: 5486
// Function ID: 46807
// Name: useRoleIcon
// Dependencies: []
// Exports: getRoleIcon, useRoleIcon

// Module 5486 (useRoleIcon)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const roleId = guildId.roleId;
  const importDefault = roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  const dependencyMap = num;
  let React;
  let closure_4;
  const items = [closure_5, closure_4];
  const items1 = [guildId, roleId];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => {
    const obj = { guild: guild.getGuild(guildId) };
    let role;
    if (null != guildId) {
      if (null != roleId) {
        role = role.getRole(guildId, roleId);
      }
    }
    obj.role = role;
    return obj;
  }, items1);
  const guild = stateFromStoresObject.guild;
  React = guild;
  const role = stateFromStoresObject.role;
  closure_4 = role;
  const items2 = [guild, role, roleId, num];
  return React.useMemo(() => {
    let customIconSrc;
    let unicodeEmoji;
    if (null != guild) {
      if (null != roleId) {
        if (obj5.canGuildUseRoleIcons(guild, role)) {
          let obj = guildId(num[5]);
          let roleIconData = obj.getRoleIconData(role);
          if (null == roleIconData) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let tmp4;
          if (null != customIconSrc) {
            obj = { uri: customIconSrc };
            tmp4 = obj;
          }
          obj = { source: tmp4, unicodeEmoji };
          let name;
          if (null != role) {
            name = role.name;
          }
          let str = "";
          if (null != name) {
            str = name;
          }
          obj.name = str;
          obj.size = 6;
          return closure_6(roleId(6[6]), obj);
        }
        const obj5 = guildId(num[5]);
      }
    }
  }, items2);
};
export const getRoleIcon = function getRoleIcon(roleId) {
  let customIconSrc;
  let unicodeEmoji;
  roleId = roleId.roleId;
  const guild = guild.getGuild(roleId.guildId);
  if (null != guild) {
    if (null != roleId) {
      const role = role.getRole(guild.id, roleId);
      if (null != role) {
        let obj = arg1(dependencyMap[5]);
        if (obj.canGuildUseRoleIcons(guild, role)) {
          let roleIconData = arg1(dependencyMap[5]).getRoleIconData(role);
          if (null == roleIconData) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          if (null == customIconSrc) {
            let surrogates;
            if (null != unicodeEmoji) {
              surrogates = unicodeEmoji.surrogates;
            }
          }
          obj = { source: customIconSrc, name: role.name, size: roleId.size };
          let surrogates1;
          if (null != unicodeEmoji) {
            surrogates1 = unicodeEmoji.surrogates;
          }
          obj.unicodeEmoji = surrogates1;
          const intl = arg1(dependencyMap[7]).intl;
          obj = { name: role.name };
          obj.alt = intl.formatToPlainString(arg1(dependencyMap[7]).t.9+YWrE, obj);
          return obj;
        }
      }
    }
  }
};
