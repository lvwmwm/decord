// Module ID: 11912
// Function ID: 11913
// Name: conjureSharedProjectHome
// Dependencies: [4663, 6501, 2]
// Exports: canLaunchSharedProject, getSharedProjectHomeGuildId

// Module 11912 (conjureSharedProjectHome)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6501 */;
import GuildStore from "GuildStore" /* 4663 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharedProjectHome.tsx");

export function getSharedProjectHomeGuildId(guild_id) {
  guild_id = guild_id.guild_id;
  let tmp = null;
  if ("guild" === guild_id.install_scope) {
    tmp = null;
    if (null != guild_id) {
      let tmp3 = null;
      if (null != GuildStore.getGuild(guild_id)) {
        tmp3 = guild_id;
      }
      tmp = tmp3;
    }
  }
  return tmp;
}
export function canLaunchSharedProject(guild_id) {
  guild_id = guild_id.guild_id;
  let tmp = null;
  if ("guild" === guild_id.install_scope) {
    tmp = null;
    if (null != guild_id) {
      let tmp3 = null;
      if (null != GuildStore.getGuild(guild_id)) {
        tmp3 = guild_id;
      }
      tmp = tmp3;
    }
  }
  let hasItem = null != tmp;
  if (hasItem) {
    let supported_surfaces = guild_id.supported_surfaces;
    if (supported_surfaces == null) {
      supported_surfaces = [];
    }
    hasItem = supported_surfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.ACTIVITY);
  }
  return hasItem;
}
