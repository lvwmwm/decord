// Module ID: 5486
// Function ID: 46843
// Name: useRoleIcon
// Dependencies: [31, 1910, 1838, 33, 566, 5487, 5488, 1212, 2]
// Exports: getRoleIcon, useRoleIcon

// Module 5486 (useRoleIcon)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_boosting/native/RoleIconUtils.tsx");

export const useRoleIcon = function useRoleIcon(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let guild;
  let role;
  const items = [closure_5, role];
  const items1 = [guildId, roleId];
  const stateFromStoresObject = guildId(num[4]).useStateFromStoresObject(items, () => {
    const obj = { guild: outer1_5.getGuild(guildId) };
    let role;
    if (null != guildId) {
      if (null != roleId) {
        role = role.getRole(guildId, roleId);
      }
    }
    obj.role = role;
    return obj;
  }, items1);
  guild = stateFromStoresObject.guild;
  role = stateFromStoresObject.role;
  const items2 = [guild, role, roleId, num];
  return guild.useMemo(() => {
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
          return outer1_6(roleId(6[6]), obj);
        }
        obj5 = guildId(num[5]);
      }
    }
  }, items2);
};
export const getRoleIcon = function getRoleIcon(roleId) {
  let customIconSrc;
  let unicodeEmoji;
  roleId = roleId.roleId;
  guild = guild.getGuild(roleId.guildId);
  if (null != guild) {
    if (null != roleId) {
      role = role.getRole(guild.id, roleId);
      if (null != role) {
        let obj = require(5487) /* getRoleIconSource */;
        if (obj.canGuildUseRoleIcons(guild, role)) {
          let roleIconData = require(5487) /* getRoleIconSource */.getRoleIconData(role);
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
          const intl = require(1212) /* getSystemLocale */.intl;
          obj = { name: role.name };
          obj.alt = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["9+YWrE"], obj);
          return obj;
        }
      }
    }
  }
};
