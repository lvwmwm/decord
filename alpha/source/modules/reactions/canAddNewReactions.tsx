// Module ID: 8210
// Function ID: 8211
// Name: canAddNewReactions
// Dependencies: [6109, 4809, 1087, 2]
// Exports: default

// Module 8210 (canAddNewReactions)
import Constants from "Constants" /* 1087 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6109 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/reactions/canAddNewReactions.tsx");

export default (getGuildId) => {
  const guildId = getGuildId.getGuildId();
  const canChatInGuildResult = (null != guildId && GuildVerificationStore.canChatInGuild(guildId) && PermissionStore.can(Permissions.ADD_REACTIONS, getGuildId) || getGuildId.isPrivate()) && !getGuildId.isSystemDM();
  return canChatInGuildResult;
};
