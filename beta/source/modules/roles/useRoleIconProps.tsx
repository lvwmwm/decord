// Module ID: 6607
// Function ID: 6608
// Name: useRoleIconProps
// Dependencies: [19, 2102, 2067, 504, 6608, 2]
// Exports: computeRoleIconRole, getRoleIconProps, useRoleIconProps, useRoleIconPropsForPreview

// Module 6607 (useRoleIconProps)
import RoleIconUtils from "RoleIconUtils" /* 6608 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/roles/useRoleIconProps.tsx");

export const useRoleIconProps = function useRoleIconProps(guildId) {
  guildId = guildId.guildId;
  const roleId = guildId.roleId;
  let num = guildId.size;
  if (num === undefined) {
    num = 20;
  }
  let role = guildId.role;
  let guild = guildId.guild;
  let obj = guildId(roleId[3]);
  const items = [guild, role];
  const items1 = [guildId, roleId, role, guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp3 = role;
    const obj = GuildStore;
    if (GuildStore !== undefined) {
      if (GuildRoleStore !== undefined) {
        if (guild == null) {
          guild = obj.getGuild(tmp);
        }
        if (tmp3 == null) {
          role = undefined;
          if (null != guildId) {
            if (null != roleId) {
              role = obj2.getRole(tmp, tmp2);
            }
          }
          tmp3 = role;
        }
        let tmp7;
        if (null != guild) {
          if (null != tmp3) {
            const obj3 = RoleIconUtils;
            if (obj3.canGuildUseRoleIcons(guild, tmp3)) {
              tmp7 = tmp3;
            }
          }
        }
        return tmp7;
      }
    }
  }, items1);
  const items2 = [stateFromStores, num];
  return num.useMemo(() => {
    let tmp3;
    if (null != stateFromStores) {
      const obj = RoleIconUtils;
      const roleIconData = obj.getRoleIconData(tmp, tmp2);
      if (null != roleIconData) {
        const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: num, unicodeEmoji: roleIconData.unicodeEmoji };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        tmp3 = obj3;
      }
    }
    return tmp3;
  }, items2);
};
export const getRoleIconProps = function getRoleIconProps(roleIconRole, size) {
  if (null != roleIconRole) {
    const obj = RoleIconUtils;
    const roleIconData = obj.getRoleIconData(roleIconRole, size);
    if (null != roleIconData) {
      const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size, unicodeEmoji: roleIconData.unicodeEmoji };
      ({ name: obj2.name, id: obj2.roleId } = roleIconRole);
      return obj3;
    }
  }
};
export const useRoleIconPropsForPreview = function useRoleIconPropsForPreview(guildId, role) {
  _require = guildId;
  dependencyMap = role;
  let obj = require("get initialized");
  const items = [GuildStore, GuildRoleStore];
  const items1 = [guildId, role];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild;
    let roleId;
    const obj = { guildId, role };
    ({ guildId, roleId, role, guild } = obj);
    const obj2 = GuildStore;
    if (GuildStore !== undefined) {
      if (GuildRoleStore !== undefined) {
        if (guild == null) {
          guild = obj2.getGuild(guildId);
        }
        if (role == null) {
          let role1;
          if (null != guildId) {
            if (null != roleId) {
              role1 = obj3.getRole(guildId, roleId);
            }
          }
          role = role1;
        }
        let tmp3;
        if (null != guild) {
          if (null != role) {
            const obj4 = RoleIconUtils;
            if (obj4.canGuildUseRoleIcons(guild, role)) {
              tmp3 = role;
            }
          }
        }
        return tmp3;
      }
    }
  }, items1);
  const items2 = [stateFromStores];
  return stateFromStores.useMemo(() => {
    let tmp2;
    if (null != stateFromStores) {
      const obj = RoleIconUtils;
      const roleIconData = obj.getRoleIconData(tmp, undefined);
      if (null != roleIconData) {
        const obj3 = { src: roleIconData.customIconSrc, name: null, roleId: null, size: "Array", unicodeEmoji: roleIconData.unicodeEmoji };
        ({ name: obj2.name, id: obj2.roleId } = stateFromStores);
        tmp2 = obj3;
      }
    }
    return tmp2;
  }, items2);
};
export const computeRoleIconRole = function computeRoleIconRole(arg0) {
  let guild;
  let guildId;
  let role;
  let roleId;
  ({ guildId, roleId, role, guild } = arg0);
  let obj = arg1;
  if (arg1 === undefined) {
    obj = GuildStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = GuildRoleStore;
  }
  if (guild == null) {
    guild = obj.getGuild(guildId);
  }
  if (role == null) {
    let role1;
    if (null != guildId) {
      if (null != roleId) {
        role1 = obj2.getRole(guildId, roleId);
      }
    }
    role = role1;
  }
  if (null != guild) {
    if (null != role) {
      const obj3 = RoleIconUtils;
      if (obj3.canGuildUseRoleIcons(guild, role)) {
        return role;
      }
    }
  }
};
